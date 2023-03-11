import React from "react";
import Loading from "react-loading";
import "../styles/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Loading type="spinningBubbles" color="#0079ef" height={150} width={80} />
    </div>
  );
}
