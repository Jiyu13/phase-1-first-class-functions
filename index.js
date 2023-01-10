function receivesAFunction(func) {
    func();
}

function returnsANamedFunction() {
    const func = function() {
        console.log("return a named function");
    };

    return func;
}