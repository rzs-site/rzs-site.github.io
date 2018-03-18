---
layout: acc_layout
toc: aaik
use_math: true
---

### 20.04.2017: Dziedziny Ideałów Głównych

1.  **Definicja** **Dziedzina euklidesowa** (ED): dziedzina całkowitości
    z funkcją  \\(  v:R\\to\\NN  \\)  (normą) taką, że
    1.   \\(  v(x)=0 \\equiv x=0  \\) 
    2.  Dla dowolnych  \\(  a,b\\in R  \\)  takich, że  \\(  b\\neq 0
         \\)  istnieją  \\(  q, r \\in R  \\)  takie, że  \\(  a=
        q\\cdot q+r  \\)  oraz  \\(  v(r)\\lt v(b)  \\)  .
2.  **Definicja** Dziedzina  \\(  R  \\)  jest **dziedziną ideałów
    głównych** (PID) jeśli każdy ideał w  \\(  R  \\)  jest główny
3.  **Twierdzenie.**  \\(  ED \\subseteq PID  \\) 
4.  Przykład. W pierścieniu  \\(  \\ZZ\[x\]  \\)  ideał  \\(  (2,x)
     \\)  nie jest ideałem głównym.
5.  **Twierdzenie.** Jeśli  \\(  R  \\)  jest PID oraz  \\( 
    I\_0\\subseteq I\_1 \\subseteq I\_2 \\subseteq \\ldots  \\)  są
    ideałami, to istnieje  \\(  n  \\)  takie, że  \\(  (\\forall k\\geq
    n)(I\_k = I\_n)  \\)  .
6.  **Definicja** Element  \\(  p  \\)  jest **nierozkładalny** jeśli
    dla dowolnych  \\(  a  \\)  ,  \\(  b  \\)  takich, że  \\( 
    p=a\\cdot b  \\)  mamy  \\(  a\\in U(R)  \\)  lub  \\(  b \\in U(R)
     \\)  .
7.  **Twierdzenie.** Elementy pierwsze są nierozkładalne
8.  **Twierdzenie.** W PID elementy nierozkładalne sa pierwsze.
9.  Przykład: W pierścieniu  \\(  \\ZZ\[\\sqrt{-3}\]  \\)  liczba  \\( 
    2  \\)  jest nierozkładalna ale nie jest pierwsza:  \\( 
    2\|(1+i\\sqrt{3})(1-i\\sqrt{3})  \\)  .
10. PRZYKŁAD (Twierdzenie Fermata): Liczba pierwsza  \\(  p\\gt 2  \\) 
    jest postaci  \\(  4k+1  \\)  wtedy i tylko wtedy, gdy istnieją
    takie liczby całkowite  \\(  a  \\)  i  \\(  b  \\)  , że  \\(  p =
    a^2+b^2  \\)  .\
    Szkic dowodu: (1)→(2).Napierw pokazujemy, że w  \\(  Z\_p^\*  \\) 
    jest taki element  \\(  a  \\)  , że  \\(  rank(a)=4  \\)  ;
    pokazujemy, że  \\(  a^2=-1  \\)  ; z czego wnioskujemy, że  \\( 
    p\|(a^2+1)  \\)  . Przechodzimy teraz do pierścienia liczb Gaussa.
    Pokazujemy, że  \\(  p\|(a+i)(a-i)  \\)  oraz, że  \\( 
    \\neg(p\|(a+i))  \\)  oraz  \\(  \\neg(p\|(a-i))  \\)  . Z tego
    wnioskujemy, że  \\(  p  \\)  nie jest elementem pierwszym w  \\( 
    \\ZZ\[i\]  \\)  . Zatem nie jest elementem nierozkładalnym. Bierzemy
     \\(  u,v \\in \\ZZ\[i\]  \\)  które nie są jednostkami oraz takie,
    że  \\(  p=u\\cdot v  \\)  . Wtedy  \\(  p^2 = \|u\|^2\|v\|^2
     \\)  . Pokazujemy, że  \\(  p=\|u\|^2  \\)  . Co kończy dowód.

