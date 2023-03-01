//import React from 'react'

type Props = React.HTMLProps<HTMLInputElement>;

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
