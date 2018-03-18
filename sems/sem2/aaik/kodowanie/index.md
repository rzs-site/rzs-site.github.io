---
layout: acc_layout
toc: aaik
use_math: true
---

### Elementy Teorii Kodowania

1.  Definicja. Kod nad alfabetem  \\(  \\Sigma  \\)  : podzbiór  \\( 
    \\Sigma^\*  \\) 
2.  Definicja. Kod blokowy nad  \\(  \\Sigma  \\)  długości  \\(  n
     \\)  : podzbiór  \\(  \\Sigma^n  \\) 
3.  Odległość Hamminga na  \\(  \\Sigma^n  \\)  :  \\(  d\_H(x,y) =
    \|\\{i: x\_i \\neq y\_i\\}\|  \\) 
4.  Definicja. Rozstęp kodu:  \\(  \\Delta(\\mathcal{C}) =
    \\min\\{d\_H(x,y): x,y\\in \\mathcal{C} \\land x \\neq y\\}  \\) 
5.  Definicja. Kod  \\(  \\mathcal{C}  \\)  jest  \\(  (n,M,d)\_q  \\) 
    kodem, jeśli  \\(  \\mathcal{C} \\subseteq \\Sigma^n  \\)  ,  \\( 
    \|\\Sigma\| = q  \\)  ,  \\(  M=\|\\mathcal{C}\|  \\)  , oraz  \\( 
    \\Delta(\\mathcal{C})= d  \\) 
6.  Definicja.  \\(  B(x,r) = \\{y\\Sigma^n: d\_H(x,y)\\leq r\\}  \\) 
7.  Twierdzenie: Jeśli  \\(  \\Delta(\\mathcal{C}) \\geq d  \\)  , to
    kod  \\(  \\mathcal{C}  \\)  potrafi wykrywać do  \\(  d-1  \\) 
    błędów.
8.  Twierdzenie: Jeśli  \\(  \\Delta(\\mathcal{C}) \\geq d  \\)  , to
    kod  \\(  \\mathcal{C}  \\)  potrafi korygować do  \\( 
    \\left\\lfloor \\frac{d-1}{2}\\right\\lfloor  \\)  błędów.
9.  Twierdzenie (Singleton Bound). Jeśli istnieje  \\(  (n,M,d)\_q
     \\)  - kod to  \\(  M\\leq q^{n-d+1}  \\) 
10. Lemat:  \\(  \|B(x,r)\| = \\sum\_{k=0}^{r} \\binom{n}{k} (q-1)^k
     \\) 
11. Twierdzenie (Hamming Bound; sphere packing bound). Jeśli istnieje
     \\(  (n,M,d)\_q  \\)  - kod oraz  \\(  2k+1\\leq d  \\)  to  \\[ 
    M \\cdot \\left(\\sum\_{i=0}^{k}\\binom{n}{i}(q-1)^i\\right) \\leq
    q^n  \\]  Szkic dowodu: Jeśli  \\(  \\mathcal{C}  \\)  jest  \\( 
    (n,M,2k+1)  \\)  kodem, to kulki  \\( 
    \\{B(x,k):x\\in\\mathcal{C}\\}  \\)  są parami rozłączne.
12. Konstrukcja płaszczyzny rzutowej  \\(  PG(2,2)  \\)  nad ciałem
    2-elementowym (płaszczyzna Fano):\
    ![](https://cs.pwr.edu.pl/cichon/2016_17_b/Algebra/FanoPlane.png)

