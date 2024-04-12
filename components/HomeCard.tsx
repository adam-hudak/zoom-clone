import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  color: string;
  icon: string;
  alt: string;
  title: string;
  text: string;
  handleClick: () => void;
}

const HomeCard = ({
  color,
  icon,
  alt,
  title,
  text,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        color,
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={icon} alt={alt} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
