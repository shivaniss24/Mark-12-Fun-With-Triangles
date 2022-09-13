const inputs = document.querySelectorAll(".side-input");
const op = document.querySelector("#output-hypotenuse");
const btn = document.querySelector("#hypotenuse-btn");

function calculateArea(){

    if((Number(inputs[0].value)) < 0 || (Number(inputs[1].value < 0))){
        op.innerText = "Enter valid values"
    }
    else{
        const productOfSides = calculateProductOfSides(Number(inputs[0].value), Number(inputs[1].value));
        op.innerText = "Area is: " + productOfSides;
    }
}

function calculateProductOfSides(base, height){
    productOfSides = base * height;
    return ((1/2) * productOfSides);
}

btn.addEventListener("click", calculateArea);