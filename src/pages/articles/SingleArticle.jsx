// TPA-Website/src/pages/articles/SingleArticle.jsx
import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";
import TextContext from "../../TextContext";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import Navbar from "../../components/Navbar";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
const bullet = [
  {
    bulletDescription:
      "Prototypes come in all kinds of different shapes and sizes: simple paper posters, 3D printing, service role plays, teaser videos, fully functional and interactive digital prototypes, etc. Prototypes come in all kinds of different shapes and sizes: simple paper posters, 3D printing, service role plays, teaser videos, fully functional and interactive digital prototypes, etc. Prototypes come in all kinds of different shapes and sizes: simple paper posters, 3D printing, service role plays, teaser videos, fully functional and interactive digital prototypes, etc. ",
    bulletHeading: "Quick and efficient",
    id: "1",
    _key: "8f17b621134e",
  },
  {
    bulletHeading: "Low cost",
    id: "2",
    _key: "7798677728a1",
    bulletImage: {
      _type: "image",
      asset: {
        _ref: "image-f69d67a274e681e3f782a507a3402f1ad5d71117-783x501-png",
        _type: "reference",
      },
    },
    bulletDescription:
      "Prototypes can be built at very low costs. They also reveal errors and flaws in the early stages, which can potentially save you a lot of money in the long-term.",
  },
];

const SingleArticle = ({ SingleArticleData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const router = useRouter();
  let [color, setColor] = useState("#FECF4F");
  if (!SingleArticleData) {
    return (
      <div className=" col-span-full flex items-center justify-center">
        {<SquareLoader className="my-80" color={color} />}
      </div>
    );
  }
  const article = SingleArticleData[0];
  const paragraphs = SingleArticleData[0].paragraphs;
  const bullet = SingleArticleData[0].bullet;
  const middleIndex = Math.ceil(paragraphs.length / 2);

  // Split the paragraphs array into two halves
  const leftParagraphs = paragraphs.slice(0, middleIndex);
  const rightParagraphs = paragraphs.slice(middleIndex);

  const BackgroundImage = urlFor(article.featureImage.asset).url();

  //   console.log("bullet", bullet[0]);

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(
      article.featureImage.asset
    ).url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginTop: "-7rem",
    height: "516px",
  };

  return (
    <div className="">
      {" "}
      <div className="h-64" style={headerStyle}>
        <div className="flex justify-center items-center text-white mx-8 sm:mx-20 my-auto">
          <div className="text-5xl sm:text-8xl relative text-white top-40 sm:top-52 sm:bottom-64">
            {article.heading.length > 75 ? article.heading.slice(0, 75) + "..." : article.heading}
          </div>
        </div>
      </div>
      <div className="mx-8 sm:mx-20">
        <div className="my-8 sm:my-12">
          {" "}
          <div className="sm:w-2/3 text-left text-2xl sm:text-4xl my-4 sm:my-8 underline">
            {article.heading}
          </div>
          <div className="sm:flex items-start justify-center sm:space-x-4">
            <div className="left sm:w-1/2 my-8 sm:my-0">
              {leftParagraphs.map((paragraph, index) => (
                <div className="my-4" key={index}>
                  {paragraph}
                </div>
              ))}
            </div>
            <div className="right sm:w-1/2 my-8 sm:my-0">
              {rightParagraphs.map((paragraph, index) => (
                <div className="my-4" key={index}>
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:my-16">
          {article.articleImage && article.articleImage.asset && (
            <div className="flex items-center justify-center sm:space-x-8 my-8">
              <div className="h-96 w-full overflow-hidden">
                <Image
                  src={urlFor(article.articleImage.asset).url()}
                  alt=""
                  width={1000}
                  height={100}
                  className="object-cover w-full"
                />
              </div>
            </div>
          )}

          {/* <PortableText
            content={article.mainDescription}
            projectId="xh1730zu"
            dataset="production"
          /> */}
        </div>
        <div className="">
          {bullet &&
            bullet.length > 0 &&
            bullet.map((item, index) => (
              <div
                key={item.id}
                className={`my-16 ${
                  index % 2 !== 0 ? "sm:flex-row-reverse sm:space-x-reverse" : ""
                } sm:flex items-start justify-center sm:space-x-8`}
              >
                <div
                  className={
                    item.bulletImage && item.bulletImage.asset ? "left sm:w-1/2" : "left sm:w-full"
                  }
                >
                  {item.bulletHeading && (
                    <div className="text-4xl sm:text-5xl mb-12">{item.bulletHeading}</div>
                  )}
                  {item.bulletDescription && (
                    <div className="text-xl my-6 sm:my-0">{item.bulletDescription}</div>
                  )}
                </div>
                {item.bulletImage && item.bulletImage.asset && (
                  <div className="right sm:w-1/2">
                    <Image
                      src={urlFor(item.bulletImage.asset).url()}
                      alt=""
                      width={783}
                      height={501}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className="sm:flex justify-between items-center my-16">
          <div className="left flex my-10">
            <div className="sm:mx-4">Share on socials</div>
            <div className="flex space-x-2 sm:space-x-6">
              <Image src="/images/xicon.png" alt="map2" width={31} height={31} />
              <Image src="/images/linkdin.png" alt="map2" width={31} height={31} />
              <Image src="/images/insta.png" alt="map2" width={31} height={31} />
            </div>
          </div>
          <div className="right">
            <div className="flex justify-start items-center space-x-6 my-4">
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
              <div>
                {article.nextArticleSlug && (
                  <Link href={`/articles/${article.nextArticleSlug}`}>
                    <div className="text-black font-space-grotesk text-22 font-medium underline">
                      Read next article
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
