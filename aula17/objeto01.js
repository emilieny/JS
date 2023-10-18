let amigo = {nome: 'maria', 
            sexo: 'f', 
            peso: 45, 
            engordar(p=0){
                console.log('engordou!')
                this.peso += p
            }}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} KG`)

//só pra mostrar que dá pra declarar funções dentro de variáveis em javaScript