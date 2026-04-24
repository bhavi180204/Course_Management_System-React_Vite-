
// // 1.to download the server --> npm i -g json-server
// // 2. to run the backend server --> json-server backend/db.json

// // 1.Axios to avoid fetch api ---> npm i axios

// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { v4 as randomId } from "uuid";
// const SignUp = () => {
//   let navigate = useNavigate();
//   let [formData, setFormData] = useState({
//     id: randomId(),
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   let { password, confirmPassword, email, username } = formData;

//   let handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   let handleSubmit = async (e) => {
//     e.preventDefault();

//     // ! checking if user already exists
//     let alreadyExist = await axios.get(
//       `http://localhost:3000/users?email=${email}`,
//     );
//     console.log(alreadyExist);

//     if (alreadyExist.data.length > 0) {
//       toast.error("User Already Exists");
//     } else {
//       try {
//         let res = await axios.post("http://localhost:3000/users", formData);
//         console.log(res);
//         if (res.status == 201) {
//           toast.success("Account Created Successfully");
//           navigate("/login");
//         }
//       } catch (err) {
//         toast.error("Some error has occured");
//       }
//     }
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Sign Up
//         </h2>

//         {/* Username */}
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-1">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleChange}
//             name="username"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter username"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-1">Email</label>
//           <input
//             type="email"
//             onChange={handleChange}
//             value={email}
//             name="email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter email"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-1">Password</label>
//           <input
//             type="password"
//             onChange={handleChange}
//             value={password}
//             name="password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter password"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="block text-gray-600 mb-1">Confirm Password</label>
//           <input
//             type="password"
//             onChange={handleChange}
//             value={confirmPassword}
//             name="confirmPassword"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Confirm password"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { v4 as randomId } from "uuid";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: randomId(),
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const {
    username,
    email,
    password,
    confirmPassword,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match ❌");
    }

    try {
      const alreadyExist = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );

      if (alreadyExist.data.length > 0) {
        toast.error("User already exists ⚠️");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/users",
        formData
      );

      if (res.status === 201) {
        toast.success("Account created 🎉");
        navigate("/login");
      }

      setFormData({
        id: randomId(),
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
      });
    } catch (err) {
      toast.error("Error creating account ❌");
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        px-4 sm:px-6
        py-6 sm:py-10
        bg-gradient-to-br
        from-blue-50 via-purple-50 to-pink-50
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md
          p-5 sm:p-8
          rounded-2xl sm:rounded-3xl
          bg-white/80
          backdrop-blur-lg
          border border-purple-100
          shadow-2xl
          space-y-5
        "
      >
        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl
            font-extrabold text-center
            bg-gradient-to-r
            from-blue-600 via-purple-600 to-pink-600
            bg-clip-text text-transparent
          "
        >
          Create Account ✨
        </h2>

        <p className="text-center text-gray-500 text-sm">
          Join and start learning today 🚀
        </p>

        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">
            Username
          </label>

          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter username"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              border rounded-xl
              focus:ring-2 focus:ring-blue-400
              outline-none
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              border rounded-xl
              focus:ring-2 focus:ring-purple-400
              outline-none
            "
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="••••••••"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              border rounded-xl
              focus:ring-2 focus:ring-pink-400
              outline-none
            "
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm text-gray-600">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              border rounded-xl
              focus:ring-2 focus:ring-indigo-400
              outline-none
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full py-2.5
            rounded-xl
            font-semibold text-white
            bg-gradient-to-r
            from-blue-500 via-purple-500 to-pink-500
            hover:scale-105
            transition duration-300
            shadow-lg
          "
        >
          Sign Up 🚀
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              font-semibold
              bg-gradient-to-r
              from-blue-600 to-purple-600
              bg-clip-text text-transparent
            "
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;