import React, { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const toggleShowScrollTopButton = () => {
      window.scrollY >= 200
        ? setShowScrollTopButton(true)
        : setShowScrollTopButton(false);
    };
    window.addEventListener("scroll", toggleShowScrollTopButton);
    return () =>
      window.removeEventListener("scroll", toggleShowScrollTopButton);
  }, []);

  return (
    <div
      className={
        showScrollTopButton
          ? "scroll-top__button show-scroll"
          : "scroll-top__button"
      }
      onClick={scrollTop}
    >
      <i className="fas fa-arrow-up scroll-top__button-icon"></i>
    </div>
  );
};
