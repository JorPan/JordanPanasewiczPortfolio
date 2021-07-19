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
          <p>...</p>
          <h2>
            My Name is Jordan Panasewicz, and I am a passionate and eager to
            learn Full Stack developer with a focus on User Experience and Work
            Flow.
          </h2>
          <p>...</p>
          <h3>
            I am passionate about ongoing education, and have chosen a path that
            I believe will allow me to truly be a life long learner
          </h3>
          <p>...</p>
          <h4>
            My obsession with technology is proven through my hobbies: Music
            Production, Photography and Videography (and editing), Projection
            Mapping, Electric Vehicles, Woodworking, Snowboarding, Skiing, Golf,
            and more...
          </h4>
          <p>...</p>
          <h4>
            ..all of these things have allowed me to explore both software and
            hardware deeply, assessing and analyzing user interfaces and
            productivity workflows.
          </h4>
        </div>
      </div>
    </div>
  );
}
