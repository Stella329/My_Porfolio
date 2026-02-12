
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：将其替换为您的 GitHub 仓库名称，例如 '/名称/'
  // 如果是部署到个人主页域名 (username.github.io)，则设为 根目录'/'
  base: '/My_Porfolio/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
