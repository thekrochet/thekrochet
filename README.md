# thekrochet

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reviews | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   PAGE SPECIFIC STYLES
   (Global Profile Styles are now in brand.css)
   ========================================= */
:root{
  --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff; --nav:#ffffff;
  --shadow:rgba(0,0,0,0.08); 
  --primary:#d4a373; --primary-dark:#b8895b; 
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
}

body.dark{
  --bg:#121212; --text:#f1f1f1; --card:#1e1e1e; --nav:#1a1a1a; 
  --shadow:rgba(0,0,0,0.6);
}

*{ margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color: transparent; }
html { overflow-y: scroll; scroll-behavior: smooth; }

body{
  font-family:'Poppins',sans-serif; background:var(--bg); color:var(--text);
  min-height:100vh; display:flex; flex-direction:column;
  transition: background 0.5s var(--ease), color 0.5s var(--ease);
  overflow-x: hidden;
}

/* NAVBAR (Synced - No Toggle Here) */
nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--nav); backdrop-filter: blur(10px);
  padding: 10px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; gap: 8px;
  transition: 0.3s;
}

.nav-line-1 { 
  position: relative; width: 100%; display: flex; 
  justify-content: center; align-items: center; padding: 0 15px; 
}

.nav-logo { 
  font-family: 'Playfair Display', serif; font-size: 1.8rem; 
  color: var(--text); text-decoration: none; font-weight: 700; 
}

/* Profile Button */
#userBtn {
  position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--primary); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: 0.3s;
}
#userBtn:hover { background: var(--primary); color: #fff; }

.nav-line-2 { display: flex; justify-content: center; gap: 20px; }
.nav-links a { 
  text-decoration: none; color: var(--text); font-weight: 500; 
  font-size: 0.9rem; opacity: 0.7; transition: 0.3s; 
  position: relative; padding-bottom: 2px; 
}
.nav-links a.active, .nav-links a:hover { opacity: 1; color: var(--primary); }
.nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px;
  bottom: 0; left: 0; background: var(--primary); transition: 0.3s;
}
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

/* REVIEW SECTION STYLES */
header{
  text-align:center; padding: 60px 20px 30px; 
  background: linear-gradient(135deg, #fefae0 0%, #faf7f2 100%);
  position: relative; overflow: hidden;
}
body.dark header{ background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); }
header::before {
  content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 20%);
  opacity: 0.05; animation: floatBG 15s infinite linear; pointer-events: none;
}
@keyframes floatBG { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
header h1{ font-family:'Playfair Display',serif; font-size: 2.6rem; margin-bottom: 10px; letter-spacing: -0.5px; position: relative; }
header p{ font-size: 1rem; opacity: 0.8; }

section{ padding: 40px 20px; max-width: 1100px; margin: auto; text-align: center; width: 100%; }

.add-review-btn{
  padding: 14px 28px; border-radius: 50px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; font-weight: 600; font-size: 1rem;
  border: none; cursor: pointer; margin-bottom: 40px;
  box-shadow: 0 10px 20px rgba(212, 163, 115, 0.3); transition: all 0.3s var(--ease);
}
.add-review-btn:hover{ transform: translateY(-4px) scale(1.05); }

.review-form{
  display: none; max-width: 500px; margin: 0 auto 50px;
  background: var(--card); padding: 30px; border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);
  animation: slideDown 0.5s var(--ease);
}
@keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

.review-form input, .review-form textarea, .review-form select{
  width: 100%; padding: 14px; margin-bottom: 14px;
  border-radius: 10px; border: 1px solid rgba(0,0,0,0.1);
  background: var(--bg); color: var(--text); outline: none;
}
.review-form button{
  width: 100%; padding: 14px; border-radius: 10px; border: none; 
  background: var(--primary-dark); color: white; font-weight: 600; cursor: pointer;
}

.grid{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.card{
  background: var(--card); padding: 25px; border-radius: 18px;
  box-shadow: 0 10px 30px var(--shadow); transition: all 0.4s var(--ease);
  border: 1px solid transparent; text-align: left;
}
.card:hover{ transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.stars{ font-size: 16px; margin-bottom: 10px; color: #f1c40f; }
.card p{ font-size: 0.9rem; line-height: 1.6; opacity: 0.9; font-style: italic; }
.card span{ display: block; margin-top: 15px; font-size: 0.85rem; font-weight: 600; color: var(--primary-dark); text-transform: uppercase; }

@media (max-width: 768px) { header h1 { font-size: 2.2rem; } .grid { gap: 15px; } }
</style>
</head>

<body>

<nav data-aos="fade-down">
  <div class="nav-line-1">
    <a href="index.html" class="nav-logo">TheKrochet</a>
    <div id="userBtn" onclick="handleProfileClick()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
  </div>
  <div class="nav-line-2 nav-links">
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="reviews.html" class="active">Reviews</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>

<header data-aos="zoom-in" data-aos-duration="1000">
  <h1>Customer Reviews</h1>
  <p data-aos="fade-up" data-aos-delay="200">Real words from happy customers 💛</p>
</header>

<section>
  <button class="add-review-btn" onclick="toggleForm()" data-aos="fade-up" data-aos-delay="300">➕ Add Your Review</button>

  <div class="review-form" id="reviewForm">
    <input id="name" placeholder="Your Name">
    <select id="rating"><option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option><option value="4">⭐⭐⭐⭐ (4 Stars)</option><option value="3">⭐⭐⭐ (3 Stars)</option></select>
    <textarea id="reviewText" rows="4" placeholder="Write your review here..."></textarea>
    <button onclick="addReview()">Submit Review</button>
  </div>

  <div class="grid" id="reviewsGrid"><div style="opacity:0.6;">Loading reviews...</div></div>
</section>

<footer>© 2025 TheKrochet</footer>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
AOS.init({ duration: 900, once: true, offset: 50 });

/* DARK MODE */
(function(){
  const saved = localStorage.getItem("theme");
  if(!saved || saved === "dark"){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
})();

/* FIREBASE INIT (Required before profile.js) */
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
const db = firebase.firestore();

/* REVIEWS LOGIC */
function toggleForm(){
  const f = document.getElementById("reviewForm");
  if(f.style.display==="block") f.style.display="none";
  else { f.style.display="block"; f.scrollIntoView({behavior:'smooth'}); }
}

function addReview(){
  const name=document.getElementById("name").value;
  const rating=Number(document.getElementById("rating").value);
  const text=document.getElementById("reviewText").value;
  if(!name || !text){ alert("Fill all fields!"); return; }
  db.collection("reviews").add({ name, rating, text, createdAt: firebase.firestore.FieldValue.serverTimestamp() }).then(() => {
    alert("Submitted!"); document.getElementById("name").value=""; document.getElementById("reviewText").value=""; toggleForm();
  });
}

db.collection("reviews").orderBy("createdAt","desc").limit(50).onSnapshot(snap=>{
  const grid = document.getElementById("reviewsGrid"); grid.innerHTML="";
  if(snap.empty){ grid.innerHTML = "<div style='opacity:0.6;grid-column:1/-1;'>No reviews yet.</div>"; return; }
  let delay = 0;
  snap.forEach(doc=>{
    const r=doc.data();
    grid.innerHTML+=`
      <div class="card" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="stars">${"★".repeat(r.rating) + "☆".repeat(5-r.rating)}</div>
        <p>"${r.text}"</p><span>— ${r.name}</span>
      </div>`;
    delay += 100;
  });
});
</script>

<script src="profile.js"></script>

</body>
</html>


Reviews.html

/* ================= RESPONSIVE MASTER ================= */

/* 📱 MOBILE (Under 768px) */
@media (max-width: 768px) {
  
  /* Global Fixes */
  body { overflow-x: hidden; }
  header h1 { font-size: 2rem !important; }
  
  /* Navbar */
  nav { flex-direction: column; padding: 10px; }
  .nav-links { gap: 10px; flex-wrap: wrap; justify-content: center; }
  
  /* Products Grid */
  .grid, #products { grid-template-columns: 1fr; padding: 0 10px; }
  
  /* Admin Fixes */
  .admin-card { padding: 15px; }

  /* ✅ FIXED REVIEWS LAYOUT */
  .list-item {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: flex-start;
    gap: 8px;
    padding-bottom: 16px; /* Adds breathing room */
    height: auto !important; /* Allows box to grow */
  }

  .review-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ✅ FIX THE DELETE BUTTON OVERLAP */
  .review-del {
    position: static !important; /* FORCE it to un-stick from the top */
    width: 100%;
    margin-top: 12px;
    display: block;
    padding: 10px;
  }
}

/* 💻 TABLET & DESKTOP (Over 768px) */
@media (min-width: 768px) {
  .grid, #products { grid-template-columns: repeat(2, 1fr); }
  nav { flex-direction: row; justify-content: space-between; }
  
  /* Reset Reviews to horizontal line */
  .list-item { flex-direction: row; align-items: center; }
  
  /* Put button back in top-right corner for big screens */
  .review-del { 
    position: absolute; 
    top: 16px; 
    right: 16px; 
    width: auto; 
    margin: 0; 
    padding: 6px 12px;
  }
}

@media (min-width: 1024px) {
  .grid, #products { grid-template-columns: repeat(3, 1fr); }
}


Responsive.css

/* =================================================================
   profile.js - Logic for Login, Sidebar, and Tracking
   ================================================================= */

const profileHTML = `
<div class="overlay" id="overlay" onclick="closeSidebar()"></div>
<div class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <div class="user-avatar" id="sidebarAvatar">?</div>
    <div class="user-info"><h4 id="sidebarName">Guest</h4><p id="sidebarEmail">Please login</p></div>
  </div>
  <div class="sidebar-body">
    <div class="sidebar-label">Saved Address</div>
    <div id="sidebarAddress" class="saved-address">No address saved.</div>
    <div class="sidebar-label">My Orders</div>
    <div id="orderList"><p style="text-align:center;opacity:0.5;margin-top:20px;">Login to see orders</p></div>
  </div>
  <div class="sidebar-footer"><button class="logout-btn" onclick="logout()">Logout</button></div>
</div>

<div id="authModal" class="modal">
  <div class="modal-box">
    <h3 id="authTitle">Welcome Back</h3>
    <input id="authEmail" type="email" placeholder="Email Address">
    <input id="authPass" type="password" placeholder="Password">
    <button style="width:100%;padding:14px;border:none;border-radius:12px;background:#d4a373;color:#fff;font-weight:600;margin-top:10px;cursor:pointer;" onclick="performLogin()">Login</button>
    
    <div id="authError" class="error-msg"></div>

    <p style="text-align:center;margin-top:20px;font-size:0.9rem;color:#d4a373;cursor:pointer;text-decoration:underline;" onclick="toggleAuthMode()" id="authSwitch">New here? Create Account</p>
    <button style="width:100%;padding:12px;border:none;border-radius:12px;margin-top:10px;background:transparent;color:#888;cursor:pointer;" onclick="closeModal('authModal')">Cancel</button>
  </div>
</div>

<div id="trackModal" class="modal">
  <div class="modal-box">
    <h3>Track Order <span id="trackId" style="font-size:0.7em;opacity:0.6;display:block;margin-top:5px;"></span></h3>
    <div class="timeline-container">
      <div class="timeline-step" id="step1"><div class="timeline-dot"></div><div class="timeline-content"><h4>Order Placed</h4><p>We have received your order.</p></div></div>
      <div class="timeline-step" id="step2"><div class="timeline-dot"></div><div class="timeline-content"><h4>Processing</h4><p>We are preparing your items.</p></div></div>
      <div class="timeline-step" id="step3"><div class="timeline-dot"></div><div class="timeline-content"><h4>Shipped</h4><p>Your package is on the way.</p></div></div>
      <div class="timeline-step" id="step4"><div class="timeline-dot"></div><div class="timeline-content"><h4>Delivered</h4><p>Enjoy your Krochet!</p></div></div>
    </div>
    <button style="width:100%;padding:12px;border:none;background:#eee;border-radius:10px;margin-top:25px;cursor:pointer;font-weight:600;" onclick="closeModal('trackModal')">Close</button>
  </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', profileHTML);

let currentUser = null;
let isRegistering = false;
const dbRef = firebase.firestore();
const authRef = firebase.auth();

authRef.onAuthStateChanged(user => {
  currentUser = user;
  if(user) {
    if(document.getElementById("sidebarName")) {
        document.getElementById("sidebarName").innerText = user.displayName || "Customer";
        document.getElementById("sidebarEmail").innerText = user.email;
        document.getElementById("sidebarAvatar").innerText = user.email[0].toUpperCase();
    }
    loadUserData(user.uid); 
    if(document.getElementById("authModal").classList.contains("active")) closeModal('authModal');
  } else {
    if(document.getElementById("sidebarName")) {
        document.getElementById("sidebarName").innerText = "Guest";
        document.getElementById("sidebarEmail").innerText = "Please login";
        document.getElementById("sidebarAvatar").innerText = "?";
        document.getElementById("sidebarAddress").innerText = "Login to see address";
        document.getElementById("orderList").innerHTML = `<p style="text-align:center;opacity:0.5;margin-top:20px;">Login to see orders</p>`;
    }
  }
});

function handleProfileClick(){ currentUser ? (document.getElementById("sidebar").classList.add("active"), document.getElementById("overlay").classList.add("active")) : openModal('authModal'); }
function closeSidebar(){ document.getElementById("sidebar").classList.remove("active"); document.getElementById("overlay").classList.remove("active"); }
function logout(){ authRef.signOut(); closeSidebar(); }
function openModal(id){ document.getElementById(id).classList.add("active"); if(id === 'authModal') document.getElementById("authError").style.display = "none"; }
function closeModal(id){ document.getElementById(id).classList.remove("active"); }

function loadUserData(uid){
  const list = document.getElementById("orderList");
  const addrBox = document.getElementById("sidebarAddress");
  dbRef.collection("orders").where("userId", "==", uid).onSnapshot(snap => {
    list.innerHTML = "";
    if(snap.empty){ list.innerHTML = `<p style="text-align:center;opacity:0.5;margin-top:20px;">No orders yet.</p>`; addrBox.innerText = "No address saved."; return; }
    
    let orders = [];
    snap.forEach(doc => orders.push({id:doc.id, ...doc.data()}));
    orders.sort((a,b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

    if(orders.length > 0 && orders[0].address) addrBox.innerText = orders[0].address;
    else addrBox.innerText = "No address saved.";

    orders.forEach((o, index) => {
      const orderNum = orders.length - index;
      const date = o.createdAt ? new Date(o.createdAt.seconds*1000).toLocaleDateString() : 'Just now';
      let statusColor = "#d4a373";
      if(o.status.includes("Pending")) statusColor = "#e67e22";
      if(o.status.includes("Delivered")) statusColor = "#27ae60";

      list.innerHTML += `
        <div class="order-item">
          <div class="order-top">
            <div class="order-id">Order #${orderNum}</div>
            <div class="order-price">₹${o.total}</div>
          </div>
          <div class="order-date">${date}</div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
             <span style="font-size:0.8rem; color:${statusColor}; font-weight:600;">${o.status}</span>
             <button class="track-btn" onclick="openTrackModal('${o.status}', '#${orderNum}')">Track</button>
          </div>
        </div>`;
    });
  });
}

function toggleAuthMode(){ 
  isRegistering = !isRegistering; 
  const t=document.getElementById("authTitle"), s=document.getElementById("authSwitch"), b=document.querySelector("#authModal button"); 
  document.getElementById("authError").style.display="none"; 
  if(isRegistering){ t.innerText="Create Account"; s.innerText="Have account? Login"; b.innerText="Register"; } 
  else { t.innerText="Welcome Back"; s.innerText="New here? Create Account"; b.innerText="Login"; } 
}

function performLogin(){
  const e=document.getElementById("authEmail").value;
  const p=document.getElementById("authPass").value;
  const errBox = document.getElementById("authError");
  errBox.style.display = "none";

  if(!e || !p) {
    errBox.innerText = "Please enter email and password.";
    errBox.style.display = "block";
    return;
  }

  const action = isRegistering ? authRef.createUserWithEmailAndPassword(e,p) : authRef.signInWithEmailAndPassword(e,p);
  
  action.then(()=>{
    closeModal('authModal');
  }).catch(err => {
    let msg = "An error occurred.";
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') msg = "Incorrect Email or Password.";
    else if (err.code === 'auth/email-already-in-use') msg = "This email is already registered.";
    else if (err.code === 'auth/weak-password') msg = "Password too weak (min 6 chars).";
    errBox.innerText = msg;
    errBox.style.display = "block";
  });
}

function openTrackModal(status, orderId){
  document.getElementById("trackId").innerText = orderId;
  const steps = ['step1', 'step2', 'step3', 'step4'];
  steps.forEach(s => document.getElementById(s).classList.remove('active'));
  if(status.includes("Paid") || status.includes("Placed")) document.getElementById("step1").classList.add("active");
  else if(status.includes("Processing")) { document.getElementById("step1").classList.add("active"); document.getElementById("step2").classList.add("active"); }
  else if(status.includes("Shipped")) { document.getElementById("step1").classList.add("active"); document.getElementById("step2").classList.add("active"); document.getElementById("step3").classList.add("active"); }
  else if(status.includes("Delivered")) steps.forEach(s => document.getElementById(s).classList.add("active"));
  else document.getElementById("step1").classList.add("active");
  openModal('trackModal');
}

Profile.js

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Products | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* PAGE SPECIFIC STYLES */
:root{ --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff; --nav:#ffffff; --shadow:rgba(0,0,0,0.08); --primary:#d4a373; --primary-dark:#b8895b; --success:#27ae60; --gray:#e0e0e0; --ease-spring: cubic-bezier(0.4, 0.0, 0.2, 1); }
body.dark{ --bg:#121212; --text:#f1f1f1; --card:#1e1e1e; --nav:#1a1a1a; --shadow:rgba(0,0,0,0.6); --gray:#333; }
*{margin:0;padding:0;box-sizing:border-box} html { scroll-behavior: smooth; }
body{ font-family:'Poppins',sans-serif; background:var(--bg); color:var(--text); min-height:100vh; display:flex; flex-direction:column; overflow-x: hidden; transition: background 0.5s var(--ease-spring); }

nav { position: sticky; top: 0; z-index: 100; background: var(--nav); backdrop-filter: blur(10px); padding: 10px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 8px; }
.nav-line-1 { position: relative; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 15px; }
.nav-logo { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--text); text-decoration: none; font-weight: 700; }
/* Profile Button triggers profile.js */
#userBtn { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; z-index: 101; }
#userBtn:hover { background: var(--primary); color: #fff; }
.nav-line-2 { display: flex; justify-content: center; gap: 20px; }
.nav-links a { text-decoration: none; color: var(--text); font-weight: 500; font-size: 0.9rem; opacity: 0.7; transition: 0.3s; position: relative; padding-bottom: 2px; }
.nav-links a.active, .nav-links a:hover { opacity: 1; color: var(--primary); }
.nav-links a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 0; background: var(--primary); transition: 0.3s; }
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

.search-box{ max-width:460px; margin:20px auto 0; padding:0 16px; }
.search-box input{ width:100%; padding:14px 24px; border-radius:50px; border:2px solid transparent; background:var(--card); color:var(--text); box-shadow: 0 4px 15px var(--shadow); outline: none; transition: 0.3s; }
.search-box input:focus{ border-color: var(--primary); }
.products-section{ max-width:1200px; margin:auto; padding:20px 20px 80px; }
#products{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:25px; }

/* 3D TILT CARD STYLES */
.card{ 
  background:var(--card); padding:15px; border-radius:24px; box-shadow:0 10px 20px var(--shadow); 
  display:flex; flex-direction:column; overflow: visible; 
  animation: fadeUp 0.6s ease forwards;
  transform-style: preserve-3d; transform: perspective(1000px); will-change: transform;
}
@keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }

.img-window { 
  width: 100%; height: 230px; border-radius: 20px; overflow: hidden; cursor: pointer; position: relative; margin-bottom: 15px; 
  transform: translateZ(20px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); transition: all 0.2s ease;
}
.img-slider { display: flex; height: 100%; width: 100%; transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1); }
.img-slider img { min-width: 100%; width: 100%; height: 100%; object-fit: cover; }

/* 3D Text Pop Effect */
.card h3, .card .price, .card p, .card button { transform: translateZ(10px); }
.card h3{ margin-top:5px; font-size:1.1rem; font-weight: 600; color: var(--text); }
.price{ color:var(--primary-dark); font-weight:700; font-size: 1.1rem; margin-bottom: 8px; }
.card p{ font-size: 0.85rem; opacity: 0.75; margin-bottom: 15px; line-height: 1.4; }
.card button{ margin-top:auto; padding:12px; border:none; border-radius:18px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color:#fff; font-weight:600; cursor:pointer; width: 100%; box-shadow: 0 4px 15px rgba(212, 163, 115, 0.4); }

.cart-float{ position:fixed; right:20px; bottom:30px; background:var(--primary); color:#fff; padding:16px 26px; border-radius:50px; cursor:pointer; z-index:999; font-weight: 600; box-shadow:0 10px 30px rgba(0,0,0,.3); animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.pay-apps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }
#imgModal .modal-box { max-width: 600px; width: 95%; background: transparent; box-shadow: none; padding: 0; overflow: hidden; }
.popup-slider { display: flex; width: 100%; transition: transform 0.5s ease; }
.popup-slider img { min-width: 100%; width: 100%; border-radius: 15px; object-fit: contain; max-height: 80vh; }
</style>
</head>

<body>

<nav data-aos="fade-down">
  <div class="nav-line-1">
    <a href="index.html" class="nav-logo">TheKrochet</a>
    <div id="userBtn" onclick="handleProfileClick()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
  </div>
  <div class="nav-line-2 nav-links">
    <a href="index.html">Home</a>
    <a href="products.html" class="active">Products</a>
    <a href="reviews.html">Reviews</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>

<div class="search-box"><input id="searchInput" placeholder="Search products..."></div>
<div class="products-section"><div id="products"></div></div>
<div id="cartFloat" class="cart-float" onclick="openCart()">🛒 Cart (<span id="cartCount">0</span>)</div>

<div id="cartModal" class="modal">
  <div class="modal-box">
    <h3>Your Cart</h3>
    <div id="cartItems"></div>
    <div style="text-align:right;font-weight:bold;margin-top:15px;color:var(--primary-dark)">Total ₹<span id="totalPrice">0</span></div>
    <div style="display:flex;gap:10px;margin-top:20px;">
      <button style="flex:1;padding:12px;border:none;border-radius:12px;background:#eee;color:#555;" onclick="closeModal('cartModal')">Close</button>
      <button style="flex:1;padding:12px;border:none;border-radius:12px;background:var(--primary);color:#fff;font-weight:600;" onclick="checkLoginForOrder()">Continue</button>
    </div>
  </div>
</div>

<div id="orderModal" class="modal">
  <div class="modal-box">
    <h3>Shipping Details</h3>
    <input id="custName" placeholder="Full Name">
    <input id="custInsta" placeholder="Instagram Username (@user)">
    <textarea id="custAddress" rows="3" placeholder="Full Delivery Address (Street, City, Pincode)"></textarea>
    <div style="display:flex;gap:10px;margin-top:20px;">
      <button style="flex:1;padding:12px;border-radius:12px;border:none;background:#eee;color:#555;" onclick="closeModal('orderModal')">Back</button>
      <button style="flex:1;padding:12px;border-radius:12px;border:none;background:var(--primary);color:#fff;font-weight:600;" onclick="openPaymentModal()">Proceed to Pay</button>
    </div>
  </div>
</div>

<div id="paymentAppModal" class="modal">
  <div class="modal-box">
    <h3>Select Payment App</h3>
    <p style="text-align:center;font-size:1rem;font-weight:600;margin-bottom:20px;">Pay ₹<span id="payAmountDisplay">0</span></p>
    <div class="pay-apps-grid">
      <div class="pay-app-btn" onclick="launchUPI('gpay')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" class="pay-app-img">
        <span class="pay-app-name">Google Pay</span>
      </div>
      <div class="pay-app-btn" onclick="launchUPI('paytm')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" class="pay-app-img">
        <span class="pay-app-name">Paytm</span>
      </div>
      <div class="pay-app-btn" onclick="launchUPI('phonepe')">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="PhonePe" class="pay-app-img">
        <span class="pay-app-name">PhonePe</span>
      </div>
      <div class="pay-app-btn" onclick="showQR()">
        <img src="https://cdn-icons-png.flaticon.com/512/3502/3502601.png" alt="QR Code" class="pay-app-img" style="filter:none;">
        <span class="pay-app-name">Scan QR</span>
      </div>
    </div>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:15px;cursor:pointer;font-weight:500;" onclick="closeModal('paymentAppModal')">Cancel</button>
  </div>
</div>

<div id="qrModal" class="modal">
  <div class="modal-box" style="text-align:center;">
    <h3>Scan to Pay</h3>
    <p style="margin-bottom:10px;">Scan with any UPI App</p>
    <div class="qr-container">
      <img id="dynamicQR" class="qr-img" src="" alt="Loading QR...">
    </div>
    <div style="font-weight:bold; font-size:1.2rem; color:var(--primary-dark); margin-bottom:20px;">₹<span id="qrAmount">0</span></div>
    <button class="confirm-btn" onclick="confirmAndFinishOrder()">Paid?</button>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:5px;cursor:pointer;" onclick="closeModal('qrModal')">Cancel</button>
  </div>
</div>

<div id="confirmCheckModal" class="modal">
  <div class="modal-box" style="text-align:center;">
    <h3 style="margin-bottom:10px;">Payment Pending</h3>
    <p>We've opened your payment app.<br>Please complete the transaction there.</p>
    <button class="confirm-btn" onclick="confirmAndFinishOrder()">Paid?</button>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:5px;cursor:pointer;font-weight:500;" onclick="closeModal('confirmCheckModal')">Cancel / Retry</button>
  </div>
</div>

<div id="orderSuccessModal" class="modal">
  <div class="modal-box" style="text-align:center; padding: 40px 30px;">
    <div class="success-icon">🎉</div>
    <h3 style="margin-bottom:10px; color: var(--success);">Order Confirmed!</h3>
    <p>Thank you for your purchase.<br>Your order has been placed successfully.</p>
    <button class="confirm-btn" onclick="finishOrderFlow()">Continue Shopping</button>
  </div>
</div>

<div id="imgModal" class="modal" onclick="closeImg(event)"><div class="modal-box" id="imgBox"></div></div>

<footer>© 2025 TheKrochet</footer>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
AOS.init({duration:900,once:true});
if(localStorage.getItem("theme")==="dark") document.body.classList.add("dark");

const myUPI = "6351294436@ptaxis"; 
const myName = "TheKrochet";

firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
const db = firebase.firestore();

let cart = JSON.parse(localStorage.getItem("krochetCart")) || [];
let currentTotal = 0;
let popupInterval = null;

/* 3D TILT LOGIC */
function initTilt() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    });
  });
}

/* PRODUCTS LOGIC */
const productsDiv = document.getElementById("products");
db.collection("products").orderBy("createdAt","desc").onSnapshot(snap=>{
  productsDiv.innerHTML="";
  snap.forEach((doc, idx)=>{
    const p=doc.data();
    let imgs = p.images || (p.image && p.image.includes(",") ? p.image.split(",").map(u=>u.trim()) : [p.image]);
    const sid="s"+Math.random().toString(36).slice(2);
    const imgHtml = imgs.map(url => `<img src="${url}">`).join('');
    
    productsDiv.innerHTML+=`<div class="card" style="animation-delay:${idx*50}ms"><div class="img-window" onclick='openImg(${JSON.stringify(imgs)})'><div id="${sid}" class="img-slider">${imgHtml}</div></div><h3>${p.name}</h3><div class="price">₹${p.price}</div><p>${p.description||""}</p><button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button></div>`;
    
    if(imgs.length > 1){ let i=0; setInterval(()=>{ i=(i+1)%imgs.length; const s=document.getElementById(sid); if(s) s.style.transform=`translateX(-${i * 100}%)`; }, 2500); }
  });
  
  setTimeout(initTilt, 500); // Attach 3D effect
});

document.getElementById("searchInput").addEventListener("input",(e)=>{ const v=e.target.value.toLowerCase(); document.querySelectorAll(".card").forEach(c=>{ c.style.display = c.innerText.toLowerCase().includes(v) ? "flex" : "none"; }); });

function addToCart(name,price){ cart.push({name,price}); localStorage.setItem("krochetCart",JSON.stringify(cart)); document.getElementById("cartFloat").classList.add("cart-bump"); setTimeout(()=>document.getElementById("cartFloat").classList.remove("cart-bump"), 300); updateCartUI(); }
function updateCartUI(){ const items=document.getElementById("cartItems"); items.innerHTML=""; currentTotal=0; cart.forEach((p,i)=>{ currentTotal+=p.price; items.innerHTML+=`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #eee"><span>${p.name}</span><span>₹${p.price} <b style="color:red;margin-left:10px;cursor:pointer" onclick="removeItem(${i})">✖</b></span></div>`; }); document.getElementById("cartCount").innerText=cart.length; document.getElementById("totalPrice").innerText=currentTotal; }
function removeItem(i){ cart.splice(i,1); localStorage.setItem("krochetCart",JSON.stringify(cart)); updateCartUI(); }

/* MODALS */
function openCart(){ openModal('cartModal'); updateCartUI(); }

function openImg(imgs){
  const imgBox = document.getElementById("imgBox");
  const slidesHtml = imgs.map(src => `<img src="${src}">`).join('');
  imgBox.innerHTML = `<div class="popup-slider" id="popupSlider">${slidesHtml}</div>`;
  openModal('imgModal');
  if(imgs.length > 1){
    let i = 0;
    if(popupInterval) clearInterval(popupInterval);
    popupInterval = setInterval(() => {
      i = (i + 1) % imgs.length;
      const slider = document.getElementById("popupSlider");
      if(slider) slider.style.transform = `translateX(-${i * 100}%)`;
    }, 1700);
  }
}
function closeImg(e){ 
  if(e.target.id==="imgModal") {
    closeModal('imgModal');
    if(popupInterval) clearInterval(popupInterval);
  }
}

/* ORDER LOGIC */
function checkLoginForOrder(){ 
  closeModal('cartModal'); 
  const user = firebase.auth().currentUser;
  if(user) {
      const sidebarAddr = document.getElementById("sidebarAddress")?.innerText;
      if(sidebarAddr && !sidebarAddr.includes("No address")) {
          document.getElementById("custAddress").value = sidebarAddr;
      }
      openModal('orderModal');
  } else {
      openModal('authModal');
  }
}

function openPaymentModal(){
  const name=document.getElementById("custName").value.trim();
  const insta=document.getElementById("custInsta").value.trim();
  const addr=document.getElementById("custAddress").value.trim();
  if(!name||!insta||!addr) return alert("Please fill Name, Instagram, and Address.");
  document.getElementById("payAmountDisplay").innerText = currentTotal;
  closeModal('orderModal');
  openModal('paymentAppModal');
}

function launchUPI(appType){
  let link = `upi://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`;
  if(appType==='paytm') link = `paytmmp://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`;
  if(appType==='phonepe') link = `phonepe://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`;
  window.location.href = link;
  closeModal('paymentAppModal');
  setTimeout(()=>{ openModal('confirmCheckModal'); }, 1000);
}

function showQR() {
  closeModal('paymentAppModal');
  const upiUrl = `upi://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`;
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;
  document.getElementById("dynamicQR").src = qrApi;
  document.getElementById("qrAmount").innerText = currentTotal;
  openModal('qrModal');
}

function confirmAndFinishOrder(){
  closeModal('confirmCheckModal');
  closeModal('qrModal'); 
  
  const name=document.getElementById("custName").value.trim();
  const insta=document.getElementById("custInsta").value.trim();
  const addr=document.getElementById("custAddress").value.trim();
  const user = firebase.auth().currentUser;

  db.collection("orders").add({
    customerName: name, instagram: insta, address: addr,
    items: cart, total: currentTotal, status: "Paid via UPI",
    userId: user ? user.uid : "guest", 
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    openModal('orderSuccessModal');
  }).catch((error) => {
    alert("Error: " + error.message);
  });
}

function finishOrderFlow() {
  cart = []; 
  localStorage.removeItem("krochetCart");
  closeModal('orderSuccessModal');
  window.location.href = 'index.html'; 
}

updateCartUI();
</script>

<script src="profile.js"></script>

</body>
</html>


Products.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Order Manager | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   1. THEME VARIABLES (Exact match to Admin.html)
   ========================================= */
:root{
  --primary:#d4a373;
  --primary-dark:#b8895b;
  --bg:#faf7f2;
  --text:#2f2f2f;
  --card-bg: #ffffff;
  --nav-bg: rgba(255, 255, 255, 0.95);
  --input-bg: #fdfbf8;
  --danger: #e74c3c;
  --success: #27ae60;
  --shadow: 0 10px 30px rgba(184, 137, 91, 0.15);
  --border: #eee;
}

body.dark-mode {
  --bg: #121212;
  --text: #e0e0e0;
  --card-bg: #1e1e1e;
  --nav-bg: rgba(30, 30, 30, 0.95);
  --input-bg: #2a2a2a;
  --shadow: 0 10px 30px rgba(0,0,0,0.5);
  --border: #333;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background 0.3s, color 0.3s;
}

/* =========================================
   2. NAVBAR (COPIED FROM ADMIN.HTML)
   ========================================= */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-top { display: flex; align-items: center; gap: 15px; }
.nav-top h2 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--text); margin: 0; }

.theme-toggle { background: none; border: none; font-size: 1.4rem; cursor: pointer; padding: 5px; border-radius: 50%; transition: 0.2s; }
.theme-toggle:hover { transform: scale(1.1); }

.nav-links { display: flex; gap: 30px; align-items: center; }
.nav-links a, .nav-links button {
  background: none; border: none; font-family: 'Poppins', sans-serif;
  font-size: 1rem; color: var(--text); opacity: 0.7; cursor: pointer;
  text-decoration: none; font-weight: 500; transition: 0.3s;
}
.nav-links .active, .nav-links a:hover, .nav-links button:hover { opacity: 1; color: var(--primary); font-weight: 600; }

@media (max-width: 768px) {
  nav { flex-direction: column; gap: 15px; }
  .nav-links { gap: 20px; }
  .theme-toggle { position: absolute; top: 20px; right: 5%; }
}

/* =========================================
   3. ORDERS GRID LAYOUT
   ========================================= */
.container { max-width: 1200px; margin: 0 auto; padding: 20px; width: 100%; flex: 1; }
.page-header { text-align: center; margin: 20px 0 40px; }
.page-header h4 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: var(--primary-dark); }

.orders-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 25px;
}

/* ORDER CARD */
.order-card {
  background: var(--card-bg); border-radius: 18px; overflow: hidden;
  box-shadow: var(--shadow); border: 1px solid var(--border);
  display: flex; flex-direction: column;
  animation: fadeUp 0.5s ease forwards;
}
@keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }

.card-header {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark)); 
  color: #fff; padding: 12px 20px;
  display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600;
}

.card-body { padding: 20px; flex: 1; }

.customer-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; }
.cust-name { font-weight: 700; font-size: 1.1rem; color: var(--text); }
.cust-insta { font-size: 0.85rem; opacity: 0.7; color: var(--primary); font-weight: 500; }
.cust-price { font-weight: 700; color: var(--primary); font-size: 1.2rem; }

/* ADDRESS BOX */
.address-box {
  background: var(--input-bg); color: var(--text); 
  border: 1px dashed var(--primary);
  padding: 12px; border-radius: 8px;
  font-size: 0.9rem; line-height: 1.4; margin-bottom: 15px;
}
.address-label { font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--primary); display: block; margin-bottom: 4px; }

/* ITEMS LIST */
.items-list { border-top: 1px solid var(--border); padding-top: 10px; margin-bottom: 15px; }
.item-row { display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 5px; color: var(--text); opacity: 0.9; }
.item-qty { background: var(--input-bg); padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 600; border: 1px solid var(--border); }

/* STATUS CONTROLS */
.card-footer { padding: 15px 20px; background: rgba(0,0,0,0.02); border-top: 1px solid var(--border); }
.status-label { font-size: 0.75rem; font-weight: 700; color: var(--text); opacity: 0.6; margin-bottom: 8px; display: block; letter-spacing: 1px; }

.status-select {
  width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--primary);
  background: var(--card-bg); color: var(--text); font-family: 'Poppins', sans-serif; font-weight: 500;
  cursor: pointer; outline: none; margin-bottom: 15px;
}

.delete-btn {
  width: 100%; padding: 12px; border: none; border-radius: 10px;
  background: rgba(231, 76, 60, 0.1); color: var(--danger); font-weight: 600; cursor: pointer; transition: 0.2s;
}
.delete-btn:hover { background: var(--danger); color: #fff; }

</style>
</head>

<body>

<nav>
  <div class="nav-top">
    <h2>TheKrochet</h2>
    <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
  </div>
  
  <div class="nav-links">
    <a href="admin.html">Products</a>
    <a href="admin-reviews.html">Reviews</a>
    <a href="orders.html" class="active">Orders</a>
    <button onclick="logout()">Logout</button>
  </div>
</nav>

<div class="container">
  <div class="page-header">
    <h4>Orders Dashboard</h4>
  </div>

  <div id="ordersList" class="orders-grid">
    <div style="text-align:center; width:100%; grid-column:1/-1; padding:40px; color:#999;">Loading orders...</div>
  </div>
</div>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>

<script>
// 1. FIREBASE CONFIG
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
const auth=firebase.auth(); const db=firebase.firestore();

// 2. THEME LOGIC (Matches admin.html)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeBtn").innerText = isDark ? "☀️" : "🌙";
}
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
  document.getElementById("themeBtn").innerText = "☀️";
}

// 3. AUTH CHECK
auth.onAuthStateChanged(u=>{ if(!u) location.href="login.html"; });
function logout(){ auth.signOut().then(()=>location.href="login.html"); }

// 4. FETCH ORDERS
db.collection("orders").orderBy("createdAt", "desc").onSnapshot(snap => {
  const list = document.getElementById("ordersList"); 
  list.innerHTML = "";
  
  if (snap.empty) { 
    list.innerHTML = "<div style='text-align:center; width:100%; grid-column:1/-1; padding:40px; color:#999'>No orders found.</div>"; 
    return; 
  }

  // Calculate Order Number Logic
  const totalOrders = snap.size; 
  let index = 0;

  snap.forEach(doc => {
    const o = doc.data();
    const id = doc.id;
    const orderNum = totalOrders - index; 
    index++;
    
    // Date Format
    const date = o.createdAt ? new Date(o.createdAt.seconds*1000).toLocaleString() : 'N/A';

    // Address
    const address = o.address || "No address provided";

    // Items
    let itemsHtml = "";
    if(o.items) {
      o.items.forEach(i => {
        itemsHtml += `<div class="item-row"><span>${i.name}</span><span class="item-qty">₹${i.price}</span></div>`;
      });
    }

    // ✅ TRACKING STATUSES (Exact match to Products.html logic)
    // 1. Order Placed (covers 'Paid via UPI')
    // 2. Processing
    // 3. Shipped
    // 4. Delivered
    const statuses = ["Order Placed", "Processing", "Shipped", "Delivered"];
    
    // Handle 'Paid via UPI' legacy status by defaulting to 'Order Placed'
    let currentStatus = o.status;
    if(currentStatus === "Paid via UPI" || currentStatus === "Pending Payment") currentStatus = "Order Placed";

    let optionsHtml = "";
    statuses.forEach(s => {
      const selected = currentStatus === s ? "selected" : "";
      optionsHtml += `<option value="${s}" ${selected}>${s}</option>`;
    });

    list.innerHTML += `
      <div class="order-card">
        <div class="card-header">
          <span>Order #${orderNum}</span>
          <span style="opacity:0.9; font-size:0.8rem; font-weight:400;">${date.split(',')[0]}</span>
        </div>
        
        <div class="card-body">
          <div class="customer-row">
            <div>
              <div class="cust-name">${o.customerName || 'Guest'}</div>
              <div class="cust-insta">${o.instagram || 'No Insta'}</div>
            </div>
            <div class="cust-price">₹${o.total}</div>
          </div>

          <div class="address-box">
            <span class="address-label">Delivery Address:</span>
            ${address}
          </div>

          <div class="items-list">
            ${itemsHtml}
          </div>
        </div>

        <div class="card-footer">
          <span class="status-label">TRACKING STATUS</span>
          <select class="status-select" onchange="updateStatus('${id}', this.value)">
            ${optionsHtml}
          </select>
          <button class="delete-btn" onclick="deleteOrder('${id}')">Delete Order</button>
        </div>
      </div>
    `;
  });
});

// 5. UPDATE STATUS
function updateStatus(id, newStatus) {
  db.collection("orders").doc(id).update({
    status: newStatus
  });
}

// 6. DELETE ORDER
function deleteOrder(id) {
  if(confirm("Permanently delete this order?")) {
    db.collection("orders").doc(id).delete();
  }
}
</script>

</body>
</html>


Orders.html

/* 1. FIREBASE CONFIGURATION (Shared across all pages) */
const firebaseConfig = {
  apiKey: "AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain: "thekrochet-b3ca2.firebaseapp.com",
  projectId: "thekrochet-b3ca2",
  storageBucket: "thekrochet-b3ca2.firebasestorage.app",
  messagingSenderId: "439894404930",
  appId: "1:439894404930:web:f9cbdfd4751506af2da2db"
};

// Initialize Firebase only if the library is loaded
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

/* 2. DARK MODE LOGIC */
function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}
applyTheme(); // Run immediately

function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

/* 3. AOS ANIMATION INIT */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 900, once: true });
    }
});

Main.js

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Login | TheKrochet</title>

<!-- FONTS -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- BRAND MASTER -->
<link rel="stylesheet" href="brand.css">

<style>
:root{
  --primary:#d4a373;
  --primary-dark:#b8895b;
  --bg:#faf7f2;
  --card:#ffffff;
  --text:#2f2f2f;
  --shadow:rgba(0,0,0,.12);
}

*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family:'Poppins',sans-serif;
  background:linear-gradient(135deg,#f8f5f0,#efe7dc);
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--text);
}

/* ===== LOGIN CARD ===== */
.login-card{
  background:var(--card);
  width:100%;
  max-width:420px;
  padding:36px 30px 38px;
  border-radius:28px;
  box-shadow:0 20px 40px var(--shadow);
  text-align:center;
  animation:cardIn .5s ease forwards;
}

@keyframes cardIn{
  from{opacity:0;transform:translateY(18px)}
  to{opacity:1;transform:translateY(0)}
}

.login-card h2{
  font-family:'Playfair Display',serif;
  font-size:26px;
  margin-bottom:6px;
}

.login-card p{
  font-size:14px;
  color:#777;
  margin-bottom:24px;
}

/* ===== INPUTS ===== */
input{
  width:100%;
  padding:14px 16px;
  margin-bottom:14px;
  border-radius:14px;
  border:1px solid #e0d6c8;
  font-size:14px;
  outline:none;
  transition:.25s ease;
}

input:focus{
  border-color:var(--primary);
  box-shadow:0 0 0 3px rgba(212,163,115,.25);
}

/* ===== BUTTON ===== */
button{
  width:100%;
  padding:14px;
  border-radius:16px;
  border:none;
  background:linear-gradient(135deg,var(--primary),var(--primary-dark));
  color:#fff;
  font-weight:600;
  font-size:15px;
  cursor:pointer;
  transition:.3s ease;
}

button:hover{
  transform:translateY(-2px);
  box-shadow:0 10px 22px rgba(0,0,0,.18);
}

/* ===== FOOT NOTE ===== */
.note{
  margin-top:16px;
  font-size:12px;
  color:#999;
}

/* ===== MOBILE ===== */
@media(max-width:420px){
  .login-card{
    padding:30px 22px 32px;
  }
}
</style>
</head>

<body>

<div class="login-card">
  <h2>TheKrochet</h2>
  <p>Admin Panel Login</p>

  <input id="email" type="email" placeholder="Admin Email">
  <input id="password" type="password" placeholder="Password">

  <button onclick="login()">Login</button>

  <div class="note">Authorized access only</div>
</div>

<!-- FIREBASE -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>

<script>
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});

function login(){
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>location.href="admin.html")
    .catch(err=>alert(err.message));
}
</script>

</body>
</html>

Login.html

/* ================= 1. VARIABLES & RESET ================= */
:root {
  --bg: #faf7f2;
  --text: #2f2f2f;
  --card: #ffffff;
  --nav: #ffffff;
  --shadow: rgba(0, 0, 0, 0.08);
  --primary: #d4a373;
  --primary-dark: #b8895b;
}

body.dark {
  --bg: #121212;
  --text: #f1f1f1;
  --card: #1e1e1e;
  --nav: #1a1a1a;
  --shadow: rgba(0, 0, 0, 0.6);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ================= 2. NAVBAR ================= */
nav {
  background: var(--nav);
  box-shadow: 0 6px 18px var(--shadow);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.nav-top { text-align: center; display: flex; justify-content: center; gap: 15px; align-items: center; }
.nav-top h2 { font-family: 'Playfair Display', serif; font-size: 22px; }

.nav-links { display: flex; justify-content: center; gap: 18px; flex-wrap: wrap; }
.nav-links a { text-decoration: none; color: var(--text); font-weight: 500; transition: color 0.3s; }
.nav-links a.active, .nav-links a:hover { color: var(--primary); }

/* Theme Toggle Button */
.theme-btn {
    background: none; border: 1px solid var(--primary); 
    border-radius: 50%; width: 30px; height: 30px; cursor: pointer; color: var(--text);
}

/* ================= 3. SHARED COMPONENTS ================= */
/* Standard Card */
.card {
  background: var(--card);
  padding: 26px;
  border-radius: 22px;
  box-shadow: 0 10px 25px var(--shadow);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Gradients Buttons */
.btn-primary {
  padding: 12px 24px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-primary:active { transform: scale(0.97); }

/* Common Header (Hero) Section */
.page-header {
  text-align: center;
  padding: 80px 20px 60px;
  background: linear-gradient(135deg, #fefae0, #faedcd);
  transition: background 0.3s;
}
body.dark .page-header { background: linear-gradient(135deg, #1f1f1f, #2a2a2a); }

.page-header h1 { font-family: 'Playfair Display', serif; font-size: 2.8rem; margin-bottom: 10px; }
.page-header p { max-width: 600px; margin: auto; font-size: 15px; color: #666; }
body.dark .page-header p { color: #aaa; }

/* ================= 4. FOOTER ================= */
footer {
  background: #1f1f1f;
  color: #ddd;
  text-align: center;
  padding: 22px;
  margin-top: auto;
}

/* ================= 5. ANIMATIONS ================= */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}


Layout.css

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TheKrochet | Home</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   GLOBAL STYLES
   ========================================= */
:root{
  --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff; --nav:#ffffff;
  --shadow:rgba(0,0,0,0.08); 
  --primary:#d4a373; --primary-dark:#b8895b; 
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
}

body.dark{
  --bg:#121212; --text:#f1f1f1; --card:#1e1e1e; --nav:#1a1a1a; 
  --shadow:rgba(0,0,0,0.6);
}

*{ margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color: transparent; }
html { overflow-y: scroll; scroll-behavior: smooth; }

body{
  font-family:'Poppins',sans-serif; background:var(--bg); color:var(--text);
  min-height:100vh; display:flex; flex-direction:column;
  transition: background 0.5s var(--ease), color 0.5s var(--ease);
  overflow-x: hidden;
}

/* NAVBAR */
nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--nav); backdrop-filter: blur(10px);
  padding: 10px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; gap: 8px;
  transition: 0.3s;
}

.nav-line-1 { 
  position: relative; width: 100%; display: flex; 
  justify-content: center; align-items: center; padding: 0 15px; 
}

.logo-group { display: flex; align-items: center; gap: 10px; }

.nav-logo { 
  font-family: 'Playfair Display', serif; font-size: 1.8rem; 
  color: var(--text); text-decoration: none; font-weight: 700; 
}

.theme-toggle{
  display:inline-flex; align-items:center; justify-content:center;
  width:32px; height:32px; border-radius:50%;
  background:var(--card); box-shadow:0 2px 8px var(--shadow); cursor:pointer;
  font-size:14px; transition: 0.3s;
}
.theme-toggle:hover{ transform: rotate(45deg); background: var(--bg); }

#userBtn {
  position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--primary); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: 0.3s;
}
#userBtn:hover { background: var(--primary); color: #fff; }

.nav-line-2 { display: flex; justify-content: center; gap: 20px; }
.nav-links a { 
  text-decoration: none; color: var(--text); font-weight: 500; 
  font-size: 0.9rem; opacity: 0.7; transition: 0.3s; 
  position: relative; padding-bottom: 2px; 
}
.nav-links a.active, .nav-links a:hover { opacity: 1; color: var(--primary); }
.nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px;
  bottom: 0; left: 0; background: var(--primary); transition: 0.3s;
}
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

/* =========================================
   ✨ HERO SECTION
   ========================================= */
header {
  position: relative; text-align: center; padding: 80px 20px 60px;
  overflow: hidden; min-height: 450px;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  background: linear-gradient(-45deg, #fdfbf7, #e6b8a2, #d4a373, #fdfbf7);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  will-change: background-position; /* Optimization for smoothness */
}
body.dark header {
  background: linear-gradient(-45deg, #121212, #3e2723, #b8895b, #1a1a1a);
  background-size: 400% 400%;
}
@keyframes gradientBG {
  0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }
}

.hero-content {
  position: relative; 
  z-index: 2;
  padding: 20px;
  max-width: 800px; 
  width: 100%;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
  backdrop-filter: none !important;
}

header h3 {
  font-family: 'Playfair Display', serif; font-size: 3rem; margin-bottom: 15px;
  letter-spacing: -0.5px; color: var(--text); line-height: 1.2;
  text-shadow: 0 4px 20px rgba(255,255,255,0.4); 
}
body.dark header h3 { text-shadow: 0 4px 20px rgba(0,0,0,0.4); }
header p { font-size: 1.1rem; opacity: 0.9; font-weight: 500; color: var(--text); }


/* =========================================
   📦 SECTIONS
   ========================================= */
section { padding: 40px 20px; max-width: 1200px; margin: auto; text-align: center; width: 100%; }
section h2 { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--primary-dark); margin-bottom: 20px; }
body.dark section h2 { color: var(--primary); }

.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }

/* WELCOME CARDS */
.welcome-card { 
  background: var(--card); padding: 30px; border-radius: 20px; 
  box-shadow: 0 10px 30px var(--shadow); cursor: pointer; 
  border: 1px solid transparent; 
  transform: translate3d(0,0,0); backface-visibility: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
}
.welcome-card:hover { 
  transform: translateY(-10px) scale(1.02); 
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: var(--primary); 
}
.welcome-card h3 { font-size: 1.2rem; margin-bottom: 8px; }
.welcome-card p { font-size: 0.9rem; opacity: 0.7; }

/* SEARCH BOX */
.search-box { max-width: 500px; margin: 0 auto 30px; position: relative; }
.search-box input { 
  width: 100%; padding: 14px 24px; border-radius: 50px; 
  border: 2px solid var(--shadow); background: var(--card); color: var(--text); 
  box-shadow: 0 4px 15px var(--shadow); outline: none; transition: 0.3s; 
}
.search-box input:focus { border-color: var(--primary); transform: scale(1.02); }

/* ✨ PRODUCT CARDS (Optimized) */
.product-card { 
  background: var(--card); padding: 15px; border-radius: 24px; 
  box-shadow: 0 10px 20px var(--shadow); display: flex; flex-direction: column; 
  
  /* GPU Acceleration */
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  will-change: transform;
  
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.product-card:hover {
  transform: translateY(-8px); 
  box-shadow: 0 20px 50px rgba(0,0,0,0.12);
}

.img-window { 
  width: 100%; height: 230px; border-radius: 20px; overflow: hidden; 
  cursor: pointer; margin-bottom: 15px; 
  transform: translateZ(0); /* Fix flickering */
}

.img-slider { display: flex; height: 100%; width: 100%; transition: transform 0.8s ease; }
.img-slider img { 
  min-width: 100%; width: 100%; height: 100%; object-fit: cover; 
  transition: transform 0.5s ease;
}
.product-card:hover .img-slider img { transform: scale(1.08); }

.product-card h3 { margin-top: 5px; font-size: 1.1rem; font-weight: 600; }
.price { color: var(--primary-dark); font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; }

.product-card button { 
  margin-top: auto; padding: 12px; border: none; border-radius: 18px; 
  background: linear-gradient(135deg, var(--primary), var(--primary-dark)); 
  color: #fff; font-weight: 600; cursor: pointer; width: 100%; 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.product-card button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(212, 163, 115, 0.4);
}
.product-card button:active { transform: scale(0.95); }

/* Cart Float */
.cart-float { 
  position: fixed; right: 20px; bottom: 30px; 
  background: var(--primary); color: #fff; padding: 16px 26px; 
  border-radius: 50px; cursor: pointer; z-index: 999; font-weight: 600; 
  box-shadow: 0 10px 30px rgba(0,0,0,.3); animation: floaty 4s ease-in-out infinite; 
  transition: transform 0.3s;
}
.cart-float:hover { transform: scale(1.1); }
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.cart-bump { transform: scale(1.3) !important; transition: 0.2s; }

/* Modals */
.pay-apps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }
#imgModal .modal-box { max-width: 600px; width: 95%; background: transparent; box-shadow: none; padding: 0; }
.popup-slider { display: flex; width: 100%; transition: transform 0.5s ease; }
.popup-slider img { min-width: 100%; width: 100%; border-radius: 15px; object-fit: contain; max-height: 80vh; }

@media (max-width: 768px) {
  header { padding: 50px 20px 30px; min-height: 350px; }
  header h3 { font-size: 2.5rem; }
  .grid { grid-template-columns: 1fr; }
}
</style>
</head>

<body>

<nav data-aos="fade-down">
  <div class="nav-line-1">
    <div class="logo-group">
      <a href="index.html" class="nav-logo">TheKrochet</a>
      <span class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">🌙</span>
    </div>
    <div id="userBtn" onclick="handleProfileClick()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
  </div>
  <div class="nav-line-2 nav-links">
    <a href="index.html" class="active">Home</a>
    <a href="products.html">Products</a>
    <a href="reviews.html">Reviews</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>

<header>
  <div class="hero-content" data-aos="zoom-in" data-aos-duration="1000">
    <h3>Handmade Crochet Creations</h3>
    <p>Crafted with love, warmth & timeless elegance</p>
  </div>
</header>

<section>
  <h2 data-aos="fade-up">Welcome to TheKrochet</h2>
  <div class="grid">
    <div class="welcome-card" data-aos="fade-up" data-aos-delay="100" onclick="openCustomOrder()">
      <h3>✨ Custom Orders</h3>
      <p>Designed just for you</p>
    </div>
    <div class="welcome-card" data-aos="fade-up" data-aos-delay="200" onclick="document.getElementById('shopSection').scrollIntoView({behavior:'smooth'})">
      <h3>🧶 Handmade Wearables</h3>
      <p>Soft & stylish crochet fashion</p>
    </div>
    <div class="welcome-card" data-aos="fade-up" data-aos-delay="300" onclick="document.getElementById('shopSection').scrollIntoView({behavior:'smooth'})">
      <h3>🏡 Home Décor</h3>
      <p>Warm & elegant handmade pieces</p>
    </div>
  </div>
</section>

<section id="shopSection" style="padding-top: 60px; border-top: 1px solid var(--shadow);">
  <h2 data-aos="fade-up">Latest Collection</h2>
  
  <div class="search-box" data-aos="fade-up">
    <input id="searchInput" placeholder="Search products...">
  </div>

  <div id="products" class="grid"></div>
</section>

<div id="cartFloat" class="cart-float" onclick="openCart()">🛒 Cart (<span id="cartCount">0</span>)</div>

<div id="cartModal" class="modal">
  <div class="modal-box">
    <h3>Your Cart</h3>
    <div id="cartItems"></div>
    <div style="text-align:right;font-weight:bold;margin-top:15px;color:var(--primary-dark)">Total ₹<span id="totalPrice">0</span></div>
    <div style="display:flex;gap:10px;margin-top:20px;">
      <button style="flex:1;padding:12px;border:none;border-radius:12px;background:#eee;color:#555;" onclick="closeModal('cartModal')">Close</button>
      <button style="flex:1;padding:12px;border:none;border-radius:12px;background:var(--primary);color:#fff;font-weight:600;" onclick="checkLoginForOrder()">Continue</button>
    </div>
  </div>
</div>

<div id="orderModal" class="modal">
  <div class="modal-box">
    <h3>Shipping Details</h3>
    <input id="custName" placeholder="Full Name">
    <input id="custInsta" placeholder="Instagram Username (@user)">
    <textarea id="custAddress" rows="3" placeholder="Full Delivery Address (Street, City, Pincode)"></textarea>
    <div style="display:flex;gap:10px;margin-top:20px;">
      <button style="flex:1;padding:12px;border-radius:12px;border:none;background:#eee;color:#555;" onclick="closeModal('orderModal')">Back</button>
      <button style="flex:1;padding:12px;border-radius:12px;border:none;background:var(--primary);color:#fff;font-weight:600;" onclick="openPaymentModal()">Proceed to Pay</button>
    </div>
  </div>
</div>

<div id="paymentAppModal" class="modal">
  <div class="modal-box">
    <h3>Select Payment App</h3>
    <p style="text-align:center;font-size:1rem;font-weight:600;margin-bottom:20px;">Pay ₹<span id="payAmountDisplay">0</span></p>
    <div class="pay-apps-grid">
      <div class="pay-app-btn" onclick="launchUPI('gpay')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" class="pay-app-img">
        <span class="pay-app-name">Google Pay</span>
      </div>
      <div class="pay-app-btn" onclick="launchUPI('paytm')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" class="pay-app-img">
        <span class="pay-app-name">Paytm</span>
      </div>
      <div class="pay-app-btn" onclick="launchUPI('phonepe')">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="PhonePe" class="pay-app-img">
        <span class="pay-app-name">PhonePe</span>
      </div>
      <div class="pay-app-btn" onclick="showQR()">
        <img src="https://cdn-icons-png.flaticon.com/512/3502/3502601.png" alt="QR Code" class="pay-app-img" style="filter:none;">
        <span class="pay-app-name">Scan QR</span>
      </div>
    </div>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:15px;cursor:pointer;font-weight:500;" onclick="closeModal('paymentAppModal')">Cancel</button>
  </div>
</div>

<div id="qrModal" class="modal">
  <div class="modal-box" style="text-align:center;">
    <h3>Scan to Pay</h3>
    <p style="margin-bottom:10px;">Scan with any UPI App</p>
    <div class="qr-container">
      <img id="dynamicQR" class="qr-img" src="" alt="Loading QR...">
    </div>
    <div style="font-weight:bold; font-size:1.2rem; color:var(--primary-dark); margin-bottom:20px;">₹<span id="qrAmount">0</span></div>
    <button class="confirm-btn" onclick="confirmAndFinishOrder()">Paid?</button>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:5px;cursor:pointer;" onclick="closeModal('qrModal')">Cancel</button>
  </div>
</div>

<div id="confirmCheckModal" class="modal">
  <div class="modal-box" style="text-align:center;">
    <h3 style="margin-bottom:10px;">Payment Pending</h3>
    <p>We've opened your payment app.<br>Please complete the transaction there.</p>
    <button class="confirm-btn" onclick="confirmAndFinishOrder()">Paid?</button>
    <button style="width:100%;padding:12px;border:none;background:transparent;color:var(--text);opacity:0.6;margin-top:5px;cursor:pointer;font-weight:500;" onclick="closeModal('confirmCheckModal')">Cancel / Retry</button>
  </div>
</div>

<div id="orderSuccessModal" class="modal">
  <div class="modal-box" style="text-align:center; padding: 40px 30px;">
    <div class="success-icon">🎉</div>
    <h3 style="margin-bottom:10px; color: var(--success);">Order Confirmed!</h3>
    <p>Thank you for your purchase.<br>Your order has been placed successfully.</p>
    <button class="confirm-btn" onclick="finishOrderFlow()">Continue Shopping</button>
  </div>
</div>

<div id="imgModal" class="modal" onclick="closeImg(event)"><div class="modal-box" id="imgBox"></div></div>

<footer>© 2025 TheKrochet</footer>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
/* 🚀 OPTIMIZED AOS */
AOS.init({ duration: 900, once: true, offset: 50 });

/* THEME */
(function(){
  const saved = localStorage.getItem("theme");
  if(!saved || saved === "dark"){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
})();
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

/* FIREBASE INIT */
const myUPI = "6351294436@ptaxis"; 
const myName = "TheKrochet";
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
const db = firebase.firestore();

let cart = JSON.parse(localStorage.getItem("krochetCart")) || [];
let currentTotal = 0;
let popupInterval = null;

/* 3D TILT LOGIC (Only Desktop) */
function initTilt() {
  if(window.innerWidth < 768) return; 

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    });
  });
}

/* 🚀 OPTIMIZED PRODUCT LOADING (Lag Fix + Animation Fix) */
const productsDiv = document.getElementById("products");
db.collection("products").orderBy("createdAt","desc").onSnapshot(snap=>{
  // 1. Build ALL HTML in memory first (Super Fast)
  let htmlString = "";
  
  snap.forEach((doc, idx)=>{
    const p=doc.data();
    let imgs = p.images || (p.image && p.image.includes(",") ? p.image.split(",").map(u=>u.trim()) : [p.image]);
    const sid="s"+Math.random().toString(36).slice(2);
    const imgHtml = imgs.map(url => `<img src="${url}">`).join('');
    
    // Note: Added 'data-aos="fade-up"' to enable pop-up animation
    htmlString += `
      <div class="product-card" data-aos="fade-up" data-aos-delay="${idx * 50}">
        <div class="img-window" onclick='openImg(${JSON.stringify(imgs)})'>
          <div id="${sid}" class="img-slider">${imgHtml}</div>
        </div>
        <h3>${p.name}</h3>
        <div class="price">₹${p.price}</div>
        <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
      </div>`;
      
      // Keep slider logic separate to avoid lag in string building
      if(imgs.length > 1){ 
         setTimeout(() => {
             let i=0; 
             setInterval(()=>{ i=(i+1)%imgs.length; const s=document.getElementById(sid); if(s) s.style.transform=`translateX(-${i * 100}%)`; }, 2500); 
         }, 100);
      }
  });

  // 2. Update DOM ONCE
  productsDiv.innerHTML = htmlString;
  
  // 3. Force Animation Refresh
  setTimeout(() => {
      AOS.refresh(); 
      initTilt();
  }, 200);
});

document.getElementById("searchInput").addEventListener("input",(e)=>{ const v=e.target.value.toLowerCase(); document.querySelectorAll(".product-card").forEach(c=>{ c.style.display = c.innerText.toLowerCase().includes(v) ? "flex" : "none"; }); });

/* CART FUNCTIONS */
function addToCart(name,price){ cart.push({name,price}); localStorage.setItem("krochetCart",JSON.stringify(cart)); document.getElementById("cartFloat").classList.add("cart-bump"); setTimeout(()=>document.getElementById("cartFloat").classList.remove("cart-bump"), 300); updateCartUI(); }
function updateCartUI(){ const items=document.getElementById("cartItems"); items.innerHTML=""; currentTotal=0; cart.forEach((p,i)=>{ currentTotal+=p.price; items.innerHTML+=`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #eee"><span>${p.name}</span><span>₹${p.price} <b style="color:red;margin-left:10px;cursor:pointer" onclick="removeItem(${i})">✖</b></span></div>`; }); document.getElementById("cartCount").innerText=cart.length; document.getElementById("totalPrice").innerText=currentTotal; }
function removeItem(i){ cart.splice(i,1); localStorage.setItem("krochetCart",JSON.stringify(cart)); updateCartUI(); }

function openCustomOrder(){
  const msg="I want to make a custom order and my requirement is...";
  navigator.clipboard.writeText(msg).catch(()=>{});
  window.open("https://ig.me/m/thekrochet_","_blank");
}

/* MODALS */
function openCart(){ openModal('cartModal'); updateCartUI(); }
function openImg(imgs){
  const imgBox = document.getElementById("imgBox");
  const slidesHtml = imgs.map(src => `<img src="${src}">`).join('');
  imgBox.innerHTML = `<div class="popup-slider" id="popupSlider">${slidesHtml}</div>`;
  openModal('imgModal');
  if(imgs.length > 1){
    let i = 0; if(popupInterval) clearInterval(popupInterval);
    popupInterval = setInterval(() => { i = (i + 1) % imgs.length; const slider = document.getElementById("popupSlider"); if(slider) slider.style.transform = `translateX(-${i * 100}%)`; }, 1700);
  }
}
function closeImg(e){ if(e.target.id==="imgModal") { closeModal('imgModal'); if(popupInterval) clearInterval(popupInterval); } }
function checkLoginForOrder(){ closeModal('cartModal'); const user = firebase.auth().currentUser; if(user) { const sidebarAddr = document.getElementById("sidebarAddress")?.innerText; if(sidebarAddr && !sidebarAddr.includes("No address")) { document.getElementById("custAddress").value = sidebarAddr; } openModal('orderModal'); } else { openModal('authModal'); } }
function openPaymentModal(){ const name=document.getElementById("custName").value.trim(); const insta=document.getElementById("custInsta").value.trim(); const addr=document.getElementById("custAddress").value.trim(); if(!name||!insta||!addr) return alert("Please fill Name, Instagram, and Address."); document.getElementById("payAmountDisplay").innerText = currentTotal; closeModal('orderModal'); openModal('paymentAppModal'); }
function launchUPI(appType){ let link = `upi://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`; if(appType==='paytm') link = `paytmmp://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`; if(appType==='phonepe') link = `phonepe://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`; window.location.href = link; closeModal('paymentAppModal'); setTimeout(()=>{ openModal('confirmCheckModal'); }, 1000); }
function showQR() { closeModal('paymentAppModal'); const upiUrl = `upi://pay?pa=${myUPI}&pn=${myName}&am=${currentTotal}&cu=INR`; const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`; document.getElementById("dynamicQR").src = qrApi; document.getElementById("qrAmount").innerText = currentTotal; openModal('qrModal'); }
function confirmAndFinishOrder(){ closeModal('confirmCheckModal'); closeModal('qrModal'); const name=document.getElementById("custName").value.trim(); const insta=document.getElementById("custInsta").value.trim(); const addr=document.getElementById("custAddress").value.trim(); const user = firebase.auth().currentUser; db.collection("orders").add({ customerName: name, instagram: insta, address: addr, items: cart, total: currentTotal, status: "Paid via UPI", userId: user ? user.uid : "guest", createdAt: firebase.firestore.FieldValue.serverTimestamp() }).then(() => { openModal('orderSuccessModal'); }).catch((error) => { alert("Error: " + error.message); }); }
function finishOrderFlow() { cart = []; localStorage.removeItem("krochetCart"); closeModal('orderSuccessModal'); window.location.href = 'index.html'; }
updateCartUI();
</script>

<script src="profile.js"></script>
</body>
</html>

Index.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   PAGE SPECIFIC STYLES
   (Global Profile Styles are now in brand.css)
   ========================================= */
:root{
  --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff; --nav:#ffffff;
  --shadow:rgba(0,0,0,0.08); 
  --primary:#d4a373; --primary-dark:#b8895b; 
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
}

body.dark{
  --bg:#121212; --text:#f1f1f1; --card:#1e1e1e; --nav:#1a1a1a; 
  --shadow:rgba(0,0,0,0.6);
}

*{ margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color: transparent; }
html { overflow-y: scroll; scroll-behavior: smooth; }

body{
  font-family:'Poppins',sans-serif; background:var(--bg); color:var(--text);
  min-height:100vh; display:flex; flex-direction:column;
  transition: background 0.5s var(--ease), color 0.5s var(--ease);
  overflow-x: hidden;
}

/* NAVBAR (Synced) */
nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--nav); backdrop-filter: blur(10px);
  padding: 10px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; gap: 8px;
  transition: 0.3s;
}

.nav-line-1 { 
  position: relative; width: 100%; display: flex; 
  justify-content: center; align-items: center; padding: 0 15px; 
}

.nav-logo { 
  font-family: 'Playfair Display', serif; font-size: 1.8rem; 
  color: var(--text); text-decoration: none; font-weight: 700; 
}

/* Profile Button */
#userBtn {
  position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--primary); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: 0.3s;
}
#userBtn:hover { background: var(--primary); color: #fff; }

.nav-line-2 { display: flex; justify-content: center; gap: 20px; }
.nav-links a { 
  text-decoration: none; color: var(--text); font-weight: 500; 
  font-size: 0.9rem; opacity: 0.7; transition: 0.3s; 
  position: relative; padding-bottom: 2px; 
}
.nav-links a.active, .nav-links a:hover { opacity: 1; color: var(--primary); }
.nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px;
  bottom: 0; left: 0; background: var(--primary); transition: 0.3s;
}
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

/* HERO & CONTENT */
header{
  text-align:center; padding: 80px 20px 40px; 
  background: linear-gradient(135deg, #fefae0 0%, #faf7f2 100%);
  position: relative; overflow: hidden;
}
body.dark header{ background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); }
header::before {
  content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 20%);
  opacity: 0.05; animation: floatBG 15s infinite linear; pointer-events: none;
}
@keyframes floatBG { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
header h1{ font-family:'Playfair Display',serif; font-size: 2.8rem; margin-bottom: 12px; letter-spacing: -0.5px; position: relative; }
header p{ font-size: 1.05rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }

section{ padding: 40px 20px 60px; max-width: 1000px; margin: auto; text-align: center; width: 100%; }

.grid{ margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.card{
  background: var(--card); padding: 30px 25px; border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow); cursor: pointer; border: 1px solid transparent;
  transition: all 0.4s var(--ease); position: relative; overflow: hidden; text-align: center;
}
.card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: rgba(212, 163, 115, 0.3); }
.card h3 { font-size: 1.3rem; margin-bottom: 8px; transition: color 0.3s ease, transform 0.3s var(--ease); }
.card:hover h3 { color: var(--primary); transform: scale(1.02); }
.card p { font-size: 0.9rem; opacity: 0.7; transition: opacity 0.3s ease; }
.card:hover p { opacity: 1; }

@media (max-width: 768px) { header { padding: 70px 20px 40px; } header h1 { font-size: 2.2rem; } }
@media (max-width: 480px) { section { padding: 30px 15px !important; width: 100% !important; } .grid { display: flex !important; flex-direction: column !important; gap: 15px !important; margin-top: 15px !important; } .card { width: 100% !important; padding: 25px 20px !important; } header h1 { font-size: 2rem; } }
</style>
</head>

<body>

<nav data-aos="fade-down">
  <div class="nav-line-1">
    <a href="index.html" class="nav-logo">TheKrochet</a>
    <div id="userBtn" onclick="handleProfileClick()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
  </div>
  <div class="nav-line-2 nav-links">
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="reviews.html">Reviews</a>
    <a href="about.html">About</a>
    <a href="contact.html" class="active">Contact</a>
  </div>
</nav>

<header>
  <h1 data-aos="zoom-in" data-aos-duration="1000">Contact Us</h1>
  <p data-aos="fade-up" data-aos-delay="200">We’d love to hear from you — orders, queries & collaborations 💛</p>
</header>

<section>
  <div class="grid">
    <div class="card" data-aos="fade-up" data-aos-delay="100" onclick="window.open('https://ig.me/m/thekrochet_', '_blank')">
      <h3>📩 Instagram</h3>
      <p>DM us directly for orders & quick queries</p>
    </div>
    <div class="card" data-aos="fade-up" data-aos-delay="200" onclick="customOrder()">
      <h3>🎁 Custom Orders</h3>
      <p>Have something unique in mind? We crochet it.</p>
    </div>
    <div class="card" data-aos="fade-up" data-aos-delay="300" onclick="collabOrder()">
      <h3>🤝 Collaborations</h3>
      <p>Brand partnerships & creative collaborations</p>
    </div>
  </div>
</section>

<footer>© 2025 TheKrochet</footer>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
AOS.init({ duration: 900, once: true, offset: 50 });

/* DARK MODE */
(function(){
  const saved = localStorage.getItem("theme");
  if(!saved || saved === "dark"){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
})();

/* FIREBASE INIT (Required before profile.js) */
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});

/* DM LOGIC */
function customOrder(){
  const msg = `Hi there 👋\nI would like to place a custom crochet order.\n\nMy requirements:\n• Product:\n• Color:\n• Size / Details:\n\nPlease guide me further. Thank you 💛`;
  navigator.clipboard.writeText(msg).finally(()=>{ window.open("https://ig.me/m/thekrochet_", "_blank"); });
}
function collabOrder(){
  const msg = `Hello 👋\nI’m interested in collaborating with TheKrochet.\n\nPlease share the collaboration details.\nLooking forward to your response.`;
  navigator.clipboard.writeText(msg).finally(()=>{ window.open("https://ig.me/m/thekrochet_", "_blank"); });
}
</script>

<script src="profile.js"></script>

</body>
</html>


Contact.html

/* =========================
   THEKROCHET BRAND LAYER - FINAL FULL VERSION
========================= */

:root{
  --radius-xl:24px; --radius-lg:18px; --radius-md:14px;
  --ease:cubic-bezier(.4,0,.2,1);
  
  /* DEFAULT LIGHT MODE COLORS */
  --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff;
  --nav:rgba(255, 255, 255, 0.95); --shadow:rgba(0,0,0,0.08);
  --primary:#d4a373; --primary-dark:#b8895b;
  --success:#27ae60; --danger:#e74c3c; --gray:#e0e0e0;
  
  /* INPUT COLORS (Light) */
  --input-bg: #ffffff;
  --input-border: rgba(0,0,0,0.1);
}

body.dark {
  /* DARK MODE COLORS */
  --bg:#121212; --text:#f1f1f1; --card:#1e1e1e;
  --nav:rgba(26, 26, 26, 0.95); --shadow:rgba(0,0,0,0.6);
  --gray:#333;
  
  /* INPUT COLORS (Dark) */
  --input-bg: #2b2b2b; 
  --input-border: rgba(255,255,255,0.1);
}

/* GLOBAL RESETS */
*{ transition: background-color .3s, color .3s; }
h1,h2,h3{letter-spacing:.3px} 
p{line-height:1.7}

/* =========================
   MASTER NAVBAR & FOOTER
========================= */
nav{ position:sticky; top:0; z-index:100; background:var(--nav); backdrop-filter:blur(10px); padding:10px 0; box-shadow:0 4px 20px var(--shadow); display:flex; flex-direction:column; gap:8px; }
.nav-top{ text-align:center; } 
.nav-links{ display:flex; justify-content:center; gap:18px; flex-wrap:wrap; }
.nav-links a{ text-decoration:none; color:var(--text); font-weight:500; position:relative; }
.nav-links a.active{ color:var(--primary); }
.nav-links a::after{ content:""; position:absolute; left:0; bottom:-4px; width:0; height:2px; background:var(--primary); transition:.3s; }
.nav-links a:hover::after, .nav-links a.active::after{ width:100%; }

footer { background:#1a1a1a; color:#888; text-align:center; padding:25px; font-size:0.9rem; margin-top:auto; }

/* CARD ANIMATIONS */
.card:hover{ transform:translateY(-6px); box-shadow:0 18px 40px rgba(0,0,0,.15); }

/* =========================================
   🚀 PROFILE SYSTEM (SIDEBAR, MODALS, TRACKING)
   ========================================= */

/* BACKGROUND OVERLAY */
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 2999; opacity: 0; pointer-events: none; transition: 0.3s; backdrop-filter: blur(3px); }
.overlay.active { opacity: 1; pointer-events: auto; }

/* SIDEBAR */
.sidebar { position: fixed; top: 0; right: -320px; width: 320px; height: 100%; background: var(--card); z-index: 3000; box-shadow: -10px 0 30px rgba(0,0,0,0.3); transition: right 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); display: flex; flex-direction: column; }
.sidebar.active { right: 0; }

.sidebar-header { padding: 30px 20px; background: var(--primary); color: #fff; display: flex; align-items: center; gap: 15px; }
.user-avatar { width: 50px; height: 50px; background: #fff; border-radius: 50%; color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.5rem; }
.user-info h4 { font-size: 1rem; margin-bottom: 2px; } .user-info p { font-size: 0.8rem; opacity: 0.9; }

.sidebar-body { padding: 20px; flex: 1; overflow-y: auto; }
.sidebar-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); font-weight: 700; margin-bottom: 10px; border-bottom: 1px solid var(--gray); padding-bottom: 5px; margin-top: 20px; }

/* ✅ ADDRESS BOX FIX (Uses Theme Variables) */
.saved-address { 
  font-size: 0.9rem; line-height: 1.5; 
  background: var(--input-bg) !important; 
  color: var(--text) !important; 
  padding: 15px; border-radius: 12px; border: 1px solid var(--input-border);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* ORDER CARD */
.order-item { background: var(--bg); padding: 15px; border-radius: 15px; margin-bottom: 15px; border: 1px solid var(--input-border); display: flex; flex-direction: column; gap: 10px; }
.order-top { display: flex; justify-content: space-between; align-items: center; }
.order-id { font-weight: 700; font-size: 1rem; } .order-price { font-weight: 700; color: var(--primary-dark); }
.order-date { font-size: 0.8rem; opacity: 0.6; }

/* ✅ TRACK BUTTON FIX (Solid Color) */
.track-btn {
  background: var(--primary); color: #fff; border: none;
  padding: 8px 20px; border-radius: 50px; font-size: 0.8rem; cursor: pointer; 
  font-weight: 600; margin-left: auto; display: block; width: fit-content;
}
.track-btn:hover { background: var(--primary-dark); transform: scale(1.05); }

.logout-btn { width: 100%; padding: 14px; background: #ffebee; color: #c62828; border: none; font-weight: 600; cursor: pointer; border-radius: 12px; margin-bottom: 20px; }

/* MODALS */
.modal{ position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:4000; background:rgba(0,0,0,0.6); backdrop-filter: blur(5px); opacity: 0; visibility: hidden; pointer-events: none; transition: 0.3s; }
.modal.active{ opacity: 1; visibility: visible; pointer-events: auto; }
.modal-box{ background: var(--card); width:90%; max-width:400px; padding:30px; border-radius:24px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); transform: scale(0.95); transition: 0.3s; }
.modal.active .modal-box{ transform: scale(1); }
.modal-box h3{ text-align:center; font-family:'Playfair Display',serif; color: var(--primary-dark); margin-bottom: 20px; font-size: 1.5rem; }

/* ✅ INPUTS & TEXTAREAS (Dark Mode Compatible) */
.modal-box input, .modal-box textarea { 
  width:100%; padding:14px; border-radius: 12px; 
  border: 1px solid var(--input-border); 
  background: var(--input-bg); 
  color: var(--text); 
  outline:none; margin-bottom: 12px; font-family: 'Poppins',sans-serif; 
}
.modal-box input:focus, .modal-box textarea:focus { border-color: var(--primary); }

.error-msg { color: #d32f2f; font-size: 0.9rem; text-align: center; margin-top: 10px; display: none; font-weight: 500; background: #ffebee; padding: 10px; border-radius: 8px; }

/* TIMELINE */
.timeline-container { position: relative; padding-left: 20px; margin-top: 20px; }
.timeline-step { position: relative; padding-bottom: 25px; padding-left: 20px; border-left: 2px solid var(--gray); }
.timeline-step:last-child { border-left: none; }
.timeline-dot { position: absolute; left: -9px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--gray); border: 2px solid var(--card); transition: 0.3s; }
.timeline-step.active .timeline-dot { background: var(--success); border-color: var(--success); box-shadow: 0 0 0 4px rgba(39, 174, 96, 0.2); }
.timeline-step.active { border-left-color: var(--success); }
.timeline-content h4 { font-size: 0.95rem; margin: 0; font-weight: 600; }
.timeline-content p { font-size: 0.75rem; opacity: 0.7; margin: 2px 0 0; }

/* =========================
   ✅ PAYMENT, QR & SUCCESS STYLES
========================= */

/* Payment App Buttons */
.pay-app-btn {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 15px; border-radius: 16px; border: 1px solid var(--input-border);
  background: var(--card); cursor: pointer; transition: all 0.2s ease;
  gap: 8px;
}
.pay-app-btn:hover {
  border-color: var(--primary); transform: translateY(-3px);
  box-shadow: 0 5px 15px var(--shadow);
}

/* Payment Logos */
.pay-app-img {
  height: 35px; width: auto; object-fit: contain;
  transition: filter 0.3s ease;
}
/* Other UPI Icon */
.pay-app-icon { font-size: 32px; }

/* DARK MODE: Make logos white (except colored icons) */
body.dark .pay-app-img,
body.dark .pay-app-btn .pay-app-icon {
  filter: brightness(0) invert(1);
}
body.dark .pay-app-btn:last-child .pay-app-icon {
    filter: none; color: #f1c40f;
}

.pay-app-name { font-size: 0.9rem; font-weight: 500; color: var(--text); }

/* QR Code */
.qr-container {
  background: #fff; /* Always white for scanning contrast */
  padding: 15px; border-radius: 12px;
  display: inline-block; margin: 10px auto 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.qr-img {
  width: 180px; height: 180px; object-fit: contain; display: block;
}

/* Success Modal Animation */
.success-icon {
  font-size: 60px; margin-bottom: 15px;
  animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
@keyframes popIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }

.modal-box p { opacity: 0.8; margin-bottom: 25px; line-height: 1.5; }

/* ✅ ACTION BUTTON (Paid? / Continue) - FINAL FIX */
/* Forces buttons to be solid brown/gold */
button.confirm-btn {
  width: 100% !important;
  padding: 14px !important;
  border: none !important;
  border-radius: 12px !important;
  background: var(--primary) !important; /* Brown Color */
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
  cursor: pointer !important;
  margin-top: 20px !important;
  box-shadow: 0 4px 15px rgba(212, 163, 115, 0.4) !important;
  transition: transform 0.2s ease !important;
  opacity: 1 !important;
}

button.confirm-btn:active { transform: scale(0.98) !important; }
button.confirm-btn:hover { background: var(--primary-dark) !important; }

/* Secondary/Cancel Button Style */
.modal-box button:not(.confirm-btn) {
  width: 100%; padding: 12px; background: transparent; border: none; color: var(--text); opacity: 0.6; margin-top: 10px; cursor: pointer;
}


Brand.css

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Manager | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* INTERNAL STYLES */
:root{
  --primary:#d4a373;
  --bg:#faf7f2;
  --text:#2f2f2f;
  --card-bg: #ffffff;
  --nav-bg: rgba(255, 255, 255, 0.95);
  --input-bg: #fdfbf8;
  --danger: #e74c3c;
  --success: #27ae60;
  --shadow: 0 10px 30px rgba(184, 137, 91, 0.15);
  --border: #eee;
}

body.dark-mode {
  --bg: #121212;
  --text: #e0e0e0;
  --card-bg: #1e1e1e;
  --nav-bg: rgba(30, 30, 30, 0.95);
  --input-bg: #2a2a2a;
  --shadow: 0 10px 30px rgba(0,0,0,0.5);
  --border: #333;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  padding-bottom: 50px;
  transition: background 0.3s, color 0.3s;
}

/* ✅ NAVBAR (Exact Match to Reviews) */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-top {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-top h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--text);
  margin: 0;
}

/* Theme Toggle Button */
.theme-toggle {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: 0.2s;
}
.theme-toggle:hover { transform: scale(1.1); }

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a, .nav-links button {
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: var(--text);
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.nav-links .active, .nav-links a:hover, .nav-links button:hover {
  opacity: 1;
  color: var(--primary);
  font-weight: 600;
}


/* PAGE LAYOUT */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header h4 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #b8895b;
  text-align: center;
  margin: 20px 0 40px;
}

/* ✅ FIXED ADD ITEM CARD */
.form-card {
  background: var(--card-bg);
  padding: 30px; /* Clean padding */
  border-radius: 20px;
  box-shadow: var(--shadow);
  max-width: 500px;
  margin: 0 auto 50px; /* Centered */
  border: 1px solid var(--border);
  box-sizing: border-box; /* Prevents overflow */
}

.form-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: var(--text);
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 14px 16px; /* Text padding */
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--input-bg);
  color: var(--text);
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  text-align: left; /* ✅ TEXT ON LEFT */
  transition: border-color 0.3s;
  box-sizing: border-box; /* Keeps size correct */
}

.form-group input:focus, .form-group textarea:focus {
  border-color: var(--primary);
}

.btn-main {
  width: 100%; padding: 14px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; margin-top: 10px;
}
.btn-add { background: var(--primary); color: #fff; box-shadow: 0 4px 15px rgba(212, 163, 115, 0.3); }
.btn-update { background: var(--success); color: #fff; display: none; }
.btn-cancel { background: #eee; color: #555; display: none; margin-top: 10px; }


/* ✅ GRID & SLIDER SYSTEM */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.product-card {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.product-card:hover { transform: translateY(-5px); box-shadow: var(--shadow); }

/* Slider Box */
.p-img-box {
  width: 100%;
  height: 260px;
  overflow: hidden;
  position: relative;
  background: var(--input-bg);
}

/* The Moving Strip */
.img-slider {
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Individual Images */
.img-slider img {
  min-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.p-info { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; }
.p-name { font-weight: 600; font-size: 1.1rem; margin-bottom: 5px; color: var(--text); }
.p-price { color: var(--primary); font-weight: 700; font-size: 1.1rem; margin-bottom: 15px; }

.p-actions { margin-top: auto; display: flex; gap: 10px; }
.btn-sm { flex: 1; padding: 10px; border: none; border-radius: 10px; cursor: pointer; font-weight: 500; }
.btn-edit { background: var(--input-bg); color: var(--text); border: 1px solid var(--border); }
.btn-del { background: rgba(231, 76, 60, 0.1); color: var(--danger); }

/* Mobile Navbar Fix */
@media (max-width: 768px) {
  nav { flex-direction: column; gap: 15px; }
  .nav-links { gap: 20px; }
  .theme-toggle { position: absolute; top: 20px; right: 5%; }
  .form-card { padding: 25px 20px; } /* Mobile Padding Fix */
}
</style>
</head>

<body>

<nav>
  <div class="nav-top">
    <h2>TheKrochet</h2>
    <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
  </div>
  
  <div class="nav-links">
    <a href="admin.html" class="active">Products</a>
    <a href="admin-reviews.html">Reviews</a>
    <a href="orders.html">Orders</a>
    <button onclick="logout()">Logout</button>
  </div>
</nav>

<div class="container">
  
  <div class="page-header">
    <h4>Inventory Manager</h4>
  </div>

  <div class="form-card" id="formSection">
    <h3 class="form-title" id="formTitle">Add New Item</h3>
    <div class="form-group">
      <input type="hidden" id="editId">
      <input type="text" id="pName" placeholder="Product Name">
      <input type="number" id="pPrice" placeholder="Price (₹)">
      <input type="text" id="pImg" placeholder="Image URL (Comma separated for slider)">
      <textarea id="pDesc" rows="3" placeholder="Short Description..."></textarea>
      
      <button id="addBtn" class="btn-main btn-add" onclick="addProduct()">+ Add Product</button>
      <button id="updateBtn" class="btn-main btn-update" onclick="updateProduct()">✓ Update Product</button>
      <button id="cancelBtn" class="btn-main btn-cancel" onclick="resetForm()">Cancel Edit</button>
    </div>
  </div>

  <div id="productsList" class="products-grid">
    <div style="text-align:center; grid-column:1/-1; padding:40px; color:#999;">Loading inventory...</div>
  </div>

</div>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>

<script>
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});

const auth=firebase.auth();
const db=firebase.firestore();
let allProducts = {};

/* THEME LOGIC */
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeBtn").innerText = isDark ? "☀️" : "🌙";
}
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
  document.getElementById("themeBtn").innerText = "☀️";
}

auth.onAuthStateChanged(user=>{
  if(!user) location.href="login.html";
});
function logout(){
  auth.signOut().then(()=>location.href="login.html");
}

/* FETCH PRODUCTS (WITH AUTO-SCROLL LOOP) */
db.collection("products").orderBy("createdAt", "desc").onSnapshot(snap => {
  const container = document.getElementById("productsList");
  container.innerHTML = "";
  allProducts = {}; 

  if(snap.empty){
    container.innerHTML = "<div style='text-align:center; width:100%; grid-column:1/-1; padding:40px; color:#999'>No products yet.</div>";
    return;
  }

  snap.forEach(doc => {
    const p = doc.data();
    allProducts[doc.id] = p; 

    // ✅ HANDLE MULTIPLE IMAGES FOR SLIDER
    let imgs = p.images;
    if (!imgs) {
      if (p.image && typeof p.image === 'string' && p.image.includes(",")) {
        imgs = p.image.split(",").map(url => url.trim());
      } else {
        imgs = [p.image || 'https://via.placeholder.com/300?text=No+Image'];
      }
    }

    // Generate Slider HTML
    const imgHtml = imgs.map(url => `<img src="${url}">`).join('');
    const sid = "s" + Math.random().toString(36).substr(2, 9); // Unique ID for slider

    container.innerHTML += `
      <div class="product-card">
        <div class="p-img-box">
          <div id="${sid}" class="img-slider">
            ${imgHtml}
          </div>
        </div>
        <div class="p-info">
          <div class="p-name">${p.name}</div>
          <div class="p-price">₹${p.price}</div>
          <div class="p-actions">
            <button class="btn-sm btn-edit" onclick="startEdit('${doc.id}')">Edit</button>
            <button class="btn-sm btn-del" onclick="deleteProduct('${doc.id}')">Delete</button>
          </div>
        </div>
      </div>
    `;

    // ✅ AUTO SCROLL LOOP (1.7 Seconds)
    if(imgs.length > 1){
      let i = 0;
      setInterval(() => {
        i = (i + 1) % imgs.length;
        const slider = document.getElementById(sid);
        if(slider) slider.style.transform = `translateX(-${i * 100}%)`;
      }, 1700);
    }
  });
});

/* ADD PRODUCT */
function addProduct() {
  const name = document.getElementById('pName').value;
  const price = document.getElementById('pPrice').value;
  const image = document.getElementById('pImg').value;
  const desc = document.getElementById('pDesc').value;

  if(!name || !price){ alert("Please fill Name and Price"); return; }

  db.collection("products").add({
    name: name,
    price: Number(price),
    image: image,
    description: desc,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    resetForm();
  }).catch(err => alert("Error: " + err.message));
}

/* START EDIT MODE */
function startEdit(id) {
  const p = allProducts[id];
  document.getElementById('editId').value = id;
  document.getElementById('pName').value = p.name;
  document.getElementById('pPrice').value = p.price;
  document.getElementById('pImg').value = p.image || '';
  document.getElementById('pDesc').value = p.description || '';

  document.getElementById('addBtn').style.display = 'none';
  document.getElementById('updateBtn').style.display = 'block';
  document.getElementById('cancelBtn').style.display = 'block';
  document.getElementById('formTitle').innerText = "Edit Product";

  document.getElementById('formSection').scrollIntoView({behavior: "smooth"});
}

/* UPDATE PRODUCT */
function updateProduct() {
  const id = document.getElementById('editId').value;
  const name = document.getElementById('pName').value;
  const price = document.getElementById('pPrice').value;
  const image = document.getElementById('pImg').value;
  const desc = document.getElementById('pDesc').value;

  db.collection("products").doc(id).update({
    name: name,
    price: Number(price),
    image: image,
    description: desc
  }).then(() => {
    resetForm(); 
  }).catch(err => alert("Error updating: " + err.message));
}

/* RESET FORM */
function resetForm() {
  document.getElementById('pName').value = "";
  document.getElementById('pPrice').value = "";
  document.getElementById('pImg').value = "";
  document.getElementById('pDesc').value = "";
  document.getElementById('editId').value = "";

  document.getElementById('addBtn').style.display = 'block';
  document.getElementById('updateBtn').style.display = 'none';
  document.getElementById('cancelBtn').style.display = 'none';
  document.getElementById('formTitle').innerText = "Add New Item";
}

/* DELETE PRODUCT */
function deleteProduct(id) {
  if(confirm("Are you sure you want to delete this product?")) {
    db.collection("products").doc(id).delete();
  }
}
</script>

</body>
</html>


Admin.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reviews Manager | TheKrochet</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   1. GLOBAL RESET (FIXES SIDE SCROLL)
   ========================================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* ⚠️ CRITICAL FIX */
  -webkit-tap-highlight-color: transparent;
}

html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* ⚠️ CRITICAL FIX */
}

/* =========================================
   2. THEME VARIABLES
   ========================================= */
:root{
  --primary:#d4a373;
  --bg:#faf7f2;
  --text:#2f2f2f;
  --card-bg: #ffffff;
  --nav-bg: rgba(255, 255, 255, 0.95);
  --danger: #e74c3c;
  --shadow: 0 10px 30px rgba(184, 137, 91, 0.15);
  --border: rgba(0,0,0,0.03);
}

body.dark-mode {
  --bg: #121212;
  --text: #e0e0e0;
  --card-bg: #1e1e1e;
  --nav-bg: rgba(30, 30, 30, 0.95);
  --shadow: 0 10px 30px rgba(0,0,0,0.5);
  --border: #333;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

/* =========================================
   3. NAVBAR
   ========================================= */
nav {
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.nav-top { display: flex; align-items: center; justify-content: center; gap: 10px; }
.nav-top h2 { font-family: 'Playfair Display', serif; font-size: 24px; color: var(--text); }
.theme-toggle { background: none; border: none; font-size: 20px; cursor: pointer; padding: 5px; }

.nav-links { display: flex; justify-content: center; gap: 22px; margin-top: 10px; flex-wrap: wrap; }
.nav-links a, .nav-links button { background: none; border: none; font-weight: 500; color: var(--text); font-size: 15px; font-family: 'Poppins', sans-serif; opacity: 0.7; text-decoration: none; cursor: pointer; }
.nav-links a.active { opacity:1; color: var(--primary); font-weight: 600; }

/* =========================================
   4. LAYOUT
   ========================================= */
.page-header { text-align: center; padding: 40px 20px 20px; }
.page-header h4 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #b8895b; margin-bottom: 5px; }

/* GRID */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px 40px 60px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* =========================================
   5. REVIEW CARD
   ========================================= */
.review-card {
  background: var(--card-bg);
  border-radius: 18px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.review-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
.reviewer-name { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 18px; color: var(--text); }
.review-date { font-size: 12px; color: var(--text); opacity: 0.6; background: rgba(128,128,128,0.1); padding: 4px 8px; border-radius: 6px; }
.review-text { font-size: 14px; opacity: 0.8; line-height: 1.6; font-style: italic; margin-bottom: 20px; flex-grow: 1; }

.review-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 15px; margin-top: 10px; }
.stars { color: #f1c40f; font-size: 18px; letter-spacing: 2px; }

.btn-delete { background: rgba(231, 76, 60, 0.1); color: var(--danger); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer; }

/* Loading Style */
.loading-msg { text-align: center; width: 100%; grid-column: 1/-1; padding: 40px; color: #999; }
</style>
</head>

<body>

<nav>
  <div class="nav-top">
    <h2>TheKrochet</h2>
    <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
  </div>
  <div class="nav-links">
    <a href="admin.html">Products</a>
    <a href="admin-reviews.html" class="active">Reviews</a>
    <a href="orders.html">Orders</a>
    <button onclick="logout()">Logout</button>
  </div>
</nav>

<main>
  <div class="page-header">
    <h4>Customer Reviews</h4>
    <p style="color:#888; font-size:14px;">Manage what people say about you</p>
  </div>

  <div id="reviewsList" class="reviews-grid">
    <div class="loading-msg">Loading reviews...</div>
  </div>
</main>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>

<script>
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
const auth=firebase.auth(); const db=firebase.firestore();

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeBtn").innerText = isDark ? "☀️" : "🌙";
}
if(localStorage.getItem("theme") === "dark"){ document.body.classList.add("dark-mode"); document.getElementById("themeBtn").innerText = "☀️"; }

auth.onAuthStateChanged(u=>{ if(!u) location.href="login.html"; });
function logout(){ auth.signOut().then(()=>location.href="login.html"); }

db.collection("reviews").orderBy("createdAt", "desc").onSnapshot(snap => {
  const l = document.getElementById("reviewsList"); l.innerHTML = "";
  if (snap.empty) { l.innerHTML = "<div class='loading-msg'>No reviews yet.</div>"; return; }

  snap.forEach(doc => {
    const r = doc.data();
    const date = r.createdAt ? r.createdAt.toDate().toLocaleDateString() : "Date N/A";
    let stars = "★".repeat(r.rating) + "☆".repeat(5-r.rating);

    l.innerHTML += `
      <div class="review-card">
        <div class="review-header">
          <span class="reviewer-name">${r.name||"Anonymous"}</span>
          <span class="review-date">${date}</span>
        </div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-footer">
          <div class="stars">${stars}</div>
          <button class="btn-delete" onclick="db.collection('reviews').doc('${doc.id}').delete()">Delete</button>
        </div>
      </div>`;
  });
});
</script>
</body>
</html>


Admin-reviews.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About Us | TheKrochet</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="responsive.css">

<style>
/* =========================================
   PAGE SPECIFIC STYLES
   (Global Profile Styles are now in brand.css)
   ========================================= */
:root{
  --bg:#faf7f2; --text:#2f2f2f; --card:#ffffff; --nav:#ffffff;
  --shadow:rgba(0,0,0,0.08); 
  --primary:#d4a373; --primary-dark:#b8895b; 
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
}

body.dark{
  --bg:#121212; --text:#f1f1f1; --card:#1e1e1e; --nav:#1a1a1a; 
  --shadow:rgba(0,0,0,0.6);
}

*{ margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color: transparent; }
html { overflow-y: scroll; scroll-behavior: smooth; }

body{
  font-family:'Poppins',sans-serif; background:var(--bg); color:var(--text);
  min-height:100vh; display:flex; flex-direction:column;
  transition: background 0.5s var(--ease), color 0.5s var(--ease);
  overflow-x: hidden;
}

/* NAVBAR (Synced) */
nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--nav); backdrop-filter: blur(10px);
  padding: 10px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; gap: 8px;
  transition: 0.3s;
}

.nav-line-1 { 
  position: relative; width: 100%; display: flex; 
  justify-content: center; align-items: center; padding: 0 15px; 
}

.logo-group { display: flex; align-items: center; gap: 10px; }

.nav-logo { 
  font-family: 'Playfair Display', serif; font-size: 1.8rem; 
  color: var(--text); text-decoration: none; font-weight: 700; 
}

.theme-toggle{
  display:inline-flex; align-items:center; justify-content:center;
  width:32px; height:32px; border-radius:50%;
  background:var(--card); box-shadow:0 2px 8px var(--shadow); cursor:pointer;
  font-size:14px; transition: 0.3s;
}
.theme-toggle:hover{ transform: rotate(45deg); background: var(--bg); }

/* Profile Button */
#userBtn {
  position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--primary); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: 0.3s;
}
#userBtn:hover { background: var(--primary); color: #fff; }

.nav-line-2 { display: flex; justify-content: center; gap: 20px; }
.nav-links a { 
  text-decoration: none; color: var(--text); font-weight: 500; 
  font-size: 0.9rem; opacity: 0.7; transition: 0.3s; 
  position: relative; padding-bottom: 2px; 
}
.nav-links a.active, .nav-links a:hover { opacity: 1; color: var(--primary); }
.nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px;
  bottom: 0; left: 0; background: var(--primary); transition: 0.3s;
}
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

/* HERO & CONTENT */
header{
  text-align:center; padding: 80px 20px 40px; 
  background: linear-gradient(135deg, #fefae0 0%, #faf7f2 100%);
  position: relative; overflow: hidden;
}
body.dark header{ background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); }
header::before {
  content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 20%);
  opacity: 0.05; animation: floatBG 15s infinite linear; pointer-events: none;
}
@keyframes floatBG { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
header h1{ font-family:'Playfair Display',serif; font-size: 2.8rem; margin-bottom: 12px; letter-spacing: -0.5px; position: relative; }
header p{ font-size: 1.05rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }

section{ padding: 40px 20px 60px; max-width: 1000px; margin: auto; text-align: center; width: 100%; }
section h2{ font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--primary-dark); position: relative; display: inline-block; margin-bottom: 15px; }
body.dark section h2 { color: var(--primary); }

.about-text { max-width: 800px; margin: 0 auto 40px; font-size: 1rem; line-height: 1.8; opacity: 0.8; }

.grid{ margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.card{
  background: var(--card); padding: 30px 25px; border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow); cursor: pointer; border: 1px solid transparent;
  transition: all 0.4s var(--ease); position: relative; overflow: hidden; text-align: center;
}
.card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: rgba(212, 163, 115, 0.3); }
.card h3 { font-size: 1.3rem; margin-bottom: 8px; transition: color 0.3s ease, transform 0.3s var(--ease); }
.card:hover h3 { color: var(--primary); transform: scale(1.02); }
.card p { font-size: 0.9rem; opacity: 0.7; transition: opacity 0.3s ease; }
.card:hover p { opacity: 1; }

@media (max-width: 768px) { header { padding: 70px 20px 40px; } header h1 { font-size: 2.2rem; } }
@media (max-width: 480px) { section { padding: 30px 15px !important; width: 100% !important; } .grid { display: flex !important; flex-direction: column !important; gap: 15px !important; margin-top: 15px !important; } .card { width: 100% !important; padding: 25px 20px !important; } header h1 { font-size: 2rem; } }
</style>
</head>

<body>

<nav data-aos="fade-down">
  <div class="nav-line-1">
    <div class="logo-group">
      <a href="index.html" class="nav-logo">TheKrochet</a>
      <span class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">🌙</span>
    </div>
    <div id="userBtn" onclick="handleProfileClick()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
  </div>
  <div class="nav-line-2 nav-links">
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="reviews.html">Reviews</a>
    <a href="about.html" class="active">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>

<header>
  <h1 data-aos="zoom-in" data-aos-duration="1000">About TheKrochet</h1>
  <p data-aos="fade-up" data-aos-delay="200">Handmade crochet creations crafted with patience, passion, and timeless elegance.</p>
</header>

<section>
  <h2 data-aos="fade-up">Our Story</h2>
  <p class="about-text" data-aos="fade-up" data-aos-delay="100">
    TheKrochet was born from a deep love for handmade art and slow fashion.
    Every piece is thoughtfully crocheted by hand, celebrating creativity,
    comfort, and individuality.
  </p>

  <div class="grid">
    <div class="card" data-aos="fade-up" data-aos-delay="200">
      <h3>🧶 Handmade with Love</h3>
      <p>Each creation is carefully crocheted stitch by stitch, ensuring warmth, durability, and soul in every product.</p>
    </div>
    <div class="card" data-aos="fade-up" data-aos-delay="300">
      <h3>🌿 Quality Materials</h3>
      <p>Premium yarns that are soft, skin-friendly, long-lasting, and responsibly sourced.</p>
    </div>
    <div class="card" data-aos="fade-up" data-aos-delay="400">
      <h3>✨ Timeless Designs</h3>
      <p>Classic crochet craftsmanship blended with modern aesthetics, made to stay relevant forever.</p>
    </div>
  </div>
</section>

<footer>© 2025 TheKrochet</footer>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
AOS.init({ duration: 900, once: true, offset: 50 });

/* DARK MODE LOGIC */
(function(){
  const saved = localStorage.getItem("theme");
  if(!saved || saved === "dark"){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
})();
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

/* FIREBASE INIT (Required before profile.js) */
firebase.initializeApp({
  apiKey:"AIzaSyAbFV0WbIVMpibxnIiVbwtnOqtvJ6ts_sY",
  authDomain:"thekrochet-b3ca2.firebaseapp.com",
  projectId:"thekrochet-b3ca2"
});
</script>

<script src="profile.js"></script>

</body>
</html>


About.html
