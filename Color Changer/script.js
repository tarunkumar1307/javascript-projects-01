const body = document.querySelector("body");
const colors = document.querySelectorAll("span");
const colorDisplay = document.querySelector("#color-name");

colors.forEach(function(color){
    color.addEventListener('click', function(e){ // e - event
        body.style.backgroundColor = e.target.id
        colorDisplay.textContent = `${e.target.id}`
        console.log(colorDisplay.textContent)
    })
})

// addEventListener( 'event', callback-function )