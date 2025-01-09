import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className=" font-semibold  my-2 text-3xl  flex gap-2"
      href={"/"}
    >
      <h1>
        {" "}
        <span className="text-rose-500">NEO</span>GAMES
      </h1>
    </Link>
  );
};

export default Logo;
