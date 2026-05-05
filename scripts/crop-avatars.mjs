import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT  = path.join(__dirname, "../public/avatars/grid.png");
const OUTPUT = path.join(__dirname, "../public/avatars");

// IDs na ordem: linha 1 (esq→dir), linha 2, linha 3
const IDS = [
  "lia", "mia", "laura", "ana", "cris",
  "bia", "julia", "lara", "yasmin", "duda",
  "avatar11", "avatar12", "avatar13", "avatar14", "avatar15",
];

const COLS = 5;
const ROWS = 3;

const meta = await sharp(INPUT).metadata();
const W = meta.width;
const H = meta.height;

const cellW = Math.floor(W / COLS);
const cellH = Math.floor(H / ROWS);

console.log(`Imagem: ${W}x${H}  →  células: ${cellW}x${cellH}`);

for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const idx  = row * COLS + col;
    const id   = IDS[idx];
    const left = col * cellW;
    const top  = row * cellH;

    const outFile = path.join(OUTPUT, `${id}.png`);

    await sharp(INPUT)
      .extract({ left, top, width: cellW, height: cellH })
      .toFile(outFile);

    console.log(`✓ ${id}.png  (col ${col}, row ${row})`);
  }
}

console.log("\n✅ Todos os avatares recortados com sucesso!");
