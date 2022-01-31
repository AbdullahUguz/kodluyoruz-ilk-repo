
let clock=document.querySelector("#myClock")


let myName=document.querySelector("#myName")
myName.innerHTML="Abdullah UĞUZ"

setInterval(showTime, 1000);
function showTime(){

    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let day = time.getDay()  
    let month = time.getMonth()
    let year = time.getFullYear()
    
    days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];


    let currentTime=`${hour}:${min}:${sec}   __   ${day}/${month}/${year}    __  ${days[day]} `

    clock.innerHTML=currentTime
}

showTime();