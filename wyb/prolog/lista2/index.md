---
layout: acc_layout
toc: prolog
use_math: true
use_highlight: true

---

# Programowanie w Logice - Lista 2

## Funktory

Funktorów używamy do budowania złożonych termów. Umożliwają one przechowywanie większej ilości informacji.

Przykład praktyczny:
```prolog
matka(janek).           %matka janka
matka(matka(janek)).    %matka matki janka
matka(ojciec(janek)).   %matka ojca janka
```
<p></p>
---

## Listy

List używamy do dopiswania informacji. Uwaga: operacje na listach są kosztowne, zwłaszcza jeśli dotyczą ogona.
Zaleca się dokonywać operacji na głowie.

Przykład praktyczny:
```prolog
[1,2,3,4,5] = [H|T] %wtedy H = 1 a T wskazuje na reszte listy tj. [2,3,4,5]
[] %lista pusta
```
<p></p>
---

## Użyteczne predykaty

Lista predykatów które przydadzą się w rozwiązywaniu zadań z tej listy.

Przykład praktyczny:
```prolog
member(X, L). %jest prawdziwy gdy X należy do listy L. Umożliwa łatwo przejście wszystkich elementów z Listy
append(L1, L2, L3). %jest prawdziwy gdy L3 jest połączeniem L1 i L2. Umożliwia łatwe łączenie list.
select(X, L1, L2).  %jest prawdziwgy gdy L2 powstaje przez zabranie z L1 jednego elementu X.
```
<p></p>
---

## Zadania

### Zadanie 1*.

Zabieraj element z przodu i tyłu listy \\( L \\) tak długo aż stanie się ona pusta bądź długości 1.
Jeżeli jest ona pusta, to nie ma elementu środkowego.
Jeżeli jest ona długości 1, to znasz element środkowy.

---

### Zadanie 2*.

Zastanawiając się co to znaczy, iż element pojawia się raz na liście dochodzi do wniosków:

* Element pojawia się w głowie i nie pojawia się w ogonie.
* Element nie pojawia się w głowie (tj. jest od niej różny) i pojawia się raz w ogonie.

Podobnie mozna przeanalizować dwukrotność:

* Element pojawia się w głowie i pojawia się raz w ogonie.
* Element nie pojawia się w głowie i pojawia się dwa razy w ogonie.

---

### Zadanie 3*.

Tutaj najłatwiej stworzyć listę odwiedzonych już wierzchołów i sprawdzać możemy dojśc jeszcze do innego wierzchołka.
Możemy zdefiniować ściężkę od \\(A, B\\) gdy:
* \\(A = B \\)
* da się przejść od \\(A \\) do \\(B \\) i \\(A \neq B \\)

Sprawdzając czy da się przejść od \\(X \\) do \\(Y \\) musimy czy zachodzi jeden z warunków
* \\(X \\) i \\(Y \\) są połączone
* \\(X \\) jest połączone z \\(Z \\), \\(Z \\) jest różne od \\(Y \\) (od tego mamy pierwszy warunek) i nie odwiedziliśmy jeszcze \\(Z \\).
Wtedy dorzucamy \\(Z \\) do odwiedzonych i wywołujemy rekurencyjne sprawdzenie czy da się przejść od \\(Z \\) do \\(Y \\).

---

### Zadanie 4*.

Prawdopodobnie dobrym sposobem jest znalezienie wszystkich momentów w których osoba dostała jakiś przedmiot. Oznaczmy te momenty jako \\(t_1, t_2, ... t_n \\).
Warto pamiętać że \\(t_1 \\) może być równe \\(0\\).
Następnie dla każdego momentu \\(t_i\\) znajdzmy najwcześniejszy moment oddania \\(t'_1 \\). Wtedy osoba posiada przedmiot
w czasie pomiędzy \\(t_i\\) oraz \\(t'_1 \\). Jeśli dla ostatniego momentu otrzymania \\(t_n\\) nie ma większego  momentu oddania \\(t'_n \\) to osoba posiada przedmiot do końca. Należy wtedy ustawić jakiś górny limit czasu i wypisać rozwiązanie.

---

### Zadanie 5*.

Zespół ekspretów ciągle pracuje nad idealnym rozwiązaniem.

Prawdopodobnie trzeba będzie użyc

```prolog
consult(przemko).
```

###### * Wymienione wyżej rozwiązania NIE gwarnatują kompletu punktów.
