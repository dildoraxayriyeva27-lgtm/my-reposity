const D={
en:{n_home:"Home",n_about:"About",n_learn:"Learning",n_cult:"Culture",n_quiz:"Quiz",n_fut:"Future",start:"Start Learning",slogan:"Learn the Language. Discover the Culture.",intro:"Learn Uzbek and discover the culture of Uzbekistan!",about_h:"About the Project",about_p:"Uzbek World is a bilingual digital platform that helps people abroad learn the Uzbek language and explore Uzbekistan's cultural heritage.",prob_h:"The problem",prob_p:"Quality Uzbek learning materials in English are hard to find, and language is rarely taught together with the culture behind it.",sol_h:"Our solution",sol_p:"Step-by-step lessons, short quizzes and cultural stories in one place, in English and Uzbek.",learn_h:"Learning Opportunities",learn_p:"Choose a level to see what it covers.",lvl_note:"Full lessons for each level are being prepared. The sample lesson on the right is available now.",sample_h:"Sample Lesson: Everyday Uzbek Words",more:"Learn More",less:"Show less",cult_h:"Uzbek Culture",cult_p:"Explore the rich heritage of Uzbekistan.",c1:"History of Uzbekistan",c1d:"Silk Road cities and ancient empires.",c2:"National Cuisine",c2d:"Plov, samsa, lagman and more.",c3:"Architecture",c3d:"Blue domes and tiled madrasas.",c4:"Crafts",c4d:"Suzani, ceramics and silk ikat.",q_h:"Language is more than words.",q_p:"It's a bridge between cultures. Every word carries the history, food and traditions of the people who speak it.",quiz_h:"Interactive Quiz",quiz_p:"Pick an answer, then check it.",check:"Check Answer",next:"Next question",fut_h:"Future Development",fut_p:"These features are planned and not available yet. Together, we can:",f1:"Add more lessons",f2:"Improve pronunciation",f3:"Grow our global community",plan:"Planned",
 L:[["Beginner","Alphabet and simple everyday words."],["Elementary","Daily expressions: greetings, numbers, shopping."],["Intermediate","Grammar: cases, verb tenses, sentence building."],["Advanced","Fluent conversation and reading."]],
 Q:"Question",of:"of",pick:"Please choose an answer first.",ok:"Correct!",no:"Not quite. The correct answer is highlighted.",done:"Quiz finished. Score:",again:"Restart"},
uz:{n_home:"Bosh sahifa",n_about:"Loyiha haqida",n_learn:"Ta'lim",n_cult:"Madaniyat",n_quiz:"Test",n_fut:"Kelajak",start:"O'rganishni boshlash",slogan:"Tilni o'rganing. Madaniyatni kashf eting.",intro:"O'zbek tilini o'rganing va O'zbekiston madaniyatini kashf eting!",about_h:"Loyiha haqida",about_p:"Uzbek World xorijdagi foydalanuvchilarga o'zbek tilini o'rganish va O'zbekistonning madaniy merosi bilan tanishish imkonini beruvchi ikki tilli raqamli platforma.",prob_h:"Muammo",prob_p:"Ingliz tilida sifatli o'zbek tili materiallarini topish qiyin, til esa kamdan-kam hollarda madaniyat bilan birga o'rgatiladi.",sol_h:"Yechim",sol_p:"Bosqichma-bosqich darslar, qisqa testlar va madaniy hikoyalar bir joyda, ingliz va o'zbek tillarida.",learn_h:"Ta'lim imkoniyatlari",learn_p:"Daraja mazmunini ko'rish uchun darajani tanlang.",lvl_note:"Har bir daraja uchun to'liq darslar tayyorlanmoqda. O'ngdagi namunaviy dars hozir mavjud.",sample_h:"Namunaviy dars: kundalik so'zlar",more:"Ko'proq",less:"Kamroq",cult_h:"O'zbek madaniyati",cult_p:"O'zbekistonning boy merosini kashf eting.",c1:"O'zbekiston tarixi",c1d:"Ipak yo'li shaharlari va qadimiy davlatlar.",c2:"Milliy taomlar",c2d:"Osh, somsa, lag'mon va boshqalar.",c3:"Me'morchilik",c3d:"Moviy gumbazlar va koshinli madrasalar.",c4:"Hunarmandchilik",c4d:"Suzani, kulolchilik va ipak ikat.",q_h:"Til so'zlardan ko'proq narsa.",q_p:"U madaniyatlar o'rtasidagi ko'prik. Har bir so'z o'z xalqining tarixi, taomi va an'analarini olib yuradi.",quiz_h:"Interaktiv test",quiz_p:"Javobni tanlang, so'ng tekshiring.",check:"Javobni tekshirish",next:"Keyingi savol",fut_h:"Kelajakdagi rivojlanish",fut_p:"Bu imkoniyatlar rejalashtirilgan, hozircha mavjud emas. Birgalikda biz:",f1:"Ko'proq darslar qo'shamiz",f2:"Talaffuzni yaxshilaymiz",f3:"Global jamoamizni kengaytiramiz",plan:"Rejada",
 L:[["Boshlang'ich","Alifbo va oddiy so'zlar."],["Elementar","Kundalik iboralar: salomlashish, sonlar, xarid."],["O'rta","Grammatika: kelishiklar, zamonlar, gap tuzish."],["Yuqori","Erkin muloqot va o'qish."]],
 Q:"Savol",of:"/",pick:"Avval javobni tanlang.",ok:"To'g'ri!",no:"Noto'g'ri. To'g'ri javob belgilandi.",done:"Test tugadi. Natija:",again:"Qayta boshlash"}};

const WT={
en:[["Salom","Hello"],["Rahmat","Thank you"],["Xayr","Goodbye"],["Ha","Yes"],["Yo'q","No"],["Iltimos","Please"],["Xayrli tong","Good morning"],["Qalaysiz?","How are you?"]],
uz:[["Salom","Salom (salomlashish)"],["Rahmat","Rahmat (minnatdorchilik)"],["Xayr","Xayr (xayrlashish)"],["Ha","Ha (tasdiq)"],["Yo'q","Yo'q (inkor)"],["Iltimos","Iltimos (so'rov)"],["Xayrli tong","Xayrli tong (ertalab)"],["Qalaysiz?","Qalaysiz? (hol so'rash)"]]};

const QZ={
en:[["What does “Rahmat” mean?",["Goodbye","Thank you","Good morning"],1],["What does “Salom” mean?",["Hello","Please","Yes"],0],["What does “Xayr” mean?",["Hello","No","Goodbye"],2],["What does “Iltimos” mean?",["Please","Thank you","Sorry"],0]],
uz:[["“Rahmat” nimani anglatadi?",["Xayr","Rahmat (Thank you)","Xayrli tong"],1],["“Salom” inglizchada nima?",["Hello","Please","Yes"],0],["“Xayr” nimani anglatadi?",["Salom","Yo'q","Xayrlashish (Goodbye)"],2],["“Iltimos” inglizchada nima?",["Please","Thank you","Sorry"],0]]};

let lang="en",all=false,qi=0,pick=-1,done=false,score=0;
const $=id=>document.getElementById(id);

function tr(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-k]").forEach(e=>{const v=D[lang][e.dataset.k];if(v)e.textContent=v});
  $("lang").textContent="🌐 "+lang.toUpperCase();
  $("more").textContent=D[lang][all?"less":"more"];
  renderL();renderW();renderQ();
}

function renderL(){
  const C=["#D9A441","#D9A441","#3a8fb0","#183C32"];
  $("lvls").innerHTML=D[lang].L.map((l,i)=>`<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;margin-bottom:10px;background:#fff;border:1px solid #e8e0cd;border-radius:14px"><span style="flex:none;width:12px;height:12px;margin-top:7px;border-radius:50%;background:${C[i]}"></span><div><strong style="color:var(--g)">${l[0]}</strong><div style="color:var(--mu);font-size:.92rem">${l[1]}</div></div></div>`).join("");
}

function renderW(){
  const n=all?8:3;
  $("words").innerHTML=WT[lang].slice(0,n).map(w=>`<tr><td>${w[0]}</td><td>${w[1]}</td></tr>`).join("");
}

function renderQ(){
  const Q=QZ[lang],t=D[lang];
  if(done){
    $("qn").textContent="";
    $("qt").textContent=`${t.done} ${score}/${Q.length}`;
    $("opts").innerHTML="";$("fb").textContent="";
    $("chk").style.display="none";$("nxt").style.display="";$("nxt").textContent=t.again;
    return;
  }
  const q=Q[qi];
  $("qn").textContent=`${t.Q} ${qi+1} ${t.of} ${Q.length}`;
  $("qt").textContent=q[0];
  $("opts").innerHTML=q[1].map((o,i)=>`<button class="opt${i==pick?" sel":""}" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  $("fb").textContent="";
  $("chk").style.display="";$("chk").disabled=false;
  $("nxt").style.display="none";$("nxt").textContent=t.next;
}

$("more").onclick=()=>{all=!all;renderW();$("more").textContent=D[lang][all?"less":"more"]};
$("lang").onclick=()=>{lang=lang=="en"?"uz":"en";pick=-1;tr()};

$("opts").onclick=e=>{
  const b=e.target.closest(".opt");
  if(!b||$("chk").disabled)return;
  pick=+b.dataset.i;
  document.querySelectorAll(".opt").forEach(o=>o.classList.toggle("sel",o===b));
};

$("chk").onclick=()=>{
  const t=D[lang];
  if(pick<0){$("fb").textContent=t.pick;$("fb").style.color="var(--bad)";return}
  const c=QZ[lang][qi][2],os=document.querySelectorAll(".opt");
  os[c].classList.add("right");
  if(pick==c){score++;$("fb").textContent=t.ok;$("fb").style.color="var(--ok)"}
  else{os[pick].classList.add("wrong");$("fb").textContent=t.no;$("fb").style.color="var(--bad)"}
  $("chk").disabled=true;$("nxt").style.display="";
};

$("nxt").onclick=()=>{
  if(done){done=false;qi=0;score=0}
  else if(qi<QZ[lang].length-1)qi++;
  else done=true;
  pick=-1;renderQ();
};

$("burger").onclick=()=>$("nav").classList.toggle("open");
$("nav").onclick=e=>{if(e.target.tagName=="A")$("nav").classList.remove("open")};

const secs=["home","about","learning","culture","quiz","future"],links=[...document.querySelectorAll("nav a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+e.target.id));
}),{rootMargin:"-45% 0px -50% 0px"});
secs.forEach(id=>io.observe($(id)));

tr();