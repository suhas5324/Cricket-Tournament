import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Team() {
  const [teams, setTeams] = useState([]);
  const { teamid } = useParams();
  const role = localStorage.getItem('role');
  useEffect(() => {
    loadTeams();
  }, []);
  const loadTeams = async () => {
    const result = await axios.get("http://localhost:8080/getteam");
    setTeams(result.data);
  };
  const deleteTeam = async (teamid) => {
    await axios.delete(`http://localhost:8080/team/${teamid}`);
    loadTeams();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Team_id</th>
              <th scope="col">Team_name</th>
              <th scope="col">Captain</th>
              <th scope="col">Head_coach</th>
              <th scope="col">Homeground</th>
              {role === 'admin' && <th scope="col">Action</th>}
                          </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{team.teamid}</td>
                <td>{team.team_name}</td>
                <td>{team.captain}</td>
                <td>{team.head_coach}</td>
                <td>{team.homeground}</td>
                {role === 'admin' && (
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editteam/${team.teamid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteTeam(team.teamid)}
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
          <Link className='btn btn-outline-primary mx-2' to="/addteam">Add Team</Link>
        </div>
      )}
      </div>
  );
}
