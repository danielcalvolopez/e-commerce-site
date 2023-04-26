import React from "react";
import NumberInput from "../inputs/number/NumberInput";
import RadioInput from "../inputs/radio/RadioInput";
import TextInput from "../inputs/text/TextInput";

const FormItem = ({
  label,
  type,
  placeholder,
  name,
  errorMessage,
  register,
  id,
  onClick,
  checked,
}) => {
  return (
    <>
      {type === "text" && (
        <TextInput
          label={label}
          placeholder={placeholder}
          name={name}
          errorMsg={errorMessage}
          register={register}
        />
      )}

      {type === "number" && (
        <NumberInput
          errorMsg={errorMessage}
          label={label}
          placeholder={placeholder}
          name={name}
          register={register}
        />
      )}

      {type === "radio" && (
        <RadioInput id={id} onClick={onClick} checked={checked} label={label} />
      )}
    </>
  );
};

export default FormItem;
