import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addresult() {
  let navigate=useNavigate()
    const [result, setTeam] = useState({
        matchid: "",
        won: "",
        lost: "",
        wickets: "",
        runs: ""
    });

    const {matchid, won, lost, wickets,runs } = result;

    const onInputChange = (e) => {
        setTeam({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., sending data to an API
        await axios.post("http://localhost:8080/result",result)
        navigate("/result");//to navigate to home after submitting
    };

    return (
        <form onSubmit={(e)=> onSubmit(e)}>
            <div className="row g-3">
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Matchid"
                        name="matchid"
                        value={matchid}
                        onChange={onInputChange}
                        aria-label="Matchid"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Won"
                        name="won"
                        value={won}
                        onChange={onInputChange}
                        aria-label="Won"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Lost"
                        name="lost"
                        value={lost}
                        onChange={onInputChange}
                        aria-label="Lost"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Wickets"
                        name="wickets"
                        value={wickets}
                        onChange={onInputChange}
                        aria-label="Wickets"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Runs"
                        name="runs"
                        value={runs}
                        onChange={onInputChange}
                        aria-label="Runs"
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
                </div>
            </div>
        </form>
    );
}