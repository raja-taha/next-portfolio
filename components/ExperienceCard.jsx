import Image from "next/image";
import React from "react";

const ExperienceCard = ({ props }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-5">
          <Image
            src={props.logo}
            width={45}
            height={45}
            className="rounded-full"
          />
          <h3 className="text-xl font-bold">
            {props.position} at {props.company}
          </h3>
        </div>
        <p className="text-secText">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <p className="my-5 text-secText">{props.description}</p>
    </div>
  );
};

export default ExperienceCard;
