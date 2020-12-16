const buttonsearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// adicionar hide
buttonsearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})
// fechar o hide quando nao pesquisar
close.addEventListener("click", () => {
    modal.classList.add("hide")
}) 