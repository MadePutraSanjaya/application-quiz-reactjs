import { OptionProps } from "../../../interface/select-input.type";

const Option = ({ value, children, disabled }: OptionProps) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

export default Option;
