"use strict";
exports.__esModule = true;
var fs = require("fs");
function stat(filePath) {
    return new Promise(function (resolve, reject) {
        fs.stat(filePath, function (err, stats) {
            if (err) {
                reject(err);
            }
            resolve(stats);
        });
    });
}
exports.stat = stat;
