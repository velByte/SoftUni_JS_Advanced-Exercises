function calculator() {
    let sum1; 
    let sum2; 
    let result; 
    return {
        init: (selector1,selector2, resultSelector) => {
            sum1 = document.querySelector(selector1)
            sum2 = document.querySelector(selector2)
            result = document.querySelector(resultSelector)
        },
        add: () => {
            result.value = Number(sum1.value) + Number(sum2.value)
        }, 
        subtract: () => {
            result.value = Number(sum1.value) - Number(sum2.value)
        }
    }
}