import { describe, it, expect } from 'vitest'; // Asegúrate de importar expect
import { render, fireEvent } from '@testing-library/react';
import RecipeCard from './../components/ui/card'; // Ajusta la ruta si es necesario
import '@testing-library/jest-dom'; // Asegúrate de importar jest-dom para las funciones extendidas

// Tests para RecipeCard
describe('Testing de RecipeCard', () => {
  it('Debe renderizarse correctamente', () => {
    const { baseElement } = render(<RecipeCard />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Debe contener la imagen con el alt "Online Shopping"', () => {
    const { getByAltText } = render(<RecipeCard />);
    const image = getByAltText(/Online Shopping/i);
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
  });

  it('Debe renderizar el título "Online Shopping"', () => {
    const { getByText } = render(<RecipeCard />);
    expect(getByText(/Online Shopping/i)).toBeInTheDocument();
  });

  it('Debe renderizar la descripción correcta', () => {
    const { getByText } = render(<RecipeCard />);
    expect(getByText(/You can shopping anytime, anywhere that you want./i)).toBeInTheDocument();
  });

  it('Debe contener un botón con el texto "Shop Now"', () => {
    const { getByText } = render(<RecipeCard />);
    const button = getByText(/Shop Now/i);
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('El botón debe ser interactivo', () => {
    const { getByText } = render(<RecipeCard />);
    const button = getByText(/Shop Now/i);

    fireEvent.click(button);

    // No hay funcionalidad específica para validar, pero podemos asegurarnos de que se pueda interactuar con el botón
    expect(button).toBeEnabled();
  });
});
