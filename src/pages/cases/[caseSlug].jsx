// tpa-website/src/pages/case/[case].jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../../TextContext";
import { Link, animateScroll as scroll } from "react-scroll";
import client from "../../lib/sanity";
import LetsTalk from "../../components/LetsTalk/index";
import { useRouter } from "next/router";
import SingleCase from "./SingleCase";
import Sidebar from "@/components/Sidebar";

// This function gets called at build time to determine all case slugs
// export async function getStaticPaths() {
//   const cases = await client.fetch('*[_type == "cases"]{ "slug": slug.current }');
//   const paths = cases.map((_case) => ({ params: { caseSlug: _case.slug } }));
//   return { paths, fallback: false };
// }

// This gets called at build time for each slug returned by getStaticPaths
export async function getServerSideProps({ params }) {
  const { caseSlug } = params;
  // console.log("caseSlug", caseSlug);

  const query = `*[_type == "cases" && slug.current == "${caseSlug}"]`;
  const SingleCaseData = await client.fetch(query);

  return { props: { SingleCaseData } };
}

export default function Home({ SingleCaseData }) {
  const myText = "The Product Architects";
  const router = useRouter();
  const { caseSlug } = router.query;
  const [loading, setLoading] = useState(true);
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

    if (caseSlug) {
      fetchData();
    }
  }, [caseSlug]);
  // console.log("SingleCaseData", SingleCaseData);
  return (
    <TextContext.Provider
      value={{
        myText,
        sectionNo,
        setSectionNo,
        theme,
      }}
      className="bg-greybg"
    >
      <main>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navigationData={navigationData}
          color="yellow"
        />
        <div className={` ${isOpen ? "sm:ml-52" : "sm:ml-0"} transition-all duration-200`}>
          <Navbar navigationData={navigationData} color="white" />
          <SingleCase SingleCaseData={SingleCaseData} navigationData={navigationData} />
          <LetsTalk letsTalkData={letsTalkData} />
        </div>
      </main>
    </TextContext.Provider>
  );
}
