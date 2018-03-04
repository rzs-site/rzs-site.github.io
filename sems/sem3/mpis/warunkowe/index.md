---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Prawdopodobieństwo warunkowe. Niezależność zdarzeń
#### Prawdopodobieństwo warunkowe
Prawdopodobieństwo zdarzenia \\( A \\) pod warunkiem wystąpienia zdarzenia \\( B \\) (przy założeniu, że \\( \mathbb{P}\left(B\right) > 0 \\) ) oznaczamy przez \\( \mathbb{P}\left(A\vert B\right) \\) i definiujemy następująco:
\\[ \mathbb{P}\left(A\vert B\right) = \frac{\mathbb{P}\left(A \cap B\right)}{\mathbb{P}\left(B\right)} \\]
\\[ \mathbb{P}\left(A \cap B\right) = \mathbb{P}\left(A\vert B\right)\mathbb{P}\left(B\right) \\]
Zauważmy, że funkcja \\( \mathbb{P}\left(A\vert B\right) \\), przy ustalonym \\( B \\) spełnia aksjomaty rozkładu prawdopodobieństwa.\\\
Na podstawie powyższego wzoru możemy, za pomocą indukcji matematycznej, wyznaczyć wzór na prawdopodobieństwo iloczynu zbiorów:
\\[ \mathbb{P}\left( A\_1 \cap A\_2 \cap \ldots \cap A\_n \right) = \mathbb{P}\left( A\_n \vert  A\_1 \cap A\_2 \cap \ldots \cap A\_{n-1} \right) \ldots \mathbb{P}\left( A\_3 \vert  A\_1 \cap A\_2 \right)\mathbb{P}\left( A\_2 \vert  A\_1 \right)\mathbb{P}\left( A\_1 \right) \\]

#### Niezależność zdarzeń
Zdarzenie nazywamy *niezależnymi* jeśli zachodzi następujący warunek:
\\[ \mathbb{P}\left(A\vert B\right) = \mathbb{P}\left(A\right) \\]
\\[ \mathbb{P}\left(B\vert A\right) = \mathbb{P}\left(B\right) \\]
Warunek ten możemy również zapisać w postaci:
\\[ \mathbb{P}\left(A \cap B\right) = \mathbb{P}\left(A\right)\mathbb{P}\left(B\right) \\]
#### Rodziny zdarzeń niezależnych
Rodzinę zdarzeń \\( \left\{A\_i\right\}^n\_{i=1} \\) nazywamy rodziną zdarzeń niezależnych jeśli dla każdych \\( k\_1 \\), \\( k\_2 \\), ..., \\( k\_p \\), takich, że \\( 1 \leq k\_1 \leq \ldots \leq n \\) mamy:
\\[ \mathbb{P}\left(A\_{k\_1} \cap A\_{k\_2} \cap \ldots \cap A\_{k\_p}\right) = \mathbb{P}\left(A\_{k\_1}\right)\mathbb{P}\left(A\_{k\_2}\right) \ldots \mathbb{P}\left(A\_{k\_p}\right) \\]
Rodzinę zdarzeń \\( \left\{A\_i\right\}^\infty\_{i=1} \\) nazywamy rodziną zdarzeń niezależnych jeśli dla każdego \\( n \in \\mathbb{N} \\), takiego, że \\( n > 1 \\) rodzina \\( \left\{A\_i\right\}^n\_{i=1} \\) jest rodziną zdarzeń niezależnych.\\\
Niech \\( \left\{A\_i\right\}^{n+1}\_{i=1} \\) będzie rodziną zdarzeń niezależnych. Wtedy zdarzenia \\( \bigcup\_{i=1}^n A\_i \\) oraz \\( A\_{n+1} \\) są parą zdarzeń niezależnych.\\\
Niech \\( \left\{A\_i\right\}^{n}\_{i=1} \\) będzie rodziną zdarzeń niezależnych. Wtedy \\( \left\{A\_i'\right\}^{n}\_{i=1} \\), czyli rodzina składająca się ze zdarzeń \\( A\_1' \\), \\( A\_2' \\) itd, jest rodziną zdarzeń niezależnych.
