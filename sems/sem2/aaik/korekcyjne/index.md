---
layout: acc_layout
toc: aaik
use_math: true
---

Algebra z Geometrią Analityczną
---
\\( \\def\\RR{\\mathbb{R}} \\def\\QQ{\\mathbb{Q}} \\def\\ZZ{\\mathbb{Z}}
\\def\\CC{\\mathbb{C}} \\def\\NN{\\mathbb{N}}
\\def\\IFF{\\leftrightarrow}
\\newcommand{\\span}\[1\]{\\mathrm{span}(\#1)}
\\newcommand{\\IS}\[2\]{\\langle\\,\#1,\#2\\rangle}
\\newcommand{\\GG}\[1\]{\\langle\#1\\rangle}
\\newcommand{\\sgn}\[1\]{\\mathrm{sgn}(\#1)}
\\newcommand{\\rank}\[1\]{\\mathrm{rank}(\#1)}
\\newcommand{\\nwd}\[2\]{\\mathrm{nwd}(\#1,\#2)} \\)


### 18.05.2017: Kody korekcyjne

1.  Konstrukcja  \\(  (7,16,3)\_2  \\)  kodu binarnego z płaszczyzny
    rzutowej  \\(  PG(2,2)  \\)  :
    1.  pierwsza częśc kodu: macierz koincydencji  \\(  PG(2,2)  \\) 
    2.  druga część kodu: dopełenienia elementów pierwszej części
    3.  końcówka: dodajemy dwa ciągi:  \\(  0000000  \\)  oraz  \\( 
        1111111  \\) 

    Fakt:  \\(  (7,16,3)\_2  \\)  kod jest kodem doskonałym.
2.  Ograniczenie  \\[  B\_n(0,\\lambda n) \\leq 2^{n H(\\lambda)}
     \\]  dla  \\(  \\lambda \\in (0,\\frac12)  \\)  , gdzie  \\[ 
    H(x) = x \\log\_2(\\frac1x) + (1-x)\\log\_2(\\frac{1}{1-x})  \\] 
    (funkcja entropii binarnej).
3.  Wzór Stirlinga:  \\(  n! = \\sqrt{2 \\pi n}
    \\left(\\frac{n}{e}\\right)^n(1+O(\\frac1n))  \\) 
4.  Kod ISBN:  \\(  \\mathcal{C} = \\{x\\in (\\ZZ\_{11})^{10}:
    \\sum\_{i=1}^{10} i\\cdot x\_i = 0 (\\mod 11)\\}  \\) 
5.  Fakt: Funkcja  \\(  f:(\\ZZ\_{11})^{10} \\to \\ZZ\_{11}  \\) 
    określona wzorem  \\(  f(x) = \\sum\_{i=1}^{10}i x\_i  \\)  jest
    odwzorowaniem liniowym oraz  \\(  \\mathcal{C} = ker(f)  \\)  .
6.  Obserwacja:  \\(  \\mathcal{C}  \\)  jest podprzestrzenią liniową
    przestrzeni wektorowej  \\(  (\\ZZ\_{11})^{10}  \\)  wymiaru 9

