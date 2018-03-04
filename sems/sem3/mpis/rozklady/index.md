---
layout: acc\_layout
toc: mpis
use\_math: true
use\_highlight: true
---

Metody probabilistycznie i statystyka
---

### Popularne rozkłady prawdopodobieństwa zmiennych losowych
#### Rozkłady jednopunktowy i dwupunktowy
Niech \\( \mathcal{X} = \{x\_0\} \\) oraz \\( \mathbf{P}(X = x\_0) = 1 \\). Wtedy mówimy, że zmienna losowa \\( X \\) ma *rozkład jednopunktowy*. \\( \\mathbb{E}(X) = x\_0 \\), \\( \\mathbb{V}(X) = 0 \\).\\\
Niech \\( \mathcal{X} = \{x\_0, x\_1\} \\) oraz \\( \mathbf{P}(X = x\_0) = p \\), \\( \mathbf{P}(X = x\_1) = 1 - p \\). Wtedy mówimy, że zmienna losowa \\( X \\) ma *rozkład dwupunktowy*. \\( \\mathbb{E}(X) = p(x\_0 - x\_1) + x\_1 \\), \\( \\mathbb{V}(X) = p(1 - p)(x\_0 - x\_1)^2 \\).

#### Rozkład dwumianowy
Wykonujemy \\( n \\) razy doświadczenie, które można opisać za pomocą rozkładu dwumianowego, przy czym możliwe wyniki to \\( A \\) oraz \\( A' \\). Prawdopodobieństwo wystąpienia \\( k \\) sukcesów wyraża się wzorem:
\\[ \mathbf{P}(X = k) = \binom{n}{k} p^k q^{n-k} \\]
Zauważmy, że:
\\[ \sum\_{k=0}^n \binom{n}{k} p^k q^{n-k} = 1 \\]
\\[ \\mathbb{E}(X) = np,\ \\mathbb{V}(X) = np(1 - p) \\]
Wartość najbardziej prawdopodobną (nie mylić z wartością oczekiwaną) określamy jako:
\\[ \Big[(n+1)p\Big] \\]
Gdzie \\( [x] \\) oznacza część całkowitą z \\( x \\).

#### Rozkład Poissona(nie czytać Pojzona)
Niech \\( \mathcal{X} = \\mathbb{N} \\) oraz niech \\( k \in \\mathbb{N} \\). Rozkład Poissona( \\( \mathbf{Pois}(\lambda) \\), gdzie \\( \lambda > 0 \\) ) określamy jako:
\\[ \mathbf{P}(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \\]
Mamy, również:
\\[ \\mathbb{E}(X) = \\mathbb{V}(X) = \lambda \\]
Zauważmy, że jeśli rozważamy serię doświadczeń zgodną ze schematem Bernoulliego, gdzie liczba doświadczeń jest duża, a prawdopodobieństwo sukcesu małe, rozkład Poissona jest dobrą aproksymacją rozkłady Bernoulliego(dwumianowego) dla \\( \lambda = np \\).

#### Rozkład jednostajny
\[f(x) = \begin{cases}
0  & : x \leq a\\\
\frac{1}{b - a}& : a < x \leq b\\\
0   & : x > b
\end{cases}\]
\[F(x) = \begin{cases}
0  & : x \leq a\\\
\frac{x - a}{b - a}& : a < x \leq b\\\
1   & : x > b
\end{cases}\]
\\[ \\mathbb{E}(X) = \frac{a + b}{2}\qquad\\mathbb{E}(X^2) = \frac{a^2 + ab + b^2}{3}\qquad\\mathbb{V}(X) = \frac{(b - a)^2}{12} \\]

#### Rozkład wykładniczy
\[f(x) = \begin{cases}
0  & : x < 0\\\
\lambda e^{-\lambda x} & : x \geq 0,\ \lambda > 0
\end{cases}\]
\[F(x) = \begin{cases}
0  & : x < 0\\\
1 - e^{-\lambda x}& : x \geq 0,\ \lambda > 0
\end{cases}\]
\\[ \\mathbb{E}(X) = \frac{1}{\lambda}\qquad\\mathbb{V}(X) = \frac{1}{\lambda^2} \\]

#### Rozkład normalny
\\[ f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{\frac{-(x - m)^2}{2\sigma^2}} \\]
\\[ F(x) = \int\_{-\infty}^x \frac{1}{\sqrt{2\pi} \sigma} e^{\frac{-(x - m)^2}{2\sigma^2}} \\]
\\[ \\mathbb{E}(X) = m\qquad\\mathbb{V}(X) = \sigma^2 \\]
