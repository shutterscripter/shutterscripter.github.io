// A Royal Enfield Himalayan 450 for the footer scene, seen from its right side and
// facing +x. Returns the group and its two wheels so the caller can roll them. Drawn in scene pixels around the rear tyre's contact point
// (0, 0), y up-negative, at the walker's scale: 1 px ≈ 1.7 cm, so the wheelbase is
// 88.5, the front wheel is the 21" and the rear the 17".
import { el, pen, shape, blot, paint, PAPER } from "../../lib/line-art/ink.ts";

export const REAR = [0, -19.2];
export const FRONT = [88.5, -20.4];
export const REAR_R = 19.2, FRONT_R = 20.4;
const TAU = Math.PI * 2;
const n2 = (v) => v.toFixed(2);

export function drawMotorcycle(parent, sp) {
  let g = el("g", {}, parent);
  const root = g;
  const P = (d, w = 1) => { const n = pen(g, sp * w); n.setAttribute("d", d); return n; };
  const S = (d, w = 1) => { const n = shape(g, sp * w); n.setAttribute("d", d); return n; };
  const B = (d) => blot(g).setAttribute("d", d);
  const ring = (c, r, w, fill = "none") => el("circle", { cx: c[0], cy: c[1], r, fill, stroke: "currentColor", "stroke-width": sp * w }, g);
  // a pipe: an ink stroke with a paper-coloured stroke inside it (.ps in index.css)
  const tube = (d, width) => {
    P(d).setAttribute("stroke-width", width);
    el("path", { d, class: "ps", fill: "none", "stroke-width": width - sp * 1.3, "stroke-linecap": "round", "stroke-linejoin": "round" }, g);
  };

  // spoked wheel with a knobbly tyre; paper inside so it hides what is behind it
  const wheel = (c, R, rim) => {
    ring(c, R, 1, PAPER);
    const main = g;
    const spin = (g = el("g", {}, main)); // tread and spokes turn; P() and ring() draw into it
    let tread = "", spokes = "";
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * TAU, x = Math.cos(a), y = Math.sin(a);
      tread += `M${n2(c[0] + x * (R - 0.7))} ${n2(c[1] + y * (R - 0.7))}L${n2(c[0] + x * (R - 2.5))} ${n2(c[1] + y * (R - 2.5))}`;
    }
    P(tread, 0.4);
    ring(c, rim + 1, 0.55);
    ring(c, rim - 0.4, 0.4);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU, b = a + (i % 2 ? 0.42 : -0.42);
      spokes += `M${n2(c[0] + Math.cos(a) * 2.4)} ${n2(c[1] + Math.sin(a) * 2.4)}L${n2(c[0] + Math.cos(b) * (rim - 0.6))} ${n2(c[1] + Math.sin(b) * (rim - 0.6))}`;
    }
    P(spokes, 0.3);
    g = main;
    return spin;
  };
  const hub = (c) => { ring(c, 2.7, 0.6, PAPER); el("circle", { cx: c[0], cy: c[1], r: 0.9, fill: "currentColor" }, g); };

  const rearSpin = wheel(REAR, REAR_R, 12.9);
  ring(REAR, 7.4, 0.5, PAPER); // rear disc
  ring(REAR, 4.5, 0.35);
  B("M-4.4 -27.8 L1.2 -28.6 L1.6 -25.8 L-3.6 -25.2Z"); // caliper
  const frontSpin = wheel(FRONT, FRONT_R, 15.9);
  hub(FRONT);

  // low front mudguard, hugging the tyre
  S("M69.97 -31.1 A21.4 21.4 0 0 1 105.36 -33.58 L107.1 -34.93 A23.6 23.6 0 0 0 68.06 -32.2Z", 0.7);

  S("M31 -25.4 L1.6 -21.8 Q-2.6 -19.2 1.6 -16.6 L31 -19Z"); // swingarm
  hub(REAR);

  // tail: mudguard, number plate, cowl, lamp
  P("M-5.6 -45.6 Q-12.6 -42.4 -15.6 -33.6", 0.9);
  S("M-13.4 -36.6 L-17.8 -35 L-16.8 -29.2 L-12.4 -30.8Z", 0.6);
  S("M22 -47.4 L-3.6 -50.6 Q-9.4 -50.4 -9.8 -47.2 L-3 -44.6 L21 -42.8Z");
  B("M-9.9 -48.6 L-12.2 -48.2 L-12 -46.4 L-9.7 -46.6Z");

  // engine: crankcase, cylinder, head, radiator, covers
  S("M33.4 -30.6 L57.4 -30.6 Q60.6 -29.6 60 -24.6 L58.6 -17 Q57.6 -14.4 54 -14.4 L37.4 -14.4 Q33.8 -14.8 33.4 -18.6Z");
  S("M44.4 -30.6 L45.8 -43 L56.6 -44 L57.6 -30.6Z");
  P("M45.4 -38.6 L57 -39.6 M45 -34.4 L57.3 -35", 0.4);
  S("M45.8 -43 Q46.2 -47 50 -47.6 L55 -47.4 Q57.5 -46.8 56.6 -44Z");
  S("M60 -45.4 L63.6 -44.4 L62.2 -31.4 L58.8 -32.4Z", 0.7);
  P("M60.2 -42 L63 -41.2 M59.8 -38.6 L62.6 -37.8 M59.4 -35.2 L62.3 -34.4", 0.35);
  ring([43, -22], 6.4, 0.6, PAPER);
  ring([43, -22], 4, 0.4);
  ring([53.4, -20.4], 2.8, 0.5, PAPER);

  // frame: main spar, pivot plate, subframe strut, pillion peg
  tube("M62.4 -50 L34.6 -32.4", 3);
  S("M28.6 -32 L35 -32.4 L35.6 -19 L29.6 -18Z", 0.8);
  ring([31.8, -22.4], 1.3, 0.4);
  tube("M30.6 -30.4 L4.6 -45.8", 2.4);
  P("M18.4 -37.6 L15 -28.4", 0.6);
  B("M12.6 -29.2 L17 -28.6 L17 -27.2 L12.6 -27.8Z");

  S("M61.6 -30.4 Q63.4 -19 57.6 -13.4 L37 -12.6 L37.4 -14.6 L56.2 -15.2 Q60.2 -19.4 59.6 -30.4Z", 0.7); // bash plate

  // exhaust: header down the front of the engine, stubby upswept silencer
  tube("M55.8 -42.2 Q61 -42.6 61.2 -36 L59.8 -23 Q58.8 -17 53 -16.2 L36 -15.6 L31.6 -17", 2.8);
  S("M32.9 -19.7 L10.9 -32.7 Q4.9 -31.9 7.1 -26.3 L29.1 -13.3 Q33.8 -14.9 32.9 -19.7Z");
  P("M28.6 -18.6 L14.6 -26.9 M13.5 -31.2 L9.7 -24.8", 0.45);

  // upside-down fork: thin lower leg, fat upper tube, steering head
  tube("M77.6 -41.6 L87.8 -21.8", 2.6);
  tube("M66.8 -62.6 L77.6 -41.6", 4.2);
  S("M63.6 -65.6 L69.2 -64.4 L68.6 -60.6 L63.2 -61.8Z", 0.8);

  S("M69.6 -53.6 Q76 -53.8 83.6 -49.6 Q77 -49.2 70.4 -50.2Z", 0.8); // beak

  // tank in the accent colour, with its filler cap, a stripe and the tubular guard
  const tank = paint(g, "#c96a45", sp);
  tank.setAttribute("d", "M39 -50.6 Q40 -58 48 -60.6 Q57 -63 63.6 -58.6 Q66 -55.6 64.6 -50.4 Q63.4 -47 58 -46.2 L40.6 -45.6 Q38.6 -47 39 -50.6Z");
  tank.style.fill = "var(--scene-accent)";
  P("M52.6 -62.2 L53 -63.5 L56 -63.6 L56.4 -62.4 M43 -53.4 Q52 -57.6 61 -54", 0.45);
  P("M70.5 -59 L59.4 -59.6 Q57 -59.4 57.2 -57 L58 -49.6 Q58.4 -48 60.2 -48 L67.4 -48.4 Q69.4 -48.6 69.8 -50.6Z", 0.8);

  // headlight, flyscreen, instruments
  S("M72.4 -63.2 Q71.6 -71 69.4 -78.4 Q72.8 -76 75.2 -70.6 Q77 -66 77.4 -62.8Z", 0.6);
  ring([74.2, -58], 5.2, 0.9, PAPER);
  ring([74.2, -58], 3.5, 0.4);
  ring([68.4, -67.2], 2.1, 0.6, PAPER);

  // side panel, split seat, luggage rack
  S("M38.8 -45.6 L22.4 -46 L25 -36.4 Q30.4 -34.2 36.8 -36.2Z", 0.8);
  P("M27.4 -41.6 L34.6 -41.4", 0.4);
  B("M39.2 -50.8 Q32 -46 24.4 -49.6 L23 -45.6 L38.8 -45.2Z");
  B("M24.6 -53.6 Q17 -56 8.8 -54.6 L8.2 -50.8 L23.4 -49.6Z");
  S("M10 -55.8 L-8.6 -56.6 L-9 -54.8 L10 -54Z", 0.6);
  P("M-4.4 -54.8 L-3.4 -50.6 M5.6 -54.2 L6.4 -50", 0.5);

  // handlebar, grip, mirror
  P("M65.8 -64.8 L64.4 -70.6 L58.6 -72.6", 0.9);
  P("M60 -72.2 L56.4 -73.4").setAttribute("stroke-width", 2.6);
  P("M62.8 -71.4 Q61.6 -78 59.8 -82.2", 0.5);
  el("ellipse", { cx: 58.8, cy: -84, rx: 3.1, ry: 2.1, transform: "rotate(-18 58.8 -84)", fill: PAPER, stroke: "currentColor", "stroke-width": sp * 0.6 }, g);

  // rider's footpeg and brake pedal
  B("M32 -18.6 L36.6 -18.4 L36.6 -17 L32 -17.2Z");
  P("M36.6 -17.6 L41.4 -16", 0.5);

  return { g: root, wheels: [{ node: rearSpin, c: REAR, r: REAR_R }, { node: frontSpin, c: FRONT, r: FRONT_R }] };
}
