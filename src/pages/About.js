import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">What is a Cocktail?</h1>
      <img
        src="https://s3.culturally.co/uploads/post_attachment/file/613/medium_e6545f48-4169-4779-bb23-881d3ceec16d.jpg"
        alt="cocktails"
        style={{ marginBottom: "50px" }}
      />

      <p>
        Today’s definition of a cocktail is a mixed alcoholic drink. Cocktails
        are usually mixed with juices, soft drinks and even fruits along with
        other alcohols. This definition used to be more complicated though, with
        cocktails having to contain liquor, water, sugar and bitters to qualify
        as one. When more ingredients became available and incorporated into old
        recipes in the late 1800s, the definition of cocktails expanded to
        include more drinks.
      </p>
    </section>
  );
};

export default About;
