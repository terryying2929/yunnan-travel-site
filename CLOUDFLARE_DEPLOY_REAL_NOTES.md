# Cloudflare Pages 实战部署笔记

这份笔记记录本项目实际部署到 Cloudflare Pages 时的流程。Cloudflare 中文界面和教程里的英文界面会有差异，关键是看项目类型和构建配置是否正确。

## 目标

把 GitHub 仓库：

```text
terryying2929/yunnan-travel-site
```

部署到 Cloudflare Pages，并且开启 GitHub 自动部署。

## 正确入口

进入 Cloudflare Dashboard：

```text
https://dash.cloudflare.com/
```

路径大致是：

```text
Workers 和 Pages
→ 创建
→ Pages / 部署 Pages / 创建 Pages 项目
→ 连接到 Git / Connect to Git
```

如果页面标题是：

```text
创建 Worker
```

或者设置里出现：

```text
部署命令：npx wrangler deploy
版本命令：npx wrangler versions upload
```

说明进了 Worker，不是 Pages。这个方向不适合普通 Vite 静态网站。

## 中文界面找不到 Vite 怎么办

Cloudflare 中文界面有时找不到 `Vite` 框架选项。没关系，可以选择：

```text
无 / None / 不使用框架
```

然后手动填写构建配置。

## 正确构建配置

Pages 项目里填写：

```text
构建命令：npm run build
构建输出目录：dist
根目录：/
生产分支：main
```

环境变量：

```text
NODE_VERSION=22
```

项目里已经有 `.node-version`：

```text
22
```

## 如何判断是不是 Pages 项目

正确的 Cloudflare Pages 项目应该强调：

```text
Pages
部署
生产分支 main
构建命令 npm run build
输出目录 dist
Git 存储库 terryying2929/yunnan-travel-site
```

如果看到这些内容，要警惕可能建成了 Worker：

```text
Worker
运行时
触发事件
wrangler deploy
versions upload
编辑代码
```

## GitHub 自动部署是否开启

在 Cloudflare 项目里检查：

1. 进入项目。
2. 打开 **设置**。
3. 找到 **构建**。
4. 确认有：

```text
Git 存储库：terryying2929/yunnan-travel-site
生产分支：main
非生产分支构建：已启用 或默认开启
构建命令：npm run build
根目录：/
```

只要项目已经连接 GitHub 仓库，并且生产分支是 `main`，以后每次本地改代码并 push 到 GitHub，Cloudflare Pages 就会自动构建和部署。

## 最可靠的自动部署测试

可以做一个很小的文字修改，然后：

```bash
git add .
git commit -m "Test Cloudflare auto deploy"
git push
```

然后去 Cloudflare 项目里的：

```text
部署 / Deployments
```

看是否出现新的一条部署记录。

如果新部署记录出现，并且状态成功，就说明 GitHub 自动部署已经正常。

## 线上地址

部署成功后，Cloudflare 会给一个类似这样的地址：

```text
https://yunnan-travel-site.pages.dev
```

如果项目名被占用，可能是：

```text
https://yunnan-travel-site-pages.pages.dev
```

最终以 Cloudflare 部署成功页面显示的地址为准。

## 生产环境建议

1. 平时继续用 GitHub 作为代码源。
2. 每次修改网站，只需要：

```bash
git add .
git commit -m "Update site"
git push
```

3. Cloudflare Pages 会自动部署，无需手动上传 dist。
4. 如果想确认部署是否成功，看 Cloudflare 的 **部署** 页面。
5. 如果以后绑定自己的域名，在 Cloudflare Pages 项目的 **自定义域** 里添加。

## 和 GitHub Pages 的区别

GitHub Pages 地址类似：

```text
https://terryying2929.github.io/yunnan-travel-site/
```

Cloudflare Pages 地址类似：

```text
https://yunnan-travel-site.pages.dev/
```

本项目 `vite.config.js` 已经兼容两边：

- GitHub Pages 自动使用 `/yunnan-travel-site/` 路径前缀。
- Cloudflare Pages 自动使用 `/` 根路径。

所以同一份代码可以同时部署到两个平台。
