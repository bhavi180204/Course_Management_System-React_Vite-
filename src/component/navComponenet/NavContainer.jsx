// import Logo from "./Logo"
// import NavBar from "./NavBar"

// const  NavContainer = ()=>{
//     return(
//     <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
//       <Logo />
//       <NavBar />
//     </div>
//     )
// }
// export default NavContainer;

import Logo from "./Logo";
import NavBar from "./NavBar";

const NavContainer = () => {
  return (
    <header
      className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-white/80
      border-b border-purple-100
      shadow-sm
      "
    >

      <div
        className="
        max-w-7xl mx-auto
        flex justify-between items-center
        px-8 py-3
        "
      >

        <Logo />

        <NavBar />

      </div>

    </header>
  );
};

export default NavContainer;