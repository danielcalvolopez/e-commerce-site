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
      {type === "text" && (
        <TextInput
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
          error={error}
          errorMsg={errorMessage}
        />
      )}

      {type === "number" && (
        <NumberInput
          errorMsg={errorMessage}
          error={error}
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}

      {type === "radio" && (
        <RadioInput id={id} onClick={onClick} checked={checked} label={label} />
      )}
    </>
  );
};

export default FormItem;
