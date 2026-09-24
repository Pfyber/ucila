# Prispevaj k Učilom

Hvala, da deliš. Učilo ni nujno popolno; dovolj je, da se je v razredu obneslo.

*English: [CONTRIBUTING.md](CONTRIBUTING.md) · Srpski: [CONTRIBUTING.sr.md](CONTRIBUTING.sr.md)*

## Brez Gita: uporabi predlogo

1. Prenesi [`predloga-ucila.zip`](https://pfyber.github.io/ucila/predloga-ucila.zip) in jo razpakiraj.
2. V urejevalniku besedila izpolni `index.sl.md`.
3. Dodaj `cover.jpg`, fotografije korakov in datoteke za izdelavo.
4. Mapo zapakiraj in jo pripni k [zahtevku za novo učilo](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml).

Drugi obrazci:

- 💡 [Nova ideja za učilo](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml)
- 📸 [Izdelal/a sem to](https://github.com/Pfyber/ucila/issues/new?template=i-built-this.yml)
- 🛠 [Napaka v navodilih](https://github.com/Pfyber/ucila/issues/new?template=error-in-instructions.yml)
- 🌍 [Pomoč pri prevodu](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml)

## Dodajanje učila s pull requestom

1. Naredi **fork** repozitorija in ga kloniraj.
2. Zaženi `hugo new ucila/moje-ucilo` (kratko ime, male črke, brez šumnikov).
3. Izpolni glavo datoteke. Vsako polje ima kratko opombo.
4. V isto mapo dodaj `cover.jpg`, fotografije korakov in datoteke za izdelavo.
5. Napiši dva razdelka:
   - **Uporaba pri pouku**: konkretna dejavnost za 10–20 minut. Kaj pripravi učitelj? Kaj delajo učenci in kaj se naučijo?
   - **Koraki izdelave**: znotraj `{{% steps %}}`, za vsak korak en naslov `###`.
6. Preveri z `hugo server`, odpri pull request in pojdi skozi seznam.

### Dobro je vedeti

- **Opis fotografij je obvezen** (`cover_alt` in `alt` pri vsakem `figure`). Brez njega se stran ne zgradi.
- **Fotografije:** JPG, vsaj 1200 px široke. Manjše različice naredi stran sama. Prosimo, brez obrazov učencev.
- **Vrednosti taksonomij so ključi**, ne besede: `subject: [math]`, `machine: [laser]`, `difficulty: "easy"`. Seznam je v `i18n/sl.yaml`.
- **En jezik je dovolj.** Datoteke jezikov, ki jih ne izpolniš, izbriši. Stran bo tam pokazala vabilo k prevodu.
- **Licenca:** s prispevkom se strinjaš z objavo vsebine pod CC BY-SA 4.0 (koda pod MIT). Deli samo datoteke, ki jih smeš deliti.

## Prevodi

Skopiraj `index.sl.md` → `index.sr.md` / `index.en.md` in prevedi. Srbščina je v latinici, ekavsko. Imen datotek v besedilu ne spreminjaj, ker so datoteke skupne vsem jezikom.
