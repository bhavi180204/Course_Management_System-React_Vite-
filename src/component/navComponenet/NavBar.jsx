// import { Link } from "react-router-dom";

// const  NavBar = ()=>{
//     return(
//         // <div>
//         //     <Link to="/">Course</Link>
//         //     <Link to="/login">Login</Link>
//         //     <Link to="/signUp">SignUp</Link>
//         //     <Link to="/cart">Cart</Link>
//         // </div>




//     <div className="flex gap-6 text-gray-700 font-medium">

//       <Link to="/" className="hover:text-blue-600 transition duration-200">Course</Link>

//       <Link to="/login" className="hover:text-blue-600 transition duration-200"> Login</Link>

//       <Link to="/signUp" className="hover:text-blue-600 transition duration-200">SignUp</Link>

//       <Link  to="/cart" className="hover:text-blue-600 transition duration-200"> Cart</Link>

//     </div>
//     )
// }

// export default NavBar;


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Auth } from "../../../context/AuthContext";

// const Navbar = () => {
//   let { user, logout } = useContext(Auth);
//   return (
//     <nav className="flex space-x-6 text-gray-700 font-medium">
//       <Link
//         to="/"
//         className="hover:text-blue-600 transition-colors duration-200"
//       >
//         Courses
//       </Link>
      
//       {user?.role == "admin" && (
//         <Link to="/addCourse" > Add Courses</Link>
//       )}

//       {user ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <Link
//           to="/login"
//           className="hover:text-blue-600 transition-colors duration-200"
//         >
//           Login
//         </Link>
//       )}
//       <Link
//         to="/signup"
//         className="hover:text-blue-600 transition-colors duration-200"
//       >
//         SignUp
//       </Link>
//       <Link
//         to="/cart"
//         className="hover:text-blue-600 transition-colors duration-200"
//       >
//         Cart
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(Auth);

  return (
    <nav
      className="flex items-center gap-4 
      font-semibold"
    >

      {/* courses */}
      <Link
        to="/"
        className="px-3 py-1 rounded-lg 
        text-gray-700 
        hover:text-white 
        hover:bg-gradient-to-r 
        hover:from-blue-500 hover:to-purple-500
        transition duration-300"
      >
        Courses
      </Link>

      {/* admin link */}
      {user?.role === "admin" && (

        <Link
          to="/addCourse"
          className="px-3 py-1 rounded-lg
          text-gray-700
          hover:text-white
          hover:bg-gradient-to-r 
          hover:from-green-500 hover:to-emerald-500
          transition duration-300"
        >
          Add Course
        </Link>

      )}

      {/* cart */}
      <Link
        to="/cart"
        className="px-3 py-1 rounded-lg
        text-gray-700
        hover:text-white
        hover:bg-gradient-to-r 
        hover:from-pink-500 hover:to-red-500
        transition duration-300"
      >
        🛒 Cart
      </Link>

      {/* login / logout */}
      {user ? (

        <button
          onClick={logout}
          className="px-4 py-1.5 
          rounded-lg text-white
          bg-gradient-to-r from-red-500 to-pink-500
          hover:scale-105 
          transition duration-300 shadow"
        >
          Logout
        </button>

      ) : (

        <Link
          to="/login"
          className="px-4 py-1.5 
          rounded-lg text-white
          bg-gradient-to-r from-blue-500 to-indigo-500
          hover:scale-105 
          transition duration-300 shadow"
        >
          Login
        </Link>

      )}

      {/* signup */}
      {!user && (

        <Link
          to="/signup"
          className="px-4 py-1.5 
          rounded-lg text-white
          bg-gradient-to-r from-purple-500 to-pink-500
          hover:scale-105 
          transition duration-300 shadow"
        >
          Sign Up
        </Link>

      )}

    </nav>
  );
};

export default Navbar;