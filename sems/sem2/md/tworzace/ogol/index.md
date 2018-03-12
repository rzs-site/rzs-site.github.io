---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

## Funkcje tworzące

Niech \\( a_n \\) będzie ciągiem. Funkcję tworzącą tego ciągu definujemy jako:

\\(A(x) = \sum_{n=0}^{\inf}(a_n x^n) \\).

Z tego wzoru można wyliczyć wzór na n-ty element ciągu.

### Ciąg Fibbonacciego

Wzór na n-ty element ciągu Fibbonacciego

\\( F_n = \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^n - \left( \frac{1 - \sqrt{5}}{2} \right)^n \right) \\)

Uwaga: drugi element bardzo szybko zmieża do \\(0\\).

Uwaga 2: to bardzo szybka metoda szacowania n-tej liczby ciągu Fibbonacciego.

Uwaga 3: wyniki są szacowaniem, ponieważ nie poznamy dokładniej wartości \\(\sqrt{5}\\)

\\(F_n\\) można interpretować jako:
* Liczbę królików w kolejnych pokoleniach.
* licza pokryć planszy \\(2 \times n\\) kostkami \\(2 \times 1 \\) to \\(F_n\\)

### Liczby Catalana

Liczby Catalana to ciąg liczbowy mający zastosowanie w kombinatoryce. Definujemy je jako:

\\(C_0 = 1 \quad C_{n+1} = \sum_{i=0}^{n}C_i C_{n-i} \\)

Można dla nich wyznaczyć funkcję tworzącą niemalże analogicznie do liczb Fibbonacciego.

Otrzymamy wtedy \\( C_n=\frac{1}{n+1}{2n\choose n} \\)

\\(C_n\\) można interpretować jako:
* Liczba sposóbów rozmieszczenia nawiasów dla n+1 argumentowego wyrażenia.
* Liczbę różnych drzew binarnych o \\(n+1 \\) liściach.
* Liczbę dróg na kwadracie \\(n \times n \\) z lewego dolnego wierzchołka do prawego górnego tak aby nie przekroczyć przekątnej.
* Liczba sposobów podziałów  wielokąta majęcego \\(n + 2 \\) krawędzi na trójkąty przy pomocy nieprzecinających się krawędzi.
