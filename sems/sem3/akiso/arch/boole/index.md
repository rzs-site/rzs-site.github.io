---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

### Algebra Boole'a

{::options parse_block_html="true" /}
<div class="math-box"><p>"Tyle jest w każdym poznaniu nauki, ile jest w nim matematyki." - Immanuel Kant</p></div>
{::options parse_block_html="false" /}

#### Definicja algebry Boole'a
Algebra Boole'a jest algebrą \\( (S,+(x,y),*(x,y),'(x),0_S,1_S) \\), w którym S jest zbiorem, \\( 0_S \\) i \\( 1_S \\) są stałymi na tym zbiorze, a działania na stałych zdefiniowane są następującą tabelką:

\begin{table}[H]
\centering
\caption{Działania w algebrze bóla}
\label{my-label}
\begin{tabular}{|c|c|c|c|c|}
\hline
x & y & +(x,y) & *(x,y) & '(x) \\ \hline
0 & 0 & 0 & 0 & 1 \\ \hline
0 & 1 & 1 & 0 & 1 \\ \hline
1 & 0 & 1 & 0 & 0 \\ \hline
1 & 1 & 1 & 1 & 0 \\ \hline
\end{tabular}
\end{table}

W dalszej części skryptu będziemy używać nieformalnej i ogólnie przyjętej notacji \\( +(x,y)\equiv x+y \\), \\( *(x,y)\equiv xy \\), \\( '(x)\equiv x' \\).\\
Ponadto, każda algebra Boole'a musi spełniać następujące aksjomaty:

* \\( \left(\forall x\right)\left(x+0=x\right) \\)
* \\( \left(\forall x\right)\left(x*1=x\right) \\)
* \\( \left(\forall x,y\right)\left(x+y=y+x \wedge xy=yx\right) \\)
* \\( \left(\forall x,y,z\right)\left(x+\left(y+z\right)=\left(x+y\right)+z\right) \\)
* \\( \left(\forall x,y,z\right)\left(x\left(yz\right)=\left(xy\right)z\right) \\)
* \\( \left(\forall x,y,z\right)\left(x+\left(yz\right)=\left(x+y\right)\left(x+z\right)\right) \\)
* \\( \left(\forall x,y,z\right)\left(x\left(y+z\right)=\left(xy\right)+\left(xz\right)\right) \\)
* \\( \left(\forall x\right)\left(xx'=0 \wedge x+x'=1 \right) \\)

##### Przykładowe Algebry Boole'a
Przykładowymi algebrami Boole'a są:

* \\( \left( \{false=0, true=1\}, AND, OR, NOT, 0, 1\right) \\)
* \\( \left( \mathbb{P}(A), \cup, \cap, \emptyset, A\right) \\) (gdzie A jest dowolnym zbiorem, a \\( \mathbb{P}(A) \\) to powerset)

Obydwa przykłady są bardzo często używane w informatyce. Powinno się pokazać, że to są rzeczywiście algebry Boole'a (spełniają aksjomaty), dowód pozostawiam czytelnikowi.

#### Funkcja boolowska

Funkcją boolowską jest każda funkcja \\( f:\{0,1\}^n\rightarrow\{0,1\} \\). Każde zdanie logiczne może definiować inną funkcję boolowską. Na przykład \\( f(x,y)=x\leftrightarrow y \\) jest funkcją boolowską.\\
Funkcje boolowskie można opisać na kilka różnych sposobów. Jednym z nich jest tabelka prawdy. Na przykład:

\begin{table}[H]
\centering
\caption{Tabelka prawdy}
\label{my-label}
\begin{tabular}{|c|c|c|c|}
\hline
x & y & z & f(x,y,z) \\ \hline
0 & 0 & 0 & 1 \\ \hline
0 & 0 & 1 & 0 \\ \hline
0 & 1 & 0 & 0 \\ \hline
0 & 1 & 1 & 1 \\ \hline
1 & 0 & 0 & 1 \\ \hline
1 & 0 & 1 & 0 \\ \hline
1 & 1 & 0 & 0 \\ \hline
1 & 1 & 1 & 0 \\ \hline
\end{tabular}
\end{table}

Tą samą funkcję można również zapisać tak jak wcześniej, w postaci zdania logicznego. Robimy to na dwa sposoby. Pierwszy z nich polega na tym, że tam gdzie w wyniku funkcji występuje 1, (np dla f(0,0,0)), ,,koduje się'' zmienne które powodują tę wartość za pomocą koniunkcji tak, aby otrzymać 1. Następnie wszystkie te ,,kody'' łączy się alternatywą. Wynik jest następujący:
\\[ f(x,y,z)=(\neg x \wedge \neg y \wedge \neg z) \vee ( \neg x \wedge y \wedge z ) \vee ( x \wedge \neg y \wedge \neg z ) \\]
Ponieważ operujemy w algebrze Boole'a, dla uproszczenia zapisu można stosować zamiast znaków znanych nam z logiki, znaki +,* oraz '. Wtedy ta sama funkcja będzie wyglądała następująco:
\\[ f(x,y,z)=x'y'z'+x'yz+xy'z' \\]
Ten zapis znany jest również pod nazwą SOP (ang. Sum Of Products). Innym znanym zapisem funkcji boolowskich jest tzw. POS (ang. Product of Sums). Generuje się go w taki sposób, że ,,koduje się'' tym razem sumy tych zmiennych, które dają 0. Powstałe kody łączy się za pomocą produktu. Dla naszej funkcji będzie miało to postać:
\\[ f(x,y,z)=(x+y+z')(x+y'+z)(x'+y+z')(x'+y'+z)(x'+y'+z') \\]
Wszystkie przedstawione powyżej zapisy są równoważne. Jednakże, funkcje boolowskie często są stosowane do stworzenia realnych bramek logicznych. Aby zaoszczędzić pieniądze, należy sprawić, żeby te funkcje zajmowały jak najmniej bramek. Przykładowo, funkcja \\( f(x,y)=xy+x'y+x \\) jest równoważna funkcji \\( f(x,y)=y+x \\). Dlatego potrzeba metody, która pozwoli nam taką funkcję zminimalizować (zoptymalizować). 


#### Metoda Karnaugh (ang. Karnaugh map}

Siatka Karnaugh jest równoważnym przedstawieniem funkcji boolowskiej. Zawiera wszystkie możliwe kombinacje wejść i każdej przyporządkowuje prawdę albo fałsz na wyjściu. Weźmy pewną funkcję \\( \texttt{F(A,B,C)} \\). Ma ona trzy wejścia. Ze~wzoru \\( 2^n \\), siatka musi opisywać wartości ośmiu wariantów: \\ \\

![Siatka Karnaugh](sems/sem3/akiso/arch/boole/karnaugh01.svg)


W tym przypadku prawdę na wyjściu otrzymamy dla dwóch kombinacji wejściowych.
Znajdźmy jedną z~nich, przykładowo dla ,,jedynki'' z dolnego rzędu.
Odczytujemy zmienne z oznaczeń wierszy i kolumn.
Wiersze definiują tutaj tylko wartość wejścia \\( \texttt{A} \\), więc trywialne. Zapisujemy \\( \texttt{A = 1} \\).

Nieco bardziej skomplikowane w tym przypadku są kolumny, wyznaczające jednocześnie wartości dwóch wejść. Hipotetycznie każda zmienna powinna być zapisana w osobnym wymiarze, jednak rozszerzyłoby to problem do zagadnienia 3D lub nawet 4D. Zamiast tego przy funkcjach trzech lub czterech zmiennych następuje łączenie wejść w pary, co znacząco upraszcza rysunki. Dlatego zapisujemy \\( \\( \texttt{BC = 01} \\) \\), a następnie rozbijamy na \\( \texttt{B = 0} \\) oraz \\( \texttt{C = 1} \\). Logiczną prawdę otrzymamy (nie wyłącznie!) dla \\( \texttt{A = 1} \\), \\( \texttt{B = 0} \\), \\( \texttt{C = 1} \\). \\

A co w przypadku odwrotnym, gdyby szukać wartości wyjściowej dla podanych wejść?
Weźmy nową siatkę, tym razem bardziej losowy układ i cztery zmienne. \\ \\
\begin{karnaugh-map}[4][4][1][CD][AB]
\manualterms{1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0}
\end{karnaugh-map} \\
Chcemy znaleźć wartość dla \\( \texttt{A = 0, B = 1, C = 1, D = 0} \\).
W oznaczeniach wierszy jest \\( \texttt{AB} \\), natomiast kolumny wyznaczają wartości wejść \\( \texttt{CD} \\).
Szukamy więc \\( \texttt{AB = 01} \\) oraz \\( \texttt{CD = 10} \\). \\ \\
\begin{karnaugh-map}*[4][4][1][CD][AB]
\manualterms{1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0}
\implicant{6}{6}
\end{karnaugh-map} \\ 
Dla podanego układu wejść nasza funkcja przyjmie wartość \\( \texttt{0} \\), logiczny fałsz. \\

Jak widać, czytanie siatek Karnaugh jest bardzo proste. Większość zadań z tej kategorii dotyczy jednak znacznie trudniejszego zagadnienia, czyli samodzielnego rysowania siatki, wypełniania, a następnie minimalizacji. Dobra wiadomość: ogólny algorytm jest wspólny dla wszystkich odmian zadania. Różnica dotyczy jedynie sposobu wypełniania, ponieważ funkcja wejściowa może być przedstawiona na wiele równoważnych sposobów. Natomiast na wyjściu zawsze otrzymamy identyczny wynik, ale w zależności od treści zadania należy go odpowiednio zinterpretować.

##### Schematy siatek
Zacznijmy od podstaw. Tabelka Karnaugh ma boki będące potęgami liczby dwa, a ilość pól wynosi \\( 2^n \\), gdzie jako \\( n \\) oznaczamy ilość zmiennych. Wiersze i kolumny (kolejność umowna) muszą zostać opisane kodem Gray'a i nazwane zmiennymi. Dla przypomnienia, kolejne wyrazy w tym kodzie różnią się dokładnie jednym bitem. Na potrzeby minimalizacji wykorzystamy kod trywialny (\\( \texttt{0,1} \\)) oraz kod dwubitowy (\\( \texttt{00, 01, 11, 10} \\)). Natomiast zmienne dzielimy między ,,pion'' i ,,poziom''. Kod jednobitowy musi być powiązany z jedną zmienną, kod dwubitowy z dwiema zmiennymi. Doskonale widać to na poniższych tabelkach modelowych: \\ \\
\begin{karnaugh-map}[2][2][1][\\( B \\)][\\( A \\)]
\end{karnaugh-map} 
\begin{karnaugh-map}[4][2][1][\\( BC \\)][\\( A \\)]
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\end{karnaugh-map}

##### Wypełnianie siatki
W zadaniach można najczęściej natrafić na jeden z czterech podstawowych wariantów podania danych wejściowych - funkcja, opis, SOP, POS. Różnice między nimi dotyczą wyłącznie etapu wypełniania, później postępowanie znów będzie identyczne. Dla udowodnienia równoważności, wszystkie cztery przykłady zostały zrealizowane dla identycznej formuły. 

* Funkcja boolowska \\
W pierwszej kolejności mnożymy wszystkie nawiasy i usuwamy składniki trywialne. Przykład po uporządkowaniu: \\
\\( \texttt{F(A,B,C,D) = A'B + A (BC + C') + DD' = A'B + AC' + ABC } \\) \\
Otrzymaliśmy tzw. sumę iloczynów (SOP). Z definicji logicznej alternatywy, jeśli którykolwiek iloczyn będzie miał wartość \\( \texttt{1} \\), to cała funkcja przyjmie \\( \texttt{1} \\) na wyjściu. Wystarczy więc osobno zinterpretować wszystkie iloczyny. Przykładowo, \\( \texttt{A'B} \\) ma wartość \\( \texttt{1} \\) wtedy i tylko wtedy, gdy \\( \texttt{A = 0} \\) oraz \\( \texttt{B = 1} \\), a pozostałe zmienne mogą być dowolne. Zgodnie z instrukcją podaną we wprowadzeniu, znajdźmy wszystkie komórki spełniające kryteria. Obie zmienne są na legendzie ,,pionowej'', więc wybieramy po prostu cały wiersz \\( \texttt{01} \\). \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\implicant{4}{6}
\end{karnaugh-map} \\
Następny składnik to \\( \texttt{AC'} \\). Znajdujemy więc dwa wiersze z \\( \texttt{A = 1} \\) oraz dwie kolumny, gdzie \\( \texttt{C = 0} \\), a następnie zaznaczamy część wspólną. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\implicant{4}{6}
\implicant{12}{9}
\end{karnaugh-map} \\
Ostatni iloczyn to \\( \texttt{ABC} \\). Wybieramy jeden wiersz i dwie kolumny, częścią wspólną są dwie komórki. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\implicant{4}{6}
\implicant{12}{9}
\implicant{15}{14}
\end{karnaugh-map} \\
W zaznaczone miejsca wstawiamy jedynki. Tabelkę bez zakreśleń przepisujemy, pozostałe miejsca uzupełniamy zerami. Z gotowym wynikiem przechodzimy do następnego kroku. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{,,,,1,1,1,1,1,1,,,1,1,1,1}
\implicant{4}{6}
\implicant{12}{9}
\implicant{15}{14}
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map} 

* notacja \\( \Sigma \\) (skrócony zapis SOP) \\
Pomimo pozornego skomplikowania, notacja skrócona \\( \Sigma \\) jest bardzo wygodna. Wykorzystuje ona fakt, że wiersze i kolumny są opisane kodem Gray'a, więc każdemu polu można przypisać unikatową liczbę binarną, łącząc oznaczenia wiersza i kolumny. Na początku najlepiej wykonywać trzy tabelki - pomocniczą binarną, pomocniczą dziesiętną i główną. Później można wykonywać zamianę w locie i zapisywać tylko wartości dziesiętne. Znając na pamięć kolejność komórek, nawet to staje się oczywiście niepotrzebne. W przykładach wykorzystamy natomiast metodę najdłuższą, ale najpewniejszą. Pierwsza z poniższych tabelek pomocniczych to złączone wartości wierszy i kolumn (w tej kolejności, ponieważ \\( \texttt{AB} \\) jest przed \\( \texttt{CD} \\)), a druga przedstawia zamianę wartości na system dziesiętny. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{\\( _{0000} \\),\\( _{0001} \\),\\( _{0010} \\),\\( _{0011} \\),
\\( _{0100} \\),\\( _{0101} \\),\\( _{0110} \\),\\( _{0111} \\),
\\( _{1000} \\),\\( _{1001} \\),\\( _{1010} \\),\\( _{1011} \\),
\\( _{1100} \\),\\( _{1101} \\),\\( _{1110} \\),\\( _{1111} \\)}
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{\\( _{0} \\),\\( _{1} \\),\\( _{2} \\),\\( _{3} \\),
\\( _{4} \\),\\( _{5} \\),\\( _{6} \\),\\( _{7} \\),
\\( _{8} \\),\\( _{9} \\),\\( _{10} \\),\\( _{11} \\),
\\( _{12} \\),\\( _{13} \\),\\( _{14} \\),\\( _{15} \\)}
\end{karnaugh-map}\\
Nasz przykład to \\( F (A,B,C,D) = \Sigma m (4,5,6,7,8,9,12,13,14,15) \\). Numery zakreślamy w pomocniczej tabelce dziesiętnej. Do głównej w analogiczne miejsca wpisujemy jedynki, uzupełniamy zerami.\\ \\
\begin{karnaugh-map}*[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{\\( _{0} \\),\\( _{1} \\),\\( _{2} \\),\\( _{3} \\),
\\( _{4} \\),\\( _{5} \\),\\( _{6} \\),\\( _{7} \\),
\\( _{8} \\),\\( _{9} \\),\\( _{10} \\),\\( _{11} \\),
\\( _{12} \\),\\( _{13} \\),\\( _{14} \\),\\( _{15} \\)}
\implicant{4}{4}
\implicant{5}{5}
\implicant{6}{6}
\implicant{7}{7}
\implicant{8}{8}
\implicant{9}{9}
\implicant{12}{12}
\implicant{13}{13}
\implicant{14}{14}
\implicant{15}{15}
\end{karnaugh-map}
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map}

* Notacja \\( \prod \\) (skrócony zapis POS) \\
Wykorzystujemy identyczne tabelki pomocnicze jak dla notacji \\( \Sigma \\), bardzo podobny jest również algorytm. Zaznaczamy w dziesiętnej tabelce podane numery. Jedyna różnica polega na tym, że w zaznaczone miejsca wstawiamy zera, a uzupełniamy jedynkami, czyli odwrotnie jak wcześniej. Teraz przykładem będzie funkcja \\( F (A,B,C,D) = M \prod (0,1,2,3,10,11) \\). Zaznaczmy wszystkie sześć pól: \\ \\
\begin{karnaugh-map}*[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{\\( _{0} \\),\\( _{1} \\),\\( _{2} \\),\\( _{3} \\),
\\( _{4} \\),\\( _{5} \\),\\( _{6} \\),\\( _{7} \\),
\\( _{8} \\),\\( _{9} \\),\\( _{10} \\),\\( _{11} \\),
\\( _{12} \\),\\( _{13} \\),\\( _{14} \\),\\( _{15} \\)}
\implicant{0}{0}
\implicant{1}{1}
\implicant{2}{2}
\implicant{3}{3}
\implicant{10}{10}
\implicant{11}{11}
\end{karnaugh-map}
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map}

* Polecenie opisowe \\
Może wydawać się trudne, jednak przy małej ilości zmiennych (do 5) wystarczające jest rozważenie przypadków w tradycyjnej tabelce.
\begin{zadanie}
Funkcja zwracająca prawdę dla czterobitowych liczb większych od 3, których suma cyfr w zapisie dziesiętnym wynosi co najmniej 3.
\end{zadanie}

Zapiszmy wszystko, co może się przydać: cztery zmienne, wartość binarna, wartość dziesiętna, warunek 1 (oznaczony jako \\( x \\)), warunek 2 (oznaczony jako \\( y \\)) oraz końcową wartość, czyli koniunkcję warunków. \\

%\begin{table}[]
%\centering
%\caption{Przykładowa tabela wartości do zadania opisowego z minimalizacji}
%\label{my-label}
\begin{tabular}{|c|c|c|c|c|c|c|c|c|}
\hline
A & B & C & D &
(BIN) & (DEC) & x & y
& x \\( \wedge \\) y \\ \hline
0 & 0 & 0 & 0 & 0000 & 0 & 0 & 0 & 0 \\ \hline
0 & 0 & 0 & 1 & 0001 & 1 & 0 & 0 & 0 \\ \hline
0 & 0 & 1 & 0 & 0010 & 2 & 0 & 0 & 0 \\ \hline
0 & 0 & 1 & 1 & 0011 & 3 & 0 & 1 & 0 \\ \hline
0 & 1 & 0 & 0 & 0100 & 4 & 1 & 1 & 1 \\ \hline
0 & 1 & 0 & 1 & 0101 & 5 & 1 & 1 & 1 \\ \hline
0 & 1 & 1 & 0 & 0110 & 6 & 1 & 1 & 1 \\ \hline
0 & 1 & 1 & 1 & 0111 & 7 & 1 & 1 & 1 \\ \hline
1 & 0 & 0 & 0 & 1000 & 8 & 1 & 1 & 1 \\ \hline
1 & 0 & 0 & 1 & 1001 & 9 & 1 & 1 & 1 \\ \hline
1 & 0 & 1 & 0 & 1010 & 10 & 1 & 0 & 0 \\ \hline
1 & 0 & 1 & 1 & 1011 & 11 & 1 & 0 & 0 \\ \hline
1 & 1 & 0 & 0 & 1100 & 12 & 1 & 1 & 1 \\ \hline
1 & 1 & 0 & 1 & 1101 & 13 & 1 & 1 & 1 \\ \hline
1 & 1 & 1 & 0 & 1110 & 14 & 1 & 1 & 1 \\ \hline
1 & 1 & 1 & 1 & 1111 & 15 & 1 & 1 & 1 \\ \hline
\end{tabular}
%\end{table}

Otrzymane wartości należy przepisać do siatki Karnaugh. Możemy to zrobić bezpośrednio z wartości \\( A, B, C, D \\), natomiast w celu uniknięcia pomyłki zalecam zakreślanie jedynek w tabelce pomocniczej. \\ \\
\begin{karnaugh-map}*[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{\\( _{0000} \\),\\( _{0001} \\),\\( _{0010} \\),\\( _{0011} \\),
\\( _{0100} \\),\\( _{0101} \\),\\( _{0110} \\),\\( _{0111} \\),
\\( _{1000} \\),\\( _{1001} \\),\\( _{1010} \\),\\( _{1011} \\),
\\( _{1100} \\),\\( _{1101} \\),\\( _{1110} \\),\\( _{1111} \\)}
\implicant{4}{4}
\implicant{5}{5}
\implicant{6}{6}
\implicant{7}{7}
\implicant{8}{8}
\implicant{9}{9}
\implicant{12}{12}
\implicant{13}{13}
\implicant{14}{14}
\implicant{15}{15}
\end{karnaugh-map}
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map} 
 


##### Minimalizacja 
Przykłady w poprzednich zadaniach (funkcja, \\( \Sigma \\), \\( \prod \\), opis) były równoważne, dzięki czemu algorytm minimalizacji jest wspólny dla wszystkich czterech podpunktów poprzedniego kroku. Dla przypomnienia, taką tabelkę wyznaczyliśmy z danych wejściowych:\\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map} \\
Na wyjściu możemy otrzymać jedną z dwóch podstawowych postaci, SOP lub POS. Jeśli jest zaznaczone w poleceniu, wybieramy odpowiednią (lub obie). Jeśli brak informacji, domyślnie liczymy SOP.

* Minimalny SOP, suma iloczynów, np. \\( \texttt{XY + Z} \\) \\
W celu wyznaczenia POS, zaznaczamy możliwie największe grupy jedynek o bokach \\( 2^n \\).
Dla funkcji czterech zmiennych dozwolone wartości to 1, 2 i 4.
Zachodzenie grup na siebie jest wskazane, ponieważ im większa grupa, tym mniej symboli potrzeba do jej zapisu.
W tym przypadku ,,zielony'' prostokąt mógłby składać się tylko z dolnej części, ale każde rozszerzenie jest korzystne.
Warto pamiętać o zasadzie, która pozwoli uniknąć błędów:
niezależnie od wielkości siatki, każda kolejna zmienna w iloczynie powoduje zmniejszenie pola o połowę.
Jedna opisuje obszar równy połowie pola, dwie to już \\( 1/4 \\), przy trzech zostaje \\( 1/8 \\), i tak dalej, a użycie wszystkich możliwych wskazuje na konkretne pole. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\implicant{4}{14}
\implicant{12}{9}
\end{karnaugh-map} \\
Tworzenie funkcji przebiega odwrotnie do wypełniania tabelki.
Dla każdej grupy należy wypisać, jakie zmienne ją jednoznacznie definiują.
W polu ,,czerwonym'' \\( \texttt{A, C, D} \\) nie mają jednoznacznej wartości, więc zostają pominięte.
Natomiast \\( \texttt{B} \\) na zakreślonym obszarze jest zawsze równe 1, a poza nim zawsze równe 0.
Dlatego składnik odpowiadający największej grupie będzie równy po prostu \\( \texttt{B} \\).
Podobnie dla ,,zielonego'' kwadratu.
Łatwo można zauważyć, że obszar ten wyznaczają \\( \texttt{A} \\) oraz \\( \texttt{C'} \\). Iloczyn wynosi \\( \texttt{A'C} \\).
Końcowy wynik to \\( \texttt{SOP = AC' + B } \\). 

* Minimalny POS, iloczyn sum, np. \\( \texttt{(X + Y) (Z)} \\) \\
Analogiczne postępowanie przy POS.
Tabelkę ponownie przepisać, ale tym razem zakreślić zera.
Ten konkretny przykład pokazuje ważną cechę siatki Karnaugh - formalnie jest ona torusem\footnote{model 3D można zakupić w Biedronce pod nazwą handlową donut}, więc naprzeciwległe krawędzie są również połączone ze sobą, co należy uwzględniać przy szukaniu grup maksymalnych.
Opisana sytuacja występuje w przypadku grupy ,,zielonej'', utworzonej ze skrajnych rzędów. \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1}
\implicant{0}{2}
\implicantedge{3}{2}{11}{10}
\end{karnaugh-map}\\
Z tabelki jednoznacznie wynika, że tym razem ,,zielona'' grupa jest definiowana przez \\( \texttt{C} \\) oraz \\( \texttt{B'} \\), natomiast ,,czerwona'' przez \\( \texttt{A'} \\) i \\( \texttt{B'} \\). Tutaj dochodzi dodatkowy ważny krok! Przed połączeniem w sumy, należy zanegować każdą zmienną. Ostateczny wynik to \\( \texttt{SOP = (C'+B)(A+B)} \\). 


Wykorzystany przykład jest na tyle mało zaawansowany, że można szybko wykazać równoważność obu postaci.
Najprościej przemnożyć składniki minimalnego POS:
\\( \texttt{(C' + B)(A + B) = AC' + B} \\).
Wynik identyczny z minimalnym SOP.
Przy skomplikowanych funkcjach postać nadal będzie równoważna, ale jest to znacznie trudniejsze to zaobserwowania, ponieważ mnożąc POS możemy otrzymać SOP dowolny, nie minimalny.

Uwaga! Czasami (chociaż rzadko) zdarza się, że jedynki/zera wystąpią na wszystkich czterech rogach.
Wtedy należy zgrupować je w kwadrat, korzystając jednocześnie z zasad łączenia przeciwległych boków w pionie oraz w poziomie.
Dla siatki czterech zmiennych jak poniżej, taki iloczyn zostanie oznaczony \\( \texttt{B'D'} \\). \\ \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0}
\implicantcorner
\end{karnaugh-map}

##### Interpretacja wyniku
Z poprzedniego podpunktu otrzymaliśmy POS i/lub SOP.
Przyjmując że poprawnie wybraliśmy możliwie najmniejszą ilość maksymalnych grup, są to oczywiście postaci minimalne.
Jeśli w treści zadania jest wymagana postać kanoniczna, dodatkowo sztucznie uzupełniamy wszystkie brakujące zmienne.
Do SOP bez zmiany wartości można dodać \\( \texttt{A' A} \\).
Odpowiednikiem dla POS jest mnożenie \\( \texttt{(A + A')} \\).
Naszym przykładem była funkcja \\( \texttt{F(A,B,C,D)} \\), ale wszystkie składniki zawierające \\( \texttt{D} \\) były trywialne, więc zmienna ta została wykluczona już na początku.
Dodajmy ją w celu uzyskania postaci kanonicznej.
POS kanoniczny to \\( \texttt{AC' + B + DD'} \\), natomiast kanoniczny POS przybierze postać \\( \texttt{(C' + B)(A + B)(D + D')} \\).
Czasami elementem zadania może być też narysowanie odpowiedniej kombinacji bramek logicznych. Wtedy wykorzystujemy minimalny SOP i postępujemy jak przy projektowaniu układów logicznych z funkcji boolowskiej (w osobnym rozdziale).

##### ,,Dla tych, którzy chcą wiedzieć więcej...''

* Stany nieoznaczone \\
Czasami w zadaniu wskazane są kombinacje, które nie muszą przyjmować żadnej określonej wartości. Najczęściej dotyczy to postaci skróconej SOP lub POS (notacje \\( \Sigma \\) i \\( \prod \\)), gdzie pola te oznaczone są literą \\( \texttt{d} \\). Ogólna zasada jest bardzo prosta - stan nieokreślony traktujemy jako zero lub jedynkę, w zależności od tego, co pozwoli lepiej zminimalizować funkcję. Przykład: \\( F (A,B,C,D) = \Sigma m (0,1,4) + d(5,7) \\) \\
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{1,1,0,0,1,X,0,X,0,0,0,0,0,0,0,0}
\end{karnaugh-map} 
\begin{karnaugh-map}[4][4][1][\\( CD \\)][\\( AB \\)]
\manualterms{1,1,0,0,1,X,0,X,0,0,0,0,0,0,0,0}
\implicant{0}{5}
\end{karnaugh-map} \\
Pierwszy stan nieokreślony potraktowaliśmy jako zero, drugi jako jedynkę, dzięki czemu udało się utworzyć pojedynczą grupę 2x2 zamiast dwóch 1x2. 
* Inne zestawy bramek \\
Standardowe zadania z SOP, POS i minimalizacji zezwalają tylko na negację, alternatywę oraz koniunkcję, natomiast przy projektowaniu prawdziwych układów do dyspozycji są również pozostałe bramki logiczne.
Wykorzystując \\( \texttt{XOR} \\) lub \\( \texttt{XNOR} \\), możliwa jest tzw. minimalizacja skośna. \\ \\
\begin{karnaugh-map}[2][2][1][\\( B \\)][\\( A \\)]
\manualterms{0,1,1,0}
\implicant{1}{1}
\implicant{2}{2}
\end{karnaugh-map} 
\begin{karnaugh-map}[2][2][1][\\( B \\)][\\( A \\)]
\manualterms{1,0,0,1}
\implicant{0}{0}
\implicant{3}{3}
\end{karnaugh-map} \\
Pierwsza tabelka to \\( \texttt{A'B + AB'} \\), co jest dosłowną definicją \\( \texttt{A XOR B} \\).
Natomiast drugą można zapisać jako \\( \texttt{A'B' + BA} \\), czyli \\( \texttt{A XNOR B} \\).
Zamiast pięciu bramek jedna!
A jak to wygląda po przeliczeniu na podstawowe elementy?
Dwie negacje, dwie koniunkcje i alternatywa wymagają aż 22 tranzystorów~\cite{transistor_count}.
Natomiast \\( \texttt{XNOR} \\) to 8 tranzystorów, \\( \texttt{XOR} \\) zaledwie 6.
Zysk jest oczywisty.
Podobne rozumowanie można przeprowadzić dla większych tabel w połączeniu z minimalizacją klasyczną, stosując łączenie po skosie.
Z przyczyn osobistych, pozostawiam to Czytelnikowi jako ćwiczenie.

* Szybkie zamiany \\
Jeśli otrzymaliśmy SOP lub POS w postaci skróconej i chcemy jedynie odtworzyć funkcję bez minimalizacji, można to zrobić nie wykorzystując tabelek. Każdą liczbę z nawiasu zapisujemy w postaci binarnej na tylu bitach, ile funkcja ma wejść. Dla \\( F (A,B,C) = \Sigma m (1,2,7) \\) będą to 001, 010, 111. Kolejne bity zamieniamy na kolejne litery. 1 oznacza daną zmienną, 0 jej negację. \\( 001 \rightarrow A'B'C \\), \\( 010 \rightarrow A'BC' \\), \\( 111 \rightarrow ABC \\). Końcowym wynikiem jest \\( F (A,B,C) = A'B'C + A'BC' + ABC \\). Analogicznie \\( F (X,Y,Z) = \prod M (0,3,6) \\), ale dla POS zasada jest odwrotna: 1 to negacja, 0 niezmieniona wartość. Otrzymujemy 000, 011, 110. Z tego \\( F (X,Y,Z) = (A + B + C) (A + B' + C') (A' + B' + C) \\)

* Więcej zmiennych! \\
Powyżej czterech wejść, teoretycznie można łączyć zmienne trójkami, ale jest to znacznie mniej intuicyjne niż w przypadku par. 
Przykładowo suma iloczynów \\( \texttt{CD' + CD} \\) to oczywiście prosta formuła \\( \texttt{C} \\).
Jednak na pojedynczej siatce pięciu zmiennych mogłaby ona być widoczna jako dwie oddzielne grupy, których nie da się połączyć żadną z wcześniejszych zasad. \\

\begin{tikzpicture}[thick]
\karnaughmap[variables=ABCDE,function=,omitzeros=false]
{0000 1111 0000 1111 0000 1111 0000 1111}
\end{tikzpicture} \\

W takiej sytuacji należałoby omówić reguły łączenia symetrycznego.
Prościej jest jednak wykorzystać to, czego cały czas unikaliśmy, czyli kolejny wymiar.
Wystarczy wyobrazić sobie połówkę sześcianu, składającą się z 32 małych kostek. Każdej kostce możemy oczywiście przypisać prawdę lub fałsz. \\ 

\begin{tikzpicture}
\foreach \x in{0,...,4}{
\draw (0,\x ,2) -- (4,\x ,2);
\draw (\x ,0,2) -- (\x ,4,2);}
\foreach \x in{0,...,4}{
\draw (4,\x ,2) -- (4,\x ,0);
\draw (\x ,4,2) -- (\x ,4,0);}
\foreach \x in{0,...,2}{
\draw (4,0,\x ) -- (4,4,\x );
\draw (0,4,\x ) -- (4,4,\x );}
\end{tikzpicture} \\

Na potrzeby minimalizacji wystarczą nam przekroje, dwie osobne siatki Karnaugh\footnote{W podstawowym algorytmie minimalizacji zostało zaznaczone, że każda siatka Karnaugh jest torusem. To prawda. Dobra rada: nie myśl teraz o tym. Cztery wymiary są fajne, ale bezpieczniej jest zostawić je komuś z 214b/D1.}. Dalej postępujemy identycznie jak przy standardowej minimalizacji, pamiętając oczywiście że analogiczne pola obu siatek są również złączone ze sobą. Poniżej nasz wcześniejszy przykład \\( \texttt{CD' + CD} \\). Tym razem bezproblemowo otrzymaliśmy postać minimalną \\( \texttt{F(A,B,C,D,E) = C} \\). \\

\begin{karnaugh-map}[4][4][2][\\( CD \\)][\\( AB \\)][\\( E \\)]
\manualterms{0,0,1,1,
0,0,1,1,
0,0,1,1,
0,0,1,1,
0,0,1,1,
0,0,1,1,
0,0,1,1,
0,0,1,1}
\implicant{3}{10}[0,1]
\end{karnaugh-map} 

* A może dwa wyjścia? \\
W przypadku projektowania układu posiadającego więcej niż jedno wyjście, zazwyczaj zadowalające efekty daje zapisanie dla każdego z nich osobnej funkcji boolowskiej, a następnie oddzielna minimalizacja. Warto również zaznaczyć powtarzające się iloczyny (w SOP), dzięki czemu będzie możliwe wykorzystanie danego zestawu bramek wielokrotnie. Natomiast wyznaczenie w takim przypadku postaci jednoznacznie minimalnej jest problemem NP-trudnym, znacząco wykraczającym poza zakres tego kompendium. W przypadku zainteresowania tematem, odsyłam do literatury~\cite{multi_minimization}. 


