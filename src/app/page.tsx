import React from "react";

import ImageSection from "@/components/ImageSection";
import ServiceSection from "@/components/ServiceSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";

export default async function Home() {
  return (
    <>
      <ImageSection />
      <ServiceSection />
      <NewsSection />
      <AboutSection />
    </>
  );
}
