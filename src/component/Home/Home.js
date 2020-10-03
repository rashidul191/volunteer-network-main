import React from 'react';
import './Home.css';
import img from '../images/animalShelter.png'
import { Card, CardDeck } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="card-style container">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/MvWhzrd.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/mPEbbTz.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/bFKPnjm.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/N4Xww3T.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Home;