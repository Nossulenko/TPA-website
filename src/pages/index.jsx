import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../TextContext";
import client from "../lib/sanity";

const space_Grotesk = Space_Grotesk({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const fontClasses = [space_Grotesk.className];
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState(1);
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState({});
  const [elevatingIdeaData, setElevatingIdeaData] = useState([]);
  const [whatWeDoData, setWhatWeDoData] = useState([]);
  const [howWeOperate, setHowWeOperate] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          postsResult,
          themeResult,
          elevatingIdeaResult,
          whatWeDoResult,
          howWeOperate,
          letsTalk,
        ] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "elevating"]'),
          client.fetch('*[_type == "whatWeDo"]'),
          client.fetch('*[_type == "howWeOperate"]'),
          client.fetch('*[_type == "letsTalk"]'),
        ]);

        setPosts(postsResult);
        setTheme(themeResult[0]);
        setElevatingIdeaData(elevatingIdeaResult[0]);
        setWhatWeDoData(whatWeDoResult[0]);
        setHowWeOperate(howWeOperate[0]);
        setLetsTalkData(letsTalk[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log("elevatingIdeaData", elevatingIdeaData);
  return (
    <TextContext.Provider
      value={{
        myText,
        sectionNo,
        setSectionNo,
        theme,
        elevatingIdeaData,
        whatWeDoData,
        howWeOperate,
        letsTalkData,
      }}
    >
      <main className={space_Grotesk.className}>
        <Navbar fonts={fontClasses} />
        {/* <VerticalDotNavigation /> Add this line */}
        <HomePage />
      </main>
    </TextContext.Provider>
  );
}
