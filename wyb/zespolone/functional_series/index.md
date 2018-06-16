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

Niech \\(f_n, n = 0, 1, 2, \ldots \\) będzie ciągiem funkcji o wspólnej dziedzinie \\( Z \subseteq {{C}} \\) przyjmujących wartości zespolone.

Niech \\( z \in Z \\). Niech \\(s_n(z) = f_0(z) + f_1(z) + \cdots + f_n(z)\\),
\\(s_n: Z \to {{C}}\\) nazywamy sumą częściową szeregu funkcyjnego 
\\( \sum_{n=0}^{\infty} f_n(z) \\) (a sam ten szereg możemy zdefiniować formalnie jako ciąg \\( \lbrace s_n \rbrace_{n=0}^\infty \\)).

Mówimy, że szereg \\( \sum_{n=0}^{\infty} f_n(z) \\) jest zbieżny punktowo do \\(s(z)\\), jeśli \\( s_n \to s \\). Mówimy, że szereg \\( \sum_{n=0}^{\infty} f_n(z) \\) jest zbieżny jednostajnie, jeśli \\( s_n {{uniform}} s \\) (definicje w pełni analogiczne do definicji z analizy rzeczywistej).

Przede wszystkim będą nas interesowały szeregi potęgowe 
\\( \sum_{n=0}^{\infty} a_n (z - z_0)^n, a_n \in {{C}}, \\), \\(z_0\\) - ustalona liczba zespolona.

{{theorem}} 17
Dowodzimy (dowód w pełni analogiczny do przypadku rzeczywistego), że każdy taki szereg jest zbieżny w kole \\({{Bo}}(z_0, R)\\), gdzie  
\\[ 
    R = \lim_{n \to \infty } {1 \over \sqrt{\lvert a_n \rvert}} 
    = \lim_{n \to \infty} {\lvert a_n \rvert \over \lvert a_{n-1} \rvert}
\\]

o ile te granice istnieją (z dopuszczeniem \\(\infty \\)). Dla \\( 0 \lt r \lt R \\) szereg jest zbieżny jednostajnie w \\({{Bo}}(z_0, r)\\) i dla każdego ustalonego \\(z\\) jest zbieżny bezwzględnie.

{{proof}}