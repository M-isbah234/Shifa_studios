import asyncio
import json
import subprocess
import tempfile
import urllib.request
import websockets
import base64
from PIL import Image
import io
import os

async def generate_gif():
    temp_dir = tempfile.mkdtemp()
    edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    proc = subprocess.Popen([
        edge_path,
        '--headless=new',
        f'--user-data-dir={temp_dir}',
        '--remote-debugging-port=9777',
        '--window-size=960,600',
        '--disable-gpu',
        'http://localhost:3000'
    ])
    
    await asyncio.sleep(2.5)
    
    try:
        req = urllib.request.urlopen('http://127.0.0.1:9777/json')
        tabs = json.loads(req.read().decode())
        page_tab = next(t for t in tabs if t.get('type') == 'page')
        ws_url = page_tab['webSocketDebuggerUrl']
        
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {"id": msg_id, "method": method}
                if params:
                    payload["params"] = params
                await ws.send(json.dumps(payload))
                return json.loads(await ws.recv())

            # Skip opener and arm page
            await send("Runtime.evaluate", {
                "expression": """
                const op = document.getElementById('opener'); 
                if(op) op.remove(); 
                if(typeof ready === 'function') ready();
                document.body.classList.add('ready');
                """
            })
            await asyncio.sleep(1.2)
            
            frames = []
            num_frames = 36
            print(f"Capturing {num_frames} frames...")
            
            for i in range(num_frames):
                # Animate mouse and drift
                t = i / float(num_frames)
                
                # Move mouse in an arc across cards
                mx = 480 + 260 * (0.5 - abs(t - 0.5) * 2)
                my = 300 + 80 * (t * 2 - 1) if t < 0.5 else 300 - 80 * ((t - 0.5) * 2)
                
                # Dispatch mouse move event to trigger hover states & card tilts
                await send("Input.dispatchMouseEvent", {
                    "type": "mouseMoved",
                    "x": mx,
                    "y": my
                })
                
                # Also nudge the canvas drift physics slightly
                await send("Runtime.evaluate", {
                    "expression": f"""
                    if(typeof px !== 'undefined') {{
                        px += 2.2;
                        py -= 1.1;
                    }}
                    """
                })
                
                await asyncio.sleep(0.08)
                
                # Capture frame
                resp = await send("Page.captureScreenshot", {
                    "format": "jpeg",
                    "quality": 80
                })
                img_data = base64.b64decode(resp['result']['data'])
                img = Image.open(io.BytesIO(img_data)).convert('RGB')
                # Resize slightly for crisp, lightweight GIF
                img = img.resize((840, 525), Image.Resampling.LANCZOS)
                frames.append(img)
                print(f"Frame {i+1}/{num_frames} captured")

            print("Processing and compiling GIF...")
            # Quantize frames to a unified palette for crisp colors and small file size
            processed_frames = []
            for idx, f in enumerate(frames):
                p_frame = f.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
                processed_frames.append(p_frame)
            
            out_path = "preview.gif"
            processed_frames[0].save(
                out_path,
                save_all=True,
                append_images=processed_frames[1:],
                optimize=True,
                duration=90,
                loop=0
            )
            size_mb = os.path.getsize(out_path) / (1024 * 1024)
            print(f"Preview GIF successfully created at {out_path} ({size_mb:.2f} MB)")
            
    finally:
        proc.terminate()

asyncio.run(generate_gif())
