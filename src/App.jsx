import React, { useState } from "react";
import "./App.css";

const transportOptions = {
  data: {
    car: { amount: 100, description: "Car" },
    bus: { amount: 50, description: "Bus" },
    bike: { amount: 10, description: "Bicycle" },
    airplane: { amount: 500, description: "Airplane" },
    helicopter: { amount: 200, description: "Helicopter" },
    boat: { amount: 200, description: "Boat" },
    ship: { amount: 400, description: "Ship" },
    yacht: { amount: 1000, description: "Yacht" },
  },
  transportType: {
    car: "land",
    bus: "land",
    bike: "land",
    airplane: "air",
    helicopter: "air",
    boat: "maritime",
    ship: "maritime",
    yacht: "maritime",
  },
};


const getDataFromater = () =>{
  let objectResult = {};
  let listTransportType = [];

  const keysData = Object.keys(transportOptions.data);
  const transportType = transportOptions.transportType;
 
  keysData.forEach((item) =>{
        const p = transportOptions.data[item];
        const type = transportType.hasOwnProperty(`${item}`) ? transportType[item] : "";

        if(!listTransportType.some((ltt) => ltt.toUpperCase() === type.toUpperCase() )){
          listTransportType.push(type.toUpperCase())
        }

        objectResult = {
          ...objectResult,
          [item]:{
            ...p,
            type
          }
        }
   })

   
    
  return {
    "data": objectResult,
    "keys": keysData,
    "transportType": listTransportType
  }
}


/** 1 */
const transportOptionsFormatted = getDataFromater();




function App() {
  let labelTransportType = '';
  transportOptionsFormatted.transportType.forEach((item, index)=>{
    if(index === 0){
      labelTransportType = ` ${item}`
    } else{
      labelTransportType = `${labelTransportType} - ${item} `
    }
    
  })

  const [selectedOption, setSelectedOption] = useState(transportOptionsFormatted.keys[0]);

  const handleChange = (event) => {
    /** 3 */
    let {value} = event.target;
    setSelectedOption(value)
  };

  const getDescriptionItem = (selectedOption) =>{
    const itemSeleted = transportOptionsFormatted.data[selectedOption];
    return(
      <ul>
        <li>Amount: {itemSeleted.amount}</li>
        <li>Description: {itemSeleted.description}</li>
        <li>Type: {itemSeleted.type}</li>
      </ul>
    
  )
  }

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte:
        <span>{labelTransportType}</span>
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption} onChange={handleChange}>
         {
          transportOptionsFormatted.keys.map((item) =>{
             return(<option value={item}>{item}</option>)
          })
         }
        </select>

        <button
        onClick={() => {setSelectedOption('')}}
        >
          Limpiar
        </button>
      </div>
      {selectedOption && 
        getDescriptionItem(selectedOption)
      }
    </div>
  );
}

export default App;
