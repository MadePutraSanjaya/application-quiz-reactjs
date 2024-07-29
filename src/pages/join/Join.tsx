import { useState } from "react";
import SelectInputList from "../../components/molecules/select-input-list/SelectInputList";
import Button from "../../components/atom/button/Button";
import { useNavigate } from "react-router-dom";
import Categories from "../../data/categories";
import { OptionProps } from "../../interface/select-input.type";
import ErrorMessage from "../../components/atom/error-message/ErrorMessage";

interface JoinProps {
  fetchQuestion: (category: string, difficulty: string) => void;
}

const Join: React.FC<JoinProps> = ({ fetchQuestion }) => {
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    }
    setError(false);
    fetchQuestion(category, difficulty);
    navigate("/quiz");
  };

  const categories: OptionProps[] = [
    { value: "", label: "Select a category", disabled: true },
    ...Categories.map((category) => ({
      value: category.value,
      label: category.category,
    })),
  ];

  const complexity = [
    { value: "", label: "Select a difficulty", disabled: true },
    { value: "hard", label: "Hard" },
    { value: "medium", label: "Medium" },
    { value: "easy", label: "Easy" },
  ];

  return (
    <div className="section-padding mt-4 h-screen">
      <div className="text-center">Choose Your Quiz</div>
      <div className="max-w-sm m-auto text-center mt-8">
        {error && (
          <ErrorMessage>Fill Categories or Difficulty First!</ErrorMessage>
        )}
        <SelectInputList
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(event.target.value)
          }
          value={category}
          options={categories}
        />
        <SelectInputList
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setDifficulty(event.target.value)
          }
          value={difficulty}
          options={complexity}
        />
        <Button onClick={handleSubmit} className="mt-8">
          Start Your Quiz
        </Button>
      </div>
    </div>
  );
};

export default Join;
