// TPA-Website/src/pages/articles/Articles.jsx

import React, { useState, useEffect, useContext } from "react";
import EastIcon from "@mui/icons-material/East";
import TextContext from "../../TextContext";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import client from "../../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Articles = () => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  let [loading, setLoading] = useState(true);
  const [articlesData, setArticlesData] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHoverStates(new Array(articlesData.length).fill(false));
  }, [articlesData.length]);

  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  const handleMouseOver = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseOut = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [articles] = await Promise.all([client.fetch('*[_type == "articles"]')]);
        setArticlesData(articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let [color, setColor] = useState("#FECF4F");

  // console.log("articlesData:", articlesData);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(0, 7)}
      </div>
      <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
          <div className="max-w-[1800px]  mx-auto relative w-full ">
            <div className="flex items-end justify-between sm:m-14 2xl:ml-16">
              <div
                className="text-yellow font-space-grotesk text-7xl sm:text-8xl font-medium  my-12 mx-4 sm:m-0"
                style={{ color: theme ? theme.textColor : "#FECF4F" }}
              >
                Articles
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:gap-x-28 mx-4 m-6">
              {articlesData && articlesData.map((article, index) => (
                <div key={index} className="mb-8 2xl:ml-16">
                  <div className="min-h-20 uppercase sm:w-12/12 underline text-2xl mt-6">
                    {" "}
                    <Link href={`/articles/${article.slug.current}`}>
                      {" "}
                      {article.heading.length > 40
                        ? article.heading.slice(0, 40) + "..."
                        : article.heading}
                    </Link>
                  </div>
                  <div className="rounded-2xl flex items-center justify-start sm:w-full h-[352px] overflow-hidden">
                    <Image
                      className="rounded-2xl"
                      src={urlFor(article.featureImage.asset).url()}
                      alt={`Image ${index}`}
                      width={365}
                      height={352}
                    />
                    <div className="relative text-white -left-[17.7rem] top-28 xs:-left-[21rem] xs:top-32 sm:-left-[22rem] md:-left-[18rem] lg:-left-[22rem] md:top-28 lg:top-36 flex flex-wrap">
                      <div className="border-2 border-white rounded-full px-3 py-1 my-2 w-32 text-xl mr-6 flex">
                        <div className="mr-1"> {article.time} </div>
                        <div className=""> min read</div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-12/12 min-h-48 max-h-56 my-8 overflow-auto">
                    {article.summary.length > 250
                      ? article.summary.slice(0, 250) + "..."
                      : article.summary}
                  </div>
                  <div className="flex justify-start items-center space-x-6 my-4 w-[62%]">
                    <div className="w-fit pb-2 relative shadow-2xl cursor-pointer">
                      <div
                        className=" rounded-full p-1 border-solid"
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={() => handleMouseOut(index)}
                        style={{
                          ...(hoverStates[index] ? hoverStyle : {}),
                          backgroundColor: theme ? theme.textColor : "#FECF4F",
                          borderColor: theme ? theme.textColor : "#FECF4F",
                        }}
                      >
                        <EastIcon />
                      </div>
                    </div>
                    <Link href={`/articles/${article.slug.current}`}>
                      <div className="text-black font-space-grotesk text-22 font-medium underline">
                        READ ARTICLE
                      </div>
                    </Link>
                  </div>
                  <div className="w-5/6">{article.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {loading && (
          <div className="flex item-center justify-center my-8">
            <SquareLoader
              className="flex item-center justify-center my-8"
              color={color}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
