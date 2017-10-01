const Box = x =>
({
  chain: f => f(x),
  ap: other => other.map(x),
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const add = x => y => x + y;

const res1 = Box(add).ap(Box(2)).ap(Box(4).ap(Box(14)));

console.log("result 1: ", res1.inspect());