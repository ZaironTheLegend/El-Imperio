
/* =====================================
   NIVEL 5 - ENTIDADES GUARDIANAS
===================================== */

const routeSelection = document.getElementById("route-selection");
const challengeScreen = document.getElementById("challenge-screen");
const terminalScreen = document.getElementById("terminal-screen");

const elevatorRoute = document.getElementById("elevator-route");
const stairsRoute = document.getElementById("stairs-route");


/* =====================================
   SELECCIÓN DE RUTA
===================================== */

elevatorRoute.addEventListener("click", showElevatorChallenge);
stairsRoute.addEventListener("click", showStairsChallenge);


function openChallenge() {
    routeSelection.hidden = true;
    challengeScreen.hidden = false;
    terminalScreen.hidden = true;
}


/* =====================================
   PASILLO DEL ASCENSOR
===================================== */

function showElevatorChallenge() {
    openChallenge();

    challengeScreen.innerHTML = `
        <h2>PASILLO DEL ASCENSOR</h2>

        <p>
            Frente a ti aparecen dos ascensores.
            Ambos parecen idénticos.
        </p>

        <div class="challenge-options">
            <button class="challenge-button" onclick="enterElevator('A')">
                ASCENSOR A
            </button>

            <button class="challenge-button" onclick="enterElevator('B')">
                ASCENSOR B
            </button>
        </div>
    `;
}


/* =====================================
   SELECCIÓN DEL ASCENSOR
===================================== */

function enterElevator(elevator) {

    const isFake = elevator === "A";

    const destinations = isFake
        ? [1, 2, 3, 4, 5, 6, 7, 8]
        : [1, 2, 3, 4, 6];

    challengeScreen.innerHTML = `
        <h2>${isFake ? "ASCENSOR A" : "ASCENSOR B"}</h2>

        <p>
            Selecciona el nivel al que deseas dirigirte.
        </p>

        <div class="challenge-options">
            ${destinations.map(level => `
                <button class="challenge-button"
                    onclick="selectElevatorLevel(${level}, ${isFake})">
                    NIVEL ${level}
                </button>
            `).join("")}
        </div>

        <button class="challenge-button" onclick="showElevatorChallenge()">
            SALIR DEL ASCENSOR
        </button>
    `;
}


function selectElevatorLevel(level, isFake) {

    if (isFake) {
        window.location.href = "muerte.html?causa=ascensor";
        return;
    }

    if (level === 6) {
    sessionStorage.setItem("rutaNivel6", "ascensor");
    window.location.href = "nivel5.html?terminal=1";
    return;
}

    sessionStorage.setItem("nivelVisita", String(level));
    sessionStorage.setItem("regresoNivel5", "true");

    window.location.href = `subterraneo.html?visita=${level}`;
}


/* =====================================
   PASILLO DE LAS ESCALERAS
===================================== */

function showStairsChallenge() {
    openChallenge();

    challengeScreen.innerHTML = `
        <h2>PASILLO DE LAS ESCALERAS</h2>

        <p>
            Mientras avanzas, observas una figura con forma
            de zorro robótico.
        </p>

        <p>
            Algo en su comportamiento no parece normal.
        </p>

        <div class="challenge-options">
            <button class="challenge-button" onclick="stairsDecision('run')">
                CORRER
            </button>

            <button class="challenge-button" onclick="stairsDecision('walk')">
                CAMINAR
            </button>
        </div>
    `;
}

function stairsDecision(decision) {

    if (decision === "run") {
        window.location.href = "muerte.html?causa=zorro";
        return;
    }

    sessionStorage.setItem("rutaNivel6", "escaleras");
    window.location.href = "nivel5.html?terminal=1";
}


/* =====================================
   TERMINAL DE SEGURIDAD
===================================== */

function showTerminal() {

    routeSelection.hidden = true;
    challengeScreen.hidden = true;
    terminalScreen.hidden = false;

    terminalScreen.innerHTML = `
        <h2>TERMINAL DE SEGURIDAD</h2>

        <div class="terminal-message">

            <h3>REGISTRO 01 · ENTIDAD ASCENSOR</h3>

            <p>
                Se ha identificado una entidad capaz de adoptar
                la apariencia de un ascensor convencional.
            </p>

            <p>
                Su propósito es engañar a los individuos para
                que intenten descender a los siguientes niveles.
                Una vez dentro, la entidad aplasta al individuo
                que haya caído en su engaño.
            </p>

            <p>
                No confíe en las apariencias. Compruebe siempre
                su identidad antes de utilizar los ascensores.
            </p>

            <hr>

            <h3>REGISTRO 02 · ENTIDAD ZORRO</h3>

            <p>
                Una pequeña entidad robótica con apariencia
                de zorro metálico custodia las habitaciones
                donde permanecen dormidas las demás entidades
                robóticas.
            </p>

            <p>
                Cuando detecta movimientos rápidos, transforma
                su cuerpo y adopta una apariencia mucho más
                grande, curvada y desnutrida.
            </p>

            <p>
                Durante esta transformación abre su pecho,
                revelando su capacidad para devorar al individuo
                que haya provocado su reacción.
            </p>

            <p>
                Evite correr en su presencia.
            </p>

        </div>

        <button class="challenge-button" onclick="continueToLevel6()">
            ACCEDER AL NIVEL 6
        </button>
    `;
}


/* =====================================
   CONTINUAR AL NIVEL 6
===================================== */

function continueToLevel6() {

    sessionStorage.setItem("nivel5Completado", "true");

    window.location.href = "subterraneo.html?continuar=6";
}


/* =====================================
   DETECTAR LLEGADA A LA TERMINAL
===================================== */

const nivel5Params = new URLSearchParams(window.location.search);

if (nivel5Params.get("terminal") === "1") {
    showTerminal();
}

