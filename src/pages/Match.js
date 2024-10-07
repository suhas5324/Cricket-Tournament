import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Match() {
  const [matches, setmatches] = useState([]);
  const { id } = useParams();
  const role = localStorage.getItem('role');
  useEffect(() => {
    loadMatches();
  }, []);
  const loadMatches = async () => {
    const result = await axios.get("http://localhost:8080/getmatch");
    setmatches(result.data);
  };
  const deleteMatch = async (id) => {
    await axios.delete(`http://localhost:8080/match/${id}`);
    loadMatches();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Match_id</th>
              <th scope="col">Team1_id</th>
              <th scope="col">Team2_id</th>
              <th scope="col">Venue</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              {role === 'admin' && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{match.id}</td>
                <td>{match.team1_id}</td>
                <td>{match.team2_id}</td>
                <td>{match.venue}</td>
                <td>{match.status}</td>
                <td>{match.date}</td>
                {role === 'admin' && (
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/editmatch/${match.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-danger mx-2" onClick={() => deleteMatch(match.id)}>
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
          <Link className='btn btn-outline-primary mx-2' to="/addmatch">Add Match</Link>
        </div>
      )}
    </div>
  );
}
