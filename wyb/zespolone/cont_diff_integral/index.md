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

Ciągłość i różniczkowalność całki
---

Zacznijmy od udowodnienia nierówności:

#### Twierdzenie 7
Niech \\( F: [a,b] \to {{C}} \\) i \\(\int_a^b F(t){{d}}t \\) oraz \\(\int_a^b \|F(t)\|{{d}}t \\) istnieją. Wtedy

\\[ 
    \left\| \int_a^b F(t){{d}}t \right\| \leq \int_a^b \left\|F(t)\right\|{{d}}t 
\\]

{{proof}}

Sformułujemy dalej: udowodnimy dwa twierdzenia: o ciągłości i różniczkowalności całki zespolonej względem parametru rzeczywistego.

#### Twierdzenie 8
Niech \\( I = [a,b] \subseteq {{R}}, Z \subseteq {{C}} \\), \\(Z\\) - zbiór domknięty.
Niech \\( F: I \times Z \to {{C}} \\), \\(F \\) - ciągła.
Niech \\( \Phi(z) = \int_a^b F(t,z) {{d}}t \\).
Wtedy \\( \Phi: Z \to {{C}} \\) jest funkcją ciągłą.

{{proof}}

#### Twierdzenie 9
Niech \\( F: [a,b] \times [c,d] \to {{C}} \\) będzie funkcją ciągłą - posiadającą w każdym punkcie \\( (t,u) \in [a,b]\times[c,d] \\) pochodną cząstkową \\( \frac{\partial F}{\partial u}(t,u) \\), o której zakładamy, że też jest ciągła na \\( [a,b] \times [c,d] \\).

Niech \\( \Phi(u) = \int_a^b F(t,u) {{d}}t \\). Wtedy \\( \Phi'(u_0) = \int_a^b \frac{\partial F(t,u)}{\partial u} {{d}} t \\), dla każdego \\( u_0 \in [c,d] \\).

Wtedy też \\( \Phi' : [c,d] \to {{C}} \\) jest ciągła.

Faktycznie udowodnimy nieco ogólniejszą wersję twierdzenia 9

#### Twierdzenie 9'
Niech \\( F: [a,b] \times [c_1,d_1] \times [c_2, d_2] \to {{C}} \\) będzie funkcją ciągłą, która dla każdego \\( t \in [a,b], u \in [c_1,d_1], v \in [c_2, d_2] \\) posiada pochodną cząstkową \\( \frac{\partial F}{\partial u}(t,u,v) \\) i pochodna ta jest ciągła na całej kostce \\( [a,b] \times [c_1,d_1] \times [c_2, d_2] \\). 

Wtedy \\( \Phi(u,v) = \int_a^b F(t,u,v) {{d}} t \\) ma w każdym punkcie \\( (u, v) \in [c_1,d_1] \times [c_2,d_2] \\) pochodną cząstkową \\( \frac{\partial \Phi}{\partial u}(u,v) \\) równą

\\[ \frac{\partial \Phi}{\partial u}(u,v) = \int_a^b \frac{\partial F}{\partial u}(t,u,v) {{d}} t \\]

Co więcej \\( \frac{\partial \Phi}{\partial u}(u,v) \\) jest ciągła w prostokącie \\( [c_1,d_1] \times [c_2,d_2]\\)

{{proof}}