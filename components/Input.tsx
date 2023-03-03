//import React from 'react'

type InputProps = {
  error?: string;
};

type Props = React.HTMLProps<HTMLInputElement> & InputProps;

const Input = (props: Props) => {
  return (
    <>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {props.error}
        </div>
      )}
    </>
  );
};

export default Input;
