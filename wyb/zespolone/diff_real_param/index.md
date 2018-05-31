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

Różniczkowanie funkcji względem parametru rzeczywistego
---
{{define}}
Niech \\( \varphi : [a,b] \to {{C}}\\). Mówimy, że \\(\varphi\\) jest **różniczkowalna** w punkcie \\(t \in [a,b] \\) i ma wtedy pochodną \\( \varphi'(t) \\) jeśli istnieje granica:
\\[ \varphi'(t) {{defeq}} \lim_{h \to 0} \frac{\varphi(t+h) - \varphi(t)}{h}\\]

#### Twierdzenie 6
Jeśli dla \\( \varphi : [a,b] \to {{C}} \\), \\( \varphi \\) jest różniczkowalna w \\(t\\) to różniczkowalne w \\(t\\) są także funkcje \\( \varphi_1, \varphi_2 \\).

Także na odwrót, jeśli \\( \varphi_1, \varphi_2 \\) są różniczkowalne w \\(t\\) to \\(\varphi\\) jest różniczkowalna w \\(t\\). Zachodzi przy tym wzór: 
\\[\varphi'(t) = \varphi_1'(t) + i \varphi_2'(t)\\]

{{proof}}

#### Przykład
Niech \\( \varphi : [0, 2\pi] \to {{C}}\\) 
\\[ \varphi(t) = \cos(t) + i \sin(t)\\]

Mamy wtedy
\\[ \varphi'(t) = -\sin(t) + i \cos(t)\\]