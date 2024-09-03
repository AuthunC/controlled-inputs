import { useState } from 'react';
import './App.css';
import Eg1 from './Eg1';
import Eg2 from './Eg2';
import Eg3 from './Eg3';
import Eg4 from './Eg4';

function App() {

  //For Eg1
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  //For Eg2
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  //For Eg3
  const [checked, setChecked] = useState(false);

  const handleChange2 = (event) => {
    setChecked(event.target.checked);
  }

  //For Eg4
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange3 = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <Eg1 
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleChange={handleChange}
      />
      <Eg2 
        formData={formData} 
        setFormData={setFormData}
        handleChange1={handleChange1}
      />
      <Eg3 
        checked={checked}
        setChecked={setChecked}
        handleChange2={handleChange2}
      />
      <Eg4 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleChange3={handleChange3}
      
      />
    </div>
  );
}

export default App;
