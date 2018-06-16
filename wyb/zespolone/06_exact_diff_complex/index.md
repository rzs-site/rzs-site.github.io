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

Niech \\( U \subseteq {{C}} \\) będzie zbiorem otwartym. Niech \\( F: U \to {{C}} \\).
Niech \\( z_0 \in U \\). Mówimy, że \\( F \\) ma w \\( z_0 \\) pochodną, jeśli istnieje granica

\\[ \lim_{z \to z_0} \frac{F(z) - F(z_0)}{z-z_0} {{defeq}} F'(z_0)\\]

Definicja ta jest w pełni analogiczna do definicji w dziedzinie rzeczywistej, jednak istnienie pochodnej funkcji w jej dziedzinie otwartej (tzn. w każdym jej punkcie) pociąga nieporównywalnie silniejsze konsekwencje niż ma to miejsce w przypadku funkcji rzeczywistych.

#### Przykład
Niech \\( F(z) = c \in {{C}} \\), będzie funkcją stałą dla \\( z \in U \\)
Mamy dla dowolnych \\( z,z_0 \in U \\)
\\[ \frac{F(z) - F(z_0)}{z - z_0} = \frac{c - c}{z-z_0} = 0 \\]

Zatem tak jak w dziedzinie rzeczywistej, \\( F'(z_0) = 0 \\).

#### Przykład
Niech \\( F(z) = z^2 \\). Dla dowolnego ustalonego \\(z_0\\)
\\[ \lim_{z \to z_0} \frac{F(z) - F(z_0)}{z - z_0} = 
\lim_{z \to z_0} \frac{z^2 - z_0^2}{z - z_0} = 
\lim_{z \to z_0} \frac{(z - z_0)(z+ z_0)}{z - z_0} = 
\lim_{z \to z_0} z + z_0 = 2z_0 \\]

Ogólnie: \\((z^n)' = nz^{n-1}, n \in {{N}} \\)

Dla pochodnych w dziedzinie zespolonej zachodzą t same wzory dotyczące arytmetyki, co w dziedzinie rzeczywistej, dla \\(F,G: U \to {{C}}\\):
* \\( (F(z) + G(z))' = F'(z) + G'(z) \\)
* \\( (F(z) - G(z))' = F'(z) - G'(z) \\)
* \\( (F(z)G(z))' = F'(z)G(z) + F(z)G'(z) \\)
* \\( \left(\frac{F(z)}{G(z)}\right)' = \frac{F'(z)G(z) - F(z)G'(z)}{G(z)^2} \\)

Mówimy też, że \\(F\\) jest różniczkowalna w \\(z_0\\), jeśli \\(F'(z_0)\\) istnieje.

{{define}}
Jeśli \\( F: U \to C \\) jest różniczkowalna w każdym \\(z_0 \in U \\), to mówimy, że F jest **analityczna** (czasami także: **holomorficzna**).

#### Twierdzenie 10
Niech \\(U,V \subseteq {{C}}\\) będą zbiorami otwartymi. Niech \\(F:U \to V\\), \\(G:V \to C\\) i \\(F'(z), G'(F(z)) \\) istnieją. Wtedy \\( (G \circ F)'(z) \\) istnieje i
\\[ (G \circ F)'(z) = G'(F(z)) \dot F'(z) \\]

{{proof}}

Równania Cauchy'ego-Riemanna
---

Załóżmy, że \\( U \subseteq {{C}} \\) jest zwarty w 
\\({{C}}, z_0 \in U, F: U \to {{C}}\\) ma pochodną w punkcie \\(z_0\\), 
tzn. istnieje granica \\(F'(z_0) = \lim_{z \to z_0} \frac{F(z) - F(z_0)}{z-z_0}\\).

Dla funkcji \\(F\\) możemy zdefiniować w \\(z_0\\) pochodną cząstkowem względem \\(x\\) i \\(y\\) \\((z_0 = x_0 + iy_0)\\): 

\\[ \frac{\partial F}{\partial x} (z_0) = 
\lim_{x \to x_0} \frac{F(x + i y_0) - F(z_0)}{x - x_0} \\]

\\[ \frac{\partial F}{\partial y} (z_0) =
\lim_{y \to y_0} \frac{F(x_0 + i y) - F(z_0)}{y - y_0} \\]

Widać natychmiast, że:

\\[ \label{1}\tag{1} 
\frac{\partial F}{\partial x} (z_0) = 
\frac{\partial (Re F)}{\partial x}(z_0) + i \frac{\partial (Im F)}{\partial x} (z_0)
\\]

\\[ \label{2}\tag{2}
\frac{\partial F}{\partial y} (z_0) = 
\frac{\partial (Re F)}{\partial y}(z_0) + i \frac{\partial (Im F)}{\partial y} (z_0)
\\]

W istocie znamy te wzory, bo są to szczególne przypadki różniczkowania względem parametru rzeczywistego.

Zauważmy, że gdy \\( z \to z_0 \\) i \\(z\\) jest postaci \\(x + i y_0\\), 
tzn. \\(x \to x_0 \\) to z definicji \\(F'(z_0)\\) dostajemy

\\[ F'(z_0) = \lim_{x \to x_0} \frac{F(x + i y_0) - F(z_0)}{x-x_0} =
\frac{\partial F}{\partial x} (z_0) 
\\]

\\[ F'(z_0) = \lim_{y \to y_0} \frac{F(x_0 + i y) - F(z_0)}{i(y -y_0)} =
(-i) \frac{\partial F}{\partial y} (z_0) 
\\]

Zatem otrzymujemy:

**Równanie Cauchy'ego-Riemanna w postaci zespolonej**
\\[
    \frac{\partial F}{\partial x} (z_0)  = (-i) \frac{\partial F}{\partial y} (z_0) 
\\]

Ze wzorów \\(\eqref{1}, \eqref{2} \\) oraz powyższego równania otrzymujemy:

**Równania Cauchy'ego-Riemanna w postaci rzeczywistej**

$$
\begin{cases}
\frac{\partial (Re F)}{\partial x} (z_0) = \frac{\partial (Im F)}{\partial y} (z_0) \\
\frac{\partial (Im F)}{\partial x} (z_0) = - \frac{\partial (Re F)}{\partial y} (z_0)
\end{cases}
$$

#### Twierdzenie 11
Niech \\( U \subseteq {{C}} \\) będzie zbiorem otwartym, \\(z_0 \in U, F: U \to {{C}} \\).

\\(F\\) ma pochodną w \\(z_0\\) wtw. gdy w \\(z_0\\) spełnia równania Cauchy'ego-Riemanna
i ma różniczkę zupełną.

{{proof}}