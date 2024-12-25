"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  navLink,
}: {
  navLink: { link: string; label: string; icon: React.ReactNode };
}) => {
  const { label, icon } = navLink;
  const pathName = usePathname();
  const isActive = pathName === navLink.link;
  return (
    <Link
      href={navLink.link}
      className={`flex  ${
        isActive ? "  text-rose-400" : " text-gray-50"
      } hover:text-rose-400 my-2 duration-200 gap-2 items-center p-2 rounded-md`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavLink;
