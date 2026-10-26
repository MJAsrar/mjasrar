// Particle targets, one per section. Every generator returns N points as
// interleaved x, y, z, centred on the origin and roughly 4.4 units across.

export type ShapeKey = "scatter" | "sphere" | "wave" | "graph" | "clusters" | "initials" | "helix" | "ring";
export type Shapes = Record<ShapeKey, Float32Array>;

// Seeded so the field looks the same on every visit.
export function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Rng = () => number;

function gauss(r: Rng) {
  const u = Math.max(r(), 1e-9);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r());
}

// Uniform point inside a ball.
function ball(r: Rng, radius: number): [number, number, number] {
  const theta = r() * Math.PI * 2;
  const phi = Math.acos(2 * r() - 1);
  const rr = radius * Math.cbrt(r());
  return [rr * Math.sin(phi) * Math.cos(theta), rr * Math.cos(phi), rr * Math.sin(phi) * Math.sin(theta)];
}

function make(n: number, fill: (i: number, out: Float32Array, o: number) => void) {
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) fill(i, out, i * 3);
  return out;
}

function scatter(n: number) {
  const r = rand(3);
  return make(n, (_, out, o) => out.set(ball(r, 9), o));
}

function sphere(n: number) {
  const r = rand(7);
  const R = 2.05;
  const shell = Math.floor(n * 0.82);
  const golden = Math.PI * (3 - Math.sqrt(5));
  return make(n, (i, out, o) => {
    if (i >= shell) return out.set(ball(r, R * 0.88), o);
    const y = 1 - (2 * (i + 0.5)) / shell;
    const rad = Math.sqrt(1 - y * y);
    const k = R * (1 + gauss(r) * 0.012);
    out[o] = Math.cos(i * golden) * rad * k;
    out[o + 1] = y * k;
    out[o + 2] = Math.sin(i * golden) * rad * k;
  });
}

// A voice waveform: vertical bars under a speech-like envelope, with a thin
// baseline running through them.
function wave(n: number) {
  const r = rand(11);
  const bars = 46;
  const heights = Array.from({ length: bars }, (_, k) => {
    const x = (k / (bars - 1)) * 2 - 1;
    const env = Math.exp(-x * x * 2.4) * (0.35 + 0.65 * Math.abs(Math.sin(k * 0.9) * Math.cos(k * 0.37)));
    return 0.12 + env * 1.55;
  });
  return make(n, (_, out, o) => {
    if (r() < 0.14) {
      out[o] = (r() * 2 - 1) * 2.35;
      out[o + 1] = gauss(r) * 0.01;
      out[o + 2] = gauss(r) * 0.04;
      return;
    }
    const k = Math.floor(r() * bars);
    out[o] = ((k / (bars - 1)) * 2 - 1) * 2.3 + gauss(r) * 0.012;
    out[o + 1] = (r() * 2 - 1) * heights[k];
    out[o + 2] = gauss(r) * 0.05;
  });
}

// A knowledge graph: nodes in an ellipsoid, each linked to its nearest
// neighbours, with a few larger hubs.
function graph(n: number) {
  const r = rand(19);
  const M = 26;
  const nodes = Array.from({ length: M }, () => {
    const [x, y, z] = ball(r, 1);
    return [x * 2.2, y * 1.7, z * 1.2] as const;
  });
  const edges = new Set<string>();
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, d: Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) }))
      .filter((x) => x.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(({ j }) => edges.add(i < j ? `${i}-${j}` : `${j}-${i}`));
  });
  const links = [...edges].map((e) => e.split("-").map(Number));
  return make(n, (_, out, o) => {
    if (r() < 0.32) {
      const k = Math.floor(r() * M);
      const spread = k < 5 ? 0.15 : 0.07;
      out[o] = nodes[k][0] + gauss(r) * spread;
      out[o + 1] = nodes[k][1] + gauss(r) * spread;
      out[o + 2] = nodes[k][2] + gauss(r) * spread;
      return;
    }
    const [a, b] = links[Math.floor(r() * links.length)];
    const t = r();
    for (let d = 0; d < 3; d++) out[o + d] = nodes[a][d] + (nodes[b][d] - nodes[a][d]) * t + gauss(r) * 0.012;
  });
}

// Six projects as six small cubes, points on their faces, each turned a little.
function clusters(n: number) {
  const r = rand(23);
  const centres = [-1.75, 0, 1.75].flatMap((x) => [0.9, -0.9].map((y) => [x, y] as const));
  const side = 0.82;
  return make(n, (_, out, o) => {
    const c = Math.floor(r() * centres.length);
    const face = Math.floor(r() * 6);
    const p = [(r() - 0.5) * side, (r() - 0.5) * side, (r() - 0.5) * side];
    p[face % 3] = (face < 3 ? -0.5 : 0.5) * side;
    const a = 0.5 + c * 0.35;
    const x = p[0] * Math.cos(a) - p[2] * Math.sin(a);
    const z = p[0] * Math.sin(a) + p[2] * Math.cos(a);
    const b = 0.4;
    const y = p[1] * Math.cos(b) - z * Math.sin(b);
    out[o] = centres[c][0] + x;
    out[o + 1] = centres[c][1] + y;
    out[o + 2] = p[1] * Math.sin(b) + z * Math.cos(b);
  });
}

// "MJA" drawn on a canvas in the page's display font, sampled into points.
function initials(n: number, family: string) {
  const W = 900;
  const H = 360;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d", { willReadFrequently: true });
  if (!g) return sphere(n);
  g.fillStyle = "#000";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = `800 280px ${family}`;
  g.fillText("MJA", W / 2, H / 2 + 10);
  const textWidth = g.measureText("MJA").width || W;
  const data = g.getImageData(0, 0, W, H).data;
  const px: number[] = [];
  for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (data[(y * W + x) * 4 + 3] > 128) px.push(x, y);
  if (px.length === 0) return sphere(n);
  const s = 4.4 / textWidth;
  const r = rand(31);
  return make(n, (_, out, o) => {
    const k = Math.floor(r() * (px.length / 2)) * 2;
    out[o] = (px[k] - W / 2 + r() * 2) * s;
    out[o + 1] = -(px[k + 1] - H / 2 + r() * 2) * s;
    out[o + 2] = gauss(r) * 0.09;
  });
}

// A rising double helix with rungs.
function helix(n: number) {
  const r = rand(29);
  const H = 4.4;
  const turns = 2.2;
  const rad = 0.85;
  const angle = (y: number) => (y / H) * turns * Math.PI * 2;
  return make(n, (_, out, o) => {
    const m = r();
    if (m < 0.78) {
      const y = (r() - 0.5) * H;
      const a = angle(y) + (m < 0.39 ? 0 : Math.PI);
      out[o] = Math.cos(a) * rad + gauss(r) * 0.03;
      out[o + 1] = y;
      out[o + 2] = Math.sin(a) * rad + gauss(r) * 0.03;
      return;
    }
    const y = (Math.floor(r() * 22) / 21 - 0.5) * H;
    const a = angle(y);
    const t = r() * 2 - 1;
    out[o] = Math.cos(a) * rad * t + gauss(r) * 0.01;
    out[o + 1] = y + gauss(r) * 0.01;
    out[o + 2] = Math.sin(a) * rad * t + gauss(r) * 0.01;
  });
}

// A torus seen at an angle, echoing the ring on the company site.
function ring(n: number) {
  const r = rand(37);
  const R = 1.75;
  const tube = 0.38;
  const tilt = 1.05;
  return make(n, (_, out, o) => {
    const u = r() * Math.PI * 2;
    const v = r() * Math.PI * 2;
    const rr = tube * (0.55 + 0.45 * Math.sqrt(r()));
    const x = (R + rr * Math.cos(v)) * Math.cos(u);
    const y = rr * Math.sin(v);
    const z = (R + rr * Math.cos(v)) * Math.sin(u);
    out[o] = x;
    out[o + 1] = y * Math.cos(tilt) - z * Math.sin(tilt);
    out[o + 2] = y * Math.sin(tilt) + z * Math.cos(tilt);
  });
}

export function buildShapes(n: number, fontFamily: string): Shapes {
  return {
    scatter: scatter(n),
    sphere: sphere(n),
    wave: wave(n),
    graph: graph(n),
    clusters: clusters(n),
    initials: initials(n, fontFamily),
    helix: helix(n),
    ring: ring(n),
  };
}
