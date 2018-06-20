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

Rozwijalność funkcji analitycznych w szereg potęgowy
---

{{theorem}} 30
Niech \\(F: G \to {{C}}\\), gdzie G jest pewnym zbiorem otwartym zawierającym 
\\( {{Bo}}(z_0, R) \setminus \lbrace z_0 \rbrace \\) (otoczenie nakłute (także otoczenie pierścieniowe)). Zakładamy, że \\(F\\) jest analityczna w \\(G\\).

Wtedy w pewnym otoczeniu nakłutym punktu \\(z_0: {{Bo}}(z_0, r) \setminus \lbrace z_0 \rbrace, r \gt 0 \\) funkcję \\(F\\) możemy przedstawić jako szereg:
\\[
    F(z) = \sum_{k=-\infty}^{\infty} a_k (z - z_0)^k 
    \text{ (tzw. szereg Laurenta /czyt. Loranta/)}
\\]

Jeśli \\(F\\) jest analityczna na całym otoczeniu \\( {{Bo}}(z_0, r) \\), to  
\\[
    F(z) = \sum_{k=0}^{\infty} a_k (z - z_0)^k 
    \text{ (szereg Taylora)}
\\] 

{{proof}}

<!-- **TL;DR**
Dla krzywej prostej zamkniętej 
Niech \\(\Gamma\\) będzie pewną krzywą prostą, regularną, zamkniętą wokół \\(z_0\\) leżącą w \\( {{Bo}}(z_0, r) \setminus \lbrace z_0 \rbrace \\)
\\[
    a_k = \frac{1}{2 \pi i} \int_{\Gamma} \frac{ F({{gz}}) }{ ({{gz}} - z_0)^{k+1} } {{d}}{{gz}}
\\] -->

{{define}}
Niech \\(F(z)\\) będzie analityczna w pewnym zbiorze otwartym zawierającym otoczenie nakłute \\( {{Bo}}(z_0, R) \setminus \lbrace z_0 \rbrace \\). Z twierdzenia 30 rozwija się w pewnym otoczeniu nakłutym \\( {{Bo}}(z_0, \alpha) \setminus \lbrace z_0 \rbrace , \alpha \gt 0 \\) w szereg Laurenta:
\\[
    F(z) = \sum_{k=-\infty}^{\infty} a_k (z - z_0)^k
\\]

Współczynnik \\(a_{-1}\\) nazywamy **residuum** funkcji F. Niech \\(\Gamma\\) będzie pewną krzywą prostą, regularną, zamkniętą wokół \\(z_0\\) leżącą w \\( {{Bo}}(z_0, \alpha) \setminus \lbrace z_0 \rbrace \\).

Mamy:

\\[
    \int_\Gamma F({{gz}}) {{d}} {{gz}} 
    = \int_\Gamma (\sum_{k=-\infty}^{\infty} a_k ({{gz}} - z_0)^k) {{d}} {{gz}}
    = \sum_{k=-\infty}^{\infty} \int_\Gamma (a_k ({{gz}} - z_0)^k) {{d}} {{gz}}
    = \ast
\\]

\\(a_k z^k\\) ma funkcję pierwotną dla \\(k \neq -1 \\), zatem 

\\[
    \ast = \int_\Gamma a_{-1} ({{gz}} - z_0)^{-1} {{d}} {{gz}}
    = a_{-1} \int_\Gamma ({{gz}} - z_0)^{-1} {{d}} {{gz}}
    = a_{-1} 2 \pi i
\\]

Z tego otrzymujemy:

\\[
    a_{-1} = \frac{1}{2 \pi i} \int_\Gamma F({{gz}}) {{d}} {{gz}} 
\\]

To ma bardzo ważne konsekwencje! (Dowiemy się na ostatnich ćwiczeniach)