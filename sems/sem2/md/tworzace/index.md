---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Funkcje tworzące

* Wyprowadzenie funkcji tworzącej ciągu Fibbonacciego:

{::options parse_block_html="true" /}
<div class="math-box"> <p>
    \\[
        F_0 = 0, \quad F_1 = 1, \quad F_n = F_{n - 1} + F_{n - 2} \\\
        \text{Niech}\ F(x)\ \text{jest funkcją tworzącą tych liczb, wtedy:} \\\
        F(x) = \sum_{n = 0}^\infty F_n x^n \\\
        \text{Ponieważ}\ F_0 = 0\ \text{oraz}\ F_1 = 1\ \text{to:}\ \\\
        F(x) = \sum_{n = 1}^\infty F_n x^n \\\
        F(x) = x + \sum_{n = 2}^\infty F_n x^n \\\
        \text{Następnie rozbijamy korzystając z:}\ F_n = F_{n - 1} + F_{n - 2}\ \text{mamy}: \\\
        F(x) = x + \sum_{n = 2}^\infty (F_{n -1} + F_{n - 2}) x^n \\\
        F(x) = x + \sum_{n = 2}^\infty F_{n -1}x^n + \sum_{n = 2}^\infty F_{n - 2} x^n
    \\]
    </p></div>
{::options parse_block_html="false" /}


* Ciąg Fibonacciego
* Ukorzenione drzewa binarne, liczby Catalana \\( C_n=\frac{1}{n+1}{2n\choose n} \\)
* Liczby Catalana, więcej przykładów
