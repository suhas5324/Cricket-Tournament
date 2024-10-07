import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addplayer() {
  let navigate=useNavigate()
    const [player, setPlayer] = useState({
        player_id: "",
        player_name: "",
        team_id: "",
        age: "",
        role: ""
        
    });

    const {player_id,player_name ,team_id, age,  role} = player;

    const onInputChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        
        await axios.post("http://localhost:8080/player",player)
        navigate("/player");
    };

    return (
        <form onSubmit={(e)=> onSubmit(e)}>
            <div className="row g-3">
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="PlayerId"
                        name="player_id"
                        value={player_id}
                        onChange={onInputChange}
                        aria-label="PlayerId"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        value={age}
                        onChange={onInputChange}
                        aria-label="Age"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="TeamId"
                        name="team_id"
                        value={team_id}
                        onChange={onInputChange}
                        aria-label="TeamId"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Role"
                        name="role"
                        value={role}
                        onChange={onInputChange}
                        aria-label="Role"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="PlayerName"
                        name="player_name"
                        value={player_name}
                        onChange={onInputChange}
                        aria-label="PlayerName"
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
                </div>
            </div>
        </form>
    );
}