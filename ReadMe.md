## Firefox and Chrome Extension Boilerplate with Webpack and Tailwind CSS

This is a template for creating a browser extension using Webpack and Tailwind CSS. The template is designed to help you
get started with building browser extensions for Chrome and Firefox.

---

## Introduction

This template provides a starting point for building browser extensions for Chrome and Firefox. The template includes
Webpack for bundling the extension files and Tailwind CSS for styling the extension.

---

## Requirements

Below are the tools and libraries required to build and run the browser extension.

- npm (Node Package Manager)
- Webpack
- Tailwind CSS

---

## Setup

### Installation

1. Clone the repository and navigate to the project directory:
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

- **Chrome**: Run the following command for development with hot reload:
  ```bash
  npm run start:chrome
  ```
  This will watch for changes and rebuild the extension automatically.

- **Firefox**: Run the following command for development with hot reload:
  ```bash
  npm run start:firefox
  ```

### Building for Production

- **Chrome**:
  ```bash
  npm run build:chrome
  ```
  This command will build the extension optimized for production in the `build/chrome` directory.

- **Firefox**:
  ```bash
  npm run build:firefox
  ```
  This command will build the extension optimized for production in the `build/firefox` directory.

---

## Usage

After building the extension, you can load it in your browser by following the steps below:

### Chrome

Open the Extension Management page by navigating to `chrome://extensions`.

- The Extension Management page can also be opened by clicking on the Chrome menu, hovering over `More Tools` then
  selecting `Extensions`.
- Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
- Click the `Load unpacked` button and select the extension directory.
- The extension will be loaded into the browser.

### Firefox

Open the Extension Management page by navigating to `about:debugging`.

- Click the `This Firefox` button and select `Load Temporary Add-on...`.
- Open the extension directory and select any file inside the extension.
- The extension will be loaded into the browser.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to contribute to this project.
