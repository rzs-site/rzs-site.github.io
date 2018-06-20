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

Funkcje elementarne w dziedzinie zespolonej
---

{{define}}
**Wielomian**: \\( W(z) = a_n z^n + a_{n-1} z^{n-1} + \cdots + a_1 z^1 + a_0 z^0 ,
a_n,\ldots, a_0 \in {{C}}, n \in {{N}} \\)

**Funkcja wymierna**: \\( Q(z) = {V(z) \over W(z)} \\), \\(V, W\\) - wielomiany (definicja analogiczna do definicji rzeczywistej).

{{define}}
Funkcję \\(e^z\\) definiujemy jako:

\\[ e^z {{defeq}} \sum_{n=0}^\infty {z^n \over n!} \\]

**Uwaga**
Zauważmy, że szereg ten jest zbieżny na \\({{C}}\\), ponieważ dla tego szeregu
\\[ 
    R = \lim_{n \to \infty} { {1 \over n!} \over {1 \over (n+1)!} }  
    = \lim_{n \to \infty} n+1 = \infty
\\]

Ponieważ taki wzór zachodzi (jest to twierdzenie) dla \\( x \in {{R}} \\), tzn. 
\\(e^x = \sum_{n=0}^\infty {x^n \over n!} \\), funkcja \\(e^z\\) rozszerza definicję rzeczywistą. 

{{theorem}} 18
\\[ e^{z_1 + z_2} = e^{z_1} e^{z_2} \\]

{{proofex}}

{{theorem}} 19
Funkcja wykładnicza jest różniczkowalna na całej płaszczyźnie zespolonej, zachodzi wzór
\\( (e^z)' = e^z \\)

{{proof}}

{{define}}
Poprzez szeregi można też na dziedzinę zespoloną rozszerzyć definicje funkcji trygonometrycznych:

\\[ 
    \sin(z) {{defeq}} z - \frac{z^3}{3!} + \frac{z^5}{5!} - \ldots = 
    \sum_{n=0}^\infty \frac{z^{2n+1}}{(2n+1)!}(-1)^n
\\]

\\[
    \cos(z) {{defeq}} 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \ldots = 
    \sum_{n=0}^\infty \frac{ z^{2n} }{(2n)!}(-1)^n
\\]

{{theorem}} 20
Zachodzą następujące wzory:
\\[ \cos(z) = { e^{iz} + e^{-iz} \over 2 } \\]
\\[ \sin(z) = { e^{iz} - e^{-iz} \over 2i } \\]

{{theorem}} 21
\\[ e^{iz} = \cos(z) + i \sin(z) \\] 

Ważnym wnioskiem jest tu następująca uwaga:
Niech \\( z = \lvert z \rvert (\cos \varphi + i \sin \varphi) \\) będzie postacią trygonometryczną \\( z \in {{C}} \\). Korzystając z twierdzenia 21, możemy teraz napisać: 
\\[ z = \lvert z \rvert e^{i {{arg}}(z)} = \lvert z \rvert e^{i \varphi}\\]

Logarytm i funkcja wykładnicza
---

Niech \\(z \in {{C}} \setminus \lbrace 0 \rbrace \\). Logarytmem (naturalnym) z liczby \\(z\\) nazywamy każdą liczbę \\(w\\), dla której \\(e^w = z\\) i oznaczamy 
\\({{log}}(z)\\).

Mamy przy zachodzeniu powyższego:
\\[
    e^w = e^{ {{Re}}(w) + i {{Im}}(w) } = e^{ {{Re}}(w)} e^{ i{{Im}}(w)} 
    = e^{ {{Re}}(w)} \left( \cos({{Im}}(w)) + i\sin({{Im}}(w)) \right)
    = \lvert z \rvert \left( \cos({{arg}}(z)) + i\sin({{arg}}(z)) \right)
\\]

Stąd
\\[ e^{ {{Re}}(w) } = \lvert z \rvert \\]
\\[ {{Im}}(w) = {{arg}}(z) = {{Arg}}(z) + 2k\pi, k \in {{Z}} \\]

Umówmy się, że logarytm naturalny w dziedzinie rzeczywistej oznaczamy \\( {{Log}} \\).

Zatem obliczyliśmy:
\\[ w = {{log}}(z) = {{Log}}( \lvert z \rvert) + i{{arg}}(z) 
    = {{Log}}( \lvert z \rvert) + i{{Arg}}(z) + i2k\pi, k \in {{Z}}
\\]

Logarytmem głównym z liczby \\(z\\) nazywamy:
\\[ {{Log}}(z) = {{Log}}( \lvert z \rvert) + i{{Arg}}(z) \\]

**Uwaga** Tutaj nie ma niejednoznaczności w oznaczeniach, ponieważ dla \\(z \in {{R}}_+ \\)
\\[ Log(z) = Log(\lvert z \rvert) + 0 = Log(z) \\]

#### Przykłady

\\[ {{Log}}(-1) = {{Log}}(\lvert -1 \rvert) + i\pi = {{Log}}(1) + i\pi = i\pi \\]
\\[ 
    {{Log}}(i) = {{Log}}(\lvert i \rvert) + i \frac{\pi}{2} 
    = {{Log}}(1) + i \frac{\pi}{2} = i \frac{\pi}{2}
\\]
\\[
    {{Log}}(1 + i) = {{Log}}(\lvert 1 + i \rvert) + i \frac{\pi}{4}
    = {{Log}}(\sqrt{2}) + i \frac{\pi}{4} = \frac{1}{2}{{Log}}(2) + i \frac{\pi}{4}
\\]

Niech \\(a \in {{C}} \setminus \lbrace 0 \rbrace, z \in {{C}} \\). Potęgę \\(a^z\\) definiujemy, jako \\[ a^z = e^{z {{log}}(a)} \\]

Zatem 
\\[
    a^z = e^{z {{log}}(a)} = e^{z({{Log}}(\lvert a \rvert) + i {{Arg}}(a)) + i 2 k \pi}, k \in {{Z}}
\\]

Dla \\(k = 0\\)
\\(
    a^z =  e^{z({{Log}}(\lvert a \rvert) + i {{Arg}}(a))}
\\) i wartość tą nazywamy wartością główną potęgi.

Przyjrzyjmy się sytuacji, gdy \\(z = n \in {{N}}\\). Mamy wtedy z powyższej definicji:
\\[
    a^n = e^{n({{Log}}(\lvert a \rvert) + i {{Arg}}(a) + i 2 k \pi)} 
    = e^{n({{Log}}(\lvert a \rvert) + i {{Arg}}(a))} e^{i 2 k n \pi}
    = e^{n({{Log}}(\lvert a \rvert) + i {{Arg}}(a))}
    = e^{n{{Log}}(\lvert a \rvert)} e^{i n {{Arg}}(a))}
\\]
\\[
    = (e^{ {{Log}} (\lvert a \rvert) })^n (\cos(n {{Arg}}(a)) + i\sin(n {{Arg}}(a)))
    = (e^{ {{Log}} (\lvert a \rvert) })^n (\cos({{Arg}}(a)) + i\sin({{Arg}}(a)))^n
\\]
\\[
    = ( e^{ {{Log}} (\lvert a \rvert) } (\cos({{Arg}}(a)) + i\sin({{Arg}}(a))) )^n
    = (\lvert a \rvert) (\cos({{Arg}}(a)) + i\sin({{Arg}}(a))))^n = a^n
    \text{ (jako n-krotne mnożenie)}
\\]

Gałąź argumentu i logarytmu
---

Niech \\(G\\) będzie podzbiorem otwartym \\({{C}}\\). Niech \\(F: G \to {{C}}\\).
Funkcję \\(A(z) (L(z))\\) określoną na \\(G, A: G \to {{R}}, L: G \to {{C}} \\) nazywamy gałęzią (jednoznaczną) argumentu (logarytmu) funkcji \\(F\\) jeśli \\(A (L)\\) jest ciągła na \\(G\\) oraz 
\\(A(z) = {{arg}}(F(z)) (L(z) = {{log}}(F(z))) \\)

{{theorem}} 22
Jeśli na zbiorze otwartym istnieje gałąź \\(E(z)\\) logarytmu, dla \\(F(z) = z\\), to \\(E\\) jest różniczkowalna w każdym punkcie \\(z \in G, E'(z) = \frac{1}{z} \\)
{{proof}}
