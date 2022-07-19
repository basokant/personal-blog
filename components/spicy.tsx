import { ReactNode } from "react";

type SpicyProps = {
    children: ReactNode;
}

const Spicy = ({children}: SpicyProps) => {
    return (
        <p style={{fontFamily: "sriracha"}}>{children}</p>
    )
}

export default Spicy;