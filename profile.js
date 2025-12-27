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
