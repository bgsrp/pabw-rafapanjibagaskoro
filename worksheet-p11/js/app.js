/* Lembar B.3 - Perakit: hanya berisi import dan pemanggilan */
import { profil, buatPerkenalan, formatKeahlian } from "./data.js";
import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

render(state.daftarPenampilan);
pasangPendengar();