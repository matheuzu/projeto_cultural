
let idx = 0;

function carrousel(direction) {
    const imgs = document.getElementById(`carrossel`)
    const img = imgs.querySelectorAll(".container img")
        
    if(direction == "direita") {
        idx--;
    } else {
        idx++;
    }
    
    if(idx <= -img.length + 1) { idx ++; }
    if(idx >= 1) { idx --; }

    imgs.style.transform = `translateX(${idx * 200}px)`

}