function aggiungi(){
    let elencoLocaleBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    
    let varNome = document.getElementById("input-nome").value;
    let varMago = document.getElementById("input-mago").value;
    let varMateriale = document.getElementById("input-materiale").value;
    let varNucleo = document.getElementById("input-nucleo").value;
    let varLunghezza = document.getElementById("input-lunghezza").value;
    let varResistenza = document.getElementById("input-resistenza").value;
    let varUtilizzo = document.getElementById("input-utilizzo").value;
    let varFoto = document.getElementById("input-foto").value;
    let varCasata = $("#inputGroupSelect01").val();
    let varCodice = genera();
    if(varCasata =="Scegli una casata"){
       varCasata = "N.D.";
    }

    let bac = {
        codice: varCodice,
        nome: varNome,
        mago: varMago,
        materiale: varMateriale,
        nucleo: varNucleo,
        lunghezza: varLunghezza,
        resistenza:varResistenza,
        utilizzo: varUtilizzo,
        foto: varFoto,
        casata: varCasata,
    }

    elencoLocaleBacchette.push(bac);
    localStorage.setItem("bacchetta", JSON.stringify(elencoLocaleBacchette))
    contaBacchetteLocal1();
    location.href = "visualizza.html"
}

function caricaCasate() {
    const casate = JSON.parse(localStorage.getItem("casate")) || [];
    const select = document.getElementById('inputGroupSelect01');
   
    casate.forEach(casata => {
      const newOption = document.createElement('option');
      newOption.value = casata.nome;
      newOption.textContent = casata.nome;
      select.appendChild(newOption);
    });
  }
  document.addEventListener('DOMContentLoaded', caricaCasate);
 
  function genera() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Genera un numero casuale a 6 cifre
    return randomNumber;
}

function contaBacchetteLocal1() {

    var elencoLocaleCasate1 = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];
    var elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    

    
    for (var i = 0; i < elencoLocaleCasate1.length; i++) {
        var count = 0;
        for (var j = 0; j < elencoLocale.length; j++) {
            console.log(elencoLocaleCasate1[i].nome);
            if (elencoLocale[j].casata === elencoLocaleCasate1[i].nome) {
                count++;
            }
        }
        elencoLocaleCasate1[i].numeroBacchette = count;
    }
    localStorage.setItem("casate", JSON.stringify(elencoLocaleCasate1));

    console.log(elencoLocaleCasate1);

    return count;
}
