function tabuada(){
    var numero = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')

    if(numero.value.length == 0){
        window.alert("[ERRO] Por favor digite um número!")
    }else{
        var numero = Number(numero.value)
        tabuada.innerHTML = ''
        
        for(n=1; n <=10; n++){
            var item = document.createElement('option')
            item.text = `${numero} x ${n} = ${numero*n}`
            tabuada.append(item)
        }       
    }
}