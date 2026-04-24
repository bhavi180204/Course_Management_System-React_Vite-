
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CourseCard from "../component/CourseCard/CourseCard";
// import toast from "react-hot-toast";

// const CourseList = () => {
//   const [allCourses, setAllCourses] = useState([]);

//   const getCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/course");
//       setAllCourses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

// //Handle Delete-->
// const handleDelete = async (id) => {
//   try {
//     await axios.delete(`http://localhost:3000/course/${id}`);

//     toast.success("Course deleted successfully ✅");

//     // update UI
//     setAllCourses(prev => prev.filter(course => course.id !== id));

//   } catch (error) {
//     toast.error("Delete failed ❌");
//   }
// };

//   return (
//     <div className="flex flex-wrap justify-center gap-5 p-5">
//       {allCourses.map((course) => (
//         <CourseCard key={course.id} {...course}  handleDelete={handleDelete}/>
//       ))}
//     </div>
//   );
// };

// export default CourseList;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CourseCard from "../component/CourseCard/CourseCard";
// import toast from "react-hot-toast";

// const CourseList = () => {
//   const [allCourses, setAllCourses] = useState([]);

//   const getCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/course");
//       setAllCourses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/course/${id}`);
//       toast.success("Course deleted successfully ✅");
//       setAllCourses(prev => prev.filter(course => course.id !== id));
//     } catch (error) {
//       toast.error("Delete failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//           Explore Courses
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Choose your favorite course and start learning today 🚀
//         </p>
//       </div>

//       {allCourses.length > 0 ? (
//         <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center">
//           {allCourses.map(course => (
//             <CourseCard key={course.id} {...course} handleDelete={handleDelete}/>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center mt-20 text-gray-500">
//           <h2 className="text-xl font-semibold">No Courses Available</h2>
//           <p className="mt-2">Add a new course to see it here 📚</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseList;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CourseCard from "../component/CourseCard/CourseCard";
// import toast from "react-hot-toast";

// const CourseList = () => {
//   const [allCourses, setAllCourses] = useState([]);

//   const getCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/course");
//       setAllCourses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/course/${id}`);

//       toast.success("Course deleted successfully ✅");

//       setAllCourses((prev) =>
//         prev.filter((course) => course.id !== id)
//       );
//     } catch (error) {
//       toast.error("Delete failed ❌");
//     }
//   };

//   return (
//     <div
//       className="
//         min-h-screen
//         px-6
//         py-10
//         bg-gradient-to-br
//         from-blue-50
//         via-purple-50
//         to-pink-50
//       "
//     >
//       <div className="text-center mb-10">
//         <h1
//           className="
//             text-3xl
//             md:text-4xl
//             font-extrabold
//             bg-gradient-to-r
//             from-blue-600
//             via-purple-600
//             to-pink-600
//             bg-clip-text
//             text-transparent
//           "
//         >
//           Explore Courses
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Choose your favorite course and start learning today 🚀
//         </p>
//       </div>

//       {allCourses.length > 0 ? (
//         <div
//           className="
//             max-w-7xl
//             mx-auto
//             grid
//             gap-8
//             sm:grid-cols-2
//             md:grid-cols-3
//             lg:grid-cols-4
//             place-items-center
//           "
//         >
//           {allCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               {...course}
//               handleDelete={handleDelete}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center mt-20 text-gray-500">
//           <h2 className="text-xl font-semibold">
//             No Courses Available
//           </h2>

//           <p className="mt-2">
//             Add a new course to see it here 📚
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseList;



import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../component/CourseCard/CourseCard";
import toast from "react-hot-toast";

const CourseList = () => {
  const [allCourses, setAllCourses] = useState([]);

  const getCourses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/course"
      );

      setAllCourses(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch courses ❌");
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/course/${id}`
      );

      toast.success("Course deleted successfully ✅");

      setAllCourses((prev) =>
        prev.filter((course) => course.id !== id)
      );
    } catch (error) {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div
      className="
        min-h-screen
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-10
        bg-gradient-to-br
        from-blue-50
        via-purple-50
        to-pink-50
      "
    >
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-10">
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-extrabold
            bg-gradient-to-r
            from-blue-600
            via-purple-600
            to-pink-600
            bg-clip-text
            text-transparent
          "
        >
          Explore Courses
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Choose your favorite course and start learning today 🚀
        </p>
      </div>

      {/* Course Grid */}
      {allCourses.length > 0 ? (
        <div
          className="
            max-w-7xl mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6 sm:gap-8
          "
        >
          {allCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16 text-gray-500">
          <h2 className="text-lg sm:text-xl font-semibold">
            No Courses Available
          </h2>

          <p className="mt-2 text-sm sm:text-base">
            Add a new course to see it here 📚
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseList;
// // // 1.to change the port no -->json-server backend/db.json --port=5000