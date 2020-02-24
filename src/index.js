module.exports = function reverse (n) {
    let res  = '';
    let nToStr = n.toString();

    for (let i = nToStr.length - 1; i >= 0; i -= 1) {
        if (nToStr[i] !== '-') {
            res += nToStr[i];
        }
    }

    return +res;
}
