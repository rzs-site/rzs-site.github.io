---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Współczynniki dwumianowe Newtona

Ilość k-elementowych podzbiorów n-elementowego zbioru,
ilość iniekcji z k-elementowego w n-elementowy: \\( \displaystyle {n\choose k}=\left \vert \left[\{1,2,\ldots,n\}\right]^k\right \vert = \left \vert \left[\{n\}\right]^k\right \vert\\)

Definiujemy:

\\( \displaystyle r^{\underline{k}}=\prod_{i=0}^{k-1}(r-i),\qquad r^{\overline{k}}=\prod_{i=0}^{k-1}(r+i) \\)

Wtedy: \\( 1^{\overline{n}} = n! \\)

Dla liczby rzeczywistej \\( r \\) oraz całkowitej dodatniej \\( k \\) definiujemy  \\( \displaystyle{r\choose k}=\frac{r^{\underline{k}}}{k!} \\)

Zależność pomiędzy poprzednimi elementami: \\( \displaystyle {r\choose k}={r-1\choose k}+{r-1\choose k-1} \\)

Negowanie górnego indeksu: \\( \displaystyle {r\choose k}=(-1)^k{k-r-1\choose k} \\)

Współczynniki potęg naturalnych \\( \displaystyle (x+y)^n=\sum_k{n\choose k}x^ky^{n-k} \\)
Współczynniki potęg rzeczywistych \\( \displaystyle (x+y)^r=\sum_k{r\choose k}x^ky^{r-k} \\) dla \\( \displaystyle\left \vert \frac{x}{y}\right \vert <1 \\)

Tożsamość Cauchy'ego \\( \displaystyle {n+m\choose k}=\sum_j{n\choose j}{m\choose k-j} \\) - ilość wybórów k-elementowego zbioru z zbioru n-elementowego oraz m-elementowego

Tożsamość Cauchy'ego w ogólnej postaci \\( \displaystyle {r+s\choose k}=\sum_j{r\choose j}{s\choose k-j} \\)

\\( \displaystyle \sum_k{l\choose m+k}{s\choose n+k}={l+s\choose l-m+n} \\)
