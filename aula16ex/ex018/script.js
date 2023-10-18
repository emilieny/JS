var numero = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert("[ERRO] Por favor digite um número diferente!")
        }
        
        //pra limpar o campo de colocar o número
       numero.value = ''
       numero.focus()     
    }

    function finalizar(){
        if(valores.length == 0){
            window.alert('Adicione valores!')
        }else{
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0

            for(var pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior){
                    maior = valores[pos]
                }
                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }

            media = soma/tot

            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
            res.innerHTML += `<P>O maior valor é ${maior}. </p>`
            res.innerHTML += `<P>O menor valor é ${menor}. </p>`
            res.innerHTML += `<P>A soma dos valores é ${soma}. </p>`
            res.innerHTML += `<P>A média dos valores é ${media}. </p>`

        }
    }