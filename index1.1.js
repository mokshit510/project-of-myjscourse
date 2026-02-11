const incrementBtn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')

let count = 0 
incrementBtn.addEventListener('click',() =>{
    count++
    document.getElementById("count-el").innerText = count
}) 
saveBtn.addEventListener('click',() => {
    document.getElementById("save-el").innerText += (count+" - ")
    count=0
    document.getElementById("count-el").innerText = count
}) 