type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ handleChange, value }: InputProps) => {
  return <input value={value} onChange={(e) => handleChange(e)} />;
};
