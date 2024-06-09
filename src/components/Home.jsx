import React from 'react'
import Card from 'react-bootstrap/Card';
import banner from './Ticket.jpg'
import Cards from"./Cards";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className='home-banner'>
            <Card className="bg-dark text-dark border-0">
                <Card.Img src={banner} alt="banner" />
                <Card.ImgOverlay>
                  <div className="container mt-5">
                  <Card.Title className='display-5 fw-bolder'></Card.Title>
                    <Card.Text className='lead fs-1'>
                      
                    </Card.Text>
                    <Card.Text className='lead fs-4'></Card.Text>
                    <Card.Text className='lead fs-2'> <i className=''></i></Card.Text>
                  </div>
                </Card.ImgOverlay>
            </Card>
            <Cards/>
            <Footer />
            
        </div>
    )
}

export default Home