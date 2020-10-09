document.getElementById("button").addEventListener('click', () => {
    let minInput = parseInt(document.getElementById("minInput").value);
    let maxInput = parseInt(document.getElementById("maxInput").value);
    let fizzInput = parseInt(document.getElementById("fizzInput").value);
    let buzzInput = parseInt(document.getElementById("buzzInput").value);

    let arrayModified = modifiedData(minInput, maxInput, fizzInput, buzzInput);

    document.getElementById('printBox').innerHTML = arrayModified;
})

//document.getElementsByTagName("input").addEventListener("keydown", function (e) {
//    var character=(e.which)
//}

function modifiedData(minInput, maxInput, fizzInput, buzzInput) {
    var arrayModified = "";
    for (let i = minInput; i<= maxInput; i++) {
        let fizzRemainder = i % fizzInput; 
        let buzzRemainder = i % buzzInput; 
        
        if (fizzRemainder == 0 && buzzRemainder == 0) {
            arrayModified += "FIZZBUZZ! ";
        } else if (fizzRemainder == 0) {
            arrayModified += "fizz ";
        } else if (buzzRemainder == 0) {
            arrayModified += "buzz ";
        } else {
            arrayModified += i+' ';
        }

    }


    return arrayModified;
}