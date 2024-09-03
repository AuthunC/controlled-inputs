import React from 'react'

const Eg1 = ({inputValue, setInputValue, handleChange}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Controlled Input</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Current Value: {inputValue}</p>
      <button onClick={(e)=>console.log(e)}>Click</button>
    </div>
  )
}

export default Eg1