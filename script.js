// SHRARH STORE - عدّل رقم واتساب المتجر قبل النشر.
const WHATSAPP_NUMBER = "249964892634"; // ضع رقم عمل يديره ولي أمرك، مع مفتاح الدولة، أرقام فقط.
const CURRENCY = "ج.س";
const PRODUCTS = [
 {id:1,type:"topup",name:"100 جوهرة فري فاير + 10 هدية",desc:"تحصل على 100 جوهرة بالإضافة إلى 10 جواهر هدية.",price:10500,icon:"💎"},
 {id:2,type:"topup",name:"60 شدة ببجي موبايل",desc:"باقة شحن 60 شدة للعبة ببجي موبايل.",price:9900,icon:"🪙"}
];
let cart=[];
const money=n=>`${Number(n).toLocaleString("en-US")} ${CURRENCY}`;
function renderProducts(filter="all"){
 const items=PRODUCTS.filter(p=>filter==="all"||p.type===filter);
 document.getElementById("productGrid").innerHTML=items.map(p=>`
 <article class="product"><div class="thumb">${p.icon}</div><div class="product-body">
 <span class="tag">شحن ألعاب</span><h3>${escapeHTML(p.name)}</h3>
 <div class="desc">${escapeHTML(p.desc)}</div><div class="product-foot"><span class="price">${money(p.price)}</span>
 <button class="add" onclick="addToCart(${p.id})">أضف للسلة</button></div></div></article>`).join("");
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function addToCart(id){const p=PRODUCTS.find(x=>x.id===id);const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({...p,qty:1});updateCart();openCart();}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);
 const el=document.getElementById("cartItems");
 if(!cart.length){el.innerHTML='<div class="empty">السلة فارغة حالياً</div>';document.getElementById("total").textContent="الإجمالي: 0";return;}
 el.innerHTML=cart.map(x=>`<div class="cart-item"><div><strong>${escapeHTML(x.name)}</strong><small>${money(x.price)}</small></div><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button>${x.qty}<button onclick="changeQty(${x.id},1)">+</button></div></div>`).join("");
 const total=cart.reduce((a,x)=>a+x.price*x.qty,0);
 document.getElementById("total").textContent="الإجمالي: "+money(total);
}
function changeQty(id,n){const p=cart.find(x=>x.id===id);if(!p)return;p.qty+=n;if(p.qty<=0)cart=cart.filter(x=>x.id!==id);updateCart();}
function openCart(){document.getElementById("overlay").style.display="block";updateCart();}
function closeCart(){document.getElementById("overlay").style.display="none";}
function checkout(){
 if(!cart.length){alert("أضف منتجاً للسلة أولاً.");return;}
 if(!/^\d{8,15}$/.test(WHATSAPP_NUMBER)){alert("تواصل مع إدارة المتجر لإكمال الطلب. لم يتم إعداد رقم خدمة العملاء بعد.");return;}
 const name=document.getElementById("customerName").value.trim()||"غير محدد";
 const note=document.getElementById("customerNote").value.trim();
 const lines=cart.map(x=>`- ${x.name} × ${x.qty} | ${money(x.price)}`).join("\n");
 const total=money(cart.reduce((a,x)=>a+x.price*x.qty,0));
 const msg=`طلب جديد من SHRARH STORE\nالاسم: ${name}\nالمنتجات:\n${lines}\nالإجمالي: ${total}\nملاحظات: ${note||"لا توجد"}\nيرجى عدم إرسال كلمات مرور أو رموز تحقق.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)}));
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();updateCart();
