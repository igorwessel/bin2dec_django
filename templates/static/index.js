let div_container = document.querySelector('.container')
let binary_number = document.getElementById('binary_input')

let decimal_output = document.createElement('p')
decimal_output.className = 'decimal-output'
document.querySelector('.decimal_div_output').appendChild(decimal_output)

let msg_error = document.createElement('p')
let msg_text_error = document.createTextNode('Favor insira 0 ou 1.')
msg_error.className = 'msg-error'
msg_error.id = 'msg_error'
msg_error.appendChild(msg_text_error)


binary_number.addEventListener('input', (event) => {
    convert(binary_number.value)

})


function convert(input_value) {
    msg_error_element = document.querySelector('.msg-error')

    binary = have_0_or_1(input_value, msg_error)
    decimal_output.innerText = binary

    if (input_value == '') {
        if (decimal_output.innerText == 'NaN') {
            decimal_output.innerText = ''
        }
        if (msg_error_element != null) {
            msg_error_element.remove()
        }
    }
}


function have_0_or_1(string, new_element) {
    let binary_digit = ''
    for (letter = 0; letter < string.length; letter++) {
        if (string[letter] != 0 && string[letter] != 1) {
            if (msg_error_element == null) {
                binary_number.insertAdjacentElement('beforebegin', new_element)
            }
        } else {
            binary_digit += string[letter]
        }
    }
    return parseInt(binary_digit, 2)
}