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
Niech \\( \left(\Omega, \textbf{S}, \textbf{P}\right) \\) będzie dowolną przestrzenią probabilistyczną. Zmienną losową \\( X \\) nazywamy funkcję zdefiniowaną następująco:
\\[ X : \Omega\ \rightarrow\ \mathbb{R} \\]
\\[ \left( \forall x \in \mathbb{R} \right)\left( \{\omega \in \Omega : X(\omega) < x\} \in \mathbf{S} \right) \\]
W szczególności, gdy \\( \Omega \\) jest zbiorem co najwyżej przeliczalnym, każde przekształcenie typy \\( X : \Omega\rightarrow\mathbb{R} \\) jest zmienną losową.

#### Definicja rozkładu prawdopodobieństwa zmiennej losowej
Rozkładem prawdopodobieństwa zmiennej losowej \\( X \\) na przestrzeni probabilistycznej \\( \left(\Omega, \textbf{S}, \textbf{P}\right) \\) jest następująca funkcja, określona na rodzinie zbiorów borelowskich na prostej (oznaczmy ją przez \\( \textbf{S}_\mathcal{B} \\)):
\\[ \textbf{P}_X (A) = \textbf{P} \left( \{\omega \in \Omega : X(\omega) \in A\} \right) \\]
Zauważmy, że zdefiniowane wyżej byty indukują nową przestrzeń probabilistyczną \\( \left(\mathbb{R}, \textbf{S}_\mathcal{B}, \textbf{P}_X\right) \\).\\\
Zgodnie z metodą podaną wcześniej, dystrybuantę rozkładu prawdopodobieństwa zmiennej losowej \\( X \\) definiujemy jako:
\\[ \textbf{F}_X (x) = \textbf{P}_X \left(\left( -\infty; x \right)\right) \\]
Otrzymujemy również następującą zależność:
\\[ \textbf{P}_X \left(\langle a, b)\right) = \textbf{P} \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) = \textbf{F}_X (b) - \textbf{F}_X (a) \\]
Możemy również stosować skrócony zapis:
\\[ \textbf{P} \left(a \leq X < b)\right) = \textbf{P} \left( \{\omega \in \Omega : a \leq X(\omega) < b\} \right) \\]
