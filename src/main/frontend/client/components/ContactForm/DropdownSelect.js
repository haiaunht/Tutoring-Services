import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utils/Validator/Validator";

const DropdownSelect = ({
  value,
  options,
  text,
  styleClass,
  onChange,
  validators,
}) => {
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div className={styleClass}>
      <select value={value} onChange={handleOnChange}>
        <option value="">{text}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && <span className="input__text-message">{error.message}</span>}
    </div>
  );
};

DropdownSelect.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  text: PropTypes.string,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  validators: PropTypes.array,
};

DropdownSelect.defaultProps = {
  styleClass: "",
  text: "",
  validators: [],
};

export default DropdownSelect;
