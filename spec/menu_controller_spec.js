const MenuController = require('../controllers/MenuController'); 

//calling describe method, passing MenuController as the name of the test suite. Then pass a function defining the suite. 
describe('MenuController', () => {

	beforeEach(() => {
		this.menu = new MenuController(); 
	}); 

		it('should return 0 when no contacts are in the book', () => {
			expect(this.menu.getContactCount()).toBe(0); 
		});

		it('should return 1 when there is exactly 1 contact in the book', () => {
			this.menu.contacts.push('Bob'); 
			expect(this.menu.getContactCount()).toBe(1)	
		}); 
});