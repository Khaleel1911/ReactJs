import { useState } from 'react'

function App() {

  const [color,setColor]=useState("");

  

  return (
    <>

     <div className='main-container'>
    <h1>Color Picker</h1>

      <div className="result-container" style={{backgroundColor:color}}>

        <h4>Selected color code is {color}</h4>

      </div>

      <h3>Selecet a Color</h3>
      <input type="color" name="" id=""  onChange={(e)=>setColor(e.target.value)}/>

     </div>
    </>
  )
}

export default App
