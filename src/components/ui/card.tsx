import React from "react";
import recipeImage1 from "./images/imagen1.png"; // Asegúrate de que esta imagen existe

const RecipeCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 px-4">
      {/* Contenedor principal */}
      <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
        {/* Imagen */}
        <img
          src={recipeImage1}
          alt="Online Shopping"
          className="w-44 h-44 lg:w-52 lg:h-52 mx-auto rounded-xl object-cover shadow-md"
        />

        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-6">
          Online Shopping
        </h2>

        {/* Descripción */}
        <p className="text-gray-500 text-base lg:text-lg mt-3">
          You can shopping anytime, anywhere that you want.
        </p>

        {/* Botón */}
        <button className="mt-6 w-[90%] bg-green-500 hover:bg-green-900 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
