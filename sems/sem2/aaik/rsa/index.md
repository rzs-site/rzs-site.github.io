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


### 16.03.2017: Dzielniki normalne. RSA

1.  Tw. Jeśli  \\(  H  \\)  jest dzielnikiem normalnym grupy  \\(  G
     \\)  to na klasie warstw możemy okreslić działanie  \\( 
    (Hx)\\circ(Hy) = H(x\\cdot y)  \\)  . Struktura  \\(  (G/H,\\circ)
     \\)  jest grupą.
2.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to  \\( 
    ker(h)  \\)  jest dzielnikiem normalnym grupy  \\(  G  \\)  .
3.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to grupa
     \\(  img(f)  \\)  jest izomorficzna z grupą  \\(  G/ker(h)  \\)  .
4.  **Protokół RSA:** [opis i dowód
    poprawności](http://cs.pwr.edu.pl/cichon/MaterialyDydaktyczne/RSA.php)
5.  Tw. Dla dowolnej liczby naturalnej  \\(  n \\geq 1  \\)  mamy
     {.tablica}
     \\[  \\sum\_{d\|n} \\phi(d) = n\~.  \\] 
    

    **Szkic dowodu:**  \\[  \\begin{gather\*} n = \|\\{\\frac{k}{n}:
    1\\leq k \\leq n\\}\| = \\ \|\\sum\_{d\|k}\\{\\frac{k}{d}: 1\\leq
    k \\leq d \\land nwd(k,d)=1\\}\| = \\
    \\sum\_{d\|k}\|\\{\\frac{k}{d}: 1\\leq k \\leq n \\land
    nwd(k,d)=1\\}\| = \\ \\sum\_{d\|k}\\phi(d) \\end{gather\*}  \\] 

