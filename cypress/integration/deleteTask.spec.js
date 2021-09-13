describe("Deleting a task ",()=>{

    it("Displaying all task and also the one that needs to be deleted",()=>{


        cy.visit('/');

        cy.get('[data-testid="delete-button-todo-1"]').
        click()

        cy.get('[data-testid="todo-unordered-list"]').should('not.contain',"Deleteed Task" )
    })


}) 