export interface OptionProps {
    value?: string | number;
    label?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}

export interface SelectInputProps {
    value: string;
    options?: OptionProps[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}