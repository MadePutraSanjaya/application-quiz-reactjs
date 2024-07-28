import { useState } from "react";
import SelectInputList from "../../components/molecules/select-input-list/SelectInputList";
import Button from "../../components/atom/button/Button";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: "han_solo", label: "Han Solo" },
    { value: "greedo", label: "Greedo" },
  ];

  return (
    <div className="section-padding mt-4 h-screen">
      <div className="text-center">Choose Your Quiz</div>
      <div className="max-w-sm m-auto text-center mt-8">
        <SelectInputList
          onChange={handleChange}
          value={selectedValue}
          options={options}
        />
         <SelectInputList
          onChange={handleChange}
          value={selectedValue}
          options={options}
        />
        <Button as={Link} to="/login" className="mt-8">Start Your Quiz</Button>
      </div>
    </div>
  );
};

export default Quiz;
