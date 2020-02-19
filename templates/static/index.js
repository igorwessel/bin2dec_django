let div_container = document.querySelector('.container')
let binary_number = document.getElementById('binary_input')

binary_number.addEventListener('keyup', (event) => {
    msg_error_element = msg_error()
})


function msg_error() {
    let msg_error = document.createElement('p')
    let msg_text_error = document.createTextNode('Favor insira 0 ou 1.')
    msg_error.className = 'msg-error'
    msg_error.id = 'msg-error'
    msg_error.appendChild(msg_text_error)
    return msg_error
}

