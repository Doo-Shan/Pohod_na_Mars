var glavna = document.querySelector("#glavna");
console.log(glavna);

var slika = document.querySelectorAll(".male div img");
console.log(slika);

for (i = 0; i < slika.length; i++){
   slika[i].addEventListener("mouseover", uvecanje);
}
function uvecanje(e) {
    console.log(e.target);   
    glavna.src = e.target.src;
}
