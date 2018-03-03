---
layout: default
use_highlight: true
---

Kurza twarz!
---

Udało Ci się znajeźć stronę która jeszcze nie powstała. Pracujemy nad nią, a jako jej zamiennik prezentujemy algorytm GCD w ARM

```armasm
gcd    CMP r1, r2
SUBGT  SUB r1, r1, r2
SUBLT  SUB r2, r2, r1
BNE    gcd
```
