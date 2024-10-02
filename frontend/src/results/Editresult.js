import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditResult() {
  let navigate = useNavigate();
  const { matchid } = useParams();
  const [result, setResult] = useState({
    matchid: "",
    won: "",
    lost: "",
    wickets: "",
    runs: ""
  });

  const { won, lost, wickets, runs} = result;

  const onInputChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadResult();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/result/${matchid}`, result);
      navigate("/result");
    } catch (error) {
      console.error("There was an error updating the result!", error);
    }
  };

  const loadResult = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/result/${matchid}`);
      setResult(result.data);
    } catch (error) {
      console.error("There was an error loading the result!", error);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
            disabled
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