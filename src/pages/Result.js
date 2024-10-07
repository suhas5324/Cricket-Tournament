import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Result() {
  const [results, setResults] = useState([]);
  const { teamid } = useParams();
  const role = localStorage.getItem('role');
  useEffect(() => {
    loadResults();
  }, []);
  const loadResults = async () => {
    const result = await axios.get("http://localhost:8080/getresult");
    setResults(result.data);
  };

  const deleteTeam = async (matchid) => {
    await axios.delete(`http://localhost:8080/result/${matchid}`);
    loadResults();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">MatchId</th>
              <th scope="col">Won</th>
              <th scope="col">Lost</th>
              <th scope="col">Wickets</th>
              <th scope="col">Runs</th>
              {role === 'admin' && <th scope="col">Action</th>}
                          </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{result.matchid}</td>
                <td>{result.won}</td>
                <td>{result.lost}</td>
                <td>{result.wickets}</td>
                <td>{result.runs}</td>
                {role === 'admin' && (
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editresult/${result.matchid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteTeam(result.matchid)}
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
          <Link className='btn btn-outline-primary mx-2' to="/addresult">Add Match</Link>
        </div>
      )}
      </div>
  );
}
