# Contributing to Učila

Thanks for sharing. An aid doesn't need to be perfect; it only needs to have worked in your classroom.

*Slovenščina: [CONTRIBUTING.sl.md](CONTRIBUTING.sl.md) · Srpski: [CONTRIBUTING.sr.md](CONTRIBUTING.sr.md)*

## No Git? Use the template

1. Download [`predloga-ucila.zip`](https://pfyber.github.io/ucila/predloga-ucila.zip) and unzip it.
2. Fill in `index.en.md` (or the Slovenian/Serbian file) in any text editor.
3. Add `cover.jpg`, step photos and the files to make it.
4. Zip the folder and attach it to a [new aid issue](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml).

Other forms:

- 💡 [New aid idea](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml)
- 📸 [I built this](https://github.com/Pfyber/ucila/issues/new?template=i-built-this.yml)
- 🛠 [Error in instructions](https://github.com/Pfyber/ucila/issues/new?template=error-in-instructions.yml)
- 🌍 [Translation help](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml)

## Adding an aid with a pull request

1. **Fork** the repository and clone your fork.
2. Run `hugo new ucila/my-aid` (use a short, lowercase slug without special characters).
3. Fill in the front matter. Each field has a comment explaining it.
4. Add `cover.jpg`, step photos and your fabrication files to the same folder.
5. Write two sections:
   - **Classroom use**: a concrete 10–20 minute activity. What does the teacher prepare? What do pupils do and learn?
   - **Build steps**: inside `{{% steps %}}`, one `###` heading per step.
6. Check it with `hugo server`, then open a pull request and go through the checklist.

### Good to know

- **Alt text is required** for every photo (`cover_alt`, and `alt` on every `figure`). The build fails without it.
- **Photos:** JPG, at least 1200 px wide. The site creates the small versions. Please no pupils' faces.
- **Taxonomy values are keys**, not words: `subject: [math]`, `machine: [laser]`, `difficulty: "easy"`. See `i18n/en.yaml` for the list.
- **One language is enough.** Delete the language files you don't fill in, and the site shows a "help us translate" banner there.
- **License:** by contributing you agree to publish content under CC BY-SA 4.0 (code under MIT). Only share files you have the right to share.

## Translations

Copy `index.sl.md` → `index.sr.md` / `index.en.md` and translate. Serbian uses Latin script, ekavian. Keep the file names in the text as they are, since the files are shared by all languages.

UI text lives in `i18n/`. When you add a key, add it to all three files.
