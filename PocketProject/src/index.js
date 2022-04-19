import warmUp, { htmlGenerator } from "./warmup";
import Clock from "./clock.js";
import { dogLinkCreator, dogs } from "./drop_down.js";

const partyHeader = document.getElementById('clock');
let coolClock = new Clock;
setInterval( () => {
    partyHeader.innerHTML = coolClock.printTime();
    
},1000)

let dogList = dogLinkCreator(dogs);
for (let i = 0; i < dogList.length; i++) {
    
    document.getElementsByClassName("drop-down-dog-list")[0].appendChild(dogList[i]);
    
}
