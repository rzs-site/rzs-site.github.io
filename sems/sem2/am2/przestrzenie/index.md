---
layout: acc_layout
toc: am2
use_math: true
---

Analiza Matematyczna 2
---
## Przestrzenie Euklidesowe

### Podstawowe zagadnienia

* \\( \mathbb{R}^n \\) - przestrzeń liniowa nad ciałem \\( \mathbb{R} \\)

* Odległość między wektorami: \\( \overrightarrow{AB} = \left\[ b_1-a_1; b_2-a_2; \ldots ; b_n-a_n \right\] \\)

* Wektor zerowy: \\( \mathcal{O} = \left(0,0,\ldots,0\right) \\)

* Jeśli wektory \\( \overrightarrow{x} \\) oraz \\( \overrightarrow{y} \\) są równoległe to \\( t\overrightarrow{x} = \overrightarrow{y} \\) dla pewnego \\( t \in \mathbb{R} \\)

* Kula o środku w punkcie \\( \overrightarrow{x} \\) i promieniu \\( r \\): \\( \mathcal{K}\left(\overrightarrow{x}, r\right) = \overrightarrow{x} + \mathcal{K}\left(\mathcal{O}, r\right) \\)

### Iloczyn skalarny
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} = \sum_{i=1}^{n} x_i y_i\ \\]

### Nierówność Cauchy'ego-Schwarza
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} \leq \ \vert x\ \vert  \cdot \ \vert y\ \vert \ \\]

### Nierówność trójkąta
\\\[ \ \vert \overrightarrow{x}+\overrightarrow{y}\ \vert  \leq \ \vert \overrightarrow{x}\ \vert  + \ \vert \overrightarrow{y}\ \vert \ \\]

### Własności odległości

* \\( \ \vert \overrightarrow{x}-\overrightarrow{y}\ \vert  = 0 \iff \overrightarrow{x} = \overrightarrow{y} \\)
* \\( \ \vert \overrightarrow{x}-\overrightarrow{y}\ \vert  = \ \vert \overrightarrow{y}-\overrightarrow{x}\ \vert  \\)
* \\( \ \vert \overrightarrow{x}-\overrightarrow{y}\ \vert  \leq \ \vert \overrightarrow{x}-\overrightarrow{z}\ \vert  + \ \vert \overrightarrow{z}-\overrightarrow{y}\ \vert  \\)


### Odległość Euklidesowa

Odległość euklidesowa definiuje funkcję:

\\[ d: \mathbb{R}^n \times \mathbb{R}^n \to [0,\infty)\ \\]

Funkcja \\( d \\) nazywa się metryką euklidesową.
Ogólnie każdą funkcję \\( d: \mathcal{X}^n \times \mathcal{X}^n \to [0,\infty) \\) spełniającą warunki [powyżej](#własności-odległości) nazywamy **metryką**, a zbiór \\( \mathcal{X} \\) na którym ta funkcja działa **przestrzenią metryczną** z metryką \\( d \\).

**Uwaga:** \\( \overrightarrow{x} \cdot \overrightarrow{y} = \ \vert \overrightarrow{x}\ \vert \cdot\ \vert \overrightarrow{y}\ \vert \cos\alpha,\ \alpha\[ 0;\pi \] \\)
