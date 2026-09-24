# Doprinesi Učilima

Hvala! Svako podeljeno učilo nekome uštedi popodne rada. Ne mora da bude savršeno. Važno je da se pokazalo u tvom razredu.

*English: [CONTRIBUTING.md](CONTRIBUTING.md) · Slovenščina: [CONTRIBUTING.sl.md](CONTRIBUTING.sl.md)*

## Ne znaš Git? Nema veze

Otvori zahtev, a ostalo sredićemo mi:

- 💡 [Nova ideja za učilo](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml)
- 📸 [Napravio/la sam ovo](https://github.com/Pfyber/ucila/issues/new?template=i-built-this.yml)
- 🛠 [Greška u uputstvu](https://github.com/Pfyber/ucila/issues/new?template=error-in-instructions.yml)
- 🌍 [Pomoć sa prevodom](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml)

## Dodavanje učila putem pull requesta

1. Napravi **fork** repozitorijuma i kloniraj ga.
2. Pokreni `hugo new ucila/moje-ucilo` (kratko ime, mala slova, bez dijakritika).
3. Popuni zaglavlje fajla. Svako polje ima kratku napomenu.
4. U isti folder dodaj `cover.jpg`, fotografije koraka i fajlove za izradu.
5. Napiši dva odeljka:
   - **Upotreba na času**: konkretna aktivnost od 10–20 minuta. Šta nastavnik priprema? Šta učenici rade i šta uče?
   - **Koraci izrade**: unutar `{{% steps %}}`, po jedan naslov `###` za svaki korak.
6. Proveri sa `hugo server`, otvori pull request i prođi kroz listu.

### Dobro je znati

- **Opis fotografija je obavezan** (`cover_alt` i `alt` kod svakog `figure`). Bez njega se sajt ne gradi.
- **Fotografije:** JPG, najmanje 1200 px širine. Manje verzije sajt pravi sam. Molimo, bez lica učenika.
- **Vrednosti taksonomija su ključevi**, ne reči: `subject: [math]`, `machine: [laser]`, `difficulty: "easy"`. Lista je u `i18n/sr.yaml`.
- **Jedan jezik je dovoljan.** Fajlove jezika koje ne popuniš obriši. Sajt će tu prikazati poziv na prevod.
- **Licenca:** doprinosom prihvataš objavljivanje sadržaja pod CC BY-SA 4.0 (kôd pod MIT). Deli samo fajlove koje smeš da deliš.

## Prevodi

Iskopiraj `index.sl.md` → `index.sr.md` / `index.en.md` i prevedi. Srpski pišemo latinicom, ekavski. Nazive fajlova u tekstu ne menjaj, jer su fajlovi zajednički za sve jezike.
