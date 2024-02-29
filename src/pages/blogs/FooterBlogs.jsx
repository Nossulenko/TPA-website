import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import Inspired from "./Inspired";
import ButtonArrow from "./ButtonArrow";

const ModileFooterBlogs = () => {
  return (
    <div className="bg-blue1">
      {" "}
      <div className="">sdfsdfsdf</div>
    </div>
  );
};

const FooterBlogs = () => {
  return (
    <div>
      <div className=" sm:flex sm:h-[23rem] justify-center items-center bg-blue1 text-lightWhite">
        <div className="w-full sm:w-1/2 mx-10 transform -translate-y-16">
          <div className="-pt-40">
            {" "}
            <div className="hidden sm:block my-4 ">
              <Inspired />
            </div>
            <div className="mt-8 hidden sm:block">
              <div className=" text-lightRed w-full sm:w-[40%] font-medium" htmlFor="">
                Keep yourself up to date, subscribe to our newsletter{" "}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="transition-all duration-300 ease-in-out border-lightRed focus:rounded-none bg-lightWhite text-blue1 px-3"
                />
              </div>
              <button className="text-lightRed bg-white px-4 my-4 pr-14 mr-4 mb-2 arrow-button py-[3px] pl-[10px] text-red font-bold text-base touch disabled:opacity-50 flex bg-cotton svelte-1tkw7go">
                {" "}
                <div className="">Subscribe</div>
                <div className="relative flex items-center h-6">
                    <ButtonArrow className="svelte-1tkw7go " />
                  </div>
              </button>
            </div>
            <div className="mt-10 hidden sm:block">
              <Link to="https://cms.productarchitects.eu/api/assets/3c_Terms_and_Conditions_2287fbd4bb/3c_Terms_and_Conditions_2287fbd4bb.pdf">
                Terms and conditions
              </Link>
              <div className="my-4">Copyright © 2022. The Product Architects</div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[66%] sm:transform sm:-translate-y-20">
          <div className="sm:hidden bg-blue1 h-16">
            {" "}
            <div className="sm:hidden transform -translate-y-24 ml-4">
              <Inspired />
            </div>
          </div>

          <div className="bg-yellow bottom-10 h-[480px] sm:h-[410px]">
            <div className="py-8 sm:py-8 leading-1 flex items-end justify-center sm:justify-between">
              <div className="left">
                <div className="sm:flex sm:w-2/3 px-4 sm:space-x-2">
                  <div className="">
                    <div className="text-blue1">Name</div>
                    <input
                      type="text"
                      className="transition-all duration-300 ease-in-out border-lightRed focus:rounded-none bg-lightWhite text-blue1 px-3"
                    />
                  </div>
                  <div className="my-4 sm:my-0">
                    <div className="text-blue1">Email</div>
                    <input
                      type="text"
                      className="transition-all duration-300 ease-in-out border-lightRed focus:rounded-none bg-lightWhite text-blue1 px-3"
                    />
                  </div>
                </div>
                <div className="m-4">
                  <div className="text-blue1">Company Name</div>
                  <input
                    type="text"
                    className="w-full transition-all duration-300 ease-in-out border-lightRed focus:rounded-none bg-lightWhite text-blue1 px-3"
                  />
                </div>
                <div className="m-4">
                  <div className="text-blue1">Message</div>
                  <textarea className="transition-all duration-300 ease-in-out border-lightRed focus:rounded-none bg-lightWhite text-blue1 px-3 h-36 w-full" />
                </div>
                <button className="text-lightRed bg-white px-4 pr-14 mx-4 mb-2 arrow-button py-[3px] pl-[10px] text-red font-bold text-base touch disabled:opacity-50 flex bg-cotton svelte-1tkw7go">
                  <div className="">Submit</div>
                  <div className="relative flex items-center h-6">
                    <ButtonArrow className="svelte-1tkw7go " />
                  </div>
                </button>
              </div>
              <div className="right flex flex-col space-y-8 m-6">
                <Link
                  href="https://www.instagram.com/theproductarchitects/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/instagram.svg" alt="Instagram Logo" width={20} height={20} />
                </Link>
                <Link
                  href="https://twitter.com/TheProductArch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/twitter.svg" alt="Twitter Logo" width={20} height={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/theproductarchitects/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:hidden bg-blue1 h-16"></div>
        </div>
      </div>
      {/* <div className="sm:hidden">
        <ModileFooterBlogs />
      </div> */}
    </div>
  );
};

export default FooterBlogs;
