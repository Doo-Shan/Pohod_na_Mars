var glavna = document.querySelector("#glavna");

var slika = document.querySelectorAll(".male div img");
for (i = 0; i < slika.length; i++){
   slika[i].addEventListener("mouseover", uvecanje);
}
function uvecanje(e) {
    glavna.src = e.target.src;
}
