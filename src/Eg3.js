import React from 'react'

const Eg3 = ({checked, setChecked, handleChange2}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Controlled Checkbox</h1>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange2}
        />
        Check me
      </label>
      <p>Checkbox is {checked ? 'checked' : 'unchecked'}</p>
    </div>
  )
}

export default Eg3