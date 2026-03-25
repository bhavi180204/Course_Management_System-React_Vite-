import Logo from "./Logo"
import NavBar from "./NavBar"

const  NavContainer = ()=>{
    return(
        // <div>
        //     <Logo />
        //     <NavBar />
        // </div>
        
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <Logo />
      <NavBar />
    </div>
    )
}
export default NavContainer;