/* Lembar B & C - Perakit aplikasi dengan render(state) */
import { profil, buatPerkenalan, formatKeahlian } from "./data.js";
import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

render(state);
pasangPendengar();

// Didaftarkan ke window untuk pengujian console.log(state) dan render(state) di Console
window.state = state;
window.render = render;