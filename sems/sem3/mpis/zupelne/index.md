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
Niech \\( \mathcal{A} = \left\\\{A\_i\right\\\}\_i \\) będzie układem zupełnym takim, że \\( \left(\forall C \in \mathcal{A}\right)\left(\mathbb{P}\left(C\right) > 0\right) \\). Wtedy zachodzi następujący wzór:
\\[ \mathbb{P}\left(B\right) = \sum\_i \mathbb{P}\left(B\vert A\_i\right) \mathbb{P}\left(A\_i\right) \\]

#### Twierdzenie Bayesa
Niech \\( \mathcal{A} = \left\\{A\_i\right\\}\_i \\) będzie układem zupełnym takim, że \\( \left(\forall C \in \mathcal{A}\right)\left(\mathbb{P}\left(C\right) > 0\right) \\) oraz \\( \mathbb{P}\left(B\right) > 0 \\). Wtedy prawdziwe jest następujące zdanie:
\\[ \left(\forall C \in \mathcal{A}\right)\left( \mathbb{P}\left(C\vert B\right) = \frac{\mathbb{P}\left(B\vert C\right) \mathbb{P}\left(C\right)}{\sum\_i \mathbb{P}\left(B\vert A\_i\right) \mathbb{P}\left(A\_i\right)} \right) \\]
Lub inaczej:
\\[ \left(\forall C \in \mathcal{A}\right)\left( \mathbb{P}\left(C\vert B\right) = \frac{\mathbb{P}\left(B\vert C\right) \mathbb{P}\left(C\right)}{\mathbb{P}\left(B\right)} \right) \\]
