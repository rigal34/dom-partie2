// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div> > #id > .class > baliseHTML */

//--------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);// si mon fichier e.key est égal à z alors fait moi la suite 
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => { //je donne un évènement à ma fenêtre pour exécuté un scroll dans une fonction
  console.log(window.scrollY);//permet de chercher la valeur de mon scroll dans le navigateur en px
  if(window.scrollY > 120){// si dans la fenêtre de window au scroll je suis supérieur à 120px tu cible nav pour injecter un style top 0 qui fera apparaitre ma nav qui était à -50px
    nav.style.top = 0;
  }else{                 //sinon si elle est inf à 120px ma nav disparaît
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
// Form Events évènement sur les formulaires
const inputName = document.querySelector('input[type="text"]');//('input[type="text"]');ce selecteur permet de cibler cette input en particulier
const select = document.querySelector("select");
let pseudo = "";
let language = "";
select.addEventListener("input", (e) => {
// console.log(e.target.value);
language = e.target.value;
console.log(language);
})


inputName.addEventListener("input", (e) => { //événement pour un input s'appelle dans js "input" et quand je click dans input je déclenche une fonction
console.log(e.target.value);//permet de savoir dans la console ce qui à était tapé dans input
pseudo = e.target.value;//permet de recuper ce qui est tapé dans input pour le stocké dans let pseudo
console.log(pseudo);
});
//------------------------------------------------
// Load event


//------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");




//------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)

// Usecapture


// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-------------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

//-------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

// Evénements adossés à Window
// alert("hello");

// confirm
// btn2.addEventListener("click", () => {
//   confirm("Voulez vous vraiment vous tromper ?");
// });

// prompt
// btn1.addEventListener("click", () => {
//   let answer = prompt("Entrez votre nom !");

//   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
// });

// Timer, compte à rebours
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 4000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

