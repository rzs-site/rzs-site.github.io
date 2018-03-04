---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Układy kombinacyjne
\begin{quote}{Terry Pratchett}
Uczeni wyliczyli, że jest tylko jedna szansa na bilion, by zaistniało coś tak całkowicie absurdalnego. Magowie obliczyli, że szanse jedna na bilion sprawdzają się w dziewięciu przypadkach na dziesięć.
\end{quote}

### Hazard
#### Trywialny przykład
Jako hazard określamy błędne stany wyjść układów cyfrowych, które powstają podczas przełączania poszczególnych bramek.
Poniższy rysunek przestawia bardzo prosty™ układ logiczny.
Po lewej stronie bramka ` NOT ` neguje wartość zmiennej ` A `, natomiast bramka ` AND ` wykonuje koniunkcję wartości ` A' ` oraz ` B `.
Oba wejścia mają początkowo wartość 0. \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {A}
(myand1.in 2) node[anchor=east] {B}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \qquad \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {0}
(mynot1.out) node[anchor=south west] {1}
(myand1.in 2) node[anchor=east] {0}
(myand1.out) node[anchor=west] {1}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\

Sprawdźmy teraz, co się stanie, gdy równocześnie zmienimy wartość obu zmiennych na 1. Operujemy na schemacie teoretycznym, dlatego właściwości samych połączeń pomijamy. Natomiast istotne opóźnienie wprowadzają bramki logiczne. Dla uproszczenia przyjmijmy, że każda bramka zwraca na wyjściu prawidłową wartość dopiero po (identycznym) czasie \\(t\\). \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {\textcolor{red}{1}}
(mynot1.out) node[anchor=south west] {1}
(myand1.in 2) node[anchor=east] {\textcolor{red}{1}}
(myand1.out) node[anchor=west] {0}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\

W pierwszym kroku (\\(T = 0\\)) zmieniły się wyłącznie wartości na wejściach, wartości wyjściowe pozostały bez zmian. Sprawdźmy, jak zachowują się teraz poszczególne elementy. Bramka ` NOT ` otrzymuje wartość 1 na wejściu, ale z uwagi na opóźnienie stan wyjściowy jest nadal równy 1!\footnote{Eksperci go nienawidzą, odkrył jeden prosty sposób, jak uniknąć żartów o silni.} Podobnie bramka ` AND ` ma oba wejścia w stanie 1, natomiast na wyjściu nadal 0. Zwiększmy czas \\(T\\) o pojedyncze opóźnienie, czyli \\(t\\). \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {1}
(mynot1.out) node[anchor=south west] {\textcolor{red}{0}}
(myand1.in 2) node[anchor=east] {1}
(myand1.out) node[anchor=west] {\textcolor{red}{1}}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\  

Bramka ` NOT ` otrzymała wcześniej wartość 1, więc prawidłowo zwraca teraz 0. Analogicznie bramka ` AND ` - wejścia były ustawione na 1, zgodnie z definicją taka wartość pojawiła się też na wyjściu. Końcowa wartość w układzie to aktualnie 1. Jednak to jeszcze nie koniec, ponownie zwiększamy czas o wartość \\(t\\). \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {1}
(mynot1.out) node[anchor=south west] {0}
(myand1.in 2) node[anchor=east] {1}
(myand1.out) node[anchor=west] {\textcolor{red}{0}}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\  

Żadne zmiany nie nastąpiły przy bramce ` NOT `, która już wcześniej się ustabilizowała. Natomiast jedno z wejść ` AND ` w poprzednim kroku osiągnęło wartość 0, więc bramka ponownie musi przyjąć stan 0. Całość została doprowadzona do stanu stabilnego, dalsze zwiększanie czasu nie spowoduje zmian. \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {1}
(mynot1.out) node[anchor=south west] {0}
(myand1.in 2) node[anchor=east] {1}
(myand1.out) node[anchor=west] {0}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\

Nasz prosty układ jest równoważny funkcji boolowskiej ` F(A,B) = A'B `. Przyjmuje ona logiczną prawdę wtedy i tylko wtedy, gdy ` A = 0 ` oraz ` B = 1 `. Jednak przez chwilę otrzymaliśmy na wyjściu wartość 1, chociaż oba wejścia miały identyczną. Jest to modelowy przykład hazardu. Z powodu niedoskonałości elementów elektronicznych, podczas zmiany wartości wejściowych przez krótki czas wyjście może mieć stan inny od oczekiwanego.  

#### Złe, bardzo złe i tragiczne skutki

Negatywne efekty hazardu mogą być mało zauważalne (ale nadal niepożądane), gdy dotyczą wyłącznie komunikacji z użytkownikiem, np. przez wyświetlacz numeryczny. Doprowadzenie do stanu stabilnego z punktu widzenia człowieka jest natychmiastowe, ponieważ odświeżanie trwa krócej niż czas reakcji. Nieporównywalnie gorszy jest hazard w układach, które wykonują dalsze działania lub zapisują dane. Wtedy pojedynczy błąd może być propagowany na cały układ lub nawet rejestrowany w pamięci. Najbardziej niepożądany wariant występuje w przypadku, gdy skutki wykonania danej operacji są nieodwracalne.

Rozważmy to na przykładzie. Mamy centralkę alarmową, która wysyła dwa sygnały. Jeden wskazuje na uzbrojenie systemu (0~-~nieaktywny, 1~-~aktywny), drugie to stan czujnika ruchu (1~-~brak problemów, 0~-~zagrożenie). Chcemy stworzyć prosty układ, który uruchomi automat nadpisujący, jeśli w stanie ,,uzbrojnym'' czujnik wykryje włamanie. Automat to zewnętrzne urządzenie, aktywowane impulsem 1. \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.out) -| (myand1.in 1)  
(mynot1.in) node[anchor=east] {czujnik}
(myand1.in 2) node[anchor=east] {uzbrojenie}
(myand1.out) node[anchor=west] {kasowanie};
\end{circuitikz} \\

Przykładową realizacją jest układ z poprzedniego podpunktu. Pomimo wykazanego problemu z hazardem, może się wydawać że całość zadziała poprawnie, ponieważ wejścia są aktywowane niezależnymi czynnikami. Załóżmy jednak, że podczas standardowego działania alarmu dopływ energii został odcięty, przez co na wejściach naszego okładu zanika sygnał. Gdy wróci zasilanie, centralka alarmowa zacznie znowu wysyłać oba sygnały - uzbrojenie systemu oraz stan czujnika ruchu. Hipotetycznie możliwa jest więc sytuacja podobna do opisanej wyżej - jednoczesne przełączenie obu wejść. Przypomnijmy, co się wtedy dzieje: \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {0}
(mynot1.out) node[anchor=south west] {1}
(myand1.in 2) node[anchor=east] {0}
(myand1.out) node[anchor=west] {0}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {\textcolor{red}{1}}
(mynot1.out) node[anchor=south west] {1}
(myand1.in 2) node[anchor=east] {\textcolor{red}{1}}
(myand1.out) node[anchor=west] {0}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {1}
(mynot1.out) node[anchor=south west] {\textcolor{red}{0}}
(myand1.in 2) node[anchor=east] {1}
(myand1.out) node[anchor=west] {\textcolor{red}{1}}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot1) {}
(3,0) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {1}
(mynot1.out) node[anchor=south west] {0}
(myand1.in 2) node[anchor=east] {1}
(myand1.out) node[anchor=west] {\textcolor{red}{0}}
(mynot1.out) -| (myand1.in 1);   
\end{circuitikz} \\

Po trzecim kroku do automatu został wysłany impuls aktywujący, mimo że nie nastąpiło włamanie. Wszystkie dane zostały niepotrzebnie zniszczone.

Oczywiście całość jest tylko absurdalnym, teoretycznym rozważaniem. Przełączenie obu wejść w identycznym czasie jest niemalże nieprawdopodobne. Dobrze jednak pokazuje to mechanizm hazardu, który (najczęściej w mniej spektakularnej formie) może wystąpić również przy całkowicie realnych zastosowaniach.

#### Zapobieganie

Paradoksalnie, dla tak prostej funkcji jak powyżej, całkowite wyeliminowanie hazardu jest niemożliwe. Do uzyskania poprawnego wyniku musimy zawsze zanegować sygnał A, natomiast B pozostawić niezanegowane, przez co czas propagacji sygnału będzie różny. Czysto teoretycznym rozwiązaniem byłoby zrównoważenie jednej bramki ` NOT ` odpowiednim układem opóźniającym. Niemożliwe jest jednak zbudowanie z samych bramek ` NOT ` układu, który bez negacji opóźni sygnał o tyle, co pojedyncza bramka ` NOT `. A gdyby zamiast tego wykorzystać bramkę ` AND `? \\

\begin{circuitikz} \draw
(0.5,2) node[not port, scale=.5] (mynot1) {}
(2,0) node[and port] (myand0) {}
(3.5,1) node[and port] (myand1) {}
(mynot1.in) node[anchor=east] {A}
(myand0.in) node[anchor=east] {B}
(myand0.in 1) -- (myand0.in 2)
(mynot1.out) -| (myand1.in 1) 
(myand0.out) -| (myand1.in 2)
(myand0.in 1 |- myand0.out) to [short,*-] (0,0);
\end{circuitikz} \\

Pod względem teoretycznym wszystko się zgadza i tak też wskaże większość symulatorów obwodów. Niestety, w praktyce bramki mają różne opóźnienia. Przy samym stwierdzaniu zjawiska hazardu mogliśmy pozwolić sobie na zaokrąglanie tego do stałej wartości, ponieważ kluczowy był sam fakt występowania zjawiska, a nie konkretne stany pośrednie. Natomiast chcąc zrównoważyć czasy propagacji sygnału w rzeczywistym układzie, musielibyśmy uwzględniać odmienne charakterystyki.

Wykazaliśmy, że w omawianym przypadku nie da się w żaden klasyczny sposób usunąć hazardu. Powrócimy do tego układu przy układach synchronicznych, a teraz spróbujemy od nowa na przykładzie modelowym. Nowa funkcja to ` B (A + B') `.  \\

\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {B}
(myor1.in 2) node[anchor=east] {A}
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \\  

Początkowo ` A = 0, B = 0 `. Sprawdźmy, jak się zachowa funkcja po zmianie stanu B na 1. \\

 \noindent \begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {0} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {1} % B'
(myand2.in 1) node[anchor=south east] {0} % B
(myand2.in 2) node[anchor=east] {1} % A + B'
(myand2.out) node[anchor=west] {0} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {\textcolor{red}{1}} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {1} % B'
(myand2.in 1) node[anchor=south east] {\textcolor{red}{1}} % B
(myand2.in 2) node[anchor=east] {1} % A + B'
(myand2.out) node[anchor=west] {0} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \qquad
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {1} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {\textcolor{red}{0}} % B'
(myand2.in 1) node[anchor=south east] {1} % B
(myand2.in 2) node[anchor=east] {1} % A + B'
(myand2.out) node[anchor=west] {\textcolor{red}{1}} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \\ \\
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {1} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {0} % B'
(myand2.in 1) node[anchor=south east] {1} % B
(myand2.in 2) node[anchor=east] {\textcolor{red}{0}} % A + B'
(myand2.out) node[anchor=west] {1} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \qquad   
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {1} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {0} % B'
(myand2.in 1) node[anchor=south east] {1} % B
(myand2.in 2) node[anchor=east] {0} % A + B'
(myand2.out) node[anchor=west] {\textcolor{red}{0}} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \qquad   
\begin{circuitikz} \draw
(1,0.5) node[not port, scale=.5] (mynot0) {}
(3,0) node[or port] (myor1) {}
(4.5,1) node[and port] (myand2) {}
(mynot0.in) node[anchor=south east] {1} % B
(myor1.in 2) node[anchor=east] {0} % A
(mynot0.out) node[anchor=south west] {0} % B'
(myand2.in 1) node[anchor=south east] {1} % B
(myand2.in 2) node[anchor=east] {0} % A + B'
(myand2.out) node[anchor=west] {0} % (A + B') B
(mynot0.out) -| (myor1.in 1)
(myand2.in 1) -| (mynot0.in)
(myor1.out) -| (myand2.in 2) 
(mynot0.in |- mynot0.out) to [short,*-] (0,0.5);
\end{circuitikz} \qquad

I znowu to samo. W jednym z kroków na wyjściu otrzymaliśmy wartość 1, chociaż poprawna wartość to zero. Istnieje jednak zasada, która pozwoli nam pozbyć się problemu. Hazard występuje, gdy na siatce Karnaugh sąsiednie grupy nie są ze sobą połączone. Sprawdźmy więc nasz układ. 

\begin{karnaugh-map}[2][2][1][\\(B\\)][\\(A\\)]
\manualterms{0,0,0,1}
\implicant{1}{1}
\implicant{0}{2}
\end{karnaugh-map} 

Analizowaliśmy zmianę ` B = 0 ` na ` B = 1 ` przy ` A = 0 `, dokładnie w tym miejscu występuje przerwa. Wyeliminowanie hazardu jest tutaj bardzo proste, wystarczy rozszerzyć jedną z grup albo policzyć SOP, gdzie jest tylko jedna grupa jednoelementowa. 

\begin{karnaugh-map}[2][2][1][\\(B\\)][\\(A\\)]
\manualterms{0,0,0,1}
\implicant{0}{1}
\implicant{0}{2}
\end{karnaugh-map} \qquad
\begin{karnaugh-map}[2][2][1][\\(B\\)][\\(A\\)]
\manualterms{0,0,0,1}
\implicant{2}{2}  
\end{karnaugh-map}

W obu przypadkach nowa funkcja to ` AB `, pojedyncza bramka logiczna bez negacji. Z definicji nie może pojawić się hazard. Jednocześnie otrzymaliśmy postać minimalną, co jest raczej rzadkim zjawiskiem. Zazwyczaj eliminacja podobnych problemów powoduje zwiększenie ilości bramek i zwiększenie stopnia skomplikowania.

Dlaczego nie dało się w żaden sposób uniknąć hazardu przy poprzednim przykładzie? Wykazaliśmy to już analizując układ, czas na wyjaśnienie teoretyczne. Była to w pewnym sensie, forma oszustwa. Rozważaliśmy jednoczesną zmianę dwóch zmiennych, na co większość prostych układów nie jest odporna. Sprawdźmy tabelkę. Rozważaliśmy przejście między zerami, narysujmy grupy jak dla POS. \\

\begin{karnaugh-map}*[2][2][1][\\(B\\)][\\(A\\)]
\manualterms{0,1,0,0}
\implicant{0}{0}
\implicant{3}{3}
\end{karnaugh-map} \qquad
\begin{karnaugh-map}[2][2][1][\\(B\\)][\\(A\\)]
\manualterms{0,1,0,0}
\implicant{2}{3}
\implicant{0}{2}
\end{karnaugh-map} \\

Na pierwszej tabelce jest zaznaczone, między którymi polami chcieliśmy przeskoczyć. Stykają się one tylko rogami. Druga siatka pokazuje, że nie potrafimy zawrzeć punktu styku w żadnej grupie.  


### Sumatory
\subparagraph{Półsumator}

Półsumator to prosty układ logiczny, realizujący dodawanie pojedynczych bitów. Zasada działania jest identyczna jak przy dodawaniu pisemnym. Jeśli wynik dodawania nie mieści się na pojedynczym bicie (1+1), na wyjściu sumy zwracane jest zero, a ustawiany jest bit przeniesienia. \\ 

\begin{tabular}{|l|l|l|l|}
\hline
\textbf{a} & \textbf{b} & \textbf{S} & \textbf{C} \\ \hline
0  & 0  & 0  & 0  \\ \hline
0  & 1  & 1  & 0  \\ \hline
1  & 0  & 1  & 0  \\ \hline
1  & 1  & 0  & 1  \\ \hline
\end{tabular} \\ \\

\includegraphics[width=4cm]{_img/polsumator.eps}

\subparagraph{Sumator pełny}
Działa identycznie jak półsumator, ale uwzględnia przeniesienie z poprzedniego sumatora, dzięki czemu można je łączyć kaskadowo i dodawać liczby wielobitowe.\\

\begin{tabular}{|l|l|l|l|l|}
\hline
\textbf{a} & \textbf{b} & \textbf{c} & \textbf{S} & \textbf{C} \\ \hline
0  & 0  & 0  & 0  & 0  \\ \hline
0  & 0  & 1  & 1  & 0  \\ \hline
0  & 1  & 0  & 1  & 0  \\ \hline
0  & 1  & 1  & 0  & 1  \\ \hline
1  & 0  & 0  & 1  & 0  \\ \hline
1  & 0  & 1  & 0  & 1  \\ \hline
1  & 1  & 0  & 0  & 1  \\ \hline
1  & 1  & 1  & 1  & 1  \\ \hline
\end{tabular} \\ \\

\includegraphics[width=6cm]{_img/sumator.eps}

### Komparatory

Komparator jest jednym z najprostszych (pod względem logicznym) układów. Zwraca prawdę wtedy i tylko wtedy, gdy dane wejścia są ze sobą w określonej relacji. Najprostszym komparatorem jest bramka ` XNOR `, która zwraca prawdę tylko w przypadku równości.

%### Konwertery
%\subparagraph{Kodery}
%\subparagraph{Dekodery}
%### Komutatory
%#### Multiplekser
%#### Demultiplekser
%### Arytmetyczne jednostki logiczne