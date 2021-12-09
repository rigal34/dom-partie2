//LES SELECTEURS

//document.querySelector("h4").style.background= "yellow";

//const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";


//on va gérer les évènements sur le click!!!!!!!!!

//Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2"); //méthode plus performante
const response = document.querySelector("p");
console.log(response);

//questionContainer.style.borderRadius = "150px";//a savoir le - n'est pas pris en compte en JS

//La façon la plus populaire et qui est y recommandé pour ajouter un évènement....

// questionContainer.addEventListener("click", ()=> {
//     console.log("clic !");
// });  //addEventListener gére 2 paramétres 1) l'évènement en question , 2) et ensuite on a une fonction 


// questionContainer.addEventListener("click", ()=> {
//     // questionContainer.style.background = "red";
//     // questionContainer.style.border = "3px solid teal";

// });

// questionContainer.addEventListener("click", ()=> {
//     questionContainer.classList.add("question-clicked"); //ajouter cette class m'envoie un groupe de style et évite les répétions
    
//      });


     questionContainer.addEventListener("click", ()=> {
        questionContainer.classList.toggle("question-clicked"); //toggle évite de mettre un remove 
        
         });
  
         
 btn1.addEventListener("click", () =>{
  response.classList.add("show-response"); 
  response.style.background = "green";
    
 })    

 btn2.addEventListener("click", () =>{

response.classList.add("show-response");
response.style.background = "red";
 
 })        


//piorité en css <div> > #id > .class > baliseHTML








//FIN DU DOCUMENT
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------         


//tout les événement de la souris
//Mouse Events

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove",(e) => {
mousemove.style.left = e.pageX + "px"; //cette valeur est tiré du dome de ma console pageX je concaténe une unité en px pour que celle-ci fonxtionne sur mes axe horizontaux
mousemove.style.top = e.pageY + "px"; //cette valeur est tiré du dome de ma console pageY je concaténe une unité en px pour que celle-ci fonxtionne sur mes axe verticaux     

});

window.addEventListener("mousedown", () => { // j'ajoute un évènement à ma fenètre qui quand la souris est appuyée je fais une fonction
mousemove.style.transform = "scale(2) translate(-25%, -25%)" //j'injecte un style à mousemove qui transforme mon cercle en plus gros diamétre quand mon curseur est an bas
});     


window.addEventListener("mouseup", () => { // j'ajoute un évènement à ma fenètre qui quand la souris est relachée je fais une fonction
        mousemove.style.transform = "scale(1) translate(-50%, -50%)" //j'injecte un style à mousemove qui transforme mon cercle en position normal de son diamétre quand mon curseur est an haut
        mousemove.style.border = "2px solid teal";
        });     



//Quand la souris survole une zone ce n'est pas un hover

questionContainer.addEventListener("mouseenter", () => {//ajoute un évènement à questionContainer quand la souris arrive au-dessus de questionContainer la fonction se déclanche
questionContainer.style.background = "rgba(0,0,0,0.6)";

});


questionContainer.addEventListener("mouseout", () => {//cette c'est le contraire c'esty quand la  souris sort de la zonne de survole la fonction se déclenche

questionContainer.style.background = "pink";

});


// le mouse hover

response.addEventListener("mouseover", () => {  //j'ajout un évènement à "response" qui appartient à mon "p" dans le html
  
response.style.transform = "rotate(2deg)"; //j'injecte un style qui transforme mon texte de avec une rotation de 2° quand je le survole

})


//-----------------------------------------------------------------------------------------------------------------------------------------------

// événement touche clavier
//key press event
const keypressContainer = document.querySelector (".keypress");
const key = document.getElementById("key");

// on utilise directement document pour le pointer, quand on appuie sur une touche

//son pour appuie de touche
//fonction qui va sonner
const ring = () => {
        const audio = new Audio();// je fais référence à un objet de js qui est pour faire de l'audio "new Audio"
        audio.src ="./Enter.mp3";//je vais chercher mon fichier
        audio.play();//ceux-ci est un lecteur qui joue mon fichier que je suis allé cheché et ma fonction est appelée plus bas ring();
        };








document.addEventListener("keypress", (canard) => { // dans document j'ajoute un évènement keypress qui actionne ma fonction quand je click avec le clavier sur ma page document
key.textContent = canard.key; //à key j'injecte du textContent qui m'affiche les messages des lettres tapées sur mon clavier
if (canard.key === "j") {
keypressContainer.style.background = "pink";

}else if (canard.key === "h"){
keypressContainer.style.background = "teal";
}else{
keypressContainer.style.background ="red";
}


ring();

});
//il faut resté en dessous de 20lignes de code par évènement tapé


