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

const displayError = (element) => {
	element.style.display = "block";
	element.style.fontSize = "0.8rem";
	element.style.color = "red";
}
  
const hideError = (element) => {
	element.style.display = "none";
}

function firstNameCheck() {
	const firstName = document.getElementById("first").value;
	const errorFirstname = document.getElementById("error-firstname");
	if (firstName == "" || firstName.length < 2) {
    	displayError(errorFirstname);
    	return false;
  	} else {
    	hideError(errorFirstname);
		return true;
  	}
}

// Formulaire Nom

const lastNameCheck = () => {
	const lastName = document.getElementById("last").value;
	const errorLastname = document.getElementById("error-lastname");
	if (/^[a-zA-Z\-]{2,}$/.test(lastName)) {
		hideError(errorLastname);
		return true;
	} else {
		displayError(errorLastname);
		return false;
	}
}





