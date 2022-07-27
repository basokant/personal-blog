
const random = (min = 0, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default random;