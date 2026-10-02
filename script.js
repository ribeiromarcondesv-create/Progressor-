let numero = document.getElementById('number')
let progresso = 0
setInterval(() =>{
    if(progresso == 65){
        clearInterval()
    }else{
        progresso += 1
        number.innerHTML = progresso + '%'
    }
        
},30)