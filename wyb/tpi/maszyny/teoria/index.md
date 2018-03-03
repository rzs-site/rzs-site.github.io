---
layout: acc_layout
toc: tpi
use_math: true
---


# Maszyny Turinga

Niech \\( \Sigma \\) będzie skończonym alfabetem. Jako **taśmę** definiuje się ciąg \\( \left\\{ x_i \right\\} \\) taki, że \\( \forall i \in \mathbb{Z} x_i \in \Sigma \vee x_i=\sqcup \\). Po takiej nieskończonej taśmie chodzi automat, który wykonuje operacje w zależności od jego stanu oraz wartości na którą wskazuje. \\( \sqcup \\) (nazywany "blank") symbolizuje nulla, czyli brak wartości w danej chwili.

{::options parse_block_html="true" /}
<div class="math-box"> **Maszyna Turinga** (TM) to czwórka \\( \left(Q, \Sigma, \delta, q_0\right) \\) .</div>

W podanej wyżej definicji \\( Q \\) jest skończonym zbiorem stanów, \\( q_0 \\) stanem początkowym, a \\( \delta \\) jest funkcją:
\[ \delta: Q \times \Sigma \longrightarrow Q \Cup \left\\{ "yes", "no", "halt" \right\\} \times \Sigma \Cup \left\\{ \sqcup \right\\} \times \left\\{ \leftarrow, \rightarrow, \_ \right\\} \]
Stany "yes", "no", oraz "halt" oznaczają zatrzymanie maszyny. Strzałki oznaczają ruch głowicy.
