
// ==================================
// PASILLO - SISTEMA DE PUERTAS
// ==================================

const doorMessages = {
    ambia: {
        message: "Un mierda que te comes, gilipollas.",
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
// SISTEMA DE AUDIO
// ==================================

const backgroundMusic = document.getElementById("audio-imperio");

const roomAudioNames = [
    "ambia",
    "ruben",
    "bryan",
    "fran",
    "nextor",
    "zairon"
];

let activeRoomAudio = null;


// ==================================
// INICIAR MÚSICA AMBIENTAL
// ==================================

function startBackgroundMusic() {

    if (!backgroundMusic || !backgroundMusic.paused) return;

    backgroundMusic.play().catch(error => {
        console.error("No se pudo reproducir la música ambiental:", error);
    });

}


// La música comienza con la primera interacción del visitante.

function enableBackgroundMusic() {

    startBackgroundMusic();

    document.removeEventListener(
        "pointerdown",
        enableBackgroundMusic,
        true
    );

    document.removeEventListener(
        "keydown",
        enableBackgroundMusic,
        true
    );

}

document.addEventListener(
    "pointerdown",
    enableBackgroundMusic,
    { once: true, capture: true }
);

document.addEventListener(
    "keydown",
    enableBackgroundMusic,
    { once: true, capture: true }
);


// ==================================
// DETENER LOS AUDIOS DE HABITACIONES
// ==================================

function stopRoomAudios() {

    roomAudioNames.forEach(name => {

        const audio = document.getElementById(`audio-${name}`);

        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;
        audio.onended = null;

    });

    activeRoomAudio = null;

}


// ==================================
// REPRODUCIR AUDIO DE UNA HABITACIÓN
// ==================================

function playDoorAudio(doorName) {

    const audio = document.getElementById(`audio-${doorName}`);

    if (!audio) return;

    // Interrumpir cualquier audio anterior.
    stopRoomAudios();

    // Pausar la música ambiental.
    if (backgroundMusic) {
        backgroundMusic.pause();
    }

    audio.currentTime = 0;
    activeRoomAudio = audio;

    // Cuando termine el efecto, recuperar la música ambiental.
    audio.onended = () => {

        if (activeRoomAudio !== audio) return;

        activeRoomAudio = null;
        startBackgroundMusic();

    };

    audio.play().catch(error => {

        console.error("No se pudo reproducir el audio:", error);

        if (activeRoomAudio === audio) {
            activeRoomAudio = null;
            startBackgroundMusic();
        }

    });

}


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

        // Reproducir el audio de la habitación correspondiente.
        playDoorAudio(doorName);

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

            updateArmyMessage(
                "No ha introducido ningún código. ¿Está intentando adivinarlo?"
            );

            return;
        }

        messageBox.textContent =
            "ACCESO DENEGADO. Código no reconocido. La torreta ha fijado su posición.";

        messageBox.classList.add("visible");

        updateArmyMessage(
            "Sientes una torreta apuntándote y una A.R.M.Y con ganas de disparar si accedes ahí."
        );

        // Despliegue de la torreta.
        playDoorAudio("zairon");

        zaironInput.value = "";

    });

    zaironInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            zaironButton.click();
        }

    });

}
