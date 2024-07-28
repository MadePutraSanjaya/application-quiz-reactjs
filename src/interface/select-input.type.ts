export interface OptionProps {
    value: string;
    label?: string;
    children?: React.ReactNode;
}

export interface SelectInputProps {
    value: string;
    options?: OptionProps[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string;
    children?: React.ReactNode;
}