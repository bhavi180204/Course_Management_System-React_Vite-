// import { Outlet } from "react-router-dom";
// import Footer from "../component/footerComponent/Footer";
// import NavContainer from "../component/navComponenet/NavContainer";

// const  Layout = ()=>{
//     return(

//     <div className="flex flex-col min-h-screen">

//       <NavContainer />

//       {/* Page Content */}
//       <main className="flex-grow bg-gray-100 p-5">
//         <Outlet />
//       </main>
      
//       <Footer />

//     </div>
//     )
// }
// export default Layout;


import { Outlet } from "react-router-dom";
import Footer from "../component/footerComponent/Footer";
import NavContainer from "../component/navComponenet/NavContainer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavContainer />

      {/* Page Content */}
      <main
        className="
          flex-grow
          bg-gray-100
          px-4 sm:px-6 lg:px-8
          py-4 sm:py-5
        "
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;