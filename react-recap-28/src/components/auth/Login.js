import { useState } from 'react';

import './../../css/login.css';

function Login() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  // destructing

  // handle change for Email input
  // function handleChangeEmail(e) {
  //   setEmail(e.target.value);
  // }
  // // handle change for Password input

  // function handleChangePassword(e) {
  //   setPassword(e.target.value);
  // }

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  function onSubmitForm(e) {
    e.preventDefault();
    console.log('Email: ', credentials.email);
    console.log('Password: ', credentials.password);
    // alert('this is email ' + email);
    // alert('this is password ' + password);
  }

  return (
    <div className="form-container">
      <h1>
        Account <span>Login</span>
      </h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label> Email : </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>

        <div className="form-group">
          <label> Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
          />
        </div>

        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
