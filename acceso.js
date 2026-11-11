
/* =====================================
   EL IMPERIO - SISTEMA DE PERFILES
===================================== */

// PERFILES Y CONTRASEÑAS

const perfiles = {

    ambia: {
        nombre: "Ambia",
        contraseña: "BlackFlash134",
        color: "#b83232"
    },

    ruben: {
        nombre: "Rubén",
        contraseña: "Permafrost",
        color: "#3285d5"
    },

    matias: {
        nombre: "Matias",
        contraseña: "Necromante",
        color: "#9254c8"
    },

    bryan: {
        nombre: "Bryan",
        contraseña: "HonorEterno",
        color: "#c6a34a"
    },

    fran: {
        nombre: "Fran",
        contraseña: "RosaNocturna",
        color: "#ed9abf"
    },

    zairon: {
        nombre: "Zairon",
        contraseña: "ElementalRequiem",
        color: "#35c9d8"
    },

    nextor: {
        nombre: "Nextor",
        contraseña: "FoxExplosion",
        color: "#48a85a"
    },

    invitado: {
        nombre: "Invitado",
        contraseña: "Bienvenido",
        color: "#c6a15b"
    }

};

const SESSION_KEY = "imperioPerfilActivo";


// =====================================
// COMPROBAR SI ESTAMOS EN ACCESO
// =====================================

const accessForm = document.getElementById("accessForm");


// =====================================
// APLICAR EL COLOR DEL PERFIL
// =====================================

function aplicarPerfil(perfilId) {

    const perfil = perfiles[perfilId];

    if (!perfil) return;

    const root = document.documentElement;

    root.style.setProperty("--gold", perfil.color);
    root.style.setProperty("--gold-light", perfil.color);
    root.style.setProperty("--profile-color", perfil.color);
    root.style.setProperty(
    "--profile-border",
    hexToRgba(perfil.color, 0.3)
);

root.style.setProperty(
    "--profile-footer-border",
    hexToRgba(perfil.color, 0.15)
);

root.style.setProperty(
    "--profile-glow",
    hexToRgba(perfil.color, 0.025)
);

    root.style.setProperty(
        "--border",
        hexToRgba(perfil.color, 0.25)
    );

    document.body.dataset.perfil = perfilId;

}


// Convierte HEX a RGBA para los bordes.

function hexToRgba(hex, opacity) {

    const cleanHex = hex.replace("#", "");

    const red = parseInt(cleanHex.substring(0, 2), 16);
    const green = parseInt(cleanHex.substring(2, 4), 16);
    const blue = parseInt(cleanHex.substring(4, 6), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;

}


// =====================================
// PANTALLA DE ACCESO
// =====================================

if (accessForm) {

        const profileSelect = document.getElementById("profileSelect");

    // Cambiar el color al seleccionar un perfil.

    profileSelect.addEventListener("change", () => {

        const selectedProfile = profileSelect.value;

        if (perfiles[selectedProfile]) {
            aplicarPerfil(selectedProfile);
        } else {

    const root = document.documentElement;

    root.style.setProperty("--profile-color", "#c6a15b");
    root.style.setProperty(
        "--profile-border",
        "rgba(198, 161, 91, 0.3)"
    );
    root.style.setProperty(
        "--profile-footer-border",
        "rgba(198, 161, 91, 0.15)"
    );
    root.style.setProperty(
        "--profile-glow",
        "rgba(198, 161, 91, 0.025)"
    );

}

    });

    const activeProfile = sessionStorage.getItem(SESSION_KEY);

    // Si ya existe una sesión, no volver a pedir
    // identificación al cambiar de página.

    if (perfiles[activeProfile]) {
        window.location.replace("index.html");
    }

    accessForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const profileId =
            document.getElementById("profileSelect").value;

        const password =
            document.getElementById("accessPassword").value;

        const feedback =
            document.getElementById("accessFeedback");

        const perfil = perfiles[profileId];

        if (!perfil || perfil.contraseña !== password) {

            feedback.textContent =
                "IDENTIFICACIÓN RECHAZADA. COMPRUEBE SUS CREDENCIALES.";

            feedback.className = "access-feedback error";

            document.getElementById("accessPassword").value = "";

            return;

        }

        sessionStorage.setItem(SESSION_KEY, profileId);

        feedback.textContent =
            `IDENTIDAD CONFIRMADA. BIENVENIDO, ${perfil.nombre.toUpperCase()}.`;

        feedback.className = "access-feedback success";

        window.location.replace("index.html");

    });

}


// =====================================
// PROTECCIÓN DE LAS PÁGINAS
// =====================================

else {

    const activeProfile = sessionStorage.getItem(SESSION_KEY);

    if (!perfiles[activeProfile]) {

        window.location.replace("acceso.html");

    } else {

        aplicarPerfil(activeProfile);

        // BOTÓN PARA CERRAR SESIÓN

        const logoutButton = document.createElement("button");

        logoutButton.textContent = "CERRAR SESIÓN";

        logoutButton.className = "profile-logout";

        logoutButton.type = "button";

        logoutButton.addEventListener("click", () => {

            sessionStorage.removeItem(SESSION_KEY);

            window.location.replace("acceso.html");

        });

        document.body.appendChild(logoutButton);

    }

}
