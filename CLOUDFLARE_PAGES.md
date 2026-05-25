# Cloudflare Pages 部署配置

这个项目是 Vite + React 静态站。推荐使用 Cloudflare Pages 的 GitHub 集成部署，这样每次推送到 `main` 分支都会自动构建和发布。

## 推荐方式：GitHub 自动部署

Cloudflare 后台操作：

1. 登录 Cloudflare Dashboard。
2. 进入 **Workers & Pages**。
3. 选择 **Create application**。
4. 选择 **Pages**。
5. 选择 **Connect to Git**。
6. 授权 Cloudflare 访问 GitHub。
7. 选择仓库：
   `terryying2929/yunnan-travel-site`
8. Production branch 选择：
   `main`

## Build Settings

Cloudflare Pages 项目构建设置填写：

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

环境变量建议：

```text
NODE_VERSION=22
```

项目里也已经添加 `.node-version`，用于提示构建环境使用 Node 22。

## 为什么需要改 Vite base

GitHub Pages 的地址是：

```text
https://terryying2929.github.io/yunnan-travel-site/
```

它需要资源路径带 `/yunnan-travel-site/` 前缀。

Cloudflare Pages 的地址通常是：

```text
https://yunnan-travel-site.pages.dev/
```

它需要资源路径从 `/` 根路径开始。

`vite.config.js` 已经处理好：

- GitHub Actions 构建时使用 GitHub 仓库名前缀。
- Cloudflare Pages 构建时检测 `CF_PAGES=1`，使用 `/`。

## 已加入的 Cloudflare 文件

`wrangler.toml`

```toml
name = "yunnan-travel-site"
compatibility_date = "2026-05-25"
pages_build_output_dir = "dist"
```

`public/_headers`

用于生产环境安全头和静态资源缓存。

`public/_redirects`

用于前端路由回退。现在网站主要是单页锚点，保留这个文件方便后续加页面。

## Direct Upload 不推荐作为主方式

Cloudflare Pages 支持 Direct Upload，但官方说明里提到：如果项目选择 Direct Upload，之后不能直接切换到 Git 集成，需要重新创建项目。

这个网站已经在 GitHub 上维护，所以推荐用 GitHub 自动部署。

## 生产环境建议

1. Cloudflare Pages 项目名建议：
   `yunnan-travel-site`
2. 开启自动部署：
   `main` 分支作为生产环境。
3. Preview deployments：
   可以保持默认，之后开新分支或 PR 时 Cloudflare 会生成预览地址。
4. 自定义域名：
   后续如果你买域名，可以在 Pages 项目的 **Custom domains** 里绑定。
5. 缓存：
   `assets` 文件由 Vite 生成 hash 文件名，已设置长期缓存。
6. 图片：
   当前使用 Wikimedia Commons 外链图片。生产正式版如果想更稳定，可以把精选图片下载到 `public/assets`，减少外链不可控因素。
7. 表单：
   当前没有真实表单。如果以后要做“路线意见收集”，可以接 Cloudflare Pages Functions、Formspree、飞书表格或 Airtable。

## 验证命令

本地构建：

```bash
npm run build
```

可选：使用 Wrangler 手动部署 `dist`：

```bash
npx wrangler pages deploy dist --project-name yunnan-travel-site
```

但如果已经使用 GitHub 集成，日常不需要手动部署。
