import React from "react";
import Project from "../components/Project";

export default function Projects() {
  return (
    <section className="projects-page">
      <ul className="projects-list">
        <Project
          name="Modify"
          description="Chord and chord progression builder"
          techStack="React, Node, Tonal, Sharp11"
          frontEndLink="https://github.com/JorPan/musicly-frontend"
          backEndLink="https://github.com/JorPan/musicly-backend"
          demoLink="https://www.youtube.com/watch?v=HNiOuJO_xKI"
          deployedLink=""
        />
        <Project
          name="Lyricize"
          description="Magical lyric writing tool"
          techStack="React, Ruby on Rails, PostgresQL, 6 unique API's"
          frontEndLink="https://github.com/JorPan/lyricize-frontend"
          backEndLink="https://github.com/JorPan/lyricize-backend"
          demoLink="https://www.youtube.com/watch?v=xNXhS0R3J9k"
          deployedLink=""
        />
        <Project
          name="SetLy"
          description="Set building and concert data tracking for DJ's and Performing Artists"
          techStack="Vanilla JS, Ruby on Rails, SQLite"
          frontEndLink="https://github.com/JorPan/realSetLy"
          backEndLink=""
          demoLink="https://www.youtube.com/watch?v=T71Ynuger6M"
          deployedLink=""
        />
        <Project
          name="Herbals"
          description="Strain suggestor and desired effects filtering"
          techStack="Vanilla JS, Ruby on Rails, SQLite"
          frontEndLink="https://github.com/JorPan/HerbalsFrontend"
          backEndLink="https://github.com/JorPan/HerbalsBackend"
          demoLink="https://www.youtube.com/watch?v=DBSvbyIl-LU"
          deployedLink=""
        />
        <Project
          name="Asteroids"
          description="Vanilla JS Remake of the 1979 Atari Game"
          techStack="Vanilla JS"
          frontEndLink="https://github.com/JorPan/asteroidjs"
          backEndLink=""
          demoLink=""
          deployedLink="https://jorpan.github.io/asteroidjs/"
        />
        <Project
          name="Flashcards"
          description="Flashcards App for learning and memory practice"
          techStack="React and LocalStorage"
          frontEndLink="https://github.com/JorPan/flashcards"
          backEndLink=""
          demoLink=""
          deployedLink=""
        />
        <Project
          name="Notify"
          description="Definitely not Spotify"
          techStack="React, Node, Spotify web API"
          frontEndLink="https://github.com/JorPan/not-ify"
          backEndLink=""
          demoLink=""
          deployedLink=""
        />
        <Project
          name="2do"
          description="Full auth to do app"
          techStack="React, Ruby on Rails, PostgresQL"
          frontEndLink="https://github.com/JorPan/2do-frontend"
          backEndLink="https://github.com/JorPan/2do-backend"
          demoLink=""
          deployedLink=""
        />
        <Project
          name="Jazzy Jay's Youtube Jukebox"
          description="CLI Jukebox app w/ Reviews"
          techStack="Ruby, Sinatra, ActiveRecord, SQLite, TTY Prompt"
          frontEndLink="https://github.com/JorPan/JazzyJaysYoutubeJukebox"
          backEndLink=""
          demoLink="https://www.youtube.com/watch?v=XYX37R1wbqg"
          deployedLink=""
        />
        <Project
          name="RYGBcess"
          description="Silly Sound Board"
          techStack="Vanilla JS"
          frontEndLink="https://github.com/JorPan/RYGBcess"
          backEndLink=""
          demoLink=""
          deployedLink="https://jorpan.github.io/RYGBcess/"
        />
      </ul>
    </section>
  );
}
