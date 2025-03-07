function mostrarMensaje() {
    const nombre = document.getElementById('nombre').value; 
    const edad = document.getElementById('edad').value;
    const lenguaje = document.getElementById('lenguaje').value;

    if (!nombre || !edad || !lenguaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (edad < 0) {
        alert("La edad no puede ser negativa.");
    } else {
        alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
        
        let respuesta;
        do {
            respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
            if (respuesta === '1') {
                alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
            } else if (respuesta === '2') {
                alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            } else {
                alert("Respuesta no válida. Por favor, responde con el número 1 para SÍ o 2 para NO.");
            }
        } while (respuesta !== '1' && respuesta !== '2');
    }
}