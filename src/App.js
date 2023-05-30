import { useState } from 'react';
import './App.css';
import NametheInputs from './components/Namelist/NametheInputs/NametheInputs';

function App() {
  const [nameList, setNameList]=useState([]);

  const addNameHandler=(entredName)=>{
      const updateDetails = {
        ...entredName,
        id: Math.random().toString()
      }
      console.log(updateDetails)
      return updateDetails;
    
  }
  return (
    <div className="App">
      <section>
        <NametheInputs addName={addNameHandler}/>
      </section>
      
    </div>
  );
}

export default App;
