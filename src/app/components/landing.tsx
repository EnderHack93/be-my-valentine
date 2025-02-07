import { JSX, useEffect, useState } from "react";

export default function Header() {
  const [hearts, setHearts] = useState<JSX.Element[]>([]);

  // Generar corazones solo en el cliente
  useEffect(() => {
    const generatedHearts = Array.from({ length: 8 }).map((_, i) => (
      <span
        key={`heart-${i}`}
        className="absolute text-red-500 text-4xl animate-floating"
        style={{
          top: `${Math.random() * 100}%`,  // Espaciado más amplio para la posición vertical
          left: `${Math.random() * 100}%`, // Espaciado más amplio para la posición horizontal
          animationDuration: `${6 + Math.random() * 4}s`, // Variación de la duración de la animación
        }}
      >
        ❤️
      </span>
    ));
    setHearts(generatedHearts);
  }, []);

  return (
    <header className="relative container mx-auto h-screen xl:h-[calc(100vh-10rem)] w-full flex flex-col items-center justify-center px-4 py-16 text-center bg-gradient-to-b from-pink-500 to-purple-800 overflow-hidden rounded-xl shadow-2xl">
      {/* Corazones flotando solo en el cliente */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts}
      </div>

      <h1 className="text-6xl font-bold text-white mb-16 animate-pulse flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 xl:space-x-4">
        <span role="img" aria-label="Love letter">
          💌
        </span>
        <span>¿Quieres ser mi San Valentín?</span>
      </h1>

      <div className="bg-purple-900 text-white lg:w-1/2 mx-auto py-4 px-4 rounded-lg shadow-xl flex items-center justify-center space-x-2 mb-8">
        <span className="text-red-600 text-3xl" role="img" aria-label="Heart">
          ❤️
        </span>
        <p>Para mi amor, he preparado algo especial</p>
      </div>

      <div className="mb-8">
        <span className="text-gray-200 text-lg">
          Veamos por qué deberías decir que sí...
        </span>
      </div>

      <a
        href="#features"
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 mb-8"
      >
        Descúbrelo
      </a>
    </header>
  );
}
