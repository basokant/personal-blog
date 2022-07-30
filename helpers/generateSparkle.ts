import random from './random';

// Defualt color is a bright blue
const DEFAULT_COLOR = 'rgb(100,100,100)';

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