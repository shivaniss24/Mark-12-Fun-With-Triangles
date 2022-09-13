const inputs = document.querySelectorAll(".side-input");
const btnH = document.querySelector("#hypotenuse-btn");
const op = document.querySelector("#output-hypotenuse");

function calculateHypotenuse(){
    if(inputs[0].value < 0 || inputs[1].value < 0){
        op.innerText = "Enter valid values"
    }
    else{
        const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
        op.innerText = "Hypotenuse is: " + sumOfSquares;
    }
}

function calculateSumOfSquares(a, b){
    const sumOfSquares = (a * a) + (b * b);
    return Math.sqrt(sumOfSquares);
}

btnH.addEventListener("click", calculateHypotenuse);