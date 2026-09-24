# Učila — Build Prompt for Copilot

Build a Hugo website: **MAKE&LEARN**, an open-source library of DIY teaching aids ("didactic accessories") for teachers. Each entry is a makeable object with a description, classroom use, materials, fabrication files and step-by-step build instructions. Think Instructables, but curated, clean and made for schools.

Tone of all copy: **warm, encouraging, practical, teacher-to-teacher, never corporate.**

Work step by step and verify the site builds with `hugo --gc --minify` after each stage:

1. Config + Hextra module + languages + i18n
2. Archetype + taxonomies
3. Layouts and partials (home, catalog with filters, single page, files partial)
4. Sample content (3 entries × 3 languages)
5. Repo extras (README, CONTRIBUTING, templates) + CI deploy

---

## 1. Stack

- Hugo extended (latest).
- Theme: **Hextra** (`github.com/imfing/hextra`), added as a **Hugo module** (no npm, no git submodule).
- Deploy with a GitHub Actions workflow to GitHub Pages.
- Keep custom code minimal: override or extend Hextra layouts, never fork the theme.
- Vanilla JS only, no frameworks. Mobile-first, accessible (alt texts, contrast, keyboard navigation), fast.

---

## 2. Languages

Three languages: **Slovenian (default)**, **Serbian Latin (`sr-Latn`)**, **English**.

### `hugo.toml` (languages part)

```toml
defaultContentLanguage = "sl"
defaultContentLanguageInSubdir = false

[languages.sl]
  languageCode = "sl-SI"
  languageName = "Slovenščina"
  title = "Učila — odprta knjižnica učnih pripomočkov"
  weight = 1

[languages.sr]
  languageCode = "sr-Latn"
  languageName = "Srpski"
  title = "Učila — otvorena biblioteka nastavnih sredstava"
  weight = 2

[languages.en]
  languageCode = "en"
  languageName = "English"
  title = "Učila — open library of DIY teaching aids"
  weight = 3
```

### Rules

- **All UI text comes from i18n files.** No hardcoded strings in layouts.
- **Translation by filename inside page bundles:** `index.sl.md`, `index.sr.md` and `index.en.md` share the same resource files (STL, SVG, PDF, photos). Files are never duplicated per language.
- **Taxonomy values are language-neutral keys** (`math`, `laser`, `easy`). Always display them via i18n (`{{ i18n .Name | default .Name }}`). Filter chips and URLs use the keys.
- **Missing translation:** show the Slovenian version with a friendly banner using `not_translated`, linking to the contribute page.
- Language switcher in the navbar shows `languageName` (Slovenščina / Srpski / English).
- If Hextra lacks built-in UI strings for Serbian (search placeholder etc.), copy its English theme i18n keys into `i18n/sr.yaml` and translate them into Serbian Latin (ekavian).

### `i18n/sl.yaml`

```yaml
hero_title: "Učila, ki jih lahko narediš sam"
hero_subtitle: "Odprta knjižnica učnih pripomočkov z načrti, datotekami in navodili. Od učiteljev, za učitelje."
hero_cta: "Razišči učila"
hero_cta_contribute: "Deli svoje učilo"
latest: "Nova učila"
browse_by_subject: "Po predmetih"
browse_by_machine: "Po izdelavi"
filters: "Filtri"
clear_filters: "Počisti"
no_results: "Ni zadetkov. Mogoče pa ravno ti narediš prvega?"
subject: "Predmet"
age: "Starost"
machine: "Izdelava"
difficulty: "Zahtevnost"
time: "Čas izdelave"
cost: "Okvirna cena"
license: "Licenca"
authors: "Avtorji"
materials: "Material"
quantity: "Količina"
files: "Datoteke za izdelavo"
download: "Prenesi"
download_all: "Prenesi vse (.zip)"
classroom_use: "Uporaba pri pouku"
build_steps: "Koraki izdelave"
made_one: "Si ga izdelal/a? Pokaži nam!"
made_one_text: "Deli fotografijo ali predlagaj izboljšavo. Vsak odziv pomaga naslednjemu učitelju."
share_photo: "Deli fotografijo"
suggest_fix: "Predlagaj popravek"
not_translated: "To učilo še ni prevedeno. Pomagaj s prevodom!"
contribute: "Prispevaj"
footer_license: "Vsebina: CC BY-SA 4.0 · Koda: MIT"
easy: "Enostavno"
medium: "Srednje"
hard: "Zahtevno"
laser: "Laserski rez"
3d-print: "3D tisk"
cnc: "CNC"
hand-tools: "Ročno orodje"
electronics: "Elektronika"
math: "Matematika"
physics: "Fizika"
biology: "Biologija"
chemistry: "Kemija"
cs: "Računalništvo"
languages: "Jeziki"
```

### `i18n/sr.yaml`

```yaml
hero_title: "Učila koja možeš da napraviš sam"
hero_subtitle: "Otvorena biblioteka nastavnih sredstava sa nacrtima, fajlovima i uputstvima. Od nastavnika, za nastavnike."
hero_cta: "Istraži učila"
hero_cta_contribute: "Podeli svoje učilo"
latest: "Nova učila"
browse_by_subject: "Po predmetima"
browse_by_machine: "Po načinu izrade"
filters: "Filteri"
clear_filters: "Očisti"
no_results: "Nema rezultata. Možda baš ti napraviš prvo?"
subject: "Predmet"
age: "Uzrast"
machine: "Izrada"
difficulty: "Težina"
time: "Vreme izrade"
cost: "Okvirna cena"
license: "Licenca"
authors: "Autori"
materials: "Materijal"
quantity: "Količina"
files: "Fajlovi za izradu"
download: "Preuzmi"
download_all: "Preuzmi sve (.zip)"
classroom_use: "Upotreba na času"
build_steps: "Koraci izrade"
made_one: "Napravio/la si ovo? Pokaži nam!"
made_one_text: "Podeli fotografiju ili predloži poboljšanje. Svaki odgovor pomaže sledećem nastavniku."
share_photo: "Podeli fotografiju"
suggest_fix: "Predloži ispravku"
not_translated: "Ovo učilo još nije prevedeno. Pomozi sa prevodom!"
contribute: "Doprinesi"
footer_license: "Sadržaj: CC BY-SA 4.0 · Kod: MIT"
easy: "Lako"
medium: "Srednje"
hard: "Zahtevno"
laser: "Lasersko sečenje"
3d-print: "3D štampa"
cnc: "CNC"
hand-tools: "Ručni alat"
electronics: "Elektronika"
math: "Matematika"
physics: "Fizika"
biology: "Biologija"
chemistry: "Hemija"
cs: "Informatika"
languages: "Jezici"
```

### `i18n/en.yaml`

```yaml
hero_title: "Teaching aids you can make yourself"
hero_subtitle: "An open library of classroom aids with plans, files and step-by-step guides. By teachers, for teachers."
hero_cta: "Explore aids"
hero_cta_contribute: "Share your aid"
latest: "Newest aids"
browse_by_subject: "By subject"
browse_by_machine: "By method"
filters: "Filters"
clear_filters: "Clear"
no_results: "Nothing here yet. Maybe you'll make the first one?"
subject: "Subject"
age: "Age"
machine: "Method"
difficulty: "Difficulty"
time: "Build time"
cost: "Approx. cost"
license: "License"
authors: "Authors"
materials: "Materials"
quantity: "Qty"
files: "Files to make it"
download: "Download"
download_all: "Download all (.zip)"
classroom_use: "Using it in class"
build_steps: "Build steps"
made_one: "Made one? Show us!"
made_one_text: "Share a photo or suggest an improvement. Every reply helps the next teacher."
share_photo: "Share a photo"
suggest_fix: "Suggest a fix"
not_translated: "This aid isn't translated yet. Help us translate it!"
contribute: "Contribute"
footer_license: "Content: CC BY-SA 4.0 · Code: MIT"
easy: "Easy"
medium: "Medium"
hard: "Challenging"
laser: "Laser cut"
3d-print: "3D print"
cnc: "CNC"
hand-tools: "Hand tools"
electronics: "Electronics"
math: "Math"
physics: "Physics"
biology: "Biology"
chemistry: "Chemistry"
cs: "Computer science"
languages: "Languages"
```

---

## 3. Content model

Each teaching aid is a **page bundle** in `content/ucila/<slug>/`:

```
content/ucila/ulomki-krog/
  index.sl.md
  index.sr.md
  index.en.md
  cover.jpg
  step-1.jpg, step-2.jpg ...
  plosca.svg        # laser cut
  drzalo.stl        # 3D print
  navodila.pdf
  ulomki-krog.zip   # optional: all files
```

### Front matter

Create archetype `archetypes/ucila.md` containing all fields with helpful comments:

```yaml
title: ""
summary: ""               # one sentence: what it is and what it teaches
cover: "cover.jpg"
subject: []               # math, physics, biology, chemistry, cs ...
age: []                   # "6-9", "10-14", "15-19"
machine: []               # laser, 3d-print, cnc, hand-tools, electronics
difficulty: "easy"        # easy | medium | hard
time: "2h"                # build time
cost: "5 €"               # approximate
materials:
  - name: ""
    qty: ""
license: "CC BY-SA 4.0"
authors: []
school: ""
date: {{ .Date }}
```

Taxonomies in `hugo.toml`: `subject`, `age`, `machine`, `difficulty`, `authors`.

---

## 4. Pages and layouts

### Home
- Hero: `hero_title`, `hero_subtitle`, two buttons (`hero_cta` → catalog, `hero_cta_contribute` → contribute page).
- Grid of latest aids (Hextra cards).
- Quick links: `browse_by_subject` and `browse_by_machine` as friendly chips or icon cards.
- Short "how it works" strip: find → download files → make → use in class → share back.

### Catalog (`/ucila/`)
- Card grid: cover (webp thumbnail), title, subject, age, difficulty badge, build time.
- **Client-side filtering** (vanilla JS): combinable filter chips for subject, age, machine, difficulty. State is stored in the URL query string so filtered views can be shared. `clear_filters` button, `no_results` message.
- Filter data comes from a JSON index generated by Hugo (custom output format), or from `data-*` attributes on the cards.

### Single aid page (in this order)
1. Cover image + summary.
2. Info box: age, subject, method, difficulty, time, cost, license, authors.
3. **Materials** table from front matter.
4. **Files** section: a partial that auto-lists all non-image bundle resources (`.Resources`) with file-type icon, file size and download link. If a `.zip` exists, show a prominent `download_all` button. It must work for all languages (resources shared across translations).
5. **Classroom use**: body section on how to use the aid in a lesson.
6. **Build steps**: Hextra `steps` shortcode, images via a figure shortcode with alt text.
7. "Made one?" box (`made_one`, `made_one_text`) with buttons linking to GitHub issue templates (`share_photo`, `suggest_fix`).
8. `not_translated` banner when showing a fallback language.

### Other pages
- Taxonomy pages for each taxonomy, reusing the catalog card grid.
- **Contribute** page (sl/sr/en): how to add an aid (fork → `hugo new ucila/my-aid` → add files and photos → pull request), plus how to help with translations.
- Footer: `footer_license`, link to repo, language switcher.

### Theme settings
- Hextra search on (FlexSearch), dark mode on.
- Image processing: resize covers to webp thumbnails for cards.

---

## 5. Repo extras

- `README.md`: what Učila is, run locally (`hugo server`), add an aid (`hugo new ucila/my-aid`), add a translation.
- `CONTRIBUTING.md` in Slovenian, Serbian and English.
- PR template with checklist: photos with alt text, fabrication files, license, steps tested, at least one language complete.
- Issue templates: "New aid idea", "I built this", "Error in instructions", "Translation help".
- `.github/workflows/deploy.yml` for GitHub Pages (Hugo extended, Go for modules).
- LICENSE: MIT for code, CC BY-SA 4.0 for content (stated in README and footer).

---

## 6. Sample content

Create 3 realistic entries, each fully written in **sl, sr and en**, with placeholder files and images:

1. **Laser-cut fraction circles**: math, age 6-9, laser, easy.
2. **3D-printed DNA model kit**: biology, age 15-19, 3d-print, medium.
3. **ESP32 reaction-time game**: physics + cs, age 10-14, electronics, medium. Include a short MicroPython snippet in the build steps.

Each entry has a real "classroom use" section with a concrete lesson idea (10–20 min activity).

---

## 7. Done when

- `hugo --gc --minify` builds with no errors or warnings.
- All three languages work, switcher works, no hardcoded UI strings.
- Filters combine correctly and survive a page reload via URL.
- Files section lists downloads on every language version of an aid.
- Lighthouse: performance and accessibility ≥ 90 on mobile.
