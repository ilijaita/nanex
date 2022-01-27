import React from "react";

const AmazonFrame = ({ title,className, src, width, height }) => (
  <iframe title={title} className={className} src={src} width={width} height={height} scrolling="no"></iframe>
);

export default AmazonFrame;