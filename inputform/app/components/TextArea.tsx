import React, { useState } from 'react';

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return (
    <textarea
      className="textarea"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
