const inquirer = require('inquirer'); 

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
		}
		]; 
	}

	addContact(name, phone) {
		return Contact.create({name, phone}) 
	}
}