/// <reference types="cypress" />

describe('Home', () => {
  
	beforeEach(() => {
		cy.visit('http://localhost:19006/')
	})

	it('Render Home', () => {
		cy.wait(1000).then(()=>{
			cy.get('[data-testid="home"]').should('exist');
		})
	})

	it('Loading Movies', () => {
		cy.wait(1000).then(()=>{
			cy.get('[data-testid="movies-list > *"]').should('have.length', 0)
			cy.wait(2000);
			cy.get('[data-testid=movies-list] > *').should('have.length.greaterThan', 0)
		})
	})
})
