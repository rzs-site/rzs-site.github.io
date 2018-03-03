---
layout: default
use_highlight: true
---

Kurza twarz!
---

Udało Ci się znajeźć stronę która jeszcze nie powstała. Pracujemy nad nią, a jako jej zamiennik prezentujemy algorytm GCD w ARM

```nasm
gcd     CMP r1, r2
        SUBGT  r1, r1, r2
        SUBLT  r2, r2, r1
        BNE    gcd
```
