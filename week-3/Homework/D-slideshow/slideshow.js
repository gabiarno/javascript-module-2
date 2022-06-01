// Write your code here
let images = [
    "https://images.unsplash.com/photo-1649264889763-5cba7bca8335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1639921006156-66822d71c42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1649389216842-1dcfafe130a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1649266627098-cc1bb09778b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1649482565637-68ce26ce5ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
]

function showImage(id) {
    let myImageE = document.querySelector(".myimage");
    myImageE.src = images[id];
}

let showImageCount = 1;

showImage(showImageCount);

function showImageForward(){
    if (showImageCount + 1 < images.length) {
        showImageCount ++;
    } else {
        showImageCount = 0;
    }
    showImage(showImageCount);
}

function showImageBackward(){
    
    if (showImageCount - 1 > 0) {
        showImageCount--;
    } else {
        showImageCount = images.length -1;
    }
    showImage(showImageCount);
}

document.querySelector("#fwd").addEventListener("click",event => {
    event.preventDefault();
    showImageForward()
})

document.querySelector("#back").addEventListener("click",event => {
    event.preventDefault();
    showImageBackward()
})


function autoForward(){
    const interval = window.setInterval(showImageForward, 1000)
    return interval
}

function autoBackward(){
    const interval = window.setInterval(showImageBackward, 1000)
    return interval
}

let autoForwardInterval;
let autoBackwardInterval;

function stopIntervals(){
    clearInterval(autoForwardInterval)
    clearInterval(autoBackwardInterval)
}

document.querySelector("#autoForward").addEventListener("click", event => {
    event.preventDefault()
    autoForwardInterval = autoForward()
})

document.querySelector("#autoBackward").addEventListener("click", event => {
    event.preventDefault()
    autoForwardInterval = autoBackward()
})

document.querySelector("#stop").addEventListener("click", event => {
    event.preventDefault()
    stopIntervals()
})
