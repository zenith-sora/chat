# DeepSeek Chat

一个简洁的 DeepSeek AI 聊天桌面应用，基于 Electron 构建。

## 下载

从 [Releases 页面](../../releases/latest) 下载最新版本：

- **macOS**: `DeepSeek Chat-*.dmg`
- **Windows**: `DeepSeek Chat *.exe`

## 使用方法

1. 下载并安装应用
2. 输入你的 DeepSeek API Key（首次使用）
3. 开始聊天！

> API Key 会保存在本地，下次打开无需重新输入。

## 获取 API Key

访问 [DeepSeek 开放平台](https://platform.deepseek.com/) 注册并获取 API Key。

## 本地开发

```bash
# 安装依赖
pnpm install

# 运行开发版本
pnpm start

# 打包
pnpm run build:mac    # macOS
pnpm run build:win    # Windows
pnpm run build:linux  # Linux
```

## 技术栈

- Electron 28
- 原生 HTML/CSS/JS
- DeepSeek API

## License

MIT
