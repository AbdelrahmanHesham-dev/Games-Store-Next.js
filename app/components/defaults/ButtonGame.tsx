"use client";
import React, { ReactElement } from "react";
import ButtonSvg from "../ButtonSvg";
import Link from "next/link";
// import Spinner from "./Spinner";

const ButtonGame = ({
  className,
  // onClick,
  link,
  text,
  // icon,
}: // disabled = false,
{
  className?: string;
  // onClick?: () => void;
  link?: string;
  text: string;
  // icon?: ReactElement;
  // disabled?: boolean;
}) => {
  return (
    <button
      // disabled={disabled}
      // onClick={() => {
      //   onClick?.();
      // }}
      className={`${
        className || ""
      } hover:text-rose-400 duration-150 min-w-[100px] relative px-6 flex-initial gap-2 py-2 text-center m-auto`}
    >
      {ButtonSvg(false)}
      <span className=" relative">
        {/* {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text} */}
        {link ? <Link href={link}>{text}</Link> : text}
      </span>
      {/* {icon && icon} */}
    </button>
  );
};

export default ButtonGame;
