import React from "react";
import NumberInput from "../inputs/number/NumberInput";
import RadioInput from "../inputs/radio/RadioInput";
import TextInput from "../inputs/text/TextInput";

const FormItem = ({
  label,
  type,
  onChange,
  value,
  placeholder,
  name,
  id,
  onClick,
  checked,
  error,
  errorMessage,
}) => {
  return (
    <>
      {type === "text" && !error && (
        <TextInput
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}

      {type === "text" && error && (
        <TextInput
          error={error}
          errorMsg={errorMessage}
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}

      {type === "number" && !error && (
        <NumberInput
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}

      {type === "number" && error && (
        <NumberInput
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
          errorMsg={errorMessage}
          error={error}
        />
      )}

      {type === "radio" && (
        <RadioInput id={id} onClick={onClick} checked={checked} label={label} />
      )}
    </>
  );
};

export default FormItem;
