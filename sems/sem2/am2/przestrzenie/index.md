---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Przestrzenie Euklidesowe

### Podstawowe zagadnienia

\\( \mathbb{R}^n \\) - przestrzeń liniowa nad ciałem \\( \mathbb{R} \\) \\\
Odległość między wektorami: \\( \overrightarrow{AB} = \left\\[ b_1-a_1; b_2-a_2; \ldots ; b_n-a_n\right \\] \\) \\\
Wektor zerowy: \\( \mathcal{O} = \left(0,0,\ldots,0\right) \\)
Jeśli wektory \\( \overrightarrow{x} \\) oraz \\( \overrightarrow{y} \\) są równoległe to \\( t\overrightarrow{x} = \overrightarrow{y} \\) dla pewnego \\( t \in \mathbb{R} \\) \\\
Kula o środku w punkcie \\( \overrightarrow{x} \\) i promieniu \\( r \\): \\( \mathcal{K}\left(\overrightarrow{x}, r\right) = \overrightarrow{x} + \mathcal{K}\left(\mathcal{O}, r\right) \\)

### Iloczyn skalarny
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} = \sum_{i=1}^{n} x_i y_i\ \\]

### Nierówność Cauchy'ego-Schwarza
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} \leq \|x\| \cdot \|y\|\ \\]

### Nierówność trójkąta
\\\[ \|\overrightarrow{x}+\overrightarrow{y}\| \leq \|\overrightarrow{x}\| + \|\overrightarrow{y}\|\ \\]

### Własności odległości

* \\( \|\overrightarrow{x}-\overrightarrow{y}\| = 0 \iff \overrightarrow{x} = \overrightarrow{y} \\)
* \\( \|\overrightarrow{x}-\overrightarrow{y}\| = \|\overrightarrow{y}-\overrightarrow{x}\| \\)
* \\( \|\overrightarrow{x}-\overrightarrow{y}\| \leq \|\overrightarrow{x}-\overrightarrow{z}\| + \|\overrightarrow{z}-\overrightarrow{y}\| \\)


### Odległość Euklidesowa

Odległość euklidesowa definiuje funkcję:
\\\[ d: \mathbb{R}^n \times \mathbb{R}^n \to [0,\infty)\ \\]
Funkcja \\( d \\) nazywa się metryką euklidesową.
Ogólnie każdą funkcję \\( d: \mathcal{X}^n \times \mathcal{X}^n \to [0,\infty) \\) spełniającą warunki z \textbf{1.5} nazywamy \textbf{metryką}, a zbiór \\( \mathcal{X} \\) na którym ta funkcja działa \textbf{przestrzenią metryczną} z metryką \\( d \\).\\\
\textbf{Uwaga:} \\( \overrightarrow{x} \cdot \overrightarrow{y} = \|\overrightarrow{x}\|\cdot\|\overrightarrow{y}\|\cos\alpha,\ \alpha\\[ 0;\pi \\] \\)

