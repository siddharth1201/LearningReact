import { useState } from 'react';
function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={
          { backgroundColor: color }
        }>

        <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-slate-100 p-4 rounded-full '>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 rounded-full'
              style={{
                backgroundColor: "red"
              }}
            >Red</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("green")}
              style={{
                backgroundColor: "green"
              }}
            >Green</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("cyan")}
              style={{
                backgroundColor: "cyan"
              }}
            >Cyan</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("violet")}
              style={{
                backgroundColor: "violet"
              }}
            >violet</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("purple")}
              style={{
                backgroundColor: "purple"
              }}
            >purple</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("yellow")}
              style={{
                backgroundColor: "yellow"
              }}
            >yellow</button>

            <button className='outline-none px-4 rounded-full'
              onClick={() => setColor("black")}
              style={{
                backgroundColor: "black",
                color:"white"
              }}
            >black</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
