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


