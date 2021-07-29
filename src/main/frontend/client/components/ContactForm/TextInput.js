import React from "react";

export const TextInput = () => {
  return (
    <>
      <label className="input__text-label">Label 1</label>
      <input className="input__text-field" type="text" />
      <span className="input__text-message">error goes here</span>
    </>
  );
};

// import React from "react";

// export const TextInput = () => {
//   return (
//     <>
//       <label className="input__text-label">Label 1</label>
//       <input className="input__text-field" type="text" />
//       <span className="input__text-message">error goes here</span>
//     </>
//   );
// };
