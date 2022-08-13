import random from './random';
import { generateColor, generateLightColor } from "./randomColor";

// Defualt color is a bright yellow
const DEFAULT_COLOR = '#FFC700';

type Sparkle = {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: {
        top: string;
        left: string;
        zIndex: number;
    }
}

const generateSparkle = (color = DEFAULT_COLOR): Sparkle => {
    
    if (color == "rainbow") {
        color = generateColor();
    };
    

    return {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            // pick a random spot in the available space
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
            // Float sparkles above sibling content
            zIndex: 2,
        }
    }
}

export default generateSparkle;