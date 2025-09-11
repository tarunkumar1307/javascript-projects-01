const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());
let colorInterval;

document.getElementById('start').addEventListener('click', () => {
    if(!colorInterval){
        colorInterval = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(colorInterval);
    colorInterval = null;
})


/*
1. colorInterval = null
    Purpose: This resets the variable after stopping the interval.
    Why? When you call clearInterval(colorInterval), the interval stops, but the variable still holds the interval ID. Setting it to null signals that no interval is running.
2. if (!colorInterval)
    Purpose: Prevents multiple intervals from being created.
    Why? If you click "Start" repeatedly without this check, multiple intervals would run, causing the background to change color rapidly and unpredictably. The condition ensures only one interval is active at a time.
Example Analogy
Think of colorInterval as a ticket for a train.
-> When you start the train, you get a ticket (colorInterval is set).
-> You shouldn't get a new ticket if you already have one (if (!colorInterval)).
-> When you stop the train, you throw away the ticket (colorInterval = null).
*/