

 let hour = document.getElementById('hrs')
 let Min = document.getElementById('min')
 let Sec = document.getElementById('sec')
 let Am_Pm = document.getElementById('ampm')




 let updateClock =()=>{
    let date = new Date();
    let hours = date.getHours()
    let mints = date.getMinutes()
    let sec = date.getSeconds()
    let am_pm = "AM"



    if (hours > 12){
        hours  = hours-12;
        am_pm = "PM";
    }
    hours = hours < 10 ? "0"+ hours : hours;
    mints = mints < 10 ? "0"+ mints: mints;
    sec = sec < 10 ? "0"+ sec : sec;


    hour.innerText = hours
    Min.innerText = mints
    Sec.innerText = sec
    Am_Pm.innerText = am_pm

    setTimeout(function(){
        updateClock();
    },1000)

}

 updateClock();