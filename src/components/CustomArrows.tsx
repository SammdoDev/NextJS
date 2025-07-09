"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 bg-white/50 hover:bg-white/20 p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <ChevronLeft className="text-black" />
    </div>
  );
};

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 bg-white/50 hover:bg-white/20 p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <ChevronRight className="text-black" />
    </div>
  );
};
