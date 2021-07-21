import React, { useState } from "react";
import CategoryList from "./CategoryList";
import Testimonial from "./Testimonial/Testimonial";
import Sponsors from "./Sponsors/Sponsors";

const HomePage = () => {
  const [autoPlay, setAutoPlay] = useState(3);

  return (
    <>
      <CategoryList />
      <Testimonial autoPlay={autoPlay} setAutoPlay={setAutoPlay} />
      <Sponsors />
    </>
  );
};

export default HomePage;
