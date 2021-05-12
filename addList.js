import convertMoney from "./convertMoney.js";

export default function addList () {

    const saldoDinheiro = document.querySelector(".dinheiro-saldo");
    const saldoReceita = document.querySelector(".saldo-receita");
    const saldoDespesa = document.querySelector(".saldo-despesa");
    const ul = document.querySelector(".ul");
    const nome = document.querySelector("#nome-in");
    const valorAdd = document.querySelector("#valor-in");
    const btn = document.querySelector(".btn");

    const liNova = document.createElement("li");
    liNova.classList.add("item");
    ul.appendChild(liNova);

    const divNova = document.createElement("div");
    divNova.classList.add("tr-esquerda");
    liNova.appendChild(divNova)

    
    const divNovaSecond = document.createElement("div");
    divNovaSecond.classList.add("tr-direita");
    liNova.appendChild(divNovaSecond);

    const pNovo = document.createElement("p");
    pNovo.classList.add("text-li");
    pNovo.innerHTML =""+ parseFloat(valorAdd.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
    divNovaSecond.appendChild(pNovo)

    const button = document.createElement("a");
    button.innerHTML = "<sup><b>x</b></sup>";
    button.classList.add("botao-li");
    divNova.appendChild(button);
    button.addEventListener("click", () =>{
        divNova.parentElement.remove()
        convertMoney(saldoDinheiro);
        convertMoney(pNovo);
        saldoDinheiro.innerHTML = (+saldoDinheiro.innerHTML - pNovo.innerHTML).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        if (parseFloat(pNovo.innerHTML) >=0){
            convertMoney(saldoReceita);
            saldoReceita.innerHTML = '' + (+saldoReceita.innerHTML - pNovo.innerHTML).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  ; 
        }else {
            convertMoney(saldoDespesa);
            saldoDespesa.innerHTML = '' + (+saldoDespesa.innerHTML - pNovo.innerHTML).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }

    });
    const pTr = document.createElement("p");
    divNova.appendChild(pTr);
    pTr.innerText = nome.value;


    const colorNova = document.createElement("div");
    divNovaSecond.appendChild(colorNova);
    colorNova.classList.add("detalhe-lateral");
    if (parseFloat(valorAdd.value) >0){
        colorNova.classList.add("green")
    }else{
        colorNova.classList.add("red")
    }

}
