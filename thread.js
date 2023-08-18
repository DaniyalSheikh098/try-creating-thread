const tweetIcon = document.querySelector('.tweet-icon');
const tweetBar = document.querySelector('.tweet-bar');

tweetIcon.addEventListener('click', () => {
tweetBar.style.display = 'block';
});


//const wrapper = document.querySelector(".wrapper"),
//editableInput = wrapper.querySelector(".editable"),
//readonlyInput = wrapper.querySelector(".readonly"),
//placeholder = wrapper.querySelector(".placeholder"),
//counter = wrapper.querySelector(".counter"),
//button = wrapper.querySelector("button");

//editableInput.onfocus = ()=>{
  //placeholder.style.color = "#c5ccd3";
//}
//editableInput.onblur = ()=>{
  //placeholder.style.color = "#98a5b1";
//}

//editableInput.onkeyup = (e)=>{
  //let element = e.target;
  //validated(element);
//}
//editableInput.onkeypress = (e)=>{
  //let element = e.target;
  //validated(element);
  //placeholder.style.display = "none";
//}

//function validated(element){
  //let text;
  //let maxLength = 100;
  //let currentlength = element.innerText.length;

  //if(currentlength <= 0){
    //placeholder.style.display = "block";
    //counter.style.display = "none";
    //button.classList.remove("active");
  //}else{
    //placeholder.style.display = "none";
    //counter.style.display = "block";
    //button.classList.add("active");
  //}

  //counter.innerText = maxLength - currentlength;

  //if(currentlength > maxLength){
    //let overText = element.innerText.substr(maxLength); //extracting over texts
    //overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    //text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    //readonlyInput.style.zIndex = "1";
    //counter.style.color = "#e0245e";
    //button.classList.remove("active");
  //}else{
    //readonlyInput.style.zIndex = "-1";
    //counter.style.color = "#333";
  //}
  //readonlyInput.innerHTML = text; 
//}

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAez_Dz5Wc4Sy_aQytyLxHsoa38EQJ29S4",
    authDomain: "threads-clon.firebaseapp.com",
    projectId: "threads-clon",
    storageBucket: "threads-clon.appspot.com",
    messagingSenderId: "928303968102",
    appId: "1:928303968102:web:b6b98337b9560a6320a2a7",
    measurementId: "G-HV5QKDRZBW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log("user" , user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage", errorMessage)
  });