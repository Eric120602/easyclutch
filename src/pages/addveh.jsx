import { useState } from 'react';
import { Box } from '@mui/material';
import { insertVehicles } from '../api/vehicle';

const Addvehicle = () => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [inputValuee, setInputValuee] = useState('');
  const handleInputChangee = (event) => {
    setInputValuee(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log(inputValuee);
    console.log(selectedOption);
  };

  const addVehicle = async () => {
    try {
      console.log("enthelum")
      await insertVehicles({
        modelName: inputValue,
        registrationNumber: inputValuee,
        type: selectedOption,
      })
      window.location.replace('http://localhost:5173/Vehiclemngmnt');
    }
    catch (exception) {
      console.log("failed", exception)
    }

  }

  return (
    <div className="my-div">
      <form onSubmit={handleSubmit}>
        <label htmlFor="modelname">Enter model name:  </label>
        <input
          type="text"
          id="textbox"
          value={inputValue}
          onChange={handleInputChange}

        /><br /><br />
        <label htmlFor="registration">Enter registration no:  </label>
        <input
          type="text"
          id="textbox"
          value={inputValuee}
          onChange={handleInputChangee}
        /><br /><br />
        <label htmlFor="dropdown">Select type :  </label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Select --</option>
          <option value="2">2 wheeler</option>
          <option value="3">3 wheeler</option>
          <option value="4">4 wheeler</option>
          <option value="5">heavy</option>
        </select><br /><br />

        <button onClick={addVehicle}>Submit</button>
      </form>
    </div>

  );
}


export default Addvehicle;


