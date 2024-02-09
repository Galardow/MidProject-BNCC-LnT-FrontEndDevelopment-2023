const information_1 = document.querySelector(".information_1 ")
const information_2 = document.querySelector(".information_2")
const information_3 = document.querySelector(".information_3")

const selengkapnya_1 = document.querySelector(".selengkapnya_1")
const selengkapnya_2 = document.querySelector(".selengkapnya_2")
const selengkapnya_3 = document.querySelector(".selengkapnya_3")



selengkapnya_1.onclick = () => {
    information_1.classList.toggle("active")
}

selengkapnya_2.onclick = () => {
    information_2.classList.toggle("active")
}

selengkapnya_3.onclick = () => {
    information_3.classList.toggle("active")
}