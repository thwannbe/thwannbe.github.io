# Soowon Oh Academic CV

Personal academic CV site served as plain static HTML, CSS, and JavaScript.

## Preview Locally

No Ruby, Jekyll, Docker, or Node.js is required.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html`: all visible CV content.
- `style.css`: layout, typography, colors, and responsive behavior.
- `script.js`: dark-mode toggle, active navigation, and optional "show more" behavior.
- `.nojekyll`: tells GitHub Pages to serve files as-is without Jekyll processing.
- `images/profile.jpg`: profile photo.

## Editing Content

Edit `index.html` directly.

- News: add new `<li>` items at the top of the News list.
- Publications: add new `<li>` items at the top of the Publications list.
- Education, Experience, and Recognitions: edit the corresponding `<section>`.

For News and Publications, the page automatically hides older entries after the configured `data-visible-count` and adds a "Show more" button when needed.
