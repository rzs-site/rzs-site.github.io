---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Funkcje zmiennej losowej
#### Definicja
Niech \\( X \\) będzie zmienną losową oraz niech \\( g \\) będzie dowolną funkcją borelowską. Wtedy \textbf{funkcję zmiennej losowej Y} definiujemy jako:
\\[ Y(\omega) = g\left(X(\omega)\right) \\]

#### Własności
Jeżeli znamy gęstość zmiennej losowej \\( X \\), dystrybuantę zmiennej losowej \\( Y \\) znajdujemy w następujący sposób:
\\[ \textbf{F}_Y(y) = \textbf{P}(Y<y) = \textbf{P}\left(g(X)<y\right) = \int_{\{x:g(x)<y\}} f_X(x)dx \\]
Jeśli \\( g \\) jest funkcją różniczkowalną oraz ściśle monotoniczną (czyli rosnącą lub malejącą), oznaczamy przez \\( g^{-1} \\) funkcję odwrotną do \\( g \\) i mamy:
Dla \\( g \\) rosnącej:
\\[ \frac{d}{dy}\textbf{F}_Y(y) = f_Y(Y) = \frac{d}{dy} \int_{\{x:g(x)<y\}} f_X(x)dx = \frac{d}{dy} \int_{\{x:x<g^{-1}(y)\}} f_X(x)dx = f_X\left(g^{-1}(y)\right)(g^{-1})'(y) \\]
Dla \\( g \\) malejącej:
\\[ \frac{d}{dy}\textbf{F}_Y(y) = f_Y(Y) = \frac{d}{dy} \int_{\{x:g(x)<y\}} f_X(x)dx = \frac{d}{dy} \int_{\{x:x>g^{-1}(y)\}} f_X(x)dx = -f_X\left(g^{-1}(y)\right)(g^{-1})'(y) \\]
Czyli ogólnie:
\\[ \frac{d}{dy}\textbf{F}_Y(y) = f_X\left(g^{-1}(y)\right)\Big\vert (g^{-1})'(y)\Big\vert  \\]
Pamiętajmy, że gdy \\( X \\) jest typu ciągłego oraz \\( g \\) jest ściśle monotoniczna nie implikują tego, że \\( Y \\) jest typu ciągłego.
