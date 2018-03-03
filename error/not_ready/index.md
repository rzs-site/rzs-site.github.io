---
layout: default
use_highlight: true
---

Kurza twarz!
---

Ta strona jeszcze nie powstała. Pracujemy nad nią, a jako zamiennik prezentujemy Bardzo Prosty™ algorytm GCD w ARM:

```nasm
gcd     CMP     r1, r2
        SUBGT   r1, r1, r2
        SUBLT   r2, r2, r1
        BNE     gcd
```
