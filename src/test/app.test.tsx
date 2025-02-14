import { describe, it, expect } from 'vitest'; // Importación de Vitest
import { render, fireEvent } from '@testing-library/react'; // Importación de Testing Library
import RecipeCard from './../components/ui/card'; // Ajusta la ruta si es necesario
import '@testing-library/jest-dom'; // Para funcionalidades extendidas de assertions

// Tests para RecipeCard
describe('Testing de RecipeCard', () => {
  it('Debe renderizarse correctamente', () => {
    const { baseElement } = render(<RecipeCard />);
    expect(baseElement).toMatchSnapshot(); // Asegurarse de que el componente coincide con el snapshot
  });

  it('Debe contener la imagen con el alt "Online Shopping"', () => {
    const { getByAltText } = render(<RecipeCard />);
    const image = getByAltText(/Online Shopping/i); // Buscar por el texto "Online Shopping" en el alt
    expect(image).toBeInTheDocument(); // Verificar que la imagen está presente
    expect(image.tagName).toBe('IMG'); // Confirmar que es un elemento <img>
  });

  it('Debe renderizar el título "Online Shopping"', () => {
    const { getByText } = render(<RecipeCard />);
    expect(getByText(/Online Shopping/i)).toBeInTheDocument(); // Verificar que el título se renderiza
  });

  it('Debe renderizar la descripción correcta', () => {
    const { getByText } = render(<RecipeCard />);
    expect(
      getByText(/You can shop anytime, anywhere that you want./i) // Actualizar el texto según el componente
    ).toBeInTheDocument();
  });

  it('Debe contener un botón con el texto "Shop Now"', () => {
    const { getByText } = render(<RecipeCard />);
    const button = getByText(/Shop Now/i); // Buscar el botón "Shop Now"
    expect(button).toBeInTheDocument(); // Verificar que está presente
    expect(button.tagName).toBe('BUTTON'); // Confirmar que es un botón
  });

  it('El botón debe ser interactivo', () => {
    const { getByText } = render(<RecipeCard />);
    const button = getByText(/Shop Now/i);

    fireEvent.click(button); // Simular un clic en el botón

    // Verificar que el botón es interactivo (habilitado)
    expect(button).toBeEnabled();
  });
});
