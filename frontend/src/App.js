


import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Match from './pages/Match';
import Editmatch from './matches/Editmatch';
import Addmatch from './matches/Addmatch';
import Addteam from './teams/Addteam';
import Editteam from './teams/Editteam';
import Team from './pages/Team';
import Addpoints from './pointstable/Addpoints';
import Editpoints from './pointstable/Editpoints';
import Points from './pages/Points';
import Player from './pages/Player';
import Addplayer from './players/Addplayer';
import Editplayer from './players/Editplayer';
import Result from './pages/Result';
import Addresult from './results/Addresult';
import EditResult from './results/Editresult';
import Login from './pages/Login';
import Home from './pages/Home';

function PrivateRoute({ children }) {
  const auth = localStorage.getItem('auth');
  return auth === 'true' ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path="/match" element={<PrivateRoute><Match /></PrivateRoute>} />
          <Route exact path="/addmatch" element={<PrivateRoute><Addmatch /></PrivateRoute>} />
          <Route exact path="/editmatch/:id" element={<PrivateRoute><Editmatch /></PrivateRoute>} />
          <Route exact path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
          <Route exact path="/addteam" element={<PrivateRoute><Addteam /></PrivateRoute>} />
          <Route exact path="/editteam/:teamid" element={<PrivateRoute><Editteam /></PrivateRoute>} />
          <Route exact path="/points" element={<PrivateRoute><Points /></PrivateRoute>} />
          <Route exact path="/addpoints" element={<PrivateRoute><Addpoints /></PrivateRoute>} />
          <Route exact path="/editpoints/:teamid" element={<PrivateRoute><Editpoints /></PrivateRoute>} />
          <Route exact path="/player" element={<PrivateRoute><Player /></PrivateRoute>} />
          <Route exact path="/addplayer" element={<PrivateRoute><Addplayer /></PrivateRoute>} />
          <Route exact path="/editplayer/:playerid" element={<PrivateRoute><Editplayer /></PrivateRoute>} />
          <Route exact path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
          <Route exact path="/addresult" element={<PrivateRoute><Addresult /></PrivateRoute>} />
          <Route exact path="/editresult/:matchid" element={<PrivateRoute><EditResult /></PrivateRoute>} />
          <Route exact path="/" element={<PrivateRoute><Navigate to="/" /></PrivateRoute>} /> 
        </Routes>
      </Router>
    </div>
  );
}
 export default App;

 
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './layout/Navbar';
// import Match from './pages/Match';
// import Editmatch from './matches/Editmatch';
// import Addmatch from './matches/Addmatch';
// import Addteam from './teams/Addteam';
// import Editteam from './teams/Editteam';
// import Team from './pages/Team';
// import Addpoints from './pointstable/Addpoints';
// import Editpoints from './pointstable/Editpoints';
// import Points from './pages/Points';
// import Player from './pages/Player';
// import Addplayer from './players/Addplayer';
// import Editplayer from './players/Editplayer';
// import Result from './pages/Result';
// import Addresult from './results/Addresult';
// import EditResult from './results/Editresult';
// import Login from './pages/Login';
// import Home from './pages/Home';

// function PrivateRoute({ children, adminOnly = false }) {
//   const auth = localStorage.getItem('auth');
//   const role = localStorage.getItem('role');

//   if (auth !== 'true') {
//     return <Navigate to="/login" />;
//   }

//   // If adminOnly is true and the role is not 'admin', restrict access
//   if (adminOnly && role !== 'admin') {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
//           <Route exact path="/match" element={<PrivateRoute><Match /></PrivateRoute>} />
//           <Route exact path="/addmatch" element={<PrivateRoute adminOnly={true}><Addmatch /></PrivateRoute>} />
//           <Route exact path="/editmatch/:id" element={<PrivateRoute adminOnly={true}><Editmatch /></PrivateRoute>} />
//           <Route exact path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
//           <Route exact path="/addteam" element={<PrivateRoute adminOnly={true}><Addteam /></PrivateRoute>} />
//           <Route exact path="/editteam/:teamid" element={<PrivateRoute adminOnly={true}><Editteam /></PrivateRoute>} />
//           <Route exact path="/points" element={<PrivateRoute><Points /></PrivateRoute>} />
//           <Route exact path="/addpoints" element={<PrivateRoute adminOnly={true}><Addpoints /></PrivateRoute>} />
//           <Route exact path="/editpoints/:teamid" element={<PrivateRoute adminOnly={true}><Editpoints /></PrivateRoute>} />
//           <Route exact path="/player" element={<PrivateRoute><Player /></PrivateRoute>} />
//           <Route exact path="/addplayer" element={<PrivateRoute adminOnly={true}><Addplayer /></PrivateRoute>} />
//           <Route exact path="/editplayer/:playerid" element={<PrivateRoute adminOnly={true}><Editplayer /></PrivateRoute>} />
//           <Route exact path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
//           <Route exact path="/addresult" element={<PrivateRoute adminOnly={true}><Addresult /></PrivateRoute>} />
//           <Route exact path="/editresult/:matchid" element={<PrivateRoute adminOnly={true}><EditResult /></PrivateRoute>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
