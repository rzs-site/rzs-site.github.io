---
layout: acc_layout
toc: complex
use_math: true
---
<!-- MathJax shortcuts -->
{% assign N = '\mathbb{N}' %}
{% assign Z = '\mathbb{Z}' %}
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
{% assign proofex = '**Dowód** (na ćwiczeniach) \\( \blacksquare \\)' %}
{% assign d = '\text{d}' %}
{% assign arg = '\text{arg}' %}
{% assign Arg = '\text{Arg}' %}
{% assign log = '\text{log}' %}
{% assign Log = '\text{Log}' %}
{% assign uniform ='\genfrac{}{}{0pt}{}{\to}{\to}' %}
{% assign gz = '\mathfrak{z}' %}

Twierdzenie Cauchy'ego o całce zespolonej
---

{{theorem}} 26
Niech \\(G \subseteq {{C}} \\) będzie zbiorem otwartym i \\(\Gamma\\) będzie krzywą prostą (nie przecina się wzajemnie) zamkniętą regularną, taką, że obszar który ogranicza jest całkowicie zawarty w \\(G\\). Jeśli \\(F: G \to {{C}}\\) jest analityczna (tzn, \\(F'(z)\\) istnieje dla każdego \\(z \in G\\)), to 
\\[ \int_\Gamma F(z) {{d}} z = 0 \\]

{{proof}}

Wzór Cauchy'ego
---

Podstawowym wzorem teorii funkcji analitycznych jest tzw. wzór Cauchy'ego

{{theorem}} 27
Niech \\(G \subseteq {{C}} \\) będzie zbiorem otwartym zawierającym krzywą prostą regularną zamkniętą \\(\Gamma\\) i obszar \\(H\\) nią ograniczony. Jeśli \\(F: G \to {{C}}\\) jest funkcją analityczną na \\(G, z \in H \\) i \\(\Gamma\\) jest zorientowana odwrotnie do ruchu wskazówek zegara, to 

\\[
    F(z) = {1 \over 2 \pi i} \int_\Gamma { F({{gz}}) \over {{gz}} - z } {{d}} {{gz}}
\\]

{{proof}}

{{theorem}} 28
Jeśli \\(G \subseteq {{C}} \\) jest zbiorem otwartym, \\( \Gamma \subseteq G \\) jest krzywą regularną i \\( F_n: \Gamma \to {{C}}, n = 0, 1, 2, \cdots \\) jest ciągiem funkcji ciągłych jednostajnie zbieżnym do \\( F: \Gamma \to {{C}} \\)
\\[ 
    (\forall \varepsilon \gt 0)(\exists N_\varepsilon)(\forall n \ge N_\varepsilon) 
    (\forall z \in \Gamma)(\lvert F(z) - F_n(z) \rvert \lt \varepsilon)
\\], to
\\[
    \int_\Gamma F_n({{gz}}){{d}}{{gz}} \to \int_\Gamma F({{gz}}){{d}}{{gz}}
\\]

{{proof}}

{{theorem}} 29
Jeśli szereg funkcji ciągłych \\( \sum_{n=1}^\infty W_n(z) \\) jest jednostajnie zbieżny do funkcji \\( W \\) na pewnej krzywej regularnej \\(\Gamma\\), to
\\[
    \sum_{n=1}^\infty \int_\Gamma W_n({{gz}}){{d}}{{gz}} = 
    \int_\Gamma \sum_{n=1}^\infty W_n({{gz}}){{d}}{{gz}} = 
    \int_\Gamma W({{gz}}){{d}}{{gz}}
\\]

**Dowód**

Zastosować twierdzenie 28 do ciągu sum częściowych \\(F_n = W_1 + W_2 + \ldots + W_n\\). {{qed}}