# DeepSeek Chat

A simple DeepSeek AI chat desktop application built with Electron.

## Download

Download the latest version from [Releases](../../releases/latest):

- **macOS (Intel)**: `DeepSeek Chat-*-x64.dmg`
- **macOS (Apple Silicon)**: `DeepSeek Chat-*-arm64.dmg`
- **Windows**: `DeepSeek Chat *.exe`

### macOS Installation Note

Since the app is not signed with an Apple Developer certificate, macOS will block it by default. To open the app, run this command in Terminal:

```bash
xattr -cr /Applications/DeepSeek\ Chat.app
```

Or if downloaded to Downloads folder:

```bash
xattr -cr ~/Downloads/DeepSeek\ Chat.app
```

## Usage

1. Download and install the app
2. Enter your DeepSeek API Key (first time only)
3. Start chatting!

> Your API Key is saved locally and won't need to be re-entered.

## Get API Key

Visit [DeepSeek Platform](https://platform.deepseek.com/) to register and get your API Key.

## Development

```bash
# Install dependencies
pnpm install

# Run development version
pnpm start

# Build
pnpm run build:mac    # macOS
pnpm run build:win    # Windows
pnpm run build:linux  # Linux
```

## Tech Stack

- Electron 28
- Vanilla HTML/CSS/JS
- DeepSeek API

## Release Process

1. Update `version` in `package.json`
2. Update `CHANGELOG.md` with changes
3. Commit and tag:
   ```bash
   git add .
   git commit -m "Release v1.0.1"
   git tag v1.0.1
   git push && git push --tags
   ```
4. GitHub Actions will automatically build and create a Release

## License

MIT
