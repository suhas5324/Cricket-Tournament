import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTeam() {
  let navigate = useNavigate();
  const { teamid } = useParams();
  const [team, setTeam] = useState({
    teamid: "",
    team_name: "",
    captain: "",
    head_coach: "",
    homeground: ""
  });

  const { team_name, captain, head_coach, homeground} = team;

  const onInputChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/team/${teamid}`, team);
      navigate("/team");
    } catch (error) {
      console.error("There was an error updating the team!", error);
    }
  };

  const loadTeam = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/team/${teamid}`);
      setTeam(result.data);
    } catch (error) {
      console.error("There was an error loading the team!", error);
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
            placeholder="Team Name"
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
            placeholder="Head Coach"
            name="head_coach"
            value={head_coach}
            onChange={onInputChange}
            aria-label="Head coach"
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