import React from "react";
import ButtonSvg from "../ButtonSvg";
import Link from "next/link";

const ButtonGame = ({ text, link }: { text: string; link?: string }) => {
  return (
    <button className="hover:text-rose-400 duration-200 relative px-6 flex-initial gap-2 py-2 text-center m-auto">
      {ButtonSvg(false)}
      <span className="relative">
        {link ? <Link href={link}>{text}</Link> : text}
      </span>
    </button>
  );
};

export default ButtonGame;
