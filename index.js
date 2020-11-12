const anaScnd = document.querySelector("#Data-Second");
const anaMnt = document.querySelector("#Data-Minute");
const anaHr = document.querySelector("#Data-HOUR");

function setClock(){
    const currentDate = new Date();

    const scnd = currentDate.getSeconds();
    const mnt = currentDate.getMinutes();
    const hr = currentDate.getHours();

    const scndRatio = scnd/60;
    const mntRatio = (scndRatio+mnt)/60;
    const hrRatio = (mntRatio+hr)/12;

    setRatio(anaScnd,scndRatio);
    setRatio(anaMnt,mntRatio);
    setRatio(anaHr,hrRatio);

}

function setRatio(element,rRatio){
    element.style.setProperty("--rotation",rRatio*360);
}

setInterval(setClock, 1000);
setClock();