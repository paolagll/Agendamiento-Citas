
function agregarCita() {
   
    const nombre = document.getElementById("nombre").value;
    const fechaHora = document.getElementById("fechaHora").value;

    const nuevaCita = document.createElement("div");
    nuevaCita.className = "card";
    nuevaCita.innerHTML = `
        <h2>${nombre}</h2>
        <p>Fecha y Hora: ${fechaHora}</p>
    `;

    const listaCitas = document.getElementById("listaCitas");
    listaCitas.appendChild(nuevaCita);

    document.getElementById("nombre").value = "";
    document.getElementById("fechaHora").value = "";
}
