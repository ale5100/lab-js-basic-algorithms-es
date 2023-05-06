let hacker1 = "Adria";
console.log("El nombre del controlador es " + hacker1);
let hacker2 = "Javi";
console.log("El nombre del navegador es " + hacker2);
if (hacker1.length > hacker2.length) {
  console.log(`El controlador tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`El navegador tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} else {
  console.log("Los nombres tienen la misma longitud.");
}
let nombreConductor = "";
for (let i = 0; i < hacker1.length; i++) {
  nombreConductor += hacker1[i].toUpperCase() + " ";
}
console.log(nombreConductor);

let nombreNavegador = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  nombreNavegador += hacker2[i];
}
console.log(nombreNavegador);

if (hacker1 < hacker2) {
  console.log("El nombre del conductor va primero.");
} else if (hacker1 > hacker2) {
  console.log("Yo, el navegador va primero definitivamente.");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}
