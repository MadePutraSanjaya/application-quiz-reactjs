import React, { ComponentPropsWithoutRef } from 'react'
import {twMerge} from "tailwind-merge"

interface ButtonProps<T extends React.ElementType> {
    as?:  T;
}

export default function Button<T extends React.ElementType = "button">({
    as,
    ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Component = as || "button"
    return <Component {...props} className={twMerge(
        "bg-primary rounded text-white p-[0.875rem] flex items-center justify-center gap-2",
        props.className
    )} />;
}