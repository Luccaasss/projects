const title = document.querySelector('title');
const h6 = document.querySelector('h6');
let myInterval;
let timevalue = 1;


const startbutton = document.querySelector('.startbutton').addEventListener('click', () => {
    console.log('start');
    startTimer()
})

const stopbutton = document.querySelector('.stopbutton').addEventListener('click', () => {
    clearTimeout(myInterval)
})

const setzero = document.querySelector('.setzero').addEventListener('click', () => {
    clearTimeout(myInterval)
    timevalue = 0;
    h6.innerText = timevalue;
    title.innerText = timevalue;
})


function startTimer() {
    myInterval = setInterval(() => {
        console.log(timevalue)
        h6.innerText = timevalue;
        title.innerText = timevalue;
        timevalue++;
    }, 1000)
}
