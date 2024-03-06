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
import { baseUrl } from "../../constants";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SingleCase = ({ SingleCaseData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const router = useRouter();
  let [color, setColor] = useState("#FECF4F");
  if (!SingleCaseData) {
    return (
      <div className=" col-span-full flex items-center justify-center">
        {<SquareLoader className="my-80" color={color} />}
      </div>
    );
  }
  const caseData = SingleCaseData[0];
  const paragraphs = SingleCaseData[0].paragraphs;
  const bullet = SingleCaseData[0].bullet;
  const middleIndex = Math.ceil(paragraphs.length / 2);

  // Split the paragraphs array into two halves
  const leftParagraphs = paragraphs.slice(0, middleIndex);
  const rightParagraphs = paragraphs.slice(middleIndex);

  const BackgroundImage = urlFor(caseData.featureImage.asset).url();

  console.log("myText", myText);

  const headerStyle = {
    backgroundImage: `url(${urlFor(caseData.featureImage.asset).url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginTop: "-7rem",
    height: "516px",
  };
  return (
    <div className="">
      <div className="overflow-hidden relative z-10 ">
        <div
          className="absolute inset-0 z-10 flex justify-start items-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow"
          style={{
            borderColor: theme ? theme.textColor : "#FECF4F",
            WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
          }}
        >
          {myText.substring(0, 7)}
        </div>
      </div>
      <div className="">
        <div className="h-64" style={headerStyle}>
          <div className="flex justify-start items-center text-white  mx-20 my-auto">
            <div className="text-5xl sm:text-8xl absolute text-white top-64 sm:bottom-64 left-10 right-10">
              {caseData.heading}
            </div>
          </div>
        </div>
        <div className="mx-8 sm:mx-20">
          <div className="">
            <div className={`my-16  sm:flex items-start justify-center sm:space-x-8`}>
              <div className="left sm:w-1/2">
                <div className="tags text-4xl sm:text-5xl mb-12">
                  {caseData.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="border-2 border-black rounded-full px-3 py-1 my-2 w-fit text-xl"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-xl my-6 sm:my-0">
                  <div className="flex justify-start items-center">
                    <div className="yellow">
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
                            <EastIcon className="" />
                          </div>
                        </div>
                        <Link href="">
                          <div className="text-black font-space-grotesk text-22 font-medium ">
                            <div className="righttext text-5xl">{caseData.subHeading}</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg my-4">{caseData.paragraphs}</div>
                </div>
              </div>

              <div className="right sm:w-1/2">
                <Image
                  src={urlFor(caseData.caseImage.asset).url()}
                  alt=""
                  width={750}
                  height={479}
                />
              </div>
            </div>
          </div>
          <div className="sm:my-16">
            <div className="flex items-center justify-center sm:space-x-8 my-8">
              <div className="">
                <Image
                  src={urlFor(caseData.mainCaseImage.asset).url()}
                  alt=""
                  width={1683}
                  height={767}
                />
              </div>
            </div>
          </div>
          <div className="">
            {bullet.map((item, index) => (
              <div
                key={item.id}
                className={`my-16  sm:flex items-start justify-center sm:space-x-8`}
              >
                <div
                  className={
                    item.bulletImage && item.bulletImage.asset ? "left sm:w-2/3" : "left sm:w-full"
                  }
                >
                  <div className="text-4xl sm:text-5xl mb-12">{item.bulletHeading}</div>

                  {item.bulletDescription.map((desc, index) => (
                    <div
                      key={index}
                      className={`text-xl my-6 ${index === 0 ? "sm:ml-0" : "sm:ml-36"}`}
                    >
                      {desc}
                    </div>
                  ))}
                </div>
                {item.bulletImage && item.bulletImage.asset && (
                  <div className="right sm:w-1/3">
                    <Image
                      src={urlFor(item.bulletImage.asset).url()}
                      alt=""
                      width={534}
                      height={493}
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
                <Link
                  className="share-link"
                  href={`https://twitter.com/intent/tweet?text=${baseUrl}/cases/${caseData.nextCaseSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/xicon.png" alt="Twitter" width={31} height={31} />
                </Link>
                <Link
                  className="share-link"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}/cases/${caseData.nextCaseSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/linkdin.png" alt="LinkedIn" width={31} height={31} />
                </Link>
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
                <Link href={`/cases/${caseData.nextCaseSlug}`}>
                  <div className="text-black font-space-grotesk text-22 font-medium underline">
                    Explore next case
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
