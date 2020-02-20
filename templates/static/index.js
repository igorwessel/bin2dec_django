let div_container = document.querySelector('.container')
let binary_number = document.getElementById('binary_input')

binary_number.addEventListener('input', (event) => {
    msg_error(binary_number.value)
})


function msg_error(input_value) {
    let msg_error = document.createElement('p')
    let msg_text_error = document.createTextNode('Favor insira 0 ou 1.')
    msg_error.className = 'msg-error'
    msg_error.id = 'msg-error'
    msg_error.appendChild(msg_text_error)
    msg_error_element = document.querySelector('.msg-error')

    have_0_or_1(input_value, msg_error)

    if (input_value == '') {
        msg_error_element.remove()
    }
}


function have_0_or_1(string, new_element) {
    for (letter = 0; letter < string.length; letter++) {
        if (string[letter] != 0 && string[letter] != 1) {
            if (msg_error_element == null) {
                binary_number.insertAdjacentElement('beforebegin', new_element)
            }
        }
    }
}

