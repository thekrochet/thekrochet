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
