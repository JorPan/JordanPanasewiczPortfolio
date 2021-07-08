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
          techStack="React, Ruby on Rails, PostgresQL, 6 unique API's"
          frontEndLink="https://github.com/JorPan/lyricize-frontend"
          backEndLink="https://github.com/JorPan/lyricize-backend"
          demoLink="https://www.youtube.com/watch?v=xNXhS0R3J9k"
        />
        <Project
          name="SetLy"
          description="Set building and concert data tracking for DJ's and Performing Artists"
          techStack="Vanilla JS, Ruby on Rails, SQLite"
          frontEndLink="https://github.com/JorPan/realSetLy"
          backEndLink=""
          demoLink="https://www.youtube.com/watch?v=T71Ynuger6M"
        />
        <Project
          name="Herbals"
          description="Strain suggestor and desired effects filtering"
          techStack="Vanilla JS, Ruby on Rails, SQLite"
          frontEndLink="https://github.com/JorPan/HerbalsFrontend"
          backEndLink="https://github.com/JorPan/HerbalsBackend"
          demoLink="https://www.youtube.com/watch?v=DBSvbyIl-LU"
        />
        <li>FlashCards</li>
        <li>Jazzy Jay's Youtube Jukebox</li>
        <li>Asteroids</li>
        <li>To Do</li>
        <li>DrumKit</li>
      </ul>
    </div>
  );
}
