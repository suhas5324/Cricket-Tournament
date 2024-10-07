import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Player() {
  const [players, setPlayers] = useState([]);
  const { player_id } = useParams();
  const role = localStorage.getItem('role');
  useEffect(() => {
    loadPlayers();
  }, []);
  const loadPlayers = async () => {
    const result = await axios.get("http://localhost:8080/getplayer");
    setPlayers(result.data);
  };

  const deletePlayer = async (player_id) => {
    await axios.delete(`http://localhost:8080/player/${player_id}`);
    loadPlayers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">PlayerId</th>
              <th scope="col">PlayerName</th>
              <th scope="col">TeamId</th>
              <th scope="col">Age</th>
              <th scope="col">Role</th>
              {role === 'admin' && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{player.player_id}</td>
                <td>{player.player_name}</td>
                <td>{player.team_id}</td>
                <td>{player.age}</td>
                <td>{player.role}</td>
                {role === 'admin' && (
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editplayer/${player.player_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePlayer(player.player_id)}
                  >
                    Delete
                  </button>
                </td>
                )} 
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {role === 'admin' && (  
        <div className="container">
          <Link className='btn btn-outline-primary mx-2' to="/addplayer">Add Player</Link>
        </div>
      )}
      </div>
  );
}
