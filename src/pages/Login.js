
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role,setRole] = useState('user');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === 'admin' && password === 'admin' && role === 'admin') {
//       localStorage.setItem('auth', 'true');
//       localStorage.setItem('role', 'admin');  // Store admin role
//       navigate('/');  // Redirect to the Match page
//     } else if (role === 'user') {
//       localStorage.setItem('auth', 'true');
//       localStorage.setItem('role', 'user');  // Store user role
//       navigate('/');  // Redirect to the Match page
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Select Role</label>
//           <select
//             className="form-control"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }
//  export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin@gmail.com' && password === 'admin' && role === 'admin') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', 'admin');  // Store admin role
      navigate('/');  // Redirect to the Match page
    } else if (role === 'user') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', 'user');  // Store user role
      navigate('/');  // Redirect to the Match page
    } else {
      alert('Invalid credentials');
    }
  };
  const handleUserLogin = () => {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', 'user');  // Store user role
    navigate('/');  // Redirect to the Match page
  };
  return (
 /* From Uiverse.io by mobinkakei */ 
 <form onSubmit={handleLogin}>
<div
  class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
  <div class="flex flex-col gap-4 p-6">
    <div class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      <input
        placeholder=""
        value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        class="outline-danger mb-2 mt-4 mr-3"
      />
      <label
      >
        Email
      </label>
    </div>
    <div class=" ml-10">
      <input
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        class="outline-danger mb-3 pl-5"
      />
      <label
        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        Password
      </label>
    </div>
  </div>
  <div class="p-6 pt-0">
    <button
      className="btn btn-outline-danger mb-3"
   onClick={handleLogin}
   >
      Sign In
    </button>
<br></br>
      Not an Admin?
      <button className="btn btn-outline-danger" href="/" value={role}
           onClick={handleUserLogin}>Login As User</button>
  </div>
</div>
</form>
);
}
 export default Login;

//  data-ripple-light="true"
//       type="button"
//       class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"