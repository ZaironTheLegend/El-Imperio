
// =====================================
// TORRE DEL NIGROMANTE
// REGISTRO DE INCIDENTES
// =====================================

const incidentList = document.getElementById("incidentList");

let incidentNumber = 5;

function addIncident(message) {

    const entry = document.createElement("div");

    entry.classList.add("incident-entry");

    const number = String(incidentNumber).padStart(3, "0");

    const label = document.createElement("span");
    label.textContent = `[${number}]`;

    const description = document.createElement("p");
    description.textContent = message;

    entry.appendChild(label);
    entry.appendChild(description);

    incidentList.appendChild(entry);

    incidentNumber++;

}

// Función disponible para futuras interacciones.
window.addTowerIncident = addIncident;
