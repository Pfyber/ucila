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

## Classroom use

A concrete 10–20 minute activity: what the teacher prepares, what pupils do, what they learn.

## Build steps

{{% steps %}}

### Step one

What to do. Add a photo with:

{{< figure src="step-1.jpg" alt="Describe the photo" >}}

### Step two

{{% /steps %}}
