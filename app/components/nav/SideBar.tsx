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
    icon: <GoHomeFill className="w-7 h-7" />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <CgGames className="w-7 h-7" />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
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
    icon: <MdDownloading className="w-7 h-7"  />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill className="w-7 h-7" />,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: <IoSettingsOutline className="w-7 h-7"  />,
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
