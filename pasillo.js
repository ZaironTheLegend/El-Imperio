// ==================================
// PASILLO - SISTEMA DE PUERTAS
// ==================================

const doorMessages = {
    ambia: {
        message: "Un mierda que te comes, imbecil.",
        army: "Le recomiendo que no vuelva a molestar al señor Ambia."
    },

    ruben: {
        message: "Parece que alguien duerme profundamente.",
        army: "La puerta está congelada. No voy a descongelarla por usted."
    },

    bryan: {
        message: "Se escuchan susurros inaudibles.",
        army: "La habitación del señor Bryan permanece cerrada."
    },

    fran: {
        message: "Se escucha a alguien jugar a Stardew Valley.",
        army: "El hechizo de protección sigue activo. No interfiera."
    },

    nextor: {
        message: "Sientes que si lo abres habrá una sorpresa explosiva.",
        army: "Advertencia: temperatura del pomo fuera de los parámetros seguros."
    }
};


// ==================================
// INTENTOS DE ACCESO
// ==================================

const doorButtons = document.querySelectorAll("[data-door]");

doorButtons.forEach(button => {
    button.addEventListener("click", () => {

        const doorName = button.dataset.door;
        const door = doorMessages[doorName];

        if (!door) return;

        showDoorMessage(doorName, door.message);
        updateArmyMessage(door.army);

    });
});


// ==================================
// MOSTRAR MENSAJES
// ==================================

function showDoorMessage(doorName, message) {

    const messageBox = document.getElementById(`message-${doorName}`);

    if (!messageBox) return;

    messageBox.textContent = message;
    messageBox.classList.add("visible");

}


// ==================================
// TERMINAL DE A.R.M.Y
// ==================================

function updateArmyMessage(message) {

    const terminal = document.getElementById("army-message");

    if (!terminal) return;

    terminal.textContent = `«${message}»`;

}


// ==================================
// HABITACIÓN DE ZAIRON
// ==================================

const zaironButton = document.getElementById("zairon-submit");
const zaironInput = document.getElementById("zairon-code");

if (zaironButton && zaironInput) {

    zaironButton.addEventListener("click", () => {

        const code = zaironInput.value.trim();

        const messageBox = document.getElementById("message-zairon");

        if (!code) {

            messageBox.textContent = "Introduce un código de autorización.";
            messageBox.classList.add("visible");

            updateArmyMessage("No ha introducido ningún código. ¿Está intentando adivinarlo?");

            return;
        }

        messageBox.textContent =
            "ACCESO DENEGADO. Código no reconocido. La torreta ha fijado su posición.";

        messageBox.classList.add("visible");

        updateArmyMessage(
            "Sientes una torreta apuntándote y una A.R.M.Y con ganas de disparar si accedes ahí."
        );

        zaironInput.value = "";

    });

    zaironInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            zaironButton.click();
        }

    });

}