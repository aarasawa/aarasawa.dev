/* ═══════════════════════════════════════════════
   PIXEL ART ENGINE & DATA
═══════════════════════════════════════════════ */

export function drawPixelArt(canvas: HTMLCanvasElement, palette: string[], grid: number[][], scale: number) {
  const cols = grid[0].length, rows = grid.length;
  canvas.width  = cols * scale;
  canvas.height = rows * scale;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.imageSmoothingEnabled = false;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = grid[r][c];
      if (idx === 0) continue;
      ctx.fillStyle = palette[idx];
      ctx.fillRect(c * scale, r * scale, scale, scale);
    }
  }
}

export function dither(grid: number[][], x: number, y: number, w: number, h: number, a: number, b: number) {
  for (let r = y; r < y + h; r++)
    for (let c = x; c < x + w; c++)
      grid[r][c] = ((r + c) % 2 === 0) ? a : b;
}

export function makeGrid(cols: number, rows: number, fill = 0) {
  return Array.from({ length: rows }, () => new Array(cols).fill(fill));
}

export const artAgriGuard = (scale = 8) => {
  const P = ['', '#0a0700', '#1a3a0a', '#2d6b12', '#4aaa1a', '#FFB347', '#C47A20', '#1a2a3a', '#2a4a6a', '#4a8aaa', '#7ac8f0', '#ffffff', '#aaaaaa', '#555555'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 9; r++) for (let c = 0; c < 32; c++) G[r][c] = 7;
  dither(G, 0, 0, 32, 4, 7, 13);
  for (let r = 2; r < 9; r += 3) for (let c = 0; c < 32; c++) G[r][c] = 8;
  for (let c = 4; c < 32; c += 5) for (let r = 0; r < 9; r++) G[r][c] = 8;
  dither(G, 1, 1, 6, 5, 2, 3);
  dither(G, 8, 2, 5, 4, 3, 2);
  dither(G, 15, 0, 7, 6, 2, 4);
  dither(G, 23, 1, 8, 5, 3, 2);
  [[1, 2], [6, 4], [12, 1], [18, 3], [25, 2], [3, 6], [20, 5], [28, 1]].forEach(([c, r]) => { G[r][c] = 5; });
  for (let r = 9; r < 11; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  dither(G, 0, 9, 32, 2, 2, 3);
  const bars = [[2, 14, 6], [8, 11, 4], [14, 16, 6], [20, 12, 4], [26, 15, 5]];
  bars.forEach(([x, h, w]) => {
    for (let r = 20 - h; r < 20; r++) for (let c = x; c < x + w; c++) { G[r][c] = r === 20 - h ? 5 : 6; }
  });
  for (let c = 1; c < 31; c++) G[19][c] = 6;
  for (let r = 11; r < 20; r++) G[r][1] = 6;
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artKoyasan = (scale = 8) => {
  const P = ['', '#0a0700', '#1a0a00', '#2a1400', '#8B1A1A', '#C43A1A', '#FFB347', '#C47A20', '#f0e8d0', '#d4c4a0', '#4a3020', '#2a1a08', '#ffffff', '#88aacc'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 14; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  dither(G, 0, 0, 32, 6, 2, 11);
  [[3, 1], [8, 3], [15, 0], [22, 2], [28, 1], [5, 5], [19, 4], [30, 3]].forEach(([c, r]) => G[r][c] = 12);
  for (let r = 1; r < 5; r++) for (let c = 25; c < 30; c++) G[r][c] = 8;
  dither(G, 25, 1, 5, 4, 8, 9);
  for (let r = 10; r < 17; r++) for (let c = 10; c < 22; c++) G[r][c] = 3;
  dither(G, 10, 10, 12, 7, 3, 11);
  [[6, 9, 20, 1], [4, 7, 24, 1], [2, 5, 28, 2]].forEach(([x, y, w, h]) => {
    for (let r = y; r < y + h; r++) for (let c = x; c < x + w; c++) G[r][c] = 4;
  });
  for (let c = 2; c < 30; c++) G[5][c] = 5;
  for (let c = 4; c < 28; c++) G[7][c] = 5;
  for (let c = 6; c < 26; c++) G[9][c] = 5;
  dither(G, 2, 5, 28, 1, 5, 6);
  for (let r = 13; r < 17; r++) for (let c = 14; c < 18; c++) G[r][c] = 10;
  G[13][14] = G[13][17] = 6;
  [[8, 11], [23, 11]].forEach(([c, r]) => { G[r][c] = 5; G[r + 1][c] = 6; G[r + 2][c] = 5; });
  for (let r = 17; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 11;
  dither(G, 0, 17, 32, 3, 11, 10);
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artPowerApps = (scale = 8) => {
  const P = ['', '#0a0700', '#0a1a2a', '#1a3a5a', '#2a6aaa', '#4a9aee', '#FFB347', '#C47A20', '#f0f0f0', '#cccccc', '#888888', '#333333', '#1a4a1a', '#4aaa4a'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  dither(G, 0, 0, 32, 20, 2, 11);
  for (let r = 1; r < 19; r++) for (let c = 2; c < 30; c++) G[r][c] = 3;
  for (let r = 1; r < 4; r++) for (let c = 2; c < 30; c++) G[r][c] = 4;
  dither(G, 2, 1, 28, 3, 4, 3);
  [[4, 2], [5, 2], [6, 2], [8, 2], [9, 2], [11, 2]].forEach(([c, r]) => G[r][c] = 8);
  for (let r = 1; r < 4; r++) for (let c = 27; c < 30; c++) G[r][c] = 7;
  [[5, 6], [7, 8], [9, 10], [11, 12], [13, 14]].forEach(([y, len], i) => {
    for (let c = 4; c < 4 + len / 2; c++) G[y][c] = 10;
    for (let r = y + 1; r < y + 2; r++) for (let c = 4; c < 28; c++) G[r][c] = 8;
    G[y + 1][4] = G[y + 1][27] = 9;
    if (i < 3) { for (let c = 5; c < 5 + len; c++) G[y + 1][c] = 11; }
  });
  for (let r = 16; r < 19; r++) for (let c = 18; c < 28; c++) G[r][c] = 12;
  dither(G, 18, 16, 10, 3, 12, 13);
  for (let c = 20; c < 26; c++) G[17][c] = 13;
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artWebsite = (scale = 8) => {
  const P = ['', '#0a0700', '#1a1000', '#2a1800', '#FFB347', '#C47A20', '#7A4A0A', '#f0a030', '#0a0500', '#3a2800', '#ffffff', '#888844', '#ffdd88'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  for (let r = 1; r < 17; r++) for (let c = 3; c < 29; c++) G[r][c] = 3;
  for (let r = 2; r < 15; r++) for (let c = 5; c < 27; c++) G[r][c] = 1;
  dither(G, 6, 3, 21, 11, 1, 8);
  for (let r = 3; r < 14; r += 2) for (let c = 6; c < 26; c++) G[r][c] = 8;
  [[7, 8, 15], [9, 10, 12], [11, 12, 18], [13, 4, 10]].forEach(([r, x, w]) => {
    for (let c = x; c < x + w; c++) G[r][c] = 4;
  });
  G[7][7] = G[7][8] = G[7][9] = 12;
  G[13][10] = G[13][11] = 4;
  for (let r = 16; r < 18; r++) for (let c = 14; c < 18; c++) G[r][c] = 3;
  for (let r = 18; r < 20; r++) for (let c = 12; c < 20; c++) G[r][c] = 3;
  dither(G, 12, 18, 8, 2, 3, 2);
  for (let r = 3; r < 6; r++) for (let c = 6; c < 10; c++) { if (r + c < 12) G[r][c] = 9; }
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artEMR = (scale = 8) => {
  const P = ['', '#0a0700', '#0a1a0a', '#1a3a1a', '#2a6a4a', '#4aaa7a', '#FFB347', '#C47A20', '#f0f8f0', '#c0d8c0', '#336633', '#ffffff', '#aaaaaa', '#445544'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  [[4, 2, 22, 17], [3, 2, 22, 17], [2, 2, 22, 17]].forEach(([x, y, w, h]) => {
    for (let r = y; r < y + h; r++) for (let c = x; c < x + w; c++) G[r][c] = 13;
  });
  for (let r = 2; r < 19; r++) for (let c = 2; c < 24; c++) G[r][c] = 8;
  for (let r = 2; r < 5; r++) for (let c = 2; c < 24; c++) G[r][c] = 3;
  dither(G, 2, 2, 22, 3, 3, 2);
  [[12, 3], [13, 2], [13, 3], [13, 4], [14, 3]].forEach(([c, r]) => G[r][c] = 5);
  for (let c = 4; c < 20; c++) G[5][c] = 6;
  G[5][4] = G[5][5] = 5;
  [[7, 4, 18], [8, 4, 15], [9, 4, 20], [11, 4, 16], [12, 4, 12], [13, 4, 18], [15, 4, 14], [16, 4, 18]].forEach(([r, x, w]) => {
    for (let c = x; c < x + w; c++) G[r][c] = 9;
    G[r][x] = 10;
  });
  for (let c = 4; c < 22; c++) G[11][c] = 4;
  G[11][4] = G[11][5] = 6;
  for (let r = 3; r < 18; r++) for (let c = 25; c < 30; c++) G[r][c] = 13;
  [3, 6, 9, 12, 15].forEach(r => { for (let c = 25; c < 30; c++) G[r][c] = 3; G[r][26] = G[r][27] = 6; });
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artOpenLibrary = (scale = 8) => {
  const P = ['', '#0a0700', '#1a0808', '#3a1a08', '#6a3a18', '#aa6a38', '#FFB347', '#C47A20', '#f0e8d0', '#d4b880', '#8a6030', '#2a1808', '#4a88cc', '#88bbee'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  for (let r = 15; r < 17; r++) for (let c = 0; c < 32; c++) G[r][c] = 4;
  dither(G, 0, 15, 32, 2, 4, 3);
  const bookDefs = [
    { x: 2, w: 5, h: 10, c1: 3, c2: 4 }, { x: 8, w: 4, h: 12, c1: 12, c2: 13 },
    { x: 13, w: 6, h: 9, c1: 10, c2: 5 }, { x: 20, w: 4, h: 11, c1: 7, c2: 6 },
    { x: 25, w: 5, h: 13, c1: 4, c2: 3 }, { x: 5, w: 3, h: 8, c1: 12, c2: 13 }
  ];
  bookDefs.forEach(({ x, w, h, c1, c2 }) => {
    const y = 15 - h;
    for (let r = y; r < 15; r++) for (let c = x; c < x + w; c++) G[r][c] = c1;
    dither(G, x, y, w, h, c1, c2);
    for (let r = y; r < 15; r++) G[r][x] = 11;
    for (let r = y; r < 15; r++) G[r][x + w - 1] = c2;
    G[y][x] = G[y][x + w - 1] = 8;
  });
  for (let r = 3; r < 10; r++) for (let c = 9; c < 23; c++) G[r][c] = 8;
  for (let r = 3; r < 10; r++) G[r][16] = 9;
  [[4, 10, 15], [5, 10, 15], [6, 10, 15], [7, 10, 15], [8, 10, 15]].forEach(([r, x]) => {
    for (let c = x; c < x + 5; c++) G[r][c] = 9;
  });
  [[4, 17, 5], [5, 17, 5], [6, 17, 5], [7, 17, 5], [8, 17, 5]].forEach(([r, x, w]) => {
    for (let c = x; c < x + w; c++) G[r][c] = 9;
  });
  for (let c = 10; c < 16; c++) G[6][c] = 12;
  G[5][12] = G[5][13] = 12; G[7][12] = G[7][13] = 12;
  [[7, 2], [8, 1], [9, 0], [23, 2], [24, 1], [25, 0]].forEach(([c, r]) => G[r][c] = 6);
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const artSecurity = (scale = 8) => {
  const P = ['', '#0a0700', '#001a00', '#003a00', '#006a00', '#00aa00', '#FFB347', '#C47A20', '#00ff41', '#00cc33', '#aaffaa', '#ffffff', '#1a1a00', '#333300'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  dither(G, 0, 0, 32, 20, 2, 12);
  [[1, 2, 28], [3, 2, 20], [5, 2, 24], [7, 4, 18], [9, 2, 22], [11, 2, 16], [13, 4, 26], [15, 2, 14], [17, 2, 20], [19, 2, 18]].forEach(([r, x, w]) => {
    for (let c = x; c < x + w; c++) G[r][c] = 9;
    G[r][x] = G[r][x + 1] = 5;
  });
  [[1, 2], [1, 3], [7, 4], [7, 5], [7, 6], [13, 4], [13, 5]].forEach(([r, c]) => G[r][c] = 8);
  [[17, 3, 4], [18, 3, 4], [19, 3, 4]].forEach(([r, x, w]) => { for (let c = x; c < x + w; c++) G[r][c] = 6; });
  for (let r = 12; r < 17; r++) for (let c = 3; c < 7; c++) G[r][c] = 7;
  G[11][4] = G[11][5] = 7; G[10][4] = G[10][5] = 0;
  for (let r = 9; r < 12; r++) { G[r][3] = G[r][6] = 7; }
  G[14][4] = G[14][5] = 6;
  for (let r = 0; r < 20; r++) {
    if (r % 3 === 0) { G[r][29] = 8; G[r][30] = 9; }
    else if (r % 3 === 1) { G[r][28] = 9; G[r][31] = 8; }
    else { G[r][29] = 4; G[r][30] = 4; }
  }
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

/* ═══════════════════════════════════════════════
   CINEMA PIXEL ART
═══════════════════════════════════════════════ */

export const artSevenSamurai = (scale = 8) => {
  const P = ['', '#0a0a0a', '#1a1a1a', '#2a2a2a', '#444444', '#666666', '#888888', '#aaaaaa', '#ffffff', '#3a1a0a', '#5a2a0a'];
  const G = makeGrid(32, 20, 1);
  for (let r = 0; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 6;
  dither(G, 0, 0, 32, 14, 6, 7);
  for (let r = 14; r < 20; r++) for (let c = 0; c < 32; c++) G[r][c] = 2;
  for (let i = 0; i < 7; i++) {
    const x = 4 + i * 4;
    for (let r = 10; r < 18; r++) G[r][x] = 1;
    G[10][x] = G[10][x + 1] = 8;
  }
  const cv = document.createElement('canvas');
  drawPixelArt(cv, P, G, scale);
  return cv;
};

export const PROJECT_DATA = [
  {
    id: 'agriguard',
    title: 'AgriGuard',
    sub: 'Geospatial Pesticide Visualization Tool',
    desc: 'Full-stack web app visualizing CA pesticide regulation data from 2023 with an interactive dark-theme Leaflet map and FastAPI backend.',
    tags: ['Python','FastAPI','PostgreSQL','React','Leaflet','GCP', 'HTML', 'CSS'],
    artFn: artAgriGuard,
    status: 'Active',
    role: 'Developer',
    year: '2024–2025',
    overview: 'AgriGuard ingests the California Department of Pesticide Regulation\'s Use Report dataset — over 1M records annually — and surfaces it as an <strong>interactive geospatial dashboard</strong>.',
    technical: 'Python ETL pipeline loads and normalizes raw CDR data into PostgreSQL with PostGIS extensions. FastAPI serves GeoJSON endpoints.',
    links: [{label:'Live Demo',href:'#'},{label:'GitHub',href:'#',ghost:true}]
  },
  {
    id: 'koyasan',
    title: 'Koyasan Membership Form',
    sub: 'Nonprofit Operations System',
    desc: 'End-to-end digital membership system for a Little Tokyo Buddhist temple — bilingual forms, Stripe payments, and SharePoint backend.',
    tags: ['Power Automate','SharePoint','Stripe','Adobe PDF API','HTML'],
    artFn: artKoyasan,
    status: 'Active',
    role: 'Freelance — Deep Phosphor Studios',
    year: '2025',
    overview: 'Koyasan Beikoku Betsuin needed to modernize their paper-based membership intake while <strong>preserving their bilingual Japanese/English PDF aesthetic</strong>.',
    technical: 'Power Automate orchestrates the full flow: form submission → Stripe checkout → payment confirmation → Adobe PDF generation → SharePoint record creation.',
    links: [{label:'Case Study',href:'#',ghost:true}]
  },
  {
    id: 'powerapps-po',
    title: 'Power Apps PO System',
    sub: 'Nonprofit Procurement Tool',
    desc: 'Role-based purchase order system with email approval workflows, auto-generated PO numbers, and PDF export for a nonprofit client.',
    tags: ['Power Apps','Power Automate','SharePoint','Office 365'],
    artFn: artPowerApps,
    status: 'Completed',
    role: 'Freelance — Deep Phosphor Studios',
    year: '2025',
    overview: 'A canvas Power App that replaces a manual email-and-spreadsheet procurement workflow.',
    technical: 'Power Apps canvas app with role-based views. Power Automate handles approval flow and PDF generation. SharePoint Lists as the data layer.',
    links: [{label:'Case Study',href:'#',ghost:true}]
  },
  {
    id: 'personal-site',
    title: 'aarasawa.dev',
    sub: 'Personal Portfolio Website',
    desc: 'Personal website with an 8-bit phosphor CRT aesthetic — amber P3 terminal look, boot sequence intro, windowed project UI, and CSS-only effects.',
    tags: ['Vite','React','TypeScript', 'HTML', 'CSS'],
    artFn: artWebsite,
    status: 'Active',
    role: 'Developer',
    year: '2023–Present',
    overview: 'A personal hub built around a <strong>vintage amber phosphor CRT aesthetic</strong> — scanlines, vignette, phosphor glow, pixel fonts — without relying on any image assets.',
    technical: 'Vite + React + TypeScript frontend. CRT effects achieved entirely in CSS. Pixel art generated programmatically with Canvas API.',
    links: [{label:'Visit Site',href:'https://aarasawa.dev'},{label:'GitHub',href:'#',ghost:true}]
  },
  {
    id: 'emr-changelog',
    title: 'EMR Changelog Tool',
    sub: 'Internal IT Workflow Tool',
    desc: 'Internal tool that converts structured form submissions into versioned Word document changelogs with auto-generated UIDs via Power Automate.',
    tags: ['Power Automate','SharePoint Lists','Word Template','Office 365'],
    artFn: artEMR,
    status: 'In Progress',
    role: 'Personal Project',
    year: '2026',
    overview: 'Streamlines the EMR change documentation process by auto-populating Word templates via Power Automate.',
    technical: 'Power Automate flow triggered on form submission: UID generation, SharePoint record creation, Word template population via document generation action.',
    links: [{label:'GitHub',href:'#',ghost:true}]
  },
  {
    id: 'open-library',
    title: 'Open Library',
    sub: 'Open Source Contribution',
    desc: 'Contributed a redesigned dropdown sort menu to Internet Archive\'s Open Library — improving search UX for a catalog of 20M+ book records.',
    tags: ['Python','JavaScript','HTML','CSS','Open Source'],
    artFn: artOpenLibrary,
    status: 'Shipped',
    role: 'Open Source Contributor',
    year: '2024',
    overview: 'Contributed to the Internet Archive\'s Open Library project — a universal catalog targeting <strong>a webpage for every book ever published</strong>.',
    technical: 'Worked within Open Library\'s Python/Infogami stack. Navigated a large legacy codebase and matched existing design system conventions.',
    links: [{label:'Open Library',href:'https://openlibrary.org'},{label:'GitHub PR',href:'#',ghost:true}]
  },
  {
    id: 'security',
    title: 'Security Studies',
    sub: 'HackTheBox / Coursera',
    desc: 'Active pursuit of Security+ and OSCP certifications through HackTheBox labs, TryHackMe, and Coursera coursework.',
    tags: ['HackTheBox','Security+', 'Networking'],
    artFn: artSecurity,
    status: 'Ongoing',
    role: 'Learner',
    year: '2023–Present',
    overview: 'Structured approach to offensive and defensive security: <strong>Security+ targeting Q3 2025</strong>.',
    technical: 'HackTheBox Machines: focus on web vulnerabilities, cryptography, and reverse engineering. TryHackMe learning paths.',
    links: [{label:'HackTheBox',href:'https://hackthebox.com',ghost:true}]
  }
];

export const SHELF_DATA = [
  {
    title: "Blame!",
    author: "Tsutomu Nihei",
    width: 25, height: 158,
    color: ["#02050a","#151c30"] as [string, string],
    deco: "atom",
    rating: 5, year: "2023", genre: "Manga", status: "Complete",
    review: "Pure environmental storytelling. Nihei's megastructures are <strong>looming and incomprehensible</strong>."
  },
  {
    title: "Vinland Saga",
    author: "Makoto Yukimura",
    width: 28, height: 155,
    color: ["#0a1520","#284560"] as [string, string],
    deco: "ship",
    rating: 5, year: "2024", genre: "Manga", status: "Ongoing",
    review: "A masterpiece regarding the <strong>philosophy of violence</strong>. Thorfinn's growth is unparalleled."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    width: 34, height: 160,
    color: ["#1a1202","#5a4310"] as [string, string],
    deco: "desert",
    rating: 5, year: "2024", genre: "Fiction", status: "Complete",
    review: "The foundation of modern sci-fi. Herbert's <strong>world-building and ecological focus</strong> remain unmatched."
  }
];

export const FILM_DATA = [
];
