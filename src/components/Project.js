import React from "react";

export default function Project({
  name,
  description,
  techStack,
  frontEndLink,
  backEndLink,
  demoLink,
  deployedLink,
}) {
  return (
    <section className="project-card">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h5>{techStack}</h5>
      <div className="repo-links">
        <a className="repo link" href={frontEndLink} alt="front end repo">
          Front End Repo
        </a>
        {backEndLink ? (
          <a className="repo link" href={backEndLink} alt="back end repo">
            Back End Repo
          </a>
        ) : null}
      </div>
    </section>
  );
}
