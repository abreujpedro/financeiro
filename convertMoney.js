export default function convertMoney (remover){
    remover.innerHTML = remover.innerHTML.replace(/\./g,"");
    remover.innerHTML = remover.innerHTML.replace("R$","");   
    remover.innerHTML = remover.innerHTML.replace("&nbsp;","");   
    remover.innerHTML = remover.innerHTML.replace(",",".");
}