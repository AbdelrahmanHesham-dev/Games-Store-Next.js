import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("max-w-[1375px] py-5 px-10 w-full", className || "")}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
