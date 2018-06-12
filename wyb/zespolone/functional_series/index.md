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


{% assign uniform ='\genfrac{}{}{0pt}{}{\to}{\to}' %}

Ciągi i szeregi funkcyjne w dziedzinie zespolonej
---

Niech \\( Z \subseteq {{C}} \\). Niech \\( f_n : Z \to {{C}}, n = 0,1,2,\ldots \\).
Jeśli dla każdego \\( z \in Z \\) ciąg \\( f_n(z) \xrightarrow{n \to \infty} f(z) \\), to mówimy, że ciąg funkcyjny \\( \left\lbrace f_n \right\rbrace_{n=0}^{\infty} \\) jest zbieżny punktowo do funkcji f. Piszemy \\( f_n \to f \\)

Kwantyfikatorowo:

\\[ 
    (\forall z \in Z)(\forall \varepsilon \gt 0)(\exists N_{\varepsilon,z} \in {{N}})
    (\forall n \geq N_{\varepsilon,z})(\lvert f(z) - f_n(z) \rvert \le \varepsilon) 
\\]

Jeśli powyższy warunek wzmocnimy:

\\[
    (\forall \varepsilon \gt 0)(\exists N_\varepsilon \in {{N}})
    (\forall n \geq N_\varepsilon)(\lvert f(z) - f_n(z) \rvert \le \varepsilon)
\\]

to mówimy, że ciąg funkcyjny \\( \left\lbrace f_n \right\rbrace_{n=0}^{\infty} \\)  jest jednostajnie zbieżny do \\( f \\). Piszemy \\( f_n {{uniform}} f \\)

To be continued...