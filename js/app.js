
(function(){
const P = [
 {id:"repmax-sports-nutrition-logo",img:"repmax-sports-nutrition-logo",cats:["logos"],t:"RepMax",f:"Branding",bg:"#C72525",c:["#191919", "#C72525", "#F7F7F7", "#7F4E4E"],r:"1199/1200",iw:1199,ih:1200,one:"A logo with the energy of the last rep.",disc:"Logo design",for:"Sports nutrition",del:"Primary logo, variations, color versions"},
 {id:"kozo-logo",img:"kozo-logo",cats:["logos"],t:"Kozo",f:"Branding",bg:"#FE0202",c:["#000000", "#FE0202", "#FFFFFF", "#332D2D"],r:"1080/1080",iw:1080,ih:1080,one:"A geometric red mark with a story folded inside.",disc:"Logo design",for:"Lifestyle brand",del:"Primary logo, variations, color versions"},
 {id:"antidote-clothing-logo",img:"antidote-clothing-logo",cats:["logos"],t:"Antidote Clothing",f:"Branding",bg:"#FFFFFF",c:["#000000", "#FFFFFF", "#C1C1C1", "#383838"],r:"1200/1200",iw:1200,ih:1200,one:"Hand cut letters with skate shop attitude.",disc:"Logo design",for:"Streetwear label",del:"Primary logo, variations, color versions"},
 {id:"karome-store-logo",img:"karome-store-logo",cats:["logos"],t:"Karome Store",f:"Branding",bg:"#013125",c:["#013125", "#C9F68B", "#FFFEFF", "#28523A"],r:"736/736",iw:736,ih:736,one:"A shopping bag hidden in a friendly wordmark.",disc:"Logo design",for:"Online store",del:"Primary logo, variations, color versions"},
 {id:"spire-sportswear-logo",img:"spire-sportswear-logo",cats:["logos"],t:"Spire",f:"Branding",bg:"#E2F802",c:["#000000", "#E2F802", "#FFFFFF", "#64674E"],r:"736/872",iw:736,ih:872,one:"A lightning bolt that never stops moving.",disc:"Logo design",for:"Sportswear brand",del:"Primary logo, variations, color versions"},
 {id:"outcast-logo",img:"outcast-logo",cats:["logos"],t:"Outcast",f:"Branding",bg:"#FE0202",c:["#070101", "#FE0202"],r:"1200/675",iw:1200,ih:675,one:"Raw, painted red type that refuses to behave.",disc:"Logo design",for:"Entertainment brand",del:"Primary logo, variations, color versions"},
 {id:"ruthies-harvest-vintage-mascot-logo",img:"ruthies-harvest-vintage-mascot-logo",cats:["logos"],t:"Ruthie's Harvest",f:"Branding",bg:"#074E21",c:["#FFFFFF", "#074E21", "#AEBF8A", "#57784D"],r:"500/500",iw:500,ih:500,one:"Old school veggies, new fangled twists.",disc:"Logo design",for:"Farm produce",del:"Primary logo, variations, color versions"},
 {id:"march-hare-brewing-co-logo",img:"march-hare-brewing-co-logo",cats:["logos"],t:"March Hare Brewing",f:"Branding",bg:"#F4F5EF",c:["#F4F5EF", "#1E2318", "#575952", "#CBCDC7"],r:"640/640",iw:640,ih:640,one:"A top hat, two ears and a lot of character.",disc:"Logo design",for:"Craft brewery",del:"Primary logo, variations, color versions"},
 {id:"le-moulin-de-saint-denis-theatre-logo",img:"le-moulin-de-saint-denis-theatre-logo",cats:["logos"],t:"Le Moulin de Saint Denis",f:"Branding",bg:"#B29F42",c:["#B29F42", "#F1F1F0"],r:"1080/1080",iw:1080,ih:1080,one:"A spotlight that turns the name into a stage.",disc:"Logo design",for:"Theatre",del:"Primary logo, variations, color versions"},
 {id:"addiba-tech-brand-identity",img:"addiba-tech-brand-identity",cats:["brand-identity"],t:"Addiba",f:"Branding",bg:"#161B73",c:["#161B73", "#F7F6FA", "#6B6986", "#BDBDC7"],r:"736/1104",iw:736,ih:1104,one:"A confident cobalt identity, from app icon to delivery bag.",disc:"Brand identity",for:"Technology company",del:"Logo, color, type, applications, mockups"},
 {id:"vigio-complex-brand-identity",img:"vigio-complex-brand-identity",cats:["brand-identity"],t:"Vigio Complex",f:"Branding",bg:"#1C34EC",c:["#1C34EC", "#010324", "#172594", "#616BB4"],r:"1200/2200",iw:1200,ih:2200,one:"Sharp angles and electric blue, built to scale.",disc:"Brand identity",for:"Real estate developer",del:"Logo, color, type, applications, mockups"},
 {id:"traffic-connect-brand-identity",img:"traffic-connect-brand-identity",cats:["brand-identity"],t:"Traffic Connect",f:"Branding",bg:"#AFE406",c:["#91C307", "#608712", "#0E0E0E", "#384129"],r:"890/1738",iw:890,ih:1738,one:"Neon green you cannot miss, on every touchpoint.",disc:"Brand identity",for:"Mobility company",del:"Logo, color, type, applications, mockups"},
 {id:"zolvex-brand-identity",img:"zolvex-brand-identity",cats:["brand-identity"],t:"Zolvex",f:"Branding",bg:"#A6C181",c:["#060608", "#A6C181", "#2F3B2F", "#5A7451"],r:"736/1104",iw:736,ih:1104,one:"A hexagon mark and a palette that grows with the brand.",disc:"Brand identity",for:"Clean energy company",del:"Logo, color, type, applications, mockups"},
 {id:"parkwise-parking-services-brand-identity",img:"parkwise-parking-services-brand-identity",cats:["brand-identity"],t:"Parkwise",f:"Branding",bg:"#F1C701",c:["#F1C701", "#021F2D", "#34535F", "#BFA82D"],r:"1000/1500",iw:1000,ih:1500,one:"Yellow and navy that read in a dark car park.",disc:"Brand identity",for:"Parking services",del:"Logo, color, type, applications, mockups"},
 {id:"utopia-brand-guidelines",img:"utopia-brand-guidelines",cats:["brand-guidelines"],t:"Utopia",f:"Branding",bg:"#F4F688",c:["#F4F688", "#DCE3E6", "#47443F", "#B9B6BC"],r:"736/1472",iw:736,ih:1472,one:"A guidelines book that makes yellow feel grown up.",disc:"Brand guidelines",for:"Creative studio",del:"Brand guidelines book, usage rules, templates"},
 {id:"no-nora-fashion-brand-guidelines",img:"no-nora-fashion-brand-guidelines",cats:["brand-guidelines"],t:"No Nora",f:"Branding",bg:"#FDF5ED",c:["#FDF5ED", "#B3A7A0", "#242222", "#75716C"],r:"696/1314",iw:696,ih:1314,one:"Bold editorial rules for a brand that refuses to whisper.",disc:"Brand guidelines",for:"Fashion label",del:"Brand guidelines book, usage rules, templates"},
 {id:"minimal-lifestyle-brand-guidelines",img:"minimal-lifestyle-brand-guidelines",cats:["brand-guidelines"],t:"Minimal",f:"Branding",bg:"#E9C56B",c:["#E9C56B", "#5497A8", "#F2F2EB", "#334B54"],r:"696/1361",iw:696,ih:1361,one:"Teal, mustard and plenty of breathing room.",disc:"Brand guidelines",for:"Lifestyle brand",del:"Brand guidelines book, usage rules, templates"},
 {id:"quillaria-skincare-brand-guidelines",img:"quillaria-skincare-brand-guidelines",cats:["brand-guidelines"],t:"Quillaria",f:"Branding",bg:"#20381B",c:["#20381B", "#CFDBC3", "#808B6C"],r:"1200/1200",iw:1200,ih:1200,one:"Botanical calm, written down so it stays that way.",disc:"Brand guidelines",for:"Skincare brand",del:"Brand guidelines book, usage rules, templates"},
 {id:"taste-of-eden-organic-food-brand-guidelines",img:"taste-of-eden-organic-food-brand-guidelines",cats:["brand-guidelines"],t:"Taste of Eden",f:"Branding",bg:"#FABE0D",c:["#FABE0D", "#D8FFDD", "#092A0C", "#4B8E51"],r:"1200/1947",iw:1200,ih:1947,one:"Fresh greens and sunny yellows, from logo to grocery bag.",disc:"Brand guidelines",for:"Organic food brand",del:"Brand guidelines book, usage rules, templates"},
 {id:"silverwood-vineyards-wine-brand-guidelines",img:"silverwood-vineyards-wine-brand-guidelines",cats:["brand-guidelines"],t:"Silverwood Vineyards",f:"Branding",bg:"#F7E4D6",c:["#321710", "#F7E4D6", "#C6A19C"],r:"1000/1500",iw:1000,ih:1500,one:"A wine brand book in blush, cocoa and classic serifs.",disc:"Brand guidelines",for:"Winery",del:"Brand guidelines book, usage rules, templates"},
 {id:"wshinz-brand-guidelines",img:"wshinz-brand-guidelines",cats:["brand-guidelines"],t:"Wshinz",f:"Branding",bg:"#9F6568",c:["#FFFFFF", "#D7C8C2", "#9F6568"],r:"689/1200",iw:689,ih:1200,one:"Seven clear chapters from brand story to stationery.",disc:"Brand guidelines",for:"Lifestyle brand",del:"Brand guidelines book, usage rules, templates"},
 {id:"legacy-equestrian-brand-guidelines",img:"legacy-equestrian-brand-guidelines",cats:["brand-guidelines"],t:"Legacy Equestrian",f:"Branding",bg:"#6F0A0E",c:["#6F0A0E", "#000000", "#F9FAFA", "#533832"],r:"1200/2132",iw:1200,ih:2132,one:"Deep burgundy heritage with modern restraint.",disc:"Brand guidelines",for:"Equestrian brand",del:"Brand guidelines book, usage rules, templates"},
 {id:"chai-tea-cafe-brand-guidelines",img:"chai-tea-cafe-brand-guidelines",cats:["brand-guidelines"],t:"Chai Tea Cafe",f:"Branding",bg:"#7D8032",c:["#FDFEFF", "#7D8032", "#1E1C1D", "#CCCBBE"],r:"1200/2392",iw:1200,ih:2392,one:"An olive and cream system that smells like cardamom.",disc:"Brand guidelines",for:"Tea café",del:"Brand guidelines book, usage rules, templates"},
 {id:"trepala-travel-app-brand-guidelines",img:"trepala-travel-app-brand-guidelines",cats:["brand-guidelines"],t:"Trepala",f:"Branding",bg:"#B8876B",c:["#FCFCFB", "#B8876B", "#111111", "#DBD6CA"],r:"1024/1978",iw:1024,ih:1978,one:"Orange energy and violet calm for a booking app.",disc:"Brand guidelines",for:"Travel app",del:"Brand guidelines book, usage rules, templates"},
 {id:"sland-business-card",img:"sland-business-card",cats:["business-cards"],t:"Sland",f:"Branding",bg:"#23562B",c:["#3F4F5D", "#0A1015"],r:"736/920",iw:736,ih:920,one:"Forest green linen with a quiet curve.",disc:"Business card design",for:"Consulting firm",del:"Front and back design, print ready files"},
 {id:"skild-cosmetic-clinic-business-card",img:"skild-cosmetic-clinic-business-card",cats:["business-cards"],t:"Skild",f:"Branding",bg:"#0D52EE",c:["#0D52EE", "#11143B", "#FCFCFC", "#7199E6"],r:"664/644",iw:664,ih:644,one:"Clinical clean on one side, bold blue on the other.",disc:"Business card design",for:"Cosmetic clinic",del:"Front and back design, print ready files"},
 {id:"redsoft-tech-business-card",img:"redsoft-tech-business-card",cats:["business-cards"],t:"Redsoft",f:"Branding",bg:"#A32015",c:["#FFFFFF", "#380505", "#A32015", "#373737"],r:"736/828",iw:736,ih:828,one:"Diagonal reds that move even on paper.",disc:"Business card design",for:"Software company",del:"Front and back design, print ready files"},
 {id:"kretos-business-card",img:"kretos-business-card",cats:["business-cards"],t:"Kretos",f:"Branding",bg:"#033B81",c:["#0A0A0A", "#033B81", "#FFFFFF", "#BABEC3"],r:"1080/1350",iw:1080,ih:1350,one:"A crisp navy gradient with a sharp mark.",disc:"Business card design",for:"Technology company",del:"Front and back design, print ready files"},
 {id:"porshea-real-estate-business-card",img:"porshea-real-estate-business-card",cats:["business-cards"],t:"Porshea",f:"Branding",bg:"#333A84",c:["#333A84", "#DCDCDE"],r:"1199/1495",iw:1199,ih:1495,one:"Rounded corners and a friendly blue for a property brand.",disc:"Business card design",for:"Real estate agency",del:"Front and back design, print ready files"},
 {id:"arced-studio-business-card",img:"arced-studio-business-card",cats:["business-cards"],t:"Arced",f:"Branding",bg:"#7A99AE",c:["#0F141A", "#7A99AE", "#EFEFEF"],r:"736/920",iw:736,ih:920,one:"Embossed lettering on soft sky blue.",disc:"Business card design",for:"Architecture studio",del:"Front and back design, print ready files"},
 {id:"michelle-gibson-personal-business-card",img:"michelle-gibson-personal-business-card",cats:["business-cards"],t:"Michelle Gibson",f:"Branding",bg:"#586659",c:["#292E2A", "#586659", "#818679"],r:"1024/1024",iw:1024,ih:1024,one:"A monogram card in sage and gold foil.",disc:"Business card design",for:"Personal brand",del:"Front and back design, print ready files"},
 {id:"inksta-business-card",img:"inksta-business-card",cats:["business-cards"],t:"Inksta",f:"Branding",bg:"#454E67",c:["#817D81", "#494749", "#0D0D0D", "#FDFDFD"],r:"1080/1080",iw:1080,ih:1080,one:"A glowing blue gradient that feels like a screen.",disc:"Business card design",for:"Creative agency",del:"Front and back design, print ready files"},
 {id:"neowear-apparel-business-card",img:"neowear-apparel-business-card",cats:["business-cards"],t:"Neowear",f:"Branding",bg:"#DDF33A",c:["#010101", "#DDF33A", "#D2D5A8", "#26231D"],r:"564/846",iw:564,ih:846,one:"Acid lime on black, made for everyone.",disc:"Business card design",for:"Streetwear label",del:"Front and back design, print ready files"},
 {id:"alpha-architecture-studio-business-card",img:"alpha-architecture-studio-business-card",cats:["business-cards"],t:"Alpha",f:"Branding",bg:"#94B1B4",c:["#141515", "#484949", "#94B1B4"],r:"1080/1350",iw:1080,ih:1350,one:"Pale blue stock and a confident lowercase wordmark.",disc:"Business card design",for:"Architecture studio",del:"Front and back design, print ready files"},
 {id:"velora-beauty-business-card",img:"velora-beauty-business-card",cats:["business-cards"],t:"Velora",f:"Branding",bg:"#CEBDAD",c:["#5B5942", "#CEBDAD", "#848381"],r:"735/921",iw:735,ih:921,one:"Olive and sand, pure and thoughtfully crafted.",disc:"Business card design",for:"Beauty brand",del:"Front and back design, print ready files"},
 {id:"puls-consulting-business-card",img:"puls-consulting-business-card",cats:["business-cards"],t:"Puls",f:"Branding",bg:"#DFD8D2",c:["#DFD8D2", "#0F0F0F", "#726F6C"],r:"736/841",iw:736,ih:841,one:"Connected by movement, set in warm grey.",disc:"Business card design",for:"Consulting firm",del:"Front and back design, print ready files"},
 {id:"lunova-wellness-business-card",img:"lunova-wellness-business-card",cats:["business-cards"],t:"Lunova",f:"Branding",bg:"#B4E1DD",c:["#B4E1DD", "#6F8784", "#1C1C1C", "#414C4C"],r:"736/736",iw:736,ih:736,one:"A dark, glossy card with a soft mint glow.",disc:"Business card design",for:"Wellness brand",del:"Front and back design, print ready files"},
 {id:"souniq-headphones-sale-post",img:"souniq-headphones-sale-post",cats:["social-media-posts"],t:"Souniq Headphones",f:"Marketing",bg:"#F0E4CC",c:["#F0E4CC", "#373F24", "#78785B", "#C0BAA0"],r:"735/1041",iw:735,ih:1041,one:"Feel every beat, at forty percent off.",disc:"Social media design",for:"Consumer audio",del:"Post design, caption layout, story versions"},
 {id:"fuud-food-delivery-post",img:"fuud-food-delivery-post",cats:["social-media-posts"],t:"Fuud",f:"Marketing",bg:"#E97738",c:["#E97738", "#934227", "#EEC195", "#EAEBEB"],r:"1200/1500",iw:1200,ih:1500,one:"Good food that satisfies the soul.",disc:"Social media design",for:"Food delivery",del:"Post design, caption layout, story versions"},
 {id:"oche-furniture-new-collection-post",img:"oche-furniture-new-collection-post",cats:["social-media-posts"],t:"Oche Furniture",f:"Marketing",bg:"#0F3938",c:["#0F3938", "#C9C4B6", "#F5F2EC", "#484D4B"],r:"736/736",iw:736,ih:736,one:"An exclusive collection framed in deep green.",disc:"Social media design",for:"Furniture brand",del:"Post design, caption layout, story versions"},
 {id:"global-scholars-study-abroad-post",img:"global-scholars-study-abroad-post",cats:["social-media-posts"],t:"Global Scholars",f:"Marketing",bg:"#57BDD5",c:["#36899D", "#82D3E5", "#CEE5E0", "#4C555B"],r:"1200/1200",iw:1200,ih:1200,one:"Discover your future abroad, one scroll at a time.",disc:"Social media design",for:"Study abroad agency",del:"Post design, caption layout, story versions"},
 {id:"dapoer-emak-rice-bowl-food-post",img:"dapoer-emak-rice-bowl-food-post",cats:["social-media-posts"],t:"Dapoer Emak",f:"Marketing",bg:"#364E14",c:["#364E14", "#F4E9C2", "#A67E58", "#C5B994"],r:"736/920",iw:736,ih:920,one:"A rice bowl post you can almost smell.",disc:"Social media design",for:"Restaurant",del:"Post design, caption layout, story versions"},
 {id:"furnishly-furniture-post",img:"furnishly-furniture-post",cats:["social-media-posts"],t:"Furnishly",f:"Marketing",bg:"#EE6D15",c:["#EE6D15", "#101A25", "#F7EDE5", "#8C3E13"],r:"1200/1200",iw:1200,ih:1200,one:"Perfect for your style, in warm terracotta.",disc:"Social media design",for:"Furniture brand",del:"Post design, caption layout, story versions"},
 {id:"swiftport-logistics-delivery-post",img:"swiftport-logistics-delivery-post",cats:["social-media-posts"],t:"Swiftport Logistics",f:"Marketing",bg:"#E76B13",c:["#E76B13", "#3A4142", "#070808", "#666664"],r:"1080/1080",iw:1080,ih:1080,one:"Swift, reliable and on time.",disc:"Social media design",for:"Logistics company",del:"Post design, caption layout, story versions"},
 {id:"seabird-restaurant-signature-menu-post",img:"seabird-restaurant-signature-menu-post",cats:["social-media-posts"],t:"Seabird",f:"Marketing",bg:"#A76D3F",c:["#01010B", "#022545", "#7F4D2B", "#A76D3F"],r:"736/1041",iw:736,ih:1041,one:"A signature menu post lit like a stage.",disc:"Social media design",for:"Restaurant",del:"Post design, caption layout, story versions"},
 {id:"yurakato-fresh-orange-juice-post",img:"yurakato-fresh-orange-juice-post",cats:["social-media-posts"],t:"Yurakato",f:"Marketing",bg:"#19BDAE",c:["#023D39", "#19BDAE", "#0D897D", "#CE8534"],r:"1080/1350",iw:1080,ih:1350,one:"Fresh juice, splashing off the screen.",disc:"Social media design",for:"Juice brand",del:"Post design, caption layout, story versions"},
 {id:"haydes-kitchen-restaurant-post",img:"haydes-kitchen-restaurant-post",cats:["social-media-posts"],t:"Haydes Kitchen",f:"Marketing",bg:"#C36C31",c:["#FEF9D7", "#5D311C", "#CBA788", "#C36C31"],r:"1200/1350",iw:1200,ih:1350,one:"Your new favourite food spot, at golden hour.",disc:"Social media design",for:"Restaurant",del:"Post design, caption layout, story versions"},
 {id:"kraftted-happy-new-week-post",img:"kraftted-happy-new-week-post",cats:["social-media-posts"],t:"Kraftted",f:"Marketing",bg:"#C1F90D",c:["#06311E", "#C1F90D", "#A3C042", "#465B32"],r:"1080/1350",iw:1080,ih:1350,one:"A Monday post with real energy.",disc:"Social media design",for:"Lifestyle brand",del:"Post design, caption layout, story versions"},
 {id:"international-coffee-day-cafe-banner-set",img:"international-coffee-day-cafe-banner-set",cats:["web-banners"],t:"International Coffee Day Banners",f:"Marketing",bg:"#C7AD8A",c:["#C7AD8A", "#F4EDDE", "#34525D"],r:"626/626",iw:626,ih:626,one:"Three web banners for a coffee day campaign.",disc:"Web banner design",for:"Café",del:"Web banner set in multiple sizes"},
 {id:"handmade-pottery-store-banner-set",img:"handmade-pottery-store-banner-set",cats:["web-banners"],t:"Handmade Pottery Banners",f:"Marketing",bg:"#AB8A6C",c:["#F2E5DC", "#241814", "#AB8A6C", "#72503D"],r:"1000/1500",iw:1000,ih:1500,one:"A banner set for handmade treasures.",disc:"Web banner design",for:"Pottery store",del:"Web banner set in multiple sizes"},
 {id:"skincare-cosmetics-sale-banner",img:"skincare-cosmetics-sale-banner",cats:["web-banners"],t:"Skincare Sale Banner",f:"Marketing",bg:"#47562E",c:["#47562E", "#DCDCDA", "#BFB097", "#829B79"],r:"1000/416",iw:1000,ih:416,one:"A calm, botanical sale banner.",disc:"Web banner design",for:"Cosmetics brand",del:"Web banner set in multiple sizes"},
 {id:"axegio-business-conference-flyer",img:"axegio-business-conference-flyer",cats:["flyers"],t:"Axegio Conference",f:"Marketing",bg:"#6C1316",c:["#6C1316", "#E2E3E5", "#786D6F", "#353234"],r:"918/1165",iw:918,ih:1165,one:"A red and monochrome flyer for the future of business.",disc:"Flyer design",for:"Business conference",del:"Flyer design, print ready PDF"},
 {id:"nadde-creative-agency-flyer",img:"nadde-creative-agency-flyer",cats:["flyers"],t:"Nadde",f:"Marketing",bg:"#C0B5AA",c:["#D9D9DD", "#61605E", "#A6A9AC", "#858789"],r:"768/959",iw:768,ih:959,one:"A clean corporate flyer that still feels human.",disc:"Flyer design",for:"Creative agency",del:"Flyer design, print ready PDF"},
 {id:"graphixsyl-headphones-product-flyer",img:"graphixsyl-headphones-product-flyer",cats:["flyers"],t:"Graphixsyl Headphones",f:"Marketing",bg:"#3E75DE",c:["#0B1739", "#223E89", "#3E75DE"],r:"736/988",iw:736,ih:988,one:"Level up, in glowing electric blue.",disc:"Flyer design",for:"Consumer audio",del:"Flyer design, print ready PDF"},
 {id:"seif-hospital-healthcare-flyer",img:"seif-hospital-healthcare-flyer",cats:["flyers"],t:"Seif Hospital",f:"Marketing",bg:"#54BFAF",c:["#54BFAF", "#3A696D", "#CEC2BA", "#FFFFFF"],r:"564/773",iw:564,ih:773,one:"Teal, trust and every service at a glance.",disc:"Flyer design",for:"Healthcare provider",del:"Flyer design, print ready PDF"},
 {id:"estel-hair-filler-product-flyer",img:"estel-hair-filler-product-flyer",cats:["flyers"],t:"Estel Filler Bond",f:"Marketing",bg:"#69A6D5",c:["#062342", "#1A4F83", "#69A6D5", "#3F7DB3"],r:"736/981",iw:736,ih:981,one:"A product flyer as glossy as the bottle.",disc:"Flyer design",for:"Hair care brand",del:"Flyer design, print ready PDF"},
 {id:"anne-marketing-agency-flyer",img:"anne-marketing-agency-flyer",cats:["flyers"],t:"Anne Agency",f:"Marketing",bg:"#B29660",c:["#8B7258", "#C4C2BF", "#4A494C", "#E6E6E9"],r:"991/1198",iw:991,ih:1198,one:"Warm oranges for an agency that helps businesses grow.",disc:"Flyer design",for:"Marketing agency",del:"Flyer design, print ready PDF"},
 {id:"academia-college-admissions-flyer",img:"academia-college-admissions-flyer",cats:["flyers"],t:"Academia College",f:"Marketing",bg:"#717DCF",c:["#717DCF", "#C1C5DB", "#5660A1", "#FFFFFF"],r:"675/913",iw:675,ih:913,one:"An admissions flyer that reads in ten seconds.",disc:"Flyer design",for:"College admissions",del:"Flyer design, print ready PDF"},
 {id:"imersao-retro-church-event-poster",img:"imersao-retro-church-event-poster",cats:["posters"],t:"Imersão Retrô",f:"Marketing",bg:"#DE7632",c:["#F5DEB5", "#DE7632", "#F5B059", "#A14E1F"],r:"736/1308",iw:736,ih:1308,one:"A retro event poster with a gramophone soul.",disc:"Poster design",for:"Church event",del:"Poster design, print ready files"},
 {id:"world-wildlife-campaign-event-poster",img:"world-wildlife-campaign-event-poster",cats:["posters"],t:"World Wildlife Campaign",f:"Marketing",bg:"#FCFEF9",c:["#FCFEF9", "#28371C", "#70794F", "#C9CBBF"],r:"566/800",iw:566,ih:800,one:"Wildlife peeking out of the letters themselves.",disc:"Poster design",for:"Conservation event",del:"Poster design, print ready files"},
 {id:"look-up-kid-creative-poster",img:"look-up-kid-creative-poster",cats:["posters"],t:"Look Up, Kid",f:"Marketing",bg:"#768A9C",c:["#768A9C", "#292D29", "#E4E4E4", "#BDAFA7"],r:"736/1114",iw:736,ih:1114,one:"The world is wider than they told you.",disc:"Poster design",for:"Creative campaign",del:"Poster design, print ready files"},
 {id:"princeton-farms-real-estate-poster",img:"princeton-farms-real-estate-poster",cats:["posters"],t:"Princeton Farms",f:"Marketing",bg:"#0B360C",c:["#E4E5E7", "#052506", "#79927B"],r:"564/846",iw:564,ih:846,one:"Nature is not a place to visit. It is home.",disc:"Poster design",for:"Real estate developer",del:"Poster design, print ready files"},
 {id:"lets-go-fishing-event-poster",img:"lets-go-fishing-event-poster",cats:["posters"],t:"Let's Go Fishing",f:"Marketing",bg:"#1E8BA1",c:["#1E8BA1", "#14526A", "#181B2A", "#73C9D5"],r:"736/920",iw:736,ih:920,one:"Big type, blue water and a boat ready to go.",disc:"Poster design",for:"Community event",del:"Poster design, print ready files"},
 {id:"march-madness-basketball-poster",img:"march-madness-basketball-poster",cats:["posters"],t:"March Madness",f:"Marketing",bg:"#ED853F",c:["#ED853F", "#B44F31", "#E5B18B", "#FDFEFE"],r:"1080/1528",iw:1080,ih:1528,one:"A game poster that sounds like a buzzer.",disc:"Poster design",for:"Basketball league",del:"Poster design, print ready files"},
 {id:"nexvey-electric-dirt-bike-ad-poster",img:"nexvey-electric-dirt-bike-ad-poster",cats:["posters"],t:"Nexvey Street Power",f:"Marketing",bg:"#0458A6",c:["#0458A6", "#B6FB71", "#3385BD", "#282A32"],r:"736/1308",iw:736,ih:1308,one:"Street power, full throttle, in acid green.",disc:"Poster design",for:"Electric vehicles",del:"Poster design, print ready files"},
 {id:"adventure-travel-vlog-thumbnail",img:"adventure-travel-vlog-thumbnail",cats:["youtube-thumbnails"],t:"Adventure Travel Vlog",f:"Marketing",bg:"#B5CED6",c:["#B5CED6", "#68787F", "#88979C", "#E7E7E7"],r:"1200/675",iw:1200,ih:675,one:"Big type, one figure and the open sea.",disc:"YouTube thumbnail",for:"Travel channel",del:"Thumbnail design, template"},
 {id:"rise-of-netflix-thumbnail",img:"rise-of-netflix-thumbnail",cats:["youtube-thumbnails"],t:"The Rise of Netflix",f:"Marketing",bg:"#AA0D0E",c:["#1F2530", "#AA0D0E", "#CBC6BC", "#6E6F6B"],r:"736/414",iw:736,ih:414,one:"A thumbnail that tells the story before the click.",disc:"YouTube thumbnail",for:"Documentary channel",del:"Thumbnail design, template"},
 {id:"skill-of-distraction-thumbnail",img:"skill-of-distraction-thumbnail",cats:["youtube-thumbnails"],t:"The Skill of Distraction",f:"Marketing",bg:"#983A39",c:["#CECABF", "#151C22", "#983A39", "#938C87"],r:"736/414",iw:736,ih:414,one:"Quiet, curious and impossible to scroll past.",disc:"YouTube thumbnail",for:"Self-development channel",del:"Thumbnail design, template"},
 {id:"chess-opening-tutorial-thumbnail",img:"chess-opening-tutorial-thumbnail",cats:["youtube-thumbnails"],t:"Chess Opening Tutorial",f:"Marketing",bg:"#B01812",c:["#EDC1A9", "#C68C72", "#3A2923", "#83563F"],r:"736/414",iw:736,ih:414,one:"A chess thumbnail with tournament tension.",disc:"YouTube thumbnail",for:"Chess channel",del:"Thumbnail design, template"},
 {id:"gut-microbiome-garden-infographic",img:"gut-microbiome-garden-infographic",cats:["infographics"],t:"The Gut Garden",f:"Marketing",bg:"#C7D6AB",c:["#C7D6AB", "#486976", "#93AE8A"],r:"736/1193",iw:736,ih:1193,one:"The microbiome, drawn as an isometric garden.",disc:"Infographic design",for:"Health publication",del:"Infographic design, chart system"},
 {id:"business-charts-and-data-infographic-kit",img:"business-charts-and-data-infographic-kit",cats:["infographics"],t:"Business Data Kit",f:"Marketing",bg:"#509EC9",c:["#FFFFFF", "#509EC9", "#C8D8E0", "#2B5978"],r:"660/1041",iw:660,ih:1041,one:"A full kit of charts, gauges and stats in steel blue.",disc:"Infographic design",for:"Business reports",del:"Infographic design, chart system"},
 {id:"consumers-and-the-connected-car-infographic",img:"consumers-and-the-connected-car-infographic",cats:["infographics"],t:"The Connected Car",f:"Marketing",bg:"#D14932",c:["#FFFFFF", "#D14932", "#CE796A", "#DDB4AC"],r:"1000/1797",iw:1000,ih:1797,one:"Survey data on connected cars, made scannable.",disc:"Infographic design",for:"Automotive tech",del:"Infographic design, chart system"},
 {id:"world-of-fintech-infographic",img:"world-of-fintech-infographic",cats:["infographics"],t:"The World of Fintech",f:"Marketing",bg:"#432F6E",c:["#432F6E", "#959998"],r:"1000/1552",iw:1000,ih:1552,one:"Global investment data in deep violet and lime.",disc:"Infographic design",for:"Fintech research",del:"Infographic design, chart system"},
 {id:"biomass-of-life-infographic",img:"biomass-of-life-infographic",cats:["infographics"],t:"Biomass of Life",f:"Marketing",bg:"#D45832",c:["#A73121", "#D45832", "#E48E67", "#DDC3B3"],r:"1057/2048",iw:1057,ih:2048,one:"All life on earth, stacked as one striking column.",disc:"Infographic design",for:"Science publication",del:"Infographic design, chart system"},
 {id:"technology-in-law-firms-infographic",img:"technology-in-law-firms-infographic",cats:["infographics"],t:"Tech in Law Firms",f:"Marketing",bg:"#924768",c:["#E6DFCD", "#924768", "#C6ADAA", "#B6778F"],r:"1160/1692",iw:1160,ih:1692,one:"How technology is shaking up law firms, in plum and rose.",disc:"Infographic design",for:"Legal industry report",del:"Infographic design, chart system"},
 {id:"consuler-real-estate-finance-booth",img:"consuler-real-estate-finance-booth",cats:["exhibition-booths"],t:"Consuler",f:"Marketing",bg:"#6DD7BA",c:["#0A2821", "#6DD7BA", "#394C47", "#648C81"],r:"1199/799",iw:1199,ih:799,one:"A dark green booth that leads with one big number.",disc:"Exhibition design",for:"Real estate finance",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"boostio-marketing-agency-booth",img:"boostio-marketing-agency-booth",cats:["exhibition-booths"],t:"Boostio",f:"Marketing",bg:"#F7F5E8",c:["#F7F5E8", "#625A8D", "#CEC7B7", "#939090"],r:"736/736",iw:736,ih:736,one:"Bold, modern panels for an agency that sells creativity.",disc:"Exhibition design",for:"Marketing agency",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"xstream-travel-booth-with-roll-up-banner",img:"xstream-travel-booth-with-roll-up-banner",cats:["exhibition-booths"],t:"Xstream Travel",f:"Marketing",bg:"#428C70",c:["#C9C9C9", "#253A2D", "#428C70", "#7DAE90"],r:"1200/1200",iw:1200,ih:1200,one:"A curved backwall and roll-up that bring the outdoors indoors.",disc:"Exhibition design",for:"Travel university",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"mention-fintech-platform-booth",img:"mention-fintech-platform-booth",cats:["exhibition-booths"],t:"Mention",f:"Marketing",bg:"#1F5B46",c:["#D6E3D9", "#0E3C2E", "#8FAE94", "#748977"],r:"1199/906",iw:1199,ih:906,one:"Financial data, made friendly in deep green.",disc:"Exhibition design",for:"Fintech platform",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"international-coffee-day-promo-booth",img:"international-coffee-day-promo-booth",cats:["exhibition-booths"],t:"International Coffee Day",f:"Marketing",bg:"#082F80",c:["#082F80", "#FDFDFD", "#2C5596", "#459BCF"],r:"1200/1200",iw:1200,ih:1200,one:"A promo booth that serves the sale before the coffee.",disc:"Exhibition design",for:"Coffee brand",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"jameel-and-omar-nuts-trading-booth",img:"jameel-and-omar-nuts-trading-booth",cats:["exhibition-booths"],t:"Jameel & Omar",f:"Marketing",bg:"#016B0F",c:["#016B0F", "#679826", "#D0B053"],r:"1200/840",iw:1200,ih:840,one:"The perfect crunch, every time, in fresh greens.",disc:"Exhibition design",for:"Nut trading company",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"cn2r-resilience-centre-booth",img:"cn2r-resilience-centre-booth",cats:["exhibition-booths"],t:"Cn2r",f:"Marketing",bg:"#1F1E45",c:["#1F1E45", "#C8D0D8", "#74707D"],r:"736/552",iw:736,ih:552,one:"A calm navy booth for a sensitive subject.",disc:"Exhibition design",for:"Resilience centre",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"aziyan-business-conclave-2026-backdrop-and-standees",img:"aziyan-business-conclave-2026-backdrop-and-standees",cats:["exhibition-booths"],t:"Aziyan Business Conclave",f:"Marketing",bg:"#144C87",c:["#144C87", "#061E39", "#FCFCFC", "#ADBFCF"],r:"735/653",iw:735,ih:653,one:"A backdrop and standees built for the photo wall.",disc:"Exhibition design",for:"Business event",del:"Booth graphics, backwall, counter, roll-up banners"},
 {id:"aurora-creative-studio-presentation",img:"aurora-creative-studio-presentation",cats:["presentation-decks"],t:"Aurora Creative Studio",f:"Marketing",bg:"#794243",c:["#794243", "#F2F2F2", "#D3D1D2", "#B2ABAC"],r:"1000/1941",iw:1000,ih:1941,one:"A monochrome deck with sharp red accents.",disc:"Presentation design",for:"Creative studio",del:"Slide deck design, master template"},
 {id:"plant-served-healthy-food-pitch-deck",img:"plant-served-healthy-food-pitch-deck",cats:["presentation-decks"],t:"Plant Served",f:"Marketing",bg:"#0D3024",c:["#0D3024", "#FEFFFF", "#CED5D2", "#739B84"],r:"1001/1749",iw:1001,ih:1749,one:"A pitch deck as fresh as the menu.",disc:"Presentation design",for:"Healthy food startup",del:"Slide deck design, master template"},
 {id:"grizly-studio-presentation",img:"grizly-studio-presentation",cats:["presentation-decks"],t:"Grizly Studio",f:"Marketing",bg:"#FCFC05",c:["#FCFC05", "#D6D5D8", "#131313", "#FEFEFE"],r:"1000/1703",iw:1000,ih:1703,one:"High-contrast yellow and black that holds a room.",disc:"Presentation design",for:"Design studio",del:"Slide deck design, master template"},
 {id:"lawyerco-law-firm-presentation",img:"lawyerco-law-firm-presentation",cats:["presentation-decks"],t:"Lawyerco",f:"Marketing",bg:"#FFFEFF",c:["#DDDDDD", "#FFFFFF", "#222025", "#5C5756"],r:"1000/1741",iw:1000,ih:1741,one:"A refined dark deck for serious conversations.",disc:"Presentation design",for:"Law firm",del:"Slide deck design, master template"},
 {id:"prism-agency-presentation",img:"prism-agency-presentation",cats:["presentation-decks"],t:"Prism Agency",f:"Marketing",bg:"#349884",c:["#349884", "#FFFFFF", "#82B2A8", "#C7C4C3"],r:"682/1200",iw:682,ih:1200,one:"Teal, structure and forty slides that never feel long.",disc:"Presentation design",for:"Creative agency",del:"Slide deck design, master template"},
 {id:"social-media-strategy-presentation",img:"social-media-strategy-presentation",cats:["presentation-decks"],t:"Social Media Strategy",f:"Marketing",bg:"#9E352A",c:["#949494", "#F6E2C7", "#9E352A"],r:"736/1104",iw:736,ih:1104,one:"A strategy deck in bold maroon and cream.",disc:"Presentation design",for:"Marketing team",del:"Slide deck design, master template"},
 {id:"jedva-business-plan-pitch-deck",img:"jedva-business-plan-pitch-deck",cats:["presentation-decks"],t:"Jedva Business Plan",f:"Marketing",bg:"#815452",c:["#815452", "#E4E4E5", "#A49E9F"],r:"1000/1748",iw:1000,ih:1748,one:"Investor-ready slides in soft reds and greys.",disc:"Presentation design",for:"Startup",del:"Slide deck design, master template"},
 {id:"marketing-agency-pitch-deck",img:"marketing-agency-pitch-deck",cats:["presentation-decks"],t:"Marketing Agency Pitch",f:"Marketing",bg:"#3C44E7",c:["#3C44E7", "#ECEAEF", "#6B6CAE", "#2D308E"],r:"1000/1500",iw:1000,ih:1500,one:"Electric blue gradients that keep investors awake.",disc:"Presentation design",for:"Marketing agency",del:"Slide deck design, master template"},
 {id:"vegetan-vegetable-brand-presentation",img:"vegetan-vegetable-brand-presentation",cats:["presentation-decks"],t:"Vegetan",f:"Marketing",bg:"#2A6240",c:["#2A6240", "#DBDBD9", "#B4C0AC", "#6D8F6D"],r:"564/1061",iw:564,ih:1061,one:"A garden-fresh deck in leafy greens.",disc:"Presentation design",for:"Vegetable brand",del:"Slide deck design, master template"},
 {id:"future-of-agriculture-presentation",img:"future-of-agriculture-presentation",cats:["presentation-decks"],t:"The Future of Agriculture",f:"Marketing",bg:"#C5DD9E",c:["#A4B689", "#D7DCB2", "#2B3F38", "#F1F2E7"],r:"1000/1622",iw:1000,ih:1622,one:"Data-rich slides on the future of farming.",disc:"Presentation design",for:"Agritech",del:"Slide deck design, master template"},
 {id:"smart-marketing-strategy-presentation",img:"smart-marketing-strategy-presentation",cats:["presentation-decks"],t:"Smart Marketing Strategy",f:"Marketing",bg:"#D76052",c:["#D76052", "#FBF2E7", "#947870", "#33302E"],r:"696/1178",iw:696,ih:1178,one:"An editorial red and black strategy deck.",disc:"Presentation design",for:"Marketing consultancy",del:"Slide deck design, master template"},
 {id:"ai-consulting-agency-landing-page",img:"ai-consulting-agency-landing-page",cats:["landing-pages"],t:"AI Consulting Agency",f:"UI/UX",bg:"#1A80C8",c:["#1A80C8", "#FFFFFF", "#449FDF", "#AFC2CC"],r:"1000/1500",iw:1000,ih:1500,one:"A sky-blue landing page for building the future with AI.",disc:"Landing page design",for:"AI consultancy",del:"Landing page UI design, responsive layout"},
 {id:"wash-house-natural-soap-landing-page",img:"wash-house-natural-soap-landing-page",cats:["landing-pages"],t:"Wash House",f:"UI/UX",bg:"#E0A578",c:["#F5E7DA", "#E0A578", "#A96741", "#DAC2BA"],r:"736/1104",iw:736,ih:1104,one:"Good clean fun, sold one bar at a time.",disc:"Landing page design",for:"Natural soap brand",del:"Landing page UI design, responsive layout"},
 {id:"redow-smart-energy-landing-page",img:"redow-smart-energy-landing-page",cats:["landing-pages"],t:"Redow",f:"UI/UX",bg:"#9B7362",c:["#F6F2EF", "#C4B2A9", "#9B7362"],r:"736/1104",iw:736,ih:1104,one:"Smarter energy for a brighter tomorrow, in warm orange.",disc:"Landing page design",for:"Smart energy company",del:"Landing page UI design, responsive layout"},
 {id:"solar-pop-studio-designer-portfolio-landing-page",img:"solar-pop-studio-designer-portfolio-landing-page",cats:["landing-pages"],t:"Solar Pop Studio",f:"UI/UX",bg:"#D2502A",c:["#F8A28D", "#D2502A", "#FBF1E1", "#E0C7B5"],r:"736/1307",iw:736,ih:1307,one:"A portfolio page that grins back at you.",disc:"Landing page design",for:"Designer portfolio",del:"Landing page UI design, responsive layout"},
 {id:"evernest-eco-homes-real-estate-landing-page",img:"evernest-eco-homes-real-estate-landing-page",cats:["landing-pages"],t:"Evernest",f:"UI/UX",bg:"#978554",c:["#F7F6F1", "#292915", "#5B4F2B", "#CDD0C0"],r:"736/1104",iw:736,ih:1104,one:"Find eco-friendly homes in a forest of calm greens.",disc:"Landing page design",for:"Eco real estate",del:"Landing page UI design, responsive layout"},
 {id:"wizardz-digital-marketing-agency-landing-page",img:"wizardz-digital-marketing-agency-landing-page",cats:["landing-pages"],t:"WizardZ",f:"UI/UX",bg:"#041411",c:["#041411", "#EFF3E9", "#AAB3AF", "#5C6E58"],r:"1025/1535",iw:1025,ih:1535,one:"Navigating the digital landscape, one clear section at a time.",disc:"Landing page design",for:"Digital marketing agency",del:"Landing page UI design, responsive layout"},
 {id:"gainlove-charity-nonprofit-landing-page",img:"gainlove-charity-nonprofit-landing-page",cats:["landing-pages"],t:"Gainlove",f:"UI/UX",bg:"#684E41",c:["#FAFAFA", "#684E41", "#CEC4AC"],r:"736/1308",iw:736,ih:1308,one:"A nonprofit page where every scroll leads to giving.",disc:"Landing page design",for:"Charity nonprofit",del:"Landing page UI design, responsive layout"},
 {id:"furniture-store-landing-page",img:"furniture-store-landing-page",cats:["landing-pages"],t:"Furniture Store",f:"UI/UX",bg:"#FC5306",c:["#FC5306", "#F9F2EC", "#DC7844", "#9D431A"],r:"736/2068",iw:736,ih:2068,one:"Bright orange rooms that sell the lifestyle first.",disc:"Landing page design",for:"Furniture retailer",del:"Landing page UI design, responsive layout"},
 {id:"snacks-food-brand-landing-page",img:"snacks-food-brand-landing-page",cats:["landing-pages"],t:"Snacks",f:"UI/UX",bg:"#854134",c:["#5DA48F", "#854134", "#F2F0E0", "#C9CBBF"],r:"768/1344",iw:768,ih:1344,one:"Crunchy, playful and impossible to scroll past hungry.",disc:"Landing page design",for:"Snack food brand",del:"Landing page UI design, responsive layout"},
 {id:"bloom-bar",img:"bloom-bar-honey-branding-collection",cats:["label-design", "packaging-design"],t:"Bloom Bar Honey",f:"Packaging & Print",y:2026,bg:"#F2B33D",c:["#E9A23B", "#F9E8CE", "#8C5A2B", "#7E6BAF"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Raw honey labels that taste like a meadow.",disc:"Label design",for:"Raw wildflower honey",del:"Hexagon front label, back label, tamper seal, jar range",brief:"Most honey jars look like a supermarket shelf from 1998. Bloom Bar leans into where the honey comes from: a hexagon label, hand drawn lavender and wildflowers, and a bee crest that turns a pantry staple into a gift people photograph before they open it.",idea:"Every jar is a small field.",role:"Label design, illustration and print ready dielines"},
 {id:"hops-outlaws",img:"hops-outlaws-western-beer-collection",cats:["label-design"],t:"Hops & Outlaws",f:"Packaging & Print",y:2025,bg:"#D9832F",c:["#E3A13E", "#B6452B", "#2E7A78", "#2A160B"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Beer cans with the swagger of a dusty saloon.",disc:"Can label design",for:"Craft brewery",del:"Three 16 oz can wraps, six-pack mockups",brief:"A craft brewery with a Western streak and three very different beers. Each can gets its own woodcut scene, a pale ale at golden hour, an IPA bandit at sunset and a desert lager under teal skies, all tied together by one wanted-poster wordmark.",idea:"Three outlaws, one gang.",role:"Label illustration, layout and full wrap print files"},
 {id:"quiet-hours",img:"quiet-hours-candle-branding-moodboard",cats:["label-design", "packaging-design"],t:"Quiet Hours",f:"Packaging & Print",y:2025,bg:"#C79A6E",c:["#7A4B2A", "#EBD9C5", "#B48F70", "#3B2010"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Candle labels that turn the volume down.",disc:"Label design",for:"Home fragrance",del:"Jar labels, lid stickers, warning labels, gift box",brief:"A candle brand built for the hour after the house goes quiet. Amber glass, warm linen labels and a thin serif wordmark do the talking, with a sun mark that reads as both sunset and a lit wick.",idea:"Design that whispers.",role:"Label system, scent naming layout and box design"},
 {id:"sol-de-oro",img:"sol-de-oro-mediterranean-branding-board",cats:["label-design"],t:"Sol de Oro",f:"Packaging & Print",y:2024,bg:"#C9A24A",c:["#7C8A3A", "#ECDDCC", "#BD9367", "#3D3013"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"Olive oil that brings the grove to the table.",disc:"Label design",for:"Extra virgin olive oil",del:"Bottle label, neck tag, back label, tin",brief:"Premium olive oil usually hides behind gold foil and Latin. Sol de Oro shows the grove instead: painted olive branches, a sun-warmed cream label and a hang tag that tells you which hillside the oil came from.",idea:"Pressed from sunshine.",role:"Label design, illustration and packaging layouts"},
 {id:"velvet-hour-labels",img:"velvet-hour-wine-label-collection",cats:["label-design"],t:"Velvet Hour Wines",f:"Packaging & Print",y:2024,bg:"#8E2449",c:["#6D1A36", "#F1CCA4", "#C9A227", "#25160C"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Wine labels for a Texas Hill Country sunset.",disc:"Wine label design",for:"Winery",del:"Front and back labels for red, rosé and white",brief:"The winery's lookbook needed bottles to match. The labels keep the same burgundy and gold, add an etched vineyard scene, and change only the color of one line of type between the red, the rosé and the white.",idea:"One estate, three moods.",role:"Label design, illustration and print preparation"},
 {id:"wild-ferment",img:"wild-ferment-kombucha-branding-collage",cats:["label-design", "packaging-design"],t:"Wild Ferment",f:"Packaging & Print",y:2025,bg:"#B5EE4F",c:["#FF6B6B", "#A3E635", "#7C3AED", "#FFFBF0"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Kombucha labels loud enough for the cooler aisle.",disc:"Label design",for:"Kombucha",del:"Three flavor labels, back label, case packaging",brief:"A young kombucha brand fighting for space behind a glass fridge door. Grainy risograph fruit, bold coral, lime and grape, and one shared layout make each flavor different and the brand unmistakable from six feet away.",idea:"Three flavors, one face.",role:"Label design, illustration and production artwork"},
 {id:"kumo-omakase",img:"kumo-omakase-a-golden-japanese-tabletop",cats:["menu-design"],t:"Kumo Omakase",f:"Packaging & Print",y:2026,bg:"#B9783F",c:["#723A19", "#D7B699", "#0B0604", "#B3262A"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"A tasting menu as calm as the chef's knife.",disc:"Menu design",for:"Japanese omakase bar",del:"Course menu, table card, chopstick sleeve",brief:"Twelve seats, one chef and a menu that changes nightly. A tall washi card lists each course in English and Japanese, with a single ink-wash cloud and a red seal, so the food gets all the attention.",idea:"Say less. Serve more.",role:"Menu design, bilingual typesetting and print specs"},
 {id:"la-lumbre-menu",img:"la-lumbre-tex-mex-feast",cats:["menu-design"],t:"La Lumbre Cantina Menu",f:"Packaging & Print",y:2025,bg:"#E8743A",c:["#E63977", "#F9A620", "#1FB5AD", "#FFF8EC"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"A cantina menu that feels like a fiesta.",disc:"Menu design",for:"Tex-Mex restaurant",del:"Table menu, QR stand, drinks list",brief:"The ordering app carried papel picado colors, so the dining room needed the same energy on paper. Bright section headers, a tiled border and clear prices keep a big menu easy to scan between margaritas.",idea:"Loud colors, easy choices.",role:"Menu layout, illustration and print files"},
 {id:"lone-smoke",img:"lone-smoke-texas-bbq-feast",cats:["menu-design"],t:"Lone Smoke BBQ",f:"Packaging & Print",y:2025,bg:"#B5562F",c:["#843D22", "#DDAF84", "#281009", "#AF825F"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"A BBQ menu printed on butcher paper.",disc:"Menu design",for:"Texas smokehouse",del:"Tray liner menu, specials board, sauce labels",brief:"At a real smokehouse the menu sits under the brisket. This one is a kraft paper tray liner with a longhorn crest, stencil type and prices you can read with sauce on your fingers.",idea:"Low and slow, easy to read.",role:"Menu design, branding and print production"},
 {id:"scoop-dreams",img:"scoop-dreams-retro-ice-cream-parlor",cats:["menu-design"],t:"Scoop Dreams",f:"Packaging & Print",y:2026,bg:"#F49AA0",c:["#E8475A", "#FACFB2", "#6CC6B8", "#65493D"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"A menu board that tastes like the fifties.",disc:"Menu board design",for:"Retro ice cream parlor",del:"Wall menu board, window decal, cup sleeve",brief:"A pink and mint parlor with chrome stools needed a menu kids could read from the door. A retro script logo, cartoon sundaes and color-coded sections make ordering half the fun.",idea:"Good scoops, good mood.",role:"Menu board design, illustration and signage"},
 {id:"sunny-side-menu",img:"sunny-side-social-brunch-cafe",cats:["menu-design"],t:"Sunny Side Brunch Menu",f:"Packaging & Print",y:2025,bg:"#FFD23F",c:["#FFD23F", "#EE4266", "#3BCEAC", "#FFFDF7"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"Brunch, but make it a personality.",disc:"Menu design",for:"Brunch café",del:"Table menu, chalkboard A-frame, napkin print",brief:"The café brand came to life on the menu: chunky retro type, hand drawn eggs and pancakes, and a sunny yellow that photographs beautifully next to the food it describes.",idea:"Every table is a photo op.",role:"Menu design, illustration and signage"},
 {id:"gilded-key",img:"the-gilded-key-cocktail-lounge",cats:["menu-design"],t:"The Gilded Key",f:"Packaging & Print",y:2024,bg:"#13805E",c:["#0D0D0D", "#D4AF37", "#0B6E4F", "#F7E7CE"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"A cocktail menu you'd steal if it weren't so heavy.",disc:"Menu design",for:"Cocktail bar",del:"Menu booklet, coasters, table card",brief:"A hidden bar behind an unmarked door. The menu is a black, leather bound booklet with gold foil art deco details and cocktails grouped by mood, not by spirit, so guests order a feeling instead of a recipe.",idea:"The menu is the password.",role:"Menu design, foil specifications and print production"},
 {id:"dawn-patrol-merch",img:"dawn-patrol-running-club-lookbook",cats:["merchandise-design"],t:"Dawn Patrol Merch",f:"Packaging & Print",y:2025,bg:"#FF8A3D",c:["#FF7A00", "#FFB997", "#0F1A2C", "#FFFFFF"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Run club merch people wear on rest days too.",disc:"Merchandise design",for:"Run club",del:"Cropped tee, 5-panel cap, bottle, print specs",brief:"The club's sunrise gradient moved from the feed onto the kit. A cropped tee, an embroidered cap and a laser etched bottle share one striped sun, so the whole crew is recognisable from across the river path.",idea:"Wear the sunrise.",role:"Merch design, print methods and spec sheet"},
 {id:"leaf-me-alone",img:"leaf-me-alone-plant-shop-brand-board",cats:["merchandise-design"],t:"Leaf Me Alone",f:"Packaging & Print",y:2026,bg:"#3E7A55",c:["#2F5D3F", "#F2EFE6", "#C9725B", "#D4C4AD"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Plant shop merch with a sense of humor.",disc:"Merchandise design",for:"Indie plant shop",del:"Slogan tee, canvas apron, tote, pot stickers",brief:"A neighborhood plant shop with a name that does half the marketing. Forest green and terracotta, a leafy wordmark and a cheeky slogan tee turn staff uniforms and tote bags into walking ads.",idea:"Good plants, brighter days.",role:"Merch design, screen print specs and brand board"},
 {id:"loopwise-swag",img:"loopwise-tech-swag-kit-mockup",cats:["merchandise-design", "packaging-design"],t:"Loopwise Swag Kit",f:"Packaging & Print",y:2025,bg:"#8F84F2",c:["#6C5CE7", "#FF7675", "#2D3436", "#F5F6FA"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"An onboarding box new hires actually post about.",disc:"Swag kit design",for:"SaaS company",del:"Hoodie, notebook, tumbler, stickers, mailer box",brief:"Loopwise wanted day one to feel like joining something. The kit is quiet black merch with small brand moments, and a violet to coral mailer box that does all the shouting when it lands on a new desk.",idea:"Welcome to the loop.",role:"Swag design, packaging and print methods"},
 {id:"night-shift-merch",img:"night-shift-roasters-merch-showcase",cats:["merchandise-design"],t:"Night Shift Merch",f:"Packaging & Print",y:2026,bg:"#1E2A4A",c:["#14213D", "#FCA311", "#E5E5E5", "#0A1124"],r:"1254/1254",iw:1254,ih:1254,concept:1,one:"Merch for people who clock in at sundown.",disc:"Merchandise design",for:"Specialty coffee",del:"T-shirt, tote, ceramic mug, enamel pin",brief:"The crescent moon mark goes off the bag and onto the barista. Midnight navy tees, an amber moon tote and an enamel pin give regulars a way to wear the brand on their own night shifts.",idea:"Coffee people, better days.",role:"Merch design, screen print and enamel specs"},
 {id:"paper-satellites",img:"paper-satellites-tour-merch-board",cats:["merchandise-design", "posters"],t:"Paper Satellites Tour",f:"Packaging & Print",y:2025,bg:"#2E5B5E",c:["#E3A13E", "#F2F1EB", "#3E6E70", "#130D09"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Tour merch that sells out before the encore.",disc:"Tour merchandise",for:"Indie band",del:"Tour tee, tote, gig poster, typefaces",brief:"A space-rock band's North American tour. Collage moons, a hand cut ransom note logo and distressed three color prints give the merch table the same lo-fi energy as the live show.",idea:"Wear the night they played.",role:"Merch design, gig poster and print methods"},
 {id:"prairie-sound-merch",img:"prairie-sound-festival-merch-showcase",cats:["merchandise-design"],t:"Prairie Sound Merch",f:"Packaging & Print",y:2026,bg:"#E76F51",c:["#E76F51", "#6D597A", "#F4E1C1", "#8AA399"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Festival merch that outlives the wristband.",disc:"Merchandise design",for:"Music festival",del:"Festival tee, bandana, woven wristband",brief:"The waveform sunset from the campaign becomes a tee, a full print bandana and a woven wristband. Dusk purple and desert orange keep it festival bright without looking like a souvenir.",idea:"Take the horizon home.",role:"Merch design, print methods and spec sheet"},
 {id:"dewfall-pack",img:"dewfall-botanical-skincare-packaging-board",cats:["packaging-design"],t:"Dewfall Skincare",f:"Packaging & Print",y:2026,bg:"#A3B18A",c:["#A3B18A", "#F5F0E6", "#588157", "#D4A373"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Skincare boxes as calm as the ritual.",disc:"Packaging design",for:"Botanical skincare",del:"Dropper, jar and pump boxes, dielines, labels",brief:"The Dewfall store was built to slow shoppers down, so the packaging does too. Sage and cream boxes, pressed leaf illustrations and one quiet serif carry the brand from the product page to the bathroom shelf.",idea:"Nature in every drop.",role:"Packaging design, dielines and print specs"},
 {id:"ember-thorn",img:"ember-thorn-hot-sauce-branding-board",cats:["packaging-design", "label-design"],t:"Ember & Thorn",f:"Packaging & Print",y:2026,bg:"#E0443E",c:["#1C1C1C", "#B87333", "#C1272D", "#F2EBDD"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Hot sauce packaging you can't put back on the shelf.",disc:"Packaging design",for:"Small-batch hot sauce",del:"Bottle labels, gift box, dieline, 3D mockups",brief:"Hot sauce shelves are a wall of cartoon flames and shouting. Ember & Thorn goes the other way: matte charcoal, copper foil and fine line chili illustrations, so it looks less like a condiment and more like a gift.",idea:"Heat, but make it luxury.",role:"Packaging design, dielines and print production files"},
 {id:"good-boy",img:"good-boy-bakery-packaging-board",cats:["packaging-design"],t:"Good Boy Bakery",f:"Packaging & Print",y:2025,bg:"#F7A8B8",c:["#F7A8B8", "#F4C97A", "#A76C46", "#FFF6EC"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Dog treat boxes that make tails wag.",disc:"Packaging design",for:"Dog treat bakery",del:"Treat box, stand-up pouches, dielines",brief:"Dog treats are bought by humans. Bubblegum pink, a happy pup mascot and bone shaped windows make the boxes impossible to walk past, while clear ingredient panels keep the owners happy too.",idea:"Real ingredients, happier dogs.",role:"Packaging design, illustration and dielines"},
 {id:"kinetic-pack",img:"kinetic-audio-earbuds-packaging-board",cats:["packaging-design"],t:"Kinetic Audio Packaging",f:"Packaging & Print",y:2025,bg:"#C6FF00",c:["#2F3437", "#C6FF00", "#D9D9D9", "#0B0B0B"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"An unboxing that sounds like a drop.",disc:"Packaging design",for:"Consumer tech",del:"Magnetic box, sleeve, foam insert, contents card",brief:"The launch ads used electric lime on graphite, so the box does too. A matte black magnetic box, a lime edge that glows when it opens and a precise foam tray make the earbuds feel worth the price before they're switched on.",idea:"Sound you can see.",role:"Structural packaging, dielines and print specs"},
 {id:"moonsteep-pack",img:"moonsteep-celestial-tea-packaging-board",cats:["packaging-design"],t:"Moonsteep Tea",f:"Packaging & Print",y:2024,bg:"#B8B8FF",c:["#2B2D42", "#B8B8FF", "#D4AF37", "#FAF3E0"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Bedtime tea in a box that glows.",disc:"Packaging design",for:"Wellness tea",del:"Sleeve box, tin wrap, sachets, dielines",brief:"The emails were designed for a dark bedroom, and the packaging follows. Deep indigo, gold moon phases and a die cut window that shows the tea inside make the box a nightstand object, not a pantry one.",idea:"Steep, sip, sleep.",role:"Packaging design, dielines and foil specs"},
 {id:"night-shift-pack",img:"night-shift-roasters-packaging-board",cats:["packaging-design"],t:"Night Shift Coffee Bags",f:"Packaging & Print",y:2026,bg:"#FCA311",c:["#14213D", "#FCA311", "#E5E5E5", "#0A1124"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Coffee bags that glow amber on the shelf.",disc:"Packaging design",for:"Specialty coffee",del:"Stand-up pouches for three roasts, dieline, specs",brief:"Three roasts, one moonlit skyline. Each stand-up pouch keeps the midnight navy base and switches the amber glow by roast, from daybreak light to eclipse dark, so the shelf reads like a night sky.",idea:"Coffee for the other 9 to 5.",role:"Packaging design, dielines and print specs"},
 {id:"coolcrew-air",img:"coolcrew-air-van-wrap-showcase",cats:["vehicle-wraps"],t:"CoolCrew AIR",f:"Packaging & Print",y:2026,bg:"#3A86D9",c:["#1F5FAE", "#F28C28", "#F1F3F5", "#132131"],r:"1672/941",iw:1672,ih:941,concept:1,one:"A service van homeowners remember the number of.",disc:"Vehicle wrap",for:"HVAC company",del:"Full van wrap, all sides, roof marker",brief:"An HVAC van is a billboard that parks in driveways. Blue for cooling, orange for heating, one huge phone number and a clean white body that reads from across the street and still looks tidy after a muddy job.",idea:"Hot or cold, one call.",role:"Wrap design and print ready vehicle templates"},
 {id:"frostbite",img:"frostbite-creamery-truck-branding-board",cats:["vehicle-wraps"],t:"Frostbite Creamery",f:"Packaging & Print",y:2025,bg:"#E8505B",c:["#D83A3A", "#FFF4E8", "#7BD3C7", "#F7B7C1"],r:"1672/941",iw:1672,ih:941,concept:1,one:"An ice cream truck you can hear in color.",disc:"Food truck wrap",for:"Ice cream truck",del:"Full truck wrap, serving window, menu panel",brief:"Kids spot an ice cream truck long before they hear it. Candy stripes, a dripping cone mascot and a menu that wraps around the serving window make Frostbite the best looking stop at every block party.",idea:"Life is better with ice cream.",role:"Wrap design, illustration and menu panel"},
 {id:"desert-camper",img:"retro-desert-coffee-camper-moodboard",cats:["vehicle-wraps"],t:"Desert Brew Camper",f:"Packaging & Print",y:2024,bg:"#E7955F",c:["#D06030", "#E7955F", "#2E6B5E", "#F3E2CC"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"A coffee camper that brings the sunset with it.",disc:"Vehicle wrap",for:"Mobile coffee bar",del:"Camper van wrap, side and rear views, pattern",brief:"A vintage camper turned espresso bar that follows markets across the desert. Wavy seventies stripes, mesas and a steaming cup roll around the whole van, so the brand is one long sunset on wheels.",idea:"Golden hour, every hour.",role:"Wrap design, pattern and vehicle templates"},
 {id:"steady-haul",img:"steady-haul-movers-truck-branding-board",cats:["vehicle-wraps"],t:"Steady Haul Movers",f:"Packaging & Print",y:2025,bg:"#F26B21",c:["#0B2440", "#F26B21", "#FFFFFF", "#C3AE9E"],r:"1672/941",iw:1672,ih:941,concept:1,one:"A moving truck that looks like it won't drop your piano.",disc:"Box truck wrap",for:"Moving company",del:"Box truck wrap, cab doors, rear door",brief:"Moving is stressful, so the truck has to look calm and capable. Deep navy, safety orange and stacked boxes in motion say reliable at a glance, and the phone number is sized for the car behind at a red light.",idea:"Reliable, every load.",role:"Wrap design and print ready truck templates"},
 {id:"suds-pups",img:"suds-pups-van-wrap-showcase",cats:["vehicle-wraps"],t:"Suds & Pups",f:"Packaging & Print",y:2026,bg:"#4CC9D6",c:["#4CC9D6", "#FFD23F", "#FFFFFF", "#3B2F2A"],r:"1672/941",iw:1672,ih:941,concept:1,one:"A grooming van dogs get excited about.",disc:"Van wrap",for:"Mobile dog grooming",del:"Full van wrap, QR booking panel, rear doors",brief:"A mobile groomer that parks in the client's driveway. Bubbles, grinning pups and a sunny yellow and aqua palette make the van friendly, and a big QR code on the side turns curious neighbours into bookings.",idea:"Clean pups, happy homes.",role:"Wrap design, illustration and booking QR layout"},
 {id:"taco-comet",img:"taco-comet-neon-food-truck-showcase",cats:["vehicle-wraps"],t:"Taco Comet",f:"Packaging & Print",y:2025,bg:"#5B2A86",c:["#5B2A86", "#FF6B1A", "#00B8A9", "#FFE45E"],r:"1672/941",iw:1672,ih:941,concept:1,one:"A food truck that turns red lights into free advertising.",disc:"Vehicle wrap",for:"Food truck",del:"Full wrap, menu panel, wrap template",brief:"A taco truck with a name that deserved a show. A taco streaks across a cosmic purple sky on both sides, the menu panel is readable from the back of the line, and the artwork is built on the real vehicle template so nothing lands on a door handle.",idea:"Out of this world, parked on your street.",role:"Wrap design, illustration and print ready template"},
 {id:"plant-a-seed",img:"grandmother-and-boy-plant-a-seed",cats:["child-book-illustration"],t:"Nani's Garden",f:"Illustration",y:2026,bg:"#F2B544",c:["#F2B544", "#E06A3B", "#88D0F9", "#4F7A3A"],r:"1774/887",iw:1774,ih:887,concept:1,one:"A picture book spread about planting something together.",disc:"Children's book",for:"Picture book, ages 3 to 7",del:"Double page spread, character designs",brief:"A boy and his grandmother plant a seed on a sunny rooftop garden full of marigolds and sunflowers. Warm gouache light, small details to find and a sleeping cat keep young readers lingering on the page.",idea:"Some things take time to grow.",role:"Character design and illustration"},
 {id:"whale-ride",img:"joyful-whale-ride-beneath-the-sea",cats:["child-book-illustration"],t:"The Whale Ride",f:"Illustration",y:2025,bg:"#1A9BD7",c:["#0C88C6", "#57B3CF", "#F2C230", "#F27E9A"],r:"1774/887",iw:1774,ih:887,concept:1,one:"A spread where the ocean feels like a hug.",disc:"Children's book",for:"Picture book, ages 3 to 6",del:"Double page spread",brief:"A girl in a yellow raincoat rides a gentle blue whale past jellyfish and coral arches. Sunbeams cut through the water and the palette stays bright and soft, so the deep sea feels magical rather than scary.",idea:"The biggest friend in the sea.",role:"Illustration and color script"},
 {id:"lantern-fox",img:"lantern-fox-in-the-moonlit-woodland",cats:["child-book-illustration"],t:"Pip and the Lantern",f:"Illustration",y:2026,bg:"#1E3A5F",c:["#183452", "#E3B46D", "#E76F2E", "#2A9D8F"],r:"1774/887",iw:1774,ih:887,concept:1,one:"Pip finds out the dark is full of friends.",disc:"Children's book",for:"Picture book, ages 3 to 6",del:"Double page spread",brief:"The key spread from Pip Is Afraid of the Dark. Pip steps into the moonlit woods with his lantern and the fireflies come out to meet him. Deep blues hold the night while warm gold keeps it cozy, never scary.",idea:"The dark is just the day with its eyes closed.",role:"Illustration and lighting"},
 {id:"pip",img:"pip-the-fox-character-sheet",cats:["child-book-illustration"],t:"Pip Is Afraid of the Dark",f:"Illustration",y:2026,bg:"#F0884A",c:["#E76F2E", "#2A9D8F", "#FFF3E0", "#264653"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"A picture book about a very small fox and a very big night.",disc:"Children's book",for:"Picture book, ages 3 to 6",del:"Character sheet, spreads, cover",brief:"Pip is a round little fox with oversized ears and a striped scarf he never takes off. The character sheet locks his turnaround and six expressions, from scared to proud, so he stays the same fox across every page.",idea:"The dark is just the day with its eyes closed.",role:"Character design, illustration and cover"},
 {id:"rooftop-robot",img:"robot-tending-a-rooftop-flower",cats:["child-book-illustration"],t:"Bolt's Rooftop Garden",f:"Illustration",y:2025,bg:"#7CC4FB",c:["#7CC4FB", "#E39A3B", "#F25C8C", "#3E6B3A"],r:"1254/1254",iw:1254,ih:1254,concept:1,one:"A rusty robot learns to look after something.",disc:"Children's book",for:"Picture book, ages 4 to 7",del:"Single page illustration, character design",brief:"High above the city, a small rusty robot waters the only flower on the roof. The story is about care and patience, told with a sunny skyline, a big pink bloom and a robot whose face says everything without a word.",idea:"Even robots need something to love.",role:"Character design and illustration"},
 {id:"dragon-library",img:"the-dragons-magical-library-adventure",cats:["child-book-illustration"],t:"The Dragon's Library",f:"Illustration",y:2024,bg:"#C9853E",c:["#7D3119", "#E6B770", "#6BA34A", "#F1E3CB"],r:"1774/887",iw:1774,ih:887,concept:1,one:"A spread that makes kids want to read more.",disc:"Children's book",for:"Picture book, ages 4 to 8",del:"Double page spread",brief:"Two children peek into a candlelit library where a bookish little dragon is lost in a story. Towering shelves, a sleeping cat and glowing windows fill the spread with details to point at on the tenth read.",idea:"Every book is a door.",role:"Illustration and composition"},
 {id:"wfh-burnout",img:"cozy-work-from-home-burnout",cats:["illustration"],t:"Working From Home",f:"Illustration",y:2025,bg:"#E0876A",c:["#D28763", "#1E494A", "#EEDDC9", "#718071"],r:"1122/1402",iw:1122,ih:1402,concept:1,one:"Editorial art for the Monday everyone recognises.",disc:"Editorial illustration",for:"Lifestyle magazine",del:"Feature illustration",brief:"An article about remote work burnout needed a picture that felt honest, not gloomy. A tired designer, a sleeping cat, too many plants and a tiny rain cloud over the laptop say it with warmth and a little humor.",idea:"A small cloud, a big feeling.",role:"Concept and illustration"},
 {id:"star-jar",img:"girl-catching-a-starlit-dream",cats:["illustration"],t:"Star Jar",f:"Illustration",y:2024,bg:"#3557C4",c:["#0A1128", "#1C3D8F", "#FFC857", "#F1F1F1"],r:"1086/1448",iw:1086,ih:1448,concept:1,one:"A magazine cover for people who still look up.",disc:"Editorial illustration",for:"Science magazine",del:"Cover illustration",brief:"A cover for an astronomy issue about light pollution. A girl on a city rooftop catches falling stars in a glass jar, the only real light left in the sky. Painterly gouache, deep blues and one warm glow.",idea:"Keep a little of the sky.",role:"Concept and illustration"},
 {id:"coin-sprout",img:"pastel-fintech-icon-collection",cats:["illustration"],t:"Coin & Sprout",f:"Illustration",y:2025,bg:"#4FD3C4",c:["#2EC4B6", "#3A0CA3", "#CDB4DB", "#FFFFFF"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Spot illustrations that make money feel friendly.",disc:"Spot illustration",for:"Fintech app",del:"Six spot illustrations, icon set",brief:"Money apps tend to look either cold or childish. This set sits in between: a plant growing out of a bar chart, a piggy bank with a tiny rocket, hands passing a glowing coin, all in mint and indigo with one consistent line weight.",idea:"Grow it, don't stress it.",role:"Illustration system and icon design"},
 {id:"still-onboarding",img:"pastel-mental-wellness-onboarding-trio",cats:["illustration"],t:"Still Onboarding Art",f:"Illustration",y:2024,bg:"#CDBDEA",c:["#C3B1E1", "#FFCDB2", "#B5C99A", "#3D405B"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Onboarding art that lets people breathe.",disc:"App illustration",for:"Mental wellbeing app",del:"Three onboarding screens, illustrations",brief:"The Still app asks one question a screen, and the illustrations carry the rest. Soft lilac and peach scenes of breathing, journaling and walking set the pace before a single word is read.",idea:"Less app, more breathing room.",role:"Onboarding illustration and screen layout"},
 {id:"botanical-herbs",img:"vintage-botanical-row-of-four-herbs",cats:["illustration"],t:"Four Herbs",f:"Illustration",y:2025,bg:"#B9B494",c:["#F6EFE2", "#8B7FB8", "#6E8B4E", "#D9534F"],r:"1536/1024",iw:1536,ih:1024,concept:1,one:"Botanical prints with an apothecary soul.",disc:"Botanical illustration",for:"Herbal tea brand",del:"Four botanical illustrations, print series",brief:"Chamomile, lavender, mint and hibiscus drawn in the style of old herbarium plates. Fine line work and soft watercolor make a set that works on tea tins, recipe cards and framed prints alike.",idea:"Old-world botany, new-world tea.",role:"Botanical illustration"},
 {id:"desert-hours",img:"vintage-canyon-sunset-poster",cats:["illustration", "posters"],t:"Desert Hours",f:"Illustration",y:2025,bg:"#E8A6A6",c:["#CC5803", "#E2A0A0", "#4A306D", "#F2D0A4"],r:"1086/1448",iw:1086,ih:1448,concept:1,one:"Travel posters that smell like sunscreen.",disc:"Poster series",for:"Travel and tourism",del:"Three 18 x 24 inch posters",brief:"A series inspired by vintage national park posters, set across desert canyons at three times of day. Flat colors, screen print grain and no gradients, so each one looks pulled from a print shop drawer.",idea:"Morning, noon and the good light.",role:"Illustration and print preparation"},
 {id:"watercolor-romance-chapter-opener",img:"watercolor-romance-chapter-opener",cats:["book-interiors"],t:"Watercolor Romance",f:"Editorial",bg:"#54443A",c:["#54443A", "#B9C0C4", "#868885", "#A1A39F"],r:"750/938",iw:750,ih:938,one:"Soft watercolor that opens every chapter gently.",disc:"Book interior design",for:"Chapter opener",del:"Interior layout, chapter openers, typesetting, print-ready PDF"},
 {id:"floral-fantasy-chapter-opener",img:"floral-fantasy-chapter-opener",cats:["book-interiors"],t:"Floral Fantasy Opener",f:"Editorial",bg:"#ADB9BF",c:["#ADB9BF", "#94A1AF", "#737E93", "#D0DBE3"],r:"1200/1600",iw:1200,ih:1600,one:"A chapter opener that blooms off the page.",disc:"Book interior design",for:"Chapter opener",del:"Interior layout, chapter openers, typesetting, print-ready PDF"},
 {id:"illustrated-fantasy-chapter-page",img:"illustrated-fantasy-chapter-page",cats:["book-interiors"],t:"Illustrated Fantasy Page",f:"Editorial",bg:"#5E493F",c:["#5E493F", "#A89288", "#C1B0A6", "#D7C4BA"],r:"1200/1499",iw:1200,ih:1499,one:"Fantasy art framing every new chapter.",disc:"Book interior design",for:"Chapter page",del:"Interior layout, chapter openers, typesetting, print-ready PDF"},
 {id:"vintage-floral-border-book-page",img:"vintage-floral-border-book-page",cats:["book-interiors"],t:"Vintage Floral Border",f:"Editorial",bg:"#9F9270",c:["#9F9270", "#DBCDA5", "#BFB18C"],r:"514/724",iw:514,ih:724,one:"An old-world floral frame for timeless text.",disc:"Book interior design",for:"Decorative page",del:"Interior layout, chapter openers, typesetting, print-ready PDF"},
 {id:"home-and-decor-interior-magazine",img:"home-and-decor-interior-magazine",cats:["magazines"],t:"Home & Decor",f:"Editorial",bg:"#C9C8C8",c:["#C9C8C8", "#918B88", "#ECEAEB"],r:"236/437",iw:236,ih:437,one:"Calm interiors on a calm, airy grid.",disc:"Magazine design",for:"Interior magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"home-beyond-minimalism-interior-magazine",img:"home-beyond-minimalism-interior-magazine",cats:["magazines"],t:"Home Beyond Minimalism",f:"Editorial",bg:"#BEBDBD",c:["#BEBDBD", "#E3E2E3", "#908A85"],r:"1000/1828",iw:1000,ih:1828,one:"Minimal spreads that let the rooms speak.",disc:"Magazine design",for:"Interior magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"elegant-fashion-and-beauty-magazine",img:"elegant-fashion-and-beauty-magazine",cats:["magazines"],t:"Elegant",f:"Editorial",bg:"#CAC9C9",c:["#CAC9C9", "#322D2C", "#94837A", "#F2F2F2"],r:"736/1394",iw:736,ih:1394,one:"Beauty pages with a luxury finish.",disc:"Magazine design",for:"Fashion and beauty magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"kate-moss-feature-magazine-spread",img:"kate-moss-feature-magazine-spread",cats:["magazines"],t:"Feature Spread",f:"Editorial",bg:"#FFFFFF",c:["#FFFFFF", "#D4D4D4", "#939393"],r:"736/1095",iw:736,ih:1095,one:"A portrait-led feature with editorial confidence.",disc:"Magazine design",for:"Fashion feature",del:"Cover, spreads, grid system, print-ready files"},
 {id:"power-of-woman-feature-magazine-spread",img:"power-of-woman-feature-magazine-spread",cats:["magazines"],t:"Power of Woman",f:"Editorial",bg:"#DDDDDD",c:["#DDDDDD", "#FEFEFE", "#998D85"],r:"493/744",iw:493,ih:744,one:"A strong, celebratory feature layout.",disc:"Magazine design",for:"Feature spread",del:"Cover, spreads, grid system, print-ready files"},
 {id:"elegance-red-fashion-magazine",img:"elegance-red-fashion-magazine",cats:["magazines"],t:"Elegance",f:"Editorial",bg:"#AFAFB0",c:["#AFAFB0", "#903336", "#D5D4D4", "#EAEAEB"],r:"736/1033",iw:736,ih:1033,one:"Red and black with real runway attitude.",disc:"Magazine design",for:"Fashion magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"church-sunday-bulletin-booklet",img:"church-sunday-bulletin-booklet",cats:["magazines"],t:"Sunday Bulletin",f:"Editorial",bg:"#C9C9C9",c:["#C9C9C9", "#4D3C2D", "#8E7D68", "#AFA38F"],r:"675/1200",iw:675,ih:1200,one:"A warm weekly booklet for a community.",disc:"Magazine design",for:"Church booklet",del:"Cover, spreads, grid system, print-ready files"},
 {id:"food-magazine-cover-collection",img:"food-magazine-cover-collection",cats:["magazines"],t:"Food Cover Collection",f:"Editorial",bg:"#3B3B3D",c:["#3B3B3D", "#E8DFD7", "#CDB398", "#876554"],r:"736/1193",iw:736,ih:1193,one:"A series of covers with one strong voice.",disc:"Magazine design",for:"Food magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"foodie-food-magazine",img:"foodie-food-magazine",cats:["magazines"],t:"Foodie",f:"Editorial",bg:"#CACACA",c:["#CACACA", "#947B63", "#E8E2D8", "#F8F7F5"],r:"1200/3147",iw:1200,ih:3147,one:"A full food issue, page after tasty page.",disc:"Magazine design",for:"Food magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"business-innovation-magazine",img:"business-innovation-magazine",cats:["magazines"],t:"Business Innovation",f:"Editorial",bg:"#3C3B40",c:["#3C3B40", "#C8C9C9", "#A0A4AA", "#DEDDDD"],r:"675/1200",iw:675,ih:1200,one:"Sharp business layouts for big ideas.",disc:"Magazine design",for:"Business magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"winter-travel-magazine",img:"winter-travel-magazine",cats:["magazines"],t:"Winter Travel",f:"Editorial",bg:"#B0B2B4",c:["#B0B2B4", "#666666", "#DEDDDF"],r:"375/692",iw:375,ih:692,one:"Snowy escapes on crisp, clean pages.",disc:"Magazine design",for:"Travel magazine",del:"Cover, spreads, grid system, print-ready files"},
 {id:"towereight-corporate-brochure",img:"towereight-corporate-brochure",cats:["brochures"],t:"TowerEight",f:"Editorial",bg:"#36767F",c:["#36767F", "#D0D0D0"],r:"600/755",iw:600,ih:755,one:"A confident brochure for a property brand.",disc:"Brochure design",for:"Corporate brochure",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"interior-design-studio-bifold-brochure",img:"interior-design-studio-bifold-brochure",cats:["brochures"],t:"Interior Design Studio",f:"Editorial",bg:"#D8D8D8",c:["#D8D8D8", "#AC8A62", "#F5F5F5"],r:"735/918",iw:735,ih:918,one:"A bifold as considered as the rooms inside.",disc:"Brochure design",for:"Bifold brochure",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"coffee-shop-trifold-menu-brochure",img:"coffee-shop-trifold-menu-brochure",cats:["menu-design"],t:"Coffee Shop Menu",f:"Packaging & Print",bg:"#EFE5DE",c:["#EFE5DE", "#2B3C2B", "#926C34", "#B39A77"],r:"1080/810",iw:1080,ih:810,one:"A trifold menu with a warm café mood.",disc:"Brochure design",for:"Trifold menu",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"beauty-products-bifold-brochure",img:"beauty-products-bifold-brochure",cats:["brochures"],t:"Beauty Products",f:"Editorial",bg:"#9B5EAB",c:["#9B5EAB", "#C3ACBC", "#53335D"],r:"736/1392",iw:736,ih:1392,one:"Soft tones that sell skincare gently.",disc:"Brochure design",for:"Bifold brochure",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"saladero-soul-project-trifold-brochure",img:"saladero-soul-project-trifold-brochure",cats:["brochures"],t:"Saladero Soul",f:"Editorial",bg:"#67756C",c:["#67756C", "#E3DBD6", "#546056", "#A0A8A3"],r:"1200/1500",iw:1200,ih:1500,one:"A trifold that tells a project step by step.",disc:"Brochure design",for:"Trifold brochure",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"restaurant-bifold-menu",img:"restaurant-bifold-menu",cats:["menu-design"],t:"Restaurant Menu",f:"Packaging & Print",bg:"#564943",c:["#564943", "#F5F4F2", "#3F342E", "#C1AF94"],r:"736/1203",iw:736,ih:1203,one:"A bifold menu that reads like a good meal.",disc:"Brochure design",for:"Bifold menu",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"towereight-property-development-brochure-spreads",img:"towereight-property-development-brochure-spreads",cats:["brochures"],t:"TowerEight Spreads",f:"Editorial",bg:"#D3D3D3",c:["#D3D3D3", "#185A66", "#9BABAC"],r:"600/673",iw:600,ih:673,one:"Development spreads with architectural order.",disc:"Brochure design",for:"Property brochure",del:"Bifold or trifold layout, print-ready PDF"},
 {id:"home-decor-furniture-catalog",img:"home-decor-furniture-catalog",cats:["catalogs"],t:"Home Decor Furniture",f:"Editorial",bg:"#E3E2E3",c:["#E3E2E3", "#7A726A", "#CAC8C5"],r:"736/1410",iw:736,ih:1410,one:"Products styled like a home, not a list.",disc:"Catalog design",for:"Furniture catalog",del:"Catalog layout, product pages, print and digital versions"},
 {id:"batu-bookah-stone-sculpture-catalog",img:"batu-bookah-stone-sculpture-catalog",cats:["catalogs"],t:"Batu Bookah",f:"Editorial",bg:"#FFFDF8",c:["#FFFDF8", "#4D3025", "#C0A98F"],r:"736/1308",iw:736,ih:1308,one:"Stone sculptures given gallery space.",disc:"Catalog design",for:"Sculpture catalog",del:"Catalog layout, product pages, print and digital versions"},
 {id:"the-story-of-adam-illustrated-storybook",img:"the-story-of-adam-illustrated-storybook",cats:["ebooks"],t:"The Story of Adam",f:"Editorial",bg:"#534022",c:["#534022", "#E1D1BD", "#A28A65", "#CDB698"],r:"736/1104",iw:736,ih:1104,one:"A gentle illustrated story for young readers.",disc:"eBook design",for:"Illustrated storybook",del:"eBook layout, workbook pages, editable Canva templates"},
 {id:"water-marketing-presentation",img:"water-marketing-presentation",cats:["presentation-decks"],t:"Water Marketing",f:"Marketing",bg:"#CFF0F3",c:["#CFF0F3", "#162834", "#485862", "#9FC0C7"],r:"474/880",iw:474,ih:880,one:"Fresh, clear slides for a water brand.",disc:"Presentation design",for:"Marketing presentation",del:"Slide design, master template, editable files"},
 {id:"exploration-of-the-moon-science-presentation",img:"exploration-of-the-moon-science-presentation",cats:["presentation-decks"],t:"Exploration of the Moon",f:"Marketing",bg:"#2F2E29",c:["#2F2E29", "#746A59", "#AC997D"],r:"1200/2229",iw:1200,ih:2229,one:"Space science slides with real wonder.",disc:"Presentation design",for:"Science presentation",del:"Slide design, master template, editable files"},
 {id:"professional-documentation-service-flyer",img:"professional-documentation-service-flyer",cats:["flyers"],t:"Professional Documentation",f:"Marketing",bg:"#EDEAE5",c:["#EDEAE5", "#15262E", "#696764", "#B5B1AC"],r:"736/1104",iw:736,ih:1104,one:"A tidy flyer that sells careful writing.",disc:"Flyer design",for:"Service flyer",del:"Flyer design, print and social versions"},
 {id:"research-paper-and-project-report-service-flyer",img:"research-paper-and-project-report-service-flyer",cats:["flyers"],t:"Research & Reports",f:"Marketing",bg:"#E0E0E7",c:["#E0E0E7", "#FEFEFE", "#81819E"],r:"1024/1536",iw:1024,ih:1536,one:"Academic help, presented professionally.",disc:"Flyer design",for:"Service flyer",del:"Flyer design, print and social versions"},
 {id:"the-million-dollar-coffee-book-cover",img:"the-million-dollar-coffee-book-cover",cats:["book-covers"],t:"The Million Dollar Coffee",f:"Editorial",bg:"#FFE3BC",c:["#FFE3BC", "#F2F4FF", "#CAA08A"],r:"1080/1350",iw:1080,ih:1350,one:"A bright, bold cover for a small business success story.",disc:"Book cover design",for:"Business book",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"daphne-book-cover",img:"daphne-book-cover",cats:["book-covers"],t:"Daphne",f:"Editorial",bg:"#000000",c:["#000000", "#22150E", "#663E21", "#D3D3D3"],r:"1000/1500",iw:1000,ih:1500,one:"Fine copper line art on black, quiet and striking.",disc:"Book cover design",for:"Literary novel",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"over-the-sirens-book-cover",img:"over-the-sirens-book-cover",cats:["book-covers"],t:"Over the Sirens",f:"Editorial",bg:"#378D99",c:["#378D99", "#9FCBBC", "#8A7885", "#70A1A2"],r:"570/903",iw:570,ih:903,one:"Torn paper, cherry blossom and a wave that pulls you in.",disc:"Book cover design",for:"Fantasy novel",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"manny-and-the-baby-book-cover",img:"manny-and-the-baby-book-cover",cats:["book-covers"],t:"Manny and the Baby",f:"Editorial",bg:"#158C56",c:["#158C56", "#AF1515", "#0F5E3B", "#544E3E"],r:"1200/1200",iw:1200,ih:1200,one:"Hand-drawn type with jazz-age energy.",disc:"Book cover design",for:"Music fiction",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"the-colony-book-cover",img:"the-colony-book-cover",cats:["book-covers"],t:"The Colony",f:"Editorial",bg:"#1C7CA3",c:["#1C7CA3", "#B6B9BA", "#2A5A71", "#D9D7C8"],r:"1200/1671",iw:1200,ih:1671,one:"Painterly sea and widely spaced type, calm and haunting.",disc:"Book cover design",for:"Literary fiction",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"the-monk-of-mokha-book-cover",img:"the-monk-of-mokha-book-cover",cats:["book-covers"],t:"The Monk of Mokha",f:"Editorial",bg:"#623144",c:["#623144", "#FFFFFF", "#C4C3C1", "#3D565A"],r:"735/729",iw:735,ih:729,one:"A winding illustrated path through the whole story.",disc:"Book cover design",for:"Non-fiction",del:"Front cover, spine, back cover, KDP and IngramSpark files"},
 {id:"ocean-book-cover",img:"ocean-book-cover",cats:["book-covers"],t:"Ocean",f:"Editorial",bg:"#186184",c:["#186184", "#224752", "#7F939B"],r:"736/1104",iw:736,ih:1104,one:"Oars become letters on a textured blue sea.",disc:"Book cover design",for:"History book",del:"Front cover, spine, back cover, KDP and IngramSpark files"}
];
const K = [
 {key:"logos",name:"Logos",f:"Branding",intro:"Marks that work at 16 pixels and on a billboard.",del:"Primary logo, variations, color versions",cover:"march-hare-brewing-co-logo"},
 {key:"brand-identity",name:"Brand Identity",f:"Branding",intro:"Whole visual systems, from the mark to the merch.",del:"Logo, color, type, applications, mockups",cover:"vigio-complex-brand-identity"},
 {key:"brand-guidelines",name:"Brand Guidelines",f:"Branding",intro:"The rulebooks that keep a brand consistent.",del:"Brand guidelines book, usage rules, templates",cover:"taste-of-eden-organic-food-brand-guidelines"},
 {key:"business-cards",name:"Business Cards",f:"Branding",intro:"Small cards that make big first impressions.",del:"Front and back design, print ready files",cover:"skild-cosmetic-clinic-business-card"},
 {key:"social-media-posts",name:"Social Media Posts",f:"Marketing",intro:"Scroll-stopping posts for brands, food and retail.",del:"Post design, caption layout, story versions",cover:"yurakato-fresh-orange-juice-post"},
 {key:"web-banners",name:"Web Banners",f:"Marketing",intro:"Banner sets that sell in a single glance.",del:"Web banner set in multiple sizes",cover:"international-coffee-day-cafe-banner-set"},
 {key:"flyers",name:"Flyers",f:"Marketing",intro:"Flyers that get read, not recycled.",del:"Flyer design, print ready PDF",cover:"graphixsyl-headphones-product-flyer"},
 {key:"posters",name:"Posters",f:"Marketing",intro:"Posters for events, campaigns and big ideas.",del:"Poster design, print ready files",cover:"nexvey-electric-dirt-bike-ad-poster"},
 {key:"youtube-thumbnails",name:"YouTube Thumbnails",f:"Marketing",intro:"Thumbnails that win the click honestly.",del:"Thumbnail design, template",cover:"adventure-travel-vlog-thumbnail"},
 {key:"infographics",name:"Infographics",f:"Marketing",intro:"Data and research turned into pictures people read.",del:"Infographic design, chart system",cover:"world-of-fintech-infographic"},
 {key:"exhibition-booths",name:"Exhibition Booth Designs",f:"Marketing",intro:"Booths, backdrops and roll-ups readable from the far aisle.",del:"Booth graphics, backwall, counter, roll-up banners",cover:"mention-fintech-platform-booth"},
 {key:"presentation-decks",name:"Presentations & Pitch Decks",f:"Marketing",intro:"Decks that keep a room awake and investors interested.",del:"Slide deck design, master template",cover:"marketing-agency-pitch-deck"},
 {key:"landing-pages",name:"Landing Pages",f:"UI/UX",intro:"Landing pages with one goal and a clear path to it.",del:"Landing page UI design, responsive layout",cover:"wash-house-natural-soap-landing-page"},
 {key:"packaging-design",name:"Packaging Design",f:"Packaging & Print",intro:"Boxes, bags and bottles that sell from the shelf.",del:"Packaging, dielines, print specs",cover:"ember-thorn"},
 {key:"label-design",name:"Label Design",f:"Packaging & Print",intro:"Labels for jars, cans, bottles and candles.",del:"Labels, dielines, print files",cover:"hops-outlaws"},
 {key:"menu-design",name:"Menu Design",f:"Packaging & Print",intro:"Menus for restaurants, cafés and bars.",del:"Menus, table cards, signage",cover:"gilded-key"},
 {key:"merchandise-design",name:"Merchandise Design",f:"Packaging & Print",intro:"Merch people actually want to wear.",del:"Apparel, totes, accessories, print methods",cover:"prairie-sound-merch"},
 {key:"vehicle-wraps",name:"Vehicle Wraps",f:"Packaging & Print",intro:"Vans, trucks and food trucks that turn heads at red lights.",del:"Full wraps, vehicle templates",cover:"taco-comet"},
 {key:"illustration",name:"Illustration",f:"Illustration",intro:"Editorial, botanical and spot illustration.",del:"Illustrations, print files",cover:"star-jar"},
 {key:"child-book-illustration",name:"Child Book Illustration",f:"Illustration",intro:"Picture book spreads and characters kids remember.",del:"Spreads, character sheets, covers",cover:"whale-ride"},
 {key:"book-covers",name:"Book Covers",f:"Editorial",intro:"Covers that sell the story from a thumbnail.",del:"Front cover, spine, back cover, KDP and IngramSpark files",cover:"over-the-sirens-book-cover"},
 {key:"book-interiors",name:"Book Interiors",f:"Editorial",intro:"Chapter openers and pages that are a pleasure to read.",del:"Interior layout, chapter openers, typesetting, print-ready PDF",cover:"illustrated-fantasy-chapter-page"},
 {key:"magazines",name:"Magazines & Newsletters",f:"Editorial",intro:"Covers and spreads with a real editorial rhythm.",del:"Cover, spreads, grid system, print-ready files",cover:"food-magazine-cover-collection"},
 {key:"brochures",name:"Brochures & Menus",f:"Editorial",intro:"Bifolds and trifolds that walk people through.",del:"Bifold or trifold layout, print-ready PDF",cover:"towereight-corporate-brochure"},
 {key:"catalogs",name:"Catalogs & Lookbooks",f:"Editorial",intro:"Products laid out so they sell themselves.",del:"Catalog layout, product pages, print and digital versions",cover:"batu-bookah-stone-sculpture-catalog"},
 {key:"ebooks",name:"eBooks, Workbooks & Cookbooks",f:"Editorial",intro:"Digital books people actually finish.",del:"eBook layout, workbook pages, editable Canva templates",cover:"the-story-of-adam-illustrated-storybook"}
];
// Asset source configuration: by default streams assets from https://mehak.studio/
// If you download the assets locally using 'npm run download', set window.__ASSET_BASE = '' (or './')
const ASSET_BASE = (typeof window !== 'undefined' && window.__ASSET_BASE !== undefined) ? window.__ASSET_BASE : 'https://mehak.studio/';
const IMGS = window.__IMG || null;
const TH = p => IMGS ? IMGS[p.img] : (ASSET_BASE ? `${ASSET_BASE}img/t/${p.img}.webp` : `img/t/${p.img}.webp`);
const FULL = p => IMGS ? IMGS[p.img] : (ASSET_BASE ? `${ASSET_BASE}img/f/${p.img}.webp` : `img/f/${p.img}.webp`);
const FILTERS=["All","Branding","Marketing","UI/UX","Editorial","Packaging & Print","Illustration"];
const CAT_COLOR={"Branding":"#FCA311","Marketing":"#F08A5D","UI/UX":"#3CCFC4","Editorial":"#6FB6FF","Packaging & Print":"#E0443E","Illustration":"#B8B8FF"};
const LONG={"Branding":"Branding","Marketing":"Marketing Design","UI/UX":"UI/UX Design","Editorial":"Editorial Design","Packaging & Print":"Packaging & Print","Illustration":"Illustrations"};
/* categories: each gets its projects, a cover and a page color */
/* pale or grey picks fall back to the group color so every page has a real color */
function vivid(hex,fb){const n=parseInt(hex.slice(1),16),r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,s=mx===mn?0:(mx-mn)/(1-Math.abs(2*l-1));return (s<.28||l>.88||l<.12)?fb:hex}
K.forEach(k=>{k.items=P.filter(p=>p.cats.includes(k.key));k.cv=P.find(p=>p.id===k.cover)||k.items[0];k.bg=vivid(k.cv.bg,CAT_COLOR[k.f])});
P.forEach(p=>{if(!p.concept)p.bg=vivid(p.bg,CAT_COLOR[p.f])});
const KBY=Object.fromEntries(K.map(k=>[k.key,k]));
const SUBS=Object.fromEntries(FILTERS.slice(1).map(g=>[g,K.filter(k=>k.f===g)]));
const pad2=n=>String(n).padStart(2,"0");
const PANEL={about:"#FF9E6B",services:"#8FA8FF",process:"#C9F27B",contact:"#FF7BAC"};
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine=matchMedia("(pointer: fine)").matches;

/* ---------- color helpers ---------- */
function lum(hex){const n=parseInt(hex.slice(1),16),r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255;const f=v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);return .2126*f(r)+.7152*f(g)+.0722*f(b)}
function inkFor(hex){return lum(hex)>.28?"#14110d":"#fff8ef"}
const root=document.documentElement;
const auraEl=document.getElementById("aura");let curPaper="";
const wash=document.getElementById("wash");
/* recolor = one style change + a compositor-only crossfade of the old color on top */
/* dark mode keeps every hue but sinks the paper into near-black and lifts the ink */
let DARK=true;try{DARK=(localStorage.getItem("sa-theme")||localStorage.getItem("mf-theme"))!=="light"}catch(e){}
function mixHex(h1,h2,t){const a=parseInt(h1.slice(1),16),b=parseInt(h2.slice(1),16);const c=(s)=>Math.round(((a>>s)&255)*(1-t)+((b>>s)&255)*t);return "#"+((1<<24)|(c(16)<<16)|(c(8)<<8)|c(0)).toString(16).slice(1)}
function pal(hex){const p=DARK?[mixHex(hex,"#0b0a09",.66),mixHex(hex,"#fff8ef",.86)]:[hex,inkFor(hex)];p.push(mixHex(p[1],p[0],.36),mixHex(p[1],p[0],.8));return p}
function applyPal(el,p){el.style.setProperty("--paper",p[0]);el.style.setProperty("--ink",p[1]);el.style.setProperty("--soft",p[2]);el.style.setProperty("--line",p[3])}
let curShown="",curMode=null,curChrome="";
function theme(hex,force){
  if(hex===curPaper&&curMode===DARK&&!force)return;curPaper=hex;curMode=DARK;
  const PP=pal(hex),[paperC,ink]=PP;const prev=curShown;curShown=paperC;hex=paperC;
  if(prev&&prev!==paperC&&!reduce&&!sheetOpenNow()){wash.getAnimations().forEach(x=>x.cancel());wash.style.background=prev;
    wash.animate([{opacity:1},{opacity:0}],{duration:850,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"})}
  /* colors go only to the parts that use them; the artwork field is never restyled */
  if(!theme.all)theme.all=[...document.body.children].filter(el=>el.id!=="field"&&el.tagName!=="SCRIPT");
  /* closed pages are skipped; they pick up the color when they open */
  /* dark mode: the header, menu pills, dock and bottom bar keep one fixed neutral palette (set once), so a colour change
     only restyles the background layers instead of ~400 interface elements */
  
  for(const el of theme.all){if(el.classList.contains("sheet")&&!el.classList.contains("open")&&!el.classList.contains("closing"))continue;applyPal(el,PP)}
  if(!DARK)curChrome="";
  /* the page colour lives on one background layer that nothing inherits from, so changing it restyles a single element */
  if(!theme.bg){theme.bg=document.createElement("div");theme.bg.id="pagebg";document.body.prepend(theme.bg)}
  theme.bg.style.backgroundColor=hex;
  {const bi=DARK?"#f3ede4":ink;if(theme.ink!==bi){theme.ink=bi;document.body.style.color=bi}}
  if(theme.bodyBg!==DARK){theme.bodyBg=DARK;document.body.style.backgroundColor=DARK?"#0b0a09":"#f4efe6"}
}
function sheetOpenNow(){return document.body.classList.contains("sheet-open")}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}

/* ---------- animated cover art ---------- */
function A(c,d,dur){let st="";if(d)st+=`animation-delay:${d}s;`;if(dur)st+=`animation-duration:${dur}s;`;return ` class="${c}"${st?` style="${st}"`:""}`}
function sky(n,col,w,h,seed,rmax){return Array.from({length:n},(_,i)=>`<circle${A("a-twinkle",((i*37+seed)%9)*.3)} cx="${(i*97+seed)%w}" cy="${(i*53+seed*3)%h}" r="${(rmax||1.6)*(.6+(i%3)*.4)}" fill="${col}"/>`).join("")}
function scene(p,w,h){
  const [a,b,c,d]=p.c, cx=w/2, cy=h/2, s=Math.min(w,h), u=p.id+w+"x"+h;
  switch(p.m){
   case"moon": return `<rect width="${w}" height="${h}" fill="${a}"/>`+sky(16,d,w,h*.7,11)+`<g${A("a-pulse")}><circle cx="${cx}" cy="${cy}" r="${s*.36}" fill="${b}" opacity=".08"/><circle cx="${cx}" cy="${cy}" r="${s*.3}" fill="${b}"/></g><circle${A("a-drift")} cx="${cx+s*.12}" cy="${cy-s*.08}" r="${s*.27}" fill="${a}"/><line x1="0" y1="${h*.84}" x2="${w}" y2="${h*.84}" stroke="${b}" stroke-width="2" opacity=".6"/>`;
   case"loop": {const L=`M${cx-s*.32},${cy} C${cx-s*.32},${cy-s*.22} ${cx-s*.04},${cy-s*.22} ${cx},${cy} C${cx+s*.04},${cy+s*.22} ${cx+s*.32},${cy+s*.22} ${cx+s*.32},${cy} C${cx+s*.32},${cy-s*.22} ${cx+s*.04},${cy-s*.22} ${cx},${cy} C${cx-s*.04},${cy+s*.22} ${cx-s*.32},${cy+s*.22} ${cx-s*.32},${cy}Z`;
     return `<defs><linearGradient id="g${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g${u})"/><path d="${L}" fill="none" stroke="${c}" stroke-width="${s*.06}" stroke-linecap="round" opacity=".22"/><path${A("a-dash")} pathLength="1" d="${L}" fill="none" stroke="${c}" stroke-width="${s*.06}" stroke-linecap="round"/>`;}
   case"sun": return `<rect width="${w}" height="${h}" fill="${a}"/><g${A("a-spin")}>`+Array.from({length:16},(_,i)=>{const t=i/16*Math.PI*2;return `<line x1="${cx+Math.cos(t)*s*.42}" y1="${cy+Math.sin(t)*s*.42}" x2="${cx+Math.cos(t)*s*.62}" y2="${cy+Math.sin(t)*s*.62}" stroke="${c}" stroke-width="${s*.025}" stroke-linecap="round" opacity=".55"/>`}).join("")+`</g><ellipse cx="${cx}" cy="${cy}" rx="${s*.36}" ry="${s*.31}" fill="${c}"/><circle${A("a-bob")} cx="${cx+s*.03}" cy="${cy-s*.02}" r="${s*.15}" fill="#FF9F1C"/><rect x="0" y="${h*.86}" width="${w}" height="${h*.14}" fill="${b}"/>`;
   case"petal": return `<rect width="${w}" height="${h}" fill="${d}"/><path${A("a-wave")} d="M${cx},${cy+s*.1} Q${cx-s*.05},${h*.8} ${cx-s*.02},${h}" stroke="${b}" stroke-width="5" fill="none"/><g${A("a-spin",0,40)}>`+[0,72,144,216,288].map(r=>`<ellipse cx="${cx}" cy="${cy-s*.17}" rx="${s*.12}" ry="${s*.2}" fill="${a}" transform="rotate(${r} ${cx} ${cy})"/>`).join("")+`<circle cx="${cx}" cy="${cy}" r="${s*.07}" fill="${c}"/></g>`;
   case"waves": return `<rect width="${w}" height="${h}" fill="${c}"/><circle${A("a-rise")} cx="${w*.72}" cy="${h*.25}" r="${s*.1}" fill="${a}"/>`+[0,1,2,3].map(i=>{const y=h*(.35+i*.17);return `<path${A("a-sway",i*.6,6+i)} d="M${-w*.25},${y} Q0,${y-s*.12} ${w*.25},${y} T${w*.75},${y} T${w*1.25},${y} V${h*1.2} H${-w*.25}Z" fill="${[a,b,d,a][i]}" opacity="${1-i*.12}"/>`}).join("");
   case"rise": return `<defs><linearGradient id="g${u}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g${u})"/><circle${A("a-rise")} cx="${cx}" cy="${h*.72}" r="${s*.24}" fill="${d}" opacity=".9"/>`+[0,1,2].map(i=>`<rect${A("a-sway",i*.8,5)} x="${w*(.1+i*.28)}" y="${h*(.2+i*.08)}" width="${w*.2}" height="3" rx="1.5" fill="${d}" opacity=".6"/>`).join("");
   case"pulse": return `<rect width="${w}" height="${h}" fill="${a}"/>`+[0,1,2].map(i=>`<circle${A("a-ring",i*1.1)} cx="${cx}" cy="${cy}" r="${s*.4}" fill="none" stroke="${b}" stroke-width="3"/>`).join("")+`<circle${A("a-pulse",0,1.6)} cx="${cx}" cy="${cy}" r="${s*.12}" fill="${b}"/>`;
   case"phase": return `<rect width="${w}" height="${h}" fill="${a}"/>`+sky(10,d,w,h,5)+[0,1,2,3,4].map(i=>{const x=w*(.14+i*.18),r=s*.07;return `<g${A("a-bob",i*.3)}><circle cx="${x}" cy="${cy}" r="${r}" fill="${c}"/><circle cx="${x+r*(1.6-i*.8)}" cy="${cy}" r="${r}" fill="${a}"/></g>`}).join("");
   case"drop": return `<rect width="${w}" height="${h}" fill="${b}"/>`+[[.3,.42,.13],[.66,.55,.19],[.45,.8,.08]].map(([x,y,r],i)=>`<path${A("a-bob",i*.7,4+i)} d="M${w*x},${h*y-s*r*1.6} C${w*x+s*r},${h*y-s*r*.4} ${w*x+s*r},${h*y+s*r} ${w*x},${h*y+s*r} C${w*x-s*r},${h*y+s*r} ${w*x-s*r},${h*y-s*r*.4} ${w*x},${h*y-s*r*1.6}Z" fill="${a}"/>`).join("")+`<circle${A("a-ring",.4,4)} cx="${w*.45}" cy="${h*.9}" r="${s*.14}" fill="none" stroke="${a}" stroke-width="2"/>`;
   case"phone": return `<rect width="${w}" height="${h}" fill="${c}"/><rect x="${cx-s*.24}" y="${h*.1}" width="${s*.48}" height="${h*.8}" rx="${s*.06}" fill="#1b1b1b"/><rect x="${cx-s*.21}" y="${h*.15}" width="${s*.42}" height="${h*.12}" rx="6" fill="${a}"/>`+[0,1,2].map(i=>`<rect${A("a-slide",i*.25)} x="${cx-s*.21}" y="${h*(.32+i*.15)}" width="${s*.42}" height="${h*.11}" rx="6" fill="${[b,d,a][i]}"/>`).join("")+`<rect${A("a-pulse",0,2)} x="${cx-s*.12}" y="${h*.79}" width="${s*.24}" height="${h*.05}" rx="${h*.025}" fill="${b}"/>`;
   case"bars": return `<rect width="${w}" height="${h}" fill="${d}"/>`+[.35,.5,.42,.66,.58,.8,.72].map((v,i)=>`<rect${A("a-grow",i*.15)} x="${w*(.12+i*.11)}" y="${h*(.86-v*.55)}" width="${w*.065}" height="${h*v*.55}" rx="3" fill="${i==5?c:b}"/>`).join("")+`<rect x="${w*.1}" y="${h*.22}" width="${w*.24}" height="${h*.08}" rx="4" fill="${a}"/><rect x="${w*.38}" y="${h*.22}" width="${w*.24}" height="${h*.08}" rx="4" fill="${c}" opacity=".5"/>`;
   case"breath": return `<rect width="${w}" height="${h}" fill="${b}"/>`+[.46,.36,.26,.16].map((r,i)=>`<circle${A("a-breathe",i*.45)} cx="${cx}" cy="${cy}" r="${s*r}" fill="${[a,b,a,c][i]}" opacity="${.5+i*.12}"/>`).join("");
   case"horizon": return `<rect width="${w}" height="${h}" fill="${c}"/><circle${A("a-bob",0,8)} cx="${w*.7}" cy="${h*.42}" r="${s*.06}" fill="#E9C46A"/><rect y="${h*.55}" width="${w}" height="${h*.45}" fill="${b}"/><rect y="${h*.55}" width="${w}" height="${h*.04}" fill="${a}"/>`+[0,1,2,3,4].map(i=>`<rect${A("a-twinkle",i*.5,3)} x="${w*(.52+(i%3)*.1)}" y="${h*(.63+i*.06)}" width="${w*.12}" height="2" fill="${c}" opacity=".7"/>`).join("");
   case"page": return `<rect width="${w}" height="${h}" fill="${d}"/><g${A("a-pulse")}><circle cx="${w*.7}" cy="${h*.35}" r="${s*.2}" fill="${a}"/><circle cx="${w*.7}" cy="${h*.35}" r="${s*.12}" fill="#E76F51"/></g><path${A("a-sway",0,9)} d="M${-w*.2},${h*.7} Q${w*.1},${h*.6} ${w*.4},${h*.7} T${w},${h*.66} T${w*1.4},${h*.66} V${h*1.1} H${-w*.2}Z" fill="${c}"/>`;
   case"grid": return `<rect width="${w}" height="${h}" fill="${a}"/>`+Array.from({length:5},(_,i)=>`<line x1="${w*(.1+i*.2)}" y1="0" x2="${w*(.1+i*.2)}" y2="${h}" stroke="${b}" stroke-width=".7" opacity=".25"/>`).join("")+`<rect${A("a-bob",0,6)} x="${w*.1}" y="${h*.3}" width="${w*.44}" height="${h*.5}" fill="${d}"/><circle${A("a-drift")} cx="${w*.72}" cy="${h*.55}" r="${s*.15}" fill="${c}"/>`;
   case"deco": return `<rect width="${w}" height="${h}" fill="${a}"/>`+[.42,.32,.22].map((r,i)=>`<path${A("a-draw",i*.4)} pathLength="1" d="M${cx-s*r},${h*.88} V${cy+s*.05} A${s*r},${s*r} 0 0 1 ${cx+s*r},${cy+s*.05} V${h*.88}" fill="none" stroke="${b}" stroke-width="2"/>`).join("")+`<line x1="${w*.1}" y1="${h*.88}" x2="${w*.9}" y2="${h*.88}" stroke="${b}" stroke-width="2"/><circle${A("a-pulse")} cx="${cx}" cy="${cy+s*.12}" r="${s*.03}" fill="${b}"/>`;
   case"flame": return `<rect width="${w}" height="${h}" fill="${c}"/><rect x="${cx-s*.17}" y="${h*.28}" width="${s*.34}" height="${h*.66}" rx="${s*.06}" fill="${a}"/><rect x="${cx-s*.06}" y="${h*.12}" width="${s*.12}" height="${h*.18}" rx="${s*.02}" fill="${a}"/><rect x="${cx-s*.17}" y="${h*.46}" width="${s*.34}" height="${h*.3}" fill="${d}"/><path${A("a-flicker")} d="M${cx},${h*.5} C${cx+s*.06},${h*.56} ${cx+s*.05},${h*.66} ${cx},${h*.68} C${cx-s*.05},${h*.66} ${cx-s*.06},${h*.58} ${cx},${h*.5}Z" fill="${c}"/><rect x="${cx-s*.17}" y="${h*.44}" width="${s*.34}" height="3" fill="${b}"/><rect x="${cx-s*.17}" y="${h*.76}" width="${s*.34}" height="3" fill="${b}"/>`;
   case"dots": return `<rect width="${w}" height="${h}" fill="${b}"/>`+[[.26,a],[.5,c],[.74,"#FF9F1C"]].map(([x,col],i)=>`<g${A("a-bob",i*.4,3)}><rect x="${w*x-s*.09}" y="${h*.22}" width="${s*.18}" height="${h*.66}" rx="${s*.05}" fill="${d}"/><rect x="${w*x-s*.09}" y="${h*.44}" width="${s*.18}" height="${h*.26}" fill="${col}"/><rect x="${w*x-s*.04}" y="${h*.12}" width="${s*.08}" height="${h*.12}" fill="#222"/></g>`).join("");
   case"comet": return `<rect width="${w}" height="${h}" fill="${a}"/>`+sky(22,d,w,h,3,1.8)+`<path${A("a-dash",0,3)} pathLength="1" d="M${w*.04},${h*.34} Q${w*.3},${h*.14} ${w*.6},${h*.22}" stroke="${d}" stroke-width="6" fill="none" stroke-linecap="round"/><g${A("a-bob",0,2.4)}><rect x="${w*.12}" y="${h*.4}" width="${w*.74}" height="${h*.36}" rx="10" fill="${b}"/><rect x="${w*.62}" y="${h*.46}" width="${w*.18}" height="${h*.14}" rx="4" fill="${a}"/><rect x="${w*.18}" y="${h*.48}" width="${w*.36}" height="${h*.06}" rx="3" fill="${d}"/></g><circle cx="${w*.28}" cy="${h*.8}" r="${s*.08}" fill="#1b1b1b"/><circle cx="${w*.72}" cy="${h*.8}" r="${s*.08}" fill="#1b1b1b"/>`;
   case"key": return `<rect width="${w}" height="${h}" fill="${a}"/><rect x="${w*.08}" y="${h*.06}" width="${w*.84}" height="${h*.88}" fill="none" stroke="${b}" stroke-width="1.5"/><rect x="${w*.11}" y="${h*.08}" width="${w*.78}" height="${h*.84}" fill="none" stroke="${b}" stroke-width=".6" opacity=".6"/><g${A("a-swing")}><circle cx="${cx}" cy="${h*.3}" r="${s*.12}" fill="none" stroke="${b}" stroke-width="${s*.03}"/><rect x="${cx-s*.018}" y="${h*.3+s*.12}" width="${s*.036}" height="${h*.3}" fill="${b}"/><rect x="${cx}" y="${h*.55}" width="${s*.1}" height="${s*.03}" fill="${b}"/><rect x="${cx}" y="${h*.6}" width="${s*.07}" height="${s*.03}" fill="${b}"/></g>`;
   case"fox": return `<rect width="${w}" height="${h}" fill="${a}"/>`+sky(14,c,w,h*.6,7,2.6)+`<rect y="${h*.8}" width="${w}" height="${h*.2}" fill="${d}" opacity=".6"/><g${A("a-bob",0,3)}><circle cx="${cx}" cy="${h*.62}" r="${s*.16}" fill="${b}"/><path d="M${cx-s*.15},${h*.56} L${cx-s*.12},${h*.3} L${cx-s*.02},${h*.5}Z M${cx+s*.15},${h*.56} L${cx+s*.12},${h*.3} L${cx+s*.02},${h*.5}Z" fill="${b}"/><circle cx="${cx-s*.06}" cy="${h*.6}" r="4" fill="${a}"/><circle cx="${cx+s*.06}" cy="${h*.6}" r="4" fill="${a}"/><rect x="${cx-s*.15}" y="${h*.71}" width="${s*.3}" height="${s*.05}" fill="${d}"/></g>`;
   case"mesa": return `<rect width="${w}" height="${h}" fill="${d}"/><circle${A("a-rise",0,9)} cx="${w*.66}" cy="${h*.34}" r="${s*.13}" fill="${b}"/><path d="M0,${h*.62} H${w*.2} L${w*.28},${h*.48} H${w*.55} L${w*.62},${h*.62} H${w} V${h} H0Z" fill="${a}"/><path d="M0,${h*.78} H${w*.4} L${w*.48},${h*.68} H${w*.8} L${w*.86},${h*.78} H${w} V${h} H0Z" fill="${c}"/>`;
   case"sprout": return `<rect width="${w}" height="${h}" fill="${d}"/><g${A("a-bob",0,4)}><circle cx="${cx}" cy="${h*.66}" r="${s*.2}" fill="${a}"/><circle cx="${cx}" cy="${h*.66}" r="${s*.13}" fill="none" stroke="${d}" stroke-width="3"/></g><g${A("a-wave",0,3.5)}><path d="M${cx},${h*.46} V${h*.28}" stroke="${b}" stroke-width="4"/><path d="M${cx},${h*.32} C${cx-s*.18},${h*.3} ${cx-s*.2},${h*.16} ${cx-s*.04},${h*.14} C${cx},${h*.2} ${cx},${h*.28} ${cx},${h*.32}Z M${cx},${h*.36} C${cx+s*.16},${h*.36} ${cx+s*.2},${h*.22} ${cx+s*.05},${h*.2} C${cx+s*.01},${h*.26} ${cx},${h*.32} ${cx},${h*.36}Z" fill="${c}" stroke="${b}" stroke-width="2"/></g>`;
   case"stars": return `<defs><radialGradient id="g${u}" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="${b}"/><stop offset="1" stop-color="${a}"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#g${u})"/>`+sky(26,d,w,h*.55,1,1.7)+`<circle${A("a-pulse",0,2.6)} cx="${cx}" cy="${h*.74}" r="${s*.14}" fill="${c}" opacity=".25"/><rect x="${cx-s*.12}" y="${h*.56}" width="${s*.24}" height="${h*.3}" rx="${s*.04}" fill="none" stroke="${d}" stroke-width="3"/><rect x="${cx-s*.08}" y="${h*.52}" width="${s*.16}" height="${h*.05}" fill="${d}"/><circle${A("a-bob",0,2.6)} cx="${cx}" cy="${h*.74}" r="${s*.06}" fill="${c}"/>`;
   case"orbit": return `<rect width="${w}" height="${h}" fill="${a}"/>`+sky(14,c,w,h,9,1.2)+[0,60,120].map((r,i)=>`<g${A("a-spin",0,10+i*4)}><ellipse cx="${cx}" cy="${cy}" rx="${s*.36}" ry="${s*.13}" fill="none" stroke="${b}" stroke-width="2" opacity=".75" transform="rotate(${r} ${cx} ${cy})"/></g>`).join("")+`<g${A("a-spin",0,5)}><circle cx="${cx+s*.36}" cy="${cy}" r="${s*.028}" fill="${d}"/><circle cx="${cx-s*.36}" cy="${cy}" r=".01" fill="none"/></g><circle${A("a-pulse",0,2.4)} cx="${cx}" cy="${cy}" r="${s*.09}" fill="${c}"/>`;
   case"stamp": return `<rect width="${w}" height="${h}" fill="${d}"/>`+Array.from({length:6},(_,i)=>`<line x1="0" y1="${h*(.1+i*.16)}" x2="${w}" y2="${h*(.1+i*.16)}" stroke="${b}" stroke-width="1" opacity=".08"/>`).join("")+`<g${A("a-bob",0,5)}><g transform="rotate(-5 ${cx} ${cy})"><rect x="${w*.1}" y="${h*.3}" width="${w*.8}" height="${h*.46}" rx="6" fill="${b}"/><rect x="${w*.13}" y="${h*.33}" width="${w*.38}" height="${h*.4}" rx="4" fill="${a}"/><circle cx="${w*.32}" cy="${h*.45}" r="${s*.07}" fill="${b}"/><path d="M${w*.13},${h*.66} L${w*.24},${h*.56} L${w*.34},${h*.64} L${w*.42},${h*.58} L${w*.51},${h*.66} V${h*.73} H${w*.13}Z" fill="${c}"/><rect x="${w*.7}" y="${h*.35}" width="${w*.15}" height="${w*.15}" fill="none" stroke="${a}" stroke-width="2" stroke-dasharray="3 3"/><rect x="${w*.725}" y="${h*.35+w*.025}" width="${w*.1}" height="${w*.1}" fill="${c}"/>`+[0,1,2].map(i=>`<rect x="${w*.56}" y="${h*(.56+i*.05)}" width="${w*.29}" height="2" fill="${d}" opacity=".5"/>`).join("")+`</g></g>`;
   case"play": return `<rect width="${w}" height="${h}" fill="${a}"/><circle cx="${w*.3}" cy="${h*.64}" r="${s*.3}" fill="${b}" opacity=".9"/><g${A("a-bob",0,4)}><ellipse cx="${w*.3}" cy="${h*.68}" rx="${s*.22}" ry="${s*.1}" fill="${d}"/><ellipse cx="${w*.3}" cy="${h*.65}" rx="${s*.15}" ry="${s*.055}" fill="${c}"/></g><g${A("a-pulse",0,1.8)}><rect x="${w*.62}" y="${h*.44}" width="${s*.32}" height="${s*.22}" rx="${s*.06}" fill="${b}"/><path d="M${w*.62+s*.125},${h*.44+s*.06} L${w*.62+s*.21},${h*.44+s*.11} L${w*.62+s*.125},${h*.44+s*.16}Z" fill="${d}"/></g><rect x="${w*.62}" y="${h*.8}" width="${w*.26}" height="${h*.04}" rx="2" fill="${c}"/>`;
   case"chart": return `<rect width="${w}" height="${h}" fill="${a}"/><circle cx="${w*.32}" cy="${h*.6}" r="${s*.19}" fill="none" stroke="${c}" stroke-width="${s*.08}" opacity=".15"/><circle${A("a-draw",0,7)} pathLength="1" cx="${w*.32}" cy="${h*.6}" r="${s*.19}" fill="none" stroke="${b}" stroke-width="${s*.08}" transform="rotate(-90 ${w*.32} ${h*.6})"/><text x="${w*.32}" y="${h*.6+s*.035}" text-anchor="middle" font-family="Bricolage Grotesque, Arial, sans-serif" font-weight="800" font-size="${s*.09}" fill="${c}">62%</text>`+[.4,.65,.5,.85].map((v,i)=>`<rect${A("a-grow",i*.2)} x="${w*(.6+i*.085)}" y="${h*(.86-v*.42)}" width="${w*.055}" height="${h*v*.42}" rx="3" fill="${i==3?d:c}"/>`).join("");
   case"booth": return `<rect width="${w}" height="${h}" fill="${a}"/><rect y="${h*.8}" width="${w}" height="${h*.2}" fill="${c}" opacity=".14"/><rect x="${w*.2}" y="${h*.32}" width="${w*.6}" height="${h*.48}" rx="4" fill="${c}"/><rect x="${w*.2}" y="${h*.32}" width="${w*.6}" height="${h*.1}" rx="4" fill="${b}"/><circle${A("a-pulse",0,3)} cx="${cx}" cy="${h*.56}" r="${s*.085}" fill="${d}"/><rect x="${w*.38}" y="${h*.68}" width="${w*.24}" height="${h*.14}" rx="3" fill="${b}"/>`+[.07,.85].map((x,i)=>`<g${A("a-bob",i*.6,4)}><rect x="${w*x}" y="${h*.4}" width="${w*.08}" height="${h*.42}" rx="2" fill="${i?d:b}"/><rect x="${w*x-2}" y="${h*.82}" width="${w*.08+4}" height="4" fill="${c}"/></g>`).join("")+[0,1,2,3,4].map(i=>`<circle${A("a-twinkle",i*.3,2)} cx="${w*(.28+i*.11)}" cy="${h*.27}" r="${s*.012}" fill="${d}"/>`).join("");
   case"code": return `<rect width="${w}" height="${h}" fill="${a}"/><rect x="${w*.08}" y="${h*.17}" width="${w*.84}" height="${h*.66}" rx="8" fill="#062b3d"/>`+[[.7,b],[.5,c],[.62,d],[.38,b],[.56,c],[.44,d]].map(([wd,col],i)=>`<rect${A("a-slide",i*.25,5)} x="${w*(.13+(i%3===1?.05:0))}" y="${h*(.26+i*.085)}" width="${w*.7*wd}" height="${h*.035}" rx="3" fill="${col}"/>`).join("")+`<rect${A("a-twinkle",0,1)} x="${w*.6}" y="${h*.68}" width="${w*.012}" height="${h*.05}" fill="${d}"/>`;
   case"fold": {const pf=i=>{const x0=w*(.14+i*.24),x1=x0+w*.24,up=i%2===0;return `M${x0},${h*(up?.26:.3)} L${x1},${h*(up?.3:.26)} L${x1},${h*(up?.86:.9)} L${x0},${h*(up?.9:.86)}Z`};
     return `<rect width="${w}" height="${h}" fill="${a}"/><g${A("a-bob",0,5)}><path d="${pf(0)}" fill="#fff"/><path d="${pf(1)}" fill="${b}"/><path d="${pf(2)}" fill="#fff"/><circle cx="${w*.26}" cy="${h*.5}" r="${s*.07}" fill="${c}"/><path d="M${w*.26},${h*.44} q${s*.03},${-s*.05} ${s*.06},${-s*.04}" stroke="${b}" stroke-width="3" fill="none"/>`+[0,1,2].map(i=>`<rect x="${w*.18}" y="${h*(.64+i*.06)}" width="${w*.15}" height="2" fill="${d}" opacity=".5"/><rect x="${w*.66}" y="${h*(.42+i*.08)}" width="${w*.16}" height="2" fill="${d}" opacity=".5"/>`).join("")+`<path${A("a-dash",0,6)} pathLength="1" d="M${w*.42},${h*.8} C${w*.46},${h*.62} ${w*.56},${h*.64} ${w*.52},${h*.44}" stroke="${a}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="${w*.52}" cy="${h*.44}" r="${s*.025}" fill="${c}"/></g>`;}
   case"docs": return `<rect width="${w}" height="${h}" fill="${d}"/><g${A("a-bob",0,6)}><rect x="${w*.1}" y="${h*.27}" width="${w*.8}" height="${h*.64}" rx="6" fill="${a}"/><rect x="${w*.1}" y="${h*.27}" width="${w*.2}" height="${h*.64}" rx="6" fill="#f1f3f5"/>`+[0,1,2,3,4].map(i=>`<rect x="${w*.13}" y="${h*(.33+i*.05)}" width="${w*.12}" height="3" rx="1.5" fill="${i===1?c:b}" opacity="${i===1?1:.35}"/>`).join("")+`<rect x="${w*.35}" y="${h*.33}" width="${w*.34}" height="${h*.03}" rx="2" fill="${b}"/>`+[0,1].map(i=>`<rect x="${w*.35}" y="${h*(.4+i*.04)}" width="${w*.48}" height="2" fill="${b}" opacity=".3"/>`).join("")+`<rect x="${w*.35}" y="${h*.52}" width="${w*.5}" height="${h*.3}" rx="4" fill="${b}"/>`+[.6,.4,.7,.3,.5].map((v,i)=>`<rect${A("a-slide",i*.3,5)} x="${w*.38}" y="${h*(.56+i*.05)}" width="${w*.44*v}" height="3" rx="1.5" fill="${i%2?c:"#9AE6B4"}"/>`).join("")+`</g>`;
  }
  return "";
}
/* typographic layer: makes each tile read like a real deliverable */
function type(p,w,h){
  const [a,b,c,d]=p.c, s=Math.min(w,h), light=lum(a)<.3?"#fff8ef":"#14110d";
  const T=esc(p.t), DS="Bricolage Grotesque, Arial, sans-serif", SR="Instrument Serif, Georgia, serif", MO="JetBrains Mono, monospace";
  const words=p.idea.split(" "), half=Math.ceil(words.length/2), l1=esc(words.slice(0,half).join(" ")), l2=esc(words.slice(half).join(" "));
  switch(p.f){
   case"Branding": return `<rect x="${w*.08}" y="${h*.08}" width="${w*.84}" height="${s*.13}" rx="${s*.065}" fill="${lum(a)<.3?d:"#14110d"}" opacity=".9"/><text x="${w/2}" y="${h*.08+s*.088}" text-anchor="middle" font-family="${DS}" font-weight="800" font-size="${s*.07}" fill="${lum(a)<.3?b:"#fff8ef"}" letter-spacing="-.5">${T.toLowerCase()}</text><text x="${w*.08}" y="${h*.95}" font-family="${MO}" font-size="${s*.032}" fill="${light}" letter-spacing="2">BRAND IDENTITY · ${p.y}</text>`;
   case"Marketing": return `<text x="${w*.07}" y="${h*.14}" font-family="${DS}" font-weight="800" font-size="${s*.085}" fill="${light}" letter-spacing="-1">${l1}</text><text x="${w*.07}" y="${h*.14+s*.09}" font-family="${SR}" font-style="italic" font-size="${s*.085}" fill="${light}">${l2}</text><text x="${w*.07}" y="${h*.95}" font-family="${MO}" font-size="${s*.032}" fill="${light}" letter-spacing="2">${T.toUpperCase()}</text>`;
   case"UI/UX": return `<rect width="${w}" height="${s*.09}" fill="#fffaf2"/><circle cx="${s*.04}" cy="${s*.045}" r="${s*.012}" fill="#FF5F57"/><circle cx="${s*.075}" cy="${s*.045}" r="${s*.012}" fill="#FEBC2E"/><circle cx="${s*.11}" cy="${s*.045}" r="${s*.012}" fill="#28C840"/><rect x="${w*.32}" y="${s*.022}" width="${w*.36}" height="${s*.046}" rx="${s*.023}" fill="#ece6dc"/><text x="${w/2}" y="${s*.056}" text-anchor="middle" font-family="${MO}" font-size="${s*.026}" fill="#5d564d">${p.id.replace(/-/g,"")}.com</text><text x="${w*.07}" y="${h*.95}" font-family="${DS}" font-weight="800" font-size="${s*.05}" fill="${light}">${T}</text>`;
   case"Editorial": {const col=lum(c)>.5&&p.m!=="deco"?"#14110d":light;return `<rect x="0" y="0" width="${w*.035}" height="${h}" fill="#000" opacity=".18"/><text x="${w*.5}" y="${h*.16}" text-anchor="middle" font-family="${SR}" font-size="${Math.min(s*.12,w*1.75/Math.max(1,p.t.length))}" fill="${col}">${T}</text><text x="${w*.5}" y="${h*.16+s*.06}" text-anchor="middle" font-family="${MO}" font-size="${s*.03}" letter-spacing="3" fill="${col}">${esc(p.disc.toUpperCase())}</text>`;}
   case"Packaging & Print": return `<rect x="${w*.06}" y="${h*.83}" width="${w*.88}" height="${h*.12}" fill="#fffaf2"/><text x="${w*.5}" y="${h*.83+h*.08}" text-anchor="middle" font-family="${SR}" font-style="italic" font-size="${Math.min(h*.075,s*.09)}" fill="#14110d">${T}</text>`;
   case"Illustration": return `<text x="${w*.06}" y="${h*.1}" font-family="${SR}" font-style="italic" font-size="${s*.075}" fill="${light}">${T}</text>`;
  }
  return "";
}
function art(p,w,h){
  const g=("L"+p.id+w+"x"+h+(p.f||"n")).replace(/[^A-Za-z0-9]/g,"");
  const light=`<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient><radialGradient id="v${g}" cx=".5" cy=".42" r=".78"><stop offset=".58" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#${g})"/><rect width="${w}" height="${h}" fill="url(#v${g})"/>`;
  return `<svg class="art" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${scene(p,w,h)}${light}${type(p,w,h)}</svg>`}
function ratio(r){const [x,y]=r.split("/").map(Number);return y/x}

/* ---------- field ---------- */
const field=document.getElementById("field");
let W=0,H=0,PW=0,PH=0;
const tiles=[];
function rand(i,k){const x=Math.sin(i*928.37+k*13.11)*43758.5453;return x-Math.floor(x)}
const cur=document.getElementById("cur"),curLabel=document.getElementById("curLabel");
function curState(s){if(cur.dataset.s===s)return;cur.dataset.s=s;curLabel.textContent=s==="view"?"View":""}
const SLOTS=K.map((_,i)=>i).sort((x,y)=>rand(x,7)-rand(y,7));
/* card tilt: eased in requestAnimationFrame (one style write per frame, no CSS transition restarts) */
const TILT=new Map();let tiltRaf=0;
function tiltTo(btn,x,y,s){let t=TILT.get(btn);if(!t){t={x:0,y:0,s:1,tx:0,ty:0,ts:1};TILT.set(btn,t)}t.tx=x;t.ty=y;t.ts=s;if(!tiltRaf)tiltRaf=requestAnimationFrame(tiltStep)}
function tiltStep(){tiltRaf=0;let busy=false;TILT.forEach((t,btn)=>{t.x+=(t.tx-t.x)*.22;t.y+=(t.ty-t.y)*.22;t.s+=(t.ts-t.s)*.22;
  const done=Math.abs(t.tx-t.x)+Math.abs(t.ty-t.y)+Math.abs(t.ts-t.s)<.002;if(done){t.x=t.tx;t.y=t.ty;t.s=t.ts}
  btn.style.transform=(t.x===0&&t.y===0&&t.s===1)?"":`perspective(800px) rotateX(${(-t.y*9).toFixed(2)}deg) rotateY(${(t.x*9).toFixed(2)}deg) scale(${t.s.toFixed(4)})`;
  if(done&&t.x===0&&t.y===0&&t.s===1)TILT.delete(btn);else if(!done)busy=true});if(busy)tiltRaf=requestAnimationFrame(tiltStep)}
const COLS=5,ROWS=Math.ceil(K.length/COLS);
K.forEach((k,i)=>{
  const el=document.createElement("div");el.className="tile kcard";
  const inner=document.createElement("div");inner.className="inner";inner.style.setProperty("--d",(.15+((i*7)%K.length)*.06).toFixed(2)+"s");
  const btn=document.createElement("button");btn.type="button";btn.setAttribute("aria-label",`${k.name}, ${k.items.length} projects. Open category`);
  /* the card takes the cover's own shape (within limits) and the whole image is shown, never cropped */
  const ir=k.cv.ih/k.cv.iw,rr=Math.max(.62,Math.min(1.35,ir));
  btn.innerHTML=`<span class="kimg" style="aspect-ratio:${(1/rr).toFixed(4)};background:${k.cv.c[0]||"#1d1915"}"><img src="${TH(k.cv)}" alt="" decoding="async" draggable="false"></span><span class="kc"><img class="kgl" src="${TH(k.cv)}" alt="" aria-hidden="true" decoding="async" draggable="false"><span class="kg mono">${esc(LONG[k.f])}</span><b>${esc(k.name)}</b><span class="kn mono">${pad2(k.items.length)} projects <em>→</em></span></span>`;
  inner.append(btn);el.append(inner);field.append(el);
  const depth=.62+rand(i,3)*.5;
  const sl=SLOTS[i];tiles.push({el,btn,p:k,i,rr,depth,ox:0,oy:0,fx:0,fy:0,ux:(sl%COLS)/COLS+rand(i,1)*.08,uy:Math.floor(sl/COLS)/ROWS+rand(i,2)*.08,size:0});
  btn.addEventListener("mouseenter",()=>{setHot(i,true);curState("view");gHover=true});
  btn.addEventListener("mouseleave",()=>{gHover=false;tiltTo(btn,0,0,1);curState(dragging?"grab":"drag")});
  btn.addEventListener("focus",()=>setHot(i,true));
  if(fine&&!reduce)btn.addEventListener("pointermove",e=>{
    if(dragging||held)return;const r=btn.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    tiltTo(btn,x,y,1.04);
  });
  btn.addEventListener("click",e=>{if(moved>6){e.preventDefault();return}location.hash="c-"+k.key});
});
function layout(){
  const winW = window.innerWidth, winH = window.innerHeight;
  if(!winW || !winH || winW <= 0 || winH <= 0) return;
  W=winW;H=winH;gridT=null;const ft=document.getElementById("foot");footTop=ft?ft.getBoundingClientRect().top:H-150;
  const mob=W<760,tab=!mob&&W<1100;
  const base=mob?Math.max(118,W*.34):tab?Math.max(140,W*.2):Math.max(140,Math.min(270,W*.155));
  /* phones get a tighter field so the scattered cards stay dense and overlapping like desktop */
  PW=mob?Math.max(W*2.05,760):tab?Math.max(W*1.75,1150):Math.max(W*1.5,1380);PH=mob?Math.max(H*1.25,1000)*ROWS/4:tab?Math.max(H*1.35,1150)*ROWS/4:Math.max(H*1.8,1320)*ROWS/3.6;
  tiles.forEach(t=>{if(gridMode){t.el.style.width=t.el.style.height=t.el.style.zIndex="";return}t.size=base*(.75+t.depth*.5)*Math.min(1.08,1/Math.sqrt(Math.max(.75,t.rr)));t.el.style.width=t.size+"px";t.el.style.height="";t.el.style.zIndex=Math.round(t.depth*100)});
  /* every card owns one cell of a jittered grid and moves with the field as one sheet, so cards never slide over
     each other and every title stays readable; the jitter keeps the layout loose and hand-placed */
  if(!gridMode){const cw=PW/COLS,ch=PH/ROWS,gap=mob?10:22;
    tiles.forEach(t=>{let hh=t.el.offsetHeight||t.size*t.rr+60;const fit=Math.min(1,(cw-gap)/t.size,(ch-gap)/hh);if(fit<1){t.size*=fit;t.el.style.width=t.size+"px";hh=t.el.offsetHeight||hh*fit}t.hh=hh;
      const sl=SLOTS[t.i],col=sl%COLS,row=Math.floor(sl/COLS),stag=(row%2)*cw*.18;
      t.ux=(col*cw+stag*(rand(t.i,4)>.5?1:-1)*0+gap/2+rand(t.i,1)*Math.max(0,cw-gap-t.size))/PW;
      t.uy=(row*ch+gap/2+rand(t.i,2)*Math.max(0,ch-gap-hh))/PH})}
}
let px=0,py=0,vx=0,vy=0,moved=0,dragging=false,lx=0,ly=0;
let mx=0,my=0,tmx=0,tmy=0,sk=0,lastPy=0,ccx=innerWidth/2,ccy=innerHeight/2,tcx=ccx,tcy=ccy;
function mod(n,m){return((n%m)+m)%m}
let pan=null;
function panTo(t){
  if(!t)return;const wrap=(v,m)=>{v=mod(v,m);return v>m/2?v-m:v};
  const dx=wrap(PW/2-t.size/2-(t.ux*PW+px+t.ox),PW), dy=wrap(PH/2-(t.hh||t.size*t.rr+60)/2-(t.uy*PH+py+t.oy),PH);
  vx=vy=0;pan={x:dx,y:dy};
}
/* phones: categories become a simple scrolling grid instead of the drifting field */
const GRIDQ=matchMedia("(max-width: 0px)");let gridMode=false;
function setGrid(){const winW=window.innerWidth;gridMode=(winW>0&&GRIDQ.matches);document.body.classList.toggle("gridmode",gridMode);if(gridMode)tiles.forEach(t=>t.el.style.transform="")}
GRIDQ.addEventListener?GRIDQ.addEventListener("change",()=>{setGrid();layout();render(1)}):0;
/* ---------- globe view ---------- */
let GLOBE=false;/* every visit opens in the scatter view */
var introOn=false;let gP=GLOBE?1:0;let fB=0,VN=0,footTop=0,gridT=null,gB=GLOBE?1:0,rotX=-.22,rotY=0,vrx=0,vry=0,spinDir=1,gHover=false;
function sphere(k,N){if(N<7){const th=k/N*Math.PI*2;return [Math.cos(th),0,Math.sin(th)]}const y=1-(k+.5)*2/N,r=Math.sqrt(1-y*y),th=k*2.399963;return [Math.cos(th)*r,y,Math.sin(th)*r]}
function spin(p,rx,ry){const cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx);const x1=p[0]*cy+p[2]*sy,z1=-p[0]*sy+p[2]*cy;return [x1,p[1]*cx-z1*sx,p[1]*sx+z1*cx]}
/* the filtered cards settle into a tidy, slightly tilted layout centered between header and bottom bar */
function focusGrid(){
  const on=tiles.filter(t=>!t.el.classList.contains("dim"));const n=on.length;if(!n)return null;
  on.forEach(t=>{t.A=(t.el.offsetHeight||t.size*t.rr+60)/t.size});
  const mob=W<760,top=mob?178:Math.max(140,H*.16),bot=(document.getElementById("foot").getBoundingClientRect().top||H-150)-(mob?16:26),padL=mob?14:40,padR=mob?72:110,gap=mob?14:30;
  const aw=W-padL-padR,ah=Math.max(160,bot-top),maxA=Math.max(...on.map(t=>t.A));
  let best={cw:0,c:1};
  for(let c=1;c<=n;c++){const r=Math.ceil(n/c);const cw=Math.min((aw-gap*(c-1))/c,((ah-gap*(r-1))/r)/maxA/1.04,mob?230:300);if(cw>best.cw)best={cw,c}}
  const {cw,c}=best,rows=Math.ceil(n/c),rowH=cw*maxA,totH=rows*rowH+gap*(rows-1);
  const m=new Map();on.forEach((t,k)=>{const row=Math.floor(k/c),inRow=Math.min(c,n-row*c),col=k-row*c;
    const rw=inRow*cw+(inRow-1)*gap,x0=padL+(aw-rw)/2+col*(cw+gap),y0=top+(ah-totH)/2+row*(rowH+gap)+(rowH-cw*t.A)/2;
    const s=cw/t.size,h0=t.size*t.A;m.set(t,{x:x0-(t.size-cw)/2,y:y0-h0*(1-s)/2,s,r:(rand(t.i,9)-.5)*4,k})});
  return m;
}
function render(dt){
  if(gridMode)return;
  if(typeof dt!=="number"||!isFinite(dt)||dt<=0)dt=1;
  if(isNaN(py))py=0;
  if(isNaN(lastPy))lastPy=py;
  const dy=(py-lastPy)/dt;lastPy=py;
  if(isNaN(sk))sk=0;
  if(!reduce){sk+=(Math.max(-9,Math.min(9,dy*.35))-sk)*(1-Math.pow(.88,dt));if(Math.abs(sk)<.005)sk=0}
  const fT=(!GLOBE&&activeFilter!=="All")?1:0;
  if(isNaN(fB))fB=fT;
  if(fB!==fT){fB+=(fT-fB)*(1-Math.pow(.86,dt));if(Math.abs(fT-fB)<.002)fB=fT}
  if(fB>0&&!gridT)gridT=focusGrid();
  const gT=GLOBE?1:0;
  if(isNaN(gP))gP=gT;
  if(isNaN(gB))gB=gT;
  if(gP!==gT){
    gP=gT?Math.min(1,gP+dt*16.667/950):Math.max(0,gP-dt*16.667/950);
    const s=x=>{const z=.62,w=7.854,wd=w*Math.sqrt(1-z*z),t=x*1.9;return 1-Math.exp(-z*w*t)*(Math.cos(wd*t)+z*w/wd*Math.sin(wd*t))};
    gB=gT?s(gP):Math.max(0,1-s(1-gP));
    if(gP===gT)gB=gT;
  }
  if(isNaN(rotX))rotX=-.22;
  if(isNaN(rotY))rotY=0;
  if(isNaN(vrx))vrx=0;
  if(isNaN(vry))vry=0;
  const mobG=W<760;
  if(gB>0&&!dragging){const baseSpin=(gHover||reduce)?0:spinDir*.0022;rotY+=baseSpin*dt+vry*dt;rotX+=vrx*dt;const f=Math.pow(mobG?.955:.94,dt);vry*=f;vrx*=f;if(Math.abs(vry)<0.0001)vry=0;if(Math.abs(vrx)<0.0001)vrx=0}
  const gTop=mobG?150:96,gBot=(footTop>200?footTop:H-140)-12;
  const R=Math.max(80,Math.min(W*(mobG?.36:.3),(gBot-gTop)*(mobG?.3:.36)));
  const RX=Math.max(80,Math.min(W*(mobG?.37:.36),R*(mobG?1.25:1.75)));
  const rRatio=R>0?RX/R:1;
  const gcx=W/2,gcy=(gTop+gBot)/2;
  const gw=Math.max(40,R*(mobG?.9:.74)*(VN&&VN<=3?1.9:VN&&VN<=5?1.5:VN&&VN<=9?1.15:1));
  for(let n=0;n<tiles.length;n++){
    const t=tiles[n],d=t.depth;
    if(isNaN(t.ox))t.ox=0;if(isNaN(t.oy))t.oy=0;
    if(t.fx||t.fy){t.ox+=t.fx*dt;t.oy+=t.fy*dt;const f=Math.pow(.9,dt);t.fx*=f;t.fy*=f;if(Math.abs(t.fx)+Math.abs(t.fy)<.02)t.fx=t.fy=0}
    if(isNaN(px))px=0;if(isNaN(py))py=0;if(isNaN(mx))mx=0;if(isNaN(my))my=0;
    const x=mod(t.ux*PW+px+t.ox,PW)-(PW-W)/2-mx*12*d;
    const y=mod(t.uy*PH+py+t.oy,PH)-(PH-H)/2-my*10*d;
    let X=x,Y=y,S=1;const h=t.size*t.rr+60;
    if(gB>0){
      const on=!t.el.classList.contains("dim");const q=spin(on?sphere(t.vi,VN):sphere(n,tiles.length),rotX,rotY),z=q[2],ps=.34+.78*Math.pow((z+1)/2,1.6);
      t.gz=z;
      const Rv=on&&VN<=5?R*.62:R,gx=gcx+q[0]*Rv*rRatio-t.size/2,gy=gcy+q[1]*Rv-h/2,gs=gw/(t.size||200)*ps;
      X=x+(gx-x)*gB;Y=y+(gy-y)*gB;S=1+(gs-1)*gB;
      const op=on?(Math.round((1-(1-(.16+.84*Math.pow((z+1)/2,1.15)))*gB)*40)/40).toFixed(3):(Math.round((1-gB)*40)/40).toFixed(3);if(t._o!==op){t._o=op;t.el.style.opacity=op}
      const zi=t===held?99999:1000+Math.round(z*400);if(t._z!==zi){t._z=zi;t.el.style.zIndex=zi}
      {/* cards deep behind the globe are hidden outright: no paint, no composite */const hv=(gB>.85&&on&&z<(mobG?-.42:-.62))?"hidden":"";if(t._gv!==hv){t._gv=hv;t.el.style.visibility=hv}}const pe=(gB>.5&&(z<-.2||!on))?"none":"";if(t._pe!==pe){t._pe=pe;t.el.style.pointerEvents=pe}t._g=1;
    }else if(fB>0&&gridT&&gridT.get(t)){
      const g=gridT.get(t);X=x+(g.x-x)*fB;Y=y+(g.y-y)*fB;S=1+(g.s-1)*fB;t._r=g.r*fB;
      const zi=t===held?99999:500+g.k;if(t._z!==zi){t._z=zi;t.el.style.zIndex=zi}t._g=1;
    }else if(t._g){t._g=0;t.gz=undefined;t._o=t._z=t._pe=undefined;if(t._gv){t._gv="";t.el.style.visibility=""}t.el.style.opacity="";t.btn.style.opacity="";t.el.style.zIndex=Math.round(t.depth*100);t.el.style.pointerEvents=""}
    t.cx=X+t.size/2;t.cy=Y+h/2;
    /* cards fully off screen are hidden and skipped, so the browser only restyles what you can see */
    {const m=120,sz=t.size*S,hh=h*S,off=gB===0&&fB===0&&t!==held&&(X+t.size/2+sz/2<-m||X+t.size/2-sz/2>W+m||Y+h/2+hh/2<-m||Y+h/2-hh/2>H+m);
     if(off){if(!t._off){t._off=1;t.el.style.visibility="hidden"}continue}else if(t._off){t._off=0;t.el.style.visibility=""}}
    t.el.style.transform=`translate3d(${X.toFixed(1)}px,${Y.toFixed(1)}px,0)${S!==1?` scale(${S.toFixed(4)})`:""}${t._r&&fB>0&&gB===0?` rotate(${t._r.toFixed(2)}deg)`:""}${sk&&gB===0?` skewY(${(sk*d).toFixed(2)}deg)`:""}`;
  }
}
/* touch screens have no hover: the card nearest the middle of the screen becomes the active one,
   so the page color and the category name follow the drag */
let lastFocus=0,pendingBg=null,pendT=0,themeT=0;/* touch recolors wait until a card has held the centre for a moment, at most every 1.6 s */
function focusCenter(now){
  if(now-lastFocus<140||held)return;lastFocus=now;
  const fx=W/2,fy=H*.46;let best=-1,bd=1e12;
  for(const t of tiles){
    if(t.el.classList.contains("dim"))continue;
    if(gB>.5&&t.gz!==undefined&&t.gz<.15)continue;
    const dx=t.cx-fx,dy=t.cy-fy,dd=dx*dx+dy*dy*1.3;
    if(dd<bd){bd=dd;best=t.i}
  }
  /* while a category filter is on, its colour stays; the centred card only updates the name */
  if(best>=0&&best!==hot)setHot(best,activeFilter==="All");
}
const sheetOpen=()=>document.body.classList.contains("sheet-open");
let last=performance.now(),wx=0,wy=0,lt=0;
/* time-based motion: identical speed at 60, 120, 144 or 240 Hz */
function tick(now){
  const dt=Math.min(4,Math.max(.2,(now-last)/16.667));last=now;
  const open=sheetOpen();
  if(wx||wy){const k=1-Math.pow(.74,dt),kx=wx*k,ky=wy*k;px+=kx;py+=ky;wx-=kx;wy-=ky;if(Math.abs(wx)+Math.abs(wy)<.05)wx=wy=0}
  if(pan){const k=reduce?1:1-Math.pow(.925,dt),kx=pan.x*k,ky=pan.y*k;px+=kx;py+=ky;pan.x-=kx;pan.y-=ky;if(Math.abs(pan.x)+Math.abs(pan.y)<.5)pan=null}
  if(!dragging&&!pan){if(!reduce&&!open&&!GLOBE&&gB===0)py-=0.25*dt;px+=vx*dt;py+=vy*dt;const f=Math.pow(.93,dt);vx*=f;vy*=f;if(Math.abs(vx)<.01)vx=0;if(Math.abs(vy)<.01)vy=0}
  if(!reduce){const k=1-Math.pow(.95,dt);mx+=(tmx-mx)*k;my+=(tmy-my)*k}
  if(cs&&cSheet.classList.contains("open"))catGlobeFrame(dt);
  if(!open&&!introOn){render(dt);if(!fine){focusCenter(now);
    /* touch: recolor once the cards settle, so a full-page restyle never lands mid-drag */
    if(pendingBg&&!dragging&&!pan&&Math.abs(vx)+Math.abs(vy)<1.2&&Math.abs(wx)+Math.abs(wy)<1&&now-pendT>650&&now-themeT>1600){theme(pendingBg);pendingBg=null;themeT=now}}}
  if(fine){const k=1-Math.pow(.76,dt);ccx+=(tcx-ccx)*k;ccy+=(tcy-ccy)*k;cur.style.transform=`translate3d(${ccx.toFixed(1)}px,${ccy.toFixed(1)}px,0)`}
  requestAnimationFrame(tick);
}
/* drag empty space to pan; drag a card to move that card (touch: press and hold a card first) */
let held=null,holdT=0,zTop=1000;
function grabCard(t){held=t;dragging=false;t.fx=t.fy=0;t.el.classList.add("lifted");t.el.style.zIndex=++zTop;field.classList.add("dragging");curState("grab");if(navigator.vibrate)try{navigator.vibrate(12)}catch(e){}}
field.addEventListener("pointerdown",e=>{if(gridMode)return;pan=null;wx=wy=0;moved=0;lx=e.clientX;ly=e.clientY;lt=e.timeStamp;vx=vy=0;
  const tEl=e.target.closest(".tile"),t=tEl&&tiles.find(x=>x.el===tEl);
  /* dragging anywhere, even starting on a card, moves the whole field; press and hold a card to pick that one card up */
  dragging=true;field.classList.add("dragging");curState("grab");
  if(t&&!GLOBE&&activeFilter==="All"){clearTimeout(holdT);holdT=setTimeout(()=>{if(dragging&&moved<10){dragging=false;vx=vy=0;grabCard(t)}},320)}
});
let curOff=null;
addEventListener("pointermove",e=>{
  tcx=e.clientX;tcy=e.clientY;
  const iW=innerWidth||1,iH=innerHeight||1;
  const mxR=e.clientX/iW-.5,myR=e.clientY/iH-.5;
  tmx=isFinite(mxR)?mxR:0;tmy=isFinite(myR)?myR:0;
  const off=sheetOpen()||e.pointerType!=="mouse"||!!e.target.closest(".chrome");if(off!==curOff){curOff=off;cur.classList.toggle("off",off)}
  if(held){const dx=e.clientX-lx,dy=e.clientY-ly,edt=Math.max(1,e.timeStamp-lt)/16.667;held.ox+=dx;held.oy+=dy;held.vx=dx/edt;held.vy=dy/edt;moved+=Math.abs(dx)+Math.abs(dy);lx=e.clientX;ly=e.clientY;lt=e.timeStamp;return}
  if(!dragging)return;const dx=e.clientX-lx,dy=e.clientY-ly,edt=Math.max(1,e.timeStamp-lt)/16.667;
  if(GLOBE){
    const mob=W<760,sens=mob?.0085:.0055;
    rotY+=dx*sens;rotX-=dy*sens;
    const instVry=dx/edt*sens,instVrx=-dy/edt*sens;
    vry=vry*0.35+instVry*0.65;vrx=vrx*0.35+instVrx*0.65;
    if(Math.abs(dx)>0.5)spinDir=dx<0?-1:1;
    moved+=Math.abs(dx)+Math.abs(dy);lx=e.clientX;ly=e.clientY;lt=e.timeStamp;return;
  }
  px+=dx;py+=dy;vx=dx/edt;vy=dy/edt;moved+=Math.abs(dx)+Math.abs(dy);lx=e.clientX;ly=e.clientY;lt=e.timeStamp;
},{passive:true});
function clearDragState(){clearTimeout(holdT);if(held){held.el.classList.remove("lifted");held=null}dragging=false;field.classList.remove("dragging");curState(document.querySelector(".tile button:hover")?"view":"drag");gHover=false;vx=0;vy=0;vrx=0;vry=0}
window.addEventListener("blur",clearDragState);
addEventListener("pointercancel",clearDragState);
addEventListener("pointerup",e=>{clearTimeout(holdT);
  if(held){const t=held;held=null;if(moved>6&&e.timeStamp-lt<90){t.fx=(t.vx||0)*.9;t.fy=(t.vy||0)*.9}t.el.classList.remove("lifted");field.classList.remove("dragging");curState(document.querySelector(".tile button:hover")?"view":"drag");return}
  if(!dragging)return;dragging=false;
  if(e.timeStamp-lt>140){vx=vy=0;vrx=vry=0}
  else if(GLOBE){vry=Math.max(-0.15,Math.min(0.15,vry));vrx=Math.max(-0.15,Math.min(0.15,vrx))}
  field.classList.remove("dragging");curState(document.querySelector(".tile button:hover")?"view":"drag")});
document.addEventListener("mouseleave",()=>{curOff=true;cur.classList.add("off");clearDragState()});
field.addEventListener("wheel",e=>{if(gridMode)return;e.preventDefault();const m=e.deltaMode===1?16:e.deltaMode===2?innerHeight:1;if(GLOBE){const dw=-(e.deltaY+e.deltaX)*m*.00012;vry+=dw;if(Math.abs(dw)>.0005)spinDir=dw<0?-1:1;return}pan=null;wy-=e.deltaY*m*.6;wx-=e.deltaX*m*.6},{passive:false});
addEventListener("resize",()=>{setGrid();layout();if(!sheetOpen()&&!introOn)render(1);moveInd()});

/* ---------- hot item ---------- */
let hot=0;
const nowLabel=document.getElementById("nowLabel"),nowSub=document.getElementById("nowSub");
function flip(el,txt){if(el.textContent===txt)return;el.textContent=txt;if(!reduce&&el.animate)el.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],{duration:420,easing:"cubic-bezier(.16,1,.3,1)"})}
let hotT=0;
function setHot(i,recolor){
  if(tiles[hot])tiles[hot].el.classList.remove("hot");tiles[i].el.classList.add("hot");hot=i;
  clearTimeout(hotT);
  const k=K[i];const apply=()=>{flip(nowLabel,k.name);flip(nowSub,k.intro);if(recolor&&!sheetOpen()&&activeFilter==="All"){if(fine){clearTimeout(setHot._t);setHot._t=setTimeout(()=>{if(!sheetOpen())theme(k.bg)},110)}else{if(pendingBg!==k.bg)pendT=performance.now();pendingBg=k.bg}}};
  /* a short settle delay: skimming across tiles no longer flickers the page color */
  if(recolor)hotT=setTimeout(apply,110);else apply();
}

/* ---------- filters ---------- */
const fwrap=document.getElementById("filters");
const ind=document.createElement("span");ind.className="ind";ind.setAttribute("aria-hidden","true");fwrap.append(ind);
const hint=document.getElementById("hint"),emptyEl=document.getElementById("empty");
let activeFilter="All",activeSub=null;
try{const s=localStorage.getItem("sa-filter")||localStorage.getItem("mf-filter");if(s&&FILTERS.includes(s))activeFilter=s}catch(e){}
const CHEV=`<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 6.5 5 3.5 8 6.5"/></svg>`;
FILTERS.forEach(f=>{
  const g=document.createElement("div");g.className="fgroup";g.dataset.f=f;
  const btn=document.createElement("button");btn.type="button";btn.className="fbtn";btn.dataset.f=f;btn.textContent=f;
  btn.addEventListener("click",()=>{closeMenus();if(sheetOpen()){if(activeFilter!==f)applyFilter(f,false);location.hash="work"}else applyFilter(f,true)});
  g.append(btn);
  if(SUBS[f]){
    const ch=document.createElement("button");ch.type="button";ch.className="chev";ch.innerHTML=CHEV;
    ch.setAttribute("aria-label",`${LONG[f]} subcategories`);ch.setAttribute("aria-haspopup","menu");ch.setAttribute("aria-expanded","false");
    btn.classList.add("has");g.append(ch);
    ch.addEventListener("click",e=>{e.stopPropagation();g.classList.contains("open")?closeMenus():openMenu(g)});
    const m=document.createElement("div");m.className="menu";m.setAttribute("role","menu");m.style.setProperty("--accent",CAT_COLOR[f]);
    const nP=P.filter(p=>p.f===f).length,list0=SUBS[f];
    const rows=[["",`All ${LONG[f]}`,list0.length]].concat(list0.map(k=>[k.key,k.name,k.items.length]));
    m.innerHTML=`<div class="mcard"><div class="mhead"><span class="mscript">${esc(LONG[f].replace(" Design",""))}</span><span class="mmeta mono">${list0.length} categories<br>${pad2(nP)} projects</span></div><div class="mlist"><span class="hl" aria-hidden="true"></span>`+
      rows.map(([key,label,n],k)=>`<button type="button" class="mi" role="menuitem" data-key="${esc(key)}" style="--k:${k}"><span class="no">${pad2(k)}</span><span class="nm">${esc(label)}</span><i>${pad2(n)}</i><b class="go" aria-hidden="true">↗</b></button>`).join("")+
      `</div><div class="mbar" aria-hidden="true"><i></i></div></div><div class="mprev" aria-hidden="true"></div>`;
    const list=m.querySelector(".mlist"),hl=m.querySelector(".hl"),bar=m.querySelector(".mbar i"),prev=m.querySelector(".mprev");
    m._sync=()=>{const max=list.scrollHeight-list.clientHeight;m.classList.toggle("scrolls",max>2);const vis=list.clientHeight/list.scrollHeight;bar.style.height=(vis*100)+"%";bar.style.transform=`translateY(${(max>0?list.scrollTop/max:0)*(1/vis-1)*100}%)`;list.classList.toggle("at-top",list.scrollTop<4);list.classList.toggle("at-end",list.scrollTop>max-4)};
    list.addEventListener("scroll",m._sync,{passive:true});
    const hlTo=it=>{hl.style.height=it.offsetHeight+"px";hl.style.transform=`translateY(${it.offsetTop}px)`;hl.classList.add("on");
      const kk=KBY[it.dataset.key]||list0[0];
      if(kk&&prev.dataset.id!==kk.key){prev.dataset.id=kk.key;prev.innerHTML=`<div class="pv"><img src="${TH(kk.cv)}" alt=""></div><span class="mono">${esc(kk.name)} · ${kk.items.length} projects</span>`}
      prev.classList.toggle("on",!!kk)};
    list.addEventListener("pointerover",e=>{const it=e.target.closest(".mi");if(it)hlTo(it)});
    list.addEventListener("focusin",e=>{const it=e.target.closest(".mi");if(it)hlTo(it)});
    list.addEventListener("pointerleave",()=>{hl.classList.remove("on");prev.classList.remove("on")});
    m.addEventListener("click",e=>{const it=e.target.closest(".mi");if(!it)return;e.stopPropagation();closeMenus();
      if(it.dataset.key){location.hash="c-"+it.dataset.key}else{if(sheetOpen())location.hash="work";applyFilter(f,true)}});
    g.append(m);
    if(fine){let tm;g.addEventListener("pointerenter",()=>{clearTimeout(tm);openMenu(g)});g.addEventListener("pointerleave",()=>{tm=setTimeout(()=>g.classList.contains("open")&&closeMenus(),180)})}
  }
  fwrap.append(g);
});
function openMenu(g){
  closeMenus(g);clearTimeout(g._ct);g.classList.remove("closing");g.classList.add("open");const ch=g.querySelector(".chev");ch&&ch.setAttribute("aria-expanded","true");
  const m=g.querySelector(".menu");m.style.setProperty("--shift","0px");
  requestAnimationFrame(()=>{const r=m.getBoundingClientRect();let sh=0;if(r.left<12)sh=12-r.left;else if(r.right>innerWidth-12)sh=innerWidth-12-r.right;m.style.setProperty("--shift",sh+"px");m.classList.toggle("pleft",r.right+sh+230>innerWidth);m._sync&&m._sync()});
}
function closeMenus(except){fwrap.querySelectorAll(".fgroup.open").forEach(g=>{if(g!==except){g.classList.remove("open");g.classList.add("closing");clearTimeout(g._ct);g._ct=setTimeout(()=>g.classList.remove("closing"),600);const ch=g.querySelector(".chev");ch&&ch.setAttribute("aria-expanded","false")}})}
document.addEventListener("click",e=>{if(!e.target.closest(".fgroup"))closeMenus()});
addEventListener("keydown",e=>{if(e.key==="Escape")closeMenus()});
function moveInd(){const b=fwrap.querySelector('.fgroup.active');if(!b)return;const r=b.getBoundingClientRect(),pr=fwrap.getBoundingClientRect();ind.style.width=r.width+"px";ind.style.height=r.height+"px";ind.style.transform=`translate(${r.left-pr.left}px,${r.top-pr.top}px)`}
function applyFilter(f,user){
  activeFilter=f;activeSub=null;try{localStorage.setItem("sa-filter",f)}catch(e){}
  fwrap.querySelectorAll(".fgroup").forEach(g=>{g.classList.toggle("active",g.dataset.f===f);g.querySelector(".fbtn").setAttribute("aria-pressed",g.dataset.f===f?"true":"false")});
  moveInd();markMenus();updateTiles();
  if(user&&!sheetOpen()){pendingBg=null;theme(f==="All"?K[hot].bg:CAT_COLOR[f])}
}
function applySub(s){activeSub=s;markMenus();updateTiles()}
function markMenus(){const cur=(location.hash.match(/^#c-(.+)/)||[])[1];fwrap.querySelectorAll(".mi").forEach(it=>it.setAttribute("aria-checked",it.dataset.key&&it.dataset.key===cur?"true":"false"))}
function updateTiles(){
  const f=activeFilter;let first=-1,n=0;document.body.classList.toggle("filtering",f!=="All");
  tiles.forEach(t=>{const on=f==="All"||t.p.f===f;t.el.classList.toggle("dim",!on);t.btn.tabIndex=on?0:-1;if(on){t.vi=n;n++;if(first<0)first=t.i}});VN=n;gridT=null;if(f==="All"&&updateTiles._was&&updateTiles._was!=="All")requestAnimationFrame(()=>{layout()});updateTiles._was=f;
  emptyEl.classList.toggle("on",n===0);
  hint.textContent=f==="All"?`${K.length} categories · ${P.length} projects`:`${LONG[f]} · ${n} categories · ${P.filter(p=>p.f===f).length} projects`;
  if(first>=0&&tiles[hot].el.classList.contains("dim"))setHot(first,false);
}
function visible(){return tiles.filter(t=>!t.el.classList.contains("dim")).map(t=>t.i)}

/* ---------- panel content ---------- */
const cats=FILTERS.slice(1);
document.getElementById("counts").innerHTML=cats.map(c=>`<div style="background:${CAT_COLOR[c]};color:${inkFor(CAT_COLOR[c])}"><b data-count="${P.filter(p=>p.f===c).length}">0</b><span class="mono">${c}</span></div>`).join("")+`<div style="background:#14110d;color:#fff8ef"><b data-count="${P.length}">0</b><span class="mono">Projects in the portfolio</span></div><div style="background:#fff8ef"><b data-count="${K.length}">0</b><span class="mono">Categories</span></div><div style="background:#fff8ef"><b data-count="1">0</b><span class="mono">Point of contact</span></div>`;
const BAND=K.map(k=>k.name);
document.getElementById("bandTrack").innerHTML=BAND.concat(BAND).map(x=>`<span>${x}</span>`).join("");
const LEDGER={
 "Branding":[["Brand strategy","Positioning, audience and voice"],["Logo design","Primary, secondary and icon marks"],["Visual identity","Color, type, pattern and imagery"],["Brand guidelines","The rulebook that keeps it all together"],["Rebrands","Keep the equity, lose the dust"]],
 "Marketing":[["Campaign concepts","The big idea and hero visuals"],["Social media","Feeds, carousels, stories and templates"],["Ad creatives","Meta, Google and LinkedIn sets"],["Email","Klaviyo and Mailchimp campaigns and flows"],["Decks","Investor, sales and keynote presentations"]],
 "UI/UX":[["Websites","Business sites, portfolios and blogs"],["E-commerce","Shopify and WooCommerce stores"],["Landing pages","One page, one goal"],["Apps","iOS, Android and web apps"],["Dashboards","SaaS products and admin tools"],["Wireframes and prototypes","Test it before you build it"]],
 "Editorial":[["Book covers","Fiction, non-fiction, memoir and children's"],["Interiors","Formatting for KDP, IngramSpark and offset"],["Journals and planners","Pages people want to fill"],["Magazines","Layout systems that last"],["Catalogs and reports","Lookbooks, profiles and annual reports"]],
 "Packaging & Print":[["Packaging","Boxes, pouches, bottles and dielines"],["Labels","Wine, beer, coffee, candles and skincare"],["Menus","Restaurants, cafés, bars and food trucks"],["Merch","Apparel, totes and swag kits"],["Vehicle wraps","Food trucks, vans and box trucks"],["Signage and stationery","First impressions in real life"]],
 "Illustration":[["Children's books","Characters, spreads and covers"],["Characters and mascots","Turnarounds and expressions"],["Editorial art","Conceptual pieces for articles"],["Web and app art","Heroes, spots and onboarding"],["Posters and prints","Art worth framing"]]
};
document.getElementById("ledger").innerHTML=cats.map(n=>`<details><summary><span class="dot" style="background:${CAT_COLOR[n]}"></span><h3>${esc(n)}</h3><span class="n">${String(P.filter(p=>p.f===n).length).padStart(2,"0")} projects</span><span class="pm">+</span></summary><ul>${LEDGER[n].map(([s,desc],j)=>`<li style="animation-delay:${j*.04}s"><a href="#work" data-cat="${esc(n)}"><b>${esc(s)}</b><span>${esc(desc)}</span><em>→</em></a></li>`).join("")}</ul></details>`).join("");
const STEPS=[["The questions","Who are your customers, and what do they need to feel?","#FFD23F"],["The direction","Mood, tone and visual language, agreed before anything gets designed.","#FF9E6B"],["The options","Two or three real directions. Never one safe guess.","#F7B8C4"],["The polish","We refine until you stop saying it's nice and start saying that's us.","#B8B8FF"],["The files","Print ready, developer ready, neatly labelled. No final_final_v3.","#9FC3D2"],["The launch","You go live. I'm still one message away.","#fff8ef"]];
document.getElementById("steps").innerHTML=STEPS.map(([w,h,c],i)=>`<li style="background:${c}"><span class="no">0${i+1}</span><span class="what mono">${w}</span><span class="head">${esc(h)}</span><span class="ghost" aria-hidden="true">0${i+1}</span></li>`).join("");
{const pe=document.getElementById("portrait");if(pe){pe.setAttribute("aria-label","Shifa Ashad");pe.innerHTML="";}}

/* ---------- private + contact ---------- */
const NEEDS=["Logo + identity","Packaging","Labels","Menu","Merch","Vehicle wrap","Website","Shopify store","App or dashboard","Social + ads","Book cover","Picture book","Illustration"];
const chips=document.getElementById("chips"),bMsg=document.getElementById("bMsg"),bCopy=document.getElementById("bCopy"),bOut=document.getElementById("bMsgOut");
chips.innerHTML=NEEDS.map(n=>`<button type="button" aria-pressed="false">${n}</button>`).join("");
chips.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")==="true"?"false":"true")});
function briefText(){const picked=[...chips.querySelectorAll('[aria-pressed="true"]')].map(b=>b.textContent);return `Hi Shifa,\n\n${bMsg.value.trim()||"Here's what I'm working on:"}\n\n${picked.length?"I need help with: "+picked.join(", ")+"\n\n":""}Looking forward to working together.`}
bCopy.addEventListener("click",()=>{const t=briefText();const ok=()=>{bOut.textContent="Copied. Paste it into your Upwork message.";};const fail=()=>{bMsg.value=t;bMsg.select();bOut.textContent="Selected. Press copy on your keyboard."};try{navigator.clipboard.writeText(t).then(ok,fail)}catch(e){fail()}});

/* ---------- reveals ---------- */
function splitWords(el){
  if(el.dataset.split)return;el.dataset.split="1";let i=0;
  const walk=node=>{[...node.childNodes].forEach(n=>{
    if(n.nodeType===3){const frag=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(part=>{if(!part)return;if(/^\s+$/.test(part)){frag.append(" ");return}const w=document.createElement("span");w.className="w";const s=document.createElement("span");s.style.setProperty("--i",i++);s.textContent=part;w.append(s);frag.append(w)});n.replaceWith(frag)}
    else if(n.nodeType===1&&!n.classList.contains("w"))walk(n);
  })};
  walk(el);
}
function prep(c){
  [...c.children].forEach((el,i)=>{el.setAttribute("data-r","");el.style.setProperty("--d",Math.min(i*.045,.25).toFixed(2)+"s")});
  c.querySelectorAll("h1.big").forEach(el=>{splitWords(el);el.setAttribute("data-r","")});
  c.querySelectorAll(".cgrid>a,.morelist>a,.counts>div,.tools>div,.steps>li,.ledger>details,.p-gallery>div,.facts>div,.principles>div,.swatches>button").forEach(el=>{
    const idx=[...el.parentNode.children].indexOf(el);el.setAttribute("data-r","");el.style.setProperty("--d",(idx*.06).toFixed(2)+"s");
  });
}
function countUp(el){
  const to=+el.dataset.count,pad=+(el.dataset.pad||0);if(reduce){el.textContent=String(to).padStart(pad,"0");return}
  const t0=performance.now(),dur=1300;const step=t=>{const k=Math.min(1,(t-t0)/dur),v=Math.round(to*(1-Math.pow(1-k,3)));el.textContent=String(v).padStart(pad,"0");if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step);
}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const t=en.target;t.classList.add("in");io.unobserve(t);if(t.matches("[data-count]"))countUp(t);t.querySelectorAll("[data-count]").forEach(countUp)}),{threshold:0,rootMargin:"0px 0px -6% 0px"});
function reveal(scope){
  const els=scope.querySelectorAll("[data-r]");io.disconnect();els.forEach(e=>e.classList.remove("in"));
  setTimeout(()=>els.forEach(e=>io.observe(e)),reduce?0:90);
}
document.querySelectorAll(".sheet-inner").forEach(c=>{if(c.id!=="projectInner"&&c.id!=="catInner")prep(c)});

/* ---------- project page ---------- */
function catHTML(k){
  const sib=K.filter(x=>x.f===k.f&&x!==k);
  return `<a class="back mono" href="#work"><span>←</span> All categories</a>
  <div class="chead"><div class="eyebrow mono">${esc(LONG[k.f])} · ${pad2(k.items.length)} projects</div>
  <h1 class="big">${esc(k.name)}</h1>
  <p class="lead">${esc(k.intro)}</p></div>
  <div class="cgrid">${k.items.map(p=>`<a class="citem" href="#p-${p.id}" data-k="${k.key}"><img src="${TH(p)}" alt="${esc(p.t)}" loading="lazy" decoding="async" width="${p.iw}" height="${p.ih}"><span class="ci"><b>${esc(p.t)}</b><span class="mono">${esc(p.for)}</span></span></a>`).join("")}</div>
  ${sib.length?`<div class="more"><span class="mono soft">More in ${esc(LONG[k.f])}</span><div class="morelist">${sib.map(x=>`<a href="#c-${x.key}"><img src="${TH(x.cv)}" alt="" loading="lazy"><span><b>${esc(x.name)}</b><em class="mono">${pad2(x.items.length)} projects</em></span></a>`).join("")}</div></div>`:""}
  <div class="end-link"><span class="mono">Need ${esc(k.name.toLowerCase())}?</span><a class="pill" href="#contact">Start a project <span class="arrow">↗</span></a></div>`;
}
function projectHTML(p,k){
  const list=k.items,i=list.indexOf(p),n=list[(i+1)%list.length];
  const facts=[["Category",k.name],["Discipline",p.disc],["For",p.for],["Deliverables",p.del]];
  if(p.y)facts.unshift(["Year",p.y]);if(p.concept)facts.push(["Context","Self-initiated concept"]);
  const other=p.cats.filter(c=>c!==k.key).map(c=>KBY[c]).filter(Boolean);
  const crops=p.iw>=1500||p.ih>=1500;
  return `<a class="back mono" href="#c-${k.key}"><span>←</span> Back to ${esc(k.name)}</a>
  <div class="p-art img${p.ih>p.iw?" tall":""}" style="aspect-ratio:${p.iw}/${p.ih};${p.ih>p.iw?`--tall:${(p.iw/p.ih).toFixed(4)}`:""}"><img src="${TH(p)}" data-full="${FULL(p)}" alt="${esc(p.t)}" data-zoom decoding="async" fetchpriority="high"><span class="zoomhint mono">Click to enlarge ⤢</span></div>
  <div class="eyebrow mono">${esc(k.name)} · ${esc(LONG[p.f])}${p.y?` · ${p.y}`:""}</div>
  <div class="facts" style="--n:${facts.length}">${facts.map(([a,v])=>`<div><span class="mono">${a}</span><b>${esc(v)}</b></div>`).join("")}</div>
  <div class="p-head">
    <h1 class="big">${esc(p.t)}</h1>
    <p class="lead">${esc(p.one)}</p>
    ${other.length?`<div class="tags">${other.map(x=>`<a class="mono" href="#c-${x.key}">Also in ${esc(x.name)} <span>↗</span></a>`).join("")}</div>`:""}
    <div class="swatches" aria-label="Palette. Click a color to copy it">${p.c.map(h=>`<button type="button" class="mono" data-hex="${h}"><i style="background:${h}"></i><span>${h}</span></button>`).join("")}</div>
  </div>
  ${p.brief?`<div class="p-body"><span class="mono">Project · The brief</span><p>${esc(p.brief)}</p><span class="mono">The idea</span><p class="idea">${esc(p.idea)}</p></div>`:""}
  ${crops?`<div class="p-gallery">${["14% 20%","52% 48%","88% 82%"].map(pos=>`<div class="crop" data-zoom data-src="${FULL(p)}" style="background-image:url('${FULL(p)}');background-position:${pos}"></div>`).join("")}</div>`:""}
  ${p.role?`<div class="p-body"><span class="mono">Role</span><p>${esc(p.role)}</p></div>`:""}
  ${list.length>1?`<a class="next" href="#p-${n.id}"><span><span class="mono" style="color:var(--soft);display:block;margin-bottom:10px"><i class="sw" style="background:${n.bg}"></i>Next in ${esc(k.name)} · ${pad2(((i+1)%list.length)+1)} / ${pad2(list.length)}</span><span class="t" style="display:block">${esc(n.t)} →</span></span><span class="arr" aria-hidden="true"></span></a>`:""}
  <div class="end-link"><span class="mono">Like this one?</span><a class="pill" href="#contact">Start a project <span class="arrow">↗</span></a></div>`;
}
const pSheet=document.getElementById("sheet-project"),pInner=document.getElementById("projectInner"),cSheet=document.getElementById("sheet-cat"),cInner=document.getElementById("catInner");
let lastCat=null;
cInner.addEventListener("click",e=>{const a=e.target.closest(".citem");if(a)lastCat=a.dataset.k});
const lb=document.getElementById("lb"),lbImg=lb.querySelector("img");
function lbOpen(src,alt){lbImg.src=src;lbImg.alt=alt||"";lb.classList.add("on");lb.setAttribute("aria-hidden","false")}
function lbClose(){lb.classList.remove("on");lb.setAttribute("aria-hidden","true")}
lb.addEventListener("click",lbClose);
addEventListener("keydown",e=>{if(e.key==="Escape"&&lb.classList.contains("on")){e.stopImmediatePropagation();lbClose()}},true);
pInner.addEventListener("click",e=>{const z=e.target.closest("[data-zoom]");if(!z)return;lbOpen(z.dataset.full||z.dataset.src||z.src,z.alt)});
pInner.addEventListener("click",e=>{const b=e.target.closest("[data-hex]");if(!b)return;const sp=b.querySelector("span"),hex=b.dataset.hex;
  const done=()=>{sp.textContent="Copied";setTimeout(()=>sp.textContent=hex,1100)};try{navigator.clipboard.writeText(hex).then(done,()=>{})}catch(err){}});
pSheet.addEventListener("scroll",()=>{if(reduce)return;const sv=pInner.querySelector(".p-art:not(.img) svg");if(!sv)return;const y=Math.min(pSheet.scrollTop,900);sv.style.transform=`translateY(${(y*.18).toFixed(1)}px) scale(${(1+y*.00025).toFixed(4)})`},{passive:true});

/* ---------- magnetic pills ---------- */
if(fine&&!reduce){
  let mag=null;
  document.addEventListener("pointermove",e=>{const p=e.target.closest(".pill");if(mag&&mag!==p){mag.style.transform="";mag=null}
    if(!p)return;mag=p;const r=p.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;p.style.transform=`translate(${(x*.25).toFixed(1)}px,${(y*.35).toFixed(1)}px)`},{passive:true});
}

/* ---------- routing ---------- */
document.addEventListener("pointerdown",e=>{root.style.setProperty("--cx",e.clientX+"px");root.style.setProperty("--cy",e.clientY+"px")},true);
document.addEventListener("keydown",()=>{root.style.setProperty("--cx","50%");root.style.setProperty("--cy","50%")},true);
const sheets={about:"sheet-about",services:"sheet-services",process:"sheet-process",contact:"sheet-contact"};
let current="";
/* remembers how far down each category page was, so Back returns to the same spot */
const SCROLL={};
function route(){
  closeMenus();
  {const s=document.querySelector(".sheet.open");if(s&&current&&current.startsWith("c-"))SCROLL[current]=s.scrollTop}
  const h=(location.hash||"#work").slice(1);
  const prev=current;current=h;
  document.querySelectorAll("#nav a:not([data-ext])").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+h));
  let open=null,color=null;
  if(sheets[h]){open=document.getElementById(sheets[h]);color=PANEL[h]}
  else if(h.startsWith("c-")&&KBY[h.slice(2)]){
    const k=KBY[h.slice(2)];lastCat=k.key;
    const swapping=prev.startsWith("c-")&&cSheet.classList.contains("open");
    cInner.innerHTML=catHTML(k);prep(cInner);catGlobeSetup();
    if(swapping){cInner.classList.remove("swap");void cInner.offsetWidth;cInner.classList.add("swap")}
    open=cSheet;setHot(K.indexOf(k),false);color=k.bg;document.title=k.name+" · Shifa Ashad";
  }
  else if(h.startsWith("p-")){
    const p=P.find(x=>x.id===h.slice(2));
    if(p){
      const k=(lastCat&&p.cats.includes(lastCat))?KBY[lastCat]:KBY[p.cats[0]];lastCat=k.key;
      const swapping=prev.startsWith("p-")&&pSheet.classList.contains("open");
      pInner.innerHTML=projectHTML(p,k);prep(pInner);
      {const im=pInner.querySelector(".p-art img");if(im&&im.dataset.full&&im.dataset.full!==im.getAttribute("src")){const f=new Image();f.decoding="async";f.onload=()=>{if(im.isConnected)im.src=f.src};f.src=im.dataset.full}}
      if(swapping){pInner.classList.remove("swap");void pInner.offsetWidth;pInner.classList.add("swap")}
      open=pSheet;color=p.bg;document.title=p.t+" · Shifa Ashad";flip(nowLabel,p.t);flip(nowSub,p.one);
    }
  }
  if(h==="work"&&prev&&prev.startsWith("c-")&&KBY[prev.slice(2)]&&!GLOBE){const ki=K.indexOf(KBY[prev.slice(2)]);const t=tiles.find(x=>x.i===ki);if(t){if(activeFilter!=="All")applyFilter("All",false);setHot(ki,false);panTo(t)}}
  if(!/^[pc]-/.test(h))document.title="Shifa Ashad · Brand + UI/UX Designer";
  {const PG={about:["About","Hi, I\u2019m Shifa Ashad, a creative designer."],services:["Services","Everything people see before they ever meet you."],process:["Process","How a project goes, from questions to files."],contact:["Contact","Let\u2019s start your project on Upwork."]};if(PG[h]){flip(nowLabel,PG[h][0]);flip(nowSub,PG[h][1])}else if(!open&&prev&&/^(p-|about|services|process|contact)/.test(prev)){const k=K[hot];if(k){flip(nowLabel,k.name);flip(nowSub,k.intro)}}}
  markMenus();
  document.querySelectorAll(".sheet").forEach(s=>{if(s!==open&&s.classList.contains("open")){s.classList.remove("open");s.classList.add("closing");clearTimeout(s._ct);s._ct=setTimeout(()=>s.classList.remove("closing"),1000)}});
  document.body.classList.toggle("sheet-open",!!open);clearTimeout(route._full);document.body.classList.remove("sheet-full");if(open)route._full=setTimeout(()=>{if(document.body.classList.contains("sheet-open"))document.body.classList.add("sheet-full")},760);if(open)cur.classList.add("off");
  field.classList.toggle("paused",!!open);
  theme(color||(activeFilter==="All"?K[hot].bg:CAT_COLOR[activeFilter]));
  if(open){applyPal(open,pal(color||curPaper));clearTimeout(open._ct);open.classList.remove("closing");open.classList.add("open");open.scrollTop=(h.startsWith("c-")&&SCROLL[h])||0;reveal(open.querySelector(".sheet-inner"))}
}
addEventListener("hashchange",route);
/* the logo and Work always return to a fresh home screen: all categories, centered, nothing open */
function goHome(e){
  if(e){e.preventDefault()}
  closeMenus();if(typeof lbClose==="function")lbClose();
  if(activeFilter!=="All")applyFilter("All",false);
  pan=null;vx=vy=wx=wy=0;
  if(location.hash!=="#work"){location.hash="work"}else{route()}
  {const t=tiles[0];if(t&&!GLOBE)panTo(t)}
  setHot(0,true);
}
document.querySelector("#brand a").addEventListener("click",goHome);
document.querySelectorAll('#nav a[href="#work"]').forEach(a=>a.addEventListener("click",goHome));
addEventListener("keydown",e=>{
  if(e.key==="Escape"&&sheetOpen()){location.hash=(current.startsWith("p-")&&lastCat)?"c-"+lastCat:"work";return}
  if(sheetOpen()||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  if(e.key==="ArrowRight"||e.key==="ArrowLeft"){
    const v=visible();if(!v.length)return;let k=v.indexOf(hot);k=k<0?0:(k+(e.key==="ArrowRight"?1:-1)+v.length)%v.length;
    setHot(v[k],true);panTo(tiles[v[k]]);e.preventDefault();
  }
  if(e.key==="Enter"&&document.activeElement===document.body){location.hash="c-"+K[hot].key}
});

/* ---------- prefetch on intent: hovering a category warms its thumbnails, hovering a project warms its full image ---------- */
const warmed=new Set();
function warm(src){if(IMGS||!src||warmed.has(src))return;warmed.add(src);const i=new Image();i.decoding="async";i.src=src}
function warmCat(k){if(k)k.items.slice(0,14).forEach(p=>warm(TH(p)))}
field.addEventListener("pointerover",e=>{const el=e.target.closest(".kcard");if(el){const t=tiles.find(x=>x.el===el);if(t)warmCat(t.p)}},{passive:true});
fwrap.addEventListener("pointerover",e=>{const it=e.target.closest(".mi");if(it&&it.dataset.key)warmCat(KBY[it.dataset.key])},{passive:true});
document.addEventListener("pointerover",e=>{const a=e.target.closest&&e.target.closest("a.sitem,a.citem,a.next");if(!a)return;const p=P.find(x=>"#p-"+x.id===a.getAttribute("href"));if(p)warm(FULL(p))},{passive:true});
if("requestIdleCallback" in window)requestIdleCallback(()=>{K.forEach(k=>warm(TH(k.cv)))},{timeout:3000});

/* ---------- category stage: free scatter or globe, same engine ---------- */
let cs=null,cg=null;
function catGlobeSetup(){cs=null;return;const st=cInner.querySelector(".cstage");if(!st){cs=null;return}if(!cs||cs.st!==st)catStageSetup(st);stageHint()}
function stageHint(){const h=document.getElementById("cHint");if(h)h.textContent=GLOBE?(fine?"Spin to pick · click to open":"Swipe to spin · tap a card to open"):(fine?"Scroll to wander · click to open":"Swipe to wander · tap a card to open")}
function catStageSetup(st){
  const els=[...st.querySelectorAll(".sitem")];
  cs={st,items:els.map((el,i)=>({el,i,r:+el.dataset.r||1,depth:.72+rand(i,5)*.42,ox:0,oy:0,fx:0,fy:0,vx:0,vy:0,size:0,h:0,ux:0,uy:0})),
      px:0,py:0,vx:0,vy:0,mode:null,held:null,moved:0,lx:0,ly:0,lt:0,rx:-.18,ry:0,vrx:0,vry:0,gb:GLOBE?1:0,hov:false,pick:false,w:0,h:0};
  stageLayout();
  st.addEventListener("pointerdown",e=>{if(!cs)return;const it=cs.items.find(x=>x.el===e.target.closest(".sitem"));
    cs.moved=0;cs.lx=e.clientX;cs.ly=e.clientY;cs.lt=e.timeStamp;cs.vx=cs.vy=0;cs.vrx=cs.vry=0;
    if(it&&e.pointerType==="mouse"&&!GLOBE){cs.held=it;cs.mode="card";it.fx=it.fy=0;it.el.classList.add("lifted");it.z=++zTop}else cs.mode="pan";
    st.classList.add("grabbing")});
  st.addEventListener("click",e=>{if(cs&&cs.moved>6){e.preventDefault();e.stopPropagation()}},true);
  st.addEventListener("mouseenter",()=>{if(cs)cs.hov=true});st.addEventListener("mouseleave",()=>{if(cs){cs.hov=false;cs.pick=false}});
  st.addEventListener("mouseover",e=>{if(cs)cs.pick=!!e.target.closest(".sitem")});
  st.addEventListener("dragstart",e=>e.preventDefault());
  /* images may arrive after layout: re-measure card heights once they do */
  st.querySelectorAll("img").forEach(im=>{if(!im.complete)im.addEventListener("load",()=>{if(cs&&cs.st===st&&cSheet.classList.contains("open"))measure()},{once:true})});
}
function measure(){cs.items.forEach(it=>{it.h=it.el.offsetHeight||it.size*it.r+50})}
function stageLayout(){
  if(!cs)return;const st=cs.st,w=st.clientWidth,h=st.clientHeight;
  if(!w||!h||w<=0||h<=0)return;
  const n=cs.items.length,mob=w<620;cs.w=w;cs.h=h;
  const cw=mob?Math.min(150,w*.36):Math.max(150,Math.min(215,w*.15));
  cs.PW=Math.max(w*1.2,Math.sqrt(n)*cw*2.1);cs.PH=Math.max(h*1.2,n*cw*cw*2.3/cs.PW);
  const cols=Math.max(1,Math.round(Math.sqrt(n*cs.PW/cs.PH))),rows=Math.ceil(n/cols),slots=cs.items.map((_,i)=>i).sort((x,y)=>rand(x,13)-rand(y,13));
  cs.items.forEach((it,k)=>{const s=slots[k],c=s%cols,r=Math.floor(s/cols);it.ux=(c+.18+rand(k,21)*.64)/cols;it.uy=(r+.15+rand(k,22)*.6)/rows;
    it.size=cw*(.82+it.depth*.32);it.el.style.width=it.size+"px"});
  measure();
  cs.R=Math.min(w*(mob?.38:.34),h*.36);cs.gw=cs.R*(n<=3?1.15:n<=5?.95:n<=9?.72:.56);
}
addEventListener("resize",()=>{if(cs&&cSheet.classList.contains("open"))stageLayout()});
addEventListener("pointermove",e=>{if(!cs||!cs.mode)return;const dx=e.clientX-cs.lx,dy=e.clientY-cs.ly,edt=Math.max(1,e.timeStamp-cs.lt)/16.667;
  cs.moved+=Math.abs(dx)+Math.abs(dy);cs.lx=e.clientX;cs.ly=e.clientY;cs.lt=e.timeStamp;
  if(cs.mode==="card"){const it=cs.held;it.ox+=dx;it.oy+=dy;it.vx=dx/edt;it.vy=dy/edt;return}
  if(GLOBE){
    const mob=(cs.w||W)<620,sens=mob?.009:.0065;
    cs.ry+=dx*sens;cs.rx-=dy*sens;    const instVry=dx/edt*sens,instVrx=-dy/edt*sens;
    cs.vry=(cs.vry||0)*0.35+instVry*0.65;cs.vrx=(cs.vrx||0)*0.35+instVrx*0.65;
    if(Math.abs(dx)>0.5)cs.spinDir=dx<0?-1:1;
  }else{cs.px+=dx;cs.py+=dy;cs.vx=dx/edt;cs.vy=dy/edt}},{passive:true});
function stageUp(e){if(!cs||!cs.mode)return;const late=e&&e.timeStamp-cs.lt>140;
  if(cs.mode==="card"){const it=cs.held;if(!late&&cs.moved>6){it.fx=(it.vx||0)*.9;it.fy=(it.vy||0)*.9}it.el.classList.remove("lifted");cs.held=null}
  else if(late){cs.vx=cs.vy=cs.vrx=cs.vry=0}
  else if(GLOBE){cs.vry=Math.max(-0.15,Math.min(0.15,cs.vry||0));cs.vrx=Math.max(-0.15,Math.min(0.15,cs.vrx||0))}
  cs.mode=null;cs.st.classList.remove("grabbing")}
addEventListener("pointerup",stageUp);addEventListener("pointercancel",stageUp);
window.addEventListener("blur",stageUp);
document.addEventListener("mouseleave",stageUp);
function catGlobeFrame(dt){
  if(!cs)return;const it0=cs.items,n=it0.length,dragging=!!cs.mode;
  if(typeof dt!=="number"||!isFinite(dt)||dt<=0)dt=1;
  const gT=GLOBE?1:0;
  if(isNaN(cs.gb))cs.gb=gT;
  if(cs.gb!==gT){cs.gb+=(gT-cs.gb)*(1-Math.pow(.88,dt));if(Math.abs(gT-cs.gb)<.002)cs.gb=gT}
  if(isNaN(cs.px))cs.px=0;if(isNaN(cs.py))cs.py=0;if(isNaN(cs.vx))cs.vx=0;if(isNaN(cs.vy))cs.vy=0;
  if(isNaN(cs.rx))cs.rx=-.18;if(isNaN(cs.ry))cs.ry=0;if(isNaN(cs.vrx))cs.vrx=0;if(isNaN(cs.vry))cs.vry=0;
  if(!dragging){
    if(!reduce&&!cs.hov)cs.py-=.18*dt;cs.px+=cs.vx*dt;cs.py+=cs.vy*dt;const f=Math.pow(.94,dt);cs.vx*=f;cs.vy*=f;
    const baseSpin=(reduce||cs.pick)?0:(cs.hov?.0012:.0028)*(cs.spinDir||1);
    cs.ry+=baseSpin*dt+cs.vry*dt;cs.rx+=cs.vrx*dt;cs.vry*=f;cs.vrx*=f;
    if(Math.abs(cs.vry)<0.0001)cs.vry=0;if(Math.abs(cs.vrx)<0.0001)cs.vrx=0;
    }
  const gb=cs.gb,w=cs.w||1,h=cs.h||1,R=Math.max(40,n<=5?cs.R*.7:cs.R);
  const pw=cs.PW||w,ph=cs.PH||h;
  for(let k=0;k<n;k++){const it=it0[k],d=it.depth;
    if(isNaN(it.ox))it.ox=0;if(isNaN(it.oy))it.oy=0;
    if(it.fx||it.fy){it.ox+=it.fx*dt;it.oy+=it.fy*dt;const f=Math.pow(.9,dt);it.fx*=f;it.fy*=f;if(Math.abs(it.fx)+Math.abs(it.fy)<.02)it.fx=it.fy=0}
    let X=mod(it.ux*pw+cs.px*d+it.ox,pw)-(pw-w)/2-(it.size||150)/2,Y=mod(it.uy*ph+cs.py*d+it.oy,ph)-(ph-h)/2-(it.h||it.size||150)/2,S=1,O=1,Z=it===cs.held?99999:(it.z||Math.round(d*100));
    if(gb>0){const q=spin(sphere(k,n),cs.rx,cs.ry),z=q[2],ps=.48+.52*(z+1)/2;
      const gx=w/2+q[0]*R-(it.size||150)/2,gy=h/2+q[1]*R-(it.h||it.size||150)/2,gs=(cs.gw||R)/(it.size||150)*ps;
      X+=(gx-X)*gb;Y+=(gy-Y)*gb;S=1+(gs-1)*gb;O=1-(1-(.2+.8*(z+1)/2))*gb;Z=gb>.5?1000+Math.round(z*24)*16:Z;
      const pe=(gb>.5&&z<-.25)?"none":"";if(it._pe!==pe){it._pe=pe;it.el.style.pointerEvents=pe}}else if(it._pe){it._pe="";it.el.style.pointerEvents=""}
    it.el.style.transform=`translate3d(${X.toFixed(1)}px,${Y.toFixed(1)}px,0) scale(${S.toFixed(4)})`;
    if(it._z!==Z){it._z=Z;it.el.style.zIndex=Z}const os=O<.995?O.toFixed(2):"";if(it._o!==os){it._o=os;it.el.style.opacity=os}}
}

/* ---------- view toggle ---------- */
const viewBtn=document.getElementById("viewBtn");
function setView(gl){GLOBE=gl;
  viewBtn.setAttribute("aria-pressed",gl?"true":"false");viewBtn.setAttribute("aria-label",gl?"Switch to scatter view":"Switch to globe view");
  document.getElementById("viewTip").textContent=gl?"Scatter view":"Globe view";root.classList.toggle("globe",gl);
  if(gl){tiles.forEach(t=>{t.fx=t.fy=0})}
  if(cSheet.classList.contains("open"))catGlobeSetup();updateTiles()}
viewBtn.addEventListener("click",()=>setView(!GLOBE));
viewBtn.setAttribute("aria-pressed",GLOBE?"true":"false");document.getElementById("viewTip").textContent=GLOBE?"Scatter view":"Globe view";root.classList.toggle("globe",GLOBE);

/* logo: replay the light sweep on hover */
{const bl=document.querySelector("#brand .brand-link");if(bl)bl.addEventListener("mouseenter",()=>{const s=bl.querySelector(".lshine");if(!s||reduce)return;s.classList.remove("run");void s.getBoundingClientRect();s.classList.add("run")})}
/* ---------- dark mode toggle ---------- */
const modeBtn=document.getElementById("modeBtn");
function setMode(d,anim){DARK=d;root.classList.toggle("dark",d);modeBtn.setAttribute("aria-checked",d?"true":"false");document.getElementById("modeTip").textContent=d?"Light mode":"Dark mode";
  try{localStorage.setItem("sa-theme",d?"dark":"light")}catch(e){}
  theme(curPaper||K[hot].bg,true);
  document.querySelectorAll(".sheet.open").forEach(s=>applyPal(s,pal(curPaper)));
}
modeBtn.addEventListener("click",()=>setMode(!DARK,true));
root.classList.toggle("dark",DARK);modeBtn.setAttribute("aria-checked",DARK?"true":"false");document.getElementById("modeTip").textContent=DARK?"Light mode":"Dark mode";

/* ---------- boot ---------- */
setGrid();
layout();applyFilter(activeFilter,false);setHot(0,false);route();render(1);requestAnimationFrame(tick);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(moveInd);

/* ---------- sound: original score + voice, Web Audio, one gesture to start ---------- */
const SND=(()=>{
  /* plain <audio> elements: they work from a local file, in every browser, and on iPhones with the silent switch on */
  let intro=null,loop=null,on=false,loopT=0,fadeT=0;
  const src=n=>(window.__AUD&&window.__AUD[n])||`audio/${n}.mp3`;
  function mk(){if(intro)return;intro=new Audio();intro.preload="auto";intro.src=src("intro");loop=new Audio();loop.preload="auto";loop.loop=true;loop.src=src("loop");
    try{if(navigator.audioSession)navigator.audioSession.type="playback"}catch(e){}}
  const tryPlay=a=>{try{const pr=a.play();if(pr&&pr.catch)pr.catch(()=>{})}catch(e){}};
  function fade(a,to,ms,done){clearInterval(a._f);const from=a.volume,t0=performance.now();a._f=setInterval(()=>{const k=Math.min(1,(performance.now()-t0)/ms);try{a.volume=from+(to-from)*k}catch(e){}if(k>=1){clearInterval(a._f);done&&done()}},40)}
  function startLoop(ms){if(!on)return;loop.volume=0;tryPlay(loop);fade(loop,1,ms)}
  function ui(){const b=document.getElementById("sndBtn");if(!b)return;b.setAttribute("aria-pressed",on?"true":"false");const l=on?"Mute music":"Play music";b.setAttribute("aria-label",l);document.getElementById("sndTip").textContent=l}
  function save(){try{localStorage.setItem("sa-sound",on?"on":"off")}catch(e){}}
  return{
    pref(){try{const s=localStorage.getItem("sa-sound")||localStorage.getItem("mf-sound");return s!=="off"}catch(e){return true}},
    warm(){mk();try{intro.load();loop.load()}catch(e){}},
    /* runs inside the tap: the intro (music + voice) starts at once, the loop is unlocked in the same gesture */
    intro(){mk();on=true;ui();save();intro.currentTime=0;intro.volume=1;tryPlay(intro);
      loop.muted=true;try{const pr=loop.play();if(pr&&pr.then)pr.then(()=>{loop.pause();loop.currentTime=0;loop.muted=false}).catch(()=>{loop.muted=false})}catch(e){loop.muted=false}
      clearTimeout(loopT);loopT=setTimeout(()=>startLoop(3500),6400)},
    skipIntro(){if(!intro||!on)return;fade(intro,0,700,()=>intro.pause());clearTimeout(loopT);loopT=setTimeout(()=>startLoop(1500),150)},
    toggle(){mk();if(on){on=false;ui();save();clearTimeout(loopT);fade(loop,0,400,()=>loop.pause());if(!intro.paused)fade(intro,0,400,()=>intro.pause());return}
      on=true;ui();save();loop.volume=0;tryPlay(loop);fade(loop,1,1200)},
    get on(){return on},
    hide(h){if(!loop||!on)return;if(h){loop._was=!loop.paused;intro._was=!intro.paused;loop.pause();intro.pause()}else{if(loop._was)tryPlay(loop);if(intro._was)tryPlay(intro)}},
    ui
  }
})();
document.getElementById("sndBtn").addEventListener("click",()=>SND.toggle());
document.addEventListener("visibilitychange",()=>{if(document.hidden){clearDragState();if(typeof stageUp==="function")stageUp()}else{last=performance.now()}SND.hide(document.hidden)});
/* returning visitors who left sound on: music resumes on their first tap or click anywhere */
function armSound(){if(!SND.pref())return;const go=e=>{if(e.target.closest&&e.target.closest("#sndBtn,#opener"))return;window.removeEventListener("pointerdown",go,true);if(!SND.on)SND.toggle()};window.addEventListener("pointerdown",go,true)}
/* stop the browser's image drag ghost and double-click word selection on the canvas and the chrome */
document.addEventListener("dragstart",e=>{if(e.target&&(e.target.tagName==="IMG"||e.target.closest&&e.target.closest("#field,.cgrid,.tile,.citem")))e.preventDefault()},true);
document.addEventListener("mousedown",e=>{if(e.detail>1&&!(e.target.closest&&e.target.closest(".prose,.lead,.p-body,input,textarea")))e.preventDefault()});
/* keep the dock and page padding clear of the bottom bar, whatever height it has */
{const ft=document.getElementById("foot");const setH=()=>{const r=ft.getBoundingClientRect();document.documentElement.style.setProperty("--footH",Math.round(innerHeight-r.top)+"px")};
 if(window.ResizeObserver)new ResizeObserver(setH).observe(ft);addEventListener("resize",setH);setTimeout(setH,300);setTimeout(setH,1500)}
const intro=document.getElementById("opener");
function ready(){document.body.classList.add("ready");moveInd();document.querySelectorAll("#brand .lg").forEach(s=>s.classList.add("go"))}
if(reduce||sessionStorageGet()||/^#(p|c)-|^#(about|services|process|contact)$/.test(location.hash)){intro.remove();ready();armSound()}
else{
  /* the field stays parked under the opener (no per-frame work); the gate appears once fonts and boot are done,
     and one tap starts the picture and the score together, so they stay in sync */
  introOn=true;SND.warm();
  let done=false,started=false;
  const finish=skip=>{if(done)return;done=true;introOn=false;if(skip)SND.skipIntro();intro.classList.add("done");setTimeout(ready,120);setTimeout(()=>intro.remove(),1500);try{sessionStorage.setItem("sa-intro","1")}catch(err){}};
  document.getElementById("iSkip").addEventListener("click",()=>finish(true));
  const play=withSound=>{if(started)return;started=true;if(withSound)SND.intro();
    requestAnimationFrame(()=>{intro.classList.add("play");setTimeout(()=>finish(false),4200);
      let q=tiles.slice();const warmNext=()=>{const part=q.splice(0,4);part.forEach(t=>{const im=t.btn.querySelector("img");if(im&&im.decode)im.decode().catch(()=>{})});if(q.length)setTimeout(warmNext,220)};setTimeout(warmNext,900)})};
  document.getElementById("opEnter").addEventListener("click",()=>play(true));
  document.getElementById("opQuiet").addEventListener("click",()=>{try{localStorage.setItem("sa-sound","off")}catch(e){}play(false)});
  const arm=()=>{
    /* montage: eight covers from different categories, decoded before the tap so every cut is instant */
    const reel=document.getElementById("opReel");const picks=[];const seen=new Set();for(const t of tiles){const im=t.btn.querySelector("img");if(im&&!seen.has(im.src)){seen.add(im.src);picks.push(im.src)}if(picks.length>=8)break}
    picks.forEach((s,k)=>{const im=new Image();im.src=s;im.alt="";im.decoding="async";im.style.setProperty("--k",k);if(k===picks.length-1)im.className="last";if(im.decode)im.decode().catch(()=>{});reel.appendChild(im)});
    /* film grain texture, drawn once */
    try{const c=document.createElement("canvas");c.width=c.height=180;const g=c.getContext("2d"),d=g.createImageData(180,180);for(let p=0;p<d.data.length;p+=4){const v=Math.random()*255|0;d.data[p]=d.data[p+1]=d.data[p+2]=v;d.data[p+3]=255}g.putImageData(d,0,0);document.getElementById("opGrain").style.backgroundImage=`url(${c.toDataURL()})`}catch(e){}
    requestAnimationFrame(()=>requestAnimationFrame(()=>intro.classList.add("armed")))};
  const fr=document.fonts&&document.fonts.ready;if(fr){Promise.race([fr,new Promise(r=>setTimeout(r,900))]).then(arm)}else arm();
}
function sessionStorageGet(){try{return (sessionStorage.getItem("sa-intro")||sessionStorage.getItem("mf-intro"))==="1"}catch(e){return false}}
})();
