// TPA-Website/src/components/Articles/Articles.jsx
import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";
import Link from "next/link";

const textBlocks = [
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "Level Up your User Testing Skills",
    desc: "In our previous article, we delved into the essentials of conducting effective user testing, from ensuring a representative sample to avoiding biases. However, the quest for improving user testing never stops. Building on our comprehensive guide, we at The Product Architects BV (TPA) present four additional tips to take your user testing to the next level...",
  },
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "How the Donut Economy drives sustainability",
    desc: "With current rates of resource depletion and growing stress on our social model, it is impossible to maintain this idea of economics. The Doughnut Economy is an alternative approach, one that strives to spread growth and find balance. What best practices and design questions should we adhere to so that we can drive sustainability forward?...",
  },
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "What is Strategic Product Design",
    desc: "Innovation and product creation processes (where 'product' relates to actual products, services, digital, physical or phygital experiences) are inherently difficult for a lot of companies. This usually results in products that cannot meet customer needs, long and time-consuming projects, or even budgetary graveyards...",
  },
];

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Articles = ({ articlesData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);

  const textBlocks1 = articlesData && articlesData.articles ? articlesData.articles : [];

  const textBlocks = textBlocks1.map((block) => {
    const imageUrl = urlFor(block.image.asset).url();
    return {
      image: imageUrl,
      heading: block.heading,
      desc: block.desc,
      link: block.link,
    };
  });

  // console.log("articlesData", articlesData);
  return (
    <div className="relative w-full my-10">
      <div className="flex items-end justify-between">
        <div
          className="text-yellow font-space-grotesk text-7xl sm:text-8xl font-medium  my-12 mx-4 sm:m-0"
          style={{ color: theme ? theme.textColor : "#FECF4F" }}
        >
          Articles
        </div>
        <Link href="/articles">
          {" "}
          <div className="hidden sm:flex mr-32 justify-start items-center space-x-6 -bottom-1">
            <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div
                className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                style={{
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                  boxShadow: `0px 0px 4px 4px ${
                    theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                  }`,
                }}
              >
                <EastIcon />
              </div>
            </div>
            <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
              Discover more articles
            </div>
          </div>
        </Link>
      </div>
      <div className="h-fit sm:h-[90vh] sm:flex flex-col space-y-8 sm:space-y-0 mx-4 sm:mx-0 sm:flex-row sm:space-x-10 m-6">
        {articlesData.map((article, index) => (
          <div key={index} className="mb-8 w-full sm:w-1/3 sm:mx-0">
            <div className="rounded-2xl flex items-center justify-start">
              <Image
                className="rounded-2xl"
                src={urlFor(article.featureImage.asset).url()}
                alt={`Image ${index}`}
                width={365}
                height={352}
              />
            </div>
            <div className="flex justify-center sm:justify-start items-center space-x-6 my-4 w-[62%]">
              <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
                <div
                  className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                  style={{
                    backgroundColor: theme ? theme.textColor : "#FECF4F",
                    borderColor: theme ? theme.textColor : "#FECF4F",
                    boxShadow: `0px 0px 4px 4px ${
                      theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                    }`,
                  }}
                >
                  <EastIcon />
                </div>
              </div>
              <Link href={`/articles/${article.slug.current}`}>
                <div className="text-black font-space-grotesk text-22 font-medium underline">
                  {article.heading}
                </div>
              </Link>
            </div>
            <div className="w-5/6">{article.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
