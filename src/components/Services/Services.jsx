import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  {
    id: "01",
    heading: "Test First, Build Later",
    subHeading: "At the heart of our process  lies rapid prototyping and user validation.",
    desc: "We believe in testing ideas in real-world scenarios to refine and perfect them before full-scale development. This approach not only saves time and resources, but also ensures that the final product truly resonates with its intended audience.",
  },
  {
    id: "02",
    heading: "Innovation through Dedication and Non-Linear Thinking",
    subHeading: "Innovation doesn't follow a straight path. Our team thrives on complex ",
    desc: "challenges, employing an iterative and non-linear thinking approach that progressively hones in on solutions and meets the needs of each project.We dive deep into each mission, combining creative exploration with strategic analysis to bring forth breakthrough innovations.",
  },
  {
    id: "03",
    heading: "Embracing Circularity in a Resource-Constrained World ",
    subHeading: "Understanding the scarcity of resources, we champion sustainable",
    desc: "design principles. Our focus is on creating products that not only serve current needs but also contribute to a sustainable future. By integrating circularity, we not only help conserve resources but also create more value and longevity in every product.",
  },
];

const Services = () => {
  return (
    <div className="relative w-full mb-10 m-6 ">
      <div className="h-screen sm:h-screen sm:flex items-start justify-center sm:space-x-8">
        <div className="sm:w-1/2">
          <div className="text-yellow font-space-grotesk text-8xl sm:text-8xl font-medium my-12 mx-4 sm:m-0">
            Services
          </div>
          <div className="sm:pt-20 pt-0 w-full flex items-center justify-center sm:justify-start pr-12 sm:pr-0">
            <Image className="" src="/images/plmbr.png" alt={`plmbr`} width={400} height={400} />
          </div>
        </div>
        <div
          className="sm:w-2/3 ScrollContainer overflow-y-auto h-screen scrollbar scrollbar-thumb-yellow scrollbar-thumb-rounded"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#FECF4F #ffffff" }}
        >
          {textBlocks.map((block) => (
            <div className="m-4 sm:m-0 my-10" key={block.id}>
              <div className="sm:w-10/12 flex justify-start items-center space-x-4 sm:mt-20">
                <div className="text-3xl sm:text-4xl font-bold">{block.heading}</div>
              </div>
              <div className="my-4 sm:my-0 sm:mt-8 mx-1 text-xl">{block.subHeading}</div>
              <div className="mr-4 sm:mx-32 text-xl">{block.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
