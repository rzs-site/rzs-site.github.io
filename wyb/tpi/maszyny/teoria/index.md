---
layout: acc_layout
toc: tpi
use_math: true
---


# Maszyny Turinga

Niech \\( \Sigma \\) będzie alfabetem nad zbiorem skończonym. Jako **taśmę** definiuje się ciąg \\( \left\\{ x_i \right\\} \\) taki, że \\( \forall i \in \mathbb{Z} x_i \in \Sigma \vee x_i=\sqcup \\). Po takiej nieskończonej taśmie chodzi automat, który wykonuje operacje w zależności od jego stanu oraz wartości na którą wskazuje. \\( \sqcup \\) (nazywany "blank") symbolizuje nulla, czyli brak wartości w danej chwili.

#### definicja
<div style="width: 100%; background-color: purple; color: yellow">**Maszyna Turinga** (TM) to czwórka \\( \left(Q, \Sigma, \delta, q_0\right) \\) </div>
