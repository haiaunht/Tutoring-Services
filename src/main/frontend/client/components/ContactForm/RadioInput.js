import React from "react";
import PropTypes from "prop-types";

export const RadioInput = ({ name, value, options, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <label className="input__radio-label" key={index}>
            <input
              type="radio"
              checked={value === option.val}
              name={name}
              onChange={handleOnChange}
              value={option.val}
              className="input__radio"
            />
            <span className="input__radio-btn">
              <i className="fas fa-check"></i>
            </span>
            <span className="input__radio-text">{option.text}</span>
          </label>
        );
      })}
    </>
  );
};

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
