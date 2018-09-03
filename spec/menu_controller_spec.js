const MenuController = require('../controllers/MenuController'); 

//calling describe method, passing MenuController as the name of the test suite. Then pass a function defining the suite. 
describe('MenuController', () => {

	beforeEach(() => {
		this.menu = new MenuController(); 
	}); 

		it('should return string about learning', () => {
			expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit'); 
		});

		it('should return invalid input when default case', () => {
			expect('default').toBe('default'); 
		}); 

	}); 