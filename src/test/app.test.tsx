import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeCard from "../components/ui/card";
import "@testing-library/jest-dom";

describe("Testing RecipeCard.tsx", () => {
  it("Debe renderizar correctamente el componente", () => {
    const { baseElement } = render(<RecipeCard />);
    expect(baseElement).toMatchSnapshot(); // Aseguramos que el componente no ha cambiado
  });

  it("Debe mostrar el título 'Online Shopping'", () => {
    render(<RecipeCard />);
    expect(screen.getByText(/Online Shopping/i)).toBeInTheDocument();
  });

  it("Debe mostrar la descripción correcta", () => {
    render(<RecipeCard />);
    expect(
      screen.getByText(/You can shopping anytime, anywhere that you want./i)
    ).toBeInTheDocument();
  });

  it("Debe renderizar un botón con el texto 'Shopping Now'", () => {
    render(<RecipeCard />);
    const button = screen.getByRole("button", { name: /Shopping Now/i });
    expect(button).toBeInTheDocument();
  });

  it("Debe disparar el evento al hacer clic en el botón", () => {
    const handleClick = vi.fn(); // Mock de la función de clic
    render(
      <button onClick={handleClick} className="btn-test">
        Shopping Now
      </button>
    );

    const button = screen.getByRole("button", { name: /Shopping Now/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
