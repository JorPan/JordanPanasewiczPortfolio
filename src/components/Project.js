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
    </section>
  );
}
