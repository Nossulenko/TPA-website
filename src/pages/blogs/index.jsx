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
  const [blogsData, setBlogsData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResult, themeResult, navigation, blogs, letsTalk] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "navigation"]'),
          client.fetch('*[_type == "blogs"]'),
          client.fetch('*[_type == "letsTalk"]'),
        ]);
        setTheme(themeResult[0]);
        setNavigationData(navigation[0]);
        setBlogsData(blogs);
        setLetsTalkData(letsTalk[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("theme", theme);
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
        <HomePageBlogs blogsData={blogsData} />
        <Link to="letsTalk" smooth duration={500}>
          <LetsTalk letsTalkData={letsTalkData} />
        </Link>
      </main>
    </TextContext.Provider>
  );
}
