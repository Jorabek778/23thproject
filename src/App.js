import React, { useState } from 'react';
import Data from './data'
import Personinfo from './Personinfo';
import './App.css';

function App() {
  const [state, setState] = useState(Data)
  const RemoveAll= ()=>{
    setState([])
  }
  return (
    <div className="section">
      <div className='container'>
        <h3>Birthday Reminder {state.length}</h3>
        <div>
       {state.map((item)=>{
        return  <Personinfo
        key={item.id}
        name={item.name} 
        age={item.age}
        image={item.image}
        />
       })}
        </div>
        <button onClick={RemoveAll}>Clear All</button>
        </div>
    </div>
  );
}

export default App;
