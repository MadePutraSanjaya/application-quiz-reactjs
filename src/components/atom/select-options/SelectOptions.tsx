import { OptionProps } from "../../../interface/select-input.type";

const Option = ({ value, children }: OptionProps) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};

export default Option;
