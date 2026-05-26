/* ================================================================
   AI TOOLCOR FESTIVAL — app.js
   All features: particles, calendar, card creator, gallery, search
   ================================================================ */
(function(){
'use strict';

var $ = function(s){ return document.querySelector(s); };
var $$ = function(s){ return document.querySelectorAll(s); };
var curTpl='glass', curColor='ocean', curFont="'Playfair Display',serif";
var curOccId = '';

/* ---- TOAST ---- */
function toast(msg, type){
  var box = $('#toastBox'); if(!box) return;
  var t = document.createElement('div');
  t.className = 'toast' + (type?' toast-'+type:'');
  t.textContent = msg; box.appendChild(t);
  setTimeout(function(){
    t.style.animation = 'toastOut .35s forwards';
    setTimeout(function(){ t.remove(); }, 350);
  }, 2800);
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', function(){
  initNav();
  initTheme();
  initBgParticles();
  if($('#typer'))     initTyper();
  if($('#rotator'))   initRotator();
  if($('#ctr1'))      initCounter();
  if($('#heroCard'))  initHeroCard();
  if($('#occGrid'))   initOccasions();
  if($('#crOccasion'))initCreator();
  if($('#searchInput'))initSearch();
  if($('#galGrid'))   initGallery();
  if($('#calGrid'))   initCalendarPage();
  initScroll();
  initReveal();
  // gallery page search
  initGalSearch();
});

/* ================================================================
   NAV
   ================================================================ */
function initNav(){
  window.addEventListener('scroll', function(){
    var n=$('#nav'); if(n) n.classList.toggle('scrolled', scrollY>50);
  }, {passive:true});
  var btn=$('#hamBtn'), menu=$('#mobMenu'); if(!btn||!menu) return;
  btn.addEventListener('click', function(){
    var o = menu.classList.toggle('open');
    btn.classList.toggle('active');
    document.body.style.overflow = o?'hidden':'';
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open'); btn.classList.remove('active');
      document.body.style.overflow='';
    });
  });
}

/* ================================================================
   THEME
   ================================================================ */
function initTheme(){
  var b=$('#themeBtn'); if(!b) return;
  var s = localStorage.getItem('atcf_theme')||'dark';
  document.documentElement.dataset.theme = s;
  b.textContent = s==='dark'?'🌙':'☀️';
  b.addEventListener('click', function(){
    var n = document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme = n;
    localStorage.setItem('atcf_theme', n);
    b.textContent = n==='dark'?'🌙':'☀️';
    toast((n==='dark'?'🌙 Dark':'☀️ Light')+' mode');
  });
}

/* ================================================================
   CANVAS PARTICLES — deep blue glowing dots + stars
   ================================================================ */
function initBgParticles(){
  var c=$('#particleCanvas'); if(!c) return;
  var ctx=c.getContext('2d'), W, H, pts=[];
  function resize(){ W=c.width=innerWidth; H=c.height=innerHeight; }
  resize(); addEventListener('resize', resize, {passive:true});

  // Blue/cyan particles
  for(var i=0;i<55;i++) pts.push(mkPt(W,H));

  function mkPt(w,h){
    var types=['dot','cross','ring'];
    return {
      x:Math.random()*w, y:Math.random()*h,
      r:Math.random()*2+.5,
      dx:(Math.random()-.5)*.35, dy:-(Math.random()*.25+.05),
      a:Math.random()*.35+.05,
      c:['#3b82f6','#60a5fa','#00d8ff','#93c5fd','#ffd700'][~~(Math.random()*5)],
      type:types[~~(Math.random()*3)],
      pulse:Math.random()*Math.PI*2
    };
  }
  (function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){
      var p=pts[i];
      var alpha = p.a + Math.sin(p.pulse)*0.1;
      p.pulse += 0.02;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.c;
      ctx.strokeStyle = p.c;
      if(p.type==='dot'){
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      } else if(p.type==='cross'){
        ctx.lineWidth=.7;
        ctx.beginPath(); ctx.moveTo(p.x-p.r*2,p.y); ctx.lineTo(p.x+p.r*2,p.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p.x,p.y-p.r*2); ctx.lineTo(p.x,p.y+p.r*2); ctx.stroke();
      } else {
        ctx.lineWidth=.5;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r*1.5,0,Math.PI*2); ctx.stroke();
      }
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<-10||p.x>W+10) p.dx*=-1;
      if(p.y<-10){ p.y=H+10; p.x=Math.random()*W; }
    }
    ctx.globalAlpha=1;
  })();
}

/* ================================================================
   HERO ANIMATIONS
   ================================================================ */
function initTyper(){
  var e=$('#typer'); if(!e) return;
  var lines=['Create beautiful festival wishes ✨','60+ occasions covered 🎪','Birthdays, Jayantis & festivals 🎂','AI-powered messages 🤖','100% free forever 💯'];
  var li=0,ci=0,del=false;
  (function run(){
    var s=lines[li];
    e.textContent=s.substring(0,del?--ci:++ci);
    var w=del?22:55;
    if(!del&&ci===s.length){w=2400;del=true;}
    else if(del&&ci===0){del=false;li=(li+1)%lines.length;w=300;}
    setTimeout(run,w);
  })();
}

function initRotator(){
  var e=$('#rotator'); if(!e) return;
  var words=['Festivals','Diwali','Birthday','Eid','Christmas','Jayanti','New Year','Holi'];
  var i=0; e.style.transition='opacity .3s';
  setInterval(function(){
    i=(i+1)%words.length;
    e.style.opacity='0';
    setTimeout(function(){e.textContent=words[i];e.style.opacity='1';},300);
  },2600);
}

function initCounter(){
  var e=$('#ctr1'); if(!e) return;
  var target=25000, dur=2200, start=performance.now();
  (function tick(now){
    var p=Math.min((now-start)/dur,1);
    e.textContent=Math.floor((1-Math.pow(1-p,3))*target).toLocaleString()+'+';
    if(p<1) requestAnimationFrame(tick);
  })(start);
}

function initHeroCard(){
  var em=$('#hcEmoji'),ti=$('#hcTitle'),ms=$('#hcMsg'),cd=$('#heroCard');
  if(!em||!ti||!ms||!cd) return;
  var up=getFilteredOccasions('all',false), items=[];
  for(var i=0;i<up.length&&items.length<10;i++)
    if(up[i].date!=='anyday') items.push(up[i]);
  if(!items.length) items=up.slice(0,5);
  var i=0;
  function next(){
    var o=items[i];
    var th=getFT(o.id);
    cd.style.background=th?th.bg:COLOR_THEMES[i%COLOR_THEMES.length].g;
    em.textContent=o.emoji;
    ti.textContent='Happy '+o.name+'!';
    ms.textContent=o.wishes[0];
    // update orbit cards
    var n1=items[(i+1)%items.length], n2=items[(i+2)%items.length];
    var oc1=$('.orbit-1'), oc2=$('.orbit-2');
    if(oc1){
      oc1.querySelector('.orbit-emoji').textContent=n1.emoji;
      oc1.querySelector('.orbit-name').textContent=n1.name;
      oc1.querySelector('.orbit-days').textContent=getDaysLabel(n1.date);
    }
    if(oc2){
      oc2.querySelector('.orbit-emoji').textContent=n2.emoji;
      oc2.querySelector('.orbit-name').textContent=n2.name;
      oc2.querySelector('.orbit-days').textContent=getDaysLabel(n2.date);
    }
  }
  next();
  setInterval(function(){ i=(i+1)%items.length; next(); }, 3500);
}

/* ================================================================
   SEARCH
   ================================================================ */
function initSearch(){
  var inp=$('#searchInput'), res=$('#searchResults'); if(!inp||!res) return;
  inp.addEventListener('input', function(){
    var q=inp.value.toLowerCase().trim();
    if(q.length<2){res.innerHTML='';res.style.display='none';return;}
    var all=getFilteredOccasions('all',true), hits=[];
    for(var i=0;i<all.length&&hits.length<8;i++){
      var o=all[i];
      var m=o.name.toLowerCase().includes(q)||o.cat.includes(q);
      if(!m) for(var k=0;k<(o.keywords||[]).length;k++) if(o.keywords[k].includes(q)){m=true;break;}
      if(m) hits.push(o);
    }
    if(!hits.length){ res.innerHTML='<div class="sr-empty">No results 😔</div>'; }
    else{
      var h='';
      hits.forEach(function(o){
        var bd=getOccasionBadge(o.date);
        h+='<div class="sr-item" data-id="'+o.id+'"><span class="sr-emoji">'+o.emoji+'</span>';
        h+='<div><strong>'+o.name+'</strong>'+(bd.text?'<span class="sr-badge">'+bd.text+'</span>':'');
        h+='<br/><small>'+( o.date==='anyday'?'Any Day':(new Date(o.date+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})))+' · '+getDaysLabel(o.date)+'</small></div></div>';
      });
      res.innerHTML=h;
    }
    res.style.display='block';
    res.querySelectorAll('.sr-item').forEach(function(it){
      it.addEventListener('click', function(){
        var id=this.dataset.id;
        selectOccasion(id);
        res.style.display='none'; inp.value='';
        var cr=$('#create'); if(cr) cr.scrollIntoView({behavior:'smooth'});
      });
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.search-wrap')) res.style.display='none';
  });
}

/* ================================================================
   OCCASIONS
   ================================================================ */
function initOccasions(){ renderOccFilters(); renderOccGrid('all'); }
function renderOccFilters(){
  var w=$('#occFilters'); if(!w) return;
  var h='';
  CATEGORIES.forEach(function(c){
    h+='<button class="fbtn'+(c.id==='all'?' active':'')+'" data-f="'+c.id+'">'+c.label+'</button>';
  });
  w.innerHTML=h;
  w.addEventListener('click', function(e){
    var b=e.target.closest('.fbtn'); if(!b) return;
    w.querySelectorAll('.fbtn').forEach(function(x){x.classList.remove('active');});
    b.classList.add('active');
    renderOccGrid(b.dataset.f);
  });
}
function renderOccGrid(cat){
  var g=$('#occGrid'); if(!g) return;
  var list=getFilteredOccasions(cat, false);
  if(!list.length){
    g.innerHTML='<p style="color:var(--text-muted);text-align:center;padding:2rem;grid-column:1/-1">No upcoming occasions in this category.</p>';
    return;
  }
  var h='';
  list.forEach(function(o){
    var bd=getOccasionBadge(o.date), dt=getDaysLabel(o.date);
    var th=getFT(o.id);
    var bgStyle=th?'background:'+th.bg+';':'background:var(--glass-1);';
    h+='<div class="occ-card reveal" data-id="'+o.id+'" style="'+bgStyle+'">';
    h+='<div class="card-fest-bg"></div>';
    if(bd.text) h+='<div class="oc-badge '+bd.cls+'">'+bd.text+'</div>';
    h+='<span class="oc-emoji">'+o.emoji+'</span>';
    h+='<div class="oc-name">'+o.name+'</div>';
    if(o.date!=='anyday') h+='<div class="oc-date">📅 '+(new Date(o.date+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}))+'</div>';
    h+='<div class="oc-days">'+dt+'</div>';
    h+='<span class="oc-btn">Create Wish ✨</span>';
    h+='</div>';
  });
  g.innerHTML=h;
  reReveal();
  g.querySelectorAll('.occ-card').forEach(function(c){
    c.addEventListener('click', function(){
      var id=this.dataset.id;
      selectOccasion(id);
      var cr=$('#create'); if(cr) cr.scrollIntoView({behavior:'smooth'});
      toast('✨ '+findOcc(id).name+' selected!');
    });
  });
}

/* ================================================================
   CREATOR
   ================================================================ */
function initCreator(){
  renderOccSelect(); renderTemplates(); renderColors(); renderCard(); bindCreator();
}
function renderOccSelect(){
  var s=$('#crOccasion'); if(!s) return;
  var list=getFilteredOccasions('all',true);
  var h='<option value="">🎪 Select an occasion...</option>';
  list.forEach(function(o){
    var ex='';
    if(isToday(o.date)) ex=' 🔴 TODAY';
    else if(o.date!=='anyday'&&isUpcoming(o.date,7)) ex=' ⏰';
    h+='<option value="'+o.id+'">'+o.emoji+' '+o.name+ex+'</option>';
  });
  s.innerHTML=h;
}
function renderTemplates(){
  var w=$('#tplSelector'); if(!w) return;
  var h='';
  CARD_TEMPLATES.forEach(function(t){
    h+='<div class="tpl-opt'+(t.id===curTpl?' active':'')+'" data-tpl="'+t.id+'">';
    h+='<span>'+t.preview+'</span><span>'+t.name+'</span></div>';
  });
  w.innerHTML=h;
  w.addEventListener('click',function(e){
    var o=e.target.closest('.tpl-opt'); if(!o) return;
    w.querySelectorAll('.tpl-opt').forEach(function(x){x.classList.remove('active');});
    o.classList.add('active'); curTpl=o.dataset.tpl; renderCard();
  });
}
function renderColors(){
  var w=$('#colorGrid'); if(!w) return;
  var h='';
  COLOR_THEMES.forEach(function(c){
    h+='<div class="cdot'+(c.id===curColor?' active':'')+'" data-c="'+c.id+'" style="background:'+c.g+'" title="'+c.id+'"></div>';
  });
  w.innerHTML=h;
  w.addEventListener('click',function(e){
    var d=e.target.closest('.cdot'); if(!d) return;
    w.querySelectorAll('.cdot').forEach(function(x){x.classList.remove('active');});
    d.classList.add('active'); curColor=d.dataset.c; renderCard();
  });
}
function selectOccasion(id){
  curOccId=id;
  var s=$('#crOccasion'); if(s){ s.value=id; }
  var o=findOcc(id); if(!o) return;
  var m=$('#crMsg'); if(m&&!m.value) m.value=o.wishes[0]||'';
  renderCard(); updatePreviewBg(id);
}
function bindCreator(){
  ['crTo','crMsg','crFrom'].forEach(function(id){
    var e=$('#'+id); if(e) e.addEventListener('input',renderCard);
  });
  var s=$('#crOccasion');
  if(s) s.addEventListener('change',function(){
    var o=findOcc(s.value); curOccId=s.value;
    if(o){var m=$('#crMsg');if(m&&!m.value) m.value=o.wishes[0]||'';}
    renderCard(); updatePreviewBg(s.value);
  });
  var f=$('#crFont');
  if(f) f.addEventListener('change',function(){ curFont=f.value; renderCard(); });
  var ai=$('#aiBtn');
  if(ai) ai.addEventListener('click',function(){
    var sel=$('#crOccasion'), o=findOcc(sel?sel.value:'');
    if(!o){toast('🎪 Pick an occasion first!');return;}
    var msgs=o.wishes;
    $('#crMsg').value=msgs[Math.floor(Math.random()*msgs.length)];
    renderCard(); toast('🤖 AI message applied!');
  });
  var dl=$('#dlBtn'); if(dl) dl.addEventListener('click',dlCard);
  var sh=$('#shareBtn');
  if(sh) sh.addEventListener('click',function(){
    var txt=buildText();
    if(navigator.share) navigator.share({title:SITE_NAME,text:txt}).catch(function(){});
    else navigator.clipboard.writeText(txt).then(function(){toast('🔗 Copied to clipboard!');}).catch(function(){});
  });
  var cp=$('#copyBtn');
  if(cp) cp.addEventListener('click',function(){
    navigator.clipboard.writeText(buildText()).then(function(){
      toast('📋 Message copied!');
      cp.textContent='✅ Copied!';
      setTimeout(function(){cp.textContent='📋 Copy Text';},1500);
    }).catch(function(){toast('Copy failed');});
  });
}
function updatePreviewBg(id){
  var bg=$('#crPreviewBg'); if(!bg) return;
  var th=getFT(id);
  if(th){bg.style.background=th.bg;bg.style.opacity='0.2';}
  else{bg.style.opacity='0';}
}

/* ---- RENDER CARD ---- */
function renderCard(){
  var inner=$('#wcInner'); if(!inner) return;
  var sv=($('#crOccasion')||{}).value||'', oc=findOcc(sv);
  var em=oc?oc.emoji:'🎉';
  var gr=oc?'Happy '+oc.name+'!':'Happy Festival!';
  var to=($('#crTo')||{}).value||'';
  var mg=($('#crMsg')||{}).value||'';
  var fr=($('#crFrom')||{}).value||'';
  var md=mg||'Your heartfelt message here...';
  var td=to?'Dear '+to+',':'';
  var fd=fr?'— '+fr+' ❤️':'— With Love ❤️';

  var th=oc?getFT(oc.id):null;
  var co=COLOR_THEMES.find(function(c){return c.id===curColor;});
  var bg=(th?th.bg:(co?co.g:'linear-gradient(135deg,#0984e3,#74b9ff)'));
  var accent=th?th.accent:'#ffd700';

  if(curTpl==='glass'){
    inner.innerHTML=
      '<div class="wc-glass-bg" style="background:'+bg+';position:absolute;inset:0;z-index:0;"></div>'+
      '<div class="wc-glass-frost"></div>'+
      '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:460px;padding:40px 28px;text-align:center;color:#fff;">'+
      '<div class="wc-corner wc-tl">✨</div><div class="wc-corner wc-tr">🌟</div>'+
      '<div class="wc-corner wc-bl">💫</div><div class="wc-corner wc-br">⭐</div>'+
      '<div class="wc-emoji">'+em+'</div>'+
      '<div class="wc-greeting" style="color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.5)">'+gr+'</div>'+
      (td?'<div class="wc-to" style="color:rgba(255,255,255,.85)">'+td+'</div>':'')+
      '<div class="wc-msg" style="color:rgba(255,255,255,.8)">'+md+'</div>'+
      '<div class="wc-divider">✦ ✦ ✦</div>'+
      '<div class="wc-from">'+fd+'</div>'+
      (th?'<div class="wc-fest-label">'+th.desc+'</div>':'')+
      '</div>';
    inner.style.cssText='background:transparent;font-family:'+curFont+';border-radius:24px;overflow:hidden;position:relative;';

  } else if(curTpl==='elegant'){
    inner.innerHTML=
      '<div class="wc-corner wc-tl">✨</div><div class="wc-corner wc-tr">🌟</div>'+
      '<div class="wc-corner wc-bl">💫</div><div class="wc-corner wc-br">⭐</div>'+
      '<div class="wc-emoji">'+em+'</div>'+
      '<div class="wc-greeting">'+gr+'</div>'+
      (td?'<div class="wc-to">'+td+'</div>':'')+
      '<div class="wc-msg">'+md+'</div>'+
      '<div class="wc-divider">✦</div>'+
      '<div class="wc-from">'+fd+'</div>'+
      (th?'<div class="wc-fest-label">'+th.desc+'</div>':'');
    inner.style.cssText='background:'+bg+';color:#fff;font-family:'+curFont+';text-align:center;padding:44px 28px;min-height:460px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;border:1px solid rgba(255,255,255,.15);border-radius:24px;box-shadow:inset 0 1px 0 rgba(255,255,255,.12);';

  } else if(curTpl==='festive'){
    inner.innerHTML=
      '<div class="wc-conf">🎊</div><div class="wc-conf">🎉</div><div class="wc-conf">✨</div>'+
      '<div class="wc-emoji" style="font-size:4rem">'+em+'</div>'+
      '<div class="wc-greeting">'+gr+'</div>'+
      (td?'<div class="wc-to">'+td+'</div>':'')+
      '<div class="wc-msg">'+md+'</div>'+
      '<div class="wc-from">'+fd.replace('❤️','🎉')+'</div>'+
      (th?'<div class="wc-fest-label">'+th.desc+'</div>':'');
    inner.style.cssText='background:'+bg+';color:#fff;font-family:'+curFont+';text-align:center;padding:44px 28px;min-height:460px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;border-radius:24px;overflow:hidden;box-shadow:inset 0 1px 0 rgba(255,255,255,.15);';

  } else if(curTpl==='minimal'){
    inner.innerHTML=
      '<div style="width:40px;height:3px;background:'+accent+';border-radius:2px;margin-bottom:1.5rem"></div>'+
      '<div class="wc-emoji" style="font-size:3rem">'+em+'</div>'+
      '<div class="wc-greeting" style="font-size:1.6rem;'+(th?'color:#fff;':'color:#1a1a2e;')+'">'+gr+'</div>'+
      (td?'<div class="wc-to" style="'+(th?'color:rgba(255,255,255,.8)':'color:#444')+'">'+td+'</div>':'')+
      '<div class="wc-msg" style="'+(th?'color:rgba(255,255,255,.7)':'color:#555')+'">'+md+'</div>'+
      '<div style="width:40px;height:3px;background:'+accent+';border-radius:2px;margin:1rem 0"></div>'+
      '<div class="wc-from" style="'+(th?'color:rgba(255,255,255,.55)':'color:#888')+'">'+(fr?'— '+fr:'— With Love')+'</div>';
    inner.style.cssText='background:'+(th?bg:'#fff')+';color:'+(th?'#fff':'#1a1a2e')+';font-family:'+curFont+';text-align:center;padding:44px 28px;min-height:460px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:24px;border:1px solid '+(th?'rgba(255,255,255,.15)':'#e8e0d0')+';';

  } else if(curTpl==='neon'){
    inner.innerHTML=
      '<div class="wc-neon-glow"></div>'+
      '<div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:460px;padding:44px 28px;text-align:center;color:#fff;">'+
      '<div class="wc-emoji" style="font-size:4rem;filter:drop-shadow(0 0 16px '+accent+')">'+em+'</div>'+
      '<div class="wc-greeting" style="color:#fff;text-shadow:0 0 20px '+accent+',0 0 40px '+accent+'80">'+gr+'</div>'+
      (td?'<div class="wc-to" style="color:rgba(255,255,255,.85)">'+td+'</div>':'')+
      '<div class="wc-msg" style="color:rgba(255,255,255,.75)">'+md+'</div>'+
      '<div style="width:80%;height:1px;background:linear-gradient(90deg,transparent,'+accent+',transparent);margin:1rem 0;box-shadow:0 0 8px '+accent+'"></div>'+
      '<div class="wc-from">'+fd+'</div>'+
      '</div>';
    inner.style.cssText='background:linear-gradient(135deg,#060818,#0e1535);font-family:'+curFont+';border-radius:24px;overflow:hidden;position:relative;border:1px solid '+accent+'40;box-shadow:0 0 30px '+accent+'20;';
  }
}

function dlCard(){
  if(typeof html2canvas==='undefined'){toast('⚠️ Library loading...');return;}
  var c=$('#wishCard'); if(!c) return;
  var b=$('#dlBtn');
  if(b){b.textContent='⏳ Rendering...';b.disabled=true;}
  html2canvas(c,{scale:2,backgroundColor:null,useCORS:true}).then(function(cv){
    var a=document.createElement('a');
    a.download='ATCF-Wish-Card.png'; a.href=cv.toDataURL('image/png'); a.click();
    if(b){b.textContent='✅ Downloaded!';setTimeout(function(){b.textContent='📥 Download Card';b.disabled=false;},2000);}
    toast('📥 Card downloaded!'); fireworks();
  }).catch(function(){
    if(b){b.textContent='📥 Download Card';b.disabled=false;}
    toast('❌ Download failed');
  });
}

function buildText(){
  var sv=($('#crOccasion')||{}).value||'', oc=findOcc(sv);
  var to=($('#crTo')||{}).value||'', mg=($('#crMsg')||{}).value||'', fr=($('#crFrom')||{}).value||'';
  var em=oc?oc.emoji:'🎉', nm=oc?oc.name:'Festival';
  var t=em+' Happy '+nm+'!\n\n';
  if(to) t+='Dear '+to+',\n\n';
  t+=mg+'\n\n';
  t+=(fr?'— '+fr:'— '+SITE_NAME);
  t+='\n\n✨ '+SITE_NAME;
  return t;
}

/* ================================================================
   FIREWORKS
   ================================================================ */
function fireworks(){
  var c=$('#fireworkCanvas'); if(!c) return;
  var ctx=c.getContext('2d');
  c.width=innerWidth; c.height=innerHeight;
  var ps=[], cols=['#ffd700','#ff6b6b','#6c5ce7','#00d8ff','#fd79a8','#55efc4'];
  for(var i=0;i<150;i++){
    var a=(Math.PI*2/150)*i, sp=Math.random()*7+2;
    ps.push({x:c.width/2,y:c.height/2,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*3+1,a:1,c:cols[~~(Math.random()*6)],d:Math.random()*.018+.006});
  }
  var f=0;
  (function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    var alive=false;
    ps.forEach(function(p){
      if(p.a<=0)return; alive=true;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.c; ctx.globalAlpha=p.a; ctx.fill();
      p.x+=p.vx; p.y+=p.vy; p.vy+=.07; p.a-=p.d;
    });
    ctx.globalAlpha=1;
    if(alive&&f<200){f++;requestAnimationFrame(draw);}
    else ctx.clearRect(0,0,c.width,c.height);
  })();
}

/* ================================================================
   GALLERY
   ================================================================ */
function initGallery(){ renderGalFilters(); renderGalGrid('all'); }
function renderGalFilters(){
  var w=$('#galFilters'); if(!w) return;
  var h='';
  CATEGORIES.forEach(function(c){
    h+='<button class="fbtn'+(c.id==='all'?' active':'')+'" data-f="'+c.id+'">'+c.label+'</button>';
  });
  w.innerHTML=h;
  w.addEventListener('click',function(e){
    var b=e.target.closest('.fbtn'); if(!b) return;
    w.querySelectorAll('.fbtn').forEach(function(x){x.classList.remove('active');});
    b.classList.add('active'); renderGalGrid(b.dataset.f);
  });
}
function renderGalGrid(f){
  var g=$('#galGrid'), ct=$('#galCount'); if(!g) return;
  var list=[], total=0, h='';
  ALL_OCCASIONS.forEach(function(o){if(f==='all'||o.cat===f)list.push(o);});
  list.forEach(function(o){
    var th=getFT(o.id);
    o.wishes.forEach(function(w,k){
      total++;
      var bg=th?th.bg:'';
      h+='<div class="gal-card" data-oid="'+o.id+'" data-wi="'+k+'" style="'+(bg?'--card-bg:'+bg+';':'')+(bg?'border-color:rgba(255,255,255,.1);':'')+'">'+
        '<div class="gc-top"><span class="gc-emoji">'+o.emoji+'</span><span class="gc-name">Happy '+o.name+'!</span></div>'+
        '<p class="gc-text">'+w+'</p>'+
        '<button class="gc-copy">📋 Copy</button>'+
        '</div>';
    });
  });
  g.innerHTML=h;
  if(ct) ct.textContent=total+' wishes available';
  g.querySelectorAll('.gal-card').forEach(function(c){
    c.addEventListener('click',function(){
      var oid=this.dataset.oid, wi=parseInt(this.dataset.wi), oc=findOcc(oid); if(!oc) return;
      var txt=oc.emoji+' Happy '+oc.name+'!\n\n'+oc.wishes[wi]+'\n\n✨ '+SITE_NAME;
      var el=this;
      navigator.clipboard.writeText(txt).then(function(){
        toast('📋 Wish copied!');
        var b=el.querySelector('.gc-copy');
        if(b){b.textContent='✅ Copied!';setTimeout(function(){b.textContent='📋 Copy';},1500);}
      }).catch(function(){toast('Copy failed');});
    });
  });
}
function initGalSearch(){
  var inp=$('#galSearchInput'); if(!inp) return;
  inp.addEventListener('input',function(){
    var q=inp.value.toLowerCase().trim();
    var cards=document.querySelectorAll('.gal-card'), cnt=0;
    cards.forEach(function(c){
      var show=q.length<2||c.textContent.toLowerCase().includes(q);
      c.style.display=show?'':'none'; if(show) cnt++;
    });
    var el=$('#galCount'); if(el) el.textContent=cnt+' wishes found';
  });
}

/* ================================================================
   CALENDAR PAGE (Full Year View)
   ================================================================ */
function initCalendarPage(){
  var wrap=$('#calGrid'); if(!wrap) return;
  var today=new Date();
  var currentYear=today.getFullYear();
  var monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var weekDays=['S','M','T','W','T','F','S'];
  var todayStr=getToday();
  var html='<div class="cal-year-grid">';

  // Show 12 months starting from current month
  for(var mi=0;mi<12;mi++){
    var d=new Date(today.getFullYear(), today.getMonth()+mi, 1);
    var year=d.getFullYear(), month=d.getMonth();
    var firstDay=d.getDay();
    var daysInMonth=new Date(year,month+1,0).getDate();
    var occasions=getOccasionsInRange(year, month);
    var dayMap={};
    occasions.forEach(function(o){ var day=parseInt(o.date.split('-')[2]); if(!dayMap[day])dayMap[day]=[]; dayMap[day].push(o); });

    html+='<div class="cal-month-card glass">';
    html+='<div class="cal-month-header">';
    html+='<span class="cal-month-name">'+monthNames[month]+' '+year+'</span>';
    html+='<span class="cal-month-count">'+occasions.length+' events</span>';
    html+='</div>';
    html+='<div class="cal-weekdays">';
    weekDays.forEach(function(w){html+='<div class="cal-wd">'+w+'</div>';});
    html+='</div><div class="cal-days">';
    for(var e=0;e<firstDay;e++) html+='<div class="cal-day cal-empty"></div>';
    for(var day=1;day<=daysInMonth;day++){
      var dstr=year+'-'+String(month+1).padStart(2,'0')+'-'+String(day).padStart(2,'0');
      var isT=dstr===todayStr;
      var occs=dayMap[day]||[];
      var cls='cal-day'+(isT?' today':'')+(occs.length?' has-event':'');
      html+='<div class="'+cls+'" data-date="'+dstr+'" data-ids="'+(occs.map(function(o){return o.id;}).join(','))+'">';
      html+='<span class="cal-day-num">'+day+'</span>';
      if(occs.length){
        html+='<div class="cal-fest-dots">';
        occs.slice(0,3).forEach(function(o){html+='<span class="cal-fest-dot" title="'+o.name+'">'+o.emoji+'</span>';});
        html+='</div>';
      }
      html+='</div>';
    }
    html+='</div></div>'; // cal-days, cal-month-card
  }
  html+='</div>'; // cal-year-grid

  // Upcoming events sidebar list
  html+='<div style="max-width:800px;margin:0 auto 80px;padding:0 5%;">';
  html+='<div class="glass-hi" style="overflow:hidden;">';
  html+='<div class="cal-events-title">📅 All Upcoming Festivals & Events</div>';
  html+='<div class="cal-event-list">';
  var upAll=getFilteredOccasions('all',false);
  upAll.forEach(function(o){
    if(o.date==='anyday') return;
    var th=getFT(o.id);
    var bd=getOccasionBadge(o.date);
    html+='<div class="cal-event-item" data-id="'+o.id+'" style="--ev-bg:'+(th?th.bg:'#1a1a2e')+';">';
    html+='<span class="cal-ev-icon">'+o.emoji+'</span>';
    html+='<div class="cal-ev-info"><div class="cal-ev-name">'+o.name+'</div>';
    html+='<div class="cal-ev-date">'+( new Date(o.date+'T00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'long',year:'numeric'}))+'</div></div>';
    html+='<div class="cal-ev-right">';
    if(bd.text) html+='<span class="cal-ev-badge '+bd.cls+'">'+bd.text+'</span>';
    html+='<div class="cal-ev-days">'+getDaysLabel(o.date)+'</div></div>';
    html+='</div>';
  });
  html+='</div></div></div>';

  wrap.innerHTML=html;
  reReveal();

  // Click events on calendar days
  wrap.querySelectorAll('.cal-day.has-event').forEach(function(cell){
    cell.addEventListener('click',function(){
      var ids=this.dataset.ids.split(',').filter(Boolean);
      if(ids.length===1){
        toast('✨ '+findOcc(ids[0]).name+' — click Create to make wish');
      } else {
        toast('🎉 '+ids.map(function(id){var o=findOcc(id);return o?o.emoji+' '+o.name:'';}).join(' & '));
      }
    });
  });
  // Click events on event list items — navigate to create
  wrap.querySelectorAll('.cal-event-item').forEach(function(item){
    item.addEventListener('click',function(){
      var id=this.dataset.id;
      window.location.href='index.html#create?occ='+id;
    });
  });
}

/* ================================================================
   SCROLL & REVEAL
   ================================================================ */
function initScroll(){
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]'); if(!a) return;
    e.preventDefault();
    var target=document.querySelector(a.getAttribute('href')); if(!target) return;
    var offset=($('#nav')||{offsetHeight:0}).offsetHeight||0;
    window.scrollTo({top:target.offsetTop-offset-20,behavior:'smooth'});
    var m=$('#mobMenu');
    if(m&&m.classList.contains('open')){
      m.classList.remove('open');
      ($('#hamBtn')||{}).classList&&$('#hamBtn').classList.remove('active');
      document.body.style.overflow='';
    }
  });
  // Handle ?occ= query param
  var params=new URLSearchParams(window.location.search);
  var occParam=params.get('occ');
  if(occParam&&findOcc(occParam)){
    setTimeout(function(){
      selectOccasion(occParam);
      var cr=$('#create'); if(cr) cr.scrollIntoView({behavior:'smooth'});
    },400);
  }
}

function initReveal(){ reReveal(); }
function reReveal(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target);}
    });
  },{threshold:.07});
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el){obs.observe(el);});
}

})();