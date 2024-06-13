
    let cliques = 0
    let fundo = document.querySelector('body#Fundo')
    // let fundo , conectada com <body>Fundo</body>
    let escrita = document.querySelector('h1#cordefundoescrita')
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