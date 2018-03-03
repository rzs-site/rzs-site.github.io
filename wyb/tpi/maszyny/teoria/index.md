---
layout: acc_layout
toc: tpi
use_math: true
---


# Maszyny Turinga

Niech \\( \Sigma \\) będzie skończonym alfabetem. Jako **taśmę** definiuje się ciąg \\( \left\\{ x_i \right\\} \\) taki, że \\( \forall i \in \mathbb{Z} x_i \in \Sigma \vee x_i=\sqcup \\). Po takiej nieskończonej taśmie chodzi automat, który wykonuje operacje w zależności od jego stanu oraz wartości na którą wskazuje. \\( \sqcup \\) (nazywany "blank") symbolizuje nulla, czyli brak wartości w danej chwili.

{::options parse_block_html="true" /}
<div class="math-box"><p> **Maszyna Turinga** (TM) to czwórka \\( \left(Q, \Sigma, \delta, q_0\right) \\) .</p></div>
{::options parse_block_html="false" /}

W podanej wyżej definicji \\( Q \\) jest skończonym zbiorem stanów, \\( q_0 \\) stanem początkowym, a \\( \delta \\) jest funkcją:

\\[ \delta: Q \times \Sigma \longrightarrow Q \cup \left\\{ "yes", "no", "halt" \right\\} \times \Sigma \cup \left\\{ \sqcup \right\\} \times \left\\{ \leftarrow, \rightarrow, - \right\\} \\]

Stany "yes", "no", oraz "halt" oznaczają zatrzymanie maszyny. Strzałki oznaczają ruch głowicy automatu, która w stanie początkowym wskazuje na \\(x_0\\), a element z \\(Sigma \Cup { \sqcup } \\) oznacza element, który maszyna zostawia w miejscu w którym była.

###Przykład

Niech \\( \Sigma = {0,1} \\). Definiujemy język \\( L = { ww^R : w \in \Sigma * }\\) (czyli wyraz jest palindromem). Aby skonstruować TM formalnie, która akceptuje tylko te słowa, które należą do \\( L \\), należy sporządzić tabelkę wyników funkcji \\( \delta \\):

    | \\( 0 \\) | \\( 1 \\) | \\( \sqcup \\)
----| --------- | --------- | --------------
\\( q_0 \\)  | \\( \left(r_0, \sqcup , \rightarrow \right) \\)  |  \\( \left(r_1, \sqcup , \rightarrow \right) \\)  | \\( \left(tak, \sqcup , - \right) \\) 
