
let arr = [
    {
    keyId : 1
},
{
    keyId : 2
},
{
    keyId : 3
},
{
    keyId : 4
},
{
    keyId : 5
},

{
    keyId : 6
},
{
    keyId : 7
},
{
    keyId : 8
},
{
    keyId : 9
}

];

let htmlElement = '' ;
arr.forEach((value) => {

    let html =  ` <div class="subContainer cont-${value.keyId}" data-keyid="${value.keyId}"></div>
`;

htmlElement = htmlElement + html ;
})


document.querySelector(".container").innerHTML = htmlElement;
let n = 0 ;

 
document.querySelectorAll(".subContainer").forEach((game) => {
  game.addEventListener("click", () => {
       let point = game.dataset.keyid; 

    if ( n % 2 === 0) {
        game.innerHTML= "X";
        console.log(game)
        n = n +1;
       } else {
        game.innerHTML= "O";
        console.log(game)
        n = n + 1;
       }  
     
        
    if( document.querySelector(`.cont-1`).innerHTML === document.querySelector(`.cont-2`).innerHTML && document.querySelector(`.cont-2`).innerHTML === document.querySelector(`.cont-3`).innerHTML   ) {
      if ( ( document.querySelector(`.cont-1`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-1`).innerHTML === "O" )) {
        document.querySelector(".result").innerHTML = "**You Won**" ;
      }
      
    }
       else if (document.querySelector(`.cont-4`).innerHTML === document.querySelector(`.cont-5`).innerHTML && document.querySelector(`.cont-5`).innerHTML === document.querySelector(`.cont-6`).innerHTML ) {
        if ( ( document.querySelector(`.cont-4`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-4`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
       
      }
      else if (document.querySelector(`.cont-7`).innerHTML === document.querySelector(`.cont-8`).innerHTML && document.querySelector(`.cont-8`).innerHTML === document.querySelector(`.cont-9`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-7`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-7`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } else if (document.querySelector(`.cont-1`).innerHTML === document.querySelector(`.cont-5`).innerHTML && document.querySelector(`.cont-5`).innerHTML === document.querySelector(`.cont-9`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-5`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-5`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } else if (document.querySelector(`.cont-3`).innerHTML === document.querySelector(`.cont-5`).innerHTML && document.querySelector(`.cont-5`).innerHTML === document.querySelector(`.cont-7`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-5`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-5`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } else if (document.querySelector(`.cont-1`).innerHTML === document.querySelector(`.cont-4`).innerHTML && document.querySelector(`.cont-4`).innerHTML === document.querySelector(`.cont-7`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-1`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-1`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } else if (document.querySelector(`.cont-2`).innerHTML === document.querySelector(`.cont-5`).innerHTML && document.querySelector(`.cont-5`).innerHTML === document.querySelector(`.cont-8`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-2`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-2`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } else if (document.querySelector(`.cont-3`).innerHTML === document.querySelector(`.cont-6`).innerHTML && document.querySelector(`.cont-6`).innerHTML === document.querySelector(`.cont-9`).innerHTML   ) {
        if ( ( document.querySelector(`.cont-3`).innerHTML ==="X" ) ||  (document.querySelector(`.cont-3`).innerHTML === "O" )) {
            document.querySelector(".result").innerHTML = "**You Won**" ;
          }
        
    } 
})
});
