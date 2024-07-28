export enum TypeInputProps {
    Password = 'password',
    Text = 'text',
    Email = 'email',
    Number = 'number',
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
    type: TypeInputProps;
    className?: string;
}