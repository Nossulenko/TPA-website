// TPA-Website/src/pages/Services/index.jsx
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TextContext from "../../TextContext";
import client from "../../lib/sanity";
import { Link, animateScroll as scroll } from "react-scroll";
import LetsTalk from "../../components/LetsTalk/index";
import Services from "./AboutUs";
import SquareLoader from "react-spinners/SquareLoader";

const index = () => {
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FECF4F");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
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
      {loading ? (
        <div className="flex item-center justify-center my-8">
          <SquareLoader
            className="flex item-center justify-center my-8"
            color={color}
            loading={loading}
          />
        </div>
      ) : (
        <main>
          <Navbar navigationData={navigationData} />
          <Services />
          <LetsTalk letsTalkData={letsTalkData} />
        </main>
      )}
    </TextContext.Provider>
  );
};

export default index;
