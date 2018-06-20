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

Funkcja pierwotna a całka krzywoliniowa na płaszczyźnie zespolonej
---

Podobnie jak w dziedzinie rzeczywistej, w dziedzinie zespolonej istnieje związek między funkcją pierwotną dla pewnej funkcji określonej na obszarze, a całką krzywoliniową z tej funkcji.

{{define}}
Funkcją pierwotną funkcji \\(F: G \to {{C}}, G\\) - obszar, nazywamy funkcję \\(T: G \to {{C}}\\), taką, że:
\\[ \forall z \in G, T'(z) = F(z) \\]

Związek pomiędzy istnieniem funkcji pierwotnej dla \\(F\\), a całką krzywoliniową z \\(F\\) wyrażają następujące twierdzenia:

{{theorem}} 23
Niech \\(G\\) - obszar na \\({{C}}\\). Niech \\(F: G \to {{C}}\\) będzie funkcją ciagłą i \\(T\\) będzie funkcją pierwotną dla \\(F\\) na \\(G\\). Wtedy dla każdych dwóch punktów \\(z_1, z_2 \in G\\) i każdej krzywej klasy \\(C^{(1)} \Gamma\\), łączącej \\(z_1, z_2\\) zachodzi wzór

\\[ \int_{\Gamma} F(z){{d}}z = T(z_2) - T(z_1) \\]

{{proof}}

Powyższe twierdzenie można sformułować w nieco mocniejszej wersji, zakładając mniej o krzywej \\(\Gamma\\), mianowicie, że jest tzw. krzywą regularną, tj. kawałkami \\(C^{(1)}\\), tzn. odcinek \\([a,b]\\) parametryzujący krzywą \\(\Gamma\\) można rozbić na skończenie wiele następujących po sobie odcinków:
\\[ [a = a_0, a_1], [a_1, a_2], \ldots, [a_{n-1}, a_n = b], 
    (a \lt a_1 \lt \cdots \lt a_{n-1} \lt b) 
\\], gdzie funkcja parametryzująca 
\\( z \in C^{(1)}[a_i, a_{i+1}]\\) dla \\(i = 0, 1, \ldots, n-1\\) i \\(z \in C[a,b]\\).

Mianowicie, niech krzywa \\(\Gamma_i\\) będzie dana parametryzacją 
\\(z_i: [a_i, a_{i+1} \to {{C}} \\).

Mamy \\[
    \int_\Gamma F(z) {{d}}z = \sum_{n=0}^{n-1} \int_{\Gamma_i} F(z){{d}}z
    = \sum_{n=0}^{n-1} (T(z(a_{i+1})) - T(z(a_i))) = T(z_2) - T(z_1)
\\]

{{theorem}} 24
Przy założeniach z twierdzenia 23, dla każdej regularnej krzywej zamkniętej \\(\Gamma\\) mamy \\( \int_{\Gamma} F(z) {{d}}z = 0 \\).

{{proof}}

Prawdziwe jest również twierdzenie odwrotne do twierdzenia 24, mianowicie:

{{theorem}} 25
Niech \\(G \subseteq {{C}}\\) będzie obszarem i \\(F: G \to {{C}} \\) będzie pewną funkcją ciągłą. Jeśli całka z funkcji \\(F\\) dla każdej regularnej krzywej zamkniętej jest równa 0, to \\(F\\) ma funkcję pierwotną.

-------

Zanim przystąpimy do dowodu zwróćmy uwagę na dwa łatwe stwierdzenia o całce krzywoliniowej:

I. Jeśli krzywa \\(\Gamma\\) dana jest parametryzacją \\(z: [a,b] \to {{C}}\\), to dla krzywej \\(-\Gamma\\) danej parametryzacją \\( {{gz}}: [a,b] \to {{C}} \\),
\\({{gz}}(t) = z(b - t + a) \\)
mamy \\[ \int_{-\Gamma} F(z){{d}}z = -\int_{\Gamma} F(z){{d}}z \\]

II. dla krzywej \\(\Gamma\\) j.w. i krzywej \\(C: [c, c+b-] \to {{C}}\\) danej wzorem
\\({{gz}}(t) = z(t c - a) \\) mamy 
\\[ \int_{\Gamma} F(z){{d}}z = \int_{C} F(z){{d}}z \\]

-------

Wróćmy do dowodu tw. 25
{{proof}}