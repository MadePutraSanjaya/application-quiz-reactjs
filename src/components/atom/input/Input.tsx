import { InputProps } from "../../../interface/input.type";

const Input = ({ type, className, ...props }: InputProps) => {
  return (
    <input
      type={type}
      {...props}
      className={`input input-bordered w-full ${className}`}
    />
  );
};

export default Input;
