const inquirer = require('inquirer'); 
const MenuController = require('./controllers/MenuController'); 
const menu = new MenuController(); 
const moment = require('moment'); 

menu.clear(); 
menu.main(); 
menu.getDate(); 

