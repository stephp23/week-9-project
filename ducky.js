window.onload = function () {
  const body = document.body;

  console.log(body);

  function createDuck() {
      
    let elementDuck = document.createElement("div");
    elementDuck.classList.add("duck");
    document.body.appendChild(elementDuck);

    let duckWingsFlapping = setInterval(function wingFlapping() {
      elementDuck.classList.toggle("flap");
    }, 250);

    function moveDuck() {
      elementDuck.style.top = Math.random() * window.innerHeight + "px";
      elementDuck.style.left = Math.random() * window.innerWidth + "px";
    }

    function shotDuck() {
      elementDuck.classList.add("shot");
      setTimeout(function () {
        elementDuck.remove(); //removing element = "duck has been shot"
        checkForWinner()
      }, 500)
    }
    elementDuck.addEventListener('click', shotDuck);
  }
      
    moveDuck(); 
    let moveDuckDiffLoc = setInterval(moveDuck, 700)
    return elementDuck;
  };
      
  for (let i = 0; i < 5; i++) {
    createDuck();
  }


  function checkForWinner() {
    if (document.getElementsByClassName("duck").length === 0) {
      alert("You win the duckk hunt!");
    }
  }
}; //don't know why this bracket is giving me an error


  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  // let elementDuck = document.createElement("div");
  // elementDuck.classList.add("duck");
  // document.body.append(duck);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  // let duckWingsFlapping = setInterval(function wingFlappin() {
  //   elementDuck.classList.toggle("flap");
  // }, 250);
 

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  //   function moveDuck() {
  //     elementDuck.style.top = Math.random() * window.innerHeight + "px";
  //     elementDuck.style.left = Math.random() * window.innerWidth + "px";
  // }


  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // let moveDuckDiffLoc = setInterval(moveDuck, 1000);






  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

   //    using our fancy new createDuck() function

  // function createDuck() { 
     
  //   let elementDuck = document.createElement("div");
  //   elementDuck.classList.add("duck");    
  //   document.body.appendChild(duckElement);

  //   let duckWingsFlapping = setInterval(function wingFlappin() {
  //     elementDuck.classList.toggle("flap");
  //   }, 250);

  //   function moveDuck() {
  //     elementDuck.style.top = Math.random() * window.innerHeight + "px";
  //     elementDuck.style.left = Math.random() * window.innerWidth + "px";
  //   }

  //   //#8
  //   function randomPosition() {
  //     let randomDuckHeight = Math.floor(Math.random() * window.innerHeight);
  //     let randomDuckWidth = Math.floor(Math.random() * window.innerWidth);

  //     duck.style.top = `${randomDuckHeight}px`;
  //     duck.style.left = `${randomDuckWidth}px`;
     
  //   }

    //#11


  
  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!


  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain
    
  //d checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WINnpm !"
    
    
  // function shotDuck() { 
  //     elementDuck.classList.add("shot");
  //     setTimeout(function () { 
  //       elementDuck.remove(); //removing element
  //       checkForWinner()
  //     }, 300)
  //   }
  //   elementDuck.addEventListener('click', shotDuck);
  // }
  
  // moveDuck();
  // createDuck();

  // function checkForWinner() {
  //   if (document.getElementsByClassName("duck").length === 0) {
  //     alert("You have shot the most ducks. Congrats!");
  //   }
  // }
  

  // 13. Create a new function name
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill