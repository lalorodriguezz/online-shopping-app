import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App"; // Asegúrate de que el path es correcto
import "@testing-library/jest-dom";

describe("Testing App.tsx", () => {
  it("Debe renderizar correctamente el componente App", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot(); // Aseguramos que el componente no ha cambiado
  });

  it("Debe renderizar el componente RecipeCard dentro de App", () => {
    render(<App />);
    expect(screen.getByText(/Online Shopping/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You can shopping anytime, anywhere that you want./i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Shopping Now/i })).toBeInTheDocument();
  });
});