const myImage = document.getElementById('myImage');
const mytitle = document.getElementById('myTitle');


let paintings = [
"img/painting0.jpg", 
"img/painting1.jpg", 
"img/painting2.jpg",
"img/painting3.jpg", 
"img/painting4.jpg",
"img/painting5.jpg"
];

let titles = [
    "De schiledrijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de Provence"
    
];

function changeImage(index){
    mytitle.innerHTML = titles[index];
    myImage.src = paintings[index];
}
