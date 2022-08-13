import { CSSProperties, ReactNode } from "react";

type SpicyProps = {
    children: ReactNode;
    style: CSSProperties;
}

const Spicy = ({children, style}: SpicyProps) => {
    return (
        <span style={{fontFamily: "sriracha", fontSize: '1.2em', ...style}}>{children}</span>
    )
}

export default Spicy;