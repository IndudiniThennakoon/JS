//external function implementation
function displaySumOfValues() {
    var number1 = 1;
    var number2 = 2;
    var sum = number1 + number2;


    console.log("Sum of value is :" + sum);
    document.getElementById('sumText').innerText = sum;
}