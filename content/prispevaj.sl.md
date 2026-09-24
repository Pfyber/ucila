---
title: "Prispevaj"
description: "Kako v Učila dodaš svoje učilo ali pomagaš s prevodom."
---

Si naredil/a pripomoček, ki se je v razredu obnesel? Deli ga! Ni treba, da je popoln. Dovolj je, da je nekomu drugemu prihranil popoldne dela. Vsako učilo je mapa z besedilom, fotografijami in datotekami za izdelavo.

## Dodaj učilo {#add}

{{% steps %}}

### Naredi fork repozitorija

Na [GitHubu](https://github.com/Pfyber/ucila) klikni **Fork**. Če ti Git ni domač, nič hudega: vse se da narediti tudi v brskalniku, lahko pa nam samo [odpreš zahtevek z idejo](https://github.com/Pfyber/ucila/issues/new?template=new-aid-idea.yml) in ti pomagamo.

### Ustvari novo učilo

```bash
hugo new ucila/moje-ucilo
```

Ukaz ustvari mapo `content/ucila/moje-ucilo/` z datotekami `index.sl.md`, `index.sr.md` in `index.en.md`. V glavi vsake datoteke so vsa polja s kratkimi opombami. Neprevedene jezike lahko preprosto izbrišeš; stran bo v tem jeziku pokazala slovensko besedilo z vabilom k prevodu.

### Dodaj datoteke in fotografije

V isto mapo prekopiraj `cover.jpg`, fotografije korakov (`step-1.jpg` ...) in datoteke za izdelavo (SVG, DXF, STL, PDF, kodo). Stran jih samodejno našteje in ponudi za prenos. Vsaka fotografija v besedilu potrebuje opis (`alt`).

### Odpri pull request

Preveri stran lokalno z `hugo server`, nato odpri pull request. Seznam, ki ga boš videl/a, te spomni na vse pomembno.

{{% /steps %}}

## Pomagaj s prevodom {#translations}

Veliko učil je zaenkrat samo v enem jeziku. Prevod je odličen prvi prispevek:

1. Poišči učilo, na katerem piše, da še ni prevedeno.
2. V njegovi mapi skopiraj `index.sl.md` v `index.sr.md` ali `index.en.md`.
3. Prevedi naslov, povzetek, opis fotografij, material in besedilo. Datotek in fotografij ne podvajaj, saj so skupne vsem jezikom.
4. Odpri pull request ali pa [nam pošlji prevod v zahtevku](https://github.com/Pfyber/ucila/issues/new?template=translation-help.yml).

## Licenca

Vsebina je objavljena pod licenco [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sl), koda strani pod licenco MIT. S prispevkom se strinjaš, da tvoje učilo delimo pod enakimi pogoji.
