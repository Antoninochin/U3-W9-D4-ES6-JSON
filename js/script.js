"use strict";
// let urlapi = "http://etcect"
// let pr = fetch(urlapi).then(response => response.json())
// pr.then(json => stampaHtml(json)) per stamparlo in html
class Abbigliamenti {
    constructor(id, codprod, collezione, modello, quantità, disponibile) {
        this.count = 0;
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.modello = modello;
        this.quantità = quantità;
        this.disponibile = disponibile;
    }
}
class Capo extends Abbigliamenti {
    constructor(id, codprod, collezione, modello, quantità, disponibile, capo, color, przIvaEscl, przIvaIncl, saldo) {
        super(id, codprod, collezione, modello, quantità, disponibile);
        this.capo = capo;
        this.color = color;
        this.przIvaEscl = przIvaEscl;
        this.przIvaIncl = przIvaIncl;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.przIvaIncl * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.przIvaIncl - this.getSaldoCapo();
    }
}
let abb = [
    {
        "id": 1,
        "codprod": 2121,
        "collezione": "primavera",
        "capo": "cardigan",
        "modello": 1231,
        "quantita": 5,
        "colore": "nero",
        "prezzoivaesclusa": 18.50,
        "prezzoivainclusa": 22.57,
        "disponibile": "negozio",
        "saldo": 45
    },
    {
        "id": 2,
        "codprod": 4111,
        "collezione": "estate",
        "capo": "t-shirt",
        "modello": 1251,
        "quantita": 6,
        "colore": "rosso",
        "prezzoivaesclusa": 5.50,
        "prezzoivainclusa": 6.71,
        "disponibile": "magazzino",
        "saldo": 30
    },
    {
        "id": 3,
        "codprod": 1181,
        "collezione": "inverno",
        "capo": "felpa",
        "modello": 1229,
        "quantita": 8,
        "colore": "beige",
        "prezzoivaesclusa": 17.50,
        "prezzoivainclusa": 21.35,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 4,
        "codprod": 1111,
        "collezione": "estate",
        "capo": "maglione",
        "modello": 1221,
        "quantita": 4,
        "colore": "verde",
        "prezzoivaesclusa": 20,
        "prezzoivainclusa": 24.40,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 5,
        "codprod": 6111,
        "collezione": "primavera",
        "capo": "maglia",
        "modello": 1021,
        "quantita": 5,
        "colore": "blu",
        "prezzoivaesclusa": 11,
        "prezzoivainclusa": 13.42,
        "disponibile": "magazzino",
        "saldo": 60
    }
];
// let abbigl = "./json/Abbigliamento.json";
// let pr = fetch(abbigl).then(response => response.json()
// // console.log(abbigl)
for (let i = 0; i < abb.length; i++) {
    let indumento = new Capo(abb[i].id, abb[i].codprod, abb[i].collezione, abb[i].modello, abb[i].quantita, abb[i].disponibile, abb[i].capo, abb[i].colore, abb[i].prezzoivaesclusa, abb[i].prezzoivainclusa, abb[i].saldo);
    console.log(indumento);
    document.querySelector('.card');
    `< div class="col">${indumento.id} ${indumento.codprod} ${indumento.collezione} ${indumento.modello} ${indumento.quantità} ${indumento.disponibile} ${indumento.capo} ${indumento.color} ${indumento.przIvaEscl} ${indumento.przIvaIncl} ${indumento.saldo}</div>`;
}
let indumento = new Capo(abb[0].id, abb[0].codprod, abb[0].collezione, abb[0].modello, abb[0].quantita, abb[0].disponibile, abb[0].capo, abb[0].colore, abb[0].prezzoivaesclusa, abb[0].prezzoivainclusa, abb[0].saldo);
let indumento2 = new Capo(abb[1].id, abb[1].codprod, abb[1].collezione, abb[1].modello, abb[1].quantita, abb[1].disponibile, abb[1].capo, abb[1].colore, abb[1].prezzoivaesclusa, abb[1].prezzoivainclusa, abb[1].saldo);
let indumento3 = new Capo(abb[2].id, abb[2].codprod, abb[2].collezione, abb[2].modello, abb[2].quantita, abb[2].disponibile, abb[2].capo, abb[2].colore, abb[2].prezzoivaesclusa, abb[2].prezzoivainclusa, abb[2].saldo);
let indumento4 = new Capo(abb[3].id, abb[3].codprod, abb[3].collezione, abb[3].modello, abb[3].quantita, abb[3].disponibile, abb[3].capo, abb[3].colore, abb[3].prezzoivaesclusa, abb[3].prezzoivainclusa, abb[3].saldo);
let indumento5 = new Capo(abb[4].id, abb[4].codprod, abb[4].collezione, abb[4].modello, abb[4].quantita, abb[4].disponibile, abb[4].capo, abb[4].colore, abb[4].prezzoivaesclusa, abb[4].prezzoivainclusa, abb[4].saldo);
console.log(indumento, indumento2, indumento3, indumento4, indumento5);
