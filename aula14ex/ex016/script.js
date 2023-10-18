function contador(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var result = document.getElementById('result')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
    }else{
        result.innerHTML = "Contando: <br>"
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if(passo <= 0){
            window.alert('Passo inválido! Considerando passo 1!')
            passo = 1
        }

        //contagem crescente
        if(inicio < fim){
            for(var c=inicio; c < fim; c += passo){
                result.innerHTML += `${c} <br>`
            }
        //contagem decrescente
        }else{
            for(var c=inicio; c >= fim; c -= passo){
                result.innerHTML += `${c} <br>`
            }
        }
        
    }
}