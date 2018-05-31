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

Różniczka zupełna
---
Niech \\( U \subseteq {{C}} \\) będzie zbiorem otwartym i \\( F : U \to {{C}} \\). Niech \\( z_0 \in U \\). Mówimy, że odwzorowanie 
\\[ {{R}}^2 \ni (\Delta x, \Delta y) \mapsto M \Delta x + N \Delta y, M,N \in {{C}} \\]
jest różniczką zupełną funkcji \\(F\\) w punkcie \\(z_0\\), gdy
\\[ 
    \lim_{\Delta x \to 0} \lim_{\Delta y \to 0} \frac{F(z_0 + \Delta x + i \Delta y) - F(z_0) - M \Delta x - N \Delta y}{\|\Delta x + i \Delta y \|} = 0 
\\]

**Uwaga**
\\(F\\) ma w \\(z_0\\) różniczkę zupełną, jeśli przyrost \\( F(z + \Delta z) - F(z) \\) jest coraz bliższy liniowemu.

Pochodna w dziedzinie zespolonej
---

#### Równania Cauchy'ego-Riemanna