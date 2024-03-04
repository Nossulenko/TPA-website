// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import sanityClient from "../../lib/sanity";

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

// const richTextSerializers = {
//   types: {

//     block(props) {
//       switch (props.node.style) {
//         case "h1":
//           return <h1 className="text-4xl font-bold">{props.children}</h1>;
//         case "h2":
//           return <h2 className="text-3xl font-bold">{props.children}</h2>;
//         case "h3":
//           return <h3 className="text-2xl font-bold">{props.children}</h3>;
//         case "ul":
//           return <ul className="list-disc list-inside">{props.children}</ul>;
//         case "ol":
//           return <ol className="list-decimal list-inside">{props.children}</ol>;
//         case "p":
//           return <p className="mt-4">{props.children}</p>;
//         case "a":
//           return <a className="text-blue-600 underline">{props.children}</a>;
//         default:
//           return <p className="">{props.children}</p>;
//       }
//     },
//     image: (props) => {
//       const [imageUrl, setImageUrl] = useState(null);

//       useEffect(() => {
//         const getImage = async () => {
//           const imageAsset = await sanityClient.fetch(
//             `*[_type == "sanity.imageAsset" && _id == $id]`,
//             { id: props.node.asset._ref }
//           );
//           setImageUrl(urlFor(imageAsset).url());
//         };
//         getImage();
//       }, [props.node.asset._ref]);

//       if (!imageUrl) {
//         return null;
//       }

//       return (
//         <Image
//           src={imageUrl}
//           alt={props.node.alt ? props.node.alt : "image"}
//           width={800}
//           height={800}
//         />
//       );
//     },
//   },
// };

// export default richTextSerializers;


// TPA-Website/src/pages/blog/richTextSerializers.js

import Image from "next/image";

const richTextSerializers = {
  // serialize other types here...
  types: {
    image: (props) => {
      const { node } = props;
      return (
        <div style={{maxWidth: '500px'}}>
          <Image
            src={node.asset.url}
            alt={node.alt}
            width={500} // The intrinsic width of the image
            height={500} // The intrinsic height of the image
            layout="responsive" // This makes the image responsive, preserving the aspect ratio
          />
        </div>
      );
    },
  },
};

export default richTextSerializers;