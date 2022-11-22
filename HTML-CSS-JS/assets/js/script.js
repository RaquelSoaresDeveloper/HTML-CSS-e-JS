// let (let se usa mais no mercado por minimizar erros )
// var (por  boas práticas não seu uso no mercado)
// por tag: getElementByTagName
// por id: getElementById
// por nome: getElementyByName
// por  classe: getElementByClassName()
// por seletor: querySelector('.nome') é o mais usado pela facilidade 

let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false          //variáveis globais (nomeOk, emailOk e assuntoOk)
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {   //o n 3 poderia ser 2 um nome com 2 letras Jó Ló
        txtNome.innerHTML = 'Nome é invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome é valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { //poderia por && no lugar do ||
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
  }


function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario foi enviado com sucesso")
    } else{
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}
