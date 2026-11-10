
/* =====================================
   PANTALLA DE MUERTE
===================================== */

const deathTitle = document.getElementById("death-title");
const deathDescription = document.getElementById("death-description");
const deathRecord = document.getElementById("death-record");
const retryButton = document.getElementById("retry-button");

const parameters = new URLSearchParams(window.location.search);
const deathCause = parameters.get("causa");


/* =====================================
   MOTIVO DE LA MUERTE
===================================== */

if (deathCause === "ascensor") {

    deathTitle.textContent = "ENTIDAD IDENTIFICADA";

    deathDescription.textContent =
        "Seleccionaste un destino dentro de un ascensor que no debía existir. La entidad reveló su verdadera naturaleza. No hubo posibilidad de escapar.";

    deathRecord.textContent =
        "REGISTRO: El visitante ha sido eliminado tras seleccionar un nivel en el Ascensor A. La entidad ha sido identificada como una de las guardianas del Nivel 5.";

} else if (deathCause === "zorro") {

    deathTitle.textContent = "VISITANTE ELIMINADO";

    deathDescription.textContent =
        "Intentaste correr por el pasillo. La entidad detectó tu movimiento y te alcanzó antes de que pudieras escapar.";

    deathRecord.textContent =
        "REGISTRO: El visitante ha sido eliminado tras intentar huir de la entidad con apariencia de zorro robótico.";

} else {

    deathTitle.textContent = "INCIDENTE DESCONOCIDO";

    deathDescription.textContent =
        "No se ha podido determinar la causa del incidente.";

    deathRecord.textContent =
        "REGISTRO: Causa de eliminación no identificada.";
}


/* =====================================
   VOLVER A INTENTARLO
===================================== */

retryButton.addEventListener("click", () => {
    window.location.href = "nivel5.html";
});
