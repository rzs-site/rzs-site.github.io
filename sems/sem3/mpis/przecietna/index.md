---
layout: acc\_layout
toc: mpis
use\_math: true
use\_highlight: true
---

Metody probabilistycznie i statystyka
---

### Wartość przeciętna i wariancja
#### Definicja wartości przeciętniej
Wartość przeciętną/oczekiwaną/średnią dla zmiennej losowej \\( X \\) typu skokowego określamy jako:
\\[ \mathbb{E}(X) = \sum\_k x\_k p(x\_k) \\]
Przy warunku, że szereg \\( \sum\_k \vert x\_k\vert  p(x\_k) \\) jest zbieżny.\\\
Wartość przeciętną/oczekiwaną/średnią dla zmiennej losowej \\( X \\) typu ciągłego określamy jako:
\\[ \mathbb{E}(X) = \int\_\mathbb{R} x f(x) dx \\]
Przy warunku, że całka \\( \int\_\mathbb{R} \vert x\vert  f(x) dx \\) jest zbieżna.

#### Wartość przeciętna funkcji zmiennej losowej
Niech zmienna losowa \\( Y \\) będzie funkcją zmiennej losowej \\( X \\) ( \\( Y = g(X) \\) ), przy czym znamy rozkład prawdopodobieństwa zmiennej losowej \\( X \\).\\\
Wartość przeciętną/oczekiwaną/średnią dla zmiennej losowej \\( Y \\) typu skokowego określamy jako:
\\[ \mathbb{E}(Y) = \sum\_k g(x\_k) p(x\_k) \\]
Przy warunku, że szereg \\( \sum\_k \vert g(x\_k)\vert  p(x\_k) \\) jest zbieżny.\\\
Wartość przeciętną/oczekiwaną/średnią dla zmiennej losowej \\( Y \\) typu ciągłego określamy jako:
\\[ \mathbb{E}(Y) = \int\_\mathbb{R} g(x) f(x) dx \\]
Przy warunku, że całka \\( \int\_\mathbb{R} \vert g(x)\vert  f(x) dx \\) jest zbieżna.

#### Własności wartości przeciętnej
Niech zmienna losowa \\( Y \\) będzie funkcją zmiennej losowej \\( X \\) ( \\( Y = g(X) \\) ) oraz niech \\( g \\) będzie postaci \\( aX + b \\) dla dowolnych \\( a \\), \\( b \\). Wtedy określamy wartość przeciętną jako:
\\[ \mathbb{E}\left(Y\right) = \mathbb{E}\left(aX + b\right) = a\mathbb{E}\left(X\right) + b \\]
Niech zmienna losowa \\( Y \\) będzie funkcją zmiennej losowej \\( X \\) ( \\( Y = \sum\_i g\_i(X) \\) ) oraz niech \\( \mathbb{E}(g\_i(X)) \\) istnieje dla każdego \\( i \in [N] \\). Wtedy określamy wartość przeciętną jako:
\\[ \mathbb{E}\left(Y\right) = \mathbb{E}\left(\sum\_i g\_i(X)\right) = \sum\_i \mathbb{E}\left(g\_i(X)\right) \\]

#### Definicja wariancji
Wariancja opisuje 'rozrzut' wartości zmiennej losowej względem wartości oczekiwanej. Definiujemy ją w następujący sposób:
\\[ \mathbb{V}(X) = \mathbb{E}((X - \mathbb{E}(X))^2) \\]
Lub inaczej:
\\[ \mathbb{V}(X) = \mathbb{E}(X^2) - \mathbb{E}(X)^2 \\]
Zmienną losową \\( X \\) dla której \\( \mathbb{E}(X) = 0 \\), \\( \mathbb{V}(X) = 1 \\) nazywamy *zmienną losową standaryzowaną*.\\\
Pierwiastek z wariancji nazywamy *odchyleniem standardowym*.

#### Własności wariancji
Niech \\( X \\) będzie zmienną losową dla której istnieje wariancja. Wtedy zachodzi zależność:
\\[ \mathbb{V}(aX+b) = a^2\mathbb{V}(X) \\]
Warunkiem koniecznym i dostatecznym tego, aby \\( \mathbb{V}(X) = 0 \\) jest to, aby rozkład \\( X \\) był jednopunktowy.\\\
Funkcja \\( \varphi \\) określona jako:
\\[ \varphi(c) = \mathbb{E}((X - c)^2) \\]
Przyjmuje najmniejszą wartość gdy \\( c = \mathbb{E}(X) \\).

#### Nierówność Czebyszewa
Jeśli zmienna losowa \\( X \\) spełniająca warunek \\( \mathbb{P}(X < 0) = 0 \\) ma wartość przeciętną \\( \mathbb{E}(X) \\), to dla dowolnego \\( \varepsilon > 0 \\) mamy:
\\[ \mathbb{P}(X \geq \varepsilon) \leq \frac{\mathbb{E}(X)}{\varepsilon} \\]

#### Nierówność Czebyszewa-Bienayme
Jeśli zmienna losowa \\( X \\) ma wariancje \\( \mathbb{V}(X) \\) i wartość przeciętną \\( \mathbb{E}(X) \\), to dla dowolnego \\( \varepsilon > 0 \\) mamy:
\\[ \mathbb{P}(\vert X-\mathbb{E}(X)\vert  \geq \varepsilon) \leq \frac{\mathbb{V}(X)}{\varepsilon^2} \\]

#### Nierówność Markowa
Jeśli zmienna losowa \\( X \\) ma wartość przeciętną \\( \mathbb{E}(X) \\), to dla dowolnych \\( \varepsilon, p > 0 \\) mamy:
\\[ \mathbb{P}(\vert X\vert  \geq \varepsilon) \leq \frac{\mathbb{E}(\vert X\vert ^p)}{\varepsilon^p} \\]

#### Centralne twierdzenie graniczne
Dla danego rozkładu, określonej wartości oczekiwanej \\( m \\) i skończonej wariancji \\( \sigma^2 \\) określamy zbiór zdarzeń niezależnych, które oznaczamy przez \\( X\_i \\). Wtedy:
\\[ \frac{\frac{1}{n} \sum\_{i=1}^n X\_i - m}{\frac{\sigma}{\sqrt{n}}} \\]
Zbiega według rozkładu do standardowego rozkładu normalnego przy \\( n \rightarrow \infty \\).
