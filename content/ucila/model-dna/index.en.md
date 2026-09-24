---
title: "3D-printed DNA model kit"
summary: "A 3D-printed kit of base pairs and backbone links that students assemble into a double helix, discovering the base-pairing rules along the way."
cover: "cover.jpg"
cover_alt: "Assembled DNA double helix model on a stand with coloured base pairs, loose pieces lying next to it."
subject: [biology]
age: ["15-19"]
machine: [3d-print]
difficulty: "medium"
time: "6h printing + 1h assembly"
cost: "12 €"
materials:
  - name: "PLA filament in 4 colours (red, orange, green, blue)"
    qty: "60 g each"
  - name: "PLA filament, dark blue or grey (backbone)"
    qty: "120 g"
  - name: "Wooden or printed stand"
    qty: "1"
  - name: "A drop of super glue (stand only)"
    qty: "1"
license: "CC BY-SA 4.0"
authors: ["Nikola Petrović"]
school: ""
date: 2026-09-10
---

## Using it in class

Students usually know "A with T, G with C" by heart, but they rarely *feel* it. With this model a wrong pair simply won't sit flush with the next link, so they discover the rule themselves.

**Activity: "Copy the gene" (20 minutes, pairs)**

1. Each pair gets a card with the sequence of one strand, e.g. `ATG CGT ACC`, and a bag of bases.
2. Students build the first strand from the card, then add the complementary strand without help.
3. Once the helix is built, they turn it and count the base pairs in one full turn (10 on the model, close to the real 10.5).
4. Closing challenge: the teacher "causes a mutation" by swapping one base. The pair must find it and explain what it would mean for the protein.

**Tip:** store the model taken apart in four small boxes sorted by colour. The first five minutes of the lesson then go on sorting, which is a great review of the colour code.

## Build steps

{{% steps %}}

### Print the parts

One model needs 20 × `baza.stl` (5 in each colour) and 20 × `hrbtenica.stl`. Suggested settings: 0.2 mm layers, 15 % infill, no supports. Print each colour of bases as its own job so you don't have to swap filament mid-print.

{{< figure src="step-1.jpg" alt="A 3D printer above a bed covered with freshly printed coloured base pieces." >}}

### Check the colour code

Sort the bases before assembly: A red, T orange, G green, C blue. The colour key is also in `navodila.pdf`, ready to print and laminate.

{{< figure src="step-2.jpg" alt="Four coloured base pairs labelled A–T, T–A, G–C and C–G." >}}

### Build the helix

Push each half-base into a backbone link and stack the links, turning each one by 36°. Glue only the stand; everything else should come apart again.

{{< figure src="step-3.jpg" alt="Assembled double helix with coloured base pairs." >}}

{{% /steps %}}
