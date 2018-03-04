---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Zmienne losowe
#### Definicja zmiennej losowej
Niech \\( \left(\Omega, *S*, *P*\right) \\) będzie dowolną przestrzenią probabilistyczną. Zmienną losową \\( X \\) nazywamy funkcję zdefiniowaną następująco:
\\[ X : \Omega\ \rightarrow\ \mathbb{R} \\]
\\[ \left( \forall x \in \mathbb{R} \right)\left( \{\omega \in \Omega : X(\omega) < x\} \in \mathbf{S} \right) \\]
W szczególności, gdy \\( \Omega \\) jest zbiorem co najwyżej przeliczalnym, każde przekształcenie typy \\( X : \Omega\rightarrow\mathbb{R} \\) jest zmienną losową.

#### Definicja rozkładu prawdopodobieństwa zmiennej losowej
Rozkładem prawdopodobieństwa zmiennej losowej \\( X \\) na przestrzeni probabilistycznej \\( \left(\Omega, *S*, *P*\right) \\) jest następująca funkcja, określona na rodzinie zbiorów borelowskich na prostej (oznaczmy ją przez \\( *S*_\mathcal{B} \\)):
\\[ *P*_X (A) = *P* \left( \{\omega \in \Omega : X(\omega) \in A\} \right) \\]
Zauważmy, że zdefiniowane wyżej byty indukują nową przestrzeń probabilistyczną \\( \left(\mathbb{R}, *S*_\mathcal{B}, *P*_X\right) \\).\\\
Zgodnie z metodą podaną wcześniej, dystrybuantę rozkładu prawdopodobieństwa zmiennej losowej \\( X \\) definiujemy jako:
\\[ *F*_X (x) = *P*_X \left(\left( -\infty; x \right)\right) \\]
Otrzymujemy również następującą zależność:
\\[ *P*_X \left(\langle a, b)\right) = *P* \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) = *F*_X (b) - *F*_X (a) \\]
Możemy również stosować skrócony zapis:
\\[ *P* \left(a \leq X < b)\right) = *P* \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) \\]
