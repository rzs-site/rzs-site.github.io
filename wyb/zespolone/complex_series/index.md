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
{% assign theorem = '#### Twierdzenie' %}
{% assign proof = '**Dowód** (na wykładzie) \\( \blacksquare \\)' %}
{% assign d = '\text{d}' %}

Szeregi w dziedzinie zespolonej
---

{{define}}
Niech \\( z_0, z_1, z_2, \ldots \\) będzie ciągiem liczb zespolonych. 
Niech \\( s_n = z_0 + z_1 + \cdots + z_n \\) - tzw. **suma częściowa**.
Jeśli ciąg \\( \left\lbrace s_n\right\rbrace_{n=0}^{\infty} \\) jest zbieżny, to jego granicę nazywamy **sumą szergu**, a sam ciąg \\( \left\lbrace s_n\right\rbrace_{n=0}^{\infty} \\) **szeregiem** \\( \sum_{i=0}^\infty z_i \\) (ta sama definicja, co w przypadku rzeczywistym).

{{define}}
**Ciągiem geometrycznym** (w dziedzinie zespolonej) nazywamy każdy ciąg \\( \lbrace z_i \rbrace_{i=0}^{\infty} \\), t. że \\( z_{i+1} = z_i \dot q, q \in {{C}} \\), \\(q\\) nazywamy ilorazem ciągu \\( \lbrace z_i \rbrace_{i=0}^{infty} \\). Zatem ogólną postacią ciągu geometrycznego jest:
\\[ z_0 = a, z_1 = aq, z_2 = aq^2, \ldots]

Dla takiego ciagu szereg \\( \sum_{i=0}^{\infty} a q^1 \\) nazywamy szeregiem geometrycznym. Ponieważ tak jak dla liczb rzeczywistych

\\[ s_n = a + aq + aq^2 + \cdots = a \frac{1-q^{n+1}}{1-q} \\] 

dla \\( \lvert q \rvert \lt 1 \\) mamy 
\\[ \label{1}\tag{1} 
    \sum_{n=0}^\infty aq^n = \frac{1}{1-q} 
\\] 

Terminologia dla szeregów zespolonych jest taka sama jak dla szeregów rzeczywistych: jeśli ciąg sum częściowuch \\( \left\lbrace s_n \right\rbrace_{n=0}^\infty \\) jest zbieżny do granicy \\( z \in {{C}} \\) to szereg \\( \sum_{n=0}^\infty s_n \\) nazywamy zbieżnym. W przeciwnym wypadku mówimy o szeregu rozbieżnym.

Z powyższej uwagi wiemy już, że szereg geometryczny dla \\( \lvert q \rvert \lt 1 \\) jest zbieżny, a dla \\( \lvert q \rvert \ge 1 \\) rozbieżny.

#### Przykład

Mówimy, że szereg zespolony \\( \sum_{n=0}^\infty z_n \\) jest bezwzględnie zbieżny, jeśli zbieżny jest szereg rzeczywisty \\( \sum_{n=0}^\infty \lvert z_n \rvert \\). Zachodzi analogiczne do przypadku rzeczywisego kryterium zbieżności:

{{theorem}} 14
Jeśli szereg zespolony jest bezwzględnie zbieżny to jest zbieżny.
{{proof}}

{{theorem}} 15 (Kryterium Cauchy'ego)
Jeśli \\( \lim_{n \to \infty} \sqrt[^n]{a_n} \lt 1\\), to szereg \\( \sum_{n=0}^\infty a_n \\) jest zbieżny.

{{proof}}

{{theorem}} 16 (Kryterium d'Alamberta)
Jeśli \\( \lim_{n \to \infty} \left\lvert \frac{a_{n+1}}{a_n} \right\rvert \lt 1\\), to szereg \\( \sum_{n=0}^\infty a_n \\) jest zbieżny.

{{proof}}
