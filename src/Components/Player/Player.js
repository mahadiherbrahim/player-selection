import React from 'react';
import './PLayer.css';
import '../../assets/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faHandHoldingUsd, faGlobeAsia, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, email, image, sallary, team } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
            <Card className="player-box">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faEnvelope} /> {email} </Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faGlobeAsia} /> {team} </Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faHandHoldingUsd} /> ${sallary} </Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => { handleAddPlayer(props.player) }}
                    >
                        <FontAwesomeIcon icon={faUserPlus} /> Hire {name}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Player;