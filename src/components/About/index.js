import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello world! My name is Kaitlyn Skinner and I live in Ontario, Canada! I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!
        </p>
      </div>
    </section>
  );
}

export default About;