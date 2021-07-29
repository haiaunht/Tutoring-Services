import React, { useState } from "react";
import _ from "lodash";
import { validateInput } from "../../utils/Validator/Validator";

import PropTypes from "prop-types";

export const TextInput = ({
  styleClass,
  type,
  label,
  placeholder,
  name,
  value,
  validators,
  onChange = () => {},
}) => {
  const id = `text-field-${_.uniqueId()}`;
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setError(validateInput(validators, value));
    onChange(e);
  };

  return (
    <div className={styleClass}>
      {label && (
        <label htmlFor={id} className="input__text-label">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          className="input__text-field"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
          cols="0"
          rows="3"
        ></textarea>
      ) : (
        <input
          id={id}
          className="input__text-field"
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      )}

      {error && <span className="input__text-message">{error.message}</span>}
    </div>
  );
};

TextInput.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  width: "contact-form__text-input w-100",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};
