const tglDark = document.querySelector ("#toggle--dark");
const body = document.body

const imagem = document.querySelector("img");
let temaPreferido = localStorage.getItem("tema")

tglDark.addEventListener("change", alterarTema)

function carregarTema(){
    if (temaPreferido === "dark"){
    body.classList.add("dark");
    imagem.setAttribute("src", "dia fundo.jpg" );
}else
    body.classList.remove("dark");
    imagem.setAttribute("src", "noite fundo.jpg" )
}

function alterarTema(){
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        imagem.setAttribute("src", "dia fundo.jpg" )
    } else{
        body.classList.add("dark");
        imagem.setAttribute("src", "noite fundo.jpg" );
        localStorage.setItem("tema", " ")
    }

}
const resposta = prompt("Qual sua senha?")
localStorage.setItem("senha", resposta)

carregarTema()

// setItem("Chave", valor) Gravar um valor no LocalStorage 
//  getItem("Chave") resgata um valor do LocalStorage
// removeItem("Chave") remove um unico valor do localStorage
// clear() Limpa todo localstorage do seu domínio