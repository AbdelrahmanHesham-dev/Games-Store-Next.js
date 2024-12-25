"use client";
import React, { ReactElement } from "react";
import ButtonSvg from "../ButtonSvg";
import Link from "next/link";
import Spinner from "../defaults/Spinner";

const ButtonGame = ({
  className,
  link,
  onClick,
  text,
  icon,
  disabled = false,
}: {
  className?: string;
  link?: string;
  onClick?: () => void;
  text: string;
  icon?: ReactElement;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
      className={`${
        className || ""
      } hover:text-rose-400 duration-200 min-w-[100px] relative px-6 flex-initial gap-2 py-2 text-center m-auto`}
    >
      {ButtonSvg(false)}
      <span className="relative">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>
      {icon && icon}
    </button>
  );
};

export default ButtonGame;
