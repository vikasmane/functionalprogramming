var a = {a: 1}
var myfunc = function (){return this.a + ' ' + arguments[0]};
// var bindedMyfunc = Function.prototype.bind.apply(myfunc, [a, "param1", "param2"]);
var bindedMyfunc = Function.prototype.apply.bind(myfunc, a, ['param1'])
console.log(bindedMyfunc());
