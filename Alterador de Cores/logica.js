
    let cliques = 0
    let fundo = document.querySelector('body#Fundo')
    // let fundo , conectada com <body>Fundo</body>
    let escrita = document.querySelector('h1#cordefundoescrita')
    escrita.addEventListener('mouseenter' , functentrada)
    escrita.addEventListener('mouseout' , functsaida)
    //let escrita, conectado com <h1>"Cor de Fundo"</h1>


function clicado() {
    
    cliques += 1
    
    switch (cliques) {
            
        case 1:
            fundo.style.backgroundColor = 'green'
            escrita.innerText = 'Verde'
            break
    
        case 2:
            fundo.style.backgroundColor = 'red'
            escrita.innerText = 'Vermelho'
            break
    
        case 3:
            fundo.style.backgroundColor = 'orange'
            escrita.innerText = 'Laranja'
            break
            
        case 4: 
            fundo.style.backgroundColor = 'gray'
            escrita.innerText = 'Cinza'
            break
    
        case 5:
            fundo.style.backgroundColor =  'blue'
            escrita.innerText = 'Azul'
            break
    
    }
    
}


function functentrada() {
    escrita.style.color = 'black'
    escrita.style.background = 'white'
    if (cliques == 1) {
        escrita.style.color = 'green'
        escrita.style.background = 'white'
    } else if (cliques == 2) {
        escrita.style.color = 'red'
        escrita.style.background = 'white'     
    } else if (cliques == 3) {
        escrita.style.color = 'orange'
        escrita.style.background = 'white'     
    } else if (cliques == 4) {
        escrita.style.color = 'gray'
        escrita.style.background = 'white'     
    } else if (cliques == 5) {
        escrita.style.color = 'blue'
        escrita.style.background = 'white'     
    }
}

function functsaida() {
    escrita.style.color = 'white'
    escrita.style.background = 'black'
    if (cliques == 1) {
        escrita.style.color = 'white'
        escrita.style.background = 'green'
    } else if (cliques == 2) {
        escrita.style.color = 'white'
        escrita.style.background = 'red'     
    } else if (cliques == 3) {
        escrita.style.color = 'white'
        escrita.style.background = 'orange'     
    } else if (cliques == 4) {
        escrita.style.color = 'white'
        escrita.style.background = 'gray'     
    } else if (cliques == 5) {
        escrita.style.color = 'white'
        escrita.style.background = 'blue'     
    }
}


