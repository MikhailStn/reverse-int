module.exports = function reverse (n) {
    let str = n.toString();

    if (str[0] === '-') {
        let positiveString = str.substring(1);
        let newStr = positiveString.split("").reverse().join("");
        let result = Number(newStr);
        return result
    } else {
        let newStr = str.split("").reverse().join("");
        let result = Number(newStr);
        return result;
    }
};