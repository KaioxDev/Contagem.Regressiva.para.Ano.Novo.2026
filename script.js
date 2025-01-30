
const dayEl = document.getElementById("Dias");
const hourEl = document.getElementById("Horas");
const minuteEl=document.getElementById("Minutos");
const secondEl = document.getElementById("Segundos");

const newYearTime = new Date("Jan 1, 2026 00:00:00").getTime();

updateDate();

function updateDate(){
    const now = new Date().getTime();
    const gap = newYearTime-now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day) / hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText=d;
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;

    setTimeout(updateDate,1000);
}