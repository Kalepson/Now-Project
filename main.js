const square = document.querySelector('.square');
square.addEventListener('click', () => alert('Super, click is working!'));

const scuze = document.querySelector(".scuze");
const rezu = document.querySelector(".rezultat")
scuze.addEventListener("click" ,() =>{
    rezu.textContent = "Nu am incercat sa vad ce se intimpla cind stergi branch parca totul bine :)"
})
