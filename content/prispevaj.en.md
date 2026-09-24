---
title: "Contribute"
description: "How to add your own teaching aid to Učila or help with translations."
---

Made something that worked in your classroom? Share it! It doesn't have to be perfect. It only has to save another teacher an afternoon. Every aid is a folder with text, photos and the files needed to make it.

## Add an aid {#add}

{{% steps %}}

### Fork the repository

On [GitHub](https://github.com/Pfyber/ucila), click **Fork**. If Git isn't your thing, no worries: you can do everything in the browser, or simply [open an issue with your idea](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml) and we'll help.

### Create a new aid

```bash
hugo new ucila/my-aid
```

This creates `content/ucila/my-aid/` with `index.sl.md`, `index.sr.md` and `index.en.md`. Each file's front matter lists every field with a short comment. Feel free to delete languages you won't translate; the site will show the Slovenian text in that language with an invitation to translate it.

### Add files and photos

Copy `cover.jpg`, step photos (`step-1.jpg` ...) and the fabrication files (SVG, DXF, STL, PDF, code) into the same folder. The page lists them for download automatically. Every photo in the text needs a description (`alt`).

### Open a pull request

Check the page locally with `hugo server`, then open a pull request. The checklist you'll see reminds you of everything that matters.

{{% /steps %}}

## Help with translations {#translations}

Many aids exist in only one language so far. Translating one is a great first contribution:

1. Find an aid that says it isn't translated yet.
2. In its folder, copy `index.sl.md` to `index.sr.md` or `index.en.md`.
3. Translate the title, summary, photo descriptions, materials and text. Don't duplicate files or photos; all languages share them.
4. Open a pull request, or [send us the translation in an issue](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml).

## License

Content is published under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), site code under MIT. By contributing, you agree that your aid is shared under the same terms.
