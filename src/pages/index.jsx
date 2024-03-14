// tpa-website/src/pages/index.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../TextContext";
import client from "../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";
import Sidebar from "@/components/Sidebar";

const space_Grotesk = Space_Grotesk({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState("elevatingIdea");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FECF4F");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log("theme", theme);
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
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} navigationData={navigationData} />
          <div className={` ${isOpen ? "sm:ml-52" : "sm:ml-0"} transition-all duration-200`}>
            <Navbar navigationData={navigationData} />
            <HomePage />
          </div>
        </main>
      )}
    </TextContext.Provider>
  );
}
