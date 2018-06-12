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

```
Prawie jesteśmy w domu, to jest to, o co nam chodzi ~ M. Morayne
```

Załóżmy, że dana jest krzywa  \\( \Gamma \\) na płaszczyźnie \\({{C}}\\) poprzez parametryzację \\( z = z(t), t \in [a,b] \\), a funkcja \\(z: [a,b] \to {{C}} \\)  jako funkcja parametru rzeczywistego \\(t\\) jest różniczkowalna  w sposób ciągły (tzn. jeśli 
\\( z(t) = x(t) + i y(t), x(t), y(t) \in C^1[a,b]) \\).

{{define}}
Niech \\( f: \Gamma \to {{C}} \\) będzie pewną funkcją na \\( \Gamma \\)
**Całką krzywoliniową** z funkcji \\(f\\) wzdłuż krzywej \\(\Gamma\\) nazywamy

\\[ \int_{\Gamma} f {{d}} z {{defeq}} \int_a^b f(z(t)) {{d}} z(t) \\]

Według notacji dla całki Stieltjesa:
\\[ \int_a^b (f \circ z) {{d}} z \\]

Z twierdzenia 13 dostajemy:
\\[ \tag{*}\label{*}
    \int_{\Gamma} f {{d}} z = \int_a^b f(z(t))z'(t){{d}}t 
\\]

#### Przykład
Niech \\( \Gamma \\) dana będzie parametryzacją \\( z(t) = t + i t^2, t \in [1,2] \\).

Niech \\( f(z) = z + 3 \\). Mamy: 
\\[ 
\int_{\Gamma} f(z) {{d}} z = 
\int_1^2 (z(t) + 3)(z'(t)) {{d}} t =
\int_1^2 (t + i t^2 + 3) (1 + 2 i t) {{d}} t = 
\\]
\\[
\int_1^2 (t + 3 - 2t^3){{d}}t + i \int_1^2 (3t^2 + 6t) {{d}}t =
\left[ \frac{1}{2} t^2 + 3t - \frac{2}{4} t ^ 4 \right]_1^2 + 
i \left[ t^3 + 3t^2 \right]_1^2 =
\\]
\\[
\left(\frac{3}{2} + 3 - \frac{15}{2}\right) + i (7 + 9) = -3 + 16i
\\]

Nietrudnym uogólnieniem powyższej sytuacji jest równoważenie całki krzywoliniowej \\(\int_{\Gamma} f {{d}} z \\), jeśli parametryzacja \\(z\\) jest ciągła oraz 
\\( a = a_0 \le a_1 \le \cdots \le a_k = b \\) i \\(z\\) jest klasy \\(C^1\\) na wszstkich odcinkach \\( [a_i,a_i+1], 0 \leq i \le k \\). Zachodzi \\( \eqref{*} \\) dla \\(f\\) - ciągłej.

Widać zatem ze wzoru \\( \eqref{*} \\), że przy założeniu odpowiedniej regularności funkcji \\(f, z\\) (\\(f\\) -ciągła, \\(z\\) - ciągła, odcinkami \\(C^1\\)), obliczanie całki krzywoliniowej zespolonej sprowadza się do liczenia całki zespolonej wzlgędem parametru rzeczywistego.
