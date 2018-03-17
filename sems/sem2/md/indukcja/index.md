---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

## Zasada indukcji matematycznej

### Opis

Zasada indukcji matematycznej to prosty sposób dowodzenia twierdzeń dla liczb naturalnych.
Jeżeli chcemy udowodnić własność \\( F(n) \\) to należy znaleźć \\( n_0 \\) takie, że, \\( F(n_0) \\) jest prawdziwe.
Najczęściej \\(n_0 = 0 \lor n_0 = 1 \\) Następnie pokazujemy, iż \\( \forall (n > n_0)(F(n) \implies F(n + 1)) \\).
Dokonujemy tego poprzez rozważanie \\(F(n + 1) \\) i doprowadzenie do formy nam znanej tj. \\(F(n) \\)

### Przykładowe użycie
Pokażemy, że \\( 2 | n^2 - n \\).

#### Pierwszy krok
Sprawdźmy dla \\( n = 0 \\).
Oczywiście \\( 2 | 0 \\).

#### Drugi krok
Załóżmy, że \\( 2 | n^2 - n \\).

#### Trzeci krok
Rozważmy \\( n + 1\\).

Mamy wtedy \\(2 | (n+1)^2 - (n + 1)\\)
\\(2 | (n^2 + 2n + 1) - (n + 1)\\)
\\(2 | (n^2 + n)\\)
\\(2 | (n^2 - n + 2n)\\)
Pierwszą część mamy z założenia. Jeśli do parzystej liczby dodamy parzyste \\(2n \\) to wynik nadal będzie parzysty.

Dowód zakończony.

### Przykłady
* Nierówność Bernoulliego,
* \\( \forall(n > 4) \ \quad 2^n > n^2 \\)
* \\( \sum_{i = 1}^{n} i = \frac{n(n+1)}{2} \\)
* Wzór włączeń i wyłączeń
