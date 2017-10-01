let compose = (f, g) => {
    return (x) => f(g(x))
};

let f = x => {
    return x + 10;
};
let g = x => {
    return x + 5;
};

let h = x => {
    return x + 1;
};

let id = x => x;

console.log(compose(f, id)(10) == f(10), compose(id, f)(10) == f(10));

let functionComposition = compose(f, g);
console.log(functionComposition(12));

console.log(compose(f, compose(g, h))(20) === compose(compose(f, g), h)(20));