const nav = document.querySelector("nav");
window.addEventListener('scroll', ()=> {
    if(window.scrollY>=100) {
        nav.classList.add("nav_black");
    } else {
        nav.classList.remove("nav_black");
    }
})

function abrirModal(id) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <h2>${filmes[id].titulo}</h2>
        <button onclick="fecharModal()" class="exit">X</button>
        <img src="${filmes[id].imgURL}">
        <p>${filmes[id].sinopse}</p>
        <a href="${filmes[id].link}" class="watch" target="_blank"> Assistir </a> 
        `;

    modal.style.display = 'block';
}   

function fecharModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = '';

    modal.style.display = 'none';
}