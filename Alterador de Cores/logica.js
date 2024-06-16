
    let cliques = 0
    // contador das alterações
    let fundo = document.querySelector('body#Fundo')
    // let fundo , conectada com <body>Fundo</body>
    let escrita = document.querySelector('h1#cordefundoescrita')
    //let escrita, conectado com <h1>"Preto"</h1>
    escrita.addEventListener('mouseenter' , functentrada)
    escrita.addEventListener('mouseout' , functsaida)
    let botao = document.querySelector('button.cliqueaqui')
    // let 'botao' conectada ao botao "clique aqui"
    botao.addEventListener('mouseenter' , botaoentrada)
    botao.addEventListener('mouseout' , botaosaida)


function clicado() {
    
    cliques += 1
    
    switch (cliques) {
            
        case 1:
            fundo.style.backgroundColor = 'green'
            escrita.innerText = 'Verde'
            escrita.style.color = 'white'
            escrita.style.backgroundColor = 'green'
            break
    
        case 2:
            fundo.style.backgroundColor = 'red'
            escrita.innerText = 'Vermelho'
            escrita.style.color = 'white'
            escrita.style.backgroundColor = 'red'
            break
    
        case 3:
            fundo.style.backgroundColor = 'orange'
            escrita.innerText = 'Laranja'
            escrita.style.color = 'white'
            escrita.style.backgroundColor = 'orange' 
            break
            
        case 4: 
            fundo.style.backgroundColor = 'gray'
            escrita.innerText = 'Cinza'
            escrita.style.color = 'white'
            escrita.style.backgroundColor = 'gray'  
            break
    
        case 5:
            fundo.style.backgroundColor =  'blue'
            escrita.innerText = 'Azul'
            escrita.style.color = 'white'
            escrita.style.backgroundColor = 'blue'   
            break
    
    }
    
}

function functentrada() {
    escrita.style.color = 'black'
    escrita.style.backgroundColor = 'white'
    if (cliques == 1) {
        escrita.style.color = 'green'
        escrita.style.backgroundColor = 'white'
    } else if (cliques == 2) {
        escrita.style.color = 'red'
        escrita.style.bbackgroundColor = 'white'     
    } else if (cliques == 3) {
        escrita.style.color = 'orange'
        escrita.style.backgroundColor = 'white'     
    } else if (cliques == 4) {
        escrita.style.color = 'gray'
        escrita.style.backgroundColor = 'white'     
    } else if (cliques == 5) {
        escrita.style.color = 'blue'
        escrita.style.backgroundColor = 'white'     
    } else if (cliques >= 6) {
        escrita.style.color = 'blue'
        escrita.style.backgroundColor = 'white'
    }
}

function functsaida() {
    escrita.style.color = 'white'
    escrita.style.backgroundColor = 'black'
    if (cliques == 1) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'green'
    } else if (cliques == 2) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'red'     
    } else if (cliques == 3) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'orange'     
    } else if (cliques == 4) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'gray'     
    } else if (cliques == 5) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'blue'     
    } else if (cliques >= 6) {
        escrita.style.color = 'white'
        escrita.style.backgroundColor = 'blue'
    }
}  

function botaoentrada() {
    botao.style.color = 'black'
    botao.style.backgroundColor = 'white'
    if (cliques == 1) {
        botao.style.color = 'green'
        botao.style.backgroundColor = 'white'
    } else if (cliques == 2) {
        botao.style.color = 'red'
        botao.style.bbackgroundColor = 'white'     
    } else if (cliques == 3) {
        botao.style.color = 'orange'
        botao.style.backgroundColor = 'white'     
    } else if (cliques == 4) {
        botao.style.color = 'gray'
        botao.style.backgroundColor = 'white'     
    } else if (cliques == 5) {
        botao.style.color = 'blue'
        botaota.style.backgroundColor = 'white'     
    } else if (cliques >= 6) {
        botao.style.color = 'blue'
        botao.style.backgroundColor = 'white'
    }
}

function botaosaida() {
    botao.style.color = 'white'
    botao.style.backgroundColor = 'black'
    if (cliques == 1) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'green'
    } else if (cliques == 2) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'red'     
    } else if (cliques == 3) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'orange'     
    } else if (cliques == 4) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'gray'     
    } else if (cliques == 5) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'blue'     
    } else if (cliques >= 6) {
        botao.style.color = 'white'
        botao.style.backgroundColor = 'blue'
    }
}