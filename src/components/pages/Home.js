import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="w-72">
          <img src={avatar} alt="Avarat" className="w-full" />
        </div>
        <div className="pt-5" />
        <h1 className="text-purple-600 text-4xl py-4 font-medium">
          {"<F Shrabon/>"}
        </h1>
        <p className="text-2xl font-medium pb-4">
          {"< 💻 Front-end Developer_ />"}
        </p>
        <Link
          to="/contact"
          className="bg-purple-600 px-3 py-2.5 rounded-md text-gray-100 hover:bg-purple-700 mt-3"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;
