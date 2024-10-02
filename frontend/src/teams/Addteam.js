import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addteam() {
  let navigate=useNavigate()
    const [team, setTeam] = useState({
        teamid: "",
        team_name: "",
        captain: "",
        head_coach: "",
        homeground: ""
    });

    const {teamid, team_name, captain, head_coach,homeground } = team;

    const onInputChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., sending data to an API
        await axios.post("http://localhost:8080/team",team)
        navigate("/team");//to navigate to home after submitting
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
                        placeholder="Team name"
                        name="team_name"
                        value={team_name}
                        onChange={onInputChange}
                        aria-label="Team name"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Captain"
                        name="captain"
                        value={captain}
                        onChange={onInputChange}
                        aria-label="Captain"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Head_coach"
                        name="head_coach"
                        value={head_coach}
                        onChange={onInputChange}
                        aria-label="Headcoach"
                    />
                </div>
                <div className="col-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Homeground"
                        name="homeground"
                        value={homeground}
                        onChange={onInputChange}
                        aria-label="Homeground"
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-outline-danger mt-2">Submit</button>
                </div>
            </div>
        </form>
    );
}