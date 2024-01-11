function verificaNumero(numero){
    
    if(numero > 10 || numero == 0)
    {
        $("#input").css("border-color","red")
    }
    else
    {
        $("#input").css("border-color","")
    }
}


var numeroAleatorio = parseInt(Math.random() * 10) + 1

function adivinhaNumero(){
    let numero = $("#input").val()

    if(numero > 10 || numero == 0)
    {
        Swal.fire({
            icon: "error",
            title: "Ops...",
            allowOutsideClick: false,
            text: "O número inserido deve estar entre 1 e 10."
        }).then((result) => {

            if(result.value)
            {
                $("#input").val("")
                $("#input").css("border-color","")
                $("#input").focus()
            }

        })

    }
    else
    {
        if(numero != numeroAleatorio)
        {
            if(numero < numeroAleatorio)
            {
                var texto = "O número secreto é maior."
            }
            else
            {
                var texto = "O número secreto é menor."
            }

            Swal.fire({
                icon: "error",
                title: "Ops...",
                allowOutsideClick: false,
                text: texto
            }).then(() => {
                $("#input").val("")
                $("#input").focus()
            })
        }
        else
        {
            Swal.fire({
                icon: "success",
                title: "Sucesso!",
                allowOutsideClick: false,
                text: "Você acertou! O número secreto é " + numeroAleatorio
            }).then((result) => {
                if(result.value){
                    window.location.reload()
                }
            })
        }
    }
}


window.onload = () => {

    $("#input").focus()

}