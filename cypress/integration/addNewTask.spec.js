describe('Adding a new task', () => {
    it('Displays the remaining task in the list', () => {
      cy.visit('/');
  
      cy.get('[id="new-todo-input"]')
        .type('Enter Your New Task');
  
      cy.get('[id="form-button"]')
        .click();
  
      cy.get('[id="new-todo-input"]')
        .should('have.value', '');
    });
  });