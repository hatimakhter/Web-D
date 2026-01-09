 // place numbers 

function createNumbers(){
  const clock = document.getElementById("clock");
  const centerX = 200, centerY = 200;
  const radius = 170;

  for(let i = 1; i <= 12; i++){
    const number = document.createElement("div");
    number.className = "number";
    number.innerText = i;
    
    // angle for each number
    const angle = (i * 30) * (Math.PI / 180);
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);

    // place number
    number.style.left = `${x}px`;
    number.style.top = `${y}px`;

    clock.appendChild(number);

  }
}

// update clock
function updateClock(){
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // angles sec, min, hours
  const secondAngle = seconds * 6 ; 
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  // rotate hands
  document.getElementById("sec").style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
  document.getElementById("min").style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
}

createNumbers();
setInterval(updateClock, 1000);
updateClock();  
