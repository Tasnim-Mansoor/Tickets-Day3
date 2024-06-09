import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTicketForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [assignee, setAssignee] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    if (!title.trim()) {
      validationErrors.title = 'Title is required';
    }
    if (!assignee.trim()) {
      validationErrors.assignee = 'Assignee is required';
    }
    if (!priority) {
      validationErrors.priority = 'Priority is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare ticket data
    const ticket = { title, description, priority, assignee };

    try {
      const response = await fetch('https://tickets.dev-options.com/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Ticket added successfully', data);
      alert('Ticket added successfully!');
      // Optionally, clear the form or redirect here
      setTitle('');
      setDescription('');
      setPriority('');
      setAssignee('');
      setErrors({});
    } catch (error) {
      console.error('There was a problem with the ticket request:', error);
      alert('Failed to add ticket: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          {Object.values(errors).length > 0 && (
            <div className="alert alert-danger mb-3">
              {Object.values(errors).map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority:</label>
            <select
              className={`form-select ${errors.priority ? 'is-invalid' : ''}`}
              id="priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            {errors.priority && <div className="invalid-feedback">{errors.priority}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="assignee" className="form-label">Assignee:</label>
            <input
              type="text"
              className={`form-control ${errors.assignee ? 'is-invalid' : ''}`}
              id="assignee"
              value={assignee}
              onChange={(event) => setAssignee(event.target.value)}
            />
            {errors.assignee && <div className="invalid-feedback">{errors.assignee}</div>}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Add Ticket</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTicketForm;
