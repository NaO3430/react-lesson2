import React from 'react';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  text: string;
  destination: string;
};

const Button: React.FC<ButtonProps> = ({ text, destination }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(destination);
  };
  return (
    <button className="button is-primary" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
