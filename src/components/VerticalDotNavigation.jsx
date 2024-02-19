"use client";
import React from "react";
import { Link } from "react-scroll";

const VerticalDotNavigation = ({ sectionNo, setSectionNo }) => {
  const sectionList = [
    "elevatingIdea",
    "whatWeDo",
    "howWeOperate",
    "howToOperate",
    "services",
    "articles",
    "about",
    "team",
    "letsTalk",
  ];

  const handleDotClick = (index) => {
    setSectionNo(index + 1);
  };

  return (
    <div className="">
      {sectionList.map((section, index) => {
        return (
          <Link
            to={section}
            smooth
            duration={1000}
            key={index}
            onClick={() => handleDotClick(index)}
            className={`block my-1 w-1 h-1 rounded-full cursor-pointer ${
              index + 1 === sectionNo
                ? "bg-yellow border border-yellow p-[6px]"
                : "border border-gray-300 bg-transparent p-[6px]"
            }`}
          ></Link>
        );
      })}
    </div>
  );
};

export default VerticalDotNavigation;
