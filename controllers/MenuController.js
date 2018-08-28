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
				"getDate",
				"Exit"
			]
		}
	]; 
	this.contacts = []; 
	//this.getDate; 
	}
	

	main() {
		console.log('Welcome to AddressBook!');
		inquirer.prompt(this.mainMenuQuestions).then((response) => {
			switch(response.mainMenuChoice){
				case "Add new contact" :
					this.addContact(); 
					break; 
				case "getDate" : 
					this.getDate(); 
				case "Exit": 
					this.exit(); 
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
		this.clear(); 
		console.log('addContact called'); 
		this.main(); 
	}

	getDate() {
		console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); 
	}

	exit() {
		console.log("Thanks for using AddressBook!"); 
		process.exit(); 
	}
}