---
title: "Model DNK za sklapanje"
summary: "3D-štampani komplet baznih parova i članova kičme od kog učenici sklapaju dvostruki heliks i usput otkrivaju pravila komplementarnosti."
cover: "cover.jpg"
cover_alt: "Sklopljen model dvostrukog heliksa DNK na postolju sa obojenim baznim parovima, pored njega pojedinačni delovi."
subject: [biology]
age: ["15-19"]
machine: [3d-print]
difficulty: "medium"
time: "6h štampe + 1h sklapanja"
cost: "12 €"
materials:
  - name: "PLA filament u 4 boje (crvena, narandžasta, zelena, plava)"
    qty: "po 60 g"
  - name: "PLA filament, tamnoplavi ili sivi (kičma)"
    qty: "120 g"
  - name: "Drveno ili štampano postolje"
    qty: "1"
  - name: "Kap sekundnog lepka (samo za postolje)"
    qty: "1"
license: "CC BY-SA 4.0"
authors: ["Nikola Petrović"]
school: ""
date: 2026-09-10
---

## Upotreba na času

Učenici pravila "A sa T, G sa C" obično znaju napamet, ali ih retko zaista *osete*. Kod ovog modela pogrešan par jednostavno ne naleže na susedni član, pa pravilo otkrivaju sami.

**Aktivnost: "Prepiši gen" (20 minuta, u paru)**

1. Svaki par dobija karticu sa sekvencom jednog lanca, npr. `ATG CGT ACC`, i kesicu baza.
2. Učenici sklapaju prvi lanac po kartici, a zatim bez pomoći dodaju komplementarni lanac.
3. Kada je heliks sklopljen, okreću ga i broje koliko baznih parova ima u jednom zavoju (kod modela 10 – skoro kao u stvarnosti, 10,5).
4. Izazov za kraj: nastavnik "izaziva mutaciju" i menja jednu bazu. Par treba da pronađe grešku i objasni šta bi to značilo za protein.

**Savet:** model čuvajte rasklopljen u četiri kutijice po bojama – prvih pet minuta časa onda prođe u sortiranju, što je odlično ponavljanje kôda boja.

## Koraci izrade

{{% steps %}}

### Odštampaj delove

Za jedan model potrebno je 20 komada `baza.stl` (po 5 u svakoj boji) i 20 komada `hrbtenica.stl`. Preporuka: sloj 0,2 mm, 15 % ispune, bez podrški. Baze štampaj u svakoj boji posebno, da ne menjaš filament tokom štampe.

{{< figure src="step-1.jpg" alt="3D štampač iznad podloge na kojoj su odštampani obojeni delovi baza." >}}

### Proveri kôd boja

Pre sklapanja razvrstaj baze: A crvena, T narandžasta, G zelena, C plava. Kôd boja nalazi se i u fajlu `navodila.pdf`, koji možeš da odštampaš i plastificiraš.

{{< figure src="step-2.jpg" alt="Četiri obojena para baza sa oznakama A–T, T–A, G–C i C–G." >}}

### Sklopi heliks

Svaku polovinu baze utakni u član kičme i članove slaži jedan na drugi, svaki put zakrenute za 36°. Zalepi samo postolje; sve ostalo neka ostane rasklopivo.

{{< figure src="step-3.jpg" alt="Sklopljen dvostruki heliks sa obojenim baznim parovima." >}}

{{% /steps %}}
