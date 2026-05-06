function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "¡Gracias por tu interés! Te contactaré pronto.";
    mensaje.style.color = "#00f5d4";
}