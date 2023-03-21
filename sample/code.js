const fs = require("fs");

/*

*/
let strings = [];
fs.readFile("./file.txt", "utf-8", function(err, result) {
    if (!err) {
        let line = "";
        for (let i = 0; i < result.length; i++) {
            if (result[i] === "\r" || result[i] === "\n") {
                strings.push(line);
                line = "";
            } else {
                line += result[i];
            }
        }
        strings.push(line);
        // console.log(strings);
    }
});
// setTimeout(function() {
//     console.log("22", strings);
// }, 0);

