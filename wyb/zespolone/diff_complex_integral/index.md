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

Różniczkowanie względem parametru zespolonego pod całką
---

{{theorem}} 12
Niech \\( a < b, a,b \in {{R}} \\). Niech \\( G \subseteq {{C}} \\) będzie zbiorem otwartym, \\(W: [a,b] \times G \to {{C}} \\), \\(W\\) - ciągła.

\\(W\\) Posiada w każdym punkcie \\( (t,z) \in [a,b] \times G \\) pochodną względem z, którą oznaczymy \\( \frac{\partial W}{\partial z}(t,z) \\), tzn.

\\[ 
    \frac{\partial W}{\partial z}(t,z) {{defeq}} \lim_{h \to 0} \frac{W(t,z+h) - W(t,z)}{h}
\\]

Co więcej, załóżmy, że \\( \frac{\partial W}{\partial z} \\) jest funkcją ciągłą.

Wtedy funkcja \\( F: G \to {{C}} \\) zdefiniowana jako 

\\[ F(z) = \int_a^b W(t,z) {{d}} t \\]

ma pochodną w każdym punkcie \\( z \in G \\) i zachodzi równość

\\[ F'(z) = \int_a^b \frac{\partial W}{\partial z}(t,z) {{d}} t \\]

{{proof}}

Całka krzywoliniowa na \\({{C}}\\)
---

{{define}}
Niech \\( g,h : [a,b] \to {{C}} \\). Jeśli dla dowolnego ciągu podziałów odcinka \\([a,b]\\)

\\[ \Delta_n = 
    \left\langle a=t_0^{(n)}, t_1^{(n)}, \ldots, t_{k_n}^{(n)} = b\right\rangle 
\\]

takiego, że średnica podziału \\( \delta(\Delta_n) =
     \text{max} \\{ t_{i+1} - t_i : 0 \leq  i \leq k_n - 1\\} \\)

\\[\lim_{n \to \infty} \delta(\Delta_n) = 0 \\]

ciąg sum

\\[
    \sum_{i=0}^{k_n - 1} g(t_i') \left( h(t_{i+1}^{(n)}) - h(t_{i}^{(n)}) \right)
\\]

przy dowolnym wyborze punktu pośredniego \\( t_i' \in [t_{i}^{(n)}, t_{i+1}^{(n)}] \\)

zbiega do tej samej granicy, to granicę tę nazywamy **całką Stieltjesa** z funkcji \\(g\\) względem funkcji \\(h\\) na odcinku \\([a,b]\\) i oznaczamy

\\[ \int_a^b g(t) {{d}} h(t) \\]

{{theorem}} 13
Jeśli \\( g: [a,b] \to {{C}} \\) jest ciągła, a \\( h: [a,b] \to {{C}}\\) jest klasy 
\\( C^1\\), to istnieje \\( \int_a^b g(t) {{d}} h(t) \\) i zachodzi

\\[ \int_a^b g(t) {{d}} h(t) = \int_a^b g(t) h'(t) {{d}} t \\]
