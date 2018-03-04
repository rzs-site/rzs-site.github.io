---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Podstawowe typy zmiennych losowych
#### Zmienne losowe typu skokowego
Zmienna losowa typu skokowego (bądź inaczej: dyskretna zmienna losowa) to taka dla której istnieje co najwyżej przeliczalny zbiór \\( \mathcal{X} \\) (czyli zbiór postaci \\( \{x_1, \ldots, x_n\} \\) lub \\( \{x_1, x_2, \ldots\} \\), gdzie \\( x_k \\) nazywamy wartościami zmiennej losowej) dla którego \\( \textbf{P}_X (\mathcal{X}) = 1 \\).\\\
Rozkład prawdopodobieństwa zmiennej losowej wygląda wtedy następująco:
\\[ p(x_k) = \mathbf{P} \left(\{ \omega \in \Omega : X(\omega) = x_k \}\right) \\]
Zauważmy, że \\( \sum_k p(x_k) = 1 \\) oraz, że dystrybuanta naszej zmiennej losowej jest lewostronnie ciągła, przedziałami stała i ma skoki w punktach gdzie \\( p(x_k) > 0 \\) o wartości \\( p(x_k) \\).

#### Zmienne losowe typu ciągłego
Niech teraz \\( \mathcal{X} = \mathcal{R} \\). Zmienną losową typu ciągłego jest funkcja zdefiniowana w następny sposób:
\\[ \mathbf{F}(x) = \int_{-\infty}^x f(u)du \\]
Gdzie \\( f \\) jest funkcją nazywaną \textbf{gęstością prawdopodobieństwa}, która jest nieujemna oraz spełnia:
\\[ \int_{-\infty}^\infty f(u)du = 1 \\]
W przedziałach w których \\( f \\) jest ciągła zachodzi zależność:
\\[ \mathbf{F}'(x) = f(x) \\]
Prawdopodobieństwo \\( \textbf{P}(x_1 \leq X < x_2) \\) dla \\( x_1 < x_2 \\) określamy, z własności dystrybuanty, jako:
\\[ \textbf{P}(x_1 \leq X < x_2) = \int_{x_1}^{x_2} f(u)du \\]
Zauważmy również, że dla dowolnej liczby rzeczywistej \\( x_0 \in \mathbb{R} \\) mamy:
\\[ \textbf{P}(X = x_0) = 0 \\]
