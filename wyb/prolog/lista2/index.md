---
layout: acc_layout
toc: prolog
use_math: true
use_highlight: true

---

# Programowanie w Logice - Lista 2

## Funktory

Funktorów używamy do budowania złożonych termów. Umożliwiają one przechowywanie większej ilości informacji.

Przykład praktyczny:
```prolog
matka(janek). %matka janka
matka(matka(janek)). %matka matki janka
matka(ojciec(janek)). %matka ojca janka
```
<p></p>
---

## Listy

List używamy do dopisywania informacji. Uwaga: operacje na listach są kosztowne, zwłaszcza jeśli dotyczą ogona.
Zaleca się dokonywać operacji na głowie.

Przykład praktyczny:
```prolog
[1,2,3,4,5] = [H|T] %wtedy H = 1 a T wskazuje na reszte listy tj. [2,3,4,5]
[] %lista pusta
```
<p></p>
---

## Użyteczne predykaty

Lista predykatów, które przydadzą się w rozwiązywaniu zadań z tej listy.

Przykład praktyczny:
```prolog
member(X, L). %jest prawdziwy, gdy X należy do listy L. Umożliwia łatwo przejście wszystkich elementów z Listy
append(L1, L2, L3). %jest prawdziwy, gdy L3 jest połączeniem L1 i L2. Umożliwia łatwe łączenie list.
select(X, L1, L2). %jest prawdziwgy, gdy L2 powstaje przez zabranie z L1 jednego elementu X.
```
<p></p>
---

## Uwagi (BARDZO WAŻNE!!!)

Wymienione poniżej uwagi zostały zdobyte w sposób empiryczny. Zaleca się ich stosowanie:

Kilkukrotne wypisanie tego samego rozwiązania NIE jest traktowane jako błąd, wręcz przeciwnie, jest to mile widziane.

Załóżmy, że tworzymy predykat, który ma przyjąć dwa elementy listę oraz wynik. Kiedy lista ma długość 1 wtedy wynikiem powinien być jedyny element tej listy. W inny przypadkach zwracamy fałsz. Można go zdefiniować na kilka sposobów, przy czym jeden jest lepszy niż inne.

```prolog
predykat1([H|T], X) :- length([H|T], 1), X = H. %działając ale nie idealna metoda.
predykat1v2([L], L) %idealna metoda
```

Modelowy przykład formatowania kodu:
```prolog
mergeWithFindMax([], N, Result, Accumulated) :-
findMax(X, Accumulated),
X2 is X, %kolejne warunki w nowych liniach.
( X2 < N %warto zwrócić uwagę na na formatowanie ifa
-> Result is X2 + 1
; Result = []).
```

<p></p>
---

## Zadania

### Zadanie 1*.

Zabieraj element z przodu i tyłu listy \\( L \\) tak długo aż stanie się ona pusta bądź długości 1.
Jeżeli jest ona pusta, to nie ma elementu środkowego.
Jeżeli jest ona długości 1, to znasz element środkowy.

Warto zaznaczyć, iż usuwanie z przodu i tyłu powinno się odbywać za pomocą jednego (naszego) predykatu.

---

### Zadanie 2*.

Bardzo dobrym pomysłem jest rozwiązaniem jest skorzystanie z predykatów select oraz member.
Należy rozwiązać to zadanie nie używając rekurencji.
(Inne rozwiązania także są oceniane na maksimum, lecz mogą nie zadowolić prowadzącego)

---

### Zadanie 3*.

###### Prawdopodobnie istnieje prostszy sposób rozwiązania tego zadania.

Tutaj najłatwiej stworzyć listę odwiedzonych już wierzchołków i sprawdzać możemy dojść jeszcze do innego wierzchołka.
Możemy zdefiniować ścieżkę od \\(A, B\\) gdy:
da się przejść od \\(A \\) do \\(B \\)

Sprawdzając czy da się przejść od \\(X \\) do \\(Y \\) musimy czy zachodzi jeden z warunków:
* \\(X \\) i \\(Y \\) są równe (wszakże można przejść z Warszawy do Warszawy),
* \\(X \\) i \\(Y \\) są połączone krawędzią,
* \\(X \\) jest połączone z \\(Z \\), \\(Z \\) jest różne od \\(Y \\) (od tego mamy poprzednie warunki) i nie odwiedziliśmy jeszcze \\(Z \\).
Wtedy dorzucamy \\(Z \\) do odwiedzonych i wywołujemy rekurencyjne sprawdzenie, czy da się przejść od \\(Z \\) do \\(Y \\).

---

### Zadanie 4*.

Prawdopodobnie dobrym sposobem jest znalezienie wszystkich momentów, w których osoba dostała jakiś przedmiot. Oznaczmy te momenty jako \\(t_1, t_2, ... t_n \\).
Warto pamiętać, że \\(t_1 \\) może być równe \\(0\\).
Następnie dla każdego momentu \\(t_i\\) znajdźmy najwcześniejszy moment oddania \\(t'_1 \\). Wtedy osoba posiada przedmiot
w czasie pomiędzy \\(t_i\\) oraz \\(t'_1 \\). Jeśli dla ostatniego momentu otrzymania \\(t_n\\) nie ma większego momentu oddania \\(t'_n \\) to osoba posiada przedmiot do końca. Należy wtedy ustawić jakiś górny limit czasu i wypisać rozwiązanie.

Warto pamiętać o usunięciu magicznych zmiennych z programu. Tzn. nie ustalać górnego limitu czasu tylko go wyliczyć z predykatu daje jako najpóźniejszy czas przekazania czegokolwiek plus parę chwil.

---

### Zadanie 5*.

Jednym z modelowych rozwiązań jest zastosowanie pewnego tricku:

Tworzymy listę:
```
1 _ 2 _ 3 _ ... n
//w _ wstawiamy wszystkie permutacje zbioru n-elementowego.
//otrzymany zbiór z definicji zawiera parzyste przerwy między tymi samymi elementami.
//uważny czytelnik zauważy, że nie uzyskamy wtedy dla N = 3 zbioru:
1 2 3 1 2 3.
//Uzyskamy jednak:
1 3 2 1 3 2.
//jeżeli przemianujemy 3 na 2 (wystarczy o tym wspomnieć) to otrzymamy poszukiwaną permutację.
```

Według naszych informacji jest to najlepsze rozwiązanie, akceptowane przez prowadzącego.

###### * Wymienione wyżej rozwiązania PRAWDOPODOBNIE zyskają aprobatę sprawdzającego*.
###### ** Alternatywne rozwiązania też są punktowane wysoko.
