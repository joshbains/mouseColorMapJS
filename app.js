
const body = document.querySelector("body");

body.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;

    let r = Math.round(x * 255 / window.innerWidth);
    let b = Math.round(y * 255 / window.innerHeight);
    
    let color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);
})
