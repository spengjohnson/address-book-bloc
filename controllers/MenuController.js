const ContactController = require('./ContactController'); 
const inquirer = require('inquirer'); 
const moment = require('moment'); 

module.exports = class MenuController {
	constructor() {
		this.mainMenuQuestions = [
		{
			type: "list", 
			name: "mainMenuChoice", 
			message: "Please choose from an option below: ", 
			choices: [
				"Add new contact", 
				"View all contacts", 
				"getDate", 
				"remindMe",
				"Exit"
			]
		}
	]; 
	this.book = new ContactController(); 
	}
	

	main() {
		console.log('Welcome to AddressBook!');
		inquirer.prompt(this.mainMenuQuestions).then((response) => {
			switch(response.mainMenuChoice){
				case "Add new contact" :
					this.addContact(); 
					break; 
				case "View all contacts" :
					this.getContacts(); 
					break; 
				case "getDate" : 
					this.getDate(); 
					break; 
				case "Exit": 
					this.exit(); 
				case "remindMe" : 
					this.remindMe(); 
					break; 
				default: 
					console.log("Invalid input"); 
					this.main(); 
			}
		}) 
		.catch((err) => {
			console.log(err); 
		}); 
	}

	clear() {
		console.log('\x1Bc'); 
	}

	addContact() {
		inquirer.prompt(this.book.addContactQuestions).then((answers) => {
			this.book.addContact(answers.name, answers.phone).then((contact) => {
				console.log('Contact added successfully!'); 
				this.main(); 
			}).catch((err) => {
				console.log(err); 
				this.main(); 
			}); 
		}); 
		this.main(); 
	}


	getDate() {
		console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); 
	}

	exit() {
		console.log("Thanks for using AddressBook!"); 
		process.exit(); 
	}

	getContactCount() {
		return this.contacts.length; 
	}

	remindMe() {
		//return a string 
		var learningString = 'Learning is a life-long pursuit'; 
		console.log(learningString); 
		return learningString; 		
	}

	getContacts() {
		this.clear(); 

		this.book.getContacts().then((contacts) => {
			for (let contact of contacts) {
				console.log(
					`name: ${contact.name}
					phone number: ${contact.phone}
					email: ${contact.email}
					--------------------`
					); 
			}
			this.main(); 
		}).catch((err) => {
			console.log(err); 
			this.main(); 
		}); 
	}
}
