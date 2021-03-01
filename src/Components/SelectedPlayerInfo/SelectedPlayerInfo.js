import React from 'react';
import './SelectedPlayerInfo.css';
import '../../assets/css/bootstrap.min.css'
import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd,faGlobeAsia,faEnvelope} from '@fortawesome/free-solid-svg-icons';

const SelectedPlayerInfo = (props) => {

    const {name,sallary,email,team,image} = props.player;
    return (
        <div className="selectedPlayerInfo">
           <Card className="player-select">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faEnvelope}/> {email} </Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faGlobeAsia}/> {team} </Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faHandHoldingUsd}/> ${sallary} </Card.Text>

                </Card.Body>
            </Card> 
        </div>
    );
};

export default SelectedPlayerInfo;