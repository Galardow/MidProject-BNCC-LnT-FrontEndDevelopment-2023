const button_1 = document.querySelector('.button_1')
const button_2 = document.querySelector('.button_2')
const button_3 = document.querySelector('.button_3')

button_1.onclick = () => {
    email()
}

button_2.onclick = () => {
    instagram()
}

button_3.onclick = () => {
    whatsapp()
}

function whatsapp() {
    window.location.href = "https://wa.me/628117752525"
}
function instagram() {
    window.location.href = "https://instagram.com/bnccmalang"
}
function email() {
    window.location.href = "mailto:bncc.mlg@gmail.com"
}