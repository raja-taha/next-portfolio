import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ name, image, url }) => {
  return (
    <div className="rounded-2xl md:w-1/4 mt-5">
      <Image src={image} width={380} height={300} className="rounded-t-2xl" />
      <Link
        href={url}
        className="w-full bg-cardBg flex items-center justify-between rounded-b-2xl"
        target="_blank"
      >
        <div className="p-4">
          <p className="text-[10px] font-bold">CLICK HERE TO VISIT</p>
          <h4 className="text-[20px] font-bold">{name}</h4>
        </div>
        <Image
          src={"/assets/icons/link.svg"}
          width={45}
          height={45}
          className="p-4"
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
