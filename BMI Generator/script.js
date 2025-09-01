const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    
    if(height == '' && weight == ''){
        result.textContent = `Please enter valid Height and Weight.`
    }
    else if(height == '' || height < 0 || isNaN(height)){
        result.textContent = `Please enter a valid Height ${height}.`
    }
    else if(weight=='' || weight < 0 || isNaN(weight)){
        result.textContent = `Please enter a valid Weight ${weight}.`
    }
    else{
        const ans = (weight / ((height*height)/10000)).toFixed(2);
        result.textContent = `BMI = ${ans}`
    }
})