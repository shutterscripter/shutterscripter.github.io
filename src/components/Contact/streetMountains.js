// Himalayan ridges for the footer scene: a far range of solid rock with solid snow
// caps, and a nearer, lower, darker ridge that overlaps it. Static, seeded so the
// skyline is the same on every load, and outside the ink filter like any sky layer.
// Colours come from --scene-rock-far, --scene-rock-near and --scene-snow in index.css.
import { el, pen } from "../../lib/line-art/ink.ts";
import { seeded } from "../../lib/line-art/motion.ts";

const n1 = (v) => v.toFixed(1);
const at = (p) => `${n1(p[0])} ${n1(p[1])}`;
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const bez = (a, c, b, t) => mix(mix(a, c, t), mix(c, b, t), t);

/** Redraw the mountains into `g` for a strip `W` wide whose ground line is at `ground`. */
export function drawMountains(g, W, ground, sp) {
  g.replaceChildren();
  range(g, seeded(41), W, ground, sp, { every: 210, low: 76, high: 128, snow: 80, rock: "var(--scene-rock-far)" });
  range(g, seeded(7), W, ground, sp, { every: 150, low: 30, high: 58, snow: Infinity, rock: "var(--scene-rock-near)" });
}

function range(g, r, W, ground, sp, { every, low, high, snow, rock }) {
  const n = Math.max(2, Math.round(W / every));
  const peaks = Array.from({ length: n }, (_, i) => ({ x: ((i + 0.5 + r(-0.3, 0.3)) * W) / n, h: r(low, high) }));
  // valleys between the peaks, plus one off each edge
  const valleys = [[-40, ground - low * r(0.3, 0.5)]];
  for (let i = 1; i < n; i++) {
    const a = peaks[i - 1], b = peaks[i];
    valleys.push([a.x + (b.x - a.x) * r(0.4, 0.6), ground - Math.min(a.h, b.h) * r(0.36, 0.6)]);
  }
  valleys.push([W + 40, ground - low * r(0.3, 0.5)]);

  // Each slope sags (concave) and has a shoulder part-way up, so summits stay sharp.
  const sag = (a, b, amount) => { const m = mix(a, b, 0.5); return [m[0], m[1] + amount]; };
  let outline = `M${at(valleys[0])}`, spines = "";
  const caps = [];
  peaks.forEach((peak, i) => {
    const top = [peak.x, ground - peak.h];
    const left = valleys[i], right = valleys[i + 1];
    const upShoulder = mix(left, top, r(0.45, 0.68)), downShoulder = mix(top, right, r(0.32, 0.55));
    upShoulder[1] += r(2, 6); downShoulder[1] += r(2, 6);
    const c1 = sag(left, upShoulder, r(1, 4)), c2 = sag(upShoulder, top, r(1, 3));
    const c3 = sag(top, downShoulder, r(1, 3)), c4 = sag(downShoulder, right, r(1, 4));
    outline += `Q${at(c1)} ${at(upShoulder)}Q${at(c2)} ${at(top)}Q${at(c3)} ${at(downShoulder)}Q${at(c4)} ${at(right)}`;

    // a spine running down from the summit, and a couple of strokes on its shaded side
    const bend = [top[0] + 3, top[1] + peak.h * 0.28], foot = [top[0] + r(4, 10), top[1] + peak.h * r(0.42, 0.6)];
    spines += `M${at(top)}Q${at(bend)} ${at(foot)}`;
    for (const t of [0.42, 0.7]) spines += `M${at(bez(top, bend, foot, t))}l${n1(r(5, 9))} ${n1(r(6, 11))}`;

    // snow cap: the summit down to a jagged edge between the two slopes
    if (peak.h > snow) {
      const ta = r(0.4, 0.56), tb = r(0.44, 0.6);
      const a = bez(upShoulder, c2, top, ta), b = bez(top, c3, downShoulder, tb);
      let cap = `M${at(a)}`;
      for (let k = 1; k <= 5; k++) cap += `L${at(bez(upShoulder, c2, top, ta + ((1 - ta) * k) / 5))}`;
      for (let k = 1; k <= 5; k++) cap += `L${at(bez(top, c3, downShoulder, (tb * k) / 5))}`;
      for (let k = 4; k >= 1; k--) {
        const p = mix(a, b, k / 5);
        cap += `L${n1(p[0])} ${n1(p[1] + (k % 2 ? r(4, 8) : r(-3, -1)))}`;
      }
      caps.push(cap + "Z");
    }
  });

  const rockFill = el("path", { d: `${outline}L${W + 40} ${ground}L-40 ${ground}Z` }, g);
  rockFill.style.fill = rock;
  const lines = el("g", { opacity: 0.5 }, g);
  pen(lines, sp * 0.5).setAttribute("d", spines);
  if (caps.length) {
    const snowFill = el("path", { d: caps.join("") }, g);
    snowFill.style.fill = "var(--scene-snow)";
  }
  pen(el("g", { opacity: 0.55 }, g), sp * 0.7).setAttribute("d", outline);
}
