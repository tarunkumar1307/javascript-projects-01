const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    
    if(height == '' || height < 0 || isNaN(height)){
        result.textContent = `Please enter a valid Height, ${height}.`
    }
    else if(weight=='' || weight < 0 || isNaN(weight)){
        result.textContent = `Please enter a valid Weight, ${weight}.`
    }
    else{
        const ans = (weight / ((height*height)/10000)).toFixed(2);
        if(ans < 18.6){
            result.outerHTML = `BMI = ${ans} <br> Underweight</p>`;
            result.style.color = "rgb(30, 174, 30)";
        }
        else if(ans >= 18.6 && ans < 24.9){
            result.outerHTML = `BMI = ${ans} <br> Normal weight</p>`;
            result.style.color = "rgb(30, 174, 30)";
        }
        else{
            result.outerHTML = `BMI = ${ans} <br> Overweight</p>`;
            result.style.color = "red";
        }
    }
})