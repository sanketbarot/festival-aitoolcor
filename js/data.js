/* ================================================================
   AI TOOLCOR FESTIVAL — data.js
   Complete Indian festivals, jayantis, birthdays — accurate dates
   ================================================================ */

var SITE_NAME = 'AI ToolCor Festival';

var CARD_TEMPLATES = [
  {id:'glass',   name:'Liquid Glass', preview:'💎'},
  {id:'elegant', name:'Elegant',      preview:'🎀'},
  {id:'festive', name:'Festive',      preview:'🎊'},
  {id:'minimal', name:'Minimal',      preview:'🤍'},
  {id:'neon',    name:'Neon Glow',    preview:'⚡'}
];

var COLOR_THEMES = [
  {id:'sunset',   g:'linear-gradient(135deg,#ff6b6b,#ffd93d)'},
  {id:'ocean',    g:'linear-gradient(135deg,#0984e3,#74b9ff)'},
  {id:'purple',   g:'linear-gradient(135deg,#6c5ce7,#a29bfe)'},
  {id:'forest',   g:'linear-gradient(135deg,#00b894,#00cec9)'},
  {id:'rose',     g:'linear-gradient(135deg,#e84393,#fd79a8)'},
  {id:'gold',     g:'linear-gradient(135deg,#f39c12,#fdcb6e)'},
  {id:'fire',     g:'linear-gradient(135deg,#e74c3c,#f39c12)'},
  {id:'night',    g:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)'},
  {id:'spring',   g:'linear-gradient(135deg,#55efc4,#81ecec)'},
  {id:'diwali',   g:'linear-gradient(135deg,#b8860b,#ffd700,#ff8c00)'},
  {id:'tricolor', g:'linear-gradient(180deg,#ff9933 33%,#fff 33%,#fff 66%,#138808 66%)'},
  {id:'islamic',  g:'linear-gradient(135deg,#1a472a,#2d6a4f,#52b788)'}
];

var CATEGORIES = [
  {id:'all',      label:'🎉 All',         icon:'🎉'},
  {id:'hindu',    label:'🕉️ Hindu',       icon:'🕉️'},
  {id:'muslim',   label:'☪️ Muslim',      icon:'☪️'},
  {id:'christian',label:'✝️ Christian',   icon:'✝️'},
  {id:'sikh',     label:'🪯 Sikh',        icon:'🪯'},
  {id:'jain',     label:'🪷 Jain',        icon:'🪷'},
  {id:'buddhist', label:'☸️ Buddhist',    icon:'☸️'},
  {id:'national', label:'🇮🇳 National',   icon:'🇮🇳'},
  {id:'jayanti',  label:'🎖️ Jayanti',    icon:'🎖️'},
  {id:'birthday', label:'🎂 Birthday',    icon:'🎂'},
  {id:'special',  label:'💝 Special',     icon:'💝'}
];

/* ================================================================
   FESTIVAL VISUAL THEMES
   bg = CSS gradient background for cards & calendar
   overlay = text-overlay color
   accent = highlight color
   particles = emoji particles for animation
   img = SVG data URI background pattern
   ================================================================ */
var FT = {
  /* Hindu */
  diwali:     {bg:'linear-gradient(135deg,#1a0500 0%,#4a1500 30%,#8b3a00 60%,#d4820a 100%)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🪔','✨','🎆','💛','🌟'],desc:'Festival of Lights',color:'#ffd700'},
  holi:       {bg:'linear-gradient(135deg,#ff006e,#fb5607,#ffbe0b,#3a86ff,#8338ec)',overlay:'rgba(0,0,0,0.25)',accent:'#ffbe0b',particles:['🌈','💦','🎨','✨','🌸'],desc:'Festival of Colors',color:'#ff006e'},
  navratri:   {bg:'linear-gradient(135deg,#560bad,#7b2d8b,#c9184a,#ff4d6d)',overlay:'rgba(0,0,0,0.3)',accent:'#ff9f1c',particles:['🔱','💃','🌺','✨','🏮'],desc:'Nine Divine Nights',color:'#c9184a'},
  ganesh:     {bg:'linear-gradient(135deg,#7f5a00,#c87700,#ff9900,#ffd166)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🐘','🌺','🙏','✨','🍊'],desc:'Ganpati Bappa Morya!',color:'#ff9900'},
  janmashtami:{bg:'linear-gradient(135deg,#03045e,#0077b6,#00b4d8,#90e0ef)',overlay:'rgba(0,0,0,0.4)',accent:'#90e0ef',particles:['🦚','🎶','💙','✨','🪈'],desc:'Jai Kanhaiya Lal!',color:'#00b4d8'},
  raksha:     {bg:'linear-gradient(135deg,#6d023a,#b5179e,#f72585,#ff85a1)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🧶','❤️','💕','✨','🌸'],desc:'Bond of Siblings',color:'#f72585'},
  durga:      {bg:'linear-gradient(135deg,#7d0000,#c1121f,#e63946,#ff6b6b)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🔱','🌺','🙏','✨','⚔️'],desc:'Jai Mata Di!',color:'#e63946'},
  karwa:      {bg:'linear-gradient(135deg,#10002b,#240046,#5a189a,#9d4edd)',overlay:'rgba(0,0,0,0.4)',accent:'#e0aaff',particles:['🌕','💑','⭐','✨','🌙'],desc:'Love Eternal',color:'#9d4edd'},
  dussehra:   {bg:'linear-gradient(135deg,#7f3f00,#bf5700,#e07b00,#ffa500)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🏹','⭐','🎆','✨','🌟'],desc:'Good Over Evil',color:'#e07b00'},
  chhath:     {bg:'linear-gradient(135deg,#03071e,#1c3461,#3a6186,#e96c1e)',overlay:'rgba(0,0,0,0.35)',accent:'#ffa040',particles:['🌅','☀️','🙏','✨','💧'],desc:'Chhath Puja',color:'#e96c1e'},
  lohri:      {bg:'linear-gradient(135deg,#1a0000,#5c1100,#a62c00,#e25822)',overlay:'rgba(0,0,0,0.4)',accent:'#ffcc00',particles:['🔥','🌽','🎉','✨','💃'],desc:'Lohri Mubarak!',color:'#e25822'},
  makar:      {bg:'linear-gradient(135deg,#003d00,#006600,#26a000,#e6ff00)',overlay:'rgba(0,0,0,0.35)',accent:'#e6ff00',particles:['🪁','☀️','🌾','✨','🎊'],desc:'Uttarayan!',color:'#26a000'},
  basant:     {bg:'linear-gradient(135deg,#7b5800,#c49200,#f5c400,#fff176)',overlay:'rgba(0,0,0,0.25)',accent:'#fff',desc:'Basant Panchami',particles:['🌻','📚','🙏','✨','💛'],color:'#f5c400'},
  maha_shiv:  {bg:'linear-gradient(135deg,#10002b,#3c0066,#6600cc,#9900ff)',overlay:'rgba(0,0,0,0.4)',accent:'#e0aaff',particles:['🔱','🌙','🙏','✨','💜'],desc:'Har Har Mahadev!',color:'#9900ff'},
  ram_navami: {bg:'linear-gradient(135deg,#5c2e00,#994d00,#cc6600,#ff8c00)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🏹','🌺','🙏','✨','🟠'],desc:'Jai Shri Ram!',color:'#cc6600'},
  hanuman:    {bg:'linear-gradient(135deg,#5c1100,#992200,#cc3300,#ff6600)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🐒','💪','🙏','✨','🧡'],desc:'Jai Bajrangbali!',color:'#cc3300'},
  ugadi:      {bg:'linear-gradient(135deg,#004d00,#007700,#00aa00,#55ff55)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🌿','🌸','🙏','✨','🌱'],desc:'Happy Ugadi!',color:'#00aa00'},
  gudi_padwa: {bg:'linear-gradient(135deg,#004d00,#cc6600,#ff9900,#ffcc00)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🚩','🌸','🙏','✨','🌺'],desc:'Gudi Padwachya Shubhechha!',color:'#ff9900'},
  onam:       {bg:'linear-gradient(135deg,#003d00,#006600,#ffcc00,#ff6600)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🛶','🌺','🙏','✨','🌾'],desc:'Onashamsakal!',color:'#ff6600'},
  pongal:     {bg:'linear-gradient(135deg,#5c3d00,#9c6400,#cc8800,#ffbb33)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🌾','☀️','🍚','✨','🎊'],desc:'Happy Pongal!',color:'#cc8800'},
  vishu:      {bg:'linear-gradient(135deg,#004d00,#ffaa00,#ff6600,#cc0000)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🌸','🌟','🙏','✨','🌻'],desc:'Happy Vishu!',color:'#ffaa00'},
  teej:       {bg:'linear-gradient(135deg,#1a4d00,#2e7d00,#4caf00,#80d400)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🎊','💃','🌿','✨','💚'],desc:'Happy Teej!',color:'#4caf00'},
  /* Muslim */
  eid_fitr:   {bg:'linear-gradient(135deg,#001a00,#003300,#006600,#00cc44)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🌙','⭐','🕌','✨','💚'],desc:'Eid Mubarak!',color:'#00cc44'},
  eid_adha:   {bg:'linear-gradient(135deg,#001a00,#003d1a,#006633,#00994d)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🌙','🐑','🕌','✨','💚'],desc:'Eid ul-Adha Mubarak!',color:'#00994d'},
  muharram:   {bg:'linear-gradient(135deg,#000000,#1a0000,#330000,#4d0000)',overlay:'rgba(0,0,0,0.5)',accent:'#cc0000',particles:['🖤','🌙','🤲','✨','☪️'],desc:'Muharram',color:'#cc0000'},
  milad:      {bg:'linear-gradient(135deg,#001a00,#004d00,#008000,#ffd700)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🕌','🌙','⭐','✨','💚'],desc:'Milad-un-Nabi Mubarak!',color:'#ffd700'},
  shab_e_barat:{bg:'linear-gradient(135deg,#0d0d2b,#1a1a4d,#2d2d80,#4d4dcc)',overlay:'rgba(0,0,0,0.4)',accent:'#c0c0ff',particles:['🌙','⭐','🤲','✨','💫'],desc:'Shab-e-Barat Mubarak',color:'#4d4dcc'},
  /* National */
  independence:{bg:'linear-gradient(180deg,#ff9933 0%,#ff9933 33%,#ffffff 33%,#ffffff 66%,#138808 66%,#138808 100%)',overlay:'rgba(0,0,0,0.15)',accent:'#000080',particles:['🇮🇳','🎆','🕊️','✨','🥁'],desc:'Jai Hind!',color:'#138808'},
  republic:   {bg:'linear-gradient(180deg,#ff9933 0%,#ff9933 33%,#ffffff 33%,#ffffff 66%,#138808 66%,#138808 100%)',overlay:'rgba(0,0,0,0.15)',accent:'#000080',particles:['🇮🇳','🎺','🏆','✨','🎖️'],desc:'Happy Republic Day!',color:'#000080'},
  gandhi:     {bg:'linear-gradient(135deg,#ede8d0,#d4c99a,#b5a060,#8b7335)',overlay:'rgba(0,0,0,0.2)',accent:'#333',particles:['🕊️','🌹','✌️','✨','🙏'],desc:'Be the Change!',color:'#8b7335'},
  /* Sikh */
  guru_nanak: {bg:'linear-gradient(135deg,#5c3d00,#9c6a00,#d4940a,#ffd700)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🙏','⚔️','✨','🌟','💛'],desc:'Waheguru Ji Ka Khalsa!',color:'#d4940a'},
  guru_gobind:{bg:'linear-gradient(135deg,#5c3000,#9c5200,#d47200,#ff9900)',overlay:'rgba(0,0,0,0.35)',accent:'#fff',particles:['⚔️','🙏','✨','🌟','🧡'],desc:'Waheguru!',color:'#d47200'},
  baisakhi:   {bg:'linear-gradient(135deg,#006600,#ff9900,#ffcc00,#33cc00)',overlay:'rgba(0,0,0,0.3)',accent:'#ffd700',particles:['🌾','💛','🎊','✨','🙏'],desc:'Happy Baisakhi!',color:'#ff9900'},
  /* Christian */
  christmas:  {bg:'linear-gradient(135deg,#0d3300,#1a6600,#cc0000,#006600)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🎄','⭐','🎁','✨','❄️'],desc:'Merry Christmas!',color:'#cc0000'},
  easter:     {bg:'linear-gradient(135deg,#b3d9ff,#ffccff,#ccffcc,#ffffcc)',overlay:'rgba(0,0,0,0.1)',accent:'#cc3399',particles:['🐣','🌷','🥚','✨','🌸'],desc:'Happy Easter!',color:'#cc3399'},
  good_friday:{bg:'linear-gradient(135deg,#1a0000,#330000,#4d0000,#800000)',overlay:'rgba(0,0,0,0.5)',accent:'#c0c0c0',particles:['✝️','🕊️','🙏','✨','💜'],desc:'Good Friday',color:'#800000'},
  /* Jain */
  mahavir:    {bg:'linear-gradient(135deg,#5c3d00,#9c6a00,#cc9200,#ffd700)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🪷','🙏','✨','🌸','💛'],desc:'Jai Jinendra!',color:'#cc9200'},
  paryushana: {bg:'linear-gradient(135deg,#fff5e0,#ffe0a0,#ffcc66,#ffaa00)',overlay:'rgba(0,0,0,0.15)',accent:'#7b3f00',particles:['🪷','🙏','✨','🌸','🤍'],desc:'Michhami Dukkadam',color:'#ffaa00'},
  /* Buddhist */
  buddha:     {bg:'linear-gradient(135deg,#5c3d00,#9c6900,#cc9000,#ffc500)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['☸️','🌸','🙏','✨','🕯️'],desc:'Buddha Purnima!',color:'#cc9000'},
  /* Special */
  newyear:    {bg:'linear-gradient(135deg,#000033,#000066,#0000cc,#6600cc)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🎆','🎊','🥂','✨','🌟'],desc:'Happy New Year!',color:'#6600cc'},
  newyear_eng:{bg:'linear-gradient(135deg,#1a001a,#330033,#660066,#9900cc)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🎆','🎊','🥂','✨','🌟'],desc:'Happy New Year 2027!',color:'#9900cc'},
  birthday:   {bg:'linear-gradient(135deg,#ff006e,#fb5607,#ffbe0b,#8338ec)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🎂','🎈','🎉','✨','🌟'],desc:'Many Happy Returns!',color:'#ff006e'},
  mothers:    {bg:'linear-gradient(135deg,#ff4d6d,#ff85a1,#ffb3c1,#fff0f3)',overlay:'rgba(0,0,0,0.2)',accent:'#c9184a',particles:['🌹','💕','❤️','✨','🌸'],desc:"Happy Mother's Day!",color:'#ff4d6d'},
  fathers:    {bg:'linear-gradient(135deg,#023e8a,#0077b6,#0096c7,#00b4d8)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['👔','💪','❤️','✨','⭐'],desc:"Happy Father's Day!",color:'#0096c7'},
  friendship: {bg:'linear-gradient(135deg,#f77f00,#d62828,#a8dadc,#457b9d)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🤝','❤️','🎉','✨','🫂'],desc:'Happy Friendship Day!',color:'#f77f00'},
  valentines: {bg:'linear-gradient(135deg,#6a0032,#a80045,#e0005a,#ff4d8d)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['❤️','💕','🌹','✨','💘'],desc:"Happy Valentine's Day!",color:'#e0005a'},
  /* Jayantis */
  ambedkar:   {bg:'linear-gradient(135deg,#001a66,#0033cc,#0055ff,#3377ff)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['📘','🙏','✊','✨','💙'],desc:'Jai Bhim!',color:'#0055ff'},
  vivekananda:{bg:'linear-gradient(135deg,#5c0000,#9c1a00,#d43c00,#ff6600)',overlay:'rgba(0,0,0,0.35)',accent:'#ffd700',particles:['🔥','💪','🙏','✨','🧡'],desc:'Arise, Awake!',color:'#d43c00'},
  bhagat:     {bg:'linear-gradient(135deg,#0d0d0d,#1a1a1a,#333333,#cc0000)',overlay:'rgba(0,0,0,0.5)',accent:'#cc0000',particles:['🔥','✊','🇮🇳','✨','⚡'],desc:'Inquilab Zindabad!',color:'#cc0000'},
  sardar:     {bg:'linear-gradient(135deg,#1a0d00,#3d2000,#7a4000,#cc6600)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['🇮🇳','🤝','💪','✨','⭐'],desc:'Unity is Strength!',color:'#cc6600'},
  subhash:    {bg:'linear-gradient(135deg,#00001a,#00004d,#000099,#0000ff)',overlay:'rgba(0,0,0,0.5)',accent:'#ffd700',particles:['🇮🇳','✊','⚔️','✨','🌟'],desc:'Jai Hind!',color:'#0000ff'},
  shivaji:    {bg:'linear-gradient(135deg,#4d0d00,#8b1a00,#cc2900,#ff6600)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['⚔️','🦁','🇮🇳','✨','🌟'],desc:'Jay Shivaji!',color:'#cc2900'},
  sai_baba:   {bg:'linear-gradient(135deg,#4d3800,#8b6600,#cc9900,#ffcc00)',overlay:'rgba(0,0,0,0.35)',accent:'#fff',particles:['🙏','✨','💛','🌸','⭐'],desc:'Sai Ram!',color:'#cc9900'},
  swami_day:  {bg:'linear-gradient(135deg,#ff7c00,#ff9900,#ffbb00,#ffdd00)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['🔥','🙏','✨','💛','⭐'],desc:'Swami Dayanand Jayanti',color:'#ff9900'},
  guru_teg:   {bg:'linear-gradient(135deg,#5c3d00,#9c6a00,#d49200,#ffcc00)',overlay:'rgba(0,0,0,0.3)',accent:'#fff',particles:['⚔️','🙏','✨','🌟','💛'],desc:'Guru Tegh Bahadur Jayanti',color:'#d49200'},
  rani_laxmi: {bg:'linear-gradient(135deg,#4d0033,#800055,#cc0088,#ff33aa)',overlay:'rgba(0,0,0,0.4)',accent:'#ffd700',particles:['⚔️','👑','🇮🇳','✨','🌟'],desc:'Jai Rani Laxmibai!',color:'#cc0088'},
  ram_prasad: {bg:'linear-gradient(135deg,#0d0d0d,#1a1a1a,#333333,#cc0000)',overlay:'rgba(0,0,0,0.5)',accent:'#cc0000',particles:['✊','🔥','🇮🇳','✨','⚡'],desc:'Inquilab Zindabad!',color:'#cc0000'}
};

/* =============================================================
   ALL OCCASIONS — Complete with accurate 2026-2027 dates
   ============================================================= */
var ALL_OCCASIONS = [

  /* ============= MAY 2026 ============= */
  {id:'buddha',name:'Buddha Purnima',emoji:'☸️',cat:'buddhist',date:'2026-05-31',
   wishes:['Happy Buddha Purnima! May Lord Buddha\'s teachings guide you to peace. ☸️🙏','Wishing you wisdom, compassion, and enlightenment on this sacred day! 🌸✨','May the light of Dhamma illuminate your path forever! 🕯️☸️']},

  /* ============= JUNE 2026 ============= */
  {id:'eid_adha',name:'Eid ul-Adha',emoji:'🐑',cat:'muslim',date:'2026-06-17',
   wishes:['Eid ul-Adha Mubarak! May your sacrifices be accepted and rewarded! 🐑🌙✨','Blessed Eid ul-Adha! May peace and prosperity fill your home! ☪️💚','Bakrid Mubarak! May this day bring joy, love, and togetherness! 🕌🌟']},
  {id:'fathers',name:"Father's Day",emoji:'👔',cat:'special',date:'2026-06-21',
   wishes:["Happy Father's Day to the strongest man I know! 👔💪❤️","Dad, you are my hero, my guide, my everything. Happy Father's Day! 🎂💙✨","To the world's best father — today and every day! 🏆🎉🙏"]},
  {id:'yoga_day',name:'Yoga Day',emoji:'🧘',cat:'national',date:'2026-06-21',
   wishes:['Happy International Yoga Day! Find peace in every breath. 🧘‍♀️✨','Yoga unites body, mind, and soul. Happy Yoga Day! 🌅🧘','Practice yoga, spread peace! 🌿🧘‍♂️💚']},

  /* ============= JULY 2026 ============= */
  {id:'muharram',name:'Muharram',emoji:'🖤',cat:'muslim',date:'2026-07-27',
   wishes:['May the month of Muharram bring peace, reflection, and blessings! 🖤🤲🌙','Muharram Mubarak. May Allah guide you on the right path. ☪️✨','Wishing peace and serenity in the sacred month of Muharram. 🌙🙏']},

  /* ============= AUGUST 2026 ============= */
  {id:'friendship',name:'Friendship Day',emoji:'🤝',cat:'special',date:'2026-08-02',
   wishes:['Happy Friendship Day! You make every day brighter! 🤝❤️🎉','A true friend is the greatest gift in life. Happy Friendship Day! 🎈✨💕','Cheers to friendship — forever and always! 🥂🌟🤗']},
  {id:'independence',name:'Independence Day',emoji:'🇮🇳',cat:'national',date:'2026-08-15',
   wishes:['Jai Hind! 🇮🇳 Happy 80th Independence Day! 🎆✨','Vande Mataram! Let the tricolour fly high with pride! 🦁🎊','Freedom is our legacy. Let\'s honour our heroes. 🇮🇳🙏🌟']},
  {id:'raksha',name:'Raksha Bandhan',emoji:'🧶',cat:'hindu',date:'2026-08-22',
   wishes:['Happy Raksha Bandhan! The bond of siblings is the most beautiful! 🧶❤️💕','Happy Rakhi! Our love grows stronger with every passing year. 🤗✨🌺','Raksha Bandhan ki hardik shubhkamnayen! 🎊🙏']},
  {id:'janmashtami',name:'Janmashtami',emoji:'🦚',cat:'hindu',date:'2026-08-28',
   wishes:['Jai Kanhaiya Lal ki! 🦚 Happy Janmashtami! May Lord Krishna fill your life with love! 💙✨','Nand Ghar Anand Bhayo, Jai Kanha Lal ki! 🎉🙏🌺','May Shri Krishna\'s blessings shower upon you! 🦚🌟🙏']},
  {id:'bhagat',name:'Bhagat Singh Jayanti',emoji:'🔥',cat:'jayanti',date:'2026-09-28',
   wishes:['Inquilab Zindabad! 🔥 Saluting the great martyr Bhagat Singh! 🇮🇳💪','His sacrifice shall never be forgotten. Shat Shat Naman! 🙏✨🔥','Shaheed Bhagat Singh Jayanti ki hardik shubhkamnayen! 🇮🇳']},

  /* ============= SEPTEMBER 2026 ============= */
  {id:'teachers',name:"Teachers Day",emoji:'📚',cat:'national',date:'2026-09-05',
   wishes:["Happy Teachers Day! You light the lamp of knowledge. 📚🕯️🙏","A teacher plants the seeds of knowledge that bloom forever! 🌸✨📖","To the greatest teacher — thank you for changing my life! 💙🎓"]},
  {id:'ganesh',name:'Ganesh Chaturthi',emoji:'🐘',cat:'hindu',date:'2026-09-17',
   wishes:['Ganpati Bappa Morya! May Lord Ganesha remove all obstacles! 🐘🙏✨','Mangal Murti Morya! Wishing you wisdom and prosperity! 🌺🎊💛','Ganesh Chaturthi ki dhero shubhkamnayen! 🐘🎉🙏']},
  {id:'milad',name:'Milad-un-Nabi',emoji:'🕌',cat:'muslim',date:'2026-09-25',
   wishes:['Eid Milad-un-Nabi Mubarak! 🕌✨ May peace be upon all!','Milad Mubarak! 🌙🙏 May the blessings of the Prophet guide humanity!','On this blessed occasion, may peace and harmony prevail! ☪️🌟💚']},

  /* ============= OCTOBER 2026 ============= */
  {id:'gandhi',name:'Gandhi Jayanti',emoji:'🕊️',cat:'national',date:'2026-10-02',
   wishes:['Happy Gandhi Jayanti! Be the change you wish to see in the world! 🕊️🙏','Bapu ki Jai! Let his ideals of truth and non-violence inspire us. ✌️🇮🇳','Saluting the Father of the Nation on this special day! 🌹✨🙏']},
  {id:'navratri',name:'Navratri',emoji:'🔱',cat:'hindu',date:'2026-10-09',
   wishes:['Happy Navratri! May Maa Durga bless you with strength and joy! 🔱🙏💃','Nine nights of devotion and celebration! Jai Mata Di! ✨🌺','Navratri ki hardik shubhkamnayen! 🎊🔱🙏']},
  {id:'durga',name:'Durga Puja',emoji:'🙏',cat:'hindu',date:'2026-10-09',
   wishes:['Shubho Durga Puja! May Maa Durga\'s blessings fill your life! 🙏✨🌺','Shubho Bijoya! May the divine mother grant all your wishes! 🎊🌸','Durga Puja ki hardik shubhkamnayen! ✨🙏']},
  {id:'dussehra',name:'Dussehra',emoji:'🏹',cat:'hindu',date:'2026-10-19',
   wishes:['Happy Dussehra! May good always triumph over evil! 🏹🎆✨','Vijayadashami ki hardik shubhkamnayen! Victory to righteousness! 🌟🙏','On this Vijayadashami, may you defeat every obstacle! 🏹💪🎊']},
  {id:'karwa',name:'Karwa Chauth',emoji:'🌕',cat:'hindu',date:'2026-10-21',
   wishes:['Happy Karwa Chauth! May your love shine as bright as the moon! 🌕❤️💑','Karwa Chauth Mubarak! An eternal bond of love! 🌙✨🌺','May this sacred bond grow stronger every year! 💕🌕🙏']},
  {id:'sardar',name:'Sardar Patel Jayanti',emoji:'🇮🇳',cat:'jayanti',date:'2026-10-31',
   wishes:['Happy Sardar Patel Jayanti! Unity is our greatest strength! 🇮🇳🤝💪','Saluting the Iron Man of India on Rashtriya Ekta Diwas! 🙏✨🇮🇳','Unity in diversity — Sardar Patel\'s greatest gift to India! 🌟']},
  {id:'halloween',name:'Halloween',emoji:'🎃',cat:'special',date:'2026-10-31',
   wishes:['Happy Halloween! 🎃👻 Have a spooky and fun night! 🕷️✨','Trick or Treat! Happy Halloween to all the ghouls out there! 👻🦇🎉']},

  /* ============= NOVEMBER 2026 ============= */
  {id:'diwali',name:'Diwali',emoji:'🪔',cat:'hindu',date:'2026-11-08',
   wishes:['Shubh Deepavali! 🪔 May the festival of lights fill your home with joy! ✨🎆','Happy Diwali! May every diya you light bring prosperity and happiness! 💛🌟🙏','Diwali ki hardik shubhkamnayen! May darkness be replaced by light! 🪔🎇💫']},
  {id:'chhath',name:'Chhath Puja',emoji:'🌅',cat:'hindu',date:'2026-11-11',
   wishes:['Happy Chhath Puja! 🌅 May Surya Dev bless you with health and happiness! ☀️🙏','Chhath Puja ki hardik shubhkamnayen! 🌅✨💛','May the rising sun bring prosperity and blessings to your life! ☀️🙏']},
  {id:'children',name:"Children's Day",emoji:'👶',cat:'national',date:'2026-11-14',
   wishes:["Happy Children's Day! 👶🌸 The future belongs to you! 🌟🎉","Bal Diwas ki shubhkamnayen! Stay curious, stay joyful! 🌈⭐💕","To the little stars who make our world brighter! 🌟🎊💕"]},
  {id:'guru_nanak',name:'Guru Nanak Jayanti',emoji:'🙏',cat:'sikh',date:'2026-11-24',
   wishes:['Guru Nanak Jayanti di vadhaiyan! 🙏✨ Waheguru Ji Ka Khalsa!','May Guru Nanak Dev Ji\'s teachings of love and equality guide us! 🌟🙏','Gurpurab Mubarak! May his blessings be with you always! ✨💛']},

  /* ============= DECEMBER 2026 ============= */
  {id:'christmas',name:'Christmas',emoji:'🎄',cat:'christian',date:'2026-12-25',
   wishes:['Merry Christmas! 🎄 May joy, peace, and love fill your heart! ⭐✨🎁','Ho Ho Ho! Wishing you a wonderful Christmas full of warmth! 🎅❤️🌟','May the magic of Christmas bring blessings to you and your family! 🎄⭐💕']},
  {id:'gita_jayanti',name:'Gita Jayanti',emoji:'📖',cat:'hindu',date:'2026-12-01',
   wishes:['Happy Gita Jayanti! 📖 May the wisdom of Bhagavad Gita guide your life! 🙏✨','Saluting the sacred Bhagavad Gita on this blessed day! 📖💛🙏','May the teachings of Lord Krishna in the Gita show you the right path! ✨']},

  /* ============= JANUARY 2027 ============= */
  {id:'newyear',name:'New Year 2027',emoji:'🎆',cat:'special',date:'2027-01-01',
   wishes:['Happy New Year 2027! 🎆 May this year bring you health, wealth, and joy! 🥂✨','Wishing you a year full of beautiful moments and wonderful achievements! 🌟🎊','Cheers to new beginnings, new dreams, and endless possibilities! 🎉💫']},
  {id:'lohri',name:'Lohri',emoji:'🔥',cat:'hindu',date:'2027-01-13',
   wishes:['Happy Lohri! 🔥 May the bonfire burn away all worries! 🌽🎉💃','Lohri di vadhaiyan! May warmth and prosperity fill your life! 🍿✨','Sunder mundriye ho! Happy Lohri to all! 🔥🎊💛']},
  {id:'makar',name:'Makar Sankranti',emoji:'🪁',cat:'hindu',date:'2027-01-14',
   wishes:['Happy Makar Sankranti! 🪁 Let your spirits soar high like kites! ☀️✨','Uttarayan Mubarak! May this harvest festival bring prosperity! 🌾🎊💛','Happy Sankranti! Til-Gul ghya, god god bola! 🍬🪁🌟']},
  {id:'subhash',name:'Subhas Chandra Bose Jayanti',emoji:'⚡',cat:'jayanti',date:'2027-01-23',
   wishes:['Parakram Diwas! Saluting the great Netaji Subhas Chandra Bose! ⚡🇮🇳🙏','Tum Mujhe Khoon Do, Main Tumhe Azaadi Dunga! Jai Hind! 🇮🇳💪','Happy Netaji Jayanti! May his courage inspire every Indian! 🌟✨']},
  {id:'republic',name:'Republic Day',emoji:'🇮🇳',cat:'national',date:'2027-01-26',
   wishes:['Happy Republic Day! 🇮🇳 Jai Bharat! Let the constitution guide us! 🎺✨','78th Republic Day ki hardik shubhkamnayen! 🇮🇳🎊💙','Proud to be an Indian! Long live our Republic! 🇮🇳🌟💪']},

  /* ============= FEBRUARY 2027 ============= */
  {id:'basant',name:'Basant Panchami',emoji:'🌻',cat:'hindu',date:'2027-01-22',
   wishes:['Happy Basant Panchami! 🌻 May Maa Saraswati bless you with wisdom! 📚✨','Vasant Panchami ki shubhkamnayen! May knowledge and art flourish! 🌸💛','Jai Maa Saraswati! Happy Basant Panchami! 🎶📖✨']},
  {id:'valentines',name:"Valentine's Day",emoji:'❤️',cat:'special',date:'2027-02-14',
   wishes:["Happy Valentine's Day! ❤️ You are the love of my life! 🌹💕✨","My heart beats for you every single day! Happy Valentine's Day! 💘🌹","Love is not just a feeling, it's you. Happy Valentine's Day! ❤️✨🫂"]},
  {id:'maha_shiv',name:'Maha Shivaratri',emoji:'🔱',cat:'hindu',date:'2027-02-17',
   wishes:['Har Har Mahadev! 🔱 Happy Maha Shivaratri! May Shiva bless you! 🌙✨','Om Namah Shivaya! May Lord Shiva grant you peace and prosperity! 🙏💜','Maha Shivaratri ki hardik shubhkamnayen! Jai Bholenath! 🔱🌟']},
  {id:'guru_ravidas',name:'Guru Ravidas Jayanti',emoji:'🙏',cat:'jayanti',date:'2027-02-20',
   wishes:['Happy Guru Ravidas Jayanti! 🙏 May his teachings of equality inspire us! ✨','Saluting Sant Guru Ravidas Ji on this blessed day! 💛🌟','May Guru Ravidas Ji\'s message of love and service guide humanity! 🙏✨']},

  /* ============= MARCH 2027 ============= */
  {id:'holi',name:'Holi',emoji:'🎨',cat:'hindu',date:'2027-03-29',
   wishes:['Happy Holi! 🎨 May your life be as colourful as this festival! 🌈✨🎉','Rang Barse! Happy Holi to you and your family! 💦🌸🎊','May this Holi wash away all sorrows and paint your life with joy! 🎨🌟💕']},
  {id:'ram_navami',name:'Ram Navami',emoji:'🏹',cat:'hindu',date:'2027-03-30',
   wishes:['Happy Ram Navami! 🏹 Jai Shri Ram! May Lord Ram bless you! 🙏🌺✨','On Lord Ram\'s birthday, may righteousness prevail in your life! 🏹💛','Jai Shri Ram! Ram Navami ki hardik shubhkamnayen! 🌟🙏']},
  {id:'mahavir',name:'Mahavir Jayanti',emoji:'🪷',cat:'jain',date:'2027-04-08',
   wishes:['Happy Mahavir Jayanti! 🪷 Jai Jinendra! May non-violence guide our world! ✨🙏','Saluting Bhagwan Mahavir on this sacred day! Michhami Dukkadam! 🪷💛','May the path of truth and non-violence bless your life! ✨🌸🙏']},
  {id:'good_friday',name:'Good Friday',emoji:'✝️',cat:'christian',date:'2027-04-02',
   wishes:['Good Friday — a day of reflection and gratitude for the ultimate sacrifice! ✝️🙏','May the spirit of Good Friday bring peace and renewal to your heart! ✝️✨','Remembering the greatest sacrifice with humility and prayer! 🙏💜']},
  {id:'hanuman',name:'Hanuman Jayanti',emoji:'🐒',cat:'hindu',date:'2027-04-14',
   wishes:['Jai Bajrangbali! 🐒 Happy Hanuman Jayanti! May Hanuman Ji bless you with strength! 💪🙏','Sankat Mochan Hanumanji ki Jai! Happy Hanuman Jayanti! 🌺✨','May the divine grace of Hanumanji protect you always! 🐒💛🙏']},
  {id:'ambedkar',name:'Ambedkar Jayanti',emoji:'📘',cat:'national',date:'2027-04-14',
   wishes:['Happy Ambedkar Jayanti! 📘 Jai Bhim! May his vision of equality inspire us! 🙏💙','Saluting Babasaheb Dr. B.R. Ambedkar — architect of our Constitution! 🇮🇳✨','May the ideals of justice, liberty, and equality guide our nation! 📘💪']},
  {id:'easter',name:'Easter',emoji:'🐣',cat:'christian',date:'2027-04-04',
   wishes:['Happy Easter! 🐣🌷 May the resurrection bring new hope to your life! ✝️✨','Wishing you joy, faith, and new beginnings this Easter! 🥚🌸💕','May Easter fill your heart with the light of love and hope! 🌷🐣✨']},
  {id:'baisakhi',name:'Baisakhi',emoji:'🌾',cat:'sikh',date:'2027-04-14',
   wishes:['Happy Baisakhi! 🌾 May this harvest festival bring prosperity and joy! 💛🎊','Baisakhi di vadhaiyan! Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh! 🙏✨','May the spirit of Baisakhi fill your life with abundance! 🌾💚🌟']},
  {id:'vishu',name:'Vishu',emoji:'🌸',cat:'hindu',date:'2027-04-14',
   wishes:['Happy Vishu! 🌸 May Vishukkani bring you prosperity and happiness! ✨💛','Vishu Ashamsakal! May this New Year bring joy and good fortune! 🌺🌟','May the first sight on Vishu bring blessings for the whole year! 🌸🙏✨']},

  /* ============= MAY 2027 ============= */
  {id:'eid_fitr',name:'Eid ul-Fitr',emoji:'☪️',cat:'muslim',date:'2027-05-19',
   wishes:['Eid Mubarak! 🌙✨ May Allah\'s blessings be with you and your family! 🕌💚','Happy Eid ul-Fitr! May this day bring peace, joy, and togetherness! ☪️🎊','Eid Mubarak! May this celebration fill your heart with happiness! 🌟🤲💕']},
  {id:'mothers',name:"Mother's Day",emoji:'🌹',cat:'special',date:'2027-05-09',
   wishes:["Happy Mother's Day! 🌹 You are the world to me! ❤️💕✨","Maa — the most beautiful word in any language. Happy Mother's Day! 🌸🤗","To the woman who is my strength and my heart — Happy Mother's Day! 💐💕"]},
  {id:'rani_laxmi',name:'Rani Laxmibai Jayanti',emoji:'⚔️',cat:'jayanti',date:'2027-06-19',
   wishes:['Saluting the brave Rani Laxmibai of Jhansi! ⚔️🌹🇮🇳','Her courage inspires every Indian! Rani Laxmibai Jayanti ki Jai! ⚔️💪✨','The Lion Queen of Jhansi — forever in our hearts! 👑⚔️🌟']},
  {id:'guru_gobind',name:'Guru Gobind Singh Jayanti',emoji:'⚔️',cat:'sikh',date:'2027-01-05',
   wishes:['Happy Guru Gobind Singh Jayanti! ⚔️🙏 Waheguru Ji Ka Khalsa!','May the blessings of Guru Gobind Singh Ji guide you on the path of truth! ✨💛','Celebrating the birth of the warrior saint! Waheguru! ⚔️🌟🙏']},
  {id:'vivekananda',name:'Vivekananda Jayanti',emoji:'🔥',cat:'jayanti',date:'2027-01-12',
   wishes:['Arise, Awake, Stop not till the goal is reached! 🔥 Happy Vivekananda Jayanti! 💪✨','National Youth Day — May Swami Vivekananda\'s vision inspire every youth! 🌟🙏','His words changed the world. Saluting Swami Vivekananda Ji! 🔥💫']},
  {id:'shivaji',name:'Shivaji Maharaj Jayanti',emoji:'⚔️',cat:'jayanti',date:'2027-02-19',
   wishes:['Jay Shivaji! 🌟 Saluting Chhatrapati Shivaji Maharaj on his Jayanti! ⚔️💪🇮🇳','May the spirit of Shivaji Maharaj inspire every Indian! Jay Bhavani! 🌺✨','Shiv Jayanti ki hardik shubhkamnayen! Jai Maharashtra! ⚔️🌟']},

  /* ============= ANYDAY OCCASIONS ============= */
  {id:'birthday',name:'Birthday',emoji:'🎂',cat:'birthday',date:'anyday',
   wishes:['Happy Birthday! 🎂🎉 May all your dreams and wishes come true! 🌟✨','Wishing you a day as special as you are! 🎈🥳💕 Happy Birthday!','May this birthday be the beginning of the most amazing year of your life! 🎊🌟','Love, laughter, and lots of cake! 🎂❤️✨ Happy Birthday!','Warmest birthday wishes to someone truly special! 🤗🎉💫','May joy and happiness surround you today and always! 🎂⭐🎊']},
  {id:'birthday_wife',name:"Wife's Birthday",emoji:'💕',cat:'birthday',date:'anyday',
   wishes:['Happy Birthday to my beautiful wife! 💕🎂 You are my sunshine! ✨','My life became complete the day you entered it. Happy Birthday, love! ❤️🌹🎉','You are not just my wife, you are my best friend and my world! 💖🎂🌟']},
  {id:'birthday_husband',name:"Husband's Birthday",emoji:'💙',cat:'birthday',date:'anyday',
   wishes:['Happy Birthday to the best husband in the world! 💙🎂🎉','You are my strength, my love, my everything. Happy Birthday! ❤️✨🌟','Celebrating the man who makes every day worth living! 💙🥂🎊']},
  {id:'birthday_friend',name:"Friend's Birthday",emoji:'🎈',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday bestie! 🎈❤️🎉 This day is all about YOU!", "Let's celebrate the most awesome person I know! 🥳🎂✨", "Party time! 🎊💃🎈 Happy Birthday to my forever friend!"]},
  {id:'birthday_mom',name:"Mom's Birthday",emoji:'👩',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday Mom! 👩❤️🎂 You are my whole world!", "To the woman who gave me life — Happy Birthday! 🌹💕✨", "World's best Mom gets the best birthday! 🌸🎂💕"]},
  {id:'birthday_dad',name:"Dad's Birthday",emoji:'👨',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday Dad! 👨💙🎂 My hero, my guide, my everything!", "To the strongest man I know — Happy Birthday! 💪❤️🎉", "Happy Birthday Papa! Thank you for everything! 🎊💙✨"]},
  {id:'birthday_child',name:"Child's Birthday",emoji:'🧒',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday little superstar! 🧒🎂🎈 You light up our world!", "May you always stay as joyful and wonderful as you are today! ⭐🎉💕", "Growing up so fast! Happy Birthday darling! 🌟🎂🥳"]},
  {id:'birthday_sis',name:"Sister's Birthday",emoji:'👧',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday Sis! 👧❤️ My partner in crime, forever! 🎉✨", "You are the best sister anyone could ask for! 🌸💕🎂", "Happy Birthday to my favourite girl! 🎈🌺💖"]},
  {id:'birthday_bro',name:"Brother's Birthday",emoji:'👦',cat:'birthday',date:'anyday',
   wishes:["Happy Birthday Bhai! 👦💪 The coolest brother ever! 🎉✨", "Growing older but never growing up! Happy Birthday! 😄🎂🎊", "To my partner, protector, and best friend — Happy Birthday! 💙🌟"]},
  {id:'anniversary',name:'Wedding Anniversary',emoji:'💍',cat:'special',date:'anyday',
   wishes:['Happy Anniversary! 💍❤️🎉 Still falling in love with you every day!','Every moment with you is a blessing. Happy Anniversary! 💕🥂✨','Two hearts, one soul, endless love! Happy Anniversary! 💑💖🌹']},
  {id:'congratulations',name:'Congratulations',emoji:'🏆',cat:'special',date:'anyday',
   wishes:['Congratulations! 🏆✨🎉 Your hard work has paid off brilliantly!','So incredibly proud of you! You deserve this success! 🥳💪🌟','Badhai ho! 🎊 This achievement is just the beginning! 🌟✨']},
  {id:'get_well',name:'Get Well Soon',emoji:'🌻',cat:'special',date:'anyday',
   wishes:['Sending you healing thoughts and warm wishes! Get well soon! 🌻❤️🙏','Wishing you a speedy recovery! We miss your bright smile! 💐✨','Take rest, get well, and come back stronger! 🌻💕🌟']},
  {id:'thank_you',name:'Thank You',emoji:'🙏',cat:'special',date:'anyday',
   wishes:['Thank you from the bottom of my heart! 🙏❤️✨','Your kindness means the world to me. Thank you! 💕🌟🙏','THANK YOU! You are an amazing human being! 🎊💕']},
  {id:'graduation',name:'Graduation',emoji:'🎓',cat:'special',date:'anyday',
   wishes:['Congratulations Graduate! 🎓🌟🎉 The world is yours now!','You did it! Years of hard work have finally paid off! 📜✨💪','Today you graduate, tomorrow you change the world! 🎓🚀🌟']},
  {id:'new_baby',name:'New Baby',emoji:'👶',cat:'special',date:'anyday',
   wishes:['Congratulations on your precious bundle of joy! 👶❤️🎉','A tiny hand has wrapped around your heart forever! 💕🌸✨','Welcome to the world, little one! 🌟👶💖']},
  {id:'housewarming',name:'Housewarming',emoji:'🏠',cat:'special',date:'anyday',
   wishes:['Happy Housewarming! 🏠❤️🎉 May your new home be filled with love!','Griha Pravesh Mubarak! 🌺✨🏡 May happiness reside here always!','Congratulations on your new home! May it be blessed always! 🏠💕🌟']},
  {id:'engagement',name:'Engagement',emoji:'💌',cat:'special',date:'anyday',
   wishes:['Congratulations on your engagement! 💌💍 Wishing you a lifetime of love!','Two hearts beginning a beautiful journey! Congratulations! 💕✨🎊','The next chapter begins! Heartiest congratulations! 💍❤️🌟']},
  {id:'retirement',name:'Retirement',emoji:'🏖️',cat:'special',date:'anyday',
   wishes:['Happy Retirement! 🏖️🎉 Time to enjoy the fruits of your hard work!','Congratulations on this new chapter! Enjoy every moment! 🌴💕✨','The best is yet to come! Happy Retirement! 🏖️🌟🎊']}
];

/* =========================================================
   DATE UTILITIES
   ========================================================= */
function getToday(){
  var d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function getDaysDiff(ds){
  if(ds==='anyday')return 9999;
  var t=new Date();t.setHours(0,0,0,0);
  var g=new Date(ds);g.setHours(0,0,0,0);
  return Math.ceil((g-t)/(864e5));
}
function isToday(ds){return ds!=='anyday'&&ds===getToday();}
function isPast(ds){if(ds==='anyday')return false;return getDaysDiff(ds)<0;}
function isUpcoming(ds,n){if(ds==='anyday')return false;var d=getDaysDiff(ds);return d>=0&&d<=n;}

function getFilteredOccasions(cat,includeAll){
  var list=[];
  for(var i=0;i<ALL_OCCASIONS.length;i++){
    var o=ALL_OCCASIONS[i];
    if(cat&&cat!=='all'&&o.cat!==cat)continue;
    if(!includeAll&&o.date!=='anyday'&&isPast(o.date))continue;
    list.push(o);
  }
  list.sort(function(a,b){
    if(a.date==='anyday'&&b.date==='anyday')return 0;
    if(a.date==='anyday')return 1;
    if(b.date==='anyday')return -1;
    return getDaysDiff(a.date)-getDaysDiff(b.date);
  });
  return list;
}

function getOccasionBadge(ds){
  if(ds==='anyday')return {text:'Anytime',cls:'badge-any'};
  if(isToday(ds))return {text:'🔴 TODAY',cls:'badge-today'};
  var d=getDaysDiff(ds);
  if(d===1)return {text:'⏰ Tomorrow',cls:'badge-soon'};
  if(d<=7)return {text:'📅 This Week',cls:'badge-week'};
  if(d<=30)return {text:'🗓️ This Month',cls:'badge-month'};
  return {text:'',cls:''};
}

function getDaysLabel(ds){
  if(ds==='anyday')return 'Anytime';
  if(isToday(ds))return '🎉 Today!';
  var d=getDaysDiff(ds);
  if(d<0)return 'Past';
  if(d===0)return 'Today!';
  if(d===1)return 'Tomorrow';
  return d+' days away';
}

function getFT(id){return FT[id]||null;}

function getOccasionsInRange(y,m){
  var ys=y+'-'+String(m+1).padStart(2,'0');
  var list=[];
  for(var i=0;i<ALL_OCCASIONS.length;i++){
    var o=ALL_OCCASIONS[i];
    if(o.date==='anyday')continue;
    if(o.date.startsWith(ys))list.push(o);
  }
  list.sort(function(a,b){return a.date<b.date?-1:1;});
  return list;
}

function findOcc(id){
  for(var i=0;i<ALL_OCCASIONS.length;i++)if(ALL_OCCASIONS[i].id===id)return ALL_OCCASIONS[i];
  return null;
}