import React from "react";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="projects-page">
      <ul className="projects-list">
        <Project
          name="Modify"
          description="Chord and chord progression builder"
          techStack="React, Node, Tonal, Sharp11"
          frontEndLink="https://github.com/JorPan/musicly-frontend"
          backEndLink="https://github.com/JorPan/musicly-backend"
          demoLink="https://www.youtube.com/watch?v=HNiOuJO_xKI"
        />
        <li>Mode-ify</li>
        <li>Lyricize</li>
        <li>SetLy</li>
        <li>Herbals</li>
        <li>Asteroids</li>
        <li>To Do</li>
        <li>DrumKit</li>
      </ul>
    </div>
  );
}
