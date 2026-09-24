---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
summary: ""               # one sentence: what it is and what it teaches
cover: "cover.jpg"        # photo in this folder, ideally 4:3, min. 1200 px wide
cover_alt: ""             # describe the photo for screen readers
subject: []               # math, physics, biology, chemistry, cs, languages
age: []                   # "6-9", "10-14", "15-19"
machine: []               # laser, 3d-print, cnc, hand-tools, electronics
difficulty: "easy"        # easy | medium | hard
time: "2h"                # build time
cost: "5 €"               # approximate
materials:
  - name: ""
    qty: ""
license: "CC BY-SA 4.0"
authors: []               # your name(s), e.g. ["Ana Novak"]
school: ""
date: {{ .Date }}
---

## Uporaba pri pouku

Konkretna dejavnost za 10–20 minut: kaj pripravi učitelj, kaj delajo učenci in kaj se naučijo.

## Koraki izdelave

{{% steps %}}

### Prvi korak

Kaj narediti. Fotografijo dodaš tako:

{{< figure src="step-1.jpg" alt="Opiši fotografijo" >}}

### Drugi korak

{{% /steps %}}
