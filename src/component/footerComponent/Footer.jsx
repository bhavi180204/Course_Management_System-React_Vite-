// const  Footer = ()=>{
//     return(

//     <footer className="bg-gray-900 text-white mt-10">

//       <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

//         {/* Logo section */}
//         <div>

//           <h2 className="text-2xl font-bold text-blue-400">
//             ✈️ EduJspider
//           </h2>

//           <p className="text-gray-400 mt-3">
//             Book courses easily with best price and comfort.
//           </p>

//         </div>

//         {/* Links */}
//         <div>

//           <h3 className="text-lg font-semibold mb-3">
//             Quick Links
//           </h3>

//           <ul className="space-y-2 text-gray-400">

//             <li className="hover:text-white cursor-pointer">
//               Home
//             </li>

//             <li className="hover:text-white cursor-pointer">
//               courses
//             </li>

//             <li className="hover:text-white cursor-pointer">
//               Booking
//             </li>

//             <li className="hover:text-white cursor-pointer">
//               Contact
//             </li>

//           </ul>

//         </div>

//         {/* Contact */}
//         <div>

//           <h3 className="text-lg font-semibold mb-3">
//             Contact
//           </h3>

//           <p className="text-gray-400">
//             📧 support@EduJspider.com
//           </p>

//           <p className="text-gray-400">
//             📞 +91 9876543210
//           </p>

//         </div>

//       </div>

//       {/* bottom */}
//       <div className="text-center py-4 border-t border-gray-700 text-gray-400">

//         © 2026 FlightBook. All rights reserved.

//       </div>

//     </footer>
//     )
// }
// export default Footer;

const Footer = () => {
  return (
    <footer
      className="mt-16 text-white 
      bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900"
    >

      <div
        className="max-w-7xl mx-auto 
        px-6 py-12 grid md:grid-cols-3 gap-10"
      >

        {/* logo */}
        <div>

          <h2
            className="text-3xl font-extrabold 
            bg-gradient-to-r from-pink-400 to-yellow-400 
            bg-clip-text text-transparent"
          >
            🚀 EduJspider
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Learn new skills with the best online courses.
            Upgrade your career with expert instructors.
          </p>

          {/* social */}
          <div className="flex gap-4 mt-5 text-lg">

            <span
              className="hover:text-pink-400 cursor-pointer transition"
            >
              🌐
            </span>

            <span
              className="hover:text-blue-400 cursor-pointer transition"
            >
              🐦
            </span>

            <span
              className="hover:text-red-400 cursor-pointer transition"
            >
              ▶
            </span>

            <span
              className="hover:text-purple-400 cursor-pointer transition"
            >
              📸
            </span>

          </div>

        </div>

        {/* links */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li className="hover:text-pink-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-pink-400 cursor-pointer transition">
              Courses
            </li>

            <li className="hover:text-pink-400 cursor-pointer transition">
              My Learning
            </li>

            <li className="hover:text-pink-400 cursor-pointer transition">
              Contact
            </li>

          </ul>

        </div>

        {/* contact */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-green-300">
            Contact Us
          </h3>

          <p className="text-gray-300 mb-2">
            📧 support@edujspider.com
          </p>

          <p className="text-gray-300 mb-2">
            📞 +91 9876543210
          </p>

          <p className="text-gray-300">
            📍 India
          </p>

        </div>

      </div>

      {/* bottom */}
      <div
        className="text-center py-4 
        bg-black/30 backdrop-blur"
      >

        <p className="text-gray-300 text-sm">
          © 2026 
          <span className="text-pink-400 font-semibold">
            {" "}EduJspider
          </span>
          . All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;