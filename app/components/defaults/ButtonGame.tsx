import React from "react";
import ButtonSvg from "../ButtonSvg";

const ButtonGame = ({ text }: { text: string }) => {
  return (
    <button className="relative px-6 flex-initial gap-2 py-3 text-center m-auto">
      {ButtonSvg(false)}
      {text}
    </button>
  );
};

export default ButtonGame;
