
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import "./App.css";
import AddCourse from "./pages/AddCourse";
import CourseDetails from "./pages/CourseDetails";
import UpdateCourse from "./pages/UpdateCourse";
const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CourseList />,
        },
        {
          path: "course/:id",
          element: <CourseDetails />,
        },
        {
          path: "update/:id",
          element: <UpdateCourse />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/addCourse",
          element: <AddCourse />,
        },
      ],
    },
  ]);
  return <RouterProvider router={myRouter}>App</RouterProvider>;
};

export default App;
