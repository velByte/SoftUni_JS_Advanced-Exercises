function add(n) {
    function func(x) {
      return add(n + x);
    }
    
    func.toString = function () {
      return n;
    };
    
    return func;
  }
  

console.log(add(2)(3).toString());