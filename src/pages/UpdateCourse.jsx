
import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as rId } from "uuid";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [courseData, setCourseData] = useState({
    c_name: "",
    c_img: "",
    c_duration: "",
    c_fee: "",
    c_author: "",
  });

  const { c_name, c_img, c_duration, c_fee, c_author } = courseData;

  const getCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/course/${id}`);
      setCourseData(res.data);
    } catch (err) {
      toast.error("Error loading course ❌");
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!c_name || !c_duration || !c_fee || !c_author || !c_img) {
      return toast.error("All fields required ⚠️");
    }

    try {
      const res = await axios.put(
        `http://localhost:3000/course/${id}`,
        courseData
      );

      if (res.status === 200) {
        toast.success("Course updated 🎉");
        navigate("/");
      }

      setCourseData({
        id: rId(),
        c_name: "",
        c_img: "",
        c_duration: "",
        c_fee: "",
        c_author: "",
      });

    } catch (err) {
      toast.error("Update failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-purple-100 shadow-2xl space-y-5"
      >

        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Update Course ✏️
        </h2>

        <div>
          <label className="text-sm text-gray-600">Course Name</label>
          <input
            type="text"
            name="c_name"
            value={c_name}
            onChange={handleChange}
            placeholder="React Mastery"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Duration</label>
          <input
            type="text"
            name="c_duration"
            value={c_duration}
            onChange={handleChange}
            placeholder="3 Months"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Author</label>
          <input
            type="text"
            name="c_author"
            value={c_author}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Course Fee</label>
          <input
            type="number"
            name="c_fee"
            value={c_fee}
            onChange={handleChange}
            placeholder="4999"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Image URL</label>
          <input
            type="url"
            name="c_img"
            value={c_img}
            onChange={handleChange}
            placeholder="Paste image link"
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition duration-300 shadow-lg"
        >
          Update Course 🚀
        </button>

      </form>
    </div>
  );
};

export default UpdateCourse;