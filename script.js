const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");

function goToTheNext(atualInput, proximoInput){
    // var inputAtual = document.querySelector(`.${atualInput}`);
    // inputAtual.addEventListener("keypress", function(e) {
    //     if(!checkChar(e)) {
    //       e.preventDefault();
    //   }
    // });

    if(typeof proximoInput != "undefined"){
        var inputProximo = document.querySelector(`.${proximoInput}`);
        inputProximo.disabled = false;
        inputProximo.focus();
    }
}

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
   console.log(char);
    var pattern = '[a-z]';
    if (char.match(pattern)) {
      return true;
  }
}

function validarResposta(){
    palavraSelecionada = palavraSelecionada.split('');
    console.log(input1);
    
    validarInputs();

    if(presenteNoLugarCerto()){

    }

}

function validarInputs(){

}

function presenteNoLugarCerto(palavra){
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            
        }
    }
}

function novoJogo(){
    palavraSelecionada = LISTA[Math.floor(Math.random() * LISTA.length)];

    console.log(palavraSelecionada);
}

var palavraSelecionada;

const LISTA = [ "vazio", "vimos", "tanto", "coçar", "rigor", "verso", "dorso", "entre", "botar", "frase", "pouco", "massa", "sente" ];