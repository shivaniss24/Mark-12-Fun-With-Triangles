const input=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputElement=document.querySelector("#output");


function isTriangle()
{
    const sumOfAngles=calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    const blank="";
    if(sumOfAngles===180)
    {
        outputElement.innerText="yay,The angles form a triangle";
    }
    else{
        outputElement.innerText="oh no angles dont form a triangle";
    }
 
}

function calculateSumOfAngles(angle1,angle2,angle3)
{
const sum= angle1 + angle2 + angle3;
// console.log(sumOfAngles);
return sum;
}

isTriangleBtn.addEventListener('click',isTriangle);