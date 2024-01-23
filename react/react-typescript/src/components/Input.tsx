import { useEffect, useRef } from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ handleChange, value }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <input ref={inputRef} value={value} onChange={(e) => handleChange(e)} />
  );
};
