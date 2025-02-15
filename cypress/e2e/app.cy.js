// filepath: /C:/Users/Latitude 5490/Desktop/online-shopping-app/cypress/e2e/app.cy.test.js

describe('Online Shopping App - RecipeCard', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); // Asegúrate de que esta es la URL correcta de tu app
    });
  
    it('debe mostrar el título "Online Shopping" en la página principal', () => {
      cy.contains('h2', 'Online Shopping').should('be.visible');
    });
  
    it('debe mostrar la descripción correcta en la tarjeta de receta', () => {
      cy.contains('p', 'You can shopping anytime, anywhere that you want.').should('be.visible');
    });
  
    it('debe renderizar el botón "Shopping Now" y permitir interacción', () => {
      cy.get('button').contains('Shopping Now').should('be.visible').click();
      // Aquí puedes agregar validaciones adicionales si el botón lleva a otra página o cambia algo en la UI
    });
  
    it('debe mostrar la imagen con el alt "Online Shopping"', () => {
      cy.get('img[alt="Online Shopping"]').should('be.visible');
    }); 
  
  }); 
  