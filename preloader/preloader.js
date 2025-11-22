const circle = document.querySelector('.circle')
const dots = circle.getAttribute('dots')
var points = "";
var rotate = 360/dots;

for (let i = 0; i < dots; i++){
    points+=`<div class="point" style="--i: ${i}; --rot: ${rotate * i}deg"></div>`
}
circle.innerHTML = points;