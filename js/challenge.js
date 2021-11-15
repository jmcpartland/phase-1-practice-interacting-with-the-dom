let counterClass = document.getElementById('counter');
let counterNum = 1; // parseInt(counterClass.innerText, 10);

let timerNum = setInterval(()=> counterClass.innerText = counterNum++, 1000);
timerNum;

let minusBtn = document.getElementById('minus');

minusBtn.addEventListener('click', () => {
    // clearInterval(timerNum);
    counterClass.innerText = counterNum--;
});

let plusBtn = document.getElementById('plus');

plusBtn.addEventListener('click', () => {
    // clearInterval(timerNum);
    counterClass.innerText = counterNum++;
});

