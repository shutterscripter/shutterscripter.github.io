// The line-art strip that stands on the footer's top edge: a rider in full gear
// cruises a Himalayan 450 along a mountain road, now and then looking up at the
// peaks. Click the rider and they wave; moving the pointer is wind in the grass.
// Drawn with the library in src/lib/line-art (MIT, see LICENSE).
//
// Ink is `currentColor` and paper is `--scene-paper` (see .footer-scene in index.css),
// so the drawing follows the site theme. `?debug` in the URL steps time by hand
// through window.__step(seconds); `?t=1.5` freezes it.
import { el, pen, shape, blot, paint, limb, joint, inkDefs, run, f, pt, PEN } from "../../lib/line-art/ink.ts";
import { spring, pointerWind, seeded, wobble, ease, smooth, clamp, lerp } from "../../lib/line-art/motion.ts";
import { drawMotorcycle } from "./streetMotorcycle";
import { drawMountains } from "./streetMountains";

export const SCENE_HEIGHT = 164; // px; one user unit is one CSS pixel
const ROAD = 10; // thickness of road drawn inside the strip; the footer continues it
const GROUND = SCENE_HEIGHT - ROAD; // road surface
const SP = PEN * 1.08; // scene pen
const DEG = 180 / Math.PI;
const SPEED = 92; // px/s, an easy cruise

// Rider, in the bike's own pixels (origin at the rear tyre's contact point, y up-negative).
const HIP = [29.5, -52], PEG = [35, -22.5];
const SHOULDER = [39, -76.5], GRIP = [57.2, -73];
const NECK = [39.6, -80.5]; // helmet pivots here
const HAIL = [50, -103]; // hand at the top of a wave

export function mountStreetScene(container) {
  let W = Math.max(320, Math.round(container.clientWidth));

  const svg = el("svg", {
    height: SCENE_HEIGHT,
    role: "img",
    "aria-label": "Line drawing of a rider in riding gear on an adventure motorcycle, cruising a road beneath snow-capped mountains",
  });
  svg.style.color = "inherit";
  const { defs, filter } = inkDefs(svg, "footer-ink");
  // A roomier filter region than the default, so thin groups (the ground) aren't clipped,
  // and sRGB so the filtered ground is exactly the footer's colour.
  const edge = defs.querySelector("filter");
  Object.entries({ x: "-15%", y: "-15%", width: "130%", height: "130%", "color-interpolation-filters": "sRGB" }).forEach(([k, v]) => edge.setAttribute(k, v));

  // --- far mountains, redrawn to fit the width
  const mountainsG = el("g", {}, svg);

  // Each group below carries the ink filter itself, so only small areas are refiltered per frame.

  // --- road: the footer's top edge, with lane dashes, a milestone and tufts of grass
  const groundG = el("g", { filter }, svg);
  const ground = el("rect", { x: -20, y: GROUND, height: ROAD + 6, fill: "currentColor" }, groundG);
  const dashes = el("path", { class: "ps", fill: "none", "stroke-width": 1.6, "stroke-dasharray": "16 13", "stroke-linecap": "round" }, groundG);
  const grass = pen(groundG, SP * 0.75);
  const stoneG = el("g", {}, groundG);
  shape(stoneG, SP * 0.8).setAttribute("d", "M-5.5 0.5 L-5.5 -9 Q-5.5 -15 0 -15 Q5.5 -15 5.5 -9 L5.5 0.5Z");
  const stoneCap = paint(stoneG, "#c96a45", SP * 0.8);
  stoneCap.setAttribute("d", "M-5.5 -9 Q-5.5 -15 0 -15 Q5.5 -15 5.5 -9Z");
  stoneCap.style.fill = "var(--scene-accent)";
  pen(stoneG, SP * 0.45).setAttribute("d", "M-2.6 -5.6 L2.6 -5.6 M-2.6 -3 L1.4 -3");
  let tufts = [];

  // --- bike and rider, back to front
  const bikeWrap = el("g", { filter }, svg); // unmoved wrapper: the bike rides through the ink wobble
  const rig = el("g", { style: "cursor:pointer" }, bikeWrap);
  el("title", {}, rig).textContent = "Say hi";
  el("rect", { x: -20, y: -100, width: 130, height: 100, fill: "transparent" }, rig); // easy to click
  const farArm = limb(rig, 4, SP);
  const farGlove = blot(rig);
  const { wheels } = drawMotorcycle(rig, SP);
  const riderG = el("g", {}, rig);
  const leg = limb(riderG, 5.6, SP);
  const kneePad = pen(riderG, SP * 0.6);
  const boot = blot(riderG);
  const jacket = shape(riderG, SP);
  const jacketTrim = pen(riderG, SP * 0.5);
  const headG = el("g", {}, riderG);
  const helmet = paint(headG, "#c96a45", SP);
  helmet.setAttribute("d", "M34.6 -84 Q33 -95.6 41.6 -96.6 Q49.6 -97 50.6 -89.4 L50.4 -85 Q48.6 -81.6 44.4 -81.4 L37.4 -81.6 Q35 -82 34.6 -84Z");
  helmet.style.fill = "var(--scene-accent)";
  blot(headG).setAttribute("d", "M43.6 -91.8 Q47.4 -92.6 50.3 -90.6 L50.4 -86.6 Q47 -85.6 44.2 -86.4 Q43 -89 43.6 -91.8Z"); // visor
  pen(headG, SP * 0.5).setAttribute("d", "M35.4 -89.6 Q39 -90.6 43.2 -89.4 M44.6 -83.2 L49.4 -84.4"); // shell line, chin vent
  const nearArm = limb(riderG, 4.2, SP);
  const armPad = pen(riderG, SP * 0.6);
  const glove = blot(riderG);

  function layout() {
    svg.setAttribute("viewBox", `0 0 ${W} ${SCENE_HEIGHT}`);
    ground.setAttribute("width", W + 40);
    dashes.setAttribute("d", `M-10 ${GROUND + 5.2} L${W + 10} ${GROUND + 5.2}`);
    drawMountains(mountainsG, W, GROUND, SP);
    const stoneX = Math.round(clamp(W * 0.78, 120, W - 40));
    stoneG.setAttribute("transform", `translate(${stoneX} ${GROUND})`);
    const r = seeded(23); // same tufts on every load
    const n = Math.max(3, Math.round(W / 170));
    tufts = Array.from({ length: n }, (_, i) => {
      let tx = ((i + 0.5 + r(-0.32, 0.32)) * W) / n;
      if (Math.abs(tx - stoneX) < 16) tx += 28;
      return {
        x: tx,
        o: r(0, 6),
        sway: spring(r(26, 44), r(2.4, 4)),
        blades: Array.from({ length: Math.round(r(3, 5)) }, () => ({ dx: r(-3.5, 3.5), h: r(5, 11), lean: r(-2.2, 2.2) })),
      };
    });
  }
  layout();
  container.appendChild(svg);

  const controller = new AbortController();
  // Wind from pointer movement anywhere on the page; the signal removes the listener on unmount.
  const wind = pointerWind({ addEventListener: (type, fn) => window.addEventListener(type, fn, { passive: true, signal: controller.signal }) }, 0.25);
  const settle = spring(70, 9); // rider's body lags the bike over bumps
  let x = W * 0.18, rolled = 0, waveT = -1, gazeT = 3;

  rig.addEventListener("pointerdown", () => { if (waveT < 0) waveT = 0; }, { signal: controller.signal });

  const draw = (t, dt) => {
    wind.step(t);
    const w = wind.value;

    // grass leans with the wind, and is pushed over as the bike goes by
    let blades = "";
    for (const tuft of tufts) {
      const wake = Math.exp(-(((tuft.x - x - 30) / 60) ** 2)) * 4;
      const s = tuft.sway.step(w * 2.4 + wake + wobble(t * 0.8 + tuft.o) * 0.7, dt);
      for (const b of tuft.blades) {
        const bx = tuft.x + b.dx, k = b.h / 8;
        blades += `M${f(bx)} ${GROUND + 1}Q${f(bx + b.lean * 0.3 + s * k * 0.3)} ${f(GROUND - b.h * 0.55)} ${f(bx + b.lean + s * k)} ${f(GROUND - b.h)}`;
      }
    }
    grass.setAttribute("d", blades);

    // ride: wheels roll without slipping, the suspension breathes over the road
    x += SPEED * dt;
    rolled += SPEED * dt;
    if (x > W + 40) x = -130;
    const bump = wobble(t * 2.3) * 0.7, pitch = wobble(t * 1.7 + 2) * 0.5;
    rig.setAttribute("transform", `translate(${f(x)} ${f(GROUND + bump * 0.4)}) rotate(${f(pitch)} 44 -20)`);
    for (const wheel of wheels) wheel.node.setAttribute("transform", `rotate(${f((rolled / wheel.r) * DEG)} ${pt(wheel.c)})`);

    // the wave: lift the throttle hand high, shake it, back to the bar
    let raise = 0, shake = 0;
    if (waveT >= 0) {
      waveT += dt;
      raise = waveT < 0.45 ? ease(waveT / 0.45) : waveT < 1.9 ? 1 : 1 - ease((waveT - 1.9) / 0.5);
      shake = Math.sin((waveT - 0.45) * Math.PI * 4.6) * 4 * smooth(0.45, 0.7, waveT) * (1 - smooth(1.7, 1.95, waveT));
      if (waveT > 2.4) waveT = -1;
    }

    // every so often the rider looks up at the peaks for a while
    gazeT += dt;
    if (gazeT > 9) gazeT = 0;
    const gaze = smooth(4.2, 5.2, gazeT) * (1 - smooth(7.6, 8.6, gazeT));

    // body: settles over bumps, leans back a touch while looking up
    const sit = settle.step(bump * 1.6, dt), lean = -3 * gaze;
    const seat = `translate(0 ${f(sit)}) rotate(${f(lean)} ${pt(HIP)})`;
    riderG.setAttribute("transform", seat);
    const knee = joint(HIP, PEG, 20, 22, 1);
    leg.draw([HIP, knee, PEG], [0.2, 0.3]);
    kneePad.setAttribute("d", `M${f(knee[0] - 1.6)} ${f(knee[1] - 4.4)} Q${f(knee[0] + 4.6)} ${f(knee[1] - 2.4)} ${f(knee[0] + 2.4)} ${f(knee[1] + 4)}`);
    boot.setAttribute("d", `M${f(PEG[0] - 3.6)} ${f(PEG[1] - 8)} L${f(PEG[0] + 2.6)} ${f(PEG[1] - 8)} L${f(PEG[0] + 3)} ${f(PEG[1] - 1.6)} L${f(PEG[0] + 9.4)} ${f(PEG[1] + 1)} Q${f(PEG[0] + 10.6)} ${f(PEG[1] + 4.2)} ${f(PEG[0] + 8)} ${f(PEG[1] + 4.4)} L${f(PEG[0] - 3.8)} ${f(PEG[1] + 4.2)}Z`);
    jacket.setAttribute("d", "M35.6 -81 Q30.6 -79.4 28.6 -72 Q25.4 -62 24 -51.6 Q23.6 -48.6 26.4 -48.2 L36.4 -48.6 Q39.6 -55 41.6 -63 Q43.6 -71.6 43 -77.6 Q42 -81 39.6 -81.6Z");
    jacketTrim.setAttribute("d", "M25.4 -54 L37.6 -53.6 M30.6 -77 Q33 -68 30.4 -58.6 M36.4 -80.6 L41.6 -79.4");
    headG.setAttribute("transform", `rotate(${f(-16 * gaze + shake * 0.4)} ${pt(NECK)})`);

    // arms: elbows drop below the line from shoulder to hand
    const hand = [lerp(GRIP[0], HAIL[0], raise) + shake, lerp(GRIP[1], HAIL[1], raise)];
    reach(nearArm, glove, SHOULDER, hand, armPad);
    reach(farArm, farGlove, [SHOULDER[0] + 1.6, SHOULDER[1] + 0.8], [GRIP[0] + 1.4, GRIP[1] + 0.6]);
    farArm.g.setAttribute("transform", seat);
    farGlove.setAttribute("transform", seat);
  };

  // Only animate while the strip is on screen.
  let halt = null;
  const seen = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) halt ??= run(draw);
    else if (halt) { halt(); halt = null; }
  }, { rootMargin: "100px 0px" });
  seen.observe(container);

  const resized = new ResizeObserver(() => {
    const width = Math.round(container.clientWidth);
    if (width && width !== W) { W = width; layout(); }
  });
  resized.observe(container);

  return () => {
    halt?.();
    seen.disconnect();
    resized.disconnect();
    controller.abort();
    svg.remove();
  };
}

/** Draw an arm from shoulder to hand with the elbow hanging low, and a glove on the hand. */
function reach(limbNode, gloveNode, shoulder, hand, pad) {
  const span = Math.hypot(hand[0] - shoulder[0], hand[1] - shoulder[1]);
  const half = Math.max(13.5, span / 2 + 0.5);
  const a = joint(shoulder, hand, half, half, 1), b = joint(shoulder, hand, half, half, -1);
  const elbow = a[1] > b[1] ? a : b;
  limbNode.draw([shoulder, elbow, hand], [0.2, 0.2]);
  const dx = hand[0] - elbow[0], dy = hand[1] - elbow[1], l = Math.hypot(dx, dy) || 1;
  const ux = dx / l, uy = dy / l;
  const at = (along, across) => `${f(hand[0] + ux * along - uy * across)} ${f(hand[1] + uy * along + ux * across)}`;
  gloveNode.setAttribute("d", `M${at(-2.4, -2.7)} L${at(2.6, -2.5)} Q${at(4.6, 0)} ${at(2.6, 2.5)} L${at(-2.4, 2.7)}Z`);
  if (pad) pad.setAttribute("d", `M${f(elbow[0] - 2.6)} ${f(elbow[1] - 1.4)} Q${f(elbow[0] - 0.6)} ${f(elbow[1] + 3.4)} ${f(elbow[0] + 3)} ${f(elbow[1] + 1)}`);
}
