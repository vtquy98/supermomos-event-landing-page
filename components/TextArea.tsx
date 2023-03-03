import React, { FC } from "react";

interface TextAreaProps {
  className?: string;
  error?: string;
}
type Props = React.HTMLProps<HTMLTextAreaElement> & TextAreaProps;

const TextArea: FC<Props> = ({
  value,
  onChange,
  className,
  style,
  defaultValue,
  placeholder,
  error,
}) => {
  return (
    <>
      <textarea
        value={value}
        onChange={onChange}
        className={className}
        style={style}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />

      {error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </>
  );
};

export default TextArea;
