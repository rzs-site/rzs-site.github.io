---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Prawdopodobieństwo zupełne. Wzór Bayesa
#### Twierdzenie o prawdopodobieństwie całkowitym
Niech \\( \mathcal{A} = \left\{A_i\right\}_i \\) będzie układem zupełnym takim, że \\( \left(\forall C \in \mathcal{A}\right)\left(*P*\left(C\right) > 0\right) \\). Wtedy zachodzi następujący wzór:
\\[ *P*\left(B\right) = \sum_i *P*\left(B\vert A_i\right) *P*\left(A_i\right) \\]

#### Twierdzenie Bayesa
Niech \\( \mathcal{A} = \left\{A_i\right\}_i \\) będzie układem zupełnym takim, że \\( \left(\forall C \in \mathcal{A}\right)\left(*P*\left(C\right) > 0\right) \\) oraz \\( *P*\left(B\right) > 0 \\). Wtedy prawdziwe jest następujące zdanie:
\\[ \left(\forall C \in \mathcal{A}\right)\left( *P*\left(C\vert B\right) = \frac{*P*\left(B\vert C\right) *P*\left(C\right)}{\sum_i *P*\left(B\vert A_i\right) *P*\left(A_i\right)} \right) \\]
Lub inaczej:
\\[ \left(\forall C \in \mathcal{A}\right)\left( *P*\left(C\vert B\right) = \frac{*P*\left(B\vert C\right) *P*\left(C\right)}{*P*\left(B\right)} \right) \\]
