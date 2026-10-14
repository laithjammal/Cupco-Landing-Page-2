/* Cookie consent for Cupco. Google tags load with analytics storage denied
   (set in index.html's <head>); this grants it only after a visitor accepts. */
(function(){
  var KEY='cupco_cookie_consent';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function apply(v){
    if(typeof window.gtag!=='function')return;
    window.gtag('consent','update',{
      analytics_storage:v==='accepted'?'granted':'denied',
      ad_storage:v==='accepted'?'granted':'denied',
      ad_user_data:v==='accepted'?'granted':'denied',
      ad_personalization:v==='accepted'?'granted':'denied'
    });
  }

  var css=document.createElement('style');
  css.textContent='#cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#20394B;color:#fff;border-radius:18px;padding:20px 22px;box-shadow:0 14px 44px rgba(0,0,0,.3);font:400 .92rem/1.5 Inter,system-ui,sans-serif}'+
  '#cc p{margin:0 0 14px}#cc a{color:#F2A095;text-decoration:underline}'+
  '#cc .b{display:flex;gap:10px;flex-wrap:wrap}'+
  '#cc button{flex:1;min-width:120px;border:0;border-radius:99px;padding:12px 18px;font:600 .92rem Poppins,system-ui,sans-serif;cursor:pointer}'+
  '#cc .y{background:#F2A095;color:#3b2a28}#cc .n{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.55)}'+
  '@media(max-width:640px){#cc{bottom:76px}}';
  document.head.appendChild(css);

  function banner(){
    if(document.getElementById('cc'))return;
    var d=document.createElement('div');d.id='cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie consent');
    d.innerHTML='<p>We use cookies to understand how visitors use this site and to measure our advertising. You can accept or decline non-essential cookies. See our <a href="cookies.html">Cookie Policy</a> and <a href="privacy.html">Privacy Policy</a>.</p><div class="b"><button class="n" type="button" data-v="declined">Decline</button><button class="y" type="button" data-v="accepted">Accept</button></div>';
    d.addEventListener('click',function(e){
      var v=e.target.getAttribute&&e.target.getAttribute('data-v');
      if(!v)return;set(v);apply(v);d.remove();
    });
    document.body.appendChild(d);
  }

  var saved=get();
  if(saved)apply(saved);else banner();

  // "Cookie settings" links reopen the banner so a choice can be changed
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('[data-cookie-settings]');
    if(a){e.preventDefault();banner();}
  });
})();
