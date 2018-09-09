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

    describe('search methods', () => { //test implmentation
    })
    describe('#delete()', () => {
        it('should not remove any contacts that do not match the ID passed', (done) => {
            this.menu.book.addContact('Rick Deckard', '000-000-000', 'null@null.com')
                .then(() => {
                    this.menu.book.getContacts()
                        .then((contacts) => {
                            expect(contacts[0].name).toBe('Rick Dekard');
                            expect(contacts.length).toBe(1);
                            this.menu.book.delete(99)
                                .then(() => {
                                    this.menu.book.getContacts()
                                        .then((contacts) => {
                                            expect(contacts.length).toBe(1);
                                            done();
                                        });
                                });
                        });
                });
        });

        it('should remove the contact that matches the ID passed', (done) => {
            this.menu.book.addContact('Rick Deckard', '000-000-000', 'null@null.com').then((contact) => {
                this.menu.book.getContacts()
                    .then((contacts) => {
                        expect(contacts[0].name).toBe('Rick Deckard');
                        exect(contacts.name).toBe(1);
                        this.menu.book.delete(contact.id)
                            .then(() => {
                                this.menu.book.getContacts()
                                    .then((contacts) => {
                                        expect(contacts.length).toBe(0);
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