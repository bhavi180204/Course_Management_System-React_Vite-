import { Outlet } from "react-router-dom";
import Footer from "../component/footerComponent/Footer";
import NavContainer from "../component/navComponenet/NavContainer";

const  Layout = ()=>{
    return(
        // <div>
        //     <NavContainer />
        //     <Outlet /> 
        //     <Footer />
        // </div>

            <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <NavContainer />

      {/* Page Content */}
      <main className="flex-grow bg-gray-100 p-5">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
    )
}
export default Layout;