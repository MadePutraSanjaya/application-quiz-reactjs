import { SelectInputProps } from "../../../interface/select-input.type";

const Select = ({ value, onChange, children }: SelectInputProps) => {
  return (
    <select
      className="select select-bordered w-full max-w-sm"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
