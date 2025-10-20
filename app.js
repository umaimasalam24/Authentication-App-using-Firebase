  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBb2dBk5IAKSnzIOCNRKmi3Aj6nWwKRRBc",
    authDomain: "authentication-app-c0be9.firebaseapp.com",
    projectId: "authentication-app-c0be9",
    storageBucket: "authentication-app-c0be9.firebasestorage.app",
    messagingSenderId: "1040542190109",
    appId: "1:1040542190109:web:3f85bf5f4c4c0b8ee494f4",
    measurementId: "G-DEGL59XCQJ"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("signup")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert('SignUp Successfully');
      window.location.href='welcome.html';
      document.getElementById('user').innerText= email;
    })
    .catch(error =>document.getElementById('error').innerText = error.message)
})
document.getElementById("login")?.addEventListener("click", () => {
      const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert('LogIn Successfully');
      window.location.href='welcome.html'
    })
    .catch(error =>document.getElementById('error').innerText = error.message)
})
export function logout() {
    signOut(auth)
        .then(() => {
            alert("Logged out");
            window.location.href = "index.html";
        })
        .catch(error => console.error("Logout Error:", error));
}
document.getElementById("logout")?.addEventListener("click", logout);
