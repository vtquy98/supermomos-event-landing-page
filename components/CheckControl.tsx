import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  constainerClass?: string;
  inputClass?: string;
  type?: "checkbox" | "radio";
};

const CheckControl = (
  {
    label,
    id,
    name,
    type = "checkbox",
    constainerClass,
    inputClass,
    ...rest
  }: Props,
  ref: any
) => {
  return (
    <div className={`form-check ${constainerClass}`}>
      <input className="form-check-input" ref={ref} type={type} id={id} name={name} {...rest} />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default React.forwardRef(CheckControl);
