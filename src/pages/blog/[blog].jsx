// tpa-website/src/pages/blog/[blog].jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../../TextContext";
import { Link, animateScroll as scroll } from "react-scroll";
import client from "../../lib/sanity";
import LetsTalk from "../../components/LetsTalk/index";
import { useRouter } from "next/router";
import SingleBlog from "./SingleBlog";

// This function gets called at build time to determine all blog slugs
export async function getStaticPaths() {
  const blogs = await client.fetch('*[_type == "blog"]{ "slug": slug.current }');
  const paths = blogs.map((blog) => ({ params: { blog: blog.slug } }));
  return { paths, fallback: false };
}

// This gets called at build time for each slug returned by getStaticPaths
export async function getStaticProps({ params }) {
  const { blog } = params;
  const query = `*[_type == "blog" && slug.current == "${blog}"]{ title, summary, slug, featureImage { asset->{ url }, }, mainDescription }[0]`;
  const singleBlogData = await client.fetch(query);

  return { props: { singleBlogData } };
}

export default function Home({ singleBlogData }) {
  const myText = "The Product Architects";
  const router = useRouter();
  const { blog } = router.query;
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

    if (blog) {
      fetchData();
    }
  }, [blog]);
  // console.log("singleBlogData", singleBlogData);
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
        <Navbar navigationData={navigationData} />
        <SingleBlog singleBlogData={singleBlogData} />
        <Link to="letsTalk" smooth duration={500}>
          <LetsTalk letsTalkData={letsTalkData} />
        </Link>
      </main>
    </TextContext.Provider>
  );
}
