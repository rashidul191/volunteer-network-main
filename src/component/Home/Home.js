import React from 'react';
import './Home.css';
import { Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory()
    const handleRegister =() =>{
        history.push('/register');
        
    }

    return (
        <div className="container card-style">
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
            <button onClick={handleRegister}>click here</button>
        </div>
    );
};

export default Home;