  /* SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

    /* MOBILE MENU */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });


let isSignup = false;

/* OPEN */
function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
  isSignup = false;
  updateForm();
}

/* CLOSE */
function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

/* SWITCH LOGIN/SIGNUP */
function toggleAuth(){
  isSignup = !isSignup;
  updateForm();
}

/* UPDATE FORM */
function updateForm(){

  document.getElementById("formTitle").innerText =
    isSignup ? "Create Your IT Account" : "Welcome Back";

  document.getElementById("formSubtitle").innerText =
    isSignup 
    ? "Sign up to access our IT solutions and services"
    : "Login to access your IT dashboard and manage your services";

  document.getElementById("submitBtn").innerText =
    isSignup ? "Create Account" : "Login to Dashboard";

  document.getElementById("switchText").innerText =
    isSignup ? "Already have an account?" : "Don't have an account?";

  document.querySelector(".switch-text a").innerText =
    isSignup ? "Login" : "Sign up";

  document.getElementById("fullName").style.display =
    isSignup ? "block" : "none";

  document.getElementById("confirmPassword").style.display =
    isSignup ? "block" : "none";

  document.getElementById("loginRoleBox").style.display =
    isSignup ? "none" : "block";
}

/* SUBMIT */
function handleAuthSubmit(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if(!isSignup){

    const role = document.getElementById("loginRole").value;

    if(role === "admin"){
      window.location.href = "admin-dashboard.html";
    }
    else if(role === "user"){
      window.location.href = "user-dashboard.html";
    }

  } 
  else {

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // ✅ VALIDATION
    if(name === "" || phone === "" || email === "" || password === "" || confirmPassword === ""){
      alert("Please fill all fields!");
      return;
    }

    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    // ✅ SUCCESS → REDIRECT
    window.location.href = "404.html";
  }
}

/* PASSWORD TOGGLE */
function togglePassword(){

  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  if(password.type === "password"){
    password.type = "text";
    eyeIcon.classList.replace("ri-eye-off-line","ri-eye-line");
  } else {
    password.type = "password";
    eyeIcon.classList.replace("ri-eye-line","ri-eye-off-line");
  }
}

/* OUTSIDE CLICK CLOSE */
window.addEventListener("click", function(e){
  const modal = document.getElementById("loginModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});
