"""Reakcijski cas / Reaction-time game - MicroPython for ESP32.

LED:    GPIO 2  -> 220 ohm -> LED -> GND
Button: GPIO 15 -> button -> GND (internal pull-up)
"""
from machine import Pin
import time
import random

led = Pin(2, Pin.OUT)
button = Pin(15, Pin.IN, Pin.PULL_UP)
ROUNDS = 5


def wait_release():
    while button.value() == 0:
        time.sleep_ms(10)


def one_round():
    led.off()
    print("Pripravi se ... / Get ready ...")
    time.sleep_ms(random.randint(1500, 4000))
    if button.value() == 0:
        print("Prehitro! / Too early!")
        wait_release()
        return None
    led.on()
    start = time.ticks_ms()
    while button.value() == 1:
        pass
    ms = time.ticks_diff(time.ticks_ms(), start)
    led.off()
    wait_release()
    print("Reakcijski cas / Reaction time:", ms, "ms")
    return ms


results = []
while len(results) < ROUNDS:
    r = one_round()
    if r is not None:
        results.append(r)
    time.sleep_ms(800)

print("Povprecje / Average:", sum(results) // len(results), "ms")
