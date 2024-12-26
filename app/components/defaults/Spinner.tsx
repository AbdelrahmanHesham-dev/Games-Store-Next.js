import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Spinner = () => {
  return (
    <BiLoaderCircle className=" text-rose-400 m-auto w-5 h-5 text-center animate-spin" />
  );
};

export default Spinner;
