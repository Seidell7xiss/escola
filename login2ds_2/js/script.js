document.getElementById("form-login").addEventListener("submit",
function( event ){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if( email === "teste@gmail.com" && senha === "teste"){
    }else{
        alert("E-mail ou senha incorretos, tente outra vez.");
    }
    
});
