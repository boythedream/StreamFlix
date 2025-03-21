import React from "react";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdd from "../components/RecentlyAdd";

const HomePage = () => {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold text-white">Recently Add</h1>
      <RecentlyAdd />
    </div>
  );
};

export default HomePage;
