import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// User Ticket View
const UserTicket = ({ ticket, onEdit }) => {
  return (
    <tr>
      <td>{ticket.title}</td>
      <td>{ticket.description}</td>
      <td>{ticket.status}</td>
      <td>${ticket.price.toFixed(2)}</td>
      <td>
        <button className="btn btn-primary" onClick={() => onEdit(ticket)}>Edit</button>
      </td>
    </tr>
  );
};

// Navigation Bar
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const handleLogin = () => {
    // Implement login functionality here
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    // Implement register functionality here
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleAddTicket = () => {
    setShowTicketModal(true);
  };

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleCloseTicketModal = () => setShowTicketModal(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">User Page</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setShowLoginModal(true)}>Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setShowRegisterModal(true)}>Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleAddTicket}>Add Ticket</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={showTicketModal} onHide={handleCloseTicketModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TicketForm onSubmit={handleCloseTicketModal} />
        </Modal.Body>
      </Modal>
    </nav>
  );
};

// Ticket Form
const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    onSubmit({ title, description, price, status: 'Open' });
    setTitle('');
    setDescription('');
    setPrice(0);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Ticket</button>
    </div>
  );
};

// Combined Component
const UserTicketPage = () => {
  const [tickets, setTickets] = useState([
    {
      title: 'Ticket 1',
      description: 'Book now.',
      status: 'Open',
      price: 50.00
    },
    {
      title: 'Ticket 2',
      description: 'Book now.',
      status: 'Open',
      price: 60.00
    },
    {
      title: 'Ticket 3',
      description: 'Book now.',
      status: 'Open',
      price: 70.00
    }
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowEditModal(true);
  };

  const handleUpdateTicket = (updatedTicket) => {
    setTickets(tickets.map(ticket => ticket.title === updatedTicket.title ? updatedTicket : ticket));
    setShowEditModal(false);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <UserTicket key={index} ticket={ticket} onEdit={handleEditTicket} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TicketForm onSubmit={handleUpdateTicket} ticket={selectedTicket} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTicketPage;
