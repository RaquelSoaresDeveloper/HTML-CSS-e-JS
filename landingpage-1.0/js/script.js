let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome é Inválido'
        txtNome.style.color = 'yellow'
    } else {
        txtNome.innerHTML = 'Nome é Válido'
        txtNome.style.color = 'orange'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'yellow'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'orange'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'yellow'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("O Formulário foi enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}
