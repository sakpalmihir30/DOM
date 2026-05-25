const para = document.querySelector('p');
const character = "ABCDEFGHIJKLMnOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText
let iteration = 0

function randomtext() {
    const str = text.split('').map((char, index) => {
        if(index<iteration){
            return char
        }
        return character.split("")[Math.floor(Math.random() * 3)]
    }).join("")

    para.innerText = str

    iteration += 1
}


setInterval(randomtext,30)