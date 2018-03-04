---
layout: acc\_layout
toc: mpis
use\_math: true
use\_highlight: true
---

Metody probabilistycznie i statystyka
---

### Podstawowe typy zmiennych losowych
#### Zmienne losowe typu skokowego
Zmienna losowa typu skokowego (bądź inaczej: dyskretna zmienna losowa) to taka dla której istnieje co najwyżej przeliczalny zbiór \\( \mathcal{X} \\) (czyli zbiór postaci \\( \{x\_1, \ldots, x\_n\} \\) lub \\( \{x\_1, x\_2, \ldots\} \\), gdzie \\( x\_k \\) nazywamy wartościami zmiennej losowej) dla którego \\( \mathbb{P}\_X (\mathcal{X}) = 1 \\).\\\
Rozkład prawdopodobieństwa zmiennej losowej wygląda wtedy następująco:
\\[ p(x\_k) = \mathbf{P} \left(\{ \omega \in \Omega : X(\omega) = x\_k \}\right) \\]
Zauważmy, że \\( \sum\_k p(x\_k) = 1 \\) oraz, że dystrybuanta naszej zmiennej losowej jest lewostronnie ciągła, przedziałami stała i ma skoki w punktach gdzie \\( p(x\_k) > 0 \\) o wartości \\( p(x\_k) \\).

#### Zmienne losowe typu ciągłego
Niech teraz \\( \mathcal{X} = \mathcal{R} \\). Zmienną losową typu ciągłego jest funkcja zdefiniowana w następny sposób:
\\[ \mathbf{F}(x) = \int\_{-\infty}^x f(u)du \\]
Gdzie \\( f \\) jest funkcją nazywaną *gęstością prawdopodobieństwa*, która jest nieujemna oraz spełnia:
\\[ \int\_{-\infty}^\infty f(u)du = 1 \\]
W przedziałach w których \\( f \\) jest ciągła zachodzi zależność:
\\[ \mathbf{F}'(x) = f(x) \\]
Prawdopodobieństwo \\( \mathbb{P}(x\_1 \leq X < x\_2) \\) dla \\( x\_1 < x\_2 \\) określamy, z własności dystrybuanty, jako:
\\[ P(x\_1 \leq X < x\_2) = \int\_{x\_1}^{x\_2} f(u)du \\]
Zauważmy również, że dla dowolnej liczby rzeczywistej \\( x\_0 \in \\mathbb{R} \\) mamy:
\\[ P(X = x\_0) = 0 \\]
