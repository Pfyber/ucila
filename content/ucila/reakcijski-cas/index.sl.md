---
title: "Igra reakcijskega časa z ESP32"
summary: "Preprosta igra z ESP32, lučko in tipko, ki izmeri reakcijski čas v milisekundah in združi fiziko, statistiko in prvo programiranje."
cover: "cover.jpg"
cover_alt: "Mikrokrmilnik ESP32 na prototipni ploščici z rdečo lučko, rumeno tipko in prikazom 243 ms."
subject: [physics, cs]
age: ["10-14"]
machine: [electronics]
difficulty: "medium"
time: "2h"
cost: "15 €"
materials:
  - name: "Razvojna plošča ESP32 (DevKit)"
    qty: "1"
  - name: "Prototipna ploščica, 400 luknjic"
    qty: "1"
  - name: "LED, 5 mm, rdeča"
    qty: "1"
  - name: "Upor 220 Ω"
    qty: "1"
  - name: "Tipka (momentna), velika"
    qty: "1"
  - name: "Povezovalne žice"
    qty: "6"
  - name: "Kabel USB"
    qty: "1"
  - name: "Ohišje, natisnjeno (`ohisje.stl`, neobvezno)"
    qty: "1"
license: "CC BY-SA 4.0"
authors: ["Ana Novak"]
school: ""
date: 2026-09-18
---

## Uporaba pri pouku

Koliko časa potrebuje signal od očesa do prsta? Učenci to navadno ugibajo – s to igro pa izmerijo, zapišejo in primerjajo. Hkrati vidijo, da je tudi njihov lastni program merilni instrument.

**Dejavnost: "Razredni reakcijski rekord" (20 minut, pari)**

1. En učenec igra, drugi zapisuje. Vsak ima pet poskusov; igra sama izpiše povprečje.
2. Na tablo narišite preprost stolpčni diagram: koliko učencev je v razredu 150–200 ms, 200–250 ms in tako naprej.
3. Pogovor: zakaj rezultati niso vsakič enaki? Kaj se zgodi, če igralec gleda stran in lučko zazna le "s kotičkom očesa"? Kaj, če je utrujen?
4. Za računalniško skupino: kako bi program zaznal "goljufanje", ko nekdo pritisne, preden lučka zasveti? (Namig: celotna koda v `reakcija.py` to že dela.)

**Namig:** isto igro lahko uporabite pri fiziki za izračun, koliko metrov prevozi avto pri 50 km/h, preden voznik sploh pritisne na zavoro.

## Koraki izdelave

{{% steps %}}

### Postavi vezje

ESP32 vstavi na sredino prototipne ploščice. LED z uporom 220 Ω poveži med GPIO 2 in GND, tipko pa med GPIO 15 in GND. Shema je v datoteki `vezje.svg`.

{{< figure src="step-1.jpg" alt="ESP32 vstavljen na sredino prototipne ploščice." >}}

### Poveži lučko in tipko

Daljša nožica LED (anoda) gre proti uporu. Tipka potrebuje samo dve žici, ker uporabimo notranji pull-up upor.

{{< figure src="step-2.jpg" alt="ESP32 na ploščici, z žicami povezan z rdečo lučko in rumeno tipko." >}}

### Naloži program

Na ESP32 namesti MicroPython (npr. prek Thonnyja). Za prvi preizkus je dovolj ta kratka koda – celotna igra s petimi poskusi in povprečjem je v `reakcija.py`:

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

Datoteko `reakcija.py` shrani na ploščo in jo zaženi z `import reakcija`.

{{< figure src="step-3.jpg" alt="Okno terminala z izpisanimi reakcijskimi časi in povprečjem 254 ms." >}}

{{% /steps %}}
