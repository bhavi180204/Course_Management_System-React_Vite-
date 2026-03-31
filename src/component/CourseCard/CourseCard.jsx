
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Auth } from "../../../context/AuthContext";

// const CourseCard = ({
//   handleDelete,
//   c_duration,
//   c_img,
//   c_name,
//   c_fee,
//   c_author,
//   id,
// }) => {
//   const { user } = useContext(Auth);

//   return (
//     <div
//       className="bg-white border border-gray-200 rounded-2xl 
//       shadow-sm hover:shadow-2xl hover:-translate-y-1 
//       transition-all duration-300 overflow-hidden 
//       w-full max-w-sm group"
//     >
//       {/* Image */}
//       <div className="relative h-52 w-full overflow-hidden">
//         <img
//           src={c_img}
//           alt={c_name}
//           className="w-full h-full object-cover 
//           group-hover:scale-110 transition duration-500"
//         />

//         {/* gradient overlay */}
//         <div
//           className="absolute inset-0 
//           bg-gradient-to-t from-black/40 via-black/10 to-transparent"
//         />

//         {/* duration badge */}
//         <span
//           className="absolute bottom-3 left-3 
//           bg-white/90 backdrop-blur text-blue-600 
//           text-xs font-semibold px-3 py-1 rounded-full shadow"
//         >
//           {c_duration} months
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col gap-3">
//         <h3
//           className="text-lg font-semibold text-gray-800 
//           line-clamp-1 group-hover:text-blue-600 transition"
//         >
//           {c_name}
//         </h3>

//         <p className="text-sm text-gray-500">
//           Instructor:{" "}
//           <span className="font-medium text-gray-700">
//             {c_author}
//           </span>
//         </p>

//         {/* price */}
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold text-green-600">
//             ₹{c_fee}
//           </span>

//           <span
//             className="text-xs bg-green-100 
//             text-green-600 px-2 py-1 rounded-full"
//           >
//             Bestseller
//           </span>
//         </div>

//         {/* Actions */}
//         {user?.role === "admin" ? (
//           <div className="flex gap-3 mt-3">
//             <Link
//               to={`/update/${id}`}
//               className="flex-1 text-center 
//               bg-amber-400 hover:bg-amber-500 
//               text-white py-2 rounded-lg 
//               text-sm font-medium shadow 
//               hover:shadow-md transition"
//             >
//               Update
//             </Link>

//             <button
//               onClick={() => handleDelete?.(id)}
//               className="flex-1 
//               bg-red-500 hover:bg-red-600 
//               text-white py-2 rounded-lg 
//               text-sm font-medium shadow 
//               hover:shadow-md transition"
//             >
//               Delete
//             </button>
//           </div>
//         ) : (
//           <Link
//             to={`/course/${id}`}
//             className="mt-3 block w-full text-center 
//             bg-blue-600 hover:bg-blue-700 
//             text-white py-2 rounded-lg 
//             font-medium shadow 
//             hover:shadow-md transition"
//           >
//             View Course
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../../context/AuthContext";

const CourseCard = ({
  handleDelete,
  c_duration,
  c_img,
  c_name,
  c_fee,
  c_author,
  id,
}) => {
  const { user } = useContext(Auth);

  return (
    <div
      className="rounded-2xl overflow-hidden 
      bg-gradient-to-br from-white to-blue-50
      shadow-md hover:shadow-2xl 
      hover:-translate-y-2 
      transition-all duration-300 
      group border border-blue-100"
    >
      {/* image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={c_img}
          alt={c_name}
          className="w-full h-full object-cover 
          group-hover:scale-110 transition duration-500"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* duration badge */}
        <span
          className="absolute bottom-3 left-3
          bg-gradient-to-r from-pink-500 to-purple-500
          text-white text-xs px-3 py-1 rounded-full shadow-md"
        >
          {c_duration} months
        </span>
      </div>

      {/* content */}
      <div className="p-5 space-y-3">

        <h3
          className="text-lg font-bold 
          text-gray-800 group-hover:text-purple-600 transition"
        >
          {c_name}
        </h3>

        <p className="text-sm text-gray-600">
          Instructor :
          <span className="ml-1 font-medium text-indigo-600">
            {c_author}
          </span>
        </p>

        {/* price section */}
        <div className="flex justify-between items-center">

          <span
            className="text-xl font-bold 
            bg-gradient-to-r from-green-500 to-emerald-500
            text-white px-3 py-1 rounded-lg shadow"
          >
            ₹{c_fee}
          </span>

          <span
            className="text-xs font-semibold
            bg-yellow-100 text-yellow-700 
            px-2 py-1 rounded-full"
          >
            ⭐ Popular
          </span>

        </div>

        {/* buttons */}
        {user?.role === "admin" ? (

          <div className="flex gap-3 pt-2">

            <Link
              to={`/update/${id}`}
              className="flex-1 text-center py-2 rounded-lg 
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-white font-medium 
              hover:scale-105 transition shadow-md"
            >
              Update
            </Link>

            <button
              onClick={() => handleDelete?.(id)}
              className="flex-1 py-2 rounded-lg 
              bg-gradient-to-r from-red-500 to-pink-500
              text-white font-medium 
              hover:scale-105 transition shadow-md"
            >
              Delete
            </button>

          </div>

        ) : (

          <Link
            to={`/course/${id}`}
            className="block w-full text-center py-2 mt-2
            rounded-lg font-semibold text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600
            hover:scale-105 transition shadow-md"
          >
            View Course
          </Link>

        )}

      </div>
    </div>
  );
};

export default CourseCard;