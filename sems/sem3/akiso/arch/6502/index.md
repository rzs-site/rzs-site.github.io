---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Procesor 6502
\begin{quote}{turbo debadżer}
To jest wszystko bardzo proste
\end{quote}

Procesor 6502, a właściwie mikroprocesor, był przełomowym osiągnięciem techniki. Jedną z największych jego zalet była bardzo niska cena, co zaowocowało wzrostem ilości komputerów domowych. Niezwykle prosty oraz efektywny design był inspiracją dla projektantów procesorów ARM.

### Rejestry
Z punktu widzenia wybitnego programisty assemblera rejestry 6502 nie są zbyt interesujące. Bezpośredni dostęp posiada on jedynie do trzech rejestrów nazywanych:

* \textbf{A} - Akumulator - 8 bit
* \textbf{X} - 8 bit
* \textbf{Y} - 8 bit

Dodatkowo występują :

* \textbf{PC} - Licznik programu - 16 bit
* \textbf{SP} - Stack pointer - 8 bit
* \textbf{P} - Rejestr flag procesora - 8 bit (bit 5 nie jest używany, powinien zawsze być jedynką)


### Flagi procesora
6520 posiada następujące flagi:


* \textbf{Z} - Flaga zero - Zapalana gdy operacja arytmetyczna, bądź logiczna dała wynik 0
* \textbf{C} - Flaga przeniesienia - Zapalana gdy przy wykonywaniu operacji dodawania zaistniało przeniesienie z najbardziej znaczącego bitu oraz odejmowania jeśli wymagane jest zapożyczenie. Flaga jest również czyszczony przy odejmowaniu jeśli zapożyczenie nie jest wymagane
* \textbf{V} - Flaga przepełnienia - Zapalana gdy operacja arytmetyczna zwraca wynik przekraczający swoim rozmiarem jeden bajt
* \textbf{N} - Flaga znaku - Zapalana jeśli wynikiem operacji jest liczba negatywna, czyszczona w przeciwnym wypadku
* \textbf{D} - Flaga trybu dziesiętnego - Zmienia zachowanie operacji dodawania i odejmowania z przeniesieniem na tryb BCD
* \textbf{B} - Flaga wstrzymania - Zapalona gdy przerwanie systemowe zostało wywołane
* \textbf{I} - Flaga przerwania - Zapalona umożliwia na używanie przerwań


### Tryby adresowania
Tryb adresowania to sposób w jaki procesor uzyskuje dane potrzebne do wykonania aktualnej instrukcji. W przypadku 6502 trybów jest około trzynastu. Poniższa lista zawiera tylko najważniejsze:

* Akumulator - @ - Podana instrukcja odnosi się do danych zawartych w akumulatorze
* Immediate - \#\$1234 - Dane do instrukcji znajdują się bezpośrednio po opcodzie (np. wartość liczbowa)
* Implied - Adresowanie jest pomijane jako, że wynika bezpośrednio z instrukcji
* Relative - Używany przy rozgałęzieniach. Bajt po opcodzie zawiera długość ewentualnego skoku (-128 do 127 bajtów)
* Absolute - \$1234 - Dwa bajty po opcodzie zawierają dokładny adres w pamięci
* Zero-page- \$12 - Podobne do Absolute ale używane do adresowania tylko pierwszej strony w pamięci
* Indirect - (\$1234) - Podobnie do Absolute ale adres skoku zawarty jest w pamięci, a nie w dwóch bajtach po opcodzie (Używany tylko przez instrukcję JMP)
* Absolute Indexed - \\\(1234,X \\\)1234,Y - Rozszerzenie trybu Absolute o możliwość dodania do adresu zawartości rejestrów X oraz Y
* Zero-page Indexed - \\\(12,X \\\)12,Y - Podobne do Absolute Indexed ale używane do adresowania tylko pierwszej strony w pamięci
* Indirect Indexed - (\$12),Y - Rozszerzenie trybu Indirect o możliwość dodania do adresu z pamięci zawartości rejestru Y
* Indexed Indirect - (\$12,X) - Rozszerzenie trybu Indirect o możliwość dodania do adresu zawartości rejestru X, a potem pobranie z nowo uzyskanego adresu zawartości


W przypadku adresowania typu absolute na adres przeznaczone są dwa bajty. Oznacza to 16 bitów na których można zapisać adres. Pozwala to na odwołania do 65536 (\\(2^{16}\\)) komórek w pamięci. 

#### Etykiety
Etykiety no nic innego jak sposób aliasowania konkretnych miejsc w kodzie naszego programu. Niwelują one problem wynikający z tego, że np. po dodaniu jednej linii kodu, wszystkie linie poniżej zmieniają swój adres i trzeba by było zmieniać wartości wszystkich skoków absolutnych. Ale nie trzeba! Bo mamy cudowne etykiety i dzięki temu pisanie staje się bardzo proste

### Stos
Po przestrzeni zarezerwowanej jako zero-page w 6502 następuje stos. Rozpoczyna się on na adresie 
0x0100 oraz kończy na 0x01FF. Mamy do dyspozycji następujące operacja na stosie:

* PHA - Dodaje wartość na szczyt stosu
* PHP - Interpretowany języ... Umieszcza na stosie rejestr flag (Analogiczną, lecz bezpieczniejszą jest instrukcja ADA)
* PLA - Ściąga wartość ze szczytu stosu i umieszcza ją w rejestrze A
* PLP - Ściąga wartość ze szczytu stosu i umieszcza ją w rejestrze flag


### Wybrane rozkazy procesora

* LDA - Ładuje dane do akumulatora. Wpływa na flagi N oraz Z
* STA - Zapisuje zawartość akumulatora w pamięci. Wpływa na flagi N oraz Z
* LDX - Ładuje dane do rejestru X. Wpływa na flagi N oraz Z
* STX - Zapisuje zawartość rejestru X w pamięci. Wpływa na flagi N oraz Z
* LDY - Ładuje dane do rejestru Y. Wpływa na flagi N oraz Z
* STY - Zapisuje zawartość rejestru Y w pamięci. Wpływa na flagi N oraz Z
* ADC - Dodaje zawartość akumulatora do wartości w pamięci z przeniesieniem. Wynik zapisuje w akumulatorze. Wpływa na flagi N, V, Z oraz C
* INC - Zwiększa zawartość pamięci o 1. Wpływa na flagi N oraz Z
* SBC - Odejmuje zawartość akumulatora od wartości w pamięci z przeniesieniem. Wynik zapisuje w akumulatorze. Wpływa na flagi N, V, Z oraz C
* DEC - Zmniejsza zawartość w pamięci o 1. Wpływa na flagi N oraz Z
* CMP - Porównuje zawartość akumulatora z wartością w pamięci. Wpływa na flagi N, Z oraz C
* CPX - Porównuje zawartość rejestru X z wartością w pamięci. Wpływa na flagi N, Z oraz C
* CPY - Porównuje zawartość rejestru Y z wartością w pamięci. Wpływa na flagi N, Z oraz C
* AND - Wykonuje bitową operację AND na akumulatorze oraz pamięci. Wynik zapisuje w akumulatorze. Wpływa na flagi N oraz Z
* ORA - Wykonuje bitową operację OR na akumulatorze oraz pamięci. Wynik zapisuje w akumulatorze. Wpływa na flagi N oraz Z
* EOR - Wykonuje bitową operację OR na akumulatorze oraz pamięci. Wynik zapisuje w akumulatorze. Wpływa na flagi N oraz Z

\begin{table}[h]
\centering
\caption{Dostępne tryby adresowania podstawowych instrukcji 6502}
\begin{tabular}{|l|c|c|c|c|c|c|c|c|c|c|c|c|}
\hline
\textbf{OC} & \textbf{\#\\\(12} & \textbf{\\\)1234} & \textbf{\\\(12} & \textbf{(\\\)1234)} & \textbf{\\\(1234,X} & \textbf{\\\)1234,Y} & \textbf{\\\(12,X} & \textbf{\\\)12,Y} & \textbf{(\\\(12),Y} & \textbf{(\\\)12,X)} \\ \hline
LDA & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark &\checkmark \\ \hline
STA & - & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark &\checkmark \\ \hline
LDX & \checkmark & \checkmark & \checkmark & - & - & \checkmark & - & \checkmark & - & - \\ \hline
STX & - & \checkmark & \checkmark & - & - & - & - & \checkmark & - & - \\ \hline
LDY & \checkmark & \checkmark & \checkmark & - & \checkmark & - & \checkmark & - & - & - \\ \hline
STY & - & \checkmark & \checkmark & - & - & - & \checkmark & - & - & - \\ \hline
ADC & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
INC & - & \checkmark & \checkmark & - & \checkmark & - & \checkmark & - & - & - \\ \hline
SBC & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
DEC & - & \checkmark & \checkmark & - & \checkmark & - & \checkmark & - & - & - \\ \hline
CMP & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
CPX & \checkmark & \checkmark & \checkmark & - & - & - & - & - & - & - \\ \hline
CPY & \checkmark & \checkmark & \checkmark & - & - & - & - & - & - & - \\ \hline
AND & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
ORA & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
EOR & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark & \checkmark \\ \hline
\end{tabular}
\end{table}

* ASL - Przesunięcie bitowe w lewo. Wpływa na flagi N, Z oraz C
* ROL - Przesunięcie bitowe w lewo z przeniesieniem. Wpływa na flagi N, Z oraz C
* LSR - Przesunięcie bitowe w prawo. Wpływa na flagi N, Z oraz C
* ROR - Przesunięcie bitowe w prawo z przeniesieniem. Wpływa na flagi N, Z oraz C

\begin{table}[h]
\centering
\caption{Dostępne tryby adresowania podstawowych przesunięć bitowych 6502}
\begin{tabular}{|l|c|c|c|c|c|c|c|}
\hline
\textbf{OC} & \textbf{@} & \textbf{\#\\\(12} & \textbf{\\\)1234} & \textbf{\\\(12} & \textbf{\\\)1234,X} & \textbf{\\\(1234,Y} & \textbf{\\\)12,X} \\ \hline
ASL & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark \\ \hline
ROL & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark \\ \hline
LSR & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark \\ \hline
ROR & \checkmark & - & \checkmark & \checkmark & \checkmark & - & \checkmark \\ \hline
\end{tabular}
\end{table}

* TXA - Przesyła wartość z rejestru X do A
* TYA - Przesyła wartość z rejestru Y do A
* TAX - Przesyła wartość z rejestru A do X
* TAY - Przesyła wartość z rejestru A do Y
* TXS - Przesyła wartość z rejestru X do SP
* TSX - Przesyła wartość z rejestru SP do X
* INX - Zwiększa wartość rejestru X o 1
* INY - Zwiększa wartość rejestru Y o 1
* DEX - Zmniejsza wartość rejestru X o 1
* DEY - Zmniejsza wartość rejestru Y o 1
* JMP - Skacze to podanego miejsca w pamięci. Umożliwia adresowanie Absolute oraz Indirect
* JSR - Skacze do podprogramu. Adresowanie wyłącznie Absolute
* RTS - Wraca z podprogramu
* NOP - Nie robi nic jak polski robotnik na budowie

\begin{table}
\caption{Lista skoków warunkowych (a) oraz instrukcje flag (b) w 6502}
  \centering
  \subfloat[][Skoki]{\begin{tabular}{|l|c|}
\hline
   \textbf{OC} & \textbf{Warunek} \\ \hline
BNE & Z = 0 \\ \hline
   BEQ & Z = 1 \\ \hline
   BCC & C = 0 \\ \hline
BCS & C = 1 \\ \hline
BPL & N = 0 \\ \hline
BMI & N = 1 \\ \hline
   BVC & V = 0 \\ \hline
   BVS & V = 1 \\ \hline
\end{tabular}}
  \qquad
  \subfloat[][Instrukcje]{\begin{tabular}{|l|c|}
\hline
   \textbf{OC} & \textbf{Działanie} \\ \hline
CLC & Z = 0 \\ \hline
   SEC & Z = 1 \\ \hline
   CLI & I = 0 \\ \hline
SEI & I = 1 \\ \hline
CLV & V = 1 \\ \hline
CLD & D = 0 \\ \hline
   SED & D = 1 \\ \hline
\end{tabular}}
\end{table}
### Przykładowe programy
Konwersja do BCD:
\begin{minted}{nasm}
bcdconv lda #0
sta res
sta res+1
ldx #8
sed
loopasl val
lda res
adc res
sta res
lda res+1
adc res+1
sta res+1
dex
bne loop
cld
rts

val dta b(%01101101)

res dta b(0),b(0)
\end{minted}
Konwersja do tekstu szesnastkowego:
\begin{minted}{nasm}
hex pha
jsr digit
pla
lsr @
lsr @
lsr @
lsr @
digit   and #%00001111
ora #'0'
cmp #'9'+1
bcc pr
adc #'A'-'9'-2
pr  sta ($80),y
dey
rts
\end{minted}