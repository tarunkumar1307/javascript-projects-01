const clock = document.querySelector('#clock')

const updateTime = () => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
updateTime();
setInterval(updateTime, 1000);


/*
By calling updateTime() once before setInterval, the clock displays the current time immediately when the project loads. 
If we only use setInterval, there would be a delay of 1 second before the time appears for the first time.
*/

// setInterval(() => {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);