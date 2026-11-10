
// =============================================
// EL IMPERIO
// INSTALACIÓN SUBTERRÁNEA
// SISTEMA DE ACCESO Y EXPLORACIÓN
// =============================================


// =============================================
// ELEMENTOS HTML
// =============================================

const startAccessButton = document.getElementById("startAccessButton");

const accessScreen = document.getElementById("accessScreen");
const verificationSection = document.getElementById("verificationSection");

const unknownWarning = document.getElementById("unknownWarning");
const enterUndergroundButton = document.getElementById("enterUndergroundButton");

const explorationSection = document.getElementById("explorationSection");

const armyTerminalSection = document.getElementById("armyTerminalSection");
const armyMessage = document.getElementById("armyMessage");


// =============================================
// VERIFICACIÓN 1: CÓDIGO NUMÉRICO
// =============================================

const numericCode = document.getElementById("numericCode");
const numericButton = document.getElementById("numericButton");
const numericFeedback = document.getElementById("numericFeedback");

const verificationOne = document.getElementById("verificationOne");


// =============================================
// VERIFICACIÓN 2: CÓDIGO ALFANUMÉRICO
// =============================================

const alphanumericCode = document.getElementById("alphanumericCode");
const alphanumericButton = document.getElementById("alphanumericButton");
const alphanumericFeedback = document.getElementById("alphanumericFeedback");

const verificationTwo = document.getElementById("verificationTwo");


// =============================================
// VERIFICACIÓN 3: ESCÁNER SANGUÍNEO
// =============================================

const bloodButton = document.getElementById("bloodButton");
const bloodFeedback = document.getElementById("bloodFeedback");

const bloodScanner = document.getElementById("bloodScanner");
const scannerStatus = document.getElementById("scannerStatus");

const verificationThree = document.getElementById("verificationThree");


// =============================================
// PROGRESO DE VERIFICACIONES
// =============================================

const verificationProgress = document.getElementById("verificationProgress");

let completedVerifications = 0;


// =============================================
// CÓDIGOS DE ACCESO
// =============================================

// Simulación narrativa.
// Estos códigos no constituyen seguridad real.

const NUMERIC_PASSWORD = "2427";
const ALPHANUMERIC_PASSWORD = "#99FF90";


// =============================================
// INICIAR PROTOCOLO
// =============================================

startAccessButton.addEventListener("click", () => {

    accessScreen.hidden = true;
    verificationSection.hidden = false;

    armyMessage.textContent =
        "El sistema de seguridad está preparado para comprobar tu autorización. Recuerda que esta instalación es de acceso exclusivo para Zairon.";

    verificationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// =============================================
// ACTUALIZAR PROGRESO
// =============================================

function updateProgress() {

    verificationProgress.textContent =
        `VERIFICACIONES COMPLETADAS: ${completedVerifications} / 3`;

}


// =============================================
// VERIFICACIÓN 1
// =============================================

numericButton.addEventListener("click", () => {

    const enteredCode = numericCode.value.trim();

    if (enteredCode === NUMERIC_PASSWORD) {

        numericFeedback.textContent =
            "IDENTIFICACIÓN NUMÉRICA ACEPTADA.";

        numericFeedback.className =
            "verification-feedback success";

        numericButton.textContent = "VERIFICACIÓN COMPLETADA";
        numericButton.disabled = true;

        numericCode.disabled = true;

        verificationOne.classList.add("completed");

        verificationTwo.classList.remove("locked");

        alphanumericCode.disabled = false;
        alphanumericButton.disabled = false;

        completedVerifications++;

        updateProgress();

    } else {

        numericFeedback.textContent =
            "CÓDIGO INCORRECTO. ACCESO NO VALIDADO.";

        numericFeedback.className =
            "verification-feedback error";

        numericCode.value = "";
        numericCode.focus();

    }

});


// =============================================
// VERIFICACIÓN 2
// =============================================

alphanumericButton.addEventListener("click", () => {

    const enteredCode = alphanumericCode.value.trim();

    if (enteredCode === ALPHANUMERIC_PASSWORD) {

        alphanumericFeedback.textContent =
            "CLAVE ALFANUMÉRICA ACEPTADA.";

        alphanumericFeedback.className =
            "verification-feedback success";

        alphanumericButton.textContent =
            "VERIFICACIÓN COMPLETADA";

        alphanumericButton.disabled = true;
        alphanumericCode.disabled = true;

        verificationTwo.classList.add("completed");

        verificationThree.classList.remove("locked");

        bloodButton.disabled = false;

        completedVerifications++;

        updateProgress();

    } else {

        alphanumericFeedback.textContent =
            "CLAVE INCORRECTA. IDENTIFICACIÓN RECHAZADA.";

        alphanumericFeedback.className =
            "verification-feedback error";

        alphanumericCode.value = "";
        alphanumericCode.focus();

    }

});


// =============================================
// VERIFICACIÓN 3
// ESCÁNER SANGUÍNEO SIMULADO
// =============================================

bloodButton.addEventListener("click", () => {

    bloodButton.disabled = true;

    bloodScanner.classList.add("scanning");

    scannerStatus.textContent =
        "ANALIZANDO MUESTRA...";

    bloodFeedback.textContent = "";

    bloodFeedback.className =
        "verification-feedback";

    // Simulación visual: no se recoge ni almacena
    // sangre ni información biométrica real.

    setTimeout(() => {

        bloodScanner.classList.remove("scanning");

        scannerStatus.textContent =
            "COINCIDENCIA IDENTIFICADA";

        bloodFeedback.textContent =
            "IDENTIDAD DE ZAIRON CONFIRMADA.";

        bloodFeedback.className =
            "verification-feedback success";

        bloodButton.textContent =
            "VERIFICACIÓN COMPLETADA";

        verificationThree.classList.add("completed");

        completedVerifications++;

        updateProgress();

        setTimeout(() => {

            verificationSection.hidden = true;

            unknownWarning.hidden = false;

            // A.R.M.Y deja de aparecer en la instalación.
            // No conoce lo que existe en su interior.

            armyTerminalSection.hidden = true;

            unknownWarning.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 1200);

    }, 2500);

});


// =============================================
// ENTRAR EN EL SUBTERRÁNEO
// =============================================

enterUndergroundButton.addEventListener("click", () => {

    sessionStorage.setItem("accesoSubterraneo", "true");

    unknownWarning.hidden = true;

    explorationSection.hidden = false;

    currentLevel = 0;

    showLevel();

    explorationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// =============================================
// LOS SIETE NIVELES
// =============================================

const undergroundLevels = [

            {
        number: "01 / 07",
        title: "NIVEL 1",
        name: "ALMACÉN DE REPUESTOS",
        symbol: "◈",

        description:
            "Primera planta de la instalación subterránea.",

        details:
            "Este almacén contiene centenares de cuerpos de repuesto destinados a Safira y A.R.M.Y. Todos son réplicas exactas de sus respectivos cuerpos actuales. Permanecen almacenados y sin activar, preparados para sustituir a los originales en caso de que sufran daños irreparables. Zairon es el responsable de conservarlos.",

        transport:
            "ASCENSOR Y ESCALERAS DE PARED DISPONIBLES."
    },

        {
    number: "02 / 07",
    title: "NIVEL 2",
    name: "ARMAMENTO Y OBJETOS OLVIDADOS",
    symbol: "⚔",

    description:
        "Segunda planta de la instalación subterránea. Un almacén donde descansan armas, herramientas y objetos especiales que, por diferentes motivos, terminaron abandonados o guardados.",

    details:
        "El inventario de esta planta contiene equipamiento diseñado, modificado o recuperado por distintos miembros del Imperio. Algunos objetos fueron creados para mejorar las capacidades de combate de sus propietarios. Otros... quizá deberían haber permanecido olvidados.",

    items: [

        {
            name: "GUANTES DE AMBIA",
            category: "EQUIPAMIENTO DE COMBATE",
            symbol: "✦",

            description:
                "Diseñados personalmente por Zairon para Ambia. Estos guantes están pensados para ofrecer un estilo de combate mucho más contundente y afilado, permitiendo ejecutar golpes capaces de combinar fuerza e impacto cortante. Incorporan además un sistema de paracaídas integrado."
        },

        {
            name: "GUANTES DE RUBÉN",
            category: "EQUIPAMIENTO MODIFICADO",
            symbol: "❄",

            description:
                "Originalmente pertenecieron a Caos, la todopoderosa. Fueron creados para potenciar sus poderes, pero tenían un problema: no eran de su medida y tampoco ofrecían la durabilidad necesaria. Tras ser desechados, Rubén los recogió y se los entregó a Zairon, quien los modificó para sustituir su afinidad con el fuego por una capacidad de potenciar el hielo."
        },

        {
            name: "CUBO ESQUIZOFRÉNICO",
            category: "DISPOSITIVO DE ATURDIMIENTO",
            symbol: "▣",

            description:
                "Una creación de Safira cuyo funcionamiento resulta difícil de justificar desde cualquier perspectiva tecnológica convencional. El cubo libera una descarga de basura de internet capaz de aturdir a cualquiera que se encuentre en un radio de cinco metros. Tocar directamente el cubo también provoca el efecto. Se recomienda no acercarse demasiado."
        },

        {
            name: "CRUCES DEL SANTO",
            category: "ARMAMENTO ESPECIAL",
            symbol: "✝",

            description:
                "Cruces cristianas diseñadas por Zairon para Bryan. Están preparadas para ser lanzadas contra los enemigos y detonar al impactar. Su efecto puede purificar al objetivo o causarle daño, convirtiéndolas en un arma especialmente particular dentro del arsenal del Imperio."
        },

        {
            name: "GUANTES DE NEXTOR",
            category: "EQUIPAMIENTO DE REPUESTO",
            symbol: "♜",

            description:
                "Un juego de guantes de repuesto preparado para Nextor. Incorporan un sistema de drenaje diseñado para transportar su sangre venenosa hasta las garras, permitiendo imbuirlas con sus propiedades tóxicas. De esta manera, Nextor dispone de otro conjunto de equipamiento compatible con su estilo de combate."
        },

        {
            name: "GORRO DE CUMPLEAÑOS BLANCO Y NEGRO",
            category: "OBJETO NO IDENTIFICADO",
            symbol: "⚠",

            warning: true,

            description:
                "Un objeto aparentemente inofensivo que permanece almacenado en esta planta. No existe autorización para manipularlo. Su presencia viene acompañada de una advertencia explícita: NO TOCAR BAJO NINGUNA CIRCUNSTANCIA."
        }

    ],

    transport:
        "ASCENSOR Y ESCALERAS DE PARED DISPONIBLES."
},

    {
        number: "03 / 07",
        title: "NIVEL 3",
        name: "BÓVEDA DE DINERO",
        symbol: "€",

        description:
            "Tercera planta de la instalación subterránea. Cámara acorazada donde Zairon almacena su fortuna personal.",

        details:
            "Esta bóveda contiene los fondos de Zairon. A.R.M.Y administra y supervisa el dinero para evitar gastos excesivos. El saldo está protegido mediante un sistema de reconocimiento ocular simulado.",

        transport:
            "ASCENSOR Y ESCALERAS DE PARED DISPONIBLES."
    },

    
{
    number: "04 / 07",
    title: "NIVEL 4",
    name: "PROTOTIPOS DE ARMAS",
    symbol: "⚙",
    description: "Cuarta planta de la instalación subterránea. Un espacio dedicado al almacenamiento de prototipos, experimentos y proyectos armamentísticos desarrollados por Zairon.",
    details: "Todos los dispositivos almacenados en esta planta fueron diseñados por Zairon. Algunos llegaron a funcionar, otros presentaron problemas durante sus pruebas y unos cuantos demostraron que una buena idea no siempre termina convirtiéndose en un buen invento. Ninguno debe considerarse equipamiento operativo.",
    items: [
        {
            name: "ESCUDO PIZZA",
            category: "PROTOTIPO DEFENSIVO · VERSIÓN 1.0",
            symbol: "◉",
            description: "Escudo experimental diseñado para absorber un impacto y detonar cinco segundos después. Su funcionamiento exige lanzarlo antes de la explosión, convirtiéndolo en un arma defensiva bastante peculiar. Su escasa practicidad provocó que fuera sustituido por una versión mejorada: Escudo Pizza 2.0."
        },
        {
            name: "MECHA",
            category: "PROYECTO MECÁNICO INCOMPLETO",
            symbol: "▣",
            description: "Unidad mecánica de grandes dimensiones concebida para ser pilotada por varios miembros simultáneamente. Cada ocupante tendría el control de una parte diferente del Mecha. Aunque la idea prometía una máquina de combate coordinada, la complejidad de su funcionamiento y organización terminó convirtiéndolo en un proyecto poco viable. Su construcción nunca llegó a completarse."
        },
        {
            name: "EL GUANTE DEL IMPERIO",
            category: "PROTOTIPO DE EQUIPAMIENTO",
            symbol: "✥",
            description: "Una serie de guantes experimentales creados para reproducir el funcionamiento del Guante de la Isla. Sin embargo, las pruebas revelaron un defecto grave: su armadura desplegable provocaba daños internos en quienes la utilizaban. A pesar de los intentos de Zairon por perfeccionarlos, los prototipos no alcanzaron un funcionamiento seguro."
        },
        {
            name: "GUADAÑA DE ZAIRON",
            category: "PROTOTIPO DE ARMA PRINCIPAL",
            symbol: "⚔",
            description: "Una de las primeras versiones de la guadaña de Zairon. Todavía carece de varias de las funciones presentes en su versión moderna y presenta importantes defectos en su sistema de conductividad eléctrica. Se conserva como muestra de una etapa anterior de su desarrollo."
        },
        {
            name: "GUANTES DE ZAIRON",
            category: "PROTOTIPO DE CANALIZACIÓN MÁGICA",
            symbol: "✦",
            description: "Diseñados para facilitar y mejorar el flujo de magia de Zairon a través de sus manos. Sin embargo, el sistema de canalización nunca llegó a funcionar correctamente, impidiendo que los guantes cumplieran su propósito. El proyecto quedó descartado."
        },
        {
            name: "ARMADURA DE NEXTOR",
            category: "PROYECTO CANCELADO",
            symbol: "♜",
            description: "Un intento de desarrollar una armadura protectora para Nextor. El proyecto fue abandonado antes de completarse al considerar que equipar con una armadura convencional a alguien con una tendencia tan explosiva no era precisamente una solución práctica. La viabilidad del diseño quedó seriamente cuestionada."
        }
    ],
    transport: "ASCENSOR Y ESCALERAS DE PARED DISPONIBLES."
},


    {
        number: "05 / 07",
        title: "NIVEL 5",
        name: "ENTIDADES GUARDIANAS",
        symbol: "☠",

        description:
            "Quinta planta. Zona de entidades de clase $&#@.",

        details:
            "En este nivel se encuentran las máquinas de combate creadas por Zairon. Son prototipos que carecen de una programación adecuada y presentan un comportamiento extremadamente agresivo.",

        transport:
            "PRECAUCIÓN: ENTIDADES GUARDIANAS EN ESTE NIVEL."
    },

    {
        number: "06 / 07",
        title: "NIVEL 6",
        name: "NOSTALGIA",
        symbol: "✧",

        description:
            "Sexta planta. Recuerdos de las aventuras.",

        details:
            "Un espacio dedicado a conservar los recuerdos de las aventuras vividas por Zairon.",

        transport:
            "ASCENSOR Y ESCALERAS DE PARED DISPONIBLES."
    },

    {
        number: "07 / 07",
        title: "NIVEL 7",
        name: "CORAZÓN DE A.R.M.Y",
        symbol: "♥",

        description:
            "Última planta. El núcleo de A.R.M.Y.",

        details:
            "Zairon creó a A.R.M.Y en el Nivel 1. Con el paso del tiempo trasladó su núcleo a niveles cada vez más profundos para protegerla. Diseñó personalmente esta sala, instaló medidas de seguridad y creó copias de respaldo. A.R.M.Y desconoce que su núcleo y sus copias se encuentran aquí. Zairon baja personalmente al final de cada día para crear una nueva copia de respaldo. No quiere perderla.",

        transport:
            "DESTINO FINAL DEL RECORRIDO."
    }

];


// =============================================
// CONTROL DE EXPLORACIÓN
// =============================================

let currentLevel = 0;

const levelTitle = document.getElementById("levelTitle");
const levelNumber = document.getElementById("levelNumber");

const levelName = document.getElementById("levelName");
const levelSymbol = document.getElementById("levelSymbol");

const levelDescription = document.getElementById("levelDescription");
const levelDetails = document.getElementById("levelDetails");

const levelItems = document.getElementById("levelItems");

const transportDescription = document.getElementById("transportDescription");

const nextLevelButton = document.getElementById("nextLevelButton");

// =============================================
// BÓVEDA DE DINERO · RECONOCIMIENTO OCULAR
// =============================================

const vaultAccess = document.getElementById("vaultAccess");

const vaultScanner = document.getElementById("vaultScanner");

const vaultScanButton = document.getElementById("vaultScanButton");

const vaultScanStatus = document.getElementById("vaultScanStatus");

const vaultBalance = document.getElementById("vaultBalance");

// =============================================
// ESCÁNER OCULAR SIMULADO
// =============================================

vaultScanButton.addEventListener("click", () => {

    vaultScanButton.disabled = true;

    vaultScanner.classList.add("scanning");

    vaultScanStatus.textContent =
        "ANALIZANDO IDENTIDAD...";

    vaultBalance.hidden = true;

    setTimeout(() => {

        vaultScanner.classList.remove("scanning");

        vaultScanner.classList.add("verified");

        vaultScanStatus.textContent =
            "IDENTIDAD CONFIRMADA · ZAIRON";

        vaultScanButton.textContent =
            "IDENTIDAD VERIFICADA";

        vaultBalance.hidden = false;

    }, 2500);

});


// =============================================
// MOSTRAR NIVEL ACTUAL
// =============================================

function showLevel() {

    const level = undergroundLevels[currentLevel];

        const returningOnFoot =
        sessionStorage.getItem("regresoNivel5") === "true";

    nextLevelButton.disabled = false;

    levelTitle.textContent = level.title;
    levelNumber.textContent = level.number;

    levelName.textContent = level.name;
    levelSymbol.textContent = level.symbol;

    levelDescription.textContent = level.description;

levelDetails.textContent = level.details;

// Mostrar inventario especial si el nivel lo contiene

if (level.items) {

    levelDetails.hidden = false;
    levelItems.hidden = false;

    levelItems.innerHTML = level.items.map(item => {

        const cardContent = `
            <div class="item-card-header">
                <span class="item-symbol">${item.symbol}</span>
                <span class="item-category">${item.category}</span>
            </div>

            <h4>${item.name}</h4>

            <p>${item.description}</p>

            ${item.warning ? `
                <span class="item-warning">
                    ⚠ PROHIBIDO TOCAR
                </span>
            ` : ""}
        `;

        if (item.warning) {
            return `
                <a href="arkania.html" class="item-card item-danger">
                    ${cardContent}
                    <span class="item-open">
                        INTERACCIÓN NO AUTORIZADA →
                    </span>
                </a>
            `;
        }

        return `
            <article class="item-card">
                ${cardContent}
            </article>
        `;

    }).join("");

} else {

    levelItems.hidden = true;
    levelItems.innerHTML = "";

    levelDetails.hidden = false;

}

if (returningOnFoot) {
    transportDescription.textContent =
        "EL ASCENSOR HA REGRESADO SOLO AL NIVEL 5. PARA VOLVER, DEBES CONTINUAR A PIE POR LAS ESCALERAS.";
} else {
    transportDescription.textContent = level.transport;
}

    // Mostrar el sistema financiero únicamente en el Nivel 3

vaultAccess.hidden = currentLevel !== 2;

if (currentLevel === 2) {

    vaultScanButton.disabled = false;

    vaultScanButton.textContent =
        "INICIAR RECONOCIMIENTO";

    vaultScanStatus.textContent =
        "ESCÁNER EN ESPERA";

    vaultScanner.classList.remove("scanning", "verified");

    vaultBalance.hidden = true;

}

if (currentLevel === 5) {

    nextLevelButton.textContent = "ACCESO AL NIVEL 7 RESTRINGIDO";
    nextLevelButton.disabled = true;

} else if (returningOnFoot && currentLevel === 3) {

    nextLevelButton.textContent = "REGRESAR AL NIVEL 5 A PIE";

} else if (returningOnFoot) {

    nextLevelButton.textContent = "CONTINUAR A PIE";

} else if (currentLevel === 3) {

    nextLevelButton.textContent = "ACCEDER AL NIVEL 5";

} else {

    nextLevelButton.textContent = "DESCENDER AL SIGUIENTE NIVEL";

}

} // FIN DE LA FUNCIÓN showLevel()


// =============================================
// DESCENDER AL SIGUIENTE NIVEL
// =============================================



nextLevelButton.addEventListener("click", () => {

    // Desde el Nivel 4 se vuelve al desafío del Nivel 5.
    if (currentLevel === 3) {

        sessionStorage.removeItem("nivelVisita");
        sessionStorage.removeItem("regresoNivel5");

        window.location.href = "nivel5.html";
        return;
    }

    // El visitante no puede continuar hacia el Nivel 7.
    if (currentLevel >= 5) {
        return;
    }

    // Avanzar al siguiente nivel.
    if (currentLevel < undergroundLevels.length - 1) {

        currentLevel++;

        showLevel();

        explorationSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});




/* =============================================
   ACCESO A NIVELES DESDE EL NIVEL 5
============================================= */

const undergroundParams = new URLSearchParams(window.location.search);

const requestedVisit = Number(undergroundParams.get("visita"));
const requestedContinuation = undergroundParams.get("continuar");

const hasUndergroundAccess =
    sessionStorage.getItem("accesoSubterraneo") === "true";


if (hasUndergroundAccess) {

    // =========================================
    // VISITAR LOS NIVELES 1, 2, 3 O 4
    // DESDE EL ASCENSOR B
    // =========================================

    if (
        requestedVisit >= 1 &&
        requestedVisit <= 4 &&
        sessionStorage.getItem("regresoNivel5") === "true"
    ) {

        accessScreen.hidden = true;
        verificationSection.hidden = true;
        unknownWarning.hidden = true;
        armyTerminalSection.hidden = true;

        explorationSection.hidden = false;

        currentLevel = requestedVisit - 1;

        showLevel();
    }


    // =========================================
    // ACCESO AL NIVEL 6
    // DESDE LA TERMINAL DE SEGURIDAD
    // =========================================

    if (requestedContinuation === "6") {

        // Comprobar que el visitante ha leído
        // la terminal y ha pulsado el botón.
        if (
            sessionStorage.getItem("nivel5Completado") !== "true"
        ) {

            window.location.href = "nivel5.html?terminal=1";

        } else {

            accessScreen.hidden = true;
            verificationSection.hidden = true;
            unknownWarning.hidden = true;
            armyTerminalSection.hidden = true;

            explorationSection.hidden = false;

            currentLevel = 5;

            showLevel();

        }
    }

}
