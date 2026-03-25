import { Link } from "react-router-dom";

const  NavBar = ()=>{
    return(
        // <div>
        //     <Link to="/">Course</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/signUp">SignUp</Link>
        //     <Link to="/cart">Cart</Link>
        // </div>




    <div className="flex gap-6 text-gray-700 font-medium">

      <Link to="/" className="hover:text-blue-600 transition duration-200">Course</Link>

      <Link to="/login" className="hover:text-blue-600 transition duration-200"> Login</Link>

      <Link to="/signUp" className="hover:text-blue-600 transition duration-200">SignUp</Link>

      <Link  to="/cart" className="hover:text-blue-600 transition duration-200"> Cart</Link>

    </div>
    )
}

export default NavBar;