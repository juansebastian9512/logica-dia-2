let citas = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
    "La mejor manera de predecir el futuro es inventarlo. - Alan Kay"
];

function generarCitaAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * citas.length);
    return citas[indiceAleatorio];
}

document.getElementById('nueva-cita').addEventListener('click', function() {
    const citaAleatoria = generarCitaAleatoria();
    document.getElementById('citas').innerText = citaAleatoria;
    console.log(citaAleatoria);
});