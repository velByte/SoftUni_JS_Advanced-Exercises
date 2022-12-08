function solve(pieArr, targetFlavor1, targetFlavor2) {
    return pieArr.slice(pieArr.indexOf(targetFlavor1), pieArr.indexOf(targetFlavor2) + 1)
}



solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)