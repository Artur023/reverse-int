module.exports = function reverse(n) {
    n = n + ""; //'524'
    if (n[0] !== "-") {
        return Number(n.split("").reverse().join(""));
    } else {
        let n_WishOutMinus = n.slice(1, 4);
        let reverseNumArr = n_WishOutMinus.split("").reverse();
        return Number(reverseNumArr.join(''));
    }
};
