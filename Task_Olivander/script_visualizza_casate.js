function stampaCasate(){
    let elencoCasate = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];

    let contenitore = "";
    for(let [idx, item] of elencoCasate.entries()){
        let numerone = contaBacchette(item.nome);
        contenitore += `
            <tr>
                    <td>${idx + 1}</td>
                    <th>${item.nome}</th>
                    <th>${item.descrizione}</th>
                    <th><a href="${item.logo}" target="_blank">Link</a></th>
                    <th>${numerone}</th>

                <td>
                    <button type="button" class="btn btn-danger" onclick="elimina(${idx})">Elimina</button>
                    <button type="button" class="btn btn-warning" onclick="modificaCasata(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-tabella-casate").innerHTML = contenitore;
}

function apriModaleCasateInserisci(){
    $("#modaleInserisciCasata").modal("show");

}



function elimina(indice){
    let elencoLocaleCas1 = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];

    elencoLocaleCas1.splice(indice, 1);

    localStorage.setItem("casate", JSON.stringify(elencoLocaleCas1))
    stampaCasate();
}

function modificaCasata(indice){
    $("#modaleModificaCasata").modal('show');
    $("#btn-salva").data('identif', indice);

    let elencoLocaleCas2 = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];

    for(let [idx, item] of elencoLocaleCas2.entries()){
      
        if(indice == idx){
            
            document.getElementById("input-nome2").value = item.nome;
            document.getElementById("input-descrizione2").value = item.descrizione;
            document.getElementById("input-logo2").value = item.logo;   
        }
    }
}

function salvaCasata(varBottone){
    console.log(varBottone);
    let posizione = $(varBottone).data('identif');
    let varNome = document.getElementById("input-nome2").value;
    let varDescrizione = document.getElementById("input-descrizione2").value;
    let varLogo = document.getElementById("input-logo2").value;

 

    let elencoLocaleCas3 = localStorage.getItem("casate") != null 
                            ? JSON.parse(localStorage.getItem("casate")) : [];

    for(let [idx, item] of elencoLocaleCas3.entries()){

        if(idx == posizione){
            item.nome = varNome;
            item.descrizione = varDescrizione;
            item.logo = varLogo;
  
            localStorage.setItem("casate", JSON.stringify(elencoLocaleCas3));
            stampaCasate();
            $("#modaleModificaCasata").modal('hide');
            return;
        }
    }
}
function contaBacchette(casata) {
    var elencoLocale = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    
    var count = 0;
    for (var i = 0; i < elencoLocale.length; i++) {
        if (elencoLocale[i].casata === casata) {
            count++;
        }
    }
    
    return count;
}
stampaCasate();