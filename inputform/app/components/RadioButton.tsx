import React, { useState } from 'react';

type RadioButtonProps = {
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
