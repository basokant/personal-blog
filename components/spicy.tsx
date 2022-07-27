import { ReactNode } from "react";

type SpicyProps = {
    children: ReactNode;
}

const Spicy = ({children}: SpicyProps) => {
    return (
        <span style={{fontFamily: "sriracha"}}>{children}</span>
    )
}

export default Spicy;