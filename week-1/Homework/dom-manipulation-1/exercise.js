/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const ps = document.querySelectorAll("p");
console.log("ps",ps);
const div = document.querySelector("div");
console.log("div",div);
const jumbotron = document.querySelector("#jumbotron-text");
console.log("jumbotron",jumbotron);
const primary = document.querySelectorAll(".primary-content p");
console.log("primary",primary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alert = document.querySelector("#alertBtn");
alert.addEventListener("click", (e) => {
    e.preventDefault();
    confirm("Thanks for visiting Bikes for Refugees!");  
    console.log("click alert");  
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const body = document.querySelector("body");
const changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", e => {
    e.preventDefault();
    body.style.background = "#ff000024";
})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addTextBtn = document.querySelector("#addTextBtn");
const mainArticles = document.querySelector("#mainArticles");
const newp = document.createElement("p");
newp.textContent = "This is a new paragraph!!!! ************************************";
addTextBtn.addEventListener("click", e => {
    e.preventDefault();
    mainArticles.appendChild(newp);
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksBtn = document.querySelector("#largerLinksBtn");
const as = document.querySelectorAll("a");
largerLinksBtn.addEventListener("click",e=>{
    as.forEach(element => {
        element.style.fontSize = "x-large";
    });
})
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addTextBtn2 = document.querySelector("#addArticleBtn");
const mainArticles2 = document.querySelector("#mainArticles");
const textBox = document.querySelector(".addArticle");

const newp1 = document.createElement("p");

addTextBtn2.addEventListener("click", e => {
    console.log("textBox",textBox.value);
    e.preventDefault();
    newp1.textContent = textBox.value;
    mainArticles2.appendChild(newp1);
    textBox.value = "";
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const myColors = ["green","yellow","black","white","pink"]
let count = 0;
changeColor.addEventListener("click", e => {
    e.preventDefault();
    body.style.background = myColors[count];

    if (count < 4){
        count ++;
    } else {
        count = 0;
    }
})

