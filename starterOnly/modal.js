function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Clic "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement formulaire (changement du display en block)
function launchModal() {
  modalBg.style.display = "block";
}

// Clic fermer formulaire via la croix

document.getElementById("closeform").addEventListener("click", function(closeModal) 
{
	modalBg.style.display = "none";
});

// Clic fermer formulaire via la croix

document.getElementById("closeform").addEventListener("click", function(closeModal) 
{
	modalBg.style.display = "none";
});





