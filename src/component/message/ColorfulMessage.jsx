import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const styleOfMessage = {
    color: color,
    fontSize: "20px"
  };
  return (
    <>
      <p style={styleOfMessage}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
