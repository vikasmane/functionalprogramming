let compose = (f, g) => {
    return (x) => f(g(x))
};

let f = x => {
    return x + 10;
};
let g = x => {
    return x + 5;
};

let functionComposition = compose(f, g);
console.log(functionComposition(12));