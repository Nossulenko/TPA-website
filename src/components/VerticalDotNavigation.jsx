// TPA-Website/src/components/VerticalDotNavigation.jsx
"use client";
import React, { useState, useContext, useEffect } from "react";
import TextContext from "../TextContext";
import { Link } from "react-scroll";

const VerticalDotNavigation = ({ sectionNo, setSectionNo }) => {
  const { myText, theme } = useContext(TextContext);
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("div[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              activeSection === section
                ? "bg-yellow border border-yellow p-[6px]"
                : "border border-gray-300 bg-transparent p-[6px]"
            }`}
            style={{
              color: theme ? theme.textColor : "#FECF4F",
              backgroundColor:
                activeSection === section ? (theme ? theme.textColor : "#FECF4F") : "transparent",
              border:
                activeSection === section
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
