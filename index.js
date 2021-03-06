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
  if (e.key === "z") ring(e.key); // si mon fichier e.key est ??gal ?? z alors fait moi la suite
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //je donne un ??v??nement ?? ma fen??tre pour ex??cut?? un scroll dans une fonction
  console.log(window.scrollY); //permet de chercher la valeur de mon scroll dans le navigateur en px
  if (window.scrollY > 120) {
    // si dans la fen??tre de window au scroll je suis sup??rieur ?? 120px tu cible nav pour injecter un style top 0 qui fera apparaitre ma nav qui ??tait ?? -50px
    nav.style.top = 0;
  } else {
    //sinon si elle est inf ?? 120px ma nav dispara??t
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
// Form Events ??v??nement sur les formulaires
const inputName = document.querySelector('input[type="text"]'); //('input[type="text"]');ce selecteur permet de cibler cette input en particulier
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";
console.log(form);
select.addEventListener("input", (e) => {
  // console.log(e.target.value);
  language = e.target.value;
  console.log(language);
});

inputName.addEventListener("input", (e) => {
  //??v??nement pour un input s'appelle dans js "input" et quand je click dans input je d??clenche une fonction
  console.log(e.target.value); //permet de savoir dans la console ce qui ?? ??tait tap?? dans input
  pseudo = e.target.value; //permet de recuper ce qui est tap?? dans input pour le stock?? dans let pseudo
  console.log(pseudo);
});

form.addEventListener("submit", (e) => {
  //l'??v??nement pour un form est soumettre valider
  e.preventDefault(); //cette m??thode ?? notre ??v??nement ??vite de changer de page ?? notre navigateur cela annule ce changement de page,permet de travailler tranquille avec notre formulaire
  console.log(cgv.checked);
  if (cgv.checked) {
    //on ?? pas besoin de d??clarer une variable pour une checkbox javascript les reconna??s id pareil pour les bouttons m??me principe
    // si c'est checked on va aller chercher cette balise div d'une fa??on diff??rent pour montrer un exemple
    //on va chercher l'enfant de form div pour injecter h3 et h4 en utilisant innerHML
    // si c'est valider tu m'affiche ce qui est en dessous
    document.querySelector("form > div").innerHTML = `  
<h3>Pseudo : ${pseudo}</h3>
<h4>Langage pr??f??r?? : ${language}</h4>
`;
  } else {
    alert("Veuillez accepter les CVG");
  }
});
//------------------------------------------------
// Load event ev??nement de chargement
// load envent se d??clenche une fois que toute la page est charg??e
window.addEventListener("load", () => {
  // je veux que tu me fasses sa une fois que le document est charg?? ??vite d'avoir des probl??mes de performance
  console.log("Document Charg??");
});

//-------quand on plusieurs ??l??ments de la m??me class ou plusieurs ??l??ments qui s'appelle pareil
//cela ??vite de cr??er une variable pour chaqu'un

// ForEach ==>>>pour chacun d'eux on donnera tel logique
//const boxes = document.getElementsByClassName("box"); // je select plusieurs class mais pose souvent des probl??mes
const boxes = document.querySelectorAll(".box"); //selectionne toute les classes .box
// boxes.addEventListener("click", () =>{  //on ne peut pas mettre un addEventListener sur 3 ??l??ments comme cela pour cela que l'on utlise ForEach
console.log(boxes);
// })

boxes.forEach((box) => {
  //le param??tre ici est tr??s important, c'est comment je vais les appeler individuellement pour chaqu'une d'elle
  box.addEventListener("click", (e) => {
    //ensuite je vais pouvoir donner la logique que je veux pour mes 3 boxes cela permet de creer un seul addEventListener au lieu de 3
    //console.log(e.target);quand je clic sur ma page il me qu 'elle des 3 classe je suis
    e.target.style.transform = "scale(0.7)"; // quand je clic sur un des 3 class on injecte un style qui transform
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");

//------------------------------------------------
// addEventListener Vs onclick et une fa??on ancienne de faire des ??v??nements cela remplace le addEventListener
//  document.body.onclick = function() {
//    console.log("Scroll !");
//  };

//le onclick n'est pas forc??ment recommend??

//le BUBLLING =>>>d??clenche un ??v??nement ?? la fin
// Bubbling => fin (de base l'eventlistener est param??tr?? en mode Bublbing on est pas dans l'obligation de mattre false)
document.addEventListener(
  "click",
  () => {
    console.log("click 1");
  },
  false
); //le false confirme le d??clenchement en Bubbling

// Usecapture==>>>se d??clenche imm??diatement
document.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
); //le true confirme le d??clenchement en Usecapture

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/


//on va voir des m??thode qui permettent de g??rer des ??v??nements



//-------------------------------------------------
// Stop propagation ??vite de d??clencher d'autres ??l??ments sur un click que l'on ne voulais pas forc??ment qui se d??clenche!!!!!!!
//  questionContainer.addEventListener("click", (e) => {//??vite qu'un ??v??nement en ??crase un autre!!!!
//    alert("Test !");
//    e.stopPropagation();//isole l'??v??nement du click et le garde uniquement pour cette fonction et n'enclenchera pas d'autre fonction ailleurs!!!
//  });



//on peut enlever un EventListener sur un ??l??ment avec removeEventListener
//ex:: au clic sur le boutton je voudrais que cet ??v??nement arr^t de se produire

// removeEventListener




//-------------------------------------------------



// ===========================================================================================================================================================================================================================================================
//                     BBB     OOO   M   M
//      /      /       B  B   O   O  MM MM
//     /      /        BBBB   O   O  M M M
//    /      /         B   B  O   O  M   M
//   /      /          B   B  O   O  M   M
//  /      /           BBBB    OOO   M   M
// ===========================================================================================================================================================================================================================================================
// * * * // BOM brother object model c'est objet window qui est au dessus de tout du dom etc........



//  console.log(window.innerHeight);//contenu du bom cette fonction permet de conna??tre la hauteur de notre fen??tre 
//  console.log(window.scrollY);


//  window.open("https://rigal34.github.io/teston/", "cours js", "height=600, width=800");//ouvre une nouvelle fen??tre de mon navigateur
// // window.close()

// Ev??nements adoss??s ?? Window
//  alert("hello");// s'??cris sans utliser window

// confirm
 btn2.addEventListener("click", () => {
   confirm("Voulez vous vraiment vous tromper ?");//envoie une alert avec un choix annul??
 });

// prompt
 btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");//permet de stocker ma r??ponse dans answer qui ??t?? tap?? dans mon prompt

   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";//cette partie m'affiche la r??ponse qui ??tait stock?? dans answer
 });                  // le += ??vite d'??cras?? ma r??ponse par rapport au autres m??me principe que la calculatrice dans calculator






// Timer, compte ?? rebours sert ?? d??clencher les chose ?? rebours
 setTimeout(() => {//1???2?????? une fonction qui va se jouer dans quelques milliseconde
   questionContainer.style.borderRadius = "300px";//et ?? la fin la fonction s'ex??cute3??????
 }, 2000);//temps en millisecondes avant de se d??clencher2???1??????



 //le setInterval
//  let interval = setInterval(() => {//2??????
//    document.body.innerHTML += `
//        <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//        </div>
//     `;
//  }, 4000);//1??????on dit toutes les millisecondes on va d??clenche ma fonction qui inject des bo??tes qui sont stock?? dans ma variable et ensuite qui va injecte ct innerHTML au body





//  document.body.addEventListener("click", (e) => {  // quand on click dessus n'import ou dans mon body on arr??te cet interval
//    e.target.remove();//permet d'enlev?? de retir?? l'??l??ment dans lequel je clic retir l'??l??ment du d??me
//     //console.log(e.target);//permet daffiche dans la console l'??l??ment cliqu??
//    clearInterval(interval);
//  });







// ============================================================================================================================================================================================================================================================================================
//                     L       OOO    CCC     A    TTTTT  III   OOO   N   N
//      /      /       L      O   O  C   C   A A     T     I   O   O  NN  N
//     /      /        L      O   O  C      A   A    T     I   O   O  N N N
//    /      /         L      O   O  C      AAAAA    T     I   O   O  N  NN
//   /      /          L      O   O  C   C  A   A    T     I   O   O  N   N
//  /      /           LLLLL   OOO    CCC   A   A    T    III   OOO   N   N
// ============================================================================================================================================================================================================================================================================================
// * * * // Location
//  console.log(location.href); // m'affiche dans la console le lien exate ou on est
//  console.log(location.host);//m'affiche dans la console le nom du site
//  console.log(location.pathname);//m'affiche dans la console l'??l??ment apr??s le host
//  console.log(location.search);//pour les php affiche le contenu de la recherche de l'utilisateur


 //location.replace("http://lequipe.fr");// le suite ou je suis par exemple au lancement de ma page il remplace ma page de mon navigateur actuel par le site qui est dans ma fonction
// sa redirige en faite vers un autre lien




//  window.onload = () => { //au chargement de ma page je voudrais que tu m'envois au href suivant
//    location.href = "http://twitter.fr";
//  };



// Navigator
 console.log(navigator.userAgent); //permet d'identifier notre navigateur Web et de savoir ou on a navig??

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition //ce lien contient des bouts de code pour la localisation de votre utilisateur

// je peux aussi me localiser mon site avec mon navigateur pour voir ce que donne mon site d"en d'autre pays pour cela j'utise chrome ,"molette crant??e","LOCATIONS",qui se situe dans la 

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
//   console.log(`La pr??cision est de ${crd.accuracy} m??tres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// =====================================================================================================================================================================================================================================================================================
//                     H   H  III   SSS   TTTTT   OOO   RRRR   Y   Y
//      /      /       H   H   I   S        T    O   O  R   R  Y   Y
//     /      /        HHHHH   I    SSS     T    O   O  R   R   Y Y
//    /      /         H   H   I       S    T    O   O  RRRR     Y
//   /      /          H   H   I       S    T    O   O  R  R     Y
//  /      /           H   H  III  SSSS     T     OOO   R   R    Y
// =====================================================================================================================================================================================================================================================================================
// * * * // History


 //console.log(history);//permet de consulter son historique
// window.history.back();//permet de revenir sur mon historique en arri??re
//  history.go(-9) // permet de revenir autant de page en arri??re que l'on souhaite en marquant le chiffre ou nombre de page compl??t?? du moins


//--------------------------------------------------------------------------------------


// ===================================================================================================================================================================================================================================================================================================================
//                 SSS   EEEEE  TTTTT       PPPP   RRRR    OOO   PPPP   EEEEE  RRRR   TTTTT  Y   Y
//      /      /  S      E        T         P   P  R   R  O   O  P   P  E      R   R    T    Y   Y
//     /      /    SSS   EEE      T         P   P  R   R  O   O  P   P  EEE    R   R    T     Y Y
//    /      /        S  E        T         PPPP   RRRR   O   O  PPPP   E      RRRR     T      Y
//   /      /         S  E        T         P      R  R   O   O  P      E      R  R     T      Y
//  /      /      SSSS   EEEEE    T         P      R   R   OOO   P      EEEEE  R   R    T      Y
// ===================================================================================================================================================================================================================================================================================================================
// * * * //SetProperty
//attention en javascript on ne peu pas s??lectionne un after
// const after = document.querySelector(".nav::after");
// console.log(after);  //r??sultat null ne marche pas!!!!!!!le s??lecteur de l'after ne fonctionne pas

window.addEventListener("mousemove", (e)=>{//quand la souris bouge je veux que tu me r??cup??re l'??v??nement de la souris ou est-ce qu"elle est quand on navigue
console.log(e);
nav.style.setProperty('--x', e.layerX + "px");//la variable que tu as qui s'appelle x je voudrais qu'elle prenne la valeur de e.layerX de la console pour que mon effet me suive en horizontal
nav.style.setProperty('--y', e.layerY + "px");// m??me principe mais cette fois pour mon axe vertical
});
//ce principe permet  de cr??er un s??lecteur qui permet de s??lectionner des ??l??ments difficiles en javascript