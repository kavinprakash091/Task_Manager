import React from "react";

export default function ProgressBar({ progress }) {
  const Parentdiv = {
    height: "1.5vh",
    width: "90%",
    backgroundColor: "#dadada",
    borderRadius: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#008000",
    borderRadius: 10,
  };
  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
}
