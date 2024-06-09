import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewTicket = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulate fetching tickets from an API
    const fetchedTickets = [
      {
        id: 1,
        title: 'Issue with login',
        description: 'Users are unable to log in to the system',
        priority: 'high',
        assignee: 'John Doe',
        status: 'open'
      },
      {
        id: 2,
        title: 'Slow page load',
        description: 'The homepage is taking a long time to load',
        priority: 'medium',
        assignee: 'Jane Smith',
        status: 'open'
      },
      {
        id: 3,
        title: 'Broken search functionality',
        description: 'The search bar is not returning any results',
        priority: 'high',
        assignee: 'Michael Johnson',
        status: 'closed'
      }
    ];
    setTickets(fetchedTickets);
  }, []);

  return (
    <div className="container my-5">
      <h2>View Tickets</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.assignee}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTicket;