import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Editplayer() {
  let navigate = useNavigate();
  const { player_id } = useParams();
  const [player, setPlayer] = useState({
    player_id: "",
    playername: "",
    teamid: "",
    age: "",
    role: ""
  });

  const { playername, teamid, age, role} = player;

  const onInputChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPlayer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/player/${player_id}`, player);
      navigate("/player");
    } catch (error) {
      console.error("There was an error updating the player!", error);
    }
  };

  const loadPlayer = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/player/${player_id}`);
      setPlayer(result.data);
    } catch (error) {
      console.error("There was an error loading the player!", error);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="row g-3">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Player id"
            name="player_id"
            value={player_id}
            onChange={onInputChange}
            aria-label="Player id"
            disabled
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Player Name"
            name="player name"
            value={playername}
            onChange={onInputChange}
            aria-label="Player Name"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Team id"
            name="Team id"
            value={teamid}
            onChange={onInputChange}
            aria-label="Team id"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Age"
            name="Age"
            value={age}
            onChange={onInputChange}
            aria-label="Age"
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
        <div className="col-auto">
          <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
        </div>
      </div>
    </form>
  );
}