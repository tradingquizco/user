"use client";

import React, { useState } from "react";

export const Filter = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const handelCategoryFilter = (value:string) => {return value}
  const handelLevelFilter = (value:string) => {return value}

  return (
    <>
      <div className="flex justify-around items-center text-white text-md font-semibold tracking-widest my-2">
        <div className="p-2  bg-black rounded-md flex gap-3 items-center text-center">
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelCategoryFilter("All")}>All</span>
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelCategoryFilter("Hard")}>Hard</span>
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelCategoryFilter("Normal")}>Normal</span>
          <span className="cursor-pointer" onClick={() => handelCategoryFilter("Easy")}>Easy</span>
        </div>
        <div className="p-2 bg-black rounded-md flex gap-3 text-center justify-center">
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelLevelFilter("All")}>All</span>
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelLevelFilter("ICT")}>ICT</span>
          <span className="border-r pr-2 cursor-pointer" onClick={() => handelLevelFilter("price action")}>price action</span>
          <span className="cursor-pointer" onClick={() => handelLevelFilter("RTM")}>RTM</span>
        </div>
      </div>
    </>
  );
};
