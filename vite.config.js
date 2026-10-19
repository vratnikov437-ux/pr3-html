import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    // 2. Добавляем плагин в массив plugins
    ViteImageOptimizer({
      // Здесь можно указать настройки (необязательно)
      png: { quality: 80 }, // Качество PNG (по умолчанию 100)
      jpeg: { quality: 75 }, // Качество JPEG (по умолчанию 100)
      jpg: { quality: 75 }, // Качество JPG (по умолчанию 100)
      svg: { multipass: true }, // Многопроходная оптимизация SVG
    }),
  ],
});