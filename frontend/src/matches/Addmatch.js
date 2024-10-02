// import React, { useState } from 'react'

// export default function Addmatch() {
//     const[match,setmatch]=useState({
//         id:"",
//         team1_id:"",
//         team2_id:"",
//         venue:"",
//         status:""
//     })
//     const{id,team1_id,team2_id,venue,status}=match
//     const oninputchange=(e)=>{
// setmatch({...match,[e.target.name]:e.target.value});
//     }
//     const onsubmit=(e)=>{

//     }
//   return (
//     <div class="row g-3">
//   <div class="col-sm ">
//     <input type="text" class="form-control" placeholder="Match id" value={id} onChange={(e)=>oninputchange(e)} aria-label="Match id"/>
//   </div>
//   <div class="col-sm ">
//     <input type="text" class="form-control" placeholder="Team1 id" value={team1_id} onChange={(e)=>oninputchange(e)} aria-label="Team1 id"/>
//   </div>
//   <div class="col-sm ">
//     <input type="text" class="form-control" placeholder="Team2 id" value={team2_id} onChange={(e)=>oninputchange(e)} aria-label="Team2 id"/>
//   </div>
//   <div class="col-sm ">
//     <input type="text" class="form-control" placeholder="Status" value={status} onChange={(e)=>oninputchange(e)} aria-label="Status"/>
//   </div>
//   <div class="col-sm ">
//   <select class="form-select" id="autoSizingSelect" value={venue} onChange={(e)=>oninputchange(e)}>
//       <option selected>Choose...</option>
//       <option value="1">Bengaluru</option>
//       <option value="2">Mumbai</option>
//       <option value="3">Chennai</option>
//       <option value="4">Kolkata</option>
//     </select>
//   </div>
//   <div class="col-auto mr-2">
//     <button type="submit" class="btn btn-outline-danger mt-2">Submit</button>
//   </div>
// </div>
//   )
// }
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
        // Add your form submission logic here, e.g., sending data to an API
        await axios.post("http://localhost:8080/match",match)
        navigate("/match");//to navigate to home after submitting
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

