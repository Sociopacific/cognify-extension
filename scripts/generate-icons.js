const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");

const SIZES = [16, 48, 128];
const SVG_DIR = path.join(__dirname, "../src/assets");
const OUTPUT_DIR = path.join(__dirname, "../dist/assets");

// Убедиться, что папка назначения существует
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function convertSvgToPng(svgPath, pngPath, size) {
  try {
    // Создаем Canvas нужного размера
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");

    // Загружаем SVG
    const img = await loadImage(svgPath);

    // Рисуем на Canvas
    ctx.drawImage(img, 0, 0, size, size);

    // Сохраняем как PNG
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(pngPath, buffer);

    console.log(`Успешно создан файл: ${pngPath}`);
  } catch (error) {
    console.error(`Ошибка при конвертации ${svgPath} в PNG:`, error);
  }
}

async function main() {
  for (const size of SIZES) {
    const svgPath = path.join(SVG_DIR, `icon${size}.svg`);
    const pngPath = path.join(OUTPUT_DIR, `icon${size}.png`);

    if (fs.existsSync(svgPath)) {
      await convertSvgToPng(svgPath, pngPath, size);
    } else {
      console.warn(`Файл не найден: ${svgPath}`);
    }
  }
}

main().catch(console.error);
