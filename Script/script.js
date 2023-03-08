let sliderElement = document.querySelector("#slider");
let botaoElement = document.querySelector("#botão");

let tamanho_de_senha = document.querySelector("#Valor");
let senha = document.querySelector("#senha");

let box_senha = document.querySelector("#container-password");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

tamanho_de_senha.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanho_de_senha.innerHTML = this.value; 
}

function gerarSenha(){

    let pass = "";
    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }
    box_senha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);

}