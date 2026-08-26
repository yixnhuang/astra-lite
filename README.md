# Astra Lite

Astra Lite is the compact multi-page edition of Astra: Adaptive Site Template for Research and Academia. Its visual system, page layouts, navigation, and footer are derived directly from the Astra source website.

## Overview

The template contains the academic homepage plus Projects, News, and Contact pages. It retains the original responsive navigation template and follows the browser or operating-system color preference automatically without visitor-facing theme controls.

## Features

- Home, Projects, News, and Contact pages
- Original Astra navigation, layout, typography, spacing, colors, and responsive rules
- Automatic light and dark appearance
- Shared footer and neutral SVG placeholders
- No framework or build step

## Usage

```bash
git clone git@github.com:yixnhuang/astra-lite.git
cd astra-lite
python -m http.server 8000
```

Open `http://localhost:8000` and replace the sample content in the HTML files.

## Project Structure

```text
.
├── assets/
├── contact/
├── footer/
├── news/
├── projects/
├── index.html
├── LICENSE
└── README.md
```

## Customization

Replace the sample content and neutral SVG placeholders. Update the navigation template in `assets/js/site.js` and the shared footer in `footer/index.html`. Theme selection remains automatic.

## Project Status

Maintained privately. Astra Lite is the compact multi-page edition of Astra.

## License

Copyright © 2026 Yixuan Huang. All rights reserved. See `LICENSE` for details.

## Contact

- Website: [yixuanhuang.com](https://yixuanhuang.com)
- Email: [yixnhuang@gmail.com](mailto:yixnhuang@gmail.com)
