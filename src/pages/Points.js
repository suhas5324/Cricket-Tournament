import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Points() {
  const [points, setPoints] = useState([]);
  const { teamid } = useParams();
  const role = localStorage.getItem('role');
  useEffect(() => {
    loadPoints();
  }, []);
  const loadPoints = async () => {
    const result = await axios.get("http://localhost:8080/getpoints");
    setPoints(result.data);
  };

  const deletePoints = async (teamid) => {
    await axios.delete(`http://localhost:8080/points/${teamid}`);
    loadPoints();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Team_id</th>
              <th scope="col">Played</th>
              <th scope="col">Won</th>
              <th scope="col">Lost</th>
              <th scope="col">Total Points</th>
              {role === 'admin' && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {points.map((points, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{points.teamid}</td>
                <td>{points.played}</td>
                <td>{points.won}</td>
                <td>{points.lost}</td>
                <td>{points.totalpoints}</td>
                {role === 'admin' && (
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editpoints/${points.teamid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePoints(points.teamid)}
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
          <Link className='btn btn-outline-primary mx-2' to="/addpoints">Add Team Points</Link>
        </div>
      )}
      </div>
  );
}
