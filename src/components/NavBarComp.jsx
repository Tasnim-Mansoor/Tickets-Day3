import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { REMOVE } from '../redux/actions/action';

const NavBarComp = () => {
    const getData = useSelector((state) => state.cartReducer.carts)
    console.log(getData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // removes an item with a specified ID
    const remove = (id) => {
        dispatch(REMOVE(id))
    }

    // navigate to cart component page
    const navigateToCart = () => {
        navigate('/cart');
    }

    // popup for cart
    const popover = (
        <Popover id="popover-basic">
            <table>
                <thead>
                    <tr>
                        <th className='me-5 text-center'>Image</th>
                        <th className='me-5 text-center'>Item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.map((item, index) => {
                            return <>
                                <tr className='ms-2'>
                                    <td>
                                        <img src={item.image} style={{ width: "5rem", height: "5rem", margin: "15px 15px" }} alt="" />
                                    </td>
                                    <td>
                                        <div className='text-center mt-3 me-3'>
                                            <p className='text-center mb-0 fw-bolder'>{item.category}</p>
                                            <p className='mb-0'>Price: $ {item.price}</p>
                                            <p className='mb-0'>Discount: $ {item.discount}</p>
                                            <p className='mb-0'>Rating: {item.rating.rate}&#x2605;</p>
                                            <p className='mb-0'>{item.title.substring(0, 45)}</p>
                                            <p className='mt-1' onClick={() => remove(item.id)}> <i class="fa fa-trash fs-4 delete-icon" aria-hidden="true"></i></p>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </Popover>
    );

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                <Container>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <span style={{ color: 'white', fontSize: '2rem' }}>Ticket</span>
                        <span style={{ color: 'orange', fontSize: '2rem' }}>Admin</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                    
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="./" style={{ textDecoration: 'none', color: 'white' }}>
                                    
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="./" style={{ textDecoration: 'none', color: 'white' }}>
                                Home
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <div className="buttons d-flex align-items-center">
                            
                            <Button as={Link} to="./RegisterForm" variant="outline-light" className='me-2'><i className='fa fa-user me-2'></i>Register</Button>
                        
                            <Button as={Link} to="./LoginForm" variant="outline-light" className='me-2'><i className='fa fa-user me-2'></i>Login</Button>
                            <Button as={Link} to="./AddTicketForm" variant="outline-light" className='me-2'><i className='fa fa-user me-2'></i>AddTicket</Button>
                            <Button as={Link} to="./ViewTicket" variant="outline-light" className='me-2'><i className='fa fa-user me-2'></i>ViewTicket</Button>
                            <Button as={Link} to="./UserTicketPage" variant="outline-light" className='me-2'><i className='fa fa-user me-2'></i>UserPage</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComp