// Projet : Jeu de Paires  

// Objectif : Créer un jeu de carte appelé jeu de paires , le concept est qu'il y a un plateau de jeu , ou sont disposé 6 cartes , en 3x2 , face retourner . le but du jeu est que le joueur a le choix de cliquer sur 2 cartes, elles se retournent , si les 2 cartes sont identiques , elles disparaissent du plateau , sinon , elles se remettent face retourner . Le jeu se finis quand le joueur à reussis à retrouver toutes les cartes identiques .

// Consignes sur le dossier :
// - Créer un fichier que vous nommerez : jeu_paires_nom_prenom , et créer un repo github sous le même nom
// - Créer une structure du dossier correcte pour le projet  
// - Inclure à votre projet 3 images qui vous servirons de cartes pour le jeu ( donc il y aura 2 exemplaires pour chaque carte (image) sur le plateau ) , et une image comme dos de cartes . 
// - Créer évidement un fichier html et js 
// - Vous êtes assez libre sur le style , vous pouvez utiliser les classes Bootstrap , du Sass 

// Consigne sur le jeu : 
// - Créer une interface "tableau des scores" où on verra un tableau comportant la liste des joueurs ( pseudo + score en temps) . En bas du tableau il y aura un bouton qui permet au joueur de lancer la partie
// - Avant chaque jeu , le joueur peut inscrire son pseudo avant de lancer sa partie 
// - Après que le joueur a mis son pseudo et a appuyer sur le bouton pour lancer la partie , le tableau disparait et le plateau de jeu contenant les cartes apparait .
// - Au lancement de la partie un chrono se lance comptant le temps que le joueur à fait pour finir le jeu
// - Au lancement de la partie les cartes sont faces retournées et sont disposées à chaque début de partie de façon aléatoire
// - Le joueur a la possibilité de cliquer sur 2 cartes au choix à la fois , après quoi elles se retournent . ( vous connaissez les règles )
// - Quand le joueur a fini sa partie , inscris son score sur le tableau des scores et affiche l'interface pour pouvoir relancer la partie

// Les petits +  (Bonus):
// - Ajouter un système d'aide : si après 2 essaie , ils n'arrivent pas à trouver 2 cartes identiques , au 4ème essaie , après avoir cliquez sur une première carte , indique (avec un border rouge par exemple) la carte qui est identique .
// - Si vous avez réussis à faire avec 3 images , vous pouvez essayez avec 4 .
// - Si vous avez réussis a les faire  avec 3 images et 4 images , créer 2 modes de jeu à l'utilisateur , normal et difficile . Sur le tableau des scores , une nouvelle colonne sera la pour détérminer quel genre de mode le joueur à réussis le jeu (avec son pseudo et son score bien sûr).
// - Si vous avez complétement finis , n'hésitez pas à rajouter du style , et soyez fier de vous.



// //Start the timer
// document.addEventListener('click', () => {
//   setInterval(myTimer, 1000);
// }, { once: true });





// // TIMER
// let min = 0;
// let sec = 0;

// function myTimer() {
//   timer.innerHTML = min + " : " + sec + " ";
//   sec++;
//   if (sec >= 60) {
//     sec = 0;
//     min++;
//   }
// }

// let rename = document.getElementById("inputRename")
// let buttonExo = document.getElementsByClassName("buttonExo")[0]
// let listeJoueur = document.getElementsByClassName("listeJoueur")[0]
// let section2 = document.getElementsByClassName("section2")[0]
// let card = document.querySelectorAll(".card")

// console.log(card);

// console.log(section2);
// console.log(rename.value);

// buttonExo.addEventListener("click", () => {
//   let newPseudo = rename.value;
//   console.log(newPseudo);
//   if (newPseudo == "") {
//     alert("veuillez ne pas laisser le champs vide")
//   } else {
//     let textNode = document.createTextNode(newPseudo);
//     listeJoueur.textContent = ""
//     listeJoueur.appendChild(textNode);
//     rename.value = "";
//     section2.style.display = "flex"
//     setInterval(myTimer, 1000);
//   }
// });




// card.forEach(card => {
//     card.addEventListener('click', function handleClick(event) {
//       console.log('card clicked', event);

//       card.setAttribute('style', 'background-color: yellow;');
//     });
//   });

// let cards = ["./public/img/cra.png","./public/img/ecaflip.png","./public/img/iop.png","./public/img/iop.png","./public/img/ecaflip.png","./public/img/cra.png"]
// let cra = "./public/img/cra.png"

// console.log(cards);
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// shuffle(cards);
// console.log(card);
const btns = document.querySelectorAll('button');
const replayButton = document.getElementById("replayButton")
console.log(replayButton);
replayButton.addEventListener("click", ()=>{
  location.reload()
})

console.log(btns);
let youWin = document.getElementById("youWin")
console.log(youWin);
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
let header = document.querySelector("header")
console.log(header);
let dropdown1 = document.getElementById("dropdown1")
console.log(dropdown1);
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  const btnTheme = document.getElementsByClassName("btnTheme")[0]
  const themeBtn1 = document.getElementsByClassName("themeBtn1")[0]
  const themeBtn2 = document.getElementsByClassName("themeBtn2")[0]
  const themeBtn3 = document.getElementsByClassName("themeBtn3")[0]
  const body = document.querySelector("body")
console.log(btnTheme);
themeBtn2.addEventListener("click",()=>{
  body.style.background = "url(./public/img/crafond.jpeg)";
  body.style.backgroundSize = "cover";
  header.style.background = "green"
  for (const button of btns) {
    button.addEventListener('click', function() {
      console.log(this.value);
    });
  
    button.style.background = "green";
  }

})
themeBtn1.addEventListener("click",()=>{
  body.style.background = "url(./public/img/crafond.jpeg)";
  body.style.backgroundSize = "cover";
  header.style.background = "red"
  for (const button of btns) {
    button.addEventListener('click', function() {
      console.log(this.value);
    });
  
    button.style.background = "red";
  }

})
themeBtn3.addEventListener("click",()=>{
  body.style.background = "url(./public/img/crafond.jpeg)";
  body.style.backgroundSize = "cover";
  header.style.background = "blue"
  for (const button of btns) {
    button.addEventListener('click', function() {
      console.log(this.value);
    });
  
    button.style.background = "blue";
  }


})
let buttonExo2 = document.getElementsByClassName("buttonExo2")[0];
let buttonExo3 = document.getElementsByClassName("buttonExo3")[0];


window.onload = function () {
  let timer = document.getElementById("timer");
  let rename = document.getElementById("inputRename");
  let buttonExo = document.getElementsByClassName("buttonExo")[0];
  let listeJoueur = document.getElementsByClassName("listeJoueur")[0];
  let section2 = document.getElementsByClassName("section2")[0];
  let cardElements = document.querySelectorAll(".card");
  let cards = ["./public/img/cra.png", "./public/img/ecaflip.png", "./public/img/iop.png", "./public/img/iop.png", "./public/img/ecaflip.png", "./public/img/cra.png"];
  let flippedCards = [];
  let min = 0;
  let sec = 0;
  let interval;
  const inputPseudo = document.getElementsByClassName("inputPseudo")[0]
  const scoreboard = document.getElementById("scoreboard")
  // const btnTheme = document.getElementsByClassName("btnTheme")[0]
  // const themeBtn1 = document.getElementsByClassName("themeBtn1")[0]
  // const themeBtn2 = document.getElementsByClassName("themeBtn2")[0]
  // const themeBtn3 = document.getElementsByClassName("themeBtn3")[0]
  // FONCTION MELANGER
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // FONCTION TIMER
  function timerDisplay() {
    timer.innerHTML = `${min} : ${sec} `;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
  }

  // LANCé LA PARTIE
  buttonExo.addEventListener("click", () => {
    let newPseudo = rename.value;
    if (newPseudo == "") {
      alert("veuillez ne pas laisser le champs vide")
    } else {
      let textNode = document.createTextNode(newPseudo);
      listeJoueur.textContent = "";
      listeJoueur.appendChild(textNode);
      rename.value = "";
      inputPseudo.style.display = "none"
      section2.style.display = "flex";
      scoreboard.style.width= "200px";
      // body.style.background = "url(/public/img/fond2.jpeg)";
      body.style.backgroundSize = "cover";
      dropdown1.style.display= "flex"

      interval = setInterval(timerDisplay, 1000);
    }
  });
  

  let matchedPairs = 0;

  // RETOURNER CARTE FONCTION
  function flipCard(cardElement) {
    if (cardElement.classList.contains("flipped")) {
      return;
    }

    cardElement.classList.add("flipped");
    let cardImage = cardElement.querySelector("img");
    cardImage.src = cardElement.getAttribute("data-image");
    flippedCards.push(cardElement);

    if (flippedCards.length === 2) {
      if (flippedCards[0].getAttribute("data-image") !== flippedCards[1].getAttribute("data-image")) {
        setTimeout(function () {
          flippedCards.forEach(card => {
            card.classList.remove("flipped");
            card.querySelector("img").src = "./public/img/verso.png";
          });
          flippedCards = [];
        }, 1000);
      } else {
        matchedPairs++;
        flippedCards = [];

        // si toutes les pairs sont trouvés 
        if (matchedPairs === cards.length / 2) {
          clearInterval(interval); // arret du timer
          youWin.style.display = "flex"
          section2.style.display= "none"
        }
      }
    }
  }


  shuffle(cards);
  for (let i = 0; i < cardElements.length; i++) {
    let cardImage = cardElements[i].querySelector("img");
    cardImage.src = "./public/img/verso.png";
    cardElements[i].setAttribute("data-image", cards[i]);
  }


  cardElements.forEach(card => {
    card.addEventListener('click', function handleClick(event) {
      flipCard(card);
    });
  });
}

var myMusic= document.getElementById("music");

function play() {

myMusic.play();

}



function pause() {

myMusic.pause();

}


