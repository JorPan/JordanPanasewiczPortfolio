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
      <h2>{description}</h2>
      <h2>{techStack}</h2>
    </section>
  );
}
