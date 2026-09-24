---
title: "Igra vremena reakcije sa ESP32"
summary: "Jednostavna igra sa ESP32, lampicom i tasterom koja meri vreme reakcije u milisekundama i spaja fiziku, statistiku i prvo programiranje."
cover: "cover.jpg"
cover_alt: "Mikrokontroler ESP32 na protobordu sa crvenom lampicom, žutim tasterom i prikazom 243 ms."
subject: [physics, cs]
age: ["10-14"]
machine: [electronics]
difficulty: "medium"
time: "2h"
cost: "15 €"
materials:
  - name: "Razvojna ploča ESP32 (DevKit)"
    qty: "1"
  - name: "Protobord, 400 rupica"
    qty: "1"
  - name: "LED, 5 mm, crvena"
    qty: "1"
  - name: "Otpornik 220 Ω"
    qty: "1"
  - name: "Taster (bez zadrške), veliki"
    qty: "1"
  - name: "Kratkospojne žice"
    qty: "6"
  - name: "USB kabl"
    qty: "1"
  - name: "Kućište, štampano (`ohisje.stl`, opciono)"
    qty: "1"
license: "CC BY-SA 4.0"
authors: ["Ana Novak"]
school: ""
date: 2026-09-18
---

## Upotreba na času

Koliko vremena treba signalu od oka do prsta? Učenici to obično nagađaju – a ovom igrom mere, zapisuju i porede. Usput vide da je i njihov sopstveni program merni instrument.

**Aktivnost: "Rekord razreda u reakciji" (20 minuta, u paru)**

1. Jedan učenik igra, drugi zapisuje. Svako ima pet pokušaja; igra sama ispisuje prosek.
2. Na tabli nacrtajte jednostavan stubičasti dijagram: koliko učenika u razredu ima 150–200 ms, 200–250 ms i tako dalje.
3. Razgovor: zašto rezultati nisu svaki put isti? Šta se dešava ako igrač gleda u stranu i lampicu primeti samo "krajičkom oka"? A ako je umoran?
4. Za informatičku grupu: kako bi program prepoznao "varanje", kada neko pritisne pre nego što lampica zasvetli? (Savet: ceo kôd u `reakcija.py` to već radi.)

**Savet:** istu igru možete da iskoristite na fizici za računanje koliko metara automobil pređe pri 50 km/h pre nego što vozač uopšte pritisne kočnicu.

## Koraci izrade

{{% steps %}}

### Postavi kolo

ESP32 postavi na sredinu protoborda. LED sa otpornikom od 220 Ω poveži između GPIO 2 i GND, a taster između GPIO 15 i GND. Šema je u fajlu `vezje.svg`.

{{< figure src="step-1.jpg" alt="ESP32 postavljen na sredinu protoborda." >}}

### Poveži lampicu i taster

Duža nožica LED-a (anoda) ide ka otporniku. Tasteru su potrebne samo dve žice, jer koristimo unutrašnji pull-up otpornik.

{{< figure src="step-2.jpg" alt="ESP32 na protobordu, žicama povezan sa crvenom lampicom i žutim tasterom." >}}

### Učitaj program

Na ESP32 instaliraj MicroPython (npr. preko Thonny-ja). Za prvu probu dovoljan je ovaj kratak kôd – cela igra sa pet pokušaja i prosekom nalazi se u `reakcija.py`:

```python
from machine import Pin
import time, random

led = Pin(2, Pin.OUT)
button = Pin(15, Pin.IN, Pin.PULL_UP)

time.sleep_ms(random.randint(1500, 4000))
led.on()
start = time.ticks_ms()
while button.value() == 1:
    pass
print(time.ticks_diff(time.ticks_ms(), start), "ms")
led.off()
```

Fajl `reakcija.py` sačuvaj na ploču i pokreni ga sa `import reakcija`.

{{< figure src="step-3.jpg" alt="Prozor terminala sa ispisanim vremenima reakcije i prosekom od 254 ms." >}}

{{% /steps %}}
