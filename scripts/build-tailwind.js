const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Определяем пути
const srcDir = path.join(__dirname, "../src");
const distDir = path.join(__dirname, "../dist");

// Файлы для чтения и записи
const inputCssPath = path.join(srcDir, "styles.css");
const outputCssPath = path.join(distDir, "tailwind.css");
const stylesUtilPath = path.join(srcDir, "utils/styles.ts");

// Убедимся, что директория dist существует
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Читаем исходный файл CSS
fs.readFile(inputCssPath, (err, css) => {
  if (err) {
    console.error("Ошибка при чтении исходного CSS файла:", err);
    process.exit(1);
  }

  // Обрабатываем CSS с помощью PostCSS (Tailwind и Autoprefixer)
  postcss([tailwindcss, autoprefixer])
    .process(css, { from: inputCssPath, to: outputCssPath })
    .then((result) => {
      // Записываем результат в выходной файл
      fs.writeFile(outputCssPath, result.css, (err) => {
        if (err) {
          console.error("Ошибка при записи скомпилированного CSS:", err);
          process.exit(1);
        }
        console.log(
          `Tailwind CSS успешно скомпилирован и сохранен в ${outputCssPath}`
        );

        // Также обновляем utils/styles.ts с предкомпилированными стилями
        try {
          // Заменяем специальные символы для безопасной вставки в строку JavaScript
          const escapedCss = result.css
            .replace(/\\/g, "\\\\")
            .replace(/`/g, "\\`")
            .replace(/\$/g, "\\$")
            .replace(/\r?\n/g, "\\n");

          const stylesContent = `/**
 * Предкомпилированные стили Tailwind CSS
 */
const TAILWIND_STYLES = \`${escapedCss}\`;

/**
 * Загружает скомпилированные стили Tailwind CSS для использования в Shadow DOM
 * Возвращает промис, содержащий CSS как строку
 */
export async function loadTailwindStyles(): Promise<string> {
  try {
    // Пытаемся загрузить стили из файла
    const cssUrl = chrome.runtime.getURL('tailwind.css');
    console.log('URL файла стилей:', cssUrl);
    
    console.log('Начинаем загрузку стилей...');
    const response = await fetch(cssUrl);
    console.log('Статус ответа:', response.status, response.statusText);
    
    if (!response.ok) {
      console.warn(\`Не удалось загрузить внешние стили: \${response.statusText}, используем встроенные\`);
      return TAILWIND_STYLES;
    }
    
    // Получаем текст стилей
    const cssText = await response.text();
    console.log('Стили загружены из файла, размер:', cssText.length, 'байт');
    return cssText;
  } catch (error) {
    console.error('Ошибка при загрузке стилей Tailwind:', error);
    console.log('Используем предкомпилированные стили, размер:', TAILWIND_STYLES.length, 'байт');
    
    // Возвращаем предкомпилированные стили
    return TAILWIND_STYLES;
  }
}`;

          fs.writeFile(stylesUtilPath, stylesContent, (err) => {
            if (err) {
              console.error("Ошибка при обновлении utils/styles.ts:", err);
            } else {
              console.log(
                `Файл utils/styles.ts успешно обновлен со встроенными стилями`
              );
            }
          });
        } catch (error) {
          console.error(
            "Ошибка при встраивании стилей в utils/styles.ts:",
            error
          );
        }
      });
    })
    .catch((error) => {
      console.error("Ошибка при обработке CSS через PostCSS:", error);
      process.exit(1);
    });
});
