// tpa-website/src/pages/index.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import HomePageBlogs from "./HomePageBlogs";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../../TextContext";
import { Link, animateScroll as scroll } from "react-scroll";
import client from "../../lib/sanity";
import Loader from "./Loader";
import FooterBlogs from "./FooterBlogs";
import LetsTalk from "../../components/LetsTalk/index";
import SquareLoader from "react-spinners/SquareLoader";

const space_Grotesk = Space_Grotesk({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
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
        const [themeResult, navigation, letsTalk] = await Promise.all([
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
  // console.log("blogsData", blogsData);
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
          <HomePageBlogs />
          <Link to="letsTalk" smooth duration={500}>
            <LetsTalk letsTalkData={letsTalkData} />
          </Link>
        </main>
      )}
    </TextContext.Provider>
  );
}
