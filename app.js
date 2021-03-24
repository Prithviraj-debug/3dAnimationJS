//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const gamepad = document.querySelector('.gamepad img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    gamepad.style.transform = "translateZ(200px) rotatez(-5deg)";
    purchase.style.transform = "translateZ(80px)";
    description.style.transform = "translateZ(70px)";
});

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    title.style.transform = "translateZ(0px)";
    gamepad.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
});

 /* Function to add class name to hide cursor element */ 
 function GFG_Fun() { 
    div.classList.add("newClass"); 
    down.innerHTML = "Cursor is removed from DIV!";  
} 