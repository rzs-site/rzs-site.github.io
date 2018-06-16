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

Kilka słów o przestrzeniach metrycznych
---

Przypomnijmy: parę \\( (X, \rho) \\), \\( X \\) - zbiór, \\( \rho: X^2 \to [0, \infty ) \\)
nazywamy przestrzenią metryczną o ile spełnione są następujące warunki:
1. \\( \rho(x, y) = 0 \iff x = y\\)
2. \\( \rho(x, y) = \rho(y, x) \\)
3. \\( \rho(x, z) \leq \rho(x,y) + \rho(y,z) \\)

Przestrzeniami, które będziemy rozważać będą \\( ({{C}}, \|.-.\|), ({{R}}, \|.-.\|) \\), czyli płaszczyzna i prosta z metrykami euklidesowymi.

#### Ćwiczenie
Sprawdzić, że 
\\( ({{C}} \times {{C}}, \rho((a_1,b_1), (a_2,b_2)) = \|a_1 - a_2\| + \|b_1 - b_2\| \\) jest przestrzenią metryczną.

Rozważać będziemy także podzbiory powyższych przestrzeni z tą samą metryką, np. \\( [a,b] \times {{C}}, {{R}} \times {{C}} \\) itp.

Niech teraz \\( F: X \to {{C}} \\), gdzie \\((X, \rho)\\) jest przestrzenią metryczną.
Mówimy, że F jest ciągła w \\(x \in X \\), jeżeli dla każdego ciągu punktów 
\\( \lbrace x_n \rbrace_{n=1}^{\infty} \\) z przestrzeni \\(X \\), jeśli \\(x_n \to x \\), to
\\( F(x_n) \to F(x) \\)

Ta definicja ciągłości Heinego jest równoważna definicji Cauchy'ego:
\\[ F \text{ jest ciągła} \iff 
    (\forall \epsilon \ge 0)(\exists \delta \ge 0)(\forall y \in X)(\rho(x,y) \le \delta \implies \left\|F(x) - F(y) \right\| \le \epsilon)
\\]