# Astra Lite

Astra Lite is the compact multi-page edition of Astra: Adaptive Site Template for Research and Academia. It adds a projects archive to the academic homepage while keeping the implementation dependency-free.

## Overview

The template contains a homepage and one additional Projects page. It intentionally omits the full navigation system, news, writing, and secondary pages. Its colors follow the browser or operating-system theme automatically, with no theme control.

## Features

- Responsive academic homepage
- Projects index with reusable project entries
- Automatic light and dark appearance
- Shared static stylesheet
- No framework, build step, or JavaScript

## Requirements

- A modern web browser
- Any static web host

## Usage

Clone the repository and replace the sample content.

```bash
git clone https://github.com/yixnhuang/astra-lite.git
cd astra-lite
```

Serve the repository root with a local static server so directory links resolve consistently.

## Project Structure

```text
.
├── assets/
│   └── style.css
├── projects/
│   └── index.html
├── index.html
├── LICENSE
└── README.md
```

## Customization

Edit the sample biography and entries in the two HTML files. The appearance is intentionally fixed and follows `prefers-color-scheme`; the template does not provide a navigation bar or user-selectable themes.

## Deployment

Upload the repository as a static site. No build command is required.

## Project Status

Maintained privately. Astra Lite is the compact multi-page edition of the Astra template family.

## License

Copyright © 2026 Yixuan Huang. All rights reserved. See `LICENSE` for details.

## Contact

- Website: [yixuanhuang.com](https://yixuanhuang.com)
- Email: [yixnhuang@gmail.com](mailto:yixnhuang@gmail.com)
