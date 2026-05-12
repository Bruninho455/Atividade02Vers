// monitoramento.js
const temp = 105;
const LIMITE = 100;
console.log(`Temperatura: ${temp}°C`);
if (temp > LIMITE) {
console.log("ALERTA: LIMITE EXCEDIDO!");
} else {
console.log("Sistema normal.");
}