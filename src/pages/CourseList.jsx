// // 

// // const CourseList = () => {

// //   const courses = [
// //     {
// //       id: 1,
// //       title: "React JS Course",
// //       price: 999,
// //       image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
// //     },
// //     {
// //       id: 2,
// //       title: "Java Full Stack",
// //       price: 1999,
// //       image: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
// //     },
// //     {
// //       id: 3,
// //       title: "Spring Boot",
// //       price: 1499,
// //       image: "https://cdn-icons-png.flaticon.com/512/919/919836.png"
// //     },
// //     {
// //       id: 4,
// //       title: "SQL Database",
// //       price: 799,
// //       image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
// //     }
// //   ];

// //   return (

// //     <div className="p-8">

// //       <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
// //         Available Courses
// //       </h1>

// //       <div className="grid md:grid-cols-4 gap-6">

// //         {
// //           courses.map((course) => (

// //             <div
// //               key={course.id}
// //               className="bg-white shadow-lg rounded-2xl p-5 text-center hover:shadow-xl transition"
// //             >

// //               <img
// //                 src={course.image}
// //                 alt=""
// //                 className="h-24 mx-auto mb-4"
// //               />

// //               <h2 className="text-xl font-semibold mb-2">
// //                 {course.title}
// //               </h2>

// //               <p className="text-gray-600 mb-3">
// //                 ₹ {course.price}
// //               </p>

// //               <button
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// //               >
// //                 Add to Cart
// //               </button>

// //             </div>

// //           ))
// //         }

// //       </div>

// //     </div>

// //   );
// // };

// // export default CourseList;

// const CourseList = () => {

//   const courses = [
//     { id: 1, title: "React JS", price: 999 },
//     { id: 2, title: "Java Full Stack", price: 1999 },
//     { id: 3, title: "Spring Boot", price: 1499 },
//     { id: 4, title: "SQL", price: 799 }
//   ];

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">

//       <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//         📚 Course List
//       </h1>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

//         {
//           courses.map(course => (

//             <div
//               key={course.id}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border"
//             >

//               <div className="h-32 flex items-center justify-center text-5xl">
//                 🎓
//               </div>

//               <h2 className="text-xl font-semibold text-gray-800 mt-4 text-center">
//                 {course.title}
//               </h2>

//               <p className="text-center text-gray-500 mt-2">
//                 Price
//               </p>

//               <p className="text-center text-2xl font-bold text-indigo-600 mt-1">
//                 ₹ {course.price}
//               </p>

//               <button
//                 className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 active:scale-95 transition"
//               >
//                 Add to Cart
//               </button>

//             </div>

//           ))
//         }

//       </div>

//     </div>

//   );
// };

// export default CourseList;

const CourseList = () => {

  const courses = [
    {
      id: 1,
      title: "React JS",
      price: 999,
      image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },
    {
      id: 2,
      title: "Java Full Stack",
      price: 1999,
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
    },
    {
      id: 3,
      title: "Spring Boot",
      price: 1499,
      image: "https://cdn-icons-png.flaticon.com/512/919/919836.png"
    },
    {
      id: 4,
      title: "SQL",
      price: 799,
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
    }
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">

      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        📚 Course List
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {
          courses.map(course => (

            <div
              key={course.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border"
            >

              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-28 mx-auto mb-4"
              />

              <h2 className="text-xl font-semibold text-gray-800 mt-2 text-center">
                {course.title}
              </h2>

              <p className="text-center text-gray-500 mt-2">
                Price
              </p>

              <p className="text-center text-2xl font-bold text-indigo-600 mt-1">
                ₹ {course.price}
              </p>

              <button
                className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 active:scale-95 transition"
              >
                Add to Cart
              </button>

            </div>

          ))
        }

      </div>

    </div>

  );
};

export default CourseList;