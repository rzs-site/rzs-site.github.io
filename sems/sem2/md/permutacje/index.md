---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Permutacje
Definiujemy \\( S_n = Sym([n]) \\)

\\( (S_n, \circ ) \\) jest grupą permutacji (złożenie nie jest przemienne więc nie jest to grupa abelowa)

Definiujemy \\( \delta \in S_n \\) jako bijekcję \\( \delta [n] \rightarrow [n] \\)

Permutacja odwrotna \\( \delta^{-1} \\) to taka permutacja że \\( \delta \circ \delta^{-1} = id  \\)

Mnożenie (składanie) permutacji: \\( (\delta \circ \pi)(a_i)  = \delta(\pi(a_i))\\)

Cykl to taka permutacja \\(\delta\\), dla której istnieje ciąg \\(a_1, a_2, a_3... a_n  \\) parami różnych elementów należących
do \\([n] \\) spełniających następujące warunki:

* \\( \delta(a_i) = a_{i + 1} \\) dla \\(i < k\\)
* \\( \delta(a_k) = a_1\\)
* \\( \delta(x) = x\\) w pozostałych przypadkach

Cykl o długości 2 nazywamy transpozycją.
Każdy cykl można przedstawić jako złożenie transpozycji:
\\((a_1, a_2, a_3... a_n) = (a_1, a_n)(a_1, a_{n-1})(a_1, a_{n-2})  ... (a_1, a_2)  \\) Uwaga: To działa!

Każdą transpocyję można rozpisać na transpozycję liczb sąsiednich.

Przykład: \\((1,5)=(1,2)(2,3)(3,4)(4,5)(3,4)(2,3)(1,2)\\)

Inwersja to permutacja dla której \\(\delta(i) > \delta(j) \land i < j \\)

Definiujemy znak permutacji \\(sgn(\delta) = (-1)^r \\) gdzie \\( r \\) jest liczbą inwersji. Dodatkowo: \\( sgn(\sigma\tau)=sgn(\sigma )sgn (\tau ) \\)


Wektor inwersji to:
\\( J_\delta = (i_1, i_2, ... i_n)\\) gdzie \\(i_j\\) to liczba liczb większych od \\(j\\) przed \\( j \\) w dolnym rzędzie permutacji. Uwaga: Istnieją inne definicje, niekoniecznie równoważne.

Alternatywna definicja \\(i_j\\) to \\(\| {k : \delta(k) > j \land k < \delta^{-1}(j)} \|\\)

\\( A_n=\{\sigma\in S_n:\ sgn(\sigma)=1\} \\) nazywamy zbiorem permutacji parzystych lub grupą alternującą.

 \\( A_n\vartriangleleft S_n \\)  ponieważ \\( \| S_n \| : \| A_n \| = 2 \\)  (pojęcie z algebry)
