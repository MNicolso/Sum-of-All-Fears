document.getElementById("button").addEventListener('click', () => {
    let userInput1 = parseInt(document.getElementById("userInput1").value);
    let userInput2 = parseInt(document.getElementById("userInput2").value);
    let userInput3 = parseInt(document.getElementById("userInput3").value);
    let userInput4 = parseInt(document.getElementById("userInput4").value);
    let userArray = [userInput1, userInput2, userInput3, userInput4];
    let hardArray = [10, 15, 3, 7];
    let k = parseInt(document.getElementById("k").value);


    let sumNumbers = sumNumbersFunction(userArray, k);
    let sumNumberOne = sumNumbers[0];
    let sumNumberTwo = sumNumbers[1];
    document.getElementById('printBox').innerHTML = `${sumNumberOne} + ${sumNumberTwo} = ${k}`;
  
})

function sumNumbersFunction(userArray, k) {
    var sumNumbers = [];
    for (let i = 0; i < userArray.length; i++) {
        let map1 = userArray.map(x => x + userArray[i]);
        let map1includes = map1.includes(k, 0);
        if (map1includes == true) {
            sumNumbers.push(userArray[i])
        }
        if (sumNumbers.length != 2) {
            document.getElementById('printBox').innerHTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/irIxkjXOp5M?autoplay=1&controls=0&rel=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>`;

        

        } else {
            return sumNumbers;
        }

    }
    
}





//const array1 = [10, 15, 3, 7];
//const k = 25;
//const sumNumbers = [];
//for (let i = 0; i < array1.length; i++) {
//    const map1 = array1.map(x => x + array1[i]);
//    console.log(map1);
//    const map1includes = map1.includes(k, 0);
//    console.log(map1includes);
//    if (map1includes == true) {
//        sumNumbers.push(array1[i]);
//    }
//}
//console.log(sumNumbers);