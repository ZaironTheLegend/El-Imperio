
// =====================================
// EL IMPERIO - SISTEMA DE MÚSICA GLOBAL
// =====================================

const imperioMusic = document.getElementById("audio-imperio");

const MUSIC_TIME_KEY = "imperioMusicTime";
const MUSIC_STARTED_KEY = "imperioMusicStarted";

// =====================================
// RECUPERAR EL MOMENTO DE LA CANCIÓN
// =====================================

if (imperioMusic) {

    imperioMusic.addEventListener("loadedmetadata", () => {

        const savedTime = Number(
            sessionStorage.getItem(MUSIC_TIME_KEY)
        );

        if (
            Number.isFinite(savedTime) &&
            savedTime >= 0 &&
            savedTime < imperioMusic.duration
        ) {
            imperioMusic.currentTime = savedTime;
        }

        // Si ya había comenzado en otra página,
        // intentar continuar automáticamente.
        if (sessionStorage.getItem(MUSIC_STARTED_KEY) === "true") {
            startImperioMusic();
        }

    });

    // =====================================
    // INICIAR O REANUDAR LA MÚSICA
    // =====================================

    function startImperioMusic() {

        if (!imperioMusic) return;

        imperioMusic.play().catch(error => {
            console.warn(
                "La música necesita una interacción del visitante:",
                error
            );
        });

    }

    // =====================================
    // GUARDAR LA POSICIÓN DE LA CANCIÓN
    // =====================================

    function saveImperioMusicPosition() {

        if (!imperioMusic) return;

        if (Number.isFinite(imperioMusic.currentTime)) {
            sessionStorage.setItem(
                MUSIC_TIME_KEY,
                imperioMusic.currentTime
            );
        }

    }

    // Guardar la posición al abandonar la página.
    window.addEventListener("pagehide", saveImperioMusicPosition);

    document.addEventListener("visibilitychange", () => {

        if (document.visibilityState === "hidden") {
            saveImperioMusicPosition();
        }

    });

    // =====================================
    // PRIMERA INTERACCIÓN DEL VISITANTE
    // =====================================

    function enableImperioMusic() {

        sessionStorage.setItem(MUSIC_STARTED_KEY, "true");

        startImperioMusic();

        document.removeEventListener(
            "pointerdown",
            enableImperioMusic,
            true
        );

        document.removeEventListener(
            "keydown",
            enableImperioMusic,
            true
        );

    }

    // Los navegadores suelen bloquear el audio automático.
    // Por eso esperamos a la primera interacción.

    if (sessionStorage.getItem(MUSIC_STARTED_KEY) !== "true") {

        document.addEventListener(
            "pointerdown",
            enableImperioMusic,
            { capture: true }
        );

        document.addEventListener(
            "keydown",
            enableImperioMusic,
            { capture: true }
        );

    }

}