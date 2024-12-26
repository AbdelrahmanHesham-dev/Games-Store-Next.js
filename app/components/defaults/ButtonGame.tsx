import React from "react";
import ButtonSvg from "../ButtonSvg";
import Link from "next/link";
import Spinner from "../defaults/Spinner";

const ButtonGame = ({
  text,
  link,
  disabled = false,
}: {
  text: string;
  link?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className="hover:text-rose-400 duration-200 min-w-[100px] relative px-6 flex-initial gap-2 py-2 text-center m-auto"
    >
      {ButtonSvg(false)}
      <span className="relative">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>
    </button>
  );
};

export default ButtonGame;
