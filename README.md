# Učila

**An open library of DIY teaching aids, by teachers for teachers.**
Every aid comes with a description, a classroom activity, a materials list, fabrication files (laser, 3D print, CNC, electronics) and step-by-step build instructions, in Slovenian, Serbian (Latin) and English.

🌐 https://pfyber.github.io/ucila/

> Slovenščina: [CONTRIBUTING.sl.md](CONTRIBUTING.sl.md) · Srpski: [CONTRIBUTING.sr.md](CONTRIBUTING.sr.md) · English: [CONTRIBUTING.md](CONTRIBUTING.md)

## Run it locally

You need [Hugo extended](https://gohugo.io/installation/) (≥ 0.158) and [Go](https://go.dev/dl/), which Hugo uses to fetch the [Hextra](https://github.com/imfing/hextra) theme module.

```bash
git clone https://github.com/Pfyber/ucila.git
cd ucila
hugo server
```

Open http://localhost:1313/ucila/. For a production build: `hugo --gc --minify`.

## Add an aid

```bash
hugo new ucila/my-aid
```

This creates a page bundle with one file per language:

```
content/ucila/my-aid/
  index.sl.md   index.sr.md   index.en.md
```

Then drop these into the same folder:

- `cover.jpg`: the main photo (4:3 works best)
- `step-1.jpg`, `step-2.jpg` …: photos for the build steps, used with `{{< figure src="step-1.jpg" alt="…" >}}` (alt text is required)
- fabrication files: `.svg`/`.dxf` (laser), `.stl`/`.3mf` (3D print), `.pdf`, code …
- optionally `my-aid.zip` with all files, which adds a "Download all" button

Every non-photo file in the folder is listed for download automatically, on every language version. Files are shared between languages, so never copy them per language.

Front-matter values for `subject`, `age`, `machine` and `difficulty` are **language-neutral keys** (`math`, `6-9`, `laser`, `easy`). Their display names live in `i18n/*.yaml`. Adding a new subject or method means adding the key to all three i18n files.

## Add a translation

Copy `index.sl.md` to `index.sr.md` or `index.en.md` in the aid's folder and translate the text. Nothing else is needed.

If a translation is missing, the site still shows the aid in that language using the Slovenian text, with a banner inviting readers to help translate it (see `content/ucila/_content.gotmpl`).

UI strings are in `i18n/sl.yaml`, `i18n/sr.yaml` and `i18n/en.yaml`. Layouts contain no hard-coded text.

## How it's built

| Part | Where |
|---|---|
| Theme | Hextra, imported as a Hugo module (`hugo.toml`); never forked |
| Home, catalog, aid page, taxonomy pages | `layouts/home.html`, `layouts/ucila/`, `layouts/term.html`, `layouts/taxonomy.html` |
| Cards, files list, info box, fallback banner … | `layouts/_partials/ucila/` |
| Catalog filters (vanilla JS, state in the URL) | `assets/js/filters.js` |
| Styles on top of Hextra | `assets/css/custom.css` |
| Missing-translation fallback | `content/ucila/_content.gotmpl` |
| Deploy | `.github/workflows/deploy.yml` (GitHub Pages) |

To deploy from your own fork, change `baseURL`, `params.repo` and the module path in `go.mod`, then enable **Settings → Pages → Source: GitHub Actions**.

## License

- **Content** (texts, photos, fabrication files in `content/`): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), see [LICENSE-CONTENT](LICENSE-CONTENT)
- **Code** (everything else): [MIT](LICENSE)
