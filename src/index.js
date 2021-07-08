module.exports = function reverse (n) {
  
    n = Math.abs(n);

    let strNum = '' + n;

    strNum = strNum.split("").reverse().join("");

    return strNum * 1;
}
