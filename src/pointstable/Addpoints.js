import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addpoints() {
  let navigate=useNavigate()
    const [points, setPoints] = useState({
        teamid: "",
        played: "",
        won: "",
        lost: "",
        totalpoints: ""
    });

    const {teamid, played, won, lost,totalpoints} = points;

    const onInputChange = (e) => {
        setPoints({ ...points, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., sending data to an API
        await axios.post("http://localhost:8080/points",points)
        navigate("/points");//to navigate to home after submitting
    };

    return (
        <form onSubmit={(e)=> onSubmit(e)}>
            <div className="row g-3">
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Team id"
                        name="teamid"
                        value={teamid}
                        onChange={onInputChange}
                        aria-label="Team id"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Played"
                        name="played"
                        value={played}
                        onChange={onInputChange}
                        aria-label="Played"
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