import type { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{img:{ src:string, alt:string}}>

export default function Header({img, children} :HeaderProps) {
    return(
        <header>
            <img {...img}></img>
            {children}
        </header>
    );
}