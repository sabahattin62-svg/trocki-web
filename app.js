
const articles={
spinoza:{title:"SPINOZA — Özgürlük ve Zorunluluk",text:"Özgürlüğü doğanın dışında değil, onun zorunluluğunu kavramakta arayan bir okuma. Spinoza'da insan, doğanın dışında ayrı bir krallık değildir; zorunluluk düzeninin parçasıdır. Özgürlük, nedenleri ortadan kaldırmak değil, onları anlamaktır."},
nietzsche:{title:"NIETZSCHE — Değerleri Yeniden Düşünmek",text:"Ahlakın kökeni, güç ve insanın kendisini aşma çabası üzerine notlar. Nietzsche, hazır değerleri sorgulamayı ve insanın kendi değerlerini yaratma sorumluluğunu öne çıkarır."},
anarchism:{title:"ANARŞİZM — Özgürlük ve Dayanışma",text:"Anarşizm, yalnızca devletin reddi değil; hiyerarşinin, tahakkümün ve zorunlu itaatin sorgulanmasıdır. Özgürlüğün dayanışmayla birlikte düşünülmesi gerekir. — Troçki"},
history:{title:"AVCI-TOPLAYICIDAN DEVLETE",text:"İnsanlığın yüz binlerce yıllık avcı-toplayıcı geçmişinden yaklaşık on iki bin yıl önce tarıma geçişi; yerleşiklik, üretim fazlası, mülkiyet, hiyerarşi, devlet ve dinsel kurumların ortaya çıkışıyla birlikte büyük bir toplumsal dönüşüm yarattı. Bu makale, bu dönüşümü tek nedenli bir anlatıya indirgemeden ele alır."}
};
document.querySelectorAll("[data-article]").forEach(b=>b.addEventListener("click",()=>{
 const a=articles[b.dataset.article]; document.getElementById("modalArticle").innerHTML=`<div class="eyebrow">MAKALE</div><h2>${a.title}</h2><p>${a.text}</p><p><em>Troçki</em></p>`;document.getElementById("modal").classList.add("show");
}));
document.getElementById("closeModal").onclick=()=>document.getElementById("modal").classList.remove("show");
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("show")});

const translations={
tr:{home:"Ana Sayfa",about:"Hakkımda",articles:"Makaleler",gallery:"Galeri",contact:"İletişim",hello:"Merhaba, ben",tagline:"Düşünen, üreten, sorgulayan.",heroText:"Felsefe, bilim, tarih, teknoloji ve doğa arasında dolaşan; öğrendiklerini, düşündüklerini ve ürettiklerini paylaşan kişisel bir alan.",more:"Daha fazlası →",aboutTitle:"Sade bir yaşam,<br>derin düşünceler.",aboutText:"Ben Sabahattin. Takma adım Troçki. 1962 doğumluyum ve Çerkezköy'de yaşıyorum. Ziraat mühendisiyim; üniversite eğitimimin ardından felsefeyi hâlâ öğrenmeye, okumaya ve sorgulamaya devam ediyorum.",articleTitle:"Düşüncenin izinde.",visitors:"Ziyaretçi"},
en:{home:"Home",about:"About",articles:"Articles",gallery:"Gallery",contact:"Contact",hello:"Hello, I'm",tagline:"Thinking, creating, questioning.",heroText:"A personal space moving between philosophy, science, history, technology and nature—sharing what I learn, think and create.",more:"Learn more →",aboutTitle:"A simple life,<br>deep thoughts.",aboutText:"I am Sabahattin, known as Troçki. Born in 1962, I live in Çerkezköy. I am an agricultural engineer and continue to study, read and question philosophy.",articleTitle:"Following thought.",visitors:"Visitors"},
fr:{home:"Accueil",about:"À propos",articles:"Articles",gallery:"Galerie",contact:"Contact",hello:"Bonjour, je suis",tagline:"Penser, créer, questionner.",heroText:"Un espace personnel entre philosophie, science, histoire, technologie et nature, pour partager ce que j'apprends, pense et crée.",more:"En savoir plus →",aboutTitle:"Une vie simple,<br>des pensées profondes.",aboutText:"Je suis Sabahattin, connu sous le nom de Troçki. Né en 1962, je vis à Çerkezköy. Je suis ingénieur agronome et je continue à étudier la philosophie.",articleTitle:"Sur les traces de la pensée.",visitors:"Visiteurs"},
de:{home:"Startseite",about:"Über mich",articles:"Artikel",gallery:"Galerie",contact:"Kontakt",hello:"Hallo, ich bin",tagline:"Denken, gestalten, hinterfragen.",heroText:"Ein persönlicher Raum zwischen Philosophie, Wissenschaft, Geschichte, Technologie und Natur.",more:"Mehr erfahren →",aboutTitle:"Ein einfaches Leben,<br>tiefe Gedanken.",aboutText:"Ich bin Sabahattin, bekannt als Troçki. Geboren 1962, lebe ich in Çerkezköy. Ich bin Agraringenieur und beschäftige mich weiterhin mit Philosophie.",articleTitle:"Den Gedanken folgen.",visitors:"Besucher"}
};
function setLang(lang){const t=translations[lang];document.documentElement.lang=lang;document.querySelectorAll("[data-t]").forEach(el=>{const k=el.dataset.t;if(t[k])el.innerHTML=t[k]});document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));localStorage.setItem("trocki-lang",lang)}
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));setLang(localStorage.getItem("trocki-lang")||"tr");

const input=document.getElementById("photoInput"),grid=document.getElementById("galleryGrid");
input.onchange=()=>[...input.files].forEach(f=>{const u=URL.createObjectURL(f),d=document.createElement("div");d.className="gallery-item";d.innerHTML=`<img src="${u}" alt="">`;grid.appendChild(d)});
document.getElementById("clearBtn").onclick=()=>{grid.querySelectorAll(".gallery-item:not(.featured)").forEach(x=>x.remove())};

document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("sidebar")?.classList.toggle("open"));
(async()=>{try{const r=await fetch("https://api.counterapi.dev/v1/trocki22-site/visits/up");const d=await r.json();if(d?.count!==undefined)document.getElementById("visitor-count").textContent=Number(d.count).toLocaleString("tr-TR")}catch(e){document.getElementById("visitor-count").textContent="—"}})();
