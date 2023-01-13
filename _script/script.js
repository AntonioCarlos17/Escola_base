


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

function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    function validate() {
    var emailaddress = queryselector("#email").val();
    if (validateEmailAddress(emailaddress)) {
    $("#result").text(emailaddress + " is valid :)");
    $("#result").css("color", "green");
    } else {
    $("#result").text(emailaddress + " is not correct, please retry:(");
    $("#result").css("color", "red");
    }
    return false;
    }
    $("#validate").bind("click", validate);

