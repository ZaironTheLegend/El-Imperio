
// =====================================
// A.R.M.Y
// PROTOCOLO DE ACCESO RESTRINGIDO
// =====================================

const authorizationButton =
    document.getElementById("authorizationButton");

const armyMessage =
    document.getElementById("armyMessage");

const responses = [

    "Solicitud recibida. Denegada. No tienes autorización.",

    "Entiendo tu curiosidad, pero no puedo revelar información de esta instalación.",

    "He comprobado tus permisos. El resultado sigue siendo el mismo: acceso denegado.",

    "Por favor, no insistas. Son órdenes directas de Zairon.",

    "¿De verdad pensabas que iba a dejarte entrar tan fácilmente?",

    "No puedo enseñarte lo que hay ahí abajo. Espero que disfrutes del resto de la fortaleza."

];

authorizationButton.addEventListener("click", () => {

    const randomIndex = Math.floor(
        Math.random() * responses.length
    );

    armyMessage.textContent = responses[randomIndex];

    authorizationButton.textContent =
        "SOLICITUD PROCESADA";

    authorizationButton.disabled = true;

    authorizationButton.style.opacity = "0.6";

});
