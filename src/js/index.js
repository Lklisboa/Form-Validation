const trocarCor = document.querySelectorAll(".dados, .message");
const botaoEnviar = document.querySelector(".button")

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    
        trocarCor.forEach(dados => {
        if (dados.value) {
            dados.classList.remove("notFilled");
            dados.classList.add("filled");
            dados.nextElementSibling.style.display = "none";

        } else {
            dados.classList.remove("filled");
            dados.classList.add("notFilled")
            dados.nextElementSibling.style.display = "block";
        }
    });
})