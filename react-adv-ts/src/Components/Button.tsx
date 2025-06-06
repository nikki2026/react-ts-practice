import type { ComponentPropsWithoutRef } from "react";

type ButtonProp = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProp = {
    el: 'a';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProp | AnchorProp) {
    if(props.el === 'a') {

     return <a {...props}></a>
    }

    return (
        <button {...props}></button>
        
    );
}