// tpa-website/src/pages/index.jsx
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
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResult, themeResult, navigation] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "navigation"]'),
        ]);
        setTheme(themeResult[0]);
        setNavigationData(navigation[0]);
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
        <HomePage />
      </main>
    </TextContext.Provider>
  );
}
