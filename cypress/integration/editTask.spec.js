describe("Editing a Task",()=>{

    it("Editing a task",()=>{

        cy.visit("/")

        cy.get('[data-testid="edit-button-todo-0"]').
        click()

        cy.get('[data-testid="editing-input-todo-0"]').
        type("New edited task")

        cy.get('[data-testid="editing-save-button-todo-0"]').
        click()
        
        cy.contains("New edited task")

    })
})