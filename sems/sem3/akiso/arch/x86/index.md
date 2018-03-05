---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Procesor architektury x86
"Ja Państwu nie każę pisać w assemblerze" - 4D 5A

Najpopularniejszą 32-bitową architekturą procesorów spotykanych w komputerach jest architektura x86 (dokładniej x86-32, zwana także IA-32). Jest ona zaliczana do kategorii CISC (akronim od ang. \textit{Complex Instruction Set Computing}), tzn. zawiera złożone instrukcje, wiele trybów adresowania, bezpośrednie odwołania do pamięci.

Historia tej architektury rozpoczyna się w roku 1985, kiedy wychodzi procesor 80386, rozszerzający 16-bitową architekturę x86-16 (8086 - 80286). Architektura była rozwijana i ulepszana, np. przez przetwarzanie potokowe, superskalarność, przewidywanie rozgałęzień\footnote{Jest to obecnie gorący temat, w związku z atakami Spectre i Meltdown, które wykorzystują lukę w tym ulepszeniu do uzyskania nieuprawnionego dostępu do danych, zobacz: \url{https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html}}, wielordzeniowość.
### Rejestry
W podstawowej wersji architektury dostępne są następujące rejestry ogólnego przeznaczenia:
\subsubsection{Rejestry danych}
\begin{description}
* [EAX] - akumulator
* [EBX] - rejestr bazowy
* [ECX] - rejestr licznika
* [EDX] - rejestr danych
\end{description}

\subsubsection{Rejestry adresowe}
\begin{description}
* [ESI] - rejestr źródła
* [EDI] - rejestr celu
* [EBP] - wskaźnik podstawy stosu
* [ESP] - wskaźnik szczytu stosu
\end{description}

\subsubsection{Rejestry segmentowe}
Zestaw 16-bitowych rejestrów służących do określania adresów segmentów w trybie rzeczywistym oraz jako selektory w trybie chronionym
\begin{description}
* [CS] - rejestr segmentu kodu
* [DS] - rejestr segmentu danych
* [SS] - rejestr segmentu stosu
* [ES, FS, GS] - rejestry pomocnicze segmentu danych
\end{description}

\subsubsection{Rejestry specjalnego przeznaczenia}
\begin{description}
* [EIP] - licznik programu
* [EFLAGS] - rejestr stanu procesora
* [inne] - rozszerzenia (FPU/MMX, SSE), rejestry kontrolne
\end{description}

\subsubsection{Rejestry mniejszych rozmiarów}
Z rejestrów danych, adresowych, EIP oraz EFLAGS można korzystać jak z rejestrów 16-bitowych (rejestry takie oznacza się przez pominięcie litery E, tzn. EAX \\(\mapsto\\) AX.

Dodatkowo, do rejestrów danych i adresowych można się odwoływać do starszego i młodszego bajtu 16-bitowego rejestru, oznaczanych odpowiednio literami H i L, tzn. starszy bajt 16-bitowej części akumulatora, to AH.

\begin{minted}{text}
|   EAX|
+----------------+-----------------+
||   AX|
+----------------+--------+--------+
||   AH   |   AL   |
+----------------+--------+--------+
Schemat: Subrejestry
\end{minted}

### Flagi procesora
Jednym z ważniejszych dla przebiegu wykonania kodu rejestrem jest rejestr EFLAGS. Przechowywany jest w nim stan procesora, głównie zmieniany przez instrukcje, porównania itp.
\begin{table}[h]
\centering
\caption{Znaczenie bitów rejestru EFLAGS}
\begin{tabular}{|l|l|p{8cm}|}
\hline
\textbf{bit} & \textbf{skrót} & \textbf{opis} \\ \hline
0 & CF & flaga przeniesienia \\ \hline
1 & 1 & zarezerwowane \\ \hline
2 & PF & flaga parzystości \\ \hline
3 & 0 & zarezerwowane \\ \hline
4 & AF & flaga wyrównania \\ \hline
5 & 0 & zarezerwowane \\ \hline
6 & ZF & flaga zera \\ \hline
7 & SF & flaga znaku \\ \hline
8 & TF & flaga pracy krokowej  \\ \hline
9 & IF & flaga przerwań \\ \hline
10 & DF & flaga kierunku \\ \hline
11 & OF & flaga przepełnienia \\ \hline
12,13 & IOPL & poziom uprzywilejowania (tryb chroniony) \\ \hline
14 & NT & flaga zadania zagnieżdżonego \\ \hline
15 & 0 & zarezerwowane \\ \hline
16 & RF & flaga wznowienia \\ \hline
17 & VM & flaga trybu wirtualnego 8086 \\ \hline
18 & AC & sprawdzenie wyrównania \\ \hline
19 & VIF & flaga przerwania wirtualnego \\ \hline
20 & VIP & oczekujące przerwanie wirtualne \\ \hline
21 & ID & identyfikacja \\ \hline
22 - 31 & 0 & zarezerwowane \\ \hline
\end{tabular}
\end{table}

#### Ustawianie flag przez operacje
\subsubsection{Carry}
Ustawiana, gdy przy operacji wyjdziemy poza zakres. \\
Przykład:
\begin{minted}{nasm}
mov eax, 0xFFFFFFFF
add eax, 1 ; CF = 1, EAX = 0
\end{minted}

#### Overflow
Flaga overflow jest ustawiana przy dodawaniu i odejmowaniu równolegle do flagi carry, i mówi ona o ``anomaliach'' przy wykonywaniu operacji na liczbach ze znakiem. Jak flaga carry mówiła, że wynik nie zmieścił się w zakresie, tak flaga overflow mówi o tym, że doszło do anomalii znaku, tzn. patrzymy jedynie na bity znaku (najbardziej znaczące bity):

* 1 + 1 \\(\mapsto\\) 0, czyli dodajemy dwie liczby ujemne i otrzymujemy dodatnią
* 0 + 0 \\(\mapsto\\) 1, czyli dodajemy dwie dodatnie i otrzymujemy ujemną


Przykład:
\begin{minted}{nasm}
mov al, 127
add al, 127 ; AL = 254 (-2 w U2), 0F = 1
\end{minted}
### Tryby adresowania
Procesory architektury x86 umożliwiają kilka trybów adresowania instrukcji (por. kategoria CISC), :

* Rejestrowe - operandem jest zawartość rejestru 
* Bezpośrednie  - bezpośrednio podana wartość operandu
* Pośrednie - wartość operandu znajduje się w pamięci pod podanym adresem
* Pośrednie z przemieszczeniem - jak wyżej, z tym że można dodać stałą do adresu
* Pośrednie Rejestrowe  - adres pod którym znajduje się wartość znajduje się w rejestrze (rejestry EBX, EBP, ESI, EDI)
* Bazowe z przemieszczeniem - korzystanie z adresu jako wskaźnika na pierwszy element tablicy (por. tablice w C)
* Bazowo-indeksowe - korzystając z dwóch rejestrów wyliczamy adres, pod którym jest wartość operandu
* Bazowo-indeksowe z przemieszczeniem - jak wyżej, plus stała

\begin{minted}{nasm}
mov eax, ebx  ; Rejestrowe
mov eax, 1; Bezpośrednie
mov eax, [02E0h]  ; Pośrednie
mov eax, tablica[2]   ; Pośrednie z przemieszczeniem
mov eax, [edi]; Pośrednie rejestrowe
mov eax, tablica[ebx] ; Bazowe z przemieszczeniem
mov eax, [ebx + edi]  ; Bazowo-indeksowe
mov eax, [ebx + edi + 10] ; Bazowo-indeksowe z przemieszczeniem
\end{minted}
#### Etykiety
Dzięki możliwości stosowania etykiet w asemblerze, zyskujemy przede wszystkim więcej elastyczności i odporności na modyfikację kodu (dodanie jednej linijki na początku programu, przy braku etykiet wymagałby zmiany wszystkich adresów). Dodatkowo niektóre asemblery (np. NASM) umożliwiają tzw. etykiety lokalne, czyli w zakresie od poprzedniej etykiety nielokalnej. Dzięki temu popularne etykiety, jak ` .loop `, ` .else `, czy ` .end ` moga być wykorzystane wielokrotnie w jednym programie.

\subsubsection{Przykład}
\begin{minted}{nasm}
funkcja:; etykieta
mov eax, 0
mov ecx, 5
.loop:  ; etykieta lokalna
cmp ecx, 0
jz  .end; skok do etykiety lokalnej z zakresu (poza nim funkcja.end)
add eax, ecx
jmp .loop
.end:
ret
\end{minted}
### Wybrane rozkazy procesora
Przyjmujemy oznaczenia: ` reg ` - rejestr, ` addr ` - adres
#### Przesyłanie danych
\begin{description}
* [` MOV dest, src `] - kopiowanie danych z \textit{src} do \textit{dest}
* [` PUSH src `] - wstawienie na szczyt stosu wartości \textit{src}
* [` POP dest `] - zdejmuje wartość ze stosu i wstawia do \textit{dest}
* [` LEA reg, addr `] - do \textit{reg} ładuje adres \textit{addr}
\end{description}
#### Arytmetyczne i logiczne
\begin{description}
* [` ADD dest, src `] - dodawanie (dest := dest + src)
* [` ADC dest, src `] - dodawanie z przeniesieniem (dest := dest + src + CF)
* [` SUB dest, src `] - odejmowanie (dest := dest - src)
* [` SBB dest, src `] - dodawanie z przeniesieniem(dest := dest - src - CF)
* [` SHL dest, (const|cl) `] - przesunięcie bitowe w lewo
* [` SHR dest, (const|cl) `] - przesunięcie bitowe w prawo
* [` MUL src `] - mnożenie bez znaku (EDX:EAX := EAX  * src)
* [` IMUL src `] - mnożenie ze znakiem (EDX:EAX := EAX  * src)
* [` IMUL reg, src `] - mnożenie ze znakiem (reg := reg * src)
* [` DIV src `] - dzielenie ze znakiem (EAX := (int)(EDX:EAX  / src); EDX := EDX:EAX mod src)
* [` IDIV src `] - dzielenie ze znakiem (EAX := (int)(EDX:EAX  / src); EDX := EDX:EAX mod src)
* [` AND dest, src `] - bitowe `i' (dest := dest \& src)
* [` OR dest, src `] - bitowe `lub' (dest := dest \\(|\\) src)
* [` XOR dest, src `] - alternatywa wykluczająca\footnote{często stosowane do zerowania rejestru: ` xor eax, eax `} (dest := dest \^{} src)
* [` CMP dest, src `] - porównanie
\end{description}
#### Skoki
\begin{description}
* [` JMP addr `] - skok bezwarunkowy
* [` JE addr `] - skok, gdy równe
* [` JNE addr `] - skok, gdy nierówne
* [` JZ addr `] - skok, gdy ustawiony bit zera
* [` JNZ addr `] - skok, gdy wyczyszczony bit zera
* [` JG addr `] - skok, gdy większe
* [` JGE addr `] - skok, gdy większe lub równe
* [` JL addr `] - skok, gdy mniejsze
* [` JLE addr `] - skok, gdy mniejsze lub równe
* [` LOOP addr `] - ` ECX := ECX - 1 `, skok, gdy ` ECX \\(\neq\\) 0 `
* [` CALL addr `] - wstaw na stos adres następnej instrukcji i skocz pod ` addr `
* [` RET `] - pobierz ze stosu adres powrotu i skocz
\end{description}
#### Inne
\begin{description}
* [` IN port `] - pobierz dane z portu I/O
* [` OUT port `] - wyślij dane do portu I/O
* [` INT num `] - wywołaj przerwanie o numerze ` num `
\end{description}
### Sekcje
Jak wiadomo, program nie ma jednolitej struktury. Oprócz kodu wykonywalnego, przechowywane są także informacje dodatkowe oraz dane wykorzystywane przez program. 
#### .text
Sekcja ta zawiera kod programu, oczywiście, nie jest zabronione odczytywanie danych z tej sekcji, jednak najczęściej nie można zapisać danych do tej sekcji.
#### .data
Sekcja zawiera zainicjalizowane dane wraz z ich wartościami. Są one przechowywane w pliku obiektowym. Do tej sekcji można zapisywać i czytać.
#### .bss
Sekcja podobna do ` .data `, jednak przechowująca dane niezainicjalizowane, tzn. przechowuje w pliku obiektowym informację o rozmiarze danych.
### Stos
Jednym z ważniejszych regionów w pamięci jest stos. Stos jest miejscem w pamięci (zwykle początek w wysokich adresach, stos ``rośnie'' w dół), na którym możemy operować jedynie na elemencie ze szczytu (przy użyciu tej pamięci jako stosu, bez problemu można się odwoływać do tej pamięci w sposób ``klasyczny''.

Opis stosu jest tworzony przez parę rejestrów : ` EBP ` i ` ESP `. Pierwszy wskazuje na podstawę stosu (jest to przydatne m. in. do mechanizmu zmiennych lokalnych), natomiast ` ESP `, wskazuje na najwyższy element.

  Ze stosu możemy korzystać z instrukcji ` push ` i ` pop `, ktore wykonują (znacznie szybciej niż poniższy kod) operacje odpowiednio wstawienia i zdjęcia ze stosu elementu:
\begin{minted}{nasm}
push_eax: ; równoważne push eax
sub esp, 4
mov [esp], eax

pop_eax:  ; równoważne pop eax
mov eax, [esp]   
add esp, 4
\end{minted}

### Konwencje wywołań podprogramów
Kiedy tworzymy podprogram (funkcję, procedurę) zwykle potrzebujemy przekazać jej jakieś parametry oraz odebrać wynik jej działania. Jak wiadomo, programiści nie lubią się męczyć, dlatego tworzą oni standardy, protokoły komunikacji, interfejsy API, które ujednolicają komunikację między modułami. 

Gdyby nie istniał wspólny sposób komunikacji pomiędzy komponentami, tworzenie nowych porcji kodu byłoby bardzo trudne. Na poziomie kodu maszynowego, najważnejszym ``protokołem'' jest konwencja wywołania (\textit{ang. calling convention}), która opisuje, w jaki sposób przekazywać parametry, gdzie znajduje się wynik oraz które rejestry są zachowywane podczas wywołania. Dodatkowo, konwencja wywołania określa, kto sprząta stos po zakończeniu procedury (niesie to bardzo poważne implikacje).
#### Ramka stosu
Podczas analizy kodu generowanego przez GCC w większości funkcji można natrafić na następujący ciąg instrukcji:
\begin{minted}{nasm}
pushebp
mov ebp, esp
\end{minted}
Powyższy kod ustawia tak zwaną ramkę stosu, tzn. odkłada na stos poprzedni adres podstawy stosu, a~obecny szczyt uznajemy za podstawę stosu w~kontekście naszej funkcji. 

Następnie następuje przygotowanie miejsca dla zmiennych lokalnych:
\begin{minted}{nasm}
sub esp, X
\end{minted}
   W ten sposób zarezerwowaliśmy \\(X\\) bajtów. Do odwoływania się do zmiennych będziemy wykorzystywać rejestr \mintinline{nasm}{ebp} z odpowiednim przesunięciem.

Oczywiście, bezpośrednio przed powrotem z funkcji, musimy przywrócić poprzedni stan stosu, więc wywołujemy operacje przeciwne, w odwrotnej kolejności (pomijając rezerwację miejsca na zmienne, ponieważ szczyt stosu i tak zostaje odrzucony):
\begin{minted}{nasm}
mov esp, ebp
pop ebp
\end{minted}

#### Wybrane konwencje wywołań
Główny podział konwencji wywołań zależy od tego, kto czyści stos. W przypadku konwencji, w których wywołujący czyści stos, mamy możliwość realizacji funkcji o zmiennej liczbie argumentów (\textit{ang. variadic function}). Oczywiście istnieje wiele konwencji, które są stosowane przez różne kompilatory, środowiska, a szczególne różnice widać pomiędzy systemami operacyjnymi.
\subsubsection{Wywołujący czyści}
\textbf{CDECL} \par
Główna konwencja wywołań, powiązana z językiem C (C DECLaration) oraz przyjęta jako główna konwencja dla systemów rodziny UNIX.
\begin{description}
* [Argumenty] od prawej do lewej
* [Rejestry niezachowane] EAX, ECX, EDX
* [Rejestry zachowane] pozostałe
* [Wynik] EAX
\end{description}
\subsubsection{Wywoływany czyści}
\textbf{STDCALL} \par
Konwencja bardzo podobna do CDECL, stosowana głównie przez Windowsowe WINAPI. Główna różnica polega na tym, że to wywołana funkcja czyści stos
\begin{description}
* [Argumenty] od prawej do lewej
* [Rejestry niezachowane] EAX, ECX, EDX
* [Rejestry zachowane] pozostałe
* [Wynik] EAX
\end{description}
#### Wywołanie funkcji
Aby zebrać wszystkie informacje przeanalizujmy prostą funkcję, stosującą konwencję wywołań \textbf{cdecl}, która będzie miała dwie zmienne lokalne typu int (32-bitowe) oraz przyjmie dwa argumenty. Funkcja ma zwrócić sumę argumentów.
Opis adresów po ustawieniu ramki stosu:
 \begin{description}
* [\mintinline{nasm}{ebp+12}] \\(\mapsto\\) drugi argument
* [\mintinline{nasm}{ebp+8}] \\(\mapsto\\) pierwszy argument
* [\mintinline{nasm}{ebp+4}] \\(\mapsto\\) adres powrotu
* [\mintinline{nasm}{ebp+0}] \\(\mapsto\\) stara wartość ebp
* [\mintinline{nasm}{ebp-4}] \\(\mapsto\\) pierwsza zmienna 
* [\mintinline{nasm}{ebp-8}] \\(\mapsto\\) druga zmienna
\end{description}
   Listing funkcji:
\begin{minted}{nasm}
funkcja:; int f(int a, int b) {
pushebp
mov ebp, esp
sub esp, 8  ; int x,y;

mov eax, [ebp+8]; x = a;
mov [ebp-4], eax
mov eax, [ebp+12]   ; y = b;
mov [ebp-8], eax

mov eax, [ebp-4]; return x+y;
add eax, [ebp-8]

mov esp, ebp; }
pop ebp
ret
\end{minted}

Listing wywołania:
\begin{minted}{nasm}
; ...
push4
push3
callfunkcja; f(3, 4)
add esp, 8
; ...
\end{minted}
### Tryb rzeczywisty
Tryb rzeczywisty jest to 16-bitowy tryb, utrzymywany ze względu na kompatybilność wsteczną ze starszymi procesorami. Dlatego też, wszystkie procesory architektury x86 startują w trybie rzeczywistym i trzeba jawnie przejść w tryb chroniony. Obecnie, rzadko kiedy wykorzystuje się tryb rzeczywisty, ponieważ mamy dostęp jedynie do 20-bitowej przestrzeni adresowej (1 MB), nie ma wsparcia wielozadaniowości ani ochrony pamięci (swobodny dostęp do całej pamięci). 
Przez uruchomienie procesora w trybie rzeczywistym, BIOS oraz bootloadery pracują w trybie rzeczywistym, gdzie bootloadery starają się bardzo szybko przejść do trybu chronionego.
### Tryb chroniony
Tryb chroniony jest bardziej rozbudowanym trybem. Jest on całkowicie 32-bitowy, pozwala zaadresować 4 gigabajty pamięci, a przede wszystkim udostępnia nam pamięć wirtualną i mechanizm stronicowania pamięci. Dodatkowo udostępnia on możliwość wirtualizacji procesora 8086 (tryb wirtualny 8086) oraz mechanizmy sprzętowej wielozadaniowości. Większość rozszerzeń zbioru instrukcji jest dostępna jedynie w trybie chronionym.
#### Przejście w tryb chroniony
Aby poprawnie przejść do trybu chronionego należy:

* Zablokować przerwania (instrukcja ` cli `)
* Odblokować linię A20
* Stworzyć i załadować GDT (Global Descriptor Table) z deskryptorami segmentów kodu, danych i stosu
* Ustawić zerowy bit rejestru kontrolnego CR0

### Przykładowe programy i zadania
\begin{zadanie}
Przeanalizuj krótki program w asemblerze x86.
\begin{minted}{nasm}
MOV AL, L1
MOV BL, L2
CLC 
ADC AL, BL  
  \end{minted}
  Uzupełnij w tabeli wartość flag po wykonaniu programu. \\[10pt]
  \begin{tabular}{|l|l|l|l|l|}
  \hline 
L1 & L2 & CF (carry flag) & OF (overflow flag) & ZF (zero flag) \\ \hline
-1 & 1 & & & \\ \hline
150 & -28 & & & \\ \hline 
127 & -128 & & & \\ \hline
  \end{tabular} 
\end{zadanie}
\begin{rozwiazanie}

* ` L1 = -1, L2 = 1 `
Jak wiemy, procesor nie zna bezpośrednio pojęcia `znaku' liczby i operuje jedynie na wartościach bitowych. Zatem liczby przekształcamy zgodnie z kodowaniem U2 i uzyskujemy:
   \mint{text}|AL = 0xFF, BL = 0x01|
Dodajemy je (jak dwie liczby bez znaku) i otrzymujemy:
\mint{text}|wynik = 0x100 => AL = 0x00, CF = 1, OF = 0, ZF = 1|

* ` L1 = 150, L2 = -28 `
Wstawienie 150 interpretujemy jako wstawienie liczby bez znaku: 
\[150 = (10010110)_2 = (96)_{16}\] 
Drugą liczbę przekształcamy zgodnie z kodowaniem U2:
\[ -28 = -(0001110)_2 = (1110010)_{U2} = (72)_{16} \]
Otrzymane wartości wstawiamy do rejestrów i obliczamy wynik
\mint{text}|AL = 0x96, BL = 0x72|
\mint{text}|wynik = 0x108 => AL = 0x08, CF = 1, OF = 1, ZF = 0|

* ` L1 = 127, L2 = -128 `
Wstawienia dokonujemy analogicznie
\mint{text}|AL = 0x7F, BL = 0x80|
Obliczamy sumę
\mint{text}|wynik = 0xFF => AL = 0xFF, CF = 0, OF = 0, ZF = 0|

\end{rozwiazanie}

\begin{zadanie}
  Przeanalizuj krótki program w asemblerze x86 i uzupełnij wynik. Liczby są zapisane w U2. \\
\begin{minted}{nasm}
XOR EAX, EAX
NOT EAX
PETLA:  ADC EAX, 4
JC PETLA 
\end{minted}
WYNIK: 0x\_ \_ \_ \_ \_ \_ \_ \_ . Dlaczego taki?
\end{zadanie}

\begin{rozwiazanie}
Rozpoczynamy nie znając wartości EAX, jednak już pierwsza linijka zeruje rejestr.
\mint{nasm}|XOR EAX, EAX; EAX = 0|
\mint{nasm}|NOT EAX; EAX = 0xFFFFFFFF|
Następnie wykonujemy dalej
\mint{nasm}|ADC EAX, 4; EAX = 0x00000003; CF = 1|
Flaga Carry jest ustawiona więc wykonujemy skok
\mint{nasm}|JC PETLA|
Flaga Carry jest ustawiona, więc następna linijka dodaje 4 + CF, czyli 5
\mint{nasm}|ADC EAX, 4; EAX = 0x00000008; CF = 0|
Flaga Carry jest zgaszona więc nie wykonujemy skoku i kończymy wykonanie programu.

Ostatecznie, odpowiedzią jest ` 0x00000008 `
\end{rozwiazanie}