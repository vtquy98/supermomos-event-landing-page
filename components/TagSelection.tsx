import React from "react";

type Props = {
  tags: Array<string>;
  value: Array<string>;
  onChange: (value: Array<string>) => void;
  error?: string;
};

const TagSelection = ({ tags, value, onChange, error }: Props) => {
  const handleTagClick = (tag: string) => {
    if (value.includes(tag)) {
      onChange(value.filter((t) => t !== tag));
    } else {
      onChange([...value, tag]);
    }
  };

  const isSelected = (tag: string) => {
    return value.includes(tag);
  };

  return (
    <>
      <div className="d-flex gap-2">
        {tags.map((tag, idx) => {
          return (
            <span
              key={idx}
              className={`badge-custom ${
                isSelected(tag) && "badge-custom-selected"
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </>
  );
};

export default TagSelection;
