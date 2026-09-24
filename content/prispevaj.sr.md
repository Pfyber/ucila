---
title: "Doprinesi"
description: "Kako da u Učila dodaš svoje učilo ili pomogneš sa prevodom."
---

Napravio/la si nastavno sredstvo koje se pokazalo u razredu? Podeli ga! Ne mora da bude savršeno. Dovoljno je da nekom drugom uštedi popodne rada. Svako učilo je folder sa tekstom, fotografijama i fajlovima za izradu.

## Dodaj učilo {#add}

{{% steps %}}

### Napravi fork repozitorijuma

Na [GitHub-u](https://github.com/Pfyber/ucila) klikni **Fork**. Ako ti Git nije poznat, nema veze: sve može i u pregledaču, a možeš i samo da nam [otvoriš zahtev sa idejom](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml), pa ćemo ti pomoći.

### Napravi novo učilo

```bash
hugo new ucila/moje-ucilo
```

Komanda pravi folder `content/ucila/moje-ucilo/` sa fajlovima `index.sl.md`, `index.sr.md` i `index.en.md`. U zaglavlju svakog fajla nalaze se sva polja sa kratkim napomenama. Jezike koje ne prevodiš slobodno obriši; stranica će na tom jeziku prikazati slovenački tekst sa pozivom na prevod.

### Dodaj fajlove i fotografije

U isti folder iskopiraj `cover.jpg`, fotografije koraka (`step-1.jpg` ...) i fajlove za izradu (SVG, DXF, STL, PDF, kôd). Stranica ih sama izlistava i nudi za preuzimanje. Svaka fotografija u tekstu mora da ima opis (`alt`).

### Otvori pull request

Proveri stranicu lokalno sa `hugo server`, pa otvori pull request. Lista koju ćeš videti podsetiće te na sve važno.

{{% /steps %}}

## Pomozi sa prevodom {#translations}

Mnoga učila su za sada samo na jednom jeziku. Prevod je odličan prvi doprinos:

1. Pronađi učilo na kome piše da još nije prevedeno.
2. U njegovom folderu iskopiraj `index.sl.md` u `index.sr.md` ili `index.en.md`.
3. Prevedi naslov, sažetak, opise fotografija, materijal i tekst. Fajlove i fotografije ne dupliraj, jer su zajednički za sve jezike.
4. Otvori pull request ili nam [pošalji prevod kroz zahtev](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml).

## Licenca

Sadržaj je objavljen pod licencom [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sr_Latn), a kôd sajta pod licencom MIT. Doprinosom prihvataš da tvoje učilo delimo pod istim uslovima.
