import { useEffect, useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className="w-full min-h-screen duration-200">
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} className="px-4 py-1 rounded-full text-black" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("black")} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("purple")} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
