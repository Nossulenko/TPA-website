import React, { useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  {
    id: "01",
    image: "/images/team.png",
    name: "Alain De Keyser",
    designation: "Managing Partner & Strategy Designer",
  },
  {
    id: "02",
    image: "/images/team.png",
    name: "Alain De Keyser",
    designation: "Managing Partner & Strategy Designer",
  },
  {
    id: "03",
    image: "/images/team.png",
    name: "Alain De Keyser",
    designation: "Managing Partner & Strategy Designer",
  },
];

const Team = () => {
  const bgText = useContext(TextContext);
  return (
    <>
      <div className="relative w-full overflow-y-auto" style={{ height: "calc(100vh - 3.5rem)" }}>
        <div className="h-[60vh] sm:h-[60vh] m-6">
          <div className="font-space-grotesk text-2xl sm:text-6xl font-medium leading-9 sm:leading-93 break-words text-yellow">
            Core team
          </div>
          <div className="flex flex-col sm:flex-row mx-12 sm:mx-24 lg:mx-24">
            {textBlocks.map((item) => (
              <div key={item.id} className="my-8 sm:my-16 mx-auto sm:mx-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  layout="fixed"
                  className="mx-auto sm:ml-4 my-4"
                />
                <div className="text-center sm:text-left">
                  <div className="w-48 sm:w-96 text-black text-lg sm:text-3xl break-words">
                    {item.name}
                  </div>
                  <div className="w-48 sm:w-66 text-black text-sm break-words">
                    {item.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
