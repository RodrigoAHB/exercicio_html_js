const btnEnviar = document.querySelector('#btnEnviar')
const message = document.querySelector('.message')


btnEnviar.addEventListener('click', function(e){
    message.style.display = 'none'
    message.innerHTML = ''
    if (message.classList.contains('error')){
        message.classList.remove('error')
    } else if (message.classList.contains('success')){
        message.classList.remove('success')
    }

    e.preventDefault()
    let numberA = document.querySelector('#numberA')
    let numberB = document.querySelector('#numberB')

    if (numberB.value > numberA.value){
        message.classList.add('success')
        message.innerHTML = `Parabéns! O número ${numberB.value} é maior que o número ${numberA.value}`
        message.style.display = 'block'
    } else {
        message.classList.add('error')
        message.innerHTML = `Erro! O número ${numberA.value} é maior que o número ${numberB.value}`
        message.style.display = 'block'
    }
})