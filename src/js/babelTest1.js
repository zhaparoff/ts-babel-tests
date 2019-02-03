// @ts-nocheck
// JS: Array.prototype.forEach() is called for the same scope array

export function logCollection() {
    var array = [
        "1", "2", "3"
    ];

    array.forEach(function (item) {
        console.log(item);
    });
}
