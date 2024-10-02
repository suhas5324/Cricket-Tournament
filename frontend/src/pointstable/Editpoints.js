import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Editpoints() {
  let navigate = useNavigate();
  const { teamid } = useParams();
  const [points, setPoints] = useState({
    teamid: "",
    played: "",
    won: "",
    lost: "",
    totalpoints: ""
  });

  const { played, won, lost, totalpoints} = points;

  const onInputChange = (e) => {
    setPoints({ ...points, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPoints();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/points/${teamid}`, points);
      navigate("/points");
    } catch (error) {
      console.error("There was an error updating the points!", error);
    }
  };

  const loadPoints = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/points/${teamid}`);
      setPoints(result.data);
    } catch (error) {
      console.error("There was an error loading the points!", error);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="row g-3">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Teamid"
            name="teamid"
            value={teamid}
            onChange={onInputChange}
            aria-label="Teamid"
            disabled
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="played"
            name="played"
            value={played}
            onChange={onInputChange}
            aria-label="played"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="won"
            name="won"
            value={won}
            onChange={onInputChange}
            aria-label="won"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="lost"
            name="lost"
            value={lost}
            onChange={onInputChange}
            aria-label="lost"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="totalpoints"
            name="totalpoints"
            value={totalpoints}
            onChange={onInputChange}
            aria-label="totalpoints"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
        </div>
      </div>
    </form>
  );
}