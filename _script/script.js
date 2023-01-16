


function mascara(telefone){ 
 if(telefone.value.length == 0){
  telefone.value = '(' + telefone.value;} 
  //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
  if(telefone.value.length == 3){
  telefone.value = telefone.value + ') ';}
   //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
  if(telefone.value.length == 10){
   telefone.value = telefone.value + '-';}
    //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
  
}


var btn1 = document.querySelector('#mostrar1')
var btn2 = document.querySelector('#mostrar2')
var btn3 = document.querySelector('#mostrar3')
var btn4 = document.querySelector('#mostrar4')
var btn5 = document.querySelector('#mostrar5')


btn1.addEventListener('click', function(){
    const container = document.querySelector('#A1')
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }})
btn2.addEventListener('click', function(){
    const container = document.querySelector('#A2')
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
})

btn3.addEventListener('click', function(){
    const container = document.querySelector('#A3')
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
})

btn4.addEventListener('click', function(){
    const container = document.querySelector('#A4')
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
})

btn5.addEventListener('click', function(){
    const container = document.querySelector('#A5')
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
})

