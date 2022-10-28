
      
      
// TODO: Declare any global variables we need
let headsFlipTally = 0
let headsPercentage = '0%'
let tailsFlipTally = 0
let tailsPercentage = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {
 /*this is added to ensure that HTML and scripts that make up the page have loaded, 
    but not necessarily the images or CSS */

   document.querySelector('#flip').addEventListener('click', function() {
       if (Math.random() > .5) {
            //this (>.5) means that we have flipped heads. MB intetprets this as being since a coin flip only has 2 possibilities. 
           headsFlipTally++
           totalFlips++
           headsPercentage = Math.round(headsFlipTally/totalFlips * 100)
           tailsPercentage  = Math.round(tailsFlipTally/totalFlips * 100)
           document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
           document.querySelector('#message').innerHTML = "!You've Flipped heads!"
           document.querySelector('#heads').innerHTML = headsFlipTally
           document.querySelector('#heads-percent').innerHTML = headsPercentage + '%'
           document.querySelector('#tails').innerHTML = tailsFlipTally
           document.querySelector('#tails-percent').innerHTML = tailsPercentage  + '%'
           
       } else {
           //this (<.5) means that we have selected tails. MB interprets this as being since a coin flip only has 2 possibilities. 
           tailsFlipTally++
           totalFlips++
           headsPercentage = Math.round(headsFlipTally/totalFlips * 100)
           tailsPercentage  = Math.round(tailsFlipTally/totalFlips * 100)
           document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg'
           document.querySelector('#message').innerHTML = "!You've Flipped Tails!"
           document.querySelector('#heads').innerHTML = headsFlipTally
           document.querySelector('#heads-percent').innerHTML = headsPercentage + '%'
           document.querySelector('#tails').innerHTML = tailsFlipTally
           document.querySelector('#tails-percent').innerHTML = tailsPercentage  + '%'
       }
   

   })
   
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

   document.querySelector('#clear').addEventListener('click', function() {
    headsFlipTally = 0
    headsPercentage = 0
    tailsFlipTally = 0
    tailsPercentage  = 0
       totalFlips = 0
       document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
       document.querySelector('#message').innerHTML = "Let's Get Flipping!"
       document.querySelector('#heads').innerHTML = headsFlipTally
       document.querySelector('#heads-percent').innerHTML = headsPercentage + '%'
       document.querySelector('#tails').innerHTML = tailsFlipTally
       document.querySelector('#tails-percent').innerHTML = tailsPercentage  + '%'

   })
       

})
