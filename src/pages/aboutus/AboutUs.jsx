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
const AboutUs = () => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  let [loading, setLoading] = useState(true);

  const [aboutUsData, setAboutUs] = useState([]);
  const [servicesData, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [aboutus, servicesPage] = await Promise.all([
          client.fetch('*[_type == "aboutus"]'),
          client.fetch('*[_type == "servicesPage"]'),
        ]);
        setAboutUs(aboutus[0]);
        setServices(servicesPage[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let [color, setColor] = useState("#FECF4F");

  // console.log(" aboutUsData:", aboutUsData);

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
        <div className="sm:flex relative z-10 items-center justify-center w-full">
          <div className="relative w-full sm:m-10">
            <div className="flex items-end justify-between">
              <div
                className="text-yellow font-space-grotesk text-6xl sm:text-8xl font-medium my-8 sm:my-12 mx-4 sm:m-0"
                style={{ color: theme ? theme.textColor : "#FECF4F" }}
              >
                About Us
              </div>
            </div>

            <div className="text-2xl sm:text-5xl m-4 sm:mx-0">{aboutUsData.heading}</div>
            <div className="text-xl sm:text-4xl m-4 sm:mx-0 py-8">{aboutUsData.subHeading}</div>

            <div className="mx-4 sm:mx-0 lg:flex items-stretch justify-end lg:space-x-8">
              <div className="lg:w-1/3 my-8 sm:my-0">
                {aboutUsData.firstPart && (
                  <div className="">
                    <div className="my-4 text-3xl">{aboutUsData.firstPart.partheading}</div>
                    <div className="">
                      {aboutUsData.firstPart.paragraphs.map((paragraph) => (
                        <div className="my-4 text-xl" key={paragraph._key}>
                          {paragraph.singleParagraph}
                        </div>
                      ))}
                    </div>
                    <ul className="mx-8 list-disc text-xl">
                      {aboutUsData.firstPart.bulletPoints.map((bullet) => (
                        <li key={bullet._key}>{bullet.singleBullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="lg:w-1/3 my-8 sm:my-0">
                {aboutUsData.secondPart && (
                  <div className="">
                    <div className="my-4 text-3xl">{aboutUsData.secondPart.partheading}</div>
                    <div className="">
                      {aboutUsData.secondPart.paragraphs.map((paragraph) => (
                        <div className="my-4 text-xl" key={paragraph._key}>
                          {paragraph.singleParagraph}
                        </div>
                      ))}
                    </div>
                    <ul className="mx-4 list-disc text-xl">
                      {aboutUsData.secondPart.bulletPoints &&
                        aboutUsData.secondPart.bulletPoints.map((bullet) => (
                          <li key={bullet._key}>{bullet.singleBullet}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="lg:w-1/3">
                {aboutUsData.aboutImage && aboutUsData.aboutImage.asset && (
                  <div className="right rounded-2xl">
                    <Image
                      src={urlFor(aboutUsData.aboutImage.asset).url()}
                      alt=""
                      width={583}
                      height={729}
                      className="rounded-2xl w-full"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="sm:flex sm:flex-wrap lg:flex-nowrap sm:space-x-4 space-y-4 sm:space-y-0 items-stretch justify-center mx-4 sm:mx-0 m-6">
              {aboutUsData &&
                aboutUsData.cardData &&
                aboutUsData.cardData.slice(0, 3).map((singleCard, index) => (
                  <div key={index} className="relative lg:w-1/3">
                    <div className="sm:w-full">
                      <div className="my-8">
                        <Image
                          src={urlFor(singleCard.cardImage.asset).url()}
                          alt=""
                          width={1091}
                          height={481}
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="flex justify-start items-start space-x-6">
                        <div className="text-black font-space-grotesk text-4xl font-medium normal underline">
                          {singleCard.cardheading}
                        </div>
                      </div>
                      <div className="my-6">
                        {singleCard.paragraphs &&
                          singleCard.paragraphs.map((bullet, bulletIndex) => (
                            <div key={bullet._key} className="my-2 text-xl">
                              <div className="font-bold sm:w-[93%]">{bullet.singleParagraph}</div>
                            </div>
                          ))}
                      </div>
                    </div>
                    {/* <div className="sm:w-10/12">{singleCard.summary}</div> */}

                    {/* <div className="w-5/6">{singleCard.desc}</div> */}
                  </div>
                ))}
            </div>
            <div className="m-4 sm:m-0">
              {aboutUsData &&
                aboutUsData.cardData &&
                aboutUsData.cardData.slice(3).map((singleCard, index) => (
                  <div
                    key={singleCard.id}
                    className={`my-8 ${
                      index % 2 === 0 ? "sm:flex-row-reverse flex-wrap lg:flex-nowrap sm:space-x-reverse" : ""
                    } sm:flex items-stretch justify-center sm:space-x-8 space-y-4 sm:space-y-0`}
                  >
                    <div
                      className={
                        singleCard.cardImage && singleCard.cardImage.asset
                          ? "left lg:w-1/3"
                          : "left lg:w-full"
                      }
                    >
                      <div className="">
                        <div className="">
                          <div className="text-5xl underline my-6">{singleCard.cardheading}</div>
                          {singleCard.paragraphs &&
                            singleCard.paragraphs.map((bullet, bulletIndex) => (
                              <div key={bullet._key} className="my-2 text-xl overflow-auto">
                                <div className="font-bold my-4">{bullet.singleParagraph}</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {singleCard.cardImage && singleCard.cardImage.asset && (
                      <div className="right lg:w-2/3 rounded-2xl">
                        <Image
                          src={urlFor(singleCard.cardImage.asset).url()}
                          alt=""
                          width={1091}
                          height={481}
                          className="rounded-2xl"
                        />
                      </div>
                    )}
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

export default AboutUs;
