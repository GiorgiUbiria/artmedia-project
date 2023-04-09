import React from "react";

import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"] });

function ImageSection() {
  return (
    <section id="image__section">
      <div className="image__container">
        <Image
          src="/imagejpg.jpg"
          alt="image"
          width="1700"
          height="780"
          className="image"
        ></Image>
        <div className="image__box"></div>
      </div>
      <div className="image__text__container">
        <div className="image__text">
          <h1 className={montserrat.className}>
            Company&apos;s First Service Title
          </h1>
          <p className={montserrat.className}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem labore
            ducimus, repellendus ab, quo assumenda cumque, id facere eius illo
            sit doloremque? Omnis debitis aut molestiae temporibus.
          </p>
          <button className={montserrat.className}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
