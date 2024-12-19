# LLM Clipboard

This VS Code extension enhances your copy-paste workflow by adding the filename to the beginning of the copied content.

## Features

- Adds a "Copy File With Name" option to the Explorer context menu.
- When selected, copies the file content with the filename prepended.

## Usage

1. Right-click on a file in the Explorer.
2. Select "Copy File With Name" from the context menu.
3. Paste the content into your desired location. The filename will be at the beginning.

## Installation

**Prerequisites:**

- [Node.js](https://nodejs.org/) and npm (or yarn) installed.
- [Visual Studio Code](https://code.visualstudio.com/)

**Steps:**

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd llm-clipboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build the extension:**
   ```bash
   npm run compile
   # or
   yarn compile
   ```

4. **Install the extension in VS Code:**
   - Open VS Code.
   - Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   - Click on the "..." menu in the Extensions view and select "Install from VSIX...".
   - Navigate to the project directory and select the `llm-clipboard-x.x.x.vsix` file (you may need to package it first, see development section).

## Development

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd llm-clipboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Open the project in VS Code.**

4. **Run the extension in development mode:**
   - Press `F5` to open a new VS Code window with the extension loaded.

5. **Package the extension (for distribution):**
   ```bash
   npm install -g vsce
   vsce package
   ```
   This will create a `llm-clipboard-x.x.x.vsix` file in your project directory.

## Contributing

[Describe how users can contribute to your project]

## License

MIT

## TODO
- ファイル名はファイルの内容と区別可能なように、コメントとして付与
- 複数ファイルに対応
- 過去のコピーしたファイルリストを記憶しておく（再度コピーしたときは最新の内容に更新される）
- 


