---
layout: acc_layout
toc: prolog
use_math: true
use_highlight: true
---

# Programowanie w Logice - Lista 4

## Zadania

### Zadanie 1*.

Niech \\(S \\) oznacza aktualne nasze wyrażenie (inicjowane przez pierwszy element podanej listy) a \\(x \\) oznacza kolejny element naszej listy.
Do \\(S \\) należy dorzucić \\(x \\) stosując wszystkie operacje matematyczne.

#### Uwaga!

Należy pamiętać o tym, iż mnożenie oraz dzielenie w momencie waluacji za pomocą predykatu \\( is \\) ma pierszeństwo. Należy dodać specjalne przypadki które rozwiążą tę sytuację.

Przykładowe dane testowe:

```prolog
?- wyrażenie([3,2,1],9,X).
X = 3*(2+1)

```
<p></p>

---

### Zadanie 2*.

Należy stworzyć term opisujący domek (tj. numer, kolor, narodowość lokatora...).
Następnie zapisać wszystkie wskazówki zagadki Einsteina przy pomocy termów opisujących domek.

---

### Zadanie 3*.

## Wskazówka:

Należy ponumerować krawędzie. (Nie polecamy numerować wierzchołków - nie da się ich zabierać).
Następnie zauważyć, iż każdy kwadrat jest opisany przez unikalną listę.

## Uwaga:

Prowadzący w przykładach na liście nie pokazał wszystkich rozwiązań. Przykładowo:

```prolog
?- zapalki(N, (duze(1), male(1))).
+--+--+--+
|  |     |  
+  +--+--+
|  |  |  |  
+--+--+  +
|     |  |  
+--+--+--+
N = 4

%wyniki prowadzącego zaczynają się od N = 8
```
<p></p>
---

###### * Wymienione wyżej rozwiązania NIE gwarnatują kompletu punktów**.
###### ** Alternatywne rozwiązania też są punktowane wysoko.
