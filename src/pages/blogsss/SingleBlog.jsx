// TPA-Website/src/pages/blog/SingleBlog.jsx
import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";

import Loader from "../blog/Loader";

const SingleBlog = ({ singleBlogData }) => {
  if (!singleBlogData) {
    return (
      <div className=" col-span-full flex items-center justify-center">
        {loading && <Loader className="my-80" />}
      </div>
    );
  }
  console.log("singleBlogData", singleBlogData);
  const blog = singleBlogData;
  return (
    <div>
      <h2 className="text-5xl font">{blog.title}</h2>
      <Image src={blog.featureImage.asset.url} width={400} height={400} alt={blog.title} />
      <div className="shubham">
        {/* <PortableText value={blog.mainDescription} /> */}
        <PortableText content={blog.mainDescription} projectId="xh1730zu" dataset="production" />
      </div>
    </div>
  );
};

export default SingleBlog;
