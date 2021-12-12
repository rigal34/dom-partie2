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
  if (e.key === "z") ring(e.key); // si mon fichier e.key est égal à z alors fait moi la suite
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //je donne un évènement à ma fenêtre pour exécuté un scroll dans une fonction
  console.log(window.scrollY); //permet de chercher la valeur de mon scroll dans le navigateur en px
  if (window.scrollY > 120) {
    // si dans la fenêtre de window au scroll je suis supérieur à 120px tu cible nav pour injecter un style top 0 qui fera apparaitre ma nav qui était à -50px
    nav.style.top = 0;
  } else {
    //sinon si elle est inf à 120px ma nav disparaît
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
// Form Events évènement sur les formulaires
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
  //événement pour un input s'appelle dans js "input" et quand je click dans input je déclenche une fonction
  console.log(e.target.value); //permet de savoir dans la console ce qui à était tapé dans input
  pseudo = e.target.value; //permet de recuper ce qui est tapé dans input pour le stocké dans let pseudo
  console.log(pseudo);
});

form.addEventListener("submit", (e) => {
  //l'événement pour un form est soumettre valider
  e.preventDefault(); //cette méthode à notre évènement évite de changer de page à notre navigateur cela annule ce changement de page,permet de travailler tranquille avec notre formulaire
  console.log(cgv.checked);
  if (cgv.checked) {
    //on à pas besoin de déclarer une variable pour une checkbox javascript les reconnaîs id pareil pour les bouttons même principe
    // si c'est checked on va aller chercher cette balise div d'une façon différent pour montrer un exemple
    //on va chercher l'enfant de form div pour injecter h3 et h4 en utilisant innerHML
    // si c'est valider tu m'affiche ce qui est en dessous
    document.querySelector("form > div").innerHTML = `  
<h3>Pseudo : ${pseudo}</h3>
<h4>Langage préféré : ${language}</h4>
`;
  } else {
    alert("Veuillez accepter les CVG");
  }
});
//------------------------------------------------
// Load event evénement de chargement
// load envent se déclenche une fois que toute la page est chargée
window.addEventListener("load", () => {
  // je veux que tu me fasses sa une fois que le document est chargé évite d'avoir des problémes de performance
  console.log("Document Chargé");
});

//-------quand on plusieurs éléments de la même class ou plusieurs éléments qui s'appelle pareil
//cela évite de créer une variable pour chaqu'un

// ForEach ==>>>pour chacun d'eux on donnera tel logique
//const boxes = document.getElementsByClassName("box"); // je select plusieurs class mais pose souvent des problémes
const boxes = document.querySelectorAll(".box"); //selectionne toute les classes .box
// boxes.addEventListener("click", () =>{  //on ne peut pas mettre un addEventListener sur 3 éléments comme cela pour cela que l'on utlise ForEach
console.log(boxes);
// })

boxes.forEach((box) => {
  //le paramétre ici est trés important, c'est comment je vais les appeler individuellement pour chaqu'une d'elle
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
// addEventListener Vs onclick et une façon ancienne de faire des évènements cela remplace le addEventListener
//  document.body.onclick = function() {
//    console.log("Scroll !");
//  };

//le onclick n'est pas forcément recommendé

//le BUBLLING =>>>déclenche un évènement à la fin
// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing on est pas dans l'obligation de mattre false)
document.addEventListener(
  "click",
  () => {
    console.log("click 1");
  },
  false
); //le false confirme le déclenchement en Bubbling

// Usecapture==>>>se déclenche immédiatement
document.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
); //le true confirme le déclenchement en Usecapture

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/


//on va voir des méthode qui permettent de gérer des évènements



//-------------------------------------------------
// Stop propagation évite de déclencher d'autres éléments sur un click que l'on ne voulais pas forcément qui se déclenche!!!!!!!
//  questionContainer.addEventListener("click", (e) => {//évite qu'un évènement en écrase un autre!!!!
//    alert("Test !");
//    e.stopPropagation();//isole l'évènement du click et le garde uniquement pour cette fonction et n'enclenchera pas d'autre fonction ailleurs!!!
//  });



//on peut enlever un EventListener sur un élément avec removeEventListener
//ex:: au clic sur le boutton je voudrais que cet évènement arr^t de se produire

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



//  console.log(window.innerHeight);//contenu du bom cette fonction permet de connaître la hauteur de notre fenêtre 
//  console.log(window.scrollY);


//  window.open("https://rigal34.github.io/teston/", "cours js", "height=600, width=800");//ouvre une nouvelle fenêtre de mon navigateur
// // window.close()

// Evénements adossés à Window
//  alert("hello");// s'écris sans utliser window

// confirm
 btn2.addEventListener("click", () => {
   confirm("Voulez vous vraiment vous tromper ?");//envoie une alert avec un choix annulé
 });

// prompt
 btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");//permet de stocker ma réponse dans answer qui été tapé dans mon prompt

   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";//cette partie m'affiche la réponse qui était stocké dans answer
 });                  // le += évite d'écrasé ma réponse par rapport au autres même principe que la calculatrice dans calculator






// Timer, compte à rebours sert à déclencher les chose à rebours
 setTimeout(() => {//1️2️⃣ une fonction qui va se jouer dans quelques milliseconde
   questionContainer.style.borderRadius = "300px";//et à la fin la fonction s'exécute3️⃣
 }, 2000);//temps en millisecondes avant de se déclencher2️1️⃣



 //le setInterval
//  let interval = setInterval(() => {//2️⃣
//    document.body.innerHTML += `
//        <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//        </div>
//     `;
//  }, 4000);//1️⃣on dit toutes les millisecondes on va déclenche ma fonction qui inject des boîtes qui sont stocké dans ma variable et ensuite qui va injecte ct innerHTML au body





//  document.body.addEventListener("click", (e) => {  // quand on click dessus n'import ou dans mon body on arrête cet interval
//    e.target.remove();//permet d'enlevé de retiré l'élément dans lequel je clic retir l'élément du dôme
//     //console.log(e.target);//permet daffiche dans la console l'élément cliqué
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
//  console.log(location.pathname);//m'affiche dans la console l'élément aprés le host
//  console.log(location.search);//pour les php affiche le contenu de la recherche de l'utilisateur


 //location.replace("http://lequipe.fr");// le suite ou je suis par exemple au lancement de ma page il remplace ma page de mon navigateur actuel par le site qui est dans ma fonction
// sa redirige en faite vers un autre lien




//  window.onload = () => { //au chargement de ma page je voudrais que tu m'envois au href suivant
//    location.href = "http://twitter.fr";
//  };



// Navigator
 console.log(navigator.userAgent); //permet d'identifier notre navigateur Web et de savoir ou on a navigé

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition //ce lien contient des bouts de code pour la localisation de votre utilisateur

// je peux aussi me localiser mon site avec mon navigateur pour voir ce que donne mon site d"en d'autre pays pour cela j'utise chrome ,"molette crantée","LOCATIONS",qui se situe dans la 

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
// window.history.back();//permet de revenir sur mon historique en arriére
//  history.go(-9) // permet de revenir autant de page en arriére que l'on souhaite en marquant le chiffre ou nombre de page complété du moins


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
//attention en javascript on ne peu pas sélectionne un after
// const after = document.querySelector(".nav::after");
// console.log(after);  //résultat null ne marche pas!!!!!!!le sélecteur de l'after ne fonctionne pas

window.addEventListener("mousemove", (e)=>{//quand la souris bouge je veux que tu me récupère l'évènement de la souris ou est-ce qu"elle est quand on navigue
console.log(e);
nav.style.setProperty('--x', e.layerX + "px");//la variable que tu as qui s'appelle x je voudrais qu'elle prenne la valeur de e.layerX de la console pour que mon effet me suive en horizontal
nav.style.setProperty('--y', e.layerY + "px");// même principe mais cette fois pour mon axe vertical
});
//ce principe permet  de créer un sélecteur qui permet de sélectionner des éléments difficiles en javascript