import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Registration logic
    const user = { username, email, password };

    try {
      const response = await fetch('https://tickets.dev-options.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Registration successful', data);
      alert('Registration successful!');
      // Optionally, redirect or clear the form here
    } catch (error) {
      console.error('There was a problem with the registration request:', error);
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
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
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                    type="password"
                    className={`form-control ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  {formErrors.confirmPassword && (
                    <div className="invalid-feedback">{formErrors.confirmPassword}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;