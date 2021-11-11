document.querySelectorAll('.btn').forEach(
    (item) => {
        item.addEventListener('click', () => {
            alert('Olá seja bem vimdo ao curso de JS')
                })
            }
        )
//Menu Resposivo
let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})