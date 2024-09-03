import React from 'react'

const Eg2 = ({formData, setFormData, handleChange1}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Controlled Form</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange1}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange1}
          />
        </div>
      </form>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <button onClick={(e)=>console.log(e.target)}>Click</button>
    </div>
  )
}

export default Eg2