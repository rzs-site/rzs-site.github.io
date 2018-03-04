---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Procesor ARM
\begin{quote}{PaKman}
Battle Royale to gatunek gier, który zapoczątkowany został przez mod do gry ARMA 2... O~przepraszam, to nie to okno.
\end{quote}
ARM (Advanced RISC Maschine) jest architekturą procesorów z kategorii RISC - zmniejszony zbiór instrukcji, zwiększona ilość rejestrów. ARM jest obecnie architekturą bardzo popularną w systemach wbudowanych, a także w urządzeniach mobilnych.
### Tryby pracy
\begin{description}
* [User mode (usr)] - normalny tryb wykonywania kodu
* [FIQ mode (fiq)] - obsługa szybkich przerwań (np. obsługa transferu danych)
* [IRQ mode (irq)] - obsługa przerwań
* [Supervisor mode (svc)] - tryb chroniony dla systemu operacyjneg
* [Abort mode (abt)] - tryb w który przechodzi procesor po wykonaniu instrukcji abort
* [Undefined mode (und)] - tryb wywołany przez wykonanie niezdefiniowanej instrukcji
\end{description}
### Rejestry
W przeciwieństwie do architektury x86, ARM posiada więcej rejestrów:

* Rejestry ogólne: \textbf{R0 - R7}
* Rejestry ogólne zachowywane podczas szybkich przerwań: \textbf{R8 - R12}
* Rejestry stosu i powrotu: R13 (SP - Stack Pointer), R14 (LR - Link Register)
* Licznik programu: R15 (PC - Program Counter)
* Rejestr stanu: CPSR (Current Processor State Register)


Część trybów pracy posiada własne ``kopie'' rejestrów:
\begin{description}
* [FIQ] - rejestry R8 - R14
* [SVC, ABT, IRQ, UND] - rejestry R13, R14
\end{description}

### Flagi procesora
Obecne flagi są ustawione w rejestrze stanu procesora: CPSR.
\begin{table}[h]
\centering
\caption{Znaczenie bitów rejestru CPSR}
\begin{tabular}{|l|l|p{8cm}|}
\hline
\textbf{bit} & \textbf{skrót} & \textbf{opis} \\ \hline
0-4 & M & tryb procesora \\ \hline
5 & T & Thumb state - alternatywny zestaw instrukcji (kodowany na 16 bitach) \\ \hline
6 & F & zablokowanie szybkich przerwań \\ \hline
7 & I & zablokowanie przerwań \\ \hline
8 & A & ``imprecise data abort disable bit''\footnote{\url{http://infocenter.arm.com /help/index.jsp?topic=/com.arm.doc.ddi0344b/BEIIEECF.html}} \\ \hline
9 & E & bit kolejności bajtów \\ \hline
10 - 15 i 25-26 & IT & bity stanu if-then \\ \hline
16-19 & GE & bity ``większy lub równy'' \\ \hline
24 & J & zestaw instrukcji Jazelle \\ \hline
27 & Q & bit niedomiaru / saturacji \\ \hline
28 & V & bit oVerflow \\ \hline
29 & C & bit Carry \\ \hline
30 & Z & bit zera \\ \hline
31 & N & bit wartości ujemnej \\ \hline
\end{tabular}
\end{table}
#### Ustawianie flag
\subsubsection{Carry}
\begin{description}
* [dodawanie(ADD, CMN)] 
Flaga carry zostanie zapalona, jeśli liczba nie zmieści się w zakresie
* [odejmowanie(SUB, CMP)]
Flaga carry zostanie zapalona, jesli \textbf{NIE} było `'`pożyczenia bitu'' w odejmowaniu.
Jeśli bit został ``pożyczony'' flaga jest zgaszona
   * [przesunięcia]
Flaga będzie ustawiona na ostatni z bitów które przesunęliśmy
\end{description}

\subsubsection{Overflow}
Flaga overflow zostanie zapalona, gdy wynik dodawania lub odejmowania jest \\(\geq 2^{31}\\) lub \\(< -2^{31}\\)

### Składnia instrukcji
Każda instrukcja w procesorze ARM (w podstawowym zestawie instrukcji) jest kodowana na 32 bitach.
Dodatkowo pierwsze 4 bity są przeznaczone na kodowanie warunku, tzn. każda instrukcja jest instrukcją warunkową, co umożliwia znaczne uproszczenie programów i zmniejszenie ilości rozgałęzień, np.
\begin{minted}{c}
if (r1 > r2)
r1 -= r2
else
r2 -= r1
\end{minted}
Można przetłumaczyć na
\begin{minted}{text}
cmpr1, r2  ; porównaj r1 r2 
subgt  r1, r1, r2  ; jeśli r1 > r2, r1 -= r2 
suble  r2, r2, r1  ; jeśli r1 <= r2, r2 -= r1
\end{minted}









### Wybrane rozkazy procesora
Pamiętajmy, że każda instrukcja może zawierać warunek wykonania
\begin{description}
* [` LDR reg, addr `] - załaduj adres \textit{addr} do rejestru \textit{reg}
* [` LDR reg1, [reg2] `] - załaduj wartość spod adresu zawartego w \textit{reg2} do rejestru \textit{reg1}
* [` STR reg1, [reg2] `] - zapisz zawartość rejestru reg1 pod komórkę pamięci o adresie zawartym w rejestrze reg2
* [` MOV reg1, reg2 `] - skopiuj zawartość reg2 do reg1
* [` B addr `] - skok pod adres addr
* [` BL addr `] - skok pod adres addr, skopiuj zawartość r15 do r14
* [` CMP reg, (reg| const) `] - porównaj wartości i ustaw flagi
* [` ADD dest, src, operand  `] - dodaj operand do src i przechowaj w dest
* [` SUB dest, src, operand  `] - odejmij operand od src i przechowaj w dest
\end{description}

Hint: Instrukcje ADD i SUB mają odmiany ustawiające flagi, odpowiednio: ADDS, SUBS.

Więcej informacji na temat architektury ARM można znaleźć m. in. na OSDev Wiki, \url{https://wiki.osdev.org/ARM_Overview}
### Przykładowe programy i zadania
\begin{zadanie}[3pt]
Procesor o architekturze ARM wykonuje następujący kod: 
\begin{minted}{text}
LDRR1, =STALA_A
LDRR2, =STALA_B
SUBS   R0, R1, R2
\end{minted}
Jak po wykonaniu rozkazu SUBS ustawione zostaną bity przeniesienia C (ang. carry), nadmiaru V (ang. overflow) i~zera Z (ang. zero) dla poniższych wartości STALA\_A, STALA\_B: \\[10pt]
\begin{tabular}{|l|l|l|l|l|}
\hline 
STALA\_A & STALA\_B & przeniesienie C & nadmiar V & zero Z \\
\hline
-1 & 1 & & & \\
\hline
150 & -28 & & & \\
\hline 
127 (?) & -128 (?) & & & \\
\hline
\end{tabular} 
\end{zadanie}

\begin{zadanie}[3pt]
Jaka liczba (używamy reprezentacji U2) znajduje się w rejestrze R0 po wykonaniu poniższego kodu?
\begin{minted}{text}
MOV r0, #0
MOV R1, #10
again   ADD R0, R0, R1
SUBS R1, R1, #1
BNE again
\end{minted}
Wartość rejestru R0 = 0x \_ \_ \_ \_ \_ \_ \_ \_ (szesnastkowo) po wykonaniu kodu. Opisz krótko dlaczego.
\end{zadanie}   