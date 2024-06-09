import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const user = { username, password };

    try {
      const response = await fetch('https://tickets.dev-options.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Login successful', data);
      alert('Login successful!');
      // Optionally, redirect the user or save the token here
    } catch (error) {
      console.error('There was a problem with the login request:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-sm">
        <h2 className="mb-4 text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {formErrors.username && (
            <div className="invalid-feedback">{formErrors.username}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {formErrors.password && (
            <div className="invalid-feedback">{formErrors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;