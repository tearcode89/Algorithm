function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
            console.log(subtotal)
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([1,2,3,4,5]))