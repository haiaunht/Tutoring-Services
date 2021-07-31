import React from "react";

const Sponsors = () => {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        {[...Array(5)].map((_, index) => {
          return (
            <div className="sponsor__content" key={index}>
              <img
                src={`./images/sponsors${index + 1}.png`}
                alt={`image-${index + 1}`}
                className="sponsor__img"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
