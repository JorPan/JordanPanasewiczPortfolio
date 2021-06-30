import React from "react";
import DownloadLink from "react-download-link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-top-section">
        <div>
          <img
            className="circle-photo"
            src="https://i.imgur.com/j289lch.jpg"
            alt="jorpantech"
          />
        </div>
        <div className="about-section">
          <h1>Hello!</h1>
          <h2>
            My Name is Jordan Panasewicz, and I am a passionate and eager to
            learn Full Stack developer with a focus on User Experience and Work
            Flow.
          </h2>
        </div>
      </div>
    </div>
  );
}
