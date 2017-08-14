

export const randomColor = (brightness) => {
    function randomChannel(brightnessNo) {
    const r = 255 - brightnessNo;
    const n = 0 | ((Math.random() * r) + brightnessNo);
    const s = n.toString(16);
    return (s.length === 1) ? '0' + s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
};

export const rainbow = () => {
    let r;
    let g; 
    let b;

    const step = Math.floor(Math.random() * 255);
    const numOfSteps = Math.floor(Math.random() * 255);
    const h = step / numOfSteps;
    const i = ~~(h * 6);
    const f = (h * 6) - i;
    const q = 1 - f;

    switch (i % 6) {
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;

        default: r = 1; g = f; b = 0; break;
    } 
    
    const c = '#' + 
    ('00' + (~~(r * 255)).toString(16)).slice(-2) + 
    ('00' + (~~(g * 255)).toString(16)).slice(-2) + 
    ('00' + (~~(b * 255)).toString(16)).slice(-2);

    return (c);
};

export default {
    randomColor,
    rainbow
};
