import addList from "./addlist.js";
import convertMoney from "./convertMoney.js";


export default function trocar (){
    


    const saldoDinheiro = document.querySelector(".dinheiro-saldo");
    const saldoReceita = document.querySelector(".saldo-receita");
    const saldoDespesa = document.querySelector(".saldo-despesa");
    const ul = document.querySelector(".ul");
    const nome = document.querySelector("#nome-in");
    const valorAdd = document.querySelector("#valor-in");
    const btn = document.querySelector(".btn");
    var valSd =0;

    
    function saldoAdd(campoSomado, trocado){
        convertMoney(trocado)
        let valAdd = parseFloat(campoSomado.value)
        valSd = parseFloat(trocado.innerHTML)
        valSd+= valAdd;
        
    }

    function convert(trocar,por) {
        trocar.innerHTML=por.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    function avalia() {
        if (valorAdd.value >= 0){
            saldoAdd(valorAdd,saldoReceita);
            convert(saldoReceita,  valSd);
        }else{
            saldoAdd(valorAdd,saldoDespesa);
            convert(saldoDespesa,  valSd);
        };
    }

    function callBack(){
        const ativa = document.querySelector(".lista");
        if (ativa.classList.contains("desativa")){
            ativa.classList.remove("desativa");
        }
        if (valorAdd.value != ""){
            saldoAdd(valorAdd, saldoDinheiro)
            convert(saldoDinheiro, valSd)
            avalia()
            addList()
            valorAdd.value = ""
            nome.value = ""
            nome.focus();
        }else {
            alert("digite um número");
        }
    };

    valorAdd.addEventListener("keydown", (e) =>{
        if (e.key =="Enter")
        callBack();
    });
    
    nome.addEventListener("keydown", (e) =>{
        if (e.key =="Enter")
        valorAdd.focus();
    });
    btn.addEventListener("click", callBack);
}