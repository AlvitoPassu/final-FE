//Component adalah function yg return JSX
//JSX hanya boleh memiliki 1 parent element
import React, { useState } from "react";
import HelloWorld from "./HelloWorld";

const App = () => {
  // let hello = "Hello World"; // Ini variabel biasa
  const [hello, setHello] = useState("Hello World!!!"); //Ini variabel state

  const handleClick = () => {
    console.log("button di klik");
    // hello = "Selamat Datang"; //ini cara merubah variabel biasa
    setHello("Selamat Datang"); //ini cara merubah variabel state
    console.log(hello);
  };
  return (
    <>
      <div className="text-[50px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld
        text="This is a child component 1"
        handleClick={handleClick}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </>
  );
};

export default App;
