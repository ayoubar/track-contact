import { useState } from 'react';

import './../../css/login.css';

function Register() {
  const [register, setRgister] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  // destructing
  const { name, email, password, confirm_password } = register;

  // handle change Of form inputs
  const handleChange = (e) => {
    setRgister({ ...register, [e.target.name]: e.target.value });
  };

  // handle submit form
  const onSubmitForm = async (e) => {
    e.preventDefault(); // stop refresh of page
    // check if `password` matches `confirm_password`
    if (!(password === confirm_password)) {
      alert('les mots de pass sont pas identique');
      return;
    }
    // send to the API
    delete register.confirm_password;
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(register),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>
        Account <span>Register</span>
      </h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label> Name : </label>
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="name"
            value={name}
          />
        </div>

        <div className="form-group">
          <label> Email : </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label> Password : </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label> Confirm Password : </label>
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            value={confirm_password}
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
