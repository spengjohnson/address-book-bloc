const inquirer = require('inquirer'); 
const Contact = require('../db/models').Contact; 

module.exports = class ContactController {
	constructor(){
		this.contacts= []; 
		this.addContactQuestions = [
		{
			type: "input", 
			name: "name", 
			message: "Contact's name - ", 
			validate(val) {
				return val !== ""; 
			}
		}, 
		{
			type: "input", 
			name: "phone", 
			message: "Contact's phone number - ", 
			validate(val) { //runs after the question is answered. If method returns False, question is asked again.
				return val !== ""; //checking to make sure it isn't an empty string (would tell us no answer was given)
			}
		}, 
		{
			type: "input", 
			name: "email", 
			message: "Contact's email - ", 
			validate(val) {
				return val !== ""; 
			}
		}

		]; 
	}
	addContact(name, phone, email) {
		return Contact.create({name, phone, email});  
	}; 

	getContacts() {
		return Contact.findAll(); 
	}

	iterativeSearch(contacts,target) {
		binarySearch(contacts,target) {
			let min = 0; 
			let max = contacts.length -1; 
			let mid; 

			while(min <= max) {
				mid= Math.floor((min + max)/2); 
				let currentContact = contacts[mid]; 

			if(currentContact.name > target) {
				max = mid-1; 
			} else if(currentCotnact.name < target) {
				min= mid -1; 
			} else {
				return contacts[mid]; 
			}
			}

			return null; 
		}
	}

	search(name) {
		return Contact.findOne({
			where: {name}
		}); 
	}
}