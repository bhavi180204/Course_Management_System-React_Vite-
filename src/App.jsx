
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import "./App.css";

const App = () =>{
   let MyRouter = createBrowserRouter ([
    {
    path: "/",
    element: <Layout />,
    children:[ 
        {
        path:"/",
        element : <CourseList />
        },
         {
        path:"/login",
        element : <Login />
        },
         {
        path:"/signUp",
        element : <SignUp />
        },
         {
        path:"/cart",
        element : <Cart />
        },
    ]
    }
   ])
   return <RouterProvider router = {MyRouter} />;
}
export default App;