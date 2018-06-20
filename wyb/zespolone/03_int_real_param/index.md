---
layout: acc_layout
toc: complex
use_math: true
---
<!-- MathJax shortcuts -->
{% assign N = '\mathbb{N}' %}
{% assign C = '\mathbb{C}' %}
{% assign R = '\mathbb{R}' %}
{% assign Re = '\textit{Re}' %}
{% assign Im = '\textit{Im}' %}
{% assign defeq = '\stackrel{\text{def}}{=}' %}
{% assign Bo = '\text{B}^\text{(o)}' %}
{% assign B = '\text{B}' %}
{% assign define = '#### Definicja' %}
{% assign qed = '\\( \blacksquare \\)' %}
{% assign proof = '**Dowód** (na wykładzie) \\( \blacksquare \\)' %}
{% assign d = '\text{d}' %}

Całka zespolona względem parametru rzeczywistego
---

Niech \\( F: [a,b] \to {{C}}\\). Wtedy \\(F\\) możemy przedstawić jako
\\[ F(t) = {{Re}}(F(t)) + i {{Im}}(F(t))\\]

Jeśli istnieją całki \\( \int_a^b {{Re}}(F(t)){{d}}t \\) i \\( \int_a^b {{Im}}(F(t)){{d}}t\\) to całkę definiujemy:
\\[ \int_a^b F(t){{d}}t = \left( \int_a^b {{Re}}(F(t)){{d}}t \right) + i \left( \int_a^b {{Im}}(F(t)){{d}}t \right) \\]

#### Przykład
Niech \\( F(t) = t^2 + i\sin t \\)

Mamy według definicji
\\[ \int_0^{\frac{\pi}{2}} F(t){{d}}t = \int_0^{\frac{\pi}{2}} t^2 {{d}} t + i \int_0^{\frac{\pi}{2}} \sin t {{d}}t = \frac{1}{3} \left( \frac{\pi}{2}\right)^3 - i \left( \cos \frac{\pi}{2} - \cos 0  \right) = \frac{\pi^3}{24} + i \\] 