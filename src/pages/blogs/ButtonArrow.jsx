import React from "react";

const ButtonArrow = () => {
  return (
    <div className="mb-12">
      <svg
        width="150"
        height="50"
        className="absolute left-2 stroke-lightRed stroke-[3px] svelte-1tkw7go"
      >
        <line className="arrow-base svelte-1tkw7go" x1="0" y1="25" x2="60" y2="25"></line>
        <line
          x1="40"
          y1="25"
          x2="52"
          y2="25"
          style={{ transformOrigin: "60px" }}
          className="svelte-1tkw7go arrow-top_small"
        ></line>
        <line
          x1="40"
          y1="25"
          x2="52"
          y2="25"
          style={{ transformOrigin: "60px" }}
          className="svelte-1tkw7go arrow-bottom_small"
        ></line>
      </svg>
    </div>
  );
};

export default ButtonArrow;
