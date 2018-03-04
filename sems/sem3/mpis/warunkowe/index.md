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
Prawdopodobieństwo zdarzenia \\( A \\) pod warunkiem wystąpienia zdarzenia \\( B \\) (przy założeniu, że \\( \textbf{P}\left(B\right) > 0 \\)) oznaczamy przez \\( \textbf{P}\left(A\vert B\right) \\) i definiujemy następująco:
\\[ \textbf{P}\left(A\vert B\right) = \frac{\textbf{P}\left(A \cap B\right)}{\textbf{P}\left(B\right)} \\]
\\[ \textbf{P}\left(A \cap B\right) = \textbf{P}\left(A\vert B\right)\textbf{P}\left(B\right) \\]
Zauważmy, że funkcja \\( \textbf{P}\left(A\vert B\right) \\), przy ustalonym \\( B \\) spełnia aksjomaty rozkładu prawdopodobieństwa.\\\
Na podstawie powyższego wzoru możemy, za pomocą indukcji matematycznej, wyznaczyć wzór na prawdopodobieństwo iloczynu zbiorów:
\\[ \textbf{P}\left( A_1 \cap A_2 \cap \ldots \cap A_n \right) = \textbf{P}\left( A_n \vert  A_1 \cap A_2 \cap \ldots \cap A_{n-1} \right) \ldots \textbf{P}\left( A_3 \vert  A_1 \cap A_2 \right)\textbf{P}\left( A_2 \vert  A_1 \right)\textbf{P}\left( A_1 \right) \\]

#### Niezależność zdarzeń
Zdarzenie nazywamy \textbf{niezależnymi} jeśli zachodzi następujący warunek:
\\[ \textbf{P}\left(A\vert B\right) = \textbf{P}\left(A\right) \\]
\\[ \textbf{P}\left(B\vert A\right) = \textbf{P}\left(B\right) \\]
Warunek ten możemy również zapisać w postaci:
\\[ \textbf{P}\left(A \cap B\right) = \textbf{P}\left(A\right)\textbf{P}\left(B\right) \\]
#### Rodziny zdarzeń niezależnych
Rodzinę zdarzeń \\( \left\{A_i\right\}^n_{i=1} \\) nazywamy rodziną zdarzeń niezależnych jeśli dla każdych \\( k_1 \\), \\( k_2 \\), ..., \\( k_p \\), takich, że \\( 1 \leq k_1 \leq \ldots \leq n \\) mamy:
\\[ \textbf{P}\left(A_{k_1} \cap A_{k_2} \cap \ldots \cap A_{k_p}\right) = \textbf{P}\left(A_{k_1}\right)\textbf{P}\left(A_{k_2}\right) \ldots \textbf{P}\left(A_{k_p}\right) \\]
Rodzinę zdarzeń \\( \left\{A_i\right\}^\infty_{i=1} \\) nazywamy rodziną zdarzeń niezależnych jeśli dla każdego \\( n \in \mathbb{N} \\), takiego, że \\( n > 1 \\) rodzina \\( \left\{A_i\right\}^n_{i=1} \\) jest rodziną zdarzeń niezależnych.\\\
Niech \\( \left\{A_i\right\}^{n+1}_{i=1} \\) będzie rodziną zdarzeń niezależnych. Wtedy zdarzenia \\( \bigcup_{i=1}^n A_i \\) oraz \\( A_{n+1} \\) są parą zdarzeń niezależnych.\\\
Niech \\( \left\{A_i\right\}^{n}_{i=1} \\) będzie rodziną zdarzeń niezależnych. Wtedy \\( \left\{A_i'\right\}^{n}_{i=1} \\), czyli rodzina składająca się ze zdarzeń \\( A_1' \\), \\( A_2' \\) itd, jest rodziną zdarzeń niezależnych.
