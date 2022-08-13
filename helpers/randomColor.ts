const generateColor = () => {
    return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
}

const generateLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
    const lightness = Math.floor((1 + Math.random()) * (100/2 + 1)) + "%";
    return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
}

const generateDarkColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
    const lightness = Math.floor(Math.random() * (100/2 + 1)) + "%";
    return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
}

export { generateColor, generateLightColor }