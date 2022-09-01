const inputNumber=document.querySelectorAll(".input-side");
const hypotenuseButton=document.querySelector("#hypo-btn");
const outputElement=document.querySelector("#output");


function calculateSumOfSquares(a,b)
{
    const sumOfSqures=a*a+b*b;
    // console.log(sumOfSqures);
    return sumOfSqures;
}

function calculateHypotenuse()
{
  
  const sumOfSqures=  calculateSumOfSquares(Number(inputNumber[0].value),Number(inputNumber[1].value));
   const lengthOfHypotenuse=Math.sqrt(sumOfSqures);
   outputElement.innerText="The length of hypotenuse is "+lengthOfHypotenuse;
//   console.log(sumOfSqures);
}


hypotenuseButton.addEventListener("click",calculateHypotenuse);

