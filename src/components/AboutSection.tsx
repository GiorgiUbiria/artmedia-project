import React from "react";

import Image from "next/image";

function AboutSection() {
  return (
    <section id="about__section">
      <div className="about__image__container">
        <Image
          src="/astrounaut.jpg"
          alt="image"
          width="590"
          height="640"
          className="about__image"
        ></Image>
        <div className="about__image__box"></div>
      </div>
      <div className="about__text">
        <h4> About Company</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa
          consequuntur impedit maxime exercitationem, assumenda quas quod
          aperiam aliquid? Iure qui repudiandae dignissimos officia ipsa sit
          nesciunt sint voluptate ullam minus? Temporibus impedit reprehenderit
          inventore magnam, quia tenetur architecto commodi, perspiciatis harum
          blanditiis fuga molestias. Dolore voluptates perspiciatis, quasi,
          rerum, iste iusto repudiandae unde quo quae inventore rem! Illo ex
          earum maiores saepe obcaecati recusandae ipsa commodi incidunt soluta
          magni.
        </p>
        <button> See More </button>
      </div>
    </section>
  );
}

export default AboutSection;
