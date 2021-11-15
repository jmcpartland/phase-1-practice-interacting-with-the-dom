// The auto counter
let counterClass = document.getElementById('counter');
let counterNum = 0;

let theCounter = setInterval(()=> counterClass.innerText = ++counterNum, 1000);

theCounter;

// The like button
let likeBtn = document.getElementById('heart');

let likeList = document.querySelector('.likes');
let li = document.createElement('li');

let likeNum = 0;

let likeClick = likeBtn.addEventListener('click', () => {
    likeNum +=1;
    li.innerText = `Number: ${counterNum} was clicked ${likeNum} times.`
    likeList.appendChild(li)
    // li.innerText(likeNum);
    // console.log(likeNum)
});

likeClick;


// The minus and plus buttons
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');

minusBtn.addEventListener('click', () => {
    // clearInterval(theCounter);
    counterClass.innerText = --counterNum;
});

plusBtn.addEventListener('click', () => {
    // clearInterval(theCounter);
    counterClass.innerText = ++counterNum;
});

