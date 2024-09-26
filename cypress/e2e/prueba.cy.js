describe('Login', () => {
  it('Realizar Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button').click()
    cy.url().should('include','/dashboard/index')
  })

  it.only('Realizar Contratacion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button').click()
    cy.url().should('include','/dashboard/index')
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('[name="firstName"]').type('Camilo')
    cy.get('[name="middleName"]').type('Andres')
    cy.get('[name="lastName"]').type('Montaño')
    //cy.contains('.oxd-select-text-input','Payroll Administrator').click()
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('prueba@prueba.com')
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('3195255060')
    cy.get('.oxd-file-input').click({force: true})
    cy.get('.oxd-file-input').selectFile('cypress/fixtures/archivo-ejemplo.txt',{action:'drag-drop'})
  })
}),5000