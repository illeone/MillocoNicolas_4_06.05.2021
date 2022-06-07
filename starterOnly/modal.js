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
const thankBg = document.querySelector(".bground-thank");

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

// document.getElementById("closeform").addEventListener("click", function(closeModal) 
// {
// 	modalBg.style.display = "none";
// });

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

// Formulaire email

const emailCheck = () => {
	const eMail = document.getElementById("email").value;
	const errorMail = document.getElementById("error-mail");
	if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(eMail) == false) {
		displayError(errorMail);
		return false;
	} else {
		hideError(errorMail);
		return true;
	}
}

// Formulaire anniversaire

const birthdateCheck = () => {
	const birthDate = document.getElementById("birthdate").value;
	const errorBirthdate = document.getElementById("error-birthdate");
	if (birthDate == "") {
		displayError(errorBirthdate);
		return false;
	} else {
		hideError(errorBirthdate);
		return true;
	}
}

// Formulaire participations

const participationCheck = () => {
	const numberOfParticipation = document.getElementById("quantity").value;
	const errorquantity = document.getElementById("error-quantity");
	if (/^([0-9])$/.test(numberOfParticipation) == false) {
		displayError(errorquantity);
		return false;
	} else {
		hideError(errorquantity);
		return true;
	}
}

const locationCheck = () => {
	const locations = document.querySelectorAll("input[type=radio]:checked");
	const errorlocations = document.getElementById("error-locations");
		if (locations.length) {
			hideError(errorlocations);
			return true;
		} else {
			displayError(errorlocations);
			return false;
		}
}

// Formulaire conditions générales

const cguCheck = () => {
	const isCguAccepted = document.getElementById("checkbox1");
	const errorcgu = document.getElementById("error-cgu");
	if (!isCguAccepted.checked) {
		displayError(errorcgu);
		return false;
	} else {
		hideError(errorcgu);
		return true;
	}
}

function validate(e) {
	e.preventDefault();
	
	let isValidFirstName = firstNameCheck() //true
	let isValidLastName = lastNameCheck() //false
	let isValidEmail = emailCheck()
	let isValidBirth = birthdateCheck()
	let isValidParticipation = participationCheck()
	let isValidLocaton = locationCheck()
	let isValidCgu = cguCheck()

	if (isValidFirstName && isValidLastName && isValidEmail && isValidBirth && isValidParticipation && isValidLocaton && isValidCgu){
		document.querySelector("form").reset();
		modalBg.style.display = "none";
		thankBg.style.display = "block";
	}
}

// mise en application de la fonction validate au submit
document.querySelector("#form").addEventListener("submit",validate)


// fermer remerciement via "fermer"
document.querySelector(".button-thank").addEventListener("click", function(closeThank) {
	clear();
});

// fermer remerciement via croix
document.getElementById("closethanks").addEventListener("click", clear)

