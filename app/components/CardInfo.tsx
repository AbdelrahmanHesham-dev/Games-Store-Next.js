import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionItem from "./defaults/MotionItem";
const CardInfo = ({
  desc,
  title,
  image,
  textBtn,
  btnClasses,
}: {
  desc: string;
  title: string;
  image: string;
  textBtn?: string;
  btnClasses?: string;
}) => {
  return (
    <MotionItem
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className=" flex flex-col items-start absolute left-20 top-20 max-w-md"
    >
      <div className=" w-96 h-40 relative">
        <Image src={image} fill alt={`${title}`} className=" object-contain" />
      </div>
      <h1 className=" text-white text-2xl font-semibold ">{title}</h1>
      <p className=" text-base  text-gray-200">{desc}</p>
      <Button className={`rounded-full mt-5 ${btnClasses || " text-gray-50"}`}>
        {textBtn || "Find out more !"}
      </Button>
    </MotionItem>
  );
};

export default CardInfo;
