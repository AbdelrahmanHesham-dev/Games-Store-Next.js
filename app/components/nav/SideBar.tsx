"use client";
import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";
import { MdDownloading } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";



export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <CgGames />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/downloads",
    label: "Downloads",
    icon: <MdDownloading  />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: <IoSettingsOutline  />,
  },
];

const SideBar = () => {
  return (
    <div className=" background col-span-2 h-screen sticky inset-0 flex flex-col items-start text-gray-50">
      <div className="pl-5 pt-5">
        <Logo />
      </div>
      <div className=" py-5 px-10">
        {NAV_LINKS.map((navLink, i: number) => (
          <NavLink key={i} navLink={navLink} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
