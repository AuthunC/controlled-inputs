import React from 'react'

const Eg4 = ({selectedOption, setSelectedOption, handleChange3}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Controlled Select</h1>
      <label>
        Choose an option:
        <select value={selectedOption} onChange={handleChange3}>
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected Option: {selectedOption}</p>
    </div>

  )
}

export default Eg4