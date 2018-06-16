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

{{define}}
Niech \\( z \in {{C}} \\). **Kołem otwartym** o środku w \\( z \\) i o promieniu \\( r > 0 \\)nazywamy zbiór:

\\( {{Bo}}(z, r) = \lbrace u \in {{C}} : \lvert u - z\rvert \lt r \rbrace \\)

{{define}}
**Kołem domkniętym** nazywamy zbiór:

\\( {{B}}(z, r) = \lbrace u \in {{C}} : \lvert u - z\rvert \le r \rbrace  \\)

{{define}}
Zbiór \\( U \subseteq {{C}} \\) nazywamy **zbiorem otwartym**, jeśli:

\\( (\forall z \in U) (\exists \varepsilon \gt 0)({{Bo}}(z, \varepsilon) \subseteq U ) \\)

{{define}}
Zbiór \\( F \subseteq {{C}} \\) nazywamy **zbiorem domkniętym** jeśli \\( F^c {{defeq}} {{C}} \setminus F \\) jest zbiorem otwartym.

#### Twierdzenie 1
Mówimy, że ciąg zespolony \\( {\lbrace z_n \rbrace}_{n=1}^{\infty}\\), gdzie \\( z_n = x_n + iy_n \\), jest zbieżny do \\( z = x + iy \\) wtw. gdy \\( x_n \to x \\) i \\( y_n \to y \\). 

**Dowód** (na liście zadań) {{qed}}

Następujące twierdzenie opisuje w bardzo użyteczny sposób charakteryzację zbiorów domkniętych:

#### Twierdzenie 2
Zbiór \\( F \subseteq {{C}} \\) jest domknięty, wtw. gdy dla każdego ciągu
\\( z_n \in F, n \in {{N}}\\) \\[ z_n \to z \implies z \in F\\]

{{proof}}

{{define}}
Zbiór \\(K \subseteq {{C}} \\) nazywamy **zbiorem zwartym**, jeśli każdy ciąg punktów z tego zbioru 
\\( \lbrace z_n \rbrace_{n=1}^{\infty}, z_n \in K \\) posiada podciąg zbieżny do pewnego punktu \\(z \in K \\) (\\( z_{n_i} \to z \in K \\))

#### Twierdzenie 3
\\( K \in {{C}} \\) jest zwarty, wtw. gdy jest domknięty i ograniczony.

{{proof}}

Podajmy jeszcze jedną chcarakteryzację zwartości:

#### Twierdzenie 4
Zbiór \\( A \subseteq {{C}} \\) (także w wersji \\( \subseteq {{R}} \\)) jest zwarty wtw. gdy z faktu, że 
    \\[ A \subseteq \bigcup_{\alpha \in \Lambda} U_{\alpha} \\]
\\( U_{\alpha} \\) - otwarty w \\({{C}}\\) (w \\({{R}}\\)), wynika, że
    \\[ A \subseteq \bigcup_{i = 1}^{n} U_{\alpha_i}\\]
dla skończonego podciągu \\( {\alpha_1, \alpha_2, ..., \alpha_n} \\).

{{proof}}

{{define}}
**Obszarem** na płaszczyźnie nazywamy zbiór otwarty \\(U\\), dla którego pomiędzy dowolnymi dwoma punktami \\(z_1, z_2 \in U \\) można poprowadzić łamaną \\( \overline{z_1 u_1} \cup \overline{u_1 u_2} \cup ... \cup \overline{u_k z_2} \\) całkowicie zawartą w tym zbiorze.

{{define}}
Niech \\( A \subseteq {{C}} \\). **Wnętrzem zbioru** nazywamy zbiór 
    \\[ Int(A) = \lbrace z \in A: \exists \varepsilon \ge 0, {{Bo}}(z, \varepsilon) \subseteq A \rbrace\\]

{{define}}
**Domknięciem** \\(A\\) nazywamy zbiór

\\[ cl(A) = \overline{A} = \lbrace z \in {{C}}: 
    \exists \lbrace z_n \rbrace_{n=1}^{\infty}, z_n \to z, z_n \in A
\rbrace \\]

{{define}}
**Krzywą** na \\({{C}}\\) nazywamy funkcję ciągłą \\( \varphi: [a,b] \to {{C}} \\)

Czasami krzywą nazywamy obraz \\( \varphi[[a,b]] \\), a samą funkcję \\(\varphi \\) **parametryzacją** tej krzywej. Pojęć tych będziemy używać zamiennie, w zależności od kontekstu.

{{define}}
**Łukiem** nazywamy krzywą \\( \varphi: [a,b] \to {{C}} \\), która jest różnowartościowa.

Ciągłość należy rozumieć w sensie odwzorowanie \\( [a,b] \to {{R}}^2 \\), czyli 
\\( [a,b] \ni x_n \to x \implies  \varphi(x_n) \to \varphi(x)\\)

Zauważmy, że \\( \varphi(t) \\) jest postaci
\\[ \varphi(t) = \varphi_1(t) + i \varphi_2(t)\\]
gdzie, \\(\varphi_1, \varphi_2: [a,b] \to {{R}} \\)

Łatwo zauważyć, że zachodzi:

#### Twierdzenie 5
\\(\varphi \\) jest ciągła wtw \\(\varphi_1, \varphi_2 \\) są ciągłe.

{{proof}}

{{define}}
Krzywą (łukiem) **klasy \\(C^{(n)} \\) nazywamy krzywą (łuk) \\(\varphi : [a,b] \to {{C}} \\), gdzie \\(\varphi \\) jest klasy \\(C^{(n)} \\) (n-ta pochodna ciągła).

Czasami będziemy rozważali zbiory postaci \\( A \times B \\), gdzie \\( A \subseteq {{R}} \\), a \\( B \subseteq {{C}}\\).

Mamy tu naturalną definicję odległości:
\\[ d((a,b),(a',b')) = |a-a'| + |b-b'|\\]

Funkcja \\(F : A \times B \to {{C}} \\) jest ciągła, jeśli
\\[ d((a_n,b_n), (a,b)) \to 0 \implies F((a_n, b_n)) \to F((a,b)) \\]
