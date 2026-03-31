// import axios from "axios";
// import React, { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { v4 as randomId } from "uuid";
// import { Auth } from "../../context/AuthContext";


// const Login = () => {
//   let { login } = useContext(Auth);
//   let navigate = useNavigate();

//   let [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });

//   let { password, email, role } = formData;

//   let handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     let res = await axios.get(
//       `http://localhost:3000/users?email=${email}&password=${password}&role=${role}`,
//     );
//     console.log(res.status);
//     if (res.status == 200 && res.data.length > 0) {
//       login(res.data[0]);
//       toast.success("Login Successfull");
//       navigate("/");
//     } else {
//       toast.error("User not found");
//     }

//     setFormData({
//       email: "",
//       password: "",
//       role: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
//       {/* Card */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
//       >
//         <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
//           Login
//         </h2>
//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">Email</label>
//           <input
//             type="email"
//             onChange={handleChange}
//             value={email}
//             name="email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//             placeholder="Enter email"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">Password</label>
//           <input
//             type="password"
//             onChange={handleChange}
//             value={password}
//             name="password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//             placeholder="Enter password"
//           />
//         </div>
//         <div>
//           <label htmlFor="">Role</label>
//           User
//           <input
//             type="radio"
//             onChange={handleChange}
//             name="role"
//             value="user"
//             checked={role == "user"}
//           />
//           Admin
//           <input
//             type="radio"
//             onChange={handleChange}
//             name="role"
//             value="admin"
//             checked={role == "admin"}
//           />
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
//         >
//           Login
//         </button>
//       </form>

//       {/* Login link */}
//       <p className="mt-5 text-gray-600 text-sm">
//         Don't have an account?{" "}
//         <Link
//           to="/signup"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           SignUp
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(Auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { password, email, role } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `http://localhost:3000/users?email=${email}&password=${password}&role=${role}`
    );

    if (res.status === 200 && res.data.length > 0) {
      login(res.data[0]);
      toast.success("Login Successful 🎉");
      navigate("/");
    } else {
      toast.error("User not found ❌");
    }

    setFormData({
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-purple-100 shadow-2xl space-y-5"
      >
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 text-sm">
          Login to continue learning 🚀
        </p>

        <div>
          <label className="text-sm text-gray-600">Email</label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Select Role</label>

          <div className="flex gap-5 mt-2">
            <label className="flex items-center gap-2 px-3 py-1 rounded-lg border cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={handleChange}
              />
              User
            </label>

            <label className="flex items-center gap-2 px-3 py-1 rounded-lg border cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition duration-300 shadow-lg"
        >
          Login 🔐
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;