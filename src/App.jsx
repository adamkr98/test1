// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/Signup";
// import Profile from "./components/Profile";
// import PrivateRoutes from "./components/PrivateRoutes"; 
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";

// const App = ()=> {
//   return (
//     <Router>
//       <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<SignUp />} />
//       <Route path="/profile" element={
//           <PrivateRoutes>
//             <Profile />
//           </PrivateRoutes>
//         }
//       />
//     </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link here

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Profile from "./components/Profile";
import PrivateRoutes from "./components/PrivateRoutes"; 
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = ()=> {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"
        element={<Login />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      </Routes>
    </Router>
  );
}

export default App;

