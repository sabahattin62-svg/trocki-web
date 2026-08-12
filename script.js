const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{document.body.classList.toggle('light');toggle.textContent=document.body.classList.contains('light')?'Koyu Mod ☾':'Açık Mod ☼';});
const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
