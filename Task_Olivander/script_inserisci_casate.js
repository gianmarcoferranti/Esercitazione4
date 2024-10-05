
function aggiungiCasata(){
    let elencoCasate = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];
    
    let varNome = document.getElementById("input-nome").value;
    let varDescrizione = document.getElementById("input-descrizione").value;
    let varLogo = document.getElementById("input-logo").value;

    let varCodice = genera1();
    let varNumero = contaBacchette();

    let cas = {
        codice: varCodice,
        nome: varNome,
        descrizione: varDescrizione,
        logo:varLogo,
        numeroBacchette: varNumero
    }

    elencoCasate.push(cas);
    localStorage.setItem("casate", JSON.stringify(elencoCasate))
    
    location.href = "casate.html"
}

function genera1() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Genera un numero casuale a 6 cifre
    return randomNumber;
}

