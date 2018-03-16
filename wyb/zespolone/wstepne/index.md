---
layout: acc_layout
toc: complex
use_math: true
---
<!-- MathJax shortcuts -->
{% assign C = '\mathbb{C}' %}
{% assign R = '\mathbb{R}' %}
{% assign Re = '\textit{Re}' %}
{% assign Im = '\textit{Im}' %}
{% assign defeq = '\stackrel{\text{def}}{=}' %}
{% assign Bo = '\text{B}^\text{(o)}' %}
{% assign B = '\text{B}' %}
{% assign qed = '\\( \blacksquare \\)' %}


Liczby zespolone, topologia płaszczyzny
---

Obiektem, którym będziemy się zajmować jest płaszczyzna zespolona

\\( {{C}} = \lbrace z = x + iy: x, y \in {{R}} \rbrace = \lbrace (x, y): x, y \in {{R}} \rbrace = {{R}}^2 \\)

Liczby zespolone są elementami \\( {{C}} \\) i zapisywane w postaci \\( z = x + iy \\).
Dla \\( z = x + iy \\), \\( x \\) nazywamy częścią rzeczywistą i oznaczamy \\( x = {{Re}}(z) \\), 
\\( y \\) zaś nazywamy częścią urojoną i oznaczamy \\( y = {{Im}}(z) \\).
Moduł liczby zespolonej \\( z \\) definiujemy jako: 

\\( \lvert z \rvert {{defeq}} \sqrt{x^2 + y^2} \\)

Niech \\( \alpha \\) będzie kątem skierowanym pomiędzy dodatni półosią rzeczywistą, a odcinkiem \\( \overline{Oz} \\). Miarę tego kąta nazywamy argumentem \\( z \\).
Argumentem głównym \\( z \\) będziemy nazywać \\( \alpha \in [0, 2\pi) \\) i w tym wypadku stosujemy oznaczenie \\( \alpha = \textit{Arg}(z)\\). 

Bez tego zastrzeżenia \\( \alpha = \textit{arg}(z)\\). Nie jest to jednoznaczne i argumentem \\( z \\) jest każda liczba postaci \\( \textit{Arg}(z) + 2k\pi, k \in \mathbb{Z} \\).

Jak widać, liczbę \\( z \\) można zapisać w postaci:

\\( z = x + iy = \lvert z \rvert \left( \frac{x}{\lvert z \rvert} + i \frac{y}{\lvert z \rvert}\right) = \lvert z \rvert \left( \cos \alpha + i \sin \alpha \right) \\)

Dla \\( z = x + iy \\) liczba \\( \overline{z} = x - iy \\) nazywa się liczbę sprzężoną do \\( z \\).

Przypomnijmy definicję dodawania i mnożenia liczb zespolonych:

\\( (x+iy) + (u+iv) {{defeq}} (x+u) + i (y+v) \\)

\\( (x+iy) \cdot (u+iv) {{defeq}} (xu - yv) + i (xv + yu) \\)

Niech \\( z \in {{C}} \\). Kołem otwartym o środku w \\( z \\) i o promieniu \\( r > 0 \\)nazywamy zbiór:

\\( {{Bo}}(z, r) = \lbrace u \in {{C}} : \lvert u - z\rvert \lt r \rbrace \\)

Kołem domkniętym nazywamy zbiór:

\\( {{B}}(z, r) = \lbrace u \in {{C}} : \lvert u - z\rvert \le r \rbrace  \\)

Zbiór \\( U \subseteq {{C}} \\) nazywamy otwartym, jeśli:

\\( (\forall z \in U) (\exists \varepsilon \gt 0)({{Bo}}(z, \varepsilon) \subseteq U ) \\)


Zbiór \\( F \subseteq {{C}} \\) nazywamy zbiorem domkniętym jeśli \\( F^c {{defeq}} {{C}} \setminus F \\) jest zbiorem otwartym.

#### Twierdzenie 1
Mówimy, że ciąg zespolony \\( {\lbrace z_n \rbrace}_{n=1}^{\infty}\\), gdzie \\( z_n = x_n + iy_n \\), jest zbieżny do \\( z = x + iy \\) wtw. gdy \\( x_n \to x \\) i \\( y_n \to y \\). 

**Dowód** (na liście zadań) {{qed}}


Następujące twierdzenie opisuje w bardzo użyteczny sposób charakteryzację zbiorów domkniętych:

