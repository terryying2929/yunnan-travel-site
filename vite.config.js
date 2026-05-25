import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isCloudflarePages = process.env.CF_PAGES === '1';

export default defineConfig({
  base: !isCloudflarePages && repositoryName ? `/${repositoryName}/` : '/',
  plugins: [react()],
});
