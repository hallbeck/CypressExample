import config from './api_config.json'

describe('API Testing with Cypress', () => {
    beforeEach(() => {
        cy.request({url: `${config.POKEMON_BASE_URL+25}`,}).as('pikachu');
    });
 
    it('Validate the header', () => {
        cy.get('@pikachu')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@pikachu')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the pokemon\'s name', () => {
        cy.get('@pikachu')
            .its('body')
            .should('include', { name: 'pikachu' });
        cy.get('@pikachu').then((response)=> {
                cy.log(JSON.stringify(response.body.name))
               })
    });
 });
 