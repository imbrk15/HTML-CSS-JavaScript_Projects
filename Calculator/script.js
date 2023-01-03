
function display(val) {
    document.getElementById("input").value += val;
}
function eventFunction(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4'
        || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' ||
        event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '.') {

        document.getElementById("input").value += event.key;
    }
}
var cal = document.getElementById("calculator");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("input").value;
        console.log(x);
        solve();
    }
}
function solve(){

    let x = document.getElementById("input").value;
    // let y = math.evaluate(x)
    let y = eval(x);
    
    
    document.getElementById("input").value = y;
}

function clearscreen() {
    document.getElementById("input").value = "";
}
//********* */
// function calculate() {
//     let a = document.getElementById("input").value;
//     let b = eval(a);
//     document.getElementById("input").value = b;
// }