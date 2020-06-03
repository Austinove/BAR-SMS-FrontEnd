import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
const override = css`
  top: 150px;
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const simple = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  height: 4px;
  width: 150px;
`;
const Loader = () => {
  return (
    <div className="sweet-loading mt-4">
      <RingLoader css={override} size={100} color={"#123abc"} loading={true} />
    </div>
  );
};
export const Simpleloader = () => {
  return (
    <div className="sweet-loading mt-4">
      <PropagateLoader
        css={simple}
        size={15}
        color={"#123abc"}
        loading={true}
      />
    </div>
  );
};
export default Loader;
