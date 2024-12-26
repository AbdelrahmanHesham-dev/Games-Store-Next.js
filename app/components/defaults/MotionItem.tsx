"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionItemProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionItem: React.FC<MotionItemProps> = ({
  children,
  className,
  initial,
  animate,
  whileInView,
  exit,
  ...rest
}) => {
  return (
    <motion.div
      initial={initial}
      exit={exit}
      animate={animate}
      whileInView={whileInView}
      className={className || ""}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionItem;
