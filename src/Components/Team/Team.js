import React, { useEffect, useState } from 'react';
import './Team.css';
import PlayerData from '../../Data/data.json';
import Player from '../Player/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Team = () => {

    const [players, SetPlayers] = useState([]);

    useEffect(() => {
        SetPlayers(PlayerData);
    }, []);
    
    const [selectPlayer,setSelectedPlayer] = useState([]);

    const handleAddPlayer =  (player) => {
        const newSelectPlayer = [...selectPlayer,player];
        setSelectedPlayer(newSelectPlayer);
    }

    return (
        <div className="team-container">
            <div className="players">
                    {
                        players.map(player =>
                        <Player
                             key={player.id} 
                             player={player}
                             handleAddPlayer={handleAddPlayer} 
                        ></Player>)
                    }
            </div>
            <div className="selected-player">
                <SelectedPlayer selectPlayer={selectPlayer}></SelectedPlayer>
            </div>
        </div>

    );
};

export default Team;