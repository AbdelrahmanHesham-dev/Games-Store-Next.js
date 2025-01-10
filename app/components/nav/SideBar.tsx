"use client";
import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard, MdDownloading } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill className="w-7 h-7" />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <CgGames className="w-7 h-7" />,
  },
  {
    link: "/wishlist",
    label: "Wishlist",
    icon: <FaHeart className="w-7 h-7" />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard className="w-7 h-7" />,
  },
  {
    link: "/downloads",
    label: "Downloads",
    icon: <MdDownloading className="w-7 h-7" />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill className="w-7 h-7" />,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: <IoSettingsOutline className="w-7 h-7" />,
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-screen w-64 background col-span-2 text-gray-50 transform transition-transform duration-300 z-50 xl:translate-x-0 lg:sticky`}
      >
        <div className="pl-5 pt-5">
          <Logo />
        </div>
        <div className="py-5 px-11">
          {NAV_LINKS.map((navLink, i: number) => (
            <NavLink key={i} navLink={navLink} />
          ))}
        </div>
      </div>

      <button
        className="fixed top-20 left-2 z-50 xl:hidden background text-gray-50 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu
          className={`w-6 h-6 ${
            isOpen ? "rotate-90" : ""
          } transition-transform duration-200`}
        />
      </button>
    </>
  );
};

export default SideBar;
