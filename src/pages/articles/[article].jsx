// tpa-website/src/pages/article/[article].jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../../TextContext";
import { Link, animateScroll as scroll } from "react-scroll";
import client from "../../lib/sanity";
import LetsTalk from "../../components/LetsTalk/index";
import { useRouter } from "next/router";
import SingleArticle from "./SingleArticle";

// This function gets called at build time to determine all article slugs
export async function getStaticPaths() {
  const articles = await client.fetch('*[_type == "article"]{ "slug": slug.current }');
  const paths = articles.map((article) => ({ params: { article: article.slug } }));
  return { paths, fallback: true };
}

// This gets called at build time for each slug returned by getStaticPaths
export async function getStaticProps({ params }) {
  const { article } = params;
  console.log("article", article);
  const query = `*[_type == "articles" && slug.current == "${article}"]`;
  const SingleArticleData = await client.fetch(query);

  return { props: { SingleArticleData } };
}

export default function Home({ SingleArticleData }) {
  const myText = "The Product Architects";
  const router = useRouter();
  const { article } = router.query;
  const [loading, setLoading] = useState(true);
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [navigationData, setNavigationData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);

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

    if (article) {
      fetchData();
    }
  }, [article]);
  // console.log("SingleArticleData", SingleArticleData);
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
        <Navbar navigationData={navigationData} color="#FFFFFF" />
        <SingleArticle SingleArticleData={SingleArticleData} navigationData={navigationData} />
        <LetsTalk letsTalkData={letsTalkData} />
      </main>
    </TextContext.Provider>
  );
}
