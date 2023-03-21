// console.log("One");

// setTimeout(function() {
//     console.log("Two");
// }, 2000);

// setTimeout(function() {
//     console.log("Five");
// }, 0);

// console.log("Three");
// console.log("Fore");

const foo = function() {
    setTimeout(function() {
        console.log("foo");
    }, 1000);
    console.log("3");
}

const bar = function() {
    setTimeout(function() {
        console.log("bar");
    }, 2000);
    foo();
    console.log("2");
}

const baz = function() {
    setTimeout(function() {
        console.log("baz");
    }, 3000);
    bar();
    console.log("1");
}

baz();
// foo();
// bar();

/*
    baz => bar => foo
*/
