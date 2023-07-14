  let bmycar = document.getElementById("dmycar");
    let cPosition = parseInt(window.getComputedStyle (bmycar).getPropertyValue("left")); 
    
     let nPosition = '';
     
    function moveCar(identify){
        if (identify === 'left')    {
             
        nPosition = cPosition - 20;
        cPosition = nPosition;
        if(nPosition>=10)
        {
        bmycar.style.left= nPosition +'px';
        }    }
        
        else if (identify==='right'){
        nPosition = cPosition + 20;
        cPosition = nPosition;
         if (cPosition<=310){
        bmycar.style.left= nPosition +'px';
             
         } }
    }
 
    
    
    
    
    
    
    
    
    
let y = 0;
let x = 10;
let p = 1;

let isr;
let ism;
let isy;
let ism2;
let isb;
let ism3;
let isw;
let ism4;

let audioPlayed = false;

let background = document.getElementById('bg-i');
let redcar = document.getElementById('redcar');
let yellowcar = document.getElementById('yellowcar');
let blackcar = document.getElementById('blackcar');
let whitecar = document.getElementById('whitecar');

function score() {
  if (x === 0) {
    return; // Stop score counting when x is 0
  }

  y = y + 1;
  document.getElementById('score').textContent = 'score: ' + y;
}

setInterval(score, 100);

function crushredcar() {
  let rrect = redcar.getBoundingClientRect();

  if (rrect.top > 400 && rrect.top < 600) {
    isr = 'yesr';
  } else {
    isr = 'nor';
  }

  let myrect = bmycar.getBoundingClientRect();
  if (myrect.x >= 230 && myrect.x <= 310) {
    ism = 'yesm';
  } else {
    ism = 'nom';
  }

  if (ism === 'yesm' && isr === 'yesr' && x > 0) {
    x = x - 1;
    playlAudio();
  }

  if (x > 0) {
    document.getElementById('life').textContent = 'life :' + x;
  } else if (x === 0 && !audioPlayed) {
    playoAudio();
    audioPlayed = true;
    whitecar.style.animationPlayState = 'paused';
    redcar.style.animationPlayState = 'paused';
    yellowcar.style.animationPlayState = 'paused';
    blackcar.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    showButton();
  }

  document.getElementById('life').textContent = '❤ :' + x;
}

setInterval(crushredcar, 500);

function crushyellowcar() {
  let yrect = yellowcar.getBoundingClientRect();

  if (yrect.top > 390 && yrect.top < 598) {
    isy = 'yesy';
  } else {
    isy = 'noy';
  }

  let myrect = bmycar.getBoundingClientRect();

  if (myrect.x >= 170 && myrect.x <= 250) {
    ism2 = 'yesm';
  } else {
    ism2 = 'nom';
  }

  if (ism2 === 'yesm' && isy === 'yesy' && x > 0) {
    x = x - 1;
    playlAudio();
  }

  if (x > 0) {
    document.getElementById('life').textContent = 'life :' + x;
  } else if (x === 0 && !audioPlayed) {
    playoAudio();
    audioPlayed = true;
    whitecar.style.animationPlayState = 'paused';
    redcar.style.animationPlayState = 'paused';
    yellowcar.style.animationPlayState = 'paused';
    blackcar.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    showButton();
  }

  document.getElementById('life').textContent = '❤ :' + x;
}

setInterval(crushyellowcar, 500);

function crushblackcar() {
  let brect = blackcar.getBoundingClientRect();

  if (brect.top > 398 && brect.top < 590) {
    isb = 'yesb';
  } else {
    isb = 'nob';
  }

  let myrect = bmycar.getBoundingClientRect();

  if (myrect.width <= 140 && myrect.width >= 60) {
    ism3 = 'yesm';
  } else {
    ism3 = 'nom';
  }

  if (ism3 === 'yesm' && isb === 'yesb' && x > 0) {
    x = x - 1;
    playlAudio();
  }

  if (x > 0) {
    document.getElementById('life').textContent = 'life :' + x;
  } else if (x === 0 && !audioPlayed) {
    playoAudio();
    audioPlayed = true;
    whitecar.style.animationPlayState = 'paused';
    redcar.style.animationPlayState = 'paused';
    yellowcar.style.animationPlayState = 'paused';
    blackcar.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    showButton();
  }

  document.getElementById('life').textContent = '❤ :' + x;
}

setInterval(crushblackcar, 500);

function crushwhitecar() {
  let wrect = whitecar.getBoundingClientRect();

  if (wrect.top > 400 && wrect.top < 610) {
    isw = 'yesw';
  } else {
    isw = 'now';
  }

  let myrect = bmycar.getBoundingClientRect();

  if (myrect.width <= 200 && myrect.width >= 140) {
    ism4 = 'yesm';
  } else {
    ism4 = 'nom';
  }

  if (ism4 === 'yesm' && isw === 'yesw' && x > 0) {
    x = x - 1;
    playlAudio();
  }

  if (x > 0) {
    document.getElementById('life').textContent = 'life :' + x;
  } else if (x === 0 && !audioPlayed) {
    playoAudio();
    audioPlayed = true;
    whitecar.style.animationPlayState = 'paused';
    redcar.style.animationPlayState = 'paused';
    yellowcar.style.animationPlayState = 'paused';
    blackcar.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    showButton();
  }

  document.getElementById('life').textContent = '❤ :' + x;
}

setInterval(crushwhitecar, 500);

function playlAudio() {
  // Play desired audio for successful events
  let audio = new Audio('life.wav');
  audio.play().catch((error) => {
    console.error('Failed to play audio:', error);
  });
}

function playoAudio() {
  // Play "game over" audio
  let audio = new Audio('gameOver.wav');
  audio.play().catch((error) => {
    console.error('Failed to play audio:', error);
  });
}

function showButton() {
  let buttonContainer = document.getElementById('button-container');
  if (!buttonContainer) {
    console.error("Element with ID 'button-container' not found.");
    return;
  }
  let button = document.createElement('button');
  button.textContent = '🔁';
  button.addEventListener('click', openLocalPage);
  buttonContainer.appendChild(button);
}


function openLocalPage() {
  window.open('prac.html', '_blank');
}
