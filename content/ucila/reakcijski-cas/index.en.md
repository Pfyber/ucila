---
title: "ESP32 reaction-time game"
summary: "A simple ESP32 game with a light and a button that measures reaction time in milliseconds, bringing together physics, statistics and first steps in coding."
cover: "cover.jpg"
cover_alt: "ESP32 microcontroller on a breadboard with a red LED, a yellow button and a display reading 243 ms."
subject: [physics, cs]
age: ["10-14"]
machine: [electronics]
difficulty: "medium"
time: "2h"
cost: "15 €"
materials:
  - name: "ESP32 development board (DevKit)"
    qty: "1"
  - name: "Breadboard, 400 holes"
    qty: "1"
  - name: "LED, 5 mm, red"
    qty: "1"
  - name: "Resistor 220 Ω"
    qty: "1"
  - name: "Push button (momentary), large"
    qty: "1"
  - name: "Jumper wires"
    qty: "6"
  - name: "USB cable"
    qty: "1"
  - name: "Printed enclosure (`ohisje.stl`, optional)"
    qty: "1"
license: "CC BY-SA 4.0"
authors: ["Ana Novak"]
school: ""
date: 2026-09-18
---

## Using it in class

How long does a signal take to travel from eye to finger? Pupils usually guess. With this game they measure it, write it down and compare. Along the way they see that a program they wrote can be a measuring instrument.

**Activity: "Class reaction record" (20 minutes, pairs)**

1. One pupil plays, the other records. Everyone gets five tries; the game prints the average itself.
2. Draw a simple bar chart on the board: how many pupils scored 150–200 ms, 200–250 ms and so on.
3. Discuss: why aren't the results the same every time? What happens if the player looks away and only catches the light "out of the corner of their eye"? What if they're tired?
4. For the coding group: how could the program detect "cheating" when someone presses before the light comes on? (Hint: the full code in `reakcija.py` already does it.)

**Tip:** use the same game in physics to work out how many metres a car travels at 50 km/h before the driver even touches the brake.

## Build steps

{{% steps %}}

### Set up the board

Put the ESP32 across the middle of the breadboard. Wire the LED with a 220 Ω resistor between GPIO 2 and GND, and the button between GPIO 15 and GND. The diagram is in `vezje.svg`.

{{< figure src="step-1.jpg" alt="ESP32 placed across the middle of a breadboard." >}}

### Connect the light and button

The LED's longer leg (anode) goes towards the resistor. The button needs only two wires because we use the internal pull-up resistor.

{{< figure src="step-2.jpg" alt="ESP32 on the breadboard wired to a red LED and a yellow button." >}}

### Upload the program

Install MicroPython on the ESP32 (for example with Thonny). This short snippet is enough for a first test; the full game with five rounds and an average is in `reakcija.py`:

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

Save `reakcija.py` to the board and run it with `import reakcija`.

{{< figure src="step-3.jpg" alt="Terminal window showing reaction times and an average of 254 ms." >}}

{{% /steps %}}
