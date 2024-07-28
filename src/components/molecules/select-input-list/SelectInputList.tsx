import { SelectInputProps } from "../../../interface/select-input.type";
import Select from "../../atom/select-input/SelectInput";
import Option from "../../atom/select-options/SelectOptions";

const SelectInputList = ({ value, onChange, options }: SelectInputProps) => {
  return (
    <div className="w-full mt-4">
      <Select value={value} onChange={onChange}>
        {options &&
          options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default SelectInputList;
