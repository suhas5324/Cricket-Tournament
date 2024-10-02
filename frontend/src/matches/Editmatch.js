import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditMatch() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [match, setMatch] = useState({
    id: "",
    team1_id: "",
    team2_id: "",
    venue: "",
    status: "",
    date: ""
  });

  const { team1_id, team2_id, venue, status, date } = match;

  const onInputChange = (e) => {
    setMatch({ ...match, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMatch();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/match/${id}`, match);
      navigate("/");
    } catch (error) {
      console.error("There was an error updating the match!", error);
    }
  };

  const loadMatch = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/match/${id}`);
      setMatch(result.data);
    } catch (error) {
      console.error("There was an error loading the match!", error);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="row g-3">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Match ID"
            name="id"
            value={id}
            onChange={onInputChange}
            aria-label="Match ID"
            disabled
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Team1 ID"
            name="team1_id"
            value={team1_id}
            onChange={onInputChange}
            aria-label="Team1 ID"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Team2 ID"
            name="team2_id"
            value={team2_id}
            onChange={onInputChange}
            aria-label="Team2 ID"
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            name="status"
            value={status}
            onChange={onInputChange}
            aria-label="Status"
          />
        </div>
        <div className="col-sm">
          <select
            className="form-select"
            name="venue"
            value={venue}
            onChange={onInputChange}
          >
            <option value="">Choose...</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        <div className="col-sm">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            name="date"
            value={date}
            onChange={onInputChange}
            aria-label="Date"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
        </div>
      </div>
    </form>
  );
}
