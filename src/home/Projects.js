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
        <Project
          name="Lyricize"
          description="Magical lyric writing tool"
          techStack="React, Ruby on Rails, 6 unique API's,"
          frontEndLink="https://github.com/JorPan/lyricize-frontend"
          backEndLink="https://github.com/JorPan/lyricize-backend"
          demoLink="https://www.youtube.com/watch?v=xNXhS0R3J9k"
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
