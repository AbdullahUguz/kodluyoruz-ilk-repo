
let clock=document.querySelector("#myClock")


let myName=document.querySelector("#myName")
myName.innerHTML="Abdullah UĞUZ"

setInterval(showTime, 1000);
function showTime(){

    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let day = time.getUTCDay()  
    let month = time.getMonth()+1
    let year = time.getFullYear()
    
    days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

    sec=sec<10 ? "0"+sec : sec
    min=min<10 ? "0"+min : min
    hour=hour<10 ? "0"+hour : hour
    day=day<10 ? "0"+day : day
    month=month<10 ? "0"+month : month
    

    let currentTime=`${hour}:${min}:${sec}   __    ${day}/ ${month} / ${year}  __  ${days[day<10 ? day.slice(1):day]} `

    clock.innerHTML=currentTime
}

showTime();