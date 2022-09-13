const inputs = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#is-triangle-btn");
const op = document.querySelector("#output");


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0){
        checkTriangle(sumOfAngles);
    }
    else{
        op.innerText = "Enter valid values";
    }
}

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function checkTriangle(sumOfAngles){
    if (sumOfAngles === 180){
        op.innerText = "The given angles can successfully form a triangle";
    }
    else{
        op.innerText = "The given angles can not form a triangle";
    }    
}

btn.addEventListener("click", isTriangle);