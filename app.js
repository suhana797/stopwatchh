

var min = 0;
var sec = 0;
var msec = 0;
var hour =0;
var minheading =document.getElementById("min"); 
var secheading =document.getElementById("sec");
var msecheading =document.getElementById("msec");
var hourheading=document.getElementById("hour");

var interval;
function timer(){
msec++
msecheading.innerHTML = msec;
if(msec>=100){
sec++
secheading.innerHTML=sec;
msec=0;
}else if(sec>=60){
min++;
minheading.innerHTML=min;
sec=0;

}else if(min>=60){
    hour++;
    hourheading.innerHTML=hour;
}

}
function start(){
    interval = setInterval(timer,10);
    var btn1 = document.getElementById('btn1');
    btn1.disabled = true;



}

function stop(){
    clearInterval(interval)
    var btn2 = document.getElementById('btn2');
    btn2.disabled = true;
}
function reset(){
min= 0;
sec= 0;
msec=0;

minheading.innerHTML=min;
secheading.innerHTML=sec;
msecheading.innerHTML=msec;

stop();
var btn3 = document.getElementById('btn3');
btn3.disabled = true;
    
}

