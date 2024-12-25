"use client";
import React from "react";
import Search from "../Search";

const NavBar = () => {
  return (
    <nav>
      <header className="flex justify-between items-center">
        <Search />
      </header>
    </nav>
  );
};

export default NavBar;
