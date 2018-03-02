---
layout: acc_layout
toc: tpi
use_math: true
---

Warto przerobić następujące zadania na początek:

1. Niech \\( f(n) \\) i \\( g(n) \\) będą dwiema spośród następujących funkcji: \\( n^2, n^3, n^2logn, 2^n, n^n, n^{logn}, 2^{2^n}, 2^{2^{n+2}} \\). Dla każdej pary pokaż, które z notacji \\( \omega , \Omega , \Theta , O, o \\) mają dla nich zastosowanie.
2. Pokaż, że dla dowolnego wielomianu \\( p(n) \\) i dowolnej stałej c istnieje liczba całkowita \\( n_0 \\), taka że dla każdego \\( n>n_0 \\) zachodzi \\( 2^{cn} > p(n) \\). Oblicz \\( n_0 \\) w przypadku, gdy
  1. \\( p(n) = n^2 \\) i \\( c=1 \\);
  2. \\( p(n) = 100n^{100} \\) i \\( c = \frac{1}{100} \\)
3. Dana jest funkcja Ackermanna określona wzorem:
\\[
A(m,n) =
\begin{cases}
n+1 \leftarrow m=0 \\\
A(m-1,1) \leftarrow m>0 \wedge n=0 \\\
A(m-1, A(m, n-1)) \leftarrow m>0 \wedge n>0
\end{cases}
\\]
Dodatkowo niech \\( A_i(n) \\) oznacza \\(A(i,n)\\). Policz wartości Ackermanna dla wszystkich \\( n,m\leq 4 \\). Podaj nierekurencyjne wzory na \\( A_i(n) \\) dla \\( i \leq 4 \\).
