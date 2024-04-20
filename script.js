
function calculate(){
    const inches=document.querySelector(".inch-input").value
    let meters= (parseInt(inches)/39.37).toFixed(2)
    
    document.querySelector('.output-area').textContent=`${inches} inches = ${meters} meters`
}

document.querySelector('button').onclick = calculate