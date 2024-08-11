import Image from "next/image";
import React from "react";

const ExperienceCard = ({ props }) => {
  return (
    <div className="w-full px-10 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex  items-center justify-center space-x-5">
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
        <p className="text-secText mt-2 md:mt-0">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <p className="my-5 text-secText">{props.description}</p>
    </div>
  );
};

export default ExperienceCard;
