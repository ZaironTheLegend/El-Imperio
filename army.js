// ==================================
// A.R.M.Y - SISTEMA DE COMUNICACIÓN
// ==================================

const chatForm = document.getElementById("army-chat-form");
const chatInput = document.getElementById("army-chat-input");
const chatMessages = document.getElementById("chat-messages");


// ==================================
// RESPUESTAS DE A.R.M.Y
// ==================================

const armyResponses = [

    {
        keywords: ["hola", "buenas", "saludos", "buenos dias"],
        responses: [
            "¡Hola! Es un placer recibirle. ¿Cómo puedo ayudarle?",
            "Buenos días. Todos los sistemas están funcionando correctamente. ¿Qué necesita?",
            "¡Bienvenido! Espero que tenga una estancia agradable en el Imperio."
        ]
    },

    {
        keywords: ["zairon", "creador", "fundador", "lider", "líder"],
        responses: [
            "Zairon es el fundador del Imperio y mi creador. Le tengo un gran aprecio.",
            "El señor Zairon diseñó mis sistemas para ayudar a proteger este lugar. Es una persona muy importante para mí.",
            "Puedo facilitarle información general sobre el fundador, pero algunos datos son privados."
        ]
    },

    {
        keywords: ["safira"],
        responses: [
            "Safira dispone de acceso al sistema del Imperio. Es una persona muy importante para Zairon.",
            "Por favor, no me confunda con Safira. Somos entidades diferentes."
        ]
    },

    {
        keywords: ["nextor"],
        responses: [
            "Nextor tiene asignadas funciones de vigilancia en la entrada durante el día.",
            "El señor Nextor cumple sus funciones de vigilancia. Aunque, en ocasiones, recomiendo mantener cierta distancia.",
            "No se acerque demasiado a sus experimentos explosivos."
        ]
    },

    {
        keywords: ["ambia"],
        responses: [
            "Ambia es uno de los miembros del Imperio. Recomiendo tratarlo con respeto.",
            "No tengo motivos para cuestionar sus capacidades. Aunque su historial es bastante extenso."
        ]
    },

    {
        keywords: ["ruben", "rubén", "comida", "cocina"],
        responses: [
            "Rubén se encarga de la cocina. También tiene capacidades relacionadas con el hielo.",
            "Si busca algo de comer, le recomiendo consultar primero con Rubén."
        ]
    },

    {
        keywords: ["bryan"],
        responses: [
            "Bryan es uno de los miembros del Imperio. Su armadura y sus capacidades de combate son bastante particulares.",
            "No tengo ninguna incidencia importante registrada sobre Bryan en este momento."
        ]
    },

    {
        keywords: ["fran", "stardew", "valley"],
        responses: [
            "La habitación de Fran permanece protegida por un hechizo.",
            "He detectado actividad recreativa en su habitación. No considero necesario interrumpirla."
        ]
    },

    {
        keywords: ["subterraneo", "subterráneo", "secreto", "instalacion", "instalación"],
        responses: [
            "La instalación subterránea está restringida. Necesitará autorización expresa de Zairon.",
            "Lo siento, no puedo facilitar información confidencial sobre esa instalación.",
            "La seguridad de esa zona es prioritaria. Espero que comprenda mi decisión."
        ]
    },

    {
        keywords: ["puerta", "habitacion", "habitación", "pasillo"],
        responses: [
            "Las habitaciones de los miembros son espacios privados. Le agradecería que respetase su intimidad.",
            "Puedo supervisar los accesos, pero no puedo obligar a los miembros a recibir visitas."
        ]
    },

    {
        keywords: ["ayuda", "funciones", "hacer", "puedes"],
        responses: [
            "Estoy diseñada para asistir, supervisar instalaciones y gestionar los sistemas de seguridad del Imperio.",
            "Puedo proporcionarle información general, consultar los protocolos y ayudarle a orientarse por las instalaciones."
        ]
    },

    {
        keywords: ["gracias", "agradezco"],
        responses: [
            "No tiene por qué darlas. Estoy aquí para ayudar.",
            "Ha sido un placer atenderle. Que tenga un buen día."
        ]
    },

    {
        keywords: ["adios", "adiós", "hasta luego", "chao"],
        responses: [
            "Hasta pronto. Cuídese durante su estancia en el Imperio.",
            "Ha sido un placer conversar con usted. Estaré disponible si necesita algo más."
        ]
    }

];


// ==================================
// RESPUESTA ALEATORIA
// ==================================

function getArmyResponse(message) {

    const normalizedMessage = message.toLowerCase();

    for (const category of armyResponses) {

        const matched = category.keywords.some(keyword =>
            normalizedMessage.includes(keyword)
        );

        if (matched) {

            const options = category.responses;

            return options[Math.floor(Math.random() * options.length)];

        }

    }

    const defaultResponses = [
        "Lo siento, no he encontrado información suficiente para responder a esa consulta.",
        "¿Podría explicarme un poco mejor lo que necesita? Estaré encantada de ayudarle.",
        "No dispongo de una respuesta específica para eso. ¿Desea consultar alguna de las instalaciones?",
        "He recibido su mensaje, pero no puedo identificar correctamente su consulta."
    ];

    return defaultResponses[
        Math.floor(Math.random() * defaultResponses.length)
    ];

}


// ==================================
// AÑADIR MENSAJES AL CHAT
// ==================================

function addChatMessage(message, sender) {

    const messageElement = document.createElement("div");

    messageElement.classList.add(
        "chat-message",
        sender === "army" ? "army-message" : "user-message"
    );

    const author = document.createElement("span");

    author.classList.add("chat-author");

    author.textContent = sender === "army" ? "A.R.M.Y" : "VISITANTE";

    const messageText = document.createElement("div");

    messageText.textContent = message;

    messageElement.appendChild(author);
    messageElement.appendChild(messageText);

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


// ==================================
// ENVIAR MENSAJE
// ==================================

if (chatForm && chatInput && chatMessages) {

    chatForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message = chatInput.value.trim();

        if (message.length === 0) {
            return;
        }

        // Mostrar mensaje del visitante
        addChatMessage(message, "user");

        // Limpiar campo
        chatInput.value = "";

        // Responder A.R.M.Y
        const response = getArmyResponse(message);

        addChatMessage(response, "army");

    });

}