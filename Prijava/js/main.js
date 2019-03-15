document.getElementById("forma").addEventListener("submit", unesiKandidata);

function unesiKandidata(e) {

    var ime = document.getElementById("ime").value;
    var email = document.getElementById("email").value;
    var rodj = document.getElementById("rodj").value;
    var poruka = document.getElementById("poruka").value;

    if (!validacija(ime, email,rodj)) {
        return false;
    }

    var kandidat = {
        ime: ime,
        email: email,
        rodj: rodj,
        poruka: poruka
    }


    if (localStorage.getItem("kandidati") === null) {
        var kandidati = [];
        kandidati.push(kandidat);
        localStorage.setItem("kandidati", JSON.stringify(kandidati));
    } else {
        var kandidati = JSON.parse(localStorage.getItem("kandidati"));
        kandidati.push(kandidat);
        localStorage.setItem("kandidati", JSON.stringify(kandidati));
    }
    e.preventDefault();
}



function dodajKandidata() {
    var kandidati = JSON.parse(localStorage.getItem("kandidati"));

    var kandidatiLista = document.getElementById("kandidatiLista");

    kandidatiLista.innerHTML = "";
    for (var i = 0; i < kandidati.length; i++) {
        var ime = kandidati[i].ime;
        var email = kandidati[i].email;
        var rodj = kandidati[i].rodj;
        var poruka = kandidati[i].poruka;
        kandidatiLista.innerHTML += "<div><h4>" + ime + "</h4></div>";
    }
}

// validacija forme
function validacija(ime, email, rodj) {

    if (ime.trim().length == 0 || ime.indexOf(" ") == -1) {
        alert("Molim Vas da unesete ispravno ime i prezime");
        return false;
    }
    for (i = 0; i < ime.length; i++) {
        if (ime[i] != " ") {
            if (ime[i].toUpperCase() == ime[i].toLowerCase()) {
                alert("Uneli ste nedozvoljene karaktere");
                return false;
            }
        }
    }

    var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regex = new RegExp(expression);

    if (!email.match(regex)) {
        alert('Molim Vas da unesete ispravan email');
        return false;
    }

    var tekGodina = new Date().getFullYear();
    if (rodj > 1900 && rodj <= tekGodina) {
        return true;
    }
    alert("Morate uneti ispravno godište!");
    return false;
}