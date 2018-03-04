---
layout: acc_layout
toc: prolog
use_math: true
use_highlight: true

---

# Programowanie w Logice - Lista 2

## Optymalizacja

W prologu nierzadko predykaty wywoływane są rekurencyjnie. Oczywiście, ma to ogromny wpływ na wydajność gdyż rekurencja jest druga.
Tutaj z pomocą przychodzi nam kompilator prologa który jest w stanie zoptymalizować wyrażenie do iteracji jeżeli nasze wyrażenie jest rekursją ogonową.

Rekursja ogonowa to szczególny rodzaj rekursji. Jeżeli w rekurencyjnej funkcji \\( F(...) \\) ostatnim warunkiem jest samowywołanie \\(F(...)\\) to jest to rekursja ogonowa.

---

## Instrukcja warunkowa

Zapisując predykaty możemy korzystać z predukatu \\( -> \\) a działa on w następujący sposób:
\\( W -> T; E \\) gdzie \\(W \\) to warunek, \\(T \\) to warunek sprawdzany gdy \\(W \\) jest prawdą a \\(E \\) to warunek spradzany gdy \\(W \\) to fałsz.

---

## Zadania

### Zadanie 1*.

Należy zaimplementować standardowy wzór na wariancję, dla zapominalski ściągawka:
\\(\frac{1}{n} \sum_{i=0}^{n}(r - x_i)^2 \\) gdzie \\(x_i \\) to element zbioru, \\(r \\) średnia, \\(n \\) ilość elementów

---

### Zadanie 2*.

Problem opisany w tym zadaniu nazwany jest "Maximum subarray problem".
Warto przejrzeć [wikipedię](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm_(Algorithm_3:_Dynamic_Programming)) gdzie ten problem rozwiązany jest w formie iteracyjnej w pseudokodzie.
Można jednak bardzo prosto przekształcić ten pseudokod do rekurencji ogonowej w prologu.

---

### Zadanie 3*.

Proponowanym rozwiązaniem jest generowanie samodzielnie wszystkich permutacji i zliczanie ilości zamian dowolnego elementu \\(a_i \\) z \\(a_j \\). Jeżeli liczba zamian jest parzysta to nasza permutacja też jest parzystana. Bardzo prosto można ten kod przekształcić dla permutacji nieparzystych.

Alternatywą (niesprawdzoną jako rozwiązanie) jest wyznacznie znaku dla wygenerowanej permutacji.

---

###### * Wymienione wyżej rozwiązania NIE gwarnatują kompletu punktów.
