function stampaTabella(){
    let elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    let contenitore = "";
    for(let [idx, item] of elencoLocale.entries()){
        contenitore += `
            <tr>
                    <td>${idx + 1}</td>
                    <td>${item.codice}</td>
                    <th>${item.nome}</th>
                    <th>${item.mago}</th>
                    <th>${item.materiale}</th>
                    <th>${item.nucleo}</th>
                    <th>${item.lunghezza}</th>
                    <th>${item.resistenza}</th>
                    <th>${item.utilizzo}</th>
                    <th><a href="${item.foto}" target="_blank">Link</a></th>
                    <th>${item.casata}</th>

                <td>
                    <button type="button" class="btn btn-danger" onclick="elimina(${idx})">Elimina</button>
                    <button type="button" class="btn btn-warning" onclick="modifica(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-tabella").innerHTML = contenitore;
}




function elimina(indice){
    let elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    elencoLocale.splice(indice, 1);

    localStorage.setItem("bacchetta", JSON.stringify(elencoLocale))
    stampaTabella();
    contaBacchetteLocal();
}

function modifica(indice){
    $("#modaleModifica").modal('show');
    $("#btn-salva").data('identif', indice);

    let elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    for(let [idx, item] of elencoLocale.entries()){
      
        if(indice == idx){
            
            document.getElementById("input-nome1").value = item.nome;
            document.getElementById("input-mago1").value = item.mago;
            document.getElementById("input-materiale1").value = item.materiale;
            document.getElementById("input-nucleo1").value = item.nucleo;
            document.getElementById("input-lunghezza1").value = item.lunghezza;
            document.getElementById("input-resistenza1").value = item.resistenza;
            document.getElementById("input-utilizzo1").value = item.utilizzo;
            document.getElementById("input-foto1").value = item.foto;
            $("#inputGroupSelect01").val(item.casata);
            console.log(item.casata);
        }
    }
}

function salva(varBottone){
    console.log(varBottone);
    let posizione = $(varBottone).data('identif');
    let varNome = document.getElementById("input-nome1").value;
    let varMago = document.getElementById("input-mago1").value;
    let varMateriale = document.getElementById("input-materiale1").value;
    let varNucleo = document.getElementById("input-nucleo1").value;
    let varLunghezza = document.getElementById("input-lunghezza1").value;
    let varResistenza = document.getElementById("input-resistenza1").value;
    let varUtilizzo = document.getElementById("input-utilizzo1").value;
    let varFoto = document.getElementById("input-foto1").value;
    let varCasata = $("#inputGroupSelect011").val();;

    



    let elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    for(let [idx, item] of elencoLocale.entries()){
        console.log(posizione);
        console.log(idx);


        if(idx == posizione){
            item.nome = varNome;
            item.mago = varMago;
            item.materiale = varMateriale;
            item.nucleo = varNucleo;
            item.lunghezza = varLunghezza;
            item.resistenza = varResistenza;
            item.utilizzo = varUtilizzo;
            item.foto = varFoto;
            item.casata = varCasata;

            localStorage.setItem("bacchetta", JSON.stringify(elencoLocale));
            stampaTabella();
            $("#modaleModifica").modal('hide');
            contaBacchetteLocal();
            return;
        }
    }
}

function apriModale(){
    $("#modaleInserisciBacchetta").modal("show");
}


function contaBacchetteLocal() {

    var elencoLocaleCasate = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];
    var elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    

    
    for (var i = 0; i < elencoLocaleCasate.length; i++) {
        var count = 0;
        for (var j = 0; j < elencoLocale.length; j++) {
            console.log(elencoLocaleCasate[i].nome);
            if (elencoLocale[j].casata === elencoLocaleCasate[i].nome) {
                count++;
            }
        }
        elencoLocaleCasate[i].numeroBacchette = count;
    }
    localStorage.setItem("casate", JSON.stringify(elencoLocaleCasate));

    console.log(elencoLocaleCasate);

    return count;
}
function caricaCasate1() {
    const casate = JSON.parse(localStorage.getItem("casate")) || [];
    const select = document.getElementById('inputGroupSelect011');
   
    casate.forEach(casata => {
      const newOption = document.createElement('option');
      newOption.value = casata.nome;
      newOption.textContent = casata.nome;
      select.appendChild(newOption);
    });
  }
  document.addEventListener('DOMContentLoaded', caricaCasate1);

stampaTabella();

// setInterval(() => {
//     stampaTabella();
// }, 5000);