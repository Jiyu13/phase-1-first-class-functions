function receivesAFunction(func) {
    func();
}

function returnsANamedFunction() {
    const func = function() {
        console.log("return a named function");
    };

    return func;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "This is an anonymous function";
    }
}