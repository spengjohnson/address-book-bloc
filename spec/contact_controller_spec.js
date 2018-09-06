const ContactController = require('../controllers/ContactController'); 
const sequelize = require('../db/models/index').sequelize; 

describe('ContactController', () => {

	beforeEach((done) => {
		this.book = new ContactController(); 

		sequelize.sync({force: true}).then((result) => {
			done(); 
		})
		.catch((err) => {
			done(); 
		}); 
	}); 

describe('#addContact()', () => {
	it('should add a single contact into the book', (done) => {
		this.book.addContact('Alice', '001-101-1010', 'alice@gmail.com')
		.then((contact) => {
			expect(contact.name).toBe('Alice'); 
			expect(contact.phone).toBe('001-101-1010'); 
			expect(contact.email).toBe('alice@gmail.com'); 
			done(); 
		})
		.catch((err) => { 
			done(); 
		}); 
	});
}); 

	it('should be defined', () => {
		expect(ContactController).toBeDefined(); 
	});

	describe('#getContacts()', () => {
		it('should return an empty array when no contacts are available', (done) => {
			this.book.getContacts()
			.then((contacts) => {
				expect(contacts.length).toBe(0); 
				done(); 
			})
			.catch((err) => {
				console.log(err); 
				done(); 
			}); 
		}); 

		it('should return an array of contacts when contacts are available', (done) => {
			this.book.addContact('Alice', '001-101-1010', 'alice@gmail.com')
			.then(() => {
				this.book.getContacts()
				.then((contacts) => {
					expect(contacts.length).toBe(1); 
					done(); 
				}); 
			})
			.catch((err) => {
				console.log(err); 
				done(); 
			}); 
		}); 
	}); 
	
	describe('search methods', () => {

		const zelda = ['Zelda Smith', '000-100-111', 'zelda@nintendo.com']; 
		const snake = ['Solid Snake', '100-100-100', 'snake@konami.com']; 
		const magus = ['Magus Johnson', '101-010-101', 'magus@squaresoft.com']; 
		const alloy = ['Alloy Rodriguez', '111-111-111', 'allow@guerilla-games.com']; 

		describe('#iterativeSearch()', () => {

			}); 

		describe('#binarySearch()', () => {
			function sort(contacts) {
				return contacts.sort((a,b) => {
					if(a.name > b.name) return 1; 
					else if (a.name < b.name) return -1; 
					else return 0; 
				}); 
			}
		})

		describe('#search()', () => {
			it('should return null when a contact was not found', (done) => {
				this.book.addContact(...zelda).then(() => {
					this.book.search('Solid Snake').then((contact) => {
						expect(contact).toBeNull(); 
						done(); 
					})
					.catch((err) => {
						console.log(err); 
						done(); 
					}); 
				}); 
			}); 
		

		it('should return null when called with an empty array', () => {
			expect(this.book.binarySearch([], 'Alloy Rodriguez')).toBeNull(); 

		}); 

		it('should return null when contact is not found', (done) => {
			this.book.addContact(...zelda)
			.then(() => {
				this.book.getContacts()
				.then((contacts) => {
					expect(this.book.iterativeSearch(contacts, 'Alloy Rodriguez')).toBeNull(); 
					done(); 
				})
				.catch((err) => {
					console.log(err); 
					done(); 
				}); 
			}); 
		});

		it('should return the contact when found', (done) => {
			this.book.addContact(...snake).then(() => {
				this.book.search('Solid Snake').then((contact) => {
					expect(contact).not.toBeNull(); 
					expect(contact.name).toBe('Solid Snake'); 
					expect(contact.phone).toBe('100-100-100'); 
					expect(contact.email).toBe('snake@konami.com'); 
					done(); 
				})
				.catch((err) => {
					console.log(err); 
					done(); 
				}); 
			}); 
		}); 

		it('should return contact if found', (done) => {
			this.book.addContact(...alloy).then(() => {
				this.book.addContact(...magus).then(() => {
					this.book.addContact(...zelda).then(() => {
						this.book.addContact(...snake).then(() => {
							this.book.getContacts().then((contacts) => {
								let contact = this.book.iterativeSearch(contacts, "Magus Johnson"); 
								expect(contact.name).toBe("Magus Johnson"); 
								expect(contact.phone).toBe("101-010-101"); 
								expect(contact.email).toBe("magus@squaresoft.com"); 
								done(); 
								})
								.catch((err) => {
									console.log(err); 
									done(); 
								}); 
							});		
					}); 
				
				}); 
			}); 
		}); 
	
	}); 
	

	});

});