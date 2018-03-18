---
layout: acc_layout
toc: aaik
use_math: true
---

### Dzielniki normalne. RSA

1.  Tw. Jeśli  \\(  H  \\)  jest dzielnikiem normalnym grupy  \\(  G
     \\)  to na klasie warstw możemy okreslić działanie  \\( 
    (Hx)\\circ(Hy) = H(x\\cdot y)  \\). Struktura  \\(  (G/H,\\circ)
     \\)  jest grupą.
2.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to  \\( 
    ker(h)  \\)  jest dzielnikiem normalnym grupy  \\(  G  \\).
3.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to grupa
     \\(  img(f)  \\)  jest izomorficzna z grupą  \\(  G/ker(h)  \\).
4.  **Protokół RSA:** [opis i dowód
    poprawności](http://cs.pwr.edu.pl/cichon/MaterialyDydaktyczne/RSA.php)
5.  Tw. Dla dowolnej liczby naturalnej  \\(  n \\geq 1  \\)  mamy

{::options parse_block_html="true" /}
<div class="def-box"><p>
\\[  \\sum\_{d\|n} \\phi(d) = n\~.  \\] 
</p></div>
{::options parse_block_html="false" /}

    **Szkic dowodu:** 
	\\[  \\begin{gather\*} n = \|\\{\\frac{k}{n}:
    1\\leq k \\leq n\\}\| = \\ \|\\sum\_{d\|k}\\{\\frac{k}{d}: 1\\leq
    k \\leq d \\land nwd(k,d)=1\\}\| = \\
    \\sum\_{d\|k}\|\\{\\frac{k}{d}: 1\\leq k \\leq n \\land
    nwd(k,d)=1\\}\| = \\ \\sum\_{d\|k}\\phi(d) \\end{gather\*}  \\] 

