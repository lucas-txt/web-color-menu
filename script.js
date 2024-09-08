
var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var $tag = (a) => document.getElementsByTagName(a)
var $id = (a) => document.getElementById(a)
var $class = (a) => document.getElementsByClassName(a)
var $query = (a) => document.querySelector(a)
var $name = (a) => document.getElementsByName(a)

// var elemento_query = (a) => document.querySelector(a)

// 1#>dakr-mode
;(function(){
    
    let dark_button = document.querySelector('div#toggle-button')
    let dark_button_cont = 0
    
    dark_button.addEventListener('click', function () {
        let html = document.getElementsByTagName('html')[0]
        let body = document.getElementsByTagName('body')[0]
        
        let dark_button_circle = document.querySelector('div#toggle-button-circle')
        
        if (dark_button_cont == 0) {
            dark_button_circle.style.left = '5%'
            html.style.backgroundColor = 'rgb(226, 226, 226)'
            body.style.backgroundColor = 'rgb(226, 226, 226)'

            root.style.setProperty('--fundo-padrao', 'rgba(171, 171, 171, 0.3)')
            root.style.setProperty('--fundo-padrao-reverso', 'rgb(40, 40, 40)')
            root.style.setProperty('--padrao', 'rgb(190, 190, 190)')
            root.style.setProperty('--padrao-reverso', 'rgba(0, 0, 0, 0.838)')
            root.style.setProperty('--sombra', '1px 2px 7px rgba(132, 132, 132, 0.308)')
            dark_button_cont++
        } else if (dark_button_cont == 1) {
            dark_button_circle.style.left = '53%'
            html.style.backgroundColor = 'rgb(34, 34, 34)'
            body.style.backgroundColor = 'rgb(34, 34, 34)'
            
            root.style.setProperty('--fundo-padrao', 'rgba(0, 0, 0, 0.2)')
            root.style.setProperty('--fundo-padrao-reverso', 'rgb(200, 200, 200)')
            root.style.setProperty('--padrao', 'rgb(20, 20, 20)')
            root.style.setProperty('--padrao-reverso', 'rgb(222, 222, 222)')
            root.style.setProperty('--sombra', 'none')
            
            dark_button_cont--
        }
    })

})()

// 1#>mudança-de-cores
;(function(){
    const chaves_de = Object.keys
    const valores_de = Object.values

    let lista_cores = 
    {ciano: ["aqua", 0],
    azul: ["blue", 0], 
    verde: ["green", 0], 
    amarelo: ["yellow", 0], 
    laranja: ["orange", 0], 
    vermelho: ["red", 0], 
    rosa: ["pink", 0], 
    roxo: ["purple", 0]}
    let cores = []
    
    for (c = 0; c<chaves_de(lista_cores).length; c++) {
        cores.push(document.getElementsByClassName(`cor-${chaves_de(lista_cores)[c]}`)[0])
    }
    
    for (c=0; c<chaves_de(lista_cores).length; c++) {
        cores[c].style.backgroundColor = `${valores_de(lista_cores)[c][0]}`
        cores[c].addEventListener('click', (function(i) {
            return function() {
                mudar_cor(i)
            }
        })(c))
    }
    
    function mudar_cor(c) {
        root.style.setProperty('--cor', `${valores_de(lista_cores)[c][0]}`)
    
        cores[c].style.filter = 'opacity(20%)'
        cores[c].style.height = '1.2em'
        cores[c].style.width = '1.2em'
        cores[c].style.margin = '0px .25em'
        valores_de(lista_cores)[c][1]++
    
        for (i=0; i<cores.length; i++) {
            if (i !== c) {
                cores[i].style.backgroundColor = `${valores_de(lista_cores)[i][0]}`
                cores[i].style.filter = 'opacity(100%)'
                cores[i].style.height = '1.7em'
                cores[i].style.width = '1.7em'
                cores[i].style.margin = '0px 0em'
            }
        }
    }

})()