import React from "react";

import ReactPhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

interface PhoneNumberProps extends PhoneInputProps
{
  label: string;
  value: string;
  defaultCountry?: string;
  onChange?: (value: string) => void;
}

export const PhoneField: React.FC<PhoneNumberProps> = ({
  label,
  value,
  defaultCountry = "in",
  onChange
}) =>
{
  const handleOnChange: PhoneInputProps[ "onChange" ] = (
    value,
    // eslint-disable-next-line @typescript-eslint/ban-types
    data: {},
    event,
    formattedValue
  ) =>
  {
    console.log({
      value,
      data,
      event,
      formattedValue,
      val: event.target.value
    });
    onChange && onChange(value);
  };

  return (
    <ReactPhoneInput
      inputProps={ {
        className: "w-full h-9 border pl-12 font-normal text-gray-500",
        name: { label, value },
        required: true,
        autoFocus: true
      } }
      country={ defaultCountry }
      onChange={ handleOnChange }
    />
  );
};
