// Menu Mobile 

const ulNavigation = document.querySelector('.header-navigation')
const liNavigationList = document.querySelectorAll('.nav-list-item')

const menuButton = document.querySelector('.menu-icon')
const closeButton = document.querySelector('.close-icon')

menuButton.addEventListener('click', () => {
    ulNavigation.classList.toggle('show')
})

closeButton.addEventListener('click', () => {
    ulNavigation.classList.toggle('show')
})

for (const element of liNavigationList) {
    element.addEventListener('click', () => {
        ulNavigation.classList.remove('show')
    })
}

// Validação Email

const emailField = document.querySelector('[data-form-email]')
const messageField = document.querySelector('[data-form-message]')
const submitButton = document.querySelector('[data-form-submit]')
const alertLabel = document.querySelector('[data-form-alert]')

const emailRegex = /^([a-zA-Z0-9.]{1,32})@([a-z0-9]{1,16})\.com?$/

function emailValidation(emailString) {

    if (messageField.value.length === 0) {
        return [false, "Erro no envio: Insira uma mensagem"]
    }

    const response = emailString.search(emailRegex)

    if (response === 0) {
        const splitedEmail = emailString.split("@")
        const user = splitedEmail[0]

        return [true, `Obrigado pelo contato, ${user}!`]
        
    } else {
        return [false, "Erro no envio: Endereço de mail inválido"]
    }
}

async function showFormMessage(text) {

    alertLabel.innerHTML = text
    const hash = crypto.randomUUID()

    alertLabel.setAttribute('data-hash', hash)
    alertLabel.classList.add('show')

    setTimeout(() => {
        if (alertLabel.getAttribute('data-hash') === hash) {
            alertLabel.innerHTML = ""
            alertLabel.classList.remove('show')
        }
    }, 3000)

}

submitButton.addEventListener('click', () => {

    const [resultadoValidacao, callBackResult] = emailValidation(emailField.value)

    showFormMessage(callBackResult)

    if (resultadoValidacao) {
        emailField.value = ""
        messageField.value = ""
    }
})
