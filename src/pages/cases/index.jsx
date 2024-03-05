// TPA-Website/src/pages/Cases/index.jsx
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TextContext from "../../TextContext";
import client from "../../lib/sanity";
import { Link, animateScroll as scroll } from "react-scroll";
import LetsTalk from "../../components/LetsTalk/index";
import Cases from "./Cases";

const index = () => {
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResult, themeResult, navigation, letsTalk] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "navigation"]'),
          client.fetch('*[_type == "letsTalk"]'),
        ]);
        setTheme(themeResult[0]);
        setNavigationData(navigation[0]);
        setLetsTalkData(letsTalk[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <TextContext.Provider
      value={{
        myText,
        sectionNo,
        setSectionNo,
        theme,
      }}
    >
      <main>
        <Navbar navigationData={navigationData} />
        <Cases />
      </main>
    </TextContext.Provider>
  );
};

export default index;
