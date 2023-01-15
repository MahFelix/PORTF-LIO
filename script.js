
function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('')
    console.log(textArray)
    
    
        elemento.innerHTML = ''
        textArray.forEach((letra, i) =>{
            setTimeout(function() {
                elemento.innerHTML += letra
            }, 110 * i)
        })
    }


const efeito = document.getElementById('SpanEffect')
console.log(efeito)
typeWrite(efeito)