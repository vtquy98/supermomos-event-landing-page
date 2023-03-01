import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  constainerClass?: string;
  inputClass?: string;
  type?: "checkbox" | "radio";
};

const CheckControl = ({
  label,
  id,
  name,
  type = "checkbox",
  constainerClass,
  inputClass,
  ...rest
}: Props) => {
  return (
    <div className={`form-check ${constainerClass}`}>
      <input
        type={type}
        id={id}
        name={name}
        {...rest}
      />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckControl;
