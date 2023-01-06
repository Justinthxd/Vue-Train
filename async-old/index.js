let count = 10;

const add = document.getElementById('btn2');
const subtract = document.getElementById('btn1');
const counter = document.getElementById('count');

counter.innerText = count;

add.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

subtract.addEventListener('click', () => {
    count--;
    counter.innerText = count;
});