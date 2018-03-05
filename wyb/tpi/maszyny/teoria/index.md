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

Stany "yes", "no", oraz "halt" oznaczają zatrzymanie maszyny. Strzałki oznaczają ruch głowicy automatu, która w stanie początkowym wskazuje na \\(x_0\\), a element z \\( \Sigma \cup { \sqcup } \\) oznacza element, który maszyna zostawia w miejscu w którym była.

### Przykład

Niech \\( \Sigma = {0,1} \\). Definiujemy język \\( L = { ww^R : w \in \Sigma * }\\) (czyli wyraz jest palindromem). Aby skonstruować TM formalnie, która akceptuje tylko te słowa, które należą do \\( L \\), należy sporządzić tabelkę funkcji \\( \delta \\):

{::options parse_block_html="true" /}
<div class="table-box">
\\( \delta\left(x,q\right) \\)    | \\( 0 \\) | \\( 1 \\) | \\( \sqcup \\)
\\( r \\)  | \\( \left(r_0, \sqcup , \rightarrow \right) \\)  |  \\( \left(r_1, \sqcup , \rightarrow \right) \\)  | tak
\\( r_0 \\)  |  \\( \left(r_0, 0 , \rightarrow \right) \\)  | \\( \left(r_0, 1 , \rightarrow \right) \\)  |  \\( \left(l_0, \sqcup, \leftarrow \right) \\)
\\( r_1 \\)  |  \\( \left(r_1, 0 , \rightarrow \right) \\)  | \\( \left(r_1, 1 , \rightarrow \right) \\)  |  \\( \left(l_1, \sqcup, \leftarrow \right) \\)
\\( l_0 \\)  |  \\( l, \sqcup, \leftarrow \\) |  nie  |  nie
\\( l_1 \\)  |  nie  |  \\( l, \sqcup, \leftarrow \\)  |  nie
\\( l \\)  |  \\( l, 0, \leftarrow \\)  |  \\( l, 1, \leftarrow \\)  |  \\( r, \sqcup, \rightarrow \\)

</div>
{::options parse_block_html="false" /}

Nasza TM \\( M = \left( \left\\{ r, r_0, r_1, l, l_0, l_1 \right\\}, \left\\{ 0, 1\right\\}, \delta, r \right)\\)

Na początku ta tabelka może wyglądać na magię, zatem proponuję napisać działanie tej maszyny w liście kroków:
1. Jeśli słowo jest puste, zwróć "tak".
2. Weź pierwszy znak, wyczyść go, pamiętając jego wartość, po czym idź w prawo aż do napotkania \\( \sqcup \\).
3. Idź w lewo, weź pierwszy znak i porównaj go z zapamiętanym. Jeśli są różne, zwróć "nie". W przeciwnym wypadku wyczyść go.
4. Idź w lewo aż do napotkania \\( \sqcup \\).
5. Wróć do punktu 1.

Zauważmy, że idąc w ten sposób, aby sprawdzić palindrom maszyna wykona \\( O(n^2) \\) kroków, ponieważ będzie iść n razy w prawo, n-1 razy w lewo, n-2 razy w prawo, ... .

Pomysłem, aby zmniejszyć czas działania takiej maszyny jest zwiększenie ilości taśm.
Wtedy dla \\( k \\) równego ilości taśm nasze \\( \delta \\) będzie miało postać następującą:
\\[ \delta: Q \times \left(\Sigma \cup \left\\{\sqcup\\right\\}\right)^k \longrightarrow \left(Q \cup \left\\{"tak", "nie", "halt"\right\\}\right)\times\left( \left(\Sigma \cup \left\\{\sqcup\right\\}\right) \times \left\\{\leftarrow, \rightarrow, -\right\\} \right)^k\\]

Przypatrzmy się poraz kolejny językowi \\(L = \left\\{w: w\text{ jest palindromem}\right\\}\\). Opiszmy dwutaśmową TM rozwiązującą te zagadnienie:

{::options parse_block_html="true" /}
<div class="table-box">
| \\( \delta \\) |                           \\( 0, 0\\)                           | \\( 0, 1 \\) |                   \\(0, \sqcup\\)                   | \\(1, 0 \\) |                            \\( 1, 1\\)                            |                  \\( 1, \sqcup \\)                 | \\( \sqcup, 0 \\) | \\( \sqcup, 1 \\) |                      \\( \sqcup, \sqcup \\)                     |
|:--------------:|:---------------------------------------------------------------:|:------------:|:---------------------------------------------------:|:-----------:|:-----------------------------------------------------------------:|:--------------------------------------------------:|:-----------------:|:-----------------:|:---------------------------------------------------------------:|
|        q       |                                -                                |       -      | \\( \left( q,0,\rightarrow,0,\rightarrow\right) \\) |      -      |                                 -                                 | \\( \left( q,1,\rightarrow,1,\rightarrow\right)\\) |         -         |         -         |         \\(\left(l,\sqcup,\leftarrow,\sqcup,-\right)\\)         |
|        l       |                                -                                |       -      |   \\(\left(p, 0, \leftarrow, \sqcup, - \right)\\)   |      -      |                                 -                                 | \\( \left( p, 1, \leftarrow, \sqcup, - \right) \\) |         -         |         -         | \\( \left( s, \sqcup, \rightarrow, \sqcup, \leftarrow\right)\\) |
|        s       | \\( \left( s, \sqcup, \rightarrow, \sqcup, \leftarrow\right)\\) |      nie     |                          -                          |     nie     | \\( \left( s, \sqcup, \rightarroq, \sqcup, \leftarrow \right) \\) |                          -                         |         -         |         -         |                               tak                               |
</div>
{::options parse_block_html="false" /}
