function botaoEnviar() {
    const trocarCor = document.querySelectorAll(".dados, .message");
    let todosCamposValidos = true;

    trocarCor.forEach(dados => {
        if (dados.value.trim() === "" ) {
            dados.classList.remove("filled");
            dados.classList.add("notFilled");
            const errorMessage = dados.nextElementSibling;
            errorMessage.style.display = "block";

            todosCamposValidos = false;
        } else {
            dados.classList.remove("notFilled");
            dados.classList.add("filled")

            const errorMessage = dados.nextElementSibling;
            errorMessage.style.display = "none";
        }
    });
 
    if (todosCamposValidos) {
        document.getElementById("formulario").submit(); 
    }
}