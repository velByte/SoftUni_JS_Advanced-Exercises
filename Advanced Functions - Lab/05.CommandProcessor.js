function solve() {
    let str = "";
    return {
        append: function (x) {
            str += x;
            return str;
        },
        print: function () {
            console.log(str);
        },
        removeStart: function (n) {
            str = str.substring(n);
            return str;
        },
        removeEnd: function (n) {
            str = str.substring(0, str.length - n);
            return str;
        }
    }
}


let test = solve();
test.append("Test");
test.append("Test22222");
test.print();