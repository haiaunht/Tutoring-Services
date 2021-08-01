import React, { useEffect, useState } from "react";

export const TextAnimation = () => {
  const anythingArray = "Anything.".split("");
  const anytimeArray = "Anytime.".split("");
  const anywhereArray = "Anywhere.".split("");
  const [items, setItems] = useState(anythingArray);
  const [count, setCount] = useState(0);
  // const [play, setPlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate Learn
      if (count === 0) {
        setItems(anythingArray);
        setCount(count + 1);
        return;
      }

      // Animate Apply, Looping
      if (count === 1) {
        setCount(2);
        setItems(anytimeArray);
        return;
      }

      if (count === 2) {
        setCount(0);
        setItems(anywhereArray);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [items]);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Animate Apply after timeout
      setItems(anytimeArray);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="hero__section-cols--left-text-container">
      {items.map((item, index) => {
        return (
          <span key={index} style={{ animationDelay: `0.${index + 1}s` }}>
            {item}
          </span>
        );
      })}
    </h1>
  );
};
