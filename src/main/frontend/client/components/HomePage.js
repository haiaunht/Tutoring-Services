import React, { useState } from "react";
import CategoryList from "./CategoryList";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  const [autoPlay, setAutoPlay] = useState(5);

  return (
    <>
      <CategoryList />
      <Testimonial autoPlay={autoPlay} setAutoPlay={setAutoPlay} />
    </>
  );
};

export default HomePage;
