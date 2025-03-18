// Add button with a function when clicked will: Highlight ingredients one item apart.
function highlightIngredients() {
    let ingredients = document.querySelectorAll('#recipe-ingredients li');
    for (let i = 0; i < ingredients.length; i++) {
        if (i % 2 !== 0) {
            ingredients[i].classList.toggle('highlight');
        }
    }
}

//Add button with a function when clicked will: Check all Instructions after 3 seconds interval.
function checkInstructions() {
    const instructionsList = document.getElementById('recipe-instructions');
    const instructions = instructionsList.getElementsByTagName('li');
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < instructions.length) {
        instructions[index].classList.add('is-done'); 
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 3000); 
  }

//Add button with a function when clicked will: Reset all checked Instructions.
function resetAllCheckedInstructions(){
        let instructions = document.querySelectorAll('#recipe-instructions li');
        instructions.forEach(function(instruction) {
            instruction.classList.remove('active'); 
        });
    }

//Add animation when clicking Ingredients Header. Can use animate.css.
//Add animation when clicking Instructions Header. Can use animate.css.

function addAnimation(element, animationClass) {
    element.classList.add('animate__animated', animationClass);

    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animationClass);
    });
}

const element = document.querySelectorAll('h2')[0];
element.addEventListener('click', () => {
    addAnimation(element, 'animate__flash');
});

const element2 = document.querySelectorAll('h2')[1];
element2.addEventListener('click', () => {
    addAnimation(element2, 'animate__headShake');
});

// Add animation to the image when clicked
const image = document.getElementById('cake');
image.addEventListener('click', () => {
    addAnimation(image, 'animate__pulse');
});

