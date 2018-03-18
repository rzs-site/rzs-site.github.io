---
layout: acc_layout
toc: aaik
use_math: true
---

### Pierścienie i ideały

1.  Pojęcie ideału w pierścieniu przemiennym z jednością

2.  Ideał generowany przez element  \\(  a\\in R  \\)  :  \\(  (a)= \\{ra:r\\in R\\}  \\) 

3.  Ideał generowany przez elementy  \\(  a,b\\in R  \\)  :  \\(  (a,b) = \\{ra + sb:r,s \\in R\\}  \\) 

4.  Konstrukcja pierścienia ilorazowego: I - ideał w R:
    - \\(  (a \\sim\_I b) \\equiv a-b \\in I  \\) 
    - \\(  R/I = \\{\[a\]\_I : a \\in R\\}  \\) 
    - \\(  \[a\]\_I + \[b\]\_I = \[a+b\]\_I  \\) 
    - \\(  \[a\]\_I \* \[b\]\_I = \[a\*b\]\_I  \\) 

5.  Przykład:  \\(  \\mathbb{R}\[x\]/(x) \\cong \\mathbb{R}  \\) 

6.  **Przykład**

 {.tablica}
 \\[  \\mathbb{R}\[x\]/(x^2+1) \\cong \\mathbb{C}  \\] 

Przykład:  \\(  \\mathbb{Z}\_2\[x\]/(1+x+x^2)  \\)  jest cztero elementowym ciałem

7.  Tw. Jeśli  \\(  f:R\_1 \\to R\_2  \\)  jest homomorfizmem pierścieni, to \\(  ker(f)  \\)  jest ideałem pierścienia  \\(  R\_1  \\) 

8.  Tw. Jeśli  \\(  f:R\_1 \\to R\_2  \\)  jest epimorfizmem pierścieni, to \\(  R\_1/ker(f) \\cong R\_2  \\) 

9.  Tw. Niech  \\(  I  \\)  będzie ideałem pierścienia  \\(  R  \\). Niech \\(  Q(a) = \[a\]\_I  \\).
    1.  Jeśli  \\(  I\\subseteq J \\subseteq R  \\)  jest ideałem, to  \\( 
        Q\[J\]  \\)  jest ideałem w  \\(  R/I  \\)  oraz  \\( 
        Q^{-1}\[Q\[J\]\]=J  \\) 
    2.  Jeśli  \\(  H\\subseteq R/I  \\)  jest ideałem, to  \\( 
        Q^{-1}\[H\]  \\)  jest ideałem w  \\(  R  \\)  oraz  \\( 
        Q\[Q^{-1}\[H\]\]=H  \\) 
  
### Ideały

1.  Def.Jednostki pierścienia R: U(R) = zbiór elementów odwracalnych
    pierścienia R.\
    Przykłady:  \\(  U(\\mathbb{Z}) = \\{-1,1\\}  \\)  ,  \\(  U(\\mathbb{Z}\[i\]) =
    \\{1,-1,i,-i\\}  \\) 
2.  Podzielność w dowolnym pierścieniu:  \\(  a\|b \\leftrightarrow (\\exists
    q)(a\\cdot q = b)  \\) 
3.  Elementy stowarzyszone:  \\(  (a\\sim b) \\leftrightarrow ((a\|b)\\land (b\|a))
    \\) 
4.  Tw. W dziedzinie całkowitości mamy:  \\(  (a\\sim b) \\leftrightarrow (\\exists
    u\\in U(R)(a=u\\cdot b)  \\) 
5.  Jeśli  \\(  R  \\)  jest pierścieniem z jednością, to ideał  \\(  I
     \\)  jest właściwy wtedy i tylko wtedy, gdy  \\(  1 \\notin I  \\) .
6.  Def. I jest ideałem maksymalnym jeśli  \\(  I\\neq R  \\)  oraz
    jeśli  \\(  J  \\)  jest takim ideałem, że  \\(  I\\subseteq J  \\) 
    oraz  \\(  J\\neq I  \\)  to  \\(  J=R  \\) 
7.  **Twierdzenie.** Jeśli  \\(  R  \\)  jest pierścieniem z jednością
    oraz  \\(  I  \\)  jest ideałem właściwym, to istnieje ideał
    maksymalny  \\(  J  \\)  taki, że  \\(  I\\subseteq J  \\) \
    Dowód. Dosyć proste zastosowanie Lematu Kuratowskiego-Zorna do
    rodziny  \\[  X = \\{J:I\\subseteq J \\land J \\textrm{ jest
    ideałem } \\land 1\\notin I \\}  \\]  uporządkowanej przez
    inkluzję.
8.  Tw. Jeśli  \\(  R  \\)  jest pierścieniem z jednością (  \\(  1\\neq
    0  \\)  ) oraz  \\(  I  \\)  jesi ideałem w  \\(  R  \\)  , to  \\( 
    R/I  \\)  jest ciałem wtedy i tylko wtedy, gdy  \\(  I  \\)  jest
    ideałem maksymalnym.
9.  Def. Element  \\(  p  \\)  jest pierwszy, jeśli  \\(  (\\forall
    a,b)(p\|(a\\cdot b) \\to ((p\|a)\\lor(p\|b))  \\) 
10. Def. Ideał  \\(  I  \\)  jest pierwszy, jeśli  \\(  (\\forall
    a,b)(a\\cdot b\\in I \\to ((a\\in I) \\lor (b\\in I))  \\) 
11. Tw. Element  \\(  p  \\)  jest pierwszy wtedy i tylko wtedy, gdy
    ideał  \\(  (p)  \\)  jest pierwszy

Wskazówka do zadania o funkcji  \\(  \\phi(n)  \\)  : zauważmy najpierw,
że jeśli  \\(  n\\gt 2  \\)  to  \\(  2\|\\phi(n)  \\)  ; załóż
następnie  \\(  \\phi(n)\|n  \\)  i rozważ najmniejszą liczbę pierwszą
większą od 3, która dzieli  \\(  n  \\)  (wygodnie jest rozważyć napierw
liczby  \\(  n  \\)  , które nie są podzielne przez  \\(  3  \\)  , a
potem te które dzielą się przez  \\(  3  \\)  ).

