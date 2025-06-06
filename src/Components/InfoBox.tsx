import type { ReactNode } from "react";

type hintProps = {
    mode: 'hint',
    children: ReactNode
}

type warningProps = {
    mode: 'warning', 
    children: ReactNode,
    severity: 'high' | 'medium' | 'low'
}

type InfoBoxProps = hintProps | warningProps;

export default function InfoBox(props: InfoBoxProps) {
    const {mode, children} = props;
    if(mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    const {severity} = props;
    return(
       <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
       </aside>
    );
}