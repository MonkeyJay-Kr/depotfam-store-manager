const PW_HASH="320ea17a411e8f8a9d7aa0de2fb131486794af565fa06a9e772dfd03957eab98";
const CATALOG=[
 {
  "sku": "DSO-1068864",
  "name": "25 FW 티타프레스 네일 팁 #1",
  "cat": "Nail Art & Stickers",
  "size": "",
  "cost": 3000,
  "stock": 205,
  "prices": {
   "SG": 3.81,
   "TW": 92.04,
   "TH": 113.25,
   "PH": 190.65,
   "MY": 12.3
  }
 },
 {
  "sku": "DSO-1063564",
  "name": "LED 젤 네일 램프 USB형 C타입 1구",
  "cat": "Nail Tools",
  "size": "",
  "cost": 2000,
  "stock": 74,
  "prices": {
   "SG": 2.54,
   "TW": 61.36,
   "TH": 75.5,
   "PH": 127.1,
   "MY": 8.2
  }
 },
 {
  "sku": "DSO-1047191",
  "name": "2WAY 속눈썹 빗",
  "cat": "Eye Tools & False Lashes",
  "size": "",
  "cost": 1000,
  "stock": 203,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-1047190",
  "name": "2WAY 스패츌러＆컨실러 브러시",
  "cat": "Makeup Brushes & Sponges",
  "size": "",
  "cost": 2000,
  "stock": 4194,
  "prices": {
   "SG": 2.54,
   "TW": 61.36,
   "TH": 75.5,
   "PH": 127.1,
   "MY": 8.2
  }
 },
 {
  "sku": "DSO-1067888",
  "name": "2단 적재 원형 미용 수납함",
  "cat": "Others",
  "size": "",
  "cost": 1000,
  "stock": 5,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-1052319",
  "name": "4칸 투명 네일 팔레트",
  "cat": "Nail & Pedicure Tools",
  "size": "",
  "cost": 1000,
  "stock": 0,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-1007503",
  "name": "PP 스틱 둥근 면봉 500개입",
  "cat": "Skincare Tools",
  "size": "500개입",
  "cost": 1000,
  "stock": 413,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-62023",
  "name": "고리형 당고 머리 스펀지",
  "cat": "Hair Accessories",
  "size": "",
  "cost": 1000,
  "stock": 181,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-1051901",
  "name": "2중 빗살 꼬리빗",
  "cat": "Hair Tools & Brushes",
  "size": "",
  "cost": 1000,
  "stock": 81,
  "prices": {
   "SG": 1.27,
   "TW": 30.68,
   "TH": 37.75,
   "PH": 63.55,
   "MY": 4.1
  }
 },
 {
  "sku": "DSO-1026930",
  "name": "그라데이션 가발 머리끈",
  "cat": "Wigs & Extensions",
  "size": "",
  "cost": 2000,
  "stock": 220,
  "prices": {
   "SG": 2.54,
   "TW": 61.36,
   "TH": 75.5,
   "PH": 127.1,
   "MY": 8.2
  }
 }
];
const MARKETS=[{c:'SG',n:'Singapore',cur:'SGD',site:'shopee.sg'},{c:'TW',n:'Taiwan',cur:'TWD',site:'shopee.tw'},{c:'TH',n:'Thailand',cur:'THB',site:'shopee.co.th'},{c:'PH',n:'Philippines',cur:'PHP',site:'shopee.ph'},{c:'MY',n:'Malaysia',cur:'MYR',site:'shopee.com.my'}];
const ORDERS=[['SAMPLE-2611170001','SG','2026-11-17','2WAY Spatula & Concealer Brush ×2','5.08 SGD','To ship'],['SAMPLE-2611160002','TW','2026-11-16','Hair Sponge Bun Maker ×1','30.68 TWD','Shipped'],['SAMPLE-2611150003','MY','2026-11-15','PP Cotton Swabs 500pcs ×3','12.30 MYR','Completed'],['SAMPLE-2611140004','PH','2026-11-14','2WAY Lash Comb ×1','63.55 PHP','Completed'],['SAMPLE-2611130005','TH','2026-11-13','Gradient Wig Hair Tie ×2','151.00 THB','Cancelled']];
const $=s=>document.querySelector(s);const cur=c=>MARKETS.find(m=>m.c===c).cur;
async function sha(t){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function show(){const u=sessionStorage.getItem('dfm_user');$('#login').classList.toggle('hidden',!!u);$('#app').classList.toggle('hidden',!u);if(u){$('#who').textContent=u;render()}}
$('#loginForm').onsubmit=async e=>{e.preventDefault();const u=$('#u').value.trim(),p=$('#p').value;if(u==='shopee_reviewer'&&await sha('depotfam:'+p)===PW_HASH){sessionStorage.setItem('dfm_user',u);show()}else $('#err').textContent='Invalid username or password.'};
$('#logout').onclick=()=>{sessionStorage.removeItem('dfm_user');location.hash='';show()};
function tab(t){document.querySelectorAll('.tab').forEach(s=>s.classList.toggle('hidden',s.id!==t));document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.dataset.tab===t))}
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{location.hash=a.dataset.tab});
window.onhashchange=()=>tab(location.hash.slice(1)||'dashboard');
const st=s=>s.stock<=0?'<span class="badge red">Sold out</span>':'<span class="badge grey">Draft – not yet listed</span>';
function prods(){const q=$('#q').value.toLowerCase(),m=$('#mk').value;$('#prodRows').innerHTML=CATALOG.filter(p=>!q||p.name.toLowerCase().includes(q)||p.sku.toLowerCase().includes(q)).map(p=>`<tr><td>${p.sku}</td><td>${p.name}</td><td>${p.cat}</td><td>${p.size}</td><td>${p.prices[m].toFixed(2)} ${cur(m)}</td><td>${p.stock}</td><td>${st(p)}</td></tr>`).join('')}
let LOG=JSON.parse(localStorage.getItem('dfm_log')||'[]');
function logs(){$('#logRows').innerHTML=LOG.length?LOG.slice().reverse().map(l=>`<tr><td>${l.t}</td><td>${l.sku}</td><td>${l.m}</td><td>${l.ch}</td><td><span class="badge warn">Draft (shop not authorized)</span></td></tr>`).join(''):'<tr><td colspan="5" class="muted">No updates yet.</td></tr>'}
function fillUpd(){const p=CATALOG.find(x=>x.sku===$('#uSku').value),m=$('#uMk').value;$('#uPrice').value=p.prices[m];$('#uStock').value=p.stock}
let done=false;
function render(){if(!done){done=true;const mo=MARKETS.map(m=>`<option value="${m.c}">${m.c} – ${m.cur}</option>`).join('');$('#mk').innerHTML=mo;$('#uMk').innerHTML=mo;$('#uSku').innerHTML=CATALOG.map(p=>`<option value="${p.sku}">${p.sku} · ${p.name}</option>`).join('');$('#q').oninput=prods;$('#mk').onchange=prods;$('#uSku').onchange=fillUpd;$('#uMk').onchange=fillUpd;
$('#upd').onsubmit=e=>{e.preventDefault();const p=CATALOG.find(x=>x.sku===$('#uSku').value),m=$('#uMk').value,np=+$('#uPrice').value,ns=+$('#uStock').value;LOG.push({t:new Date().toLocaleString(),sku:p.sku,m,ch:`price ${p.prices[m]}→${np} ${cur(m)}, stock ${p.stock}→${ns}`});p.prices[m]=np;p.stock=ns;localStorage.setItem('dfm_log',JSON.stringify(LOG));logs();prods();$('#updMsg').textContent='Saved as draft. Will sync to Shopee after shop authorization.'};
$('#authBtn').onclick=()=>{$('#authMsg').textContent='Shop authorization will open the Shopee seller authorization page (live Partner ID required after Go-Live approval).'}}
$('#kpis').innerHTML=[['Markets',MARKETS.length],['Catalog SKUs',CATALOG.length],['In stock',CATALOG.filter(p=>p.stock>0).length],['API status','Sandbox']].map(k=>`<div class="card"><span class="muted">${k[0]}</span><b>${k[1]}</b></div>`).join('');
$('#shopRows').innerHTML=MARKETS.map(m=>`<tr><td><b>${m.c}</b> ${m.n}</td><td>depotfam.kr (${m.c})</td><td>${m.cur}</td><td>${m.site}</td><td><span class="badge warn">Not connected</span></td><td>0 / ${CATALOG.length}</td></tr>`).join('');
$('#orderRows').innerHTML=ORDERS.map(o=>`<tr>${o.map((v,i)=>`<td>${i==5?`<span class="badge ${v=='Completed'?'ok-b':v=='Cancelled'?'red':'warn'}">${v}</span>`:v}</td>`).join('')}</tr>`).join('');
prods();fillUpd();logs();tab(location.hash.slice(1)||'dashboard')}
show();
