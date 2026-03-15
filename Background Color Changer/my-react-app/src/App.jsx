import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    // Tailwind classes handle the layout: min-h-screen makes it full height, 
    // flex/items-center/justify-center put everything perfectly in the middle.
    <div 
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      
      {/* Tailwind handles the typography: large text, bold font, white color, and a drop shadow */}
      <h1 className="text-2xl font-bold text-white drop-shadow-lg mb-8 capitalize">
        My favorite color is {color}!
      </h1>
      
      {/* A flex container to space out the buttons cleanly */}
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => setColor("blue")}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Blue
        </button>
        
        <button
          type="button"
          onClick={() => setColor("red")}
          className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Red
        </button>
        
        <button
          type="button"
          onClick={() => setColor("pink")}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Pink
        </button>
        
        <button
          type="button"
          onClick={() => setColor("green")}
          className="px-6 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Green
        </button>

        <button
          type="button"
          onClick={() => setColor("orange")}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Orange
        </button>
      </div>

    </div>
  );
}

export default App;