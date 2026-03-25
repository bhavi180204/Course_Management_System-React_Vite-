const  Footer = ()=>{
    return(

    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo section */}
        <div>

          <h2 className="text-2xl font-bold text-blue-400">
            ✈️ EduJspider
          </h2>

          <p className="text-gray-400 mt-3">
            Book courses easily with best price and comfort.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-lg font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              courses
            </li>

            <li className="hover:text-white cursor-pointer">
              Booking
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold mb-3">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 support@EduJspider.com
          </p>

          <p className="text-gray-400">
            📞 +91 9876543210
          </p>

        </div>

      </div>

      {/* bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400">

        © 2026 FlightBook. All rights reserved.

      </div>

    </footer>
    )
}
export default Footer;