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
Niech \\( \left(\Omega, *S*, \mathbb{P}\right) \\) będzie dowolną przestrzenią probabilistyczną. Zmienną losową \\( X \\) nazywamy funkcję zdefiniowaną następująco:
\\[ X : \Omega\ \rightarrow\ \\mathbb{R} \\]
\\[ \left( \forall x \in \\mathbb{R} \right)\left( \{\omega \in \Omega : X(\omega) < x\} \in \mathbf{S} \right) \\]
W szczególności, gdy \\( \Omega \\) jest zbiorem co najwyżej przeliczalnym, każde przekształcenie typy \\( X : \Omega\rightarrow\\mathbb{R} \\) jest zmienną losową.

#### Definicja rozkładu prawdopodobieństwa zmiennej losowej
Rozkładem prawdopodobieństwa zmiennej losowej \\( X \\) na przestrzeni probabilistycznej \\( \left(\Omega, *S*, \mathbb{P}\right) \\) jest następująca funkcja, określona na rodzinie zbiorów borelowskich na prostej (oznaczmy ją przez \\( *S*\_\mathcal{B} \\) ):
\\[ \mathbb{P}\_X (A) = \mathbb{P} \left( \{\omega \in \Omega : X(\omega) \in A\} \right) \\]
Zauważmy, że zdefiniowane wyżej byty indukują nową przestrzeń probabilistyczną \\( \left(\\mathbb{R}, *S*\_\mathcal{B}, \mathbb{P}\_X\right) \\).\\\
Zgodnie z metodą podaną wcześniej, dystrybuantę rozkładu prawdopodobieństwa zmiennej losowej \\( X \\) definiujemy jako:
\\[ \mathbb{F}\_X (x) = \mathbb{P}\_X \left(\left( -\infty; x \right)\right) \\]
Otrzymujemy również następującą zależność:
\\[ \mathbb{P}\_X \left(\langle a, b)\right) = \mathbb{P} \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) = \mathbb{F}\_X (b) - \mathbb{F}\_X (a) \\]
Możemy również stosować skrócony zapis:
\\[ \mathbb{P} \left(a \leq X < b)\right) = \mathbb{P} \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) \\]
