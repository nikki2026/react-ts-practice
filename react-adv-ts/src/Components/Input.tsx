import type { ComponentPropsWithoutRef } from "react";

type InputProps ={
    id: string;
    text: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({id, text, ...props} :InputProps) {
    return(
        <p>
            <label htmlFor={id}>{text}</label>
            <input id={id} {...props}/>
        </p>
    );
}