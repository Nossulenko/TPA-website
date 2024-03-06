// TPA-Website/src/components/VerticalDotNavigation.jsx
"use client";
import React, { useState, useContext } from "react";
import TextContext from "../TextContext";
import { Link } from "react-scroll";

const VerticalDotNavigation = ({ sectionNo, setSectionNo }) => {
  const { myText, theme } = useContext(TextContext);
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
            style={{
              color: theme ? theme.textColor : "#FECF4F",
              backgroundColor:
                index + 1 === sectionNo ? (theme ? theme.textColor : "#FECF4F") : "transparent",
              border:
                index + 1 === sectionNo
                  ? `1px solid ${theme ? theme.textColor : "#FECF4F"}`
                  : "1px solid #CCCCCC", // Adjust fallback color as needed
            }}
          ></Link>
        );
      })}
    </div>
  );
};

export default VerticalDotNavigation;
