import React from 'react';
import './SelectedPlayer.css';
import '../../assets/css/bootstrap.min.css'
import SelectedPlayerInfo from '../SelectedPlayerInfo/SelectedPlayerInfo';

const SelectedPlayer = (props) => {

    const selectPlayer = props.selectPlayer;
    //const totalBudget = selectPlayer.reduce((totalBudget,sallary)=> totalBudget + sallary.sallary,0);
    
    let totalBudget = 0;
    for (let i = 0; i < selectPlayer.length; i++) {
        const player = selectPlayer[i];
        const playerSallary = parseInt(player.sallary)
        totalBudget = totalBudget + playerSallary;
    }

    return (
        <div className="PlayerSelection">
            <h3>Player Selection Sylhet Royals</h3>
            <hr />
            <div className="budget-info">
                <h4>Total Player Hire : {selectPlayer.length}</h4>
                {
                    selectPlayer.map(player => <h5>{player.name} : {player.sallary}</h5>)
                }
                <h4>Total Hire Budget : ${totalBudget}</h4>
            </div>
            <div className="player-info">
                {
                    selectPlayer.map(player => <SelectedPlayerInfo player={player}></SelectedPlayerInfo>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;