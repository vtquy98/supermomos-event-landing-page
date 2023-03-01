import React, { FC } from "react";

interface TextAreaProps {
  className?: string;
}
type Props = React.HTMLProps<HTMLTextAreaElement> & TextAreaProps;

const TextArea: FC<Props> = ({ value, onChange, className, style, defaultValue, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={className}
      style={style}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
