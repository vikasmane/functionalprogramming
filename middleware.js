var logger = getState => next => action => {console.log("--logger", action); return next(action)};
var config = getState => next => action => {console.log("--config", action); return next(action)};
var config1 = getState => next => action => {console.log("--config1", action); return next(action)};
var config2 = getState => next => action => {console.log("--config2", action); return next(action)};
var applyMiddleware = (...fns)=>{
    let fn = fns.slice(1, fns.length).reduce((acc, fn) => {
        return fn(()=>"state")(acc);
    }, fns[0](()=>"state")(()=>"dispatch"));
    return fn;
}

console.log(applyMiddleware(logger, config, config1, config2)({}));