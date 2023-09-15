lista = []

let pessoa = document.querySelector('#paciente')

let txt = document.querySelector('#txt')

let adc = document.querySelector('#adc')
let urg = document.querySelector('#urg')
let at = document.querySelector('#at')

let ol = document.querySelector('ol')

var click = 0

adc.addEventListener('click', () =>{
    if (lista.includes(pessoa.value)){
        window.alert('[ERRO] Paciente já adicionado')
    } else {
        lista.push(pessoa.value)
        ol.innerHTML += `<li>${lista[click]}</li>`
        click += 1
    }
})

urg.addEventListener('click', () =>{
    lista.push(pessoa.value)
    var ultimo = lista.pop()
    lista.unshift(ultimo)
    ol.innerHTML = ""
    for (let i = 0; i < lista.length; i++)
    ol.innerHTML += `<li>${lista[i]}</li>`
})


at.addEventListener('click', () => {
    ol.innerHTML = ""
    if (lista.length < 1){
        txt.innerHTML = ""
        window.alert('Todos já foram atendidos')
    } else {
        ate = lista.shift()
        txt.innerHTML = ate
        for (let i = 0; i < lista.length; i++)
        ol.innerHTML += `<li>${lista[i]}</li>`
    }
})
