let add = x =>{
    return y => x + y
}

let add5 = add(5);

console.log(add5(10));