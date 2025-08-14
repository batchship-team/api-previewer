# API 文档预览器

基于 Swagger UI 的 API 文档预览工具，将 OpenAPI JSON 文件转换为静态 HTML 页面。

## 功能

- 支持 OpenAPI 3.x JSON 格式
- 生成 Swagger UI 界面的静态 HTML 页面
- 可部署到 GitHub Pages

## 使用方法

1. 安装依赖：
```bash
npm install
```

2. 更新最新 OpenAPI JSON 文件
```
touch ./data/batchship.openapi.json
```

3. 构建页面：
```bash
npm run build
```

4. 在浏览器中打开生成的 `index.html` 文件预览文档

## 在线预览

https://batchship-team.github.io/api-previewer/