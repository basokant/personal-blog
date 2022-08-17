import {CSSProperties} from "react";

// Component renders a Google Font Material Icon given a name and its properties.
// https://fonts.google.com/icons?icon.set=Material+Symbols

type IconProps = {
    name: string;
    type?: ["outlined", "rounded", "sharp"];
    style?: CSSProperties;
    size?: [18, 24, 36, 48];
    fill: boolean;
    weight: [100, 200, 300, 400, 500, 600, 700];
}

export default function Icon({name, type, style, size, fill, weight}: IconProps) {
    return (
        <span className={`material-symbols${type ? "-" + type : ""}`} 
            style={{...style,
                fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
                fontSize: `${size}px`
            }} 
        >
            {name}
        </span>
    )
}