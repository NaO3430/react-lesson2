import React from 'react';

type StepBarProps = {
  currentStep: number;
};

const StepBar: React.FC<StepBarProps> = ({ currentStep }) => {
  return (
    <div>
      <span>STEP{currentStep}</span>
    </div>
  );
};

export default StepBar;
