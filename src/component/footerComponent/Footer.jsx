

// const Footer = () => {
//   return (
//     <footer
//       className="mt-16 text-white 
//       bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900"
//     >

//       <div
//         className="max-w-7xl mx-auto 
//         px-6 py-12 grid md:grid-cols-3 gap-10"
//       >

//         {/* logo */}
//         <div>

//           <h2
//             className="text-3xl font-extrabold 
//             bg-gradient-to-r from-pink-400 to-yellow-400 
//             bg-clip-text text-transparent"
//           >
//             🚀 EduJspider
//           </h2>

//           <p className="text-gray-300 mt-4 leading-relaxed">
//             Learn new skills with the best online courses.
//             Upgrade your career with expert instructors.
//           </p>

//           {/* social */}
//           <div className="flex gap-4 mt-5 text-lg">

//             <span
//               className="hover:text-pink-400 cursor-pointer transition"
//             >
//               🌐
//             </span>

//             <span
//               className="hover:text-blue-400 cursor-pointer transition"
//             >
//               🐦
//             </span>

//             <span
//               className="hover:text-red-400 cursor-pointer transition"
//             >
//               ▶
//             </span>

//             <span
//               className="hover:text-purple-400 cursor-pointer transition"
//             >
//               📸
//             </span>

//           </div>

//         </div>

//         {/* links */}
//         <div>

//           <h3 className="text-xl font-semibold mb-4 text-yellow-300">
//             Quick Links
//           </h3>

//           <ul className="space-y-2">

//             <li className="hover:text-pink-400 cursor-pointer transition">
//               Home
//             </li>

//             <li className="hover:text-pink-400 cursor-pointer transition">
//               Courses
//             </li>

//             <li className="hover:text-pink-400 cursor-pointer transition">
//               My Learning
//             </li>

//             <li className="hover:text-pink-400 cursor-pointer transition">
//               Contact
//             </li>

//           </ul>

//         </div>

//         {/* contact */}
//         <div>

//           <h3 className="text-xl font-semibold mb-4 text-green-300">
//             Contact Us
//           </h3>

//           <p className="text-gray-300 mb-2">
//             📧 support@edujspider.com
//           </p>

//           <p className="text-gray-300 mb-2">
//             📞 +91 9876543210
//           </p>

//           <p className="text-gray-300">
//             📍 India
//           </p>

//         </div>

//       </div>

//       {/* bottom */}
//       <div
//         className="text-center py-4 
//         bg-black/30 backdrop-blur"
//       >

//         <p className="text-gray-300 text-sm">
//           © 2026 
//           <span className="text-pink-400 font-semibold">
//             {" "}EduJspider
//           </span>
//           . All rights reserved.
//         </p>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer
      className="
        mt-16 text-white
        bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-12
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8
        "
      >
        {/* Logo Section */}
        <div>
          <h2
            className="
              text-2xl sm:text-3xl font-extrabold
              bg-gradient-to-r from-pink-400 to-yellow-400
              bg-clip-text text-transparent
            "
          >
            🚀 EduJspider
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            Learn new skills with the best online courses.
            Upgrade your career with expert instructors.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-5 text-lg sm:text-xl">
            <span className="hover:text-pink-400 cursor-pointer transition">
              🌐
            </span>

            <span className="hover:text-blue-400 cursor-pointer transition">
              🐦
            </span>

            <span className="hover:text-red-400 cursor-pointer transition">
              ▶
            </span>

            <span className="hover:text-purple-400 cursor-pointer transition">
              📸
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm sm:text-base">
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

        {/* Contact Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-300">
            Contact Us
          </h3>

          <p className="text-gray-300 text-sm sm:text-base mb-2">
            📧 support@edujspider.com
          </p>

          <p className="text-gray-300 text-sm sm:text-base mb-2">
            📞 +91 9876543210
          </p>

          <p className="text-gray-300 text-sm sm:text-base">
            📍 India
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 bg-black/30 backdrop-blur px-4">
        <p className="text-gray-300 text-xs sm:text-sm">
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