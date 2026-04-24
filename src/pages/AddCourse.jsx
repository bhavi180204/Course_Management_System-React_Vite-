
// import axios from "axios";
// import React, { useState } from "react";
// import { v4 as rId } from "uuid";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//   const navigate = useNavigate();

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
//     setCourseData({
//       ...courseData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!c_name || !c_duration || !c_fee || !c_author || !c_img) {
//       return toast.error("All fields are required");
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/course",
//         courseData
//       );

//       if (res.status === 201) {
//         toast.success("Course Added Successfully 🎉");
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
//       toast.error("Error adding course ❌");
//     }
//   };

//   return (

//     <div
//       className="
//       min-h-screen
//       flex items-center justify-center
//       px-4 py-10
//       bg-gradient-to-br
//       from-blue-50 via-purple-50 to-pink-50
//       "
//     >

//       <form
//         onSubmit={handleSubmit}
//         className="
//         w-full max-w-xl
//         bg-white/80 backdrop-blur-lg
//         border border-purple-100
//         rounded-3xl
//         shadow-2xl
//         p-8
//         space-y-5
//         "
//       >

//         <h2
//           className="
//           text-3xl font-extrabold text-center
//           bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
//           bg-clip-text text-transparent
//           "
//         >
//           Add New Course
//         </h2>

//         {/* name */}
//         <div>

//           <label className="text-sm text-gray-600">
//             Course Name
//           </label>

//           <input
//             type="text"
//             name="c_name"
//             value={c_name}
//             onChange={handleChange}

//             className="
//             w-full mt-1 px-4 py-2
//             rounded-xl border
//             focus:ring-2 focus:ring-purple-400
//             outline-none
//             transition
//             "

//             placeholder="React Development"
//           />

//         </div>

//         {/* duration */}
//         <div>

//           <label className="text-sm text-gray-600">
//             Duration
//           </label>

//           <input
//             type="text"
//             name="c_duration"
//             value={c_duration}
//             onChange={handleChange}

//             className="
//             w-full mt-1 px-4 py-2
//             rounded-xl border
//             focus:ring-2 focus:ring-pink-400
//             outline-none
//             "

//             placeholder="3 months"
//           />

//         </div>

//         {/* author */}
//         <div>

//           <label className="text-sm text-gray-600">
//             Instructor
//           </label>

//           <input
//             type="text"
//             name="c_author"
//             value={c_author}
//             onChange={handleChange}

//             className="
//             w-full mt-1 px-4 py-2
//             rounded-xl border
//             focus:ring-2 focus:ring-blue-400
//             outline-none
//             "

//             placeholder="John Doe"
//           />

//         </div>

//         {/* fee */}
//         <div>

//           <label className="text-sm text-gray-600">
//             Course Fee
//           </label>

//           <input
//             type="number"
//             name="c_fee"
//             value={c_fee}
//             onChange={handleChange}

//             className="
//             w-full mt-1 px-4 py-2
//             rounded-xl border
//             focus:ring-2 focus:ring-green-400
//             outline-none
//             "

//             placeholder="4999"
//           />

//         </div>

//         {/* image */}
//         <div>

//           <label className="text-sm text-gray-600">
//             Course Image URL
//           </label>

//           <input
//             type="url"
//             name="c_img"
//             value={c_img}
//             onChange={handleChange}

//             className="
//             w-full mt-1 px-4 py-2
//             rounded-xl border
//             focus:ring-2 focus:ring-indigo-400
//             outline-none
//             "

//             placeholder="https://image-link.com"
//           />

//         </div>

//         {/* button */}
//         <button
//           type="submit"

//           className="
//           w-full py-2.5 mt-2
//           rounded-xl font-semibold text-white

//           bg-gradient-to-r
//           from-blue-500 via-purple-500 to-pink-500

//           hover:scale-105
//           transition duration-300
//           shadow-lg
//           "
//         >
//           Add Course 🚀
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
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-10
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
          rounded-2xl sm:rounded-3xl
          shadow-2xl
          p-5 sm:p-8
          space-y-4 sm:space-y-5
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
          Add New Course
        </h2>

        {/* Course Name */}
        <div>
          <label className="text-sm text-gray-600">
            Course Name
          </label>

          <input
            type="text"
            name="c_name"
            value={c_name}
            onChange={handleChange}
            placeholder="React Development"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              rounded-xl border
              focus:ring-2 focus:ring-purple-400
              outline-none transition
            "
          />
        </div>

        {/* Duration */}
        <div>
          <label className="text-sm text-gray-600">
            Duration
          </label>

          <input
            type="text"
            name="c_duration"
            value={c_duration}
            onChange={handleChange}
            placeholder="3 months"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              rounded-xl border
              focus:ring-2 focus:ring-pink-400
              outline-none transition
            "
          />
        </div>

        {/* Instructor */}
        <div>
          <label className="text-sm text-gray-600">
            Instructor
          </label>

          <input
            type="text"
            name="c_author"
            value={c_author}
            onChange={handleChange}
            placeholder="John Doe"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              rounded-xl border
              focus:ring-2 focus:ring-blue-400
              outline-none transition
            "
          />
        </div>

        {/* Course Fee */}
        <div>
          <label className="text-sm text-gray-600">
            Course Fee
          </label>

          <input
            type="number"
            name="c_fee"
            value={c_fee}
            onChange={handleChange}
            placeholder="4999"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              rounded-xl border
              focus:ring-2 focus:ring-green-400
              outline-none transition
            "
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm text-gray-600">
            Course Image URL
          </label>

          <input
            type="url"
            name="c_img"
            value={c_img}
            onChange={handleChange}
            placeholder="https://image-link.com"
            className="
              w-full mt-1
              px-3 sm:px-4 py-2
              rounded-xl border
              focus:ring-2 focus:ring-indigo-400
              outline-none transition
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full py-2.5 mt-2
            rounded-xl
            text-sm sm:text-base
            font-semibold text-white
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