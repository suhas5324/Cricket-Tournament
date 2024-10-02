
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addmatch() {
  let navigate=useNavigate()
    const [match, setMatch] = useState({
        id: "",
        team1_id: "",
        team2_id: "",
        venue: "",
        status: "",
        date:""
    });

    const { id, team1_id, team2_id, venue, status,date } = match;

    const onInputChange = (e) => {
        setMatch({ ...match, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/match",match)
        navigate("/match");
    };

    return (
        <form onSubmit={(e)=> onSubmit(e)}>
            <div className="row g-3">
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Match id"
                        name="id"
                        value={id}
                        onChange={onInputChange}
                        aria-label="Match id"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Team1 id"
                        name="team1_id"
                        value={team1_id}
                        onChange={onInputChange}
                        aria-label="Team1 id"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Team2 id"
                        name="team2_id"
                        value={team2_id}
                        onChange={onInputChange}
                        aria-label="Team2 id"
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

