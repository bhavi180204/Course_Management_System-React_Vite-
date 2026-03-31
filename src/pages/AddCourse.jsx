// import axios from "axios";
// import React, { useState } from "react";
// import { v4 as rId } from "uuid";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//     let navigate = useNavigate();
//     const [courseData, setCourseData] = useState({
//         id: rId(),
//         c_name: "",
//         c_img: "",
//         c_duration: "",
//         c_fee: "",
//         c_author: "",
//     });

//     const { c_name, c_img, c_duration, c_fee, c_author } = courseData;

//     const handleChange = (e) => {
//         setCourseData({ ...courseData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!c_name || !c_duration || !c_fee || !c_author || !c_img) {
//             return toast.error("All fields are required");
//         }
//         try {
//             let res = await axios.post("http://localhost:3000/course", courseData);
//             if (res.status == 201) {
//                 toast.success("Course added successfully");
//                 navigate("/");
//             }
//             setCourseData({
//                 id: rId(),
//                 c_name: "",
//                 c_img: "",
//                 c_duration: "",
//                 c_fee: "",
//                 c_author: "",
//             });
//         } catch (err) {
//             toast.error("Error adding course");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border"
//             >
//                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//                     Add New Course
//                 </h2>

//                 {/* Course Name */}
//                 <div className="mb-4">
//                     <label className="block text-sm text-gray-600 mb-1">
//                         Course Name
//                     </label>
//                     <input
//                         type="text"
//                         name="c_name"
//                         value={c_name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                         placeholder="Enter course name"
//                     />
//                 </div>

//                 {/* Duration */}
//                 <div className="mb-4">
//                     <label className="block text-sm text-gray-600 mb-1">Duration</label>
//                     <input
//                         type="text"
//                         name="c_duration"
//                         value={c_duration}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                         placeholder="e.g. 3 Months"
//                     />
//                 </div>

//                 {/* Author */}
//                 <div className="mb-4">
//                     <label className="block text-sm text-gray-600 mb-1">Author</label>
//                     <input
//                         type="text"
//                         name="c_author"
//                         value={c_author}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                         placeholder="Instructor name"
//                     />
//                 </div>

//                 {/* Fee */}
//                 <div className="mb-4">
//                     <label className="block text-sm text-gray-600 mb-1">Course Fee</label>
//                     <input
//                         type="number"
//                         name="c_fee"
//                         value={c_fee}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                         placeholder="Enter fee"
//                     />
//                 </div>

//                 {/* Image URL */}
//                 <div className="mb-6">
//                     <label className="block text-sm text-gray-600 mb-1">
//                         Course Image URL
//                     </label>
//                     <input
//                         type="url"
//                         name="c_img"
//                         value={c_img}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                         placeholder="Paste image link"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                     Add Course
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddCourse;

// import axios from "axios";
// import React, { useState } from "react";
// import { v4 as rId } from "uuid";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//   let navigate = useNavigate();
//   const [courseData, setCourseData] = useState({
//     id: rId(),
//     c_name: "",
//     c_img: "",
//     c_duration: "",
//     c_fee: "",
//     c_author: "",
//   });

//   const { c_name, c_img, c_duration, c_fee, c_author } = courseData;

//   const handleChange = (e) => {
//     setCourseData({ ...courseData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!c_name || !c_duration || !c_fee || !c_author || !c_img) {
//       return toast.error("All fields are required");
//     }
//     try {
//       let res = await axios.post("http://localhost:3000/course", courseData);
//       if (res.status == 201) {
//         toast.success("Course added successfully");
//         navigate("/");
//       }
//       setCourseData({
//         id: rId(),
//         c_name: "",
//         c_img: "",
//         c_duration: "",
//         c_fee: "",
//         c_author: "",
//       });
//     } catch (err) {
//       toast.error("Error adding course");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Add New Course
//         </h2>

//         {/* Course Name */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">
//             Course Name
//           </label>
//           <input
//             type="text"
//             name="c_name"
//             value={c_name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="Enter course name"
//           />
//         </div>

//         {/* Duration */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">Duration</label>
//           <input
//             type="text"
//             name="c_duration"
//             value={c_duration}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="e.g. 3 Months"
//           />
//         </div>

//         {/* Author */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">Author</label>
//           <input
//             type="text"
//             name="c_author"
//             value={c_author}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="Instructor name"
//           />
//         </div>

//         {/* Fee */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">Course Fee</label>
//           <input
//             type="number"
//             name="c_fee"
//             value={c_fee}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="Enter fee"
//           />
//         </div>

//         {/* Image URL */}
//         <div className="mb-6">
//           <label className="block text-sm text-gray-600 mb-1">
//             Course Image URL
//           </label>
//           <input
//             type="url"
//             name="c_img"
//             value={c_img}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="Paste image link"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Add Course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCourse;


import axios from "axios";
import React, { useState } from "react";
import { v4 as rId } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    id: rId(),
    c_name: "",
    c_img: "",
    c_duration: "",
    c_fee: "",
    c_author: "",
  });

  const { c_name, c_img, c_duration, c_fee, c_author } = courseData;

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!c_name || !c_duration || !c_fee || !c_author || !c_img) {
      return toast.error("All fields are required");
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/course",
        courseData
      );

      if (res.status === 201) {
        toast.success("Course Added Successfully 🎉");
        navigate("/");
      }

      setCourseData({
        id: rId(),
        c_name: "",
        c_img: "",
        c_duration: "",
        c_fee: "",
        c_author: "",
      });

    } catch (err) {
      toast.error("Error adding course ❌");
    }
  };

  return (

    <div
      className="
      min-h-screen
      flex items-center justify-center
      px-4 py-10
      bg-gradient-to-br
      from-blue-50 via-purple-50 to-pink-50
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
        w-full max-w-xl
        bg-white/80 backdrop-blur-lg
        border border-purple-100
        rounded-3xl
        shadow-2xl
        p-8
        space-y-5
        "
      >

        <h2
          className="
          text-3xl font-extrabold text-center
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
          bg-clip-text text-transparent
          "
        >
          Add New Course
        </h2>

        {/* name */}
        <div>

          <label className="text-sm text-gray-600">
            Course Name
          </label>

          <input
            type="text"
            name="c_name"
            value={c_name}
            onChange={handleChange}

            className="
            w-full mt-1 px-4 py-2
            rounded-xl border
            focus:ring-2 focus:ring-purple-400
            outline-none
            transition
            "

            placeholder="React Development"
          />

        </div>

        {/* duration */}
        <div>

          <label className="text-sm text-gray-600">
            Duration
          </label>

          <input
            type="text"
            name="c_duration"
            value={c_duration}
            onChange={handleChange}

            className="
            w-full mt-1 px-4 py-2
            rounded-xl border
            focus:ring-2 focus:ring-pink-400
            outline-none
            "

            placeholder="3 months"
          />

        </div>

        {/* author */}
        <div>

          <label className="text-sm text-gray-600">
            Instructor
          </label>

          <input
            type="text"
            name="c_author"
            value={c_author}
            onChange={handleChange}

            className="
            w-full mt-1 px-4 py-2
            rounded-xl border
            focus:ring-2 focus:ring-blue-400
            outline-none
            "

            placeholder="John Doe"
          />

        </div>

        {/* fee */}
        <div>

          <label className="text-sm text-gray-600">
            Course Fee
          </label>

          <input
            type="number"
            name="c_fee"
            value={c_fee}
            onChange={handleChange}

            className="
            w-full mt-1 px-4 py-2
            rounded-xl border
            focus:ring-2 focus:ring-green-400
            outline-none
            "

            placeholder="4999"
          />

        </div>

        {/* image */}
        <div>

          <label className="text-sm text-gray-600">
            Course Image URL
          </label>

          <input
            type="url"
            name="c_img"
            value={c_img}
            onChange={handleChange}

            className="
            w-full mt-1 px-4 py-2
            rounded-xl border
            focus:ring-2 focus:ring-indigo-400
            outline-none
            "

            placeholder="https://image-link.com"
          />

        </div>

        {/* button */}
        <button
          type="submit"

          className="
          w-full py-2.5 mt-2
          rounded-xl font-semibold text-white

          bg-gradient-to-r
          from-blue-500 via-purple-500 to-pink-500

          hover:scale-105
          transition duration-300
          shadow-lg
          "
        >
          Add Course 🚀
        </button>

      </form>

    </div>
  );
};

export default AddCourse;