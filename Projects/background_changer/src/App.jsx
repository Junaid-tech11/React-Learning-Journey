import { useState } from "react"


// function App() {
//   const [color, setColor] = useState("olive")
  
//   return (
// <div 
//       className="w-full h-screen duration-200"
//       style={{
//         backgroundColor: color,
//         position: "fixed",  
//         top: 0,            
//         left: 0,            
//         width: "100%",
//         height: "100%"
//       }}
//     >

//         <div className="fixed flex flex-wrap justify-center 
//         bottom-12 inset-x-0 px-2">
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
//           px-3 py-2  rounded-3xl">
//             <button
//             onClick= {()  =>setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'red'}}>Red</button>
//             <button
//             onClick={()=>setColor('green')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'green'}}>Green</button>
//             <button
//             onClick={()=>setColor('yellow')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'yellow'}}>Yellow</button>
//             <button
//             onClick={()=>setColor('brown')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'brown'}}>Brown</button>
//             <button
//             onClick={()=>setColor('purple')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'purple'}}>Purple</button>
//             <button
//             onClick={()=>setColor('blue')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'blue'}}>Blue</button>
//             <button
//             onClick={()=>setColor('orange')}
//             className="outline-none px-4 py-1 rounded-full text-white
//             shadow-lg"
//             style={{backgroundColor:'orange'}}>Orange</button>

            
//           </div>
//         </div>

//     </div>
//   )
// }



//Second Method:




// function ColorButton({ colorName, handleClick }) {
//   return (
//     <button
//       onClick={() => handleClick(colorName)}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
//       style={{ backgroundColor: colorName }}
//     >
//       {colorName}
//     </button>
//   )
// }

// // 2. THE PARENT COMPONENT (The Manager)
// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div 
//       className="w-full h-screen duration-200 fixed top-0 left-0"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center 
//       bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3
//         shadow-lg bg-white px-3 py-2 rounded-3xl">

          
//           <ColorButton colorName="red" handleClick={setColor} />
//           <ColorButton colorName="green" handleClick={setColor} />
//           <ColorButton colorName="blue" handleClick={setColor} />
//           <ColorButton colorName="orange" handleClick={setColor} />
//           <ColorButton colorName="purple" handleClick={setColor} />
          
//         </div>
//       </div>
//     </div>
//   )
// }


//Method 3:


// function App() {
//   const [color, setColor] = useState("olive")

//   // 1. The Ingredient List
//   const colors = ["red", "green", "blue", "olive", "gray", "yellow", "pink", "purple", "lavender", "white", "black"]

//   return (
//     <div 
//       className="w-full h-screen duration-200 fixed top-0 left-0"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
//           {/* 2. The Factory Machine (The .map loop) */}
//           {colors.map((btnColor) => (
//             <button
//               key={btnColor} // React needs a unique ID for every item in a list
//               onClick={() => setColor(btnColor)}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
//               style={{ backgroundColor: btnColor }}
//             >
//               {btnColor}
//             </button>
//           ))}

//         </div>
//       </div>
//     </div>
//   )
// }


//Method 4:



// --- COMPONENT: The Button ---
function ColorButton({ colorName, handleClick, textColor }) {
  return (
    <button
      onClick={() => handleClick(colorName)}
      className="outline-none px-4 py-1 rounded-full shadow-lg capitalize transition-transform hover:scale-110 active:scale-90"
      style={{ 
        backgroundColor: colorName,
        color: textColor 
      }}
    >
      {colorName}
    </button>
  )
}

// --- MAIN APP ---
function App() {
  const [color, setColor] = useState("olive")
  const [inputValue, setInputValue] = useState("")

  // --- LOGIC: Determine if we need Black or White text ---
  const getTextColor = (bgColor) => {
    if (bgColor === "black" || bgColor === "blue" || bgColor === "purple" || bgColor === "red" || bgColor === "green" || bgColor === "olive") {
        return "white";
    }
    return "black";
  }
  
  const currentTextColor = getTextColor(color);

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
    setInputValue(randomColor);
  }

  const handleInputSubmit = () => {
      setColor(inputValue);
  }

  return (
    <div 
      className="w-full h-screen duration-200 fixed top-0 left-0 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      
      {/* 👇👇👇 THIS IS THE NEW PART 👇👇👇 */}
      {/* The Title that changes color based on background */}
      <h1 
        className="text-4xl font-bold mb-10 transition-colors duration-200"
        style={{ color: currentTextColor }} 
      >
        Background Changer
      </h1>
      {/* 👆👆👆 END OF NEW PART 👆👆👆 */}


      {/* THE CONTROL PANEL */}
      <div className="bg-white/90 p-6 rounded-2xl shadow-2xl text-center mb-20 w-80 backdrop-blur-sm">
         <h1 className="text-xl font-bold mb-4 text-gray-700">Type a Color</h1>
         
         <div className="flex gap-2">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleInputSubmit()
                }}
                className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full text-lg outline-none focus:border-blue-500"
                placeholder="e.g. black"
            />
            <button 
                onClick={handleInputSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700"
            >
                Go
            </button>
         </div>
      </div>

      {/* THE PRESET BUTTONS */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <ColorButton colorName="red" textColor="white" handleClick={(c) => { setColor(c); setInputValue(c); }} />
          <ColorButton colorName="green" textColor="white" handleClick={(c) => { setColor(c); setInputValue(c); }} />
          <ColorButton colorName="yellow" textColor="black" handleClick={(c) => { setColor(c); setInputValue(c); }} />
          <ColorButton colorName="black" textColor="white" handleClick={(c) => { setColor(c); setInputValue(c); }} />
          <ColorButton colorName="white" textColor="black" handleClick={(c) => { setColor(c); setInputValue(c); }} />
          
          <button
            onClick={generateRandomColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-800 font-bold"
          >
            🎲 Random
          </button>

        </div>
      </div>
    </div>
  )
}

export default App