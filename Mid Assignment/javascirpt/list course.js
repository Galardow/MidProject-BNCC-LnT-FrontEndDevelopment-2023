const more_info_front = document.querySelector('.more_info_front-end')
const more_info_ui = document.querySelector('.more_info_ui-ux')
const more_info_back = document.querySelector('.more_info_back-end')

const front_card = document.querySelector('.front-end_card')
const ui_card = document.querySelector('.ui-ux_card')
const back_card = document.querySelector('.back-end_card')

more_info_front.onclick = () => {
    front_card.classList.toggle('active')
}

more_info_ui.onclick = () => {
    ui_card.classList.toggle('active')
}

more_info_back.onclick = () => {
    back_card.classList.toggle('active')
}

document.addEventListener('click', function(event) {
    if(!more_info_front.contains(event.target) && !front_card.contains(event.target)) {
        front_card.classList.remove('active')
    }
})


document.addEventListener('click', function(event) {
    if(!more_info_ui.contains(event.target) && !ui_card.contains(event.target)) {
        ui_card.classList.remove('active')
    }
})


document.addEventListener('click', function(event) {
    if(!more_info_back.contains(event.target) && !back_card.contains(event.target)) {
        back_card.classList.remove('active')
    }
})