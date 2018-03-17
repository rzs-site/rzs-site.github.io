---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

## Liczby Stirlinga

### Liczby pierwszego rodzaju (cykliczne)

Liczba sposobów na rozmieszczenie n liczb w k cyklach.

* \\( \genfrac{[}{]}{0pt}{}{n}{k} \\)
* \\( \genfrac{[}{]}{0pt}{}{n}{1}=(n-1)! \\) dla \\( n>0 \\)
* \\( \genfrac{[}{]}{0pt}{}{n}{n}=1,\ \genfrac{[}{]}{0pt}{}{n}{n-1}={n\choose 2} \\)
* \\( \genfrac{[}{]}{0pt}{}{n}{k}=\genfrac{[}{]}{0pt}{}{n-1}{k-1}+(n-1)\genfrac{[}{]}{0pt}{}{n-1}{k} \\)

### Liczby drugiego rodzaju (partycyjne)

Liczba sposobów podziału zbioru n elementowego na k niepustych podzbiorów.

* \\( \genfrac{\lbrace}{\rbrace}{0pt}{}{n}{k} \\)
* \\( \genfrac{\lbrace}{\rbrace}{0pt}{}{n}{1}=1 \\) dla \\( n>0 \\)
* \\( \genfrac{\lbrace}{\rbrace}{0pt}{}{n}{n}=1,\ \genfrac{\lbrace}{\rbrace}{0pt}{}{n}{n-1}={n\choose 2} \\)
* \\( \genfrac{\lbrace}{\rbrace}{0pt}{}{n}{k}=\genfrac{\lbrace}{\rbrace}{0pt}{}{n-1}{k-1}+k\genfrac{\lbrace}{\rbrace}{0pt}{}{n-1}{k} \\)
* \\( x^n=\sum_k\genfrac{\lbrace}{\rbrace}{0pt}{}{n}{k}x^{\underline{k}} \\)
* \\( x^{\overline{n}}=\sum_k\genfrac{[}{]}{0pt}{}{n}{k}x^k \\)


### Liczby Bella

to liczba podziałów zbioru  \\(\lbrace{1,...,n\rbrace}\\)

\\( B_n=\sum_k\genfrac{\lbrace}{\rbrace}{0pt}{}{n}{k} \\)
