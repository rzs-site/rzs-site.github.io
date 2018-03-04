---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Język C
\begin{quote}{Erwin Dietrich}
Ostatnią naprawdę dobrą rzeczą napisaną w C była 
9. Symfonia Schuberta
\end{quote}

Język C powstał w Bell Labs w latach 1969--1973, jego twórcą był
Dennis Ritchie. W roku 1973 udało się zaimplementować pierwszą
wersję jądra Uniksa. Pięć lat później Brian Kernighan i Dennis Ritchie 
opublikowali dokumentację języka pt. \emph{C Programming Language}.
C stał się popularny poza Bell Labs po 1980 roku 
i~stał się dominującym językiem do programowania systemów operacyjnych i 
aplikacji. Stąd poniższy rozdział będzie poświęcony językowi C
i jego podstawowymi konstrukcjami. Autor zakłada, że Czytelnik
miał już styczność z językiem C w sposób chociażby połowiczny.
Główna treść tego rozdziału będzie się opierać bardziej
na implementacyjnej naturze języka C i zachowania
kompilatorów, głównie GCC.
### Typy danych
Język C jest językiem o słabym\footnote{Słabym, to nie znaczy złym.} 
typowaniu statycznym. Głównie typy w języku C dzielimy na podstawowe
i złożone. 
#### Typy proste
Typami prostymi są zwyczajnie liczby całkowite, liczby zmiennoprzecinkowe,
znaki, wartości boolowskie, które są po prostu liczbami całkowitymi,
które interpretuje się następująco: jeśli liczba całkowita jest różna od
zera, jest to prawda, w przeciwnym wypadku jest to fałsz. Wszelkie typy proste
będą opisane w~tabeli~\ref{tab:primitive-types}.

\begin{table}[p]
\centering
\caption{Typy proste dla kompilatora GCC i MinGW (32-bitowe)}
\label{tab:primitive-types}
\begin{tabular}{|l|p{4cm}|r|r|r|}
\hline
\textbf{Typ} & \textbf{Opis} 
& \textbf{Wielkość} & \multicolumn{2}{|c|}{\textbf{Przedział wartości}} \\ \hline
\multicolumn{5}{|c|}{\textit{Liczby całkowite w kodzie uzupełnieniowym do dwóch}} \\ \hline
\mintinline{c}{char} & Znak w kodzie ASCIII & 1 & \\(-2^7\\)&\\(2^7-1\\) \\ \hline
\mintinline{c}{unsigned char} & Znak w kodzie ASCIII bez znaku & 1 & \\(0\\)&\\(2^8 - 1\\) \\ \hline
\mintinline{c}{short int} & Liczba całkowita krótka & 2 & \\(-2^{15}\\)&\\(2^{15} - 1\\) \\ \hline
\mintinline{c}{unsigned short int} & Liczba całkowita krótka bez znaku & 2 & \\(0\\)&\\(2^{16} - 1\\) \\ \hline
\mintinline{c}{int} & Liczba całkowita & 4 & \\(-2^{31}\\)&\\(2^{31} - 1\\) \\ \hline
\mintinline{c}{unsigned int} & Liczba całkowita bez znaku & 4 & \\(0\\)&\\(2^{32} - 1\\) \\ \hline
\mintinline{c}{long int} & Liczba całkowita długa & 4
& \\(-2^{31}\\)&\\(2^{31} - 1\\) \\ \hline
\mintinline{c}{unsigned long int} & Liczba całkowita długa bez znaku & 4 & \\(0\\)&\\(2^{32} - 1\\) \\ \hline
\mintinline{c}{long long int} & Liczba całkowita bardzo długa & 8 & \\(-2^{63}\\)&\\(2^{63} - 1\\) \\ \hline
\mintinline{c}{unsigned long long int} & Liczba całkowita bardzo długa 
bez znaku & 8 & \\(0\\)&\\(2^{64} - 1\\) \\ \hline
\multicolumn{5}{|c|}{\textit{Liczby zmiennoprzecinkowe w standardzie IEEE-457}} \\ \hline
\mintinline{c}{float} & Liczba zmiennoprzecinkowa pojedynczej precyzji & 4 
& \\(2^{-126}\\)&\\(2\left(1 - \frac{1}{65536}\right) \cdot 2^{127}\\) \\ \hline
\mintinline{c}{double} & Liczba zmiennoprzecinkowa podwójnej precyzji & 8
& \\(2^{-1022}\\)&\\(2\left(1 - \frac{1}{65536}\right) \cdot 2^{1023}\\) \\ \hline
\mintinline{c}{long double} & Liczba zmiennoprzecinkowa poczwórnej precyzji & 10
& \\(2^{-16382}\\)&\\(2\left(1 - \frac{1}{65536}\right) \cdot 2^{16383}\\) \\ \hline
\multicolumn{5}{|c|}{\textit{Rozszerzenia kompilatora}} \\ \hline
\mintinline{c}{bool} & Typ boolowski & 1 & \\(-2^7\\)&\\(2^7 - 1\\) \\ \hline
\end{tabular}
\end{table}
#### Typy złożone
Typami złożonymi nazywamy typy powstałe z innych typów złożonych, bądź prostych.
W zależności od~rodzaju typu złożonego, mamy różne zachowania towarzyszące
rozmieszeniu danej zmiennej typu złożonego w~pamięci. Informacje,
które opisują dogłębnie wszystkie typy złożone, można znaleźć
w~tabeli~\ref{tab:comp-types}.

\begin{table}[p]
\label{tab:comp-types}
\centering
\caption{Typy złożone w języku C}
\begin{tabular}{|l|p{5cm}|p{7cm}|}
\hline
\textbf{Nazwa konstrukcji} & \textbf{Przykład} & \textbf{Opis} \\ \hline
Tablica & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
int array[10];
\end{minted}
\end{minipage}
& Ciągła struktura danych, która przypomina
ciągłą alokację \\(n\\) zmiennych o tym
samym typie. W przykładzie
rezerwujemy tablice dziesięcioelementową 
o elementach typu \mintinline{c}{int}.
Kompilator w takim wypadku
rezerwuje na stosie dokładnie \\(ns\\)
bajtów, gdzie \\(s\\) to wielkość
typu elementów tablicy.\\ \hline
Struktura & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
struct address_t {
int port;
char hostname[64];
};
\end{minted}
\end{minipage}
& Heterogeniczna struktura danych,
która zawiera w sobie nazwane elementy 
o różnych typach. By odwołać się
do elementu ze zmiennej, będącą
instancją struktury, korzystamy 
z notacji \mintinline{c}{struktura.pole},
bądź \mintinline{c}{wskaznik_do_struktury->pole}.
Kompilator ustala wielkość na podstawie
różnych strategii; jedna z nich
będzie opisana w tym rozdziale.\\ \hline
Unia & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
union ipv4_t {
char nibble[4];
int address;
};
\end{minted}
\end{minipage}
& Struktura danych pozwalająca na
interpretację danej na różny sposób.
Przykład pokazuje szybką konwersję
zmiennej typu \mintinline{c}{int}
na tablicę czterech bajtów i odwrotnie. 
Wielkość
unii jest uzależniona od największego typu
będącego członkiem unii. Każdy
element unii zaczyna się w tym samym miejscu,
tzn. każdy członek ma taki sam adres początkowy,
lecz nie końcowy. \\ \hline
Pole bitowe & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
struct flags_t {
unsigned carry : 1;
unsigned zero : 1;
unsigned overflow : 1;
};
\end{minted}
\end{minipage}
& Struktura danych pozwalająca na
łatwą manipulację danych,
które są mniejsze niż jeden bajt.
Pole bitowe jest wielkości wszystkich
szerokości podanych po dwukropku,
zaokrąglając do całych bajtów.
Szerokość musi nie przekraczać typu
danego pola w polu bitowym.\\ \hline
Wyliczenie & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
enum state_t {OFF, STARTED, 
STOPPED, OFF};
\end{minted}
\end{minipage}
& Typ wyliczeniowy. Każdy członek domyślnie
wylicza się od zera i kolejno o jeden więcej,
zgodnie z listą w deklaracji typu.\\ \hline
Wskaźnik & 
\begin{minipage}[t]{5cm}
\begin{minted}{c}
int *ptr;
int **mptr;
\end{minted}
\end{minipage}
& Wskaźnik odwołuje się do innego miejsca w pamięci.
By odwołać się do danej w innym miejscu w pamięci,
korzystamy z operatora dereferencji 
(\mintinline{c}{*ptr = 8}). By ustawić
wskaźnik na wybraną zmienną, przypisuje
się do wskaźnika adres danej zmiennej
(\mintinline{c}{ptr = &foo}). Wskaźniki
po assemblacji są zamieniane
na adresowanie pośrednie.\\ \hline
\end{tabular}
\end{table}
### Funkcje
Funkcje są to podprogramy realizujące jedno zadanie,
które zwracają jakiś wynik, bądź powodują jakieś
efekty uboczne. Funkcje, w przypadku procesorów x86,
są realizowane w postaci kodu oznaczonego etykietą,
którego wykonuje się zgodnie z wybraną konwencją
wywołania zależną od systemu. 

W wypadku Linuksa, stosuje się wariant ` cdecl `, 
który wygląda zgrubnie następująco.
Opis będzie rozkładał się na~wywołującego i wywoływanego.
\begin{enumerate}
* Odłóż argumenty potrzebne dla tej funkcji na stos
od prawej do lewej, biorąc listę argumentów funkcji.
Podobnie dla koprocesora x87.
* Wywołaj funkcję.
\begin{enumerate}[a)]
  * Odłóż na stos stary wskaźnik ramki stosu.
  * Zapisz aktualną pozycję stosu na wskaźnik ramki stosu
  * Odłóż na stos rejestry, które muszą być nienaruszone
  według konwencji.
  * Wykonaj kod funkcji.
  * Gdy ma dojść do zwrócenia wartości funkcji, rezultat
  jest odkładany w rejestrze ` eax `.
  * Przywróć rejestry ze stosu, które muszą być nienaruszone
  według konwencji.
  * Przywróć stary wskaźnik ramki stosu.
  * Powróć do wywołującego.
\end{enumerate}
* Wyczyść stos z tymczasowych zmiennych funkcji wywołanej.
\end{enumerate}
Istnieją również inne konwencje wywołania, jednakże
na nasze potrzeby, taka wiedza jest wystarczająca.

### Wyrównywanie struktur
C jest językiem, mimo wszelkich pozorów, niskopoziomowym.
To znaczy, język C stanowi wysokopoziomową, łatwą
do zrozumienia, ,,wersją assemblera''. 

Problem, który zostanie tu poruszony, ze względu właśnie
assemblerowej natury języka C, jest alokacja struktury.
Struktura, jak wiemy, jest heterogeniczną strukturą danych,
która może zawierać dane o różnej wielkości. Problemem jest
ustalić kolejność występowania członków struktury i osadzić ich 
na liniowym odcinku pamięci. 

Naiwnym rozwiązaniem byłoby zarezerwowanie ciągłego odcinka
pamięci dla każdego z członka struktury po kolei. Jednakże to
rozwiązanie niesie kłopoty w postaci nieregularnego adresowania
danych. Wygenerowanie assemblera dla danych o takim
sposobie alokacji by było bardzo niewydajne, wymagałoby
wyliczania za każdym razem adresu w nieregularny sposób.
Również sprawia problem wyciąganie danych ze struktury.
Można sobie wyobrazić, że chcemy załadować wartość
pewnego członka struktury do rejestru, lecz
ten członek jest mniejszy od rejestru. Wobec tego,
co jest technicznie jak najbardziej możliwe, nie wczytamy
dokładnie wartości tego członka. Wymagałoby to specjalnych 
masek bitowych, co jeszcze bardziej pogrąża wydajność tego
rozwiązania.

Jest również inny sposób alokacji członków takiej struktury.
Alokujemy członków, wyrównując ich wielkość do pewnej, ustalonej wielkości
(o tym, do jakiej wartości się wyrównuje,
zostanie wspomniane później). To~podejście z angielskiego
nazywamy \emph{alignment}, czyli wyrównywanie.

#### Algorytm wyrównywania
W C stosuje się wyrównywanie struktur, które jest uzależnione od wielkości
typów. 

\begin{definition}
Adres \\(a\\) jest wyrównany do \\(n\\) bajtów, jeśli \\(a\\) jest
wielokrotnością \\(n\\) bajtów, gdzie \\(n\\) jest potęgą dwójki.
\end{definition}

\begin{definition}
Struktura jest wyrównana, jeśli przy dostępie
do danej o wyrównaniu do \\(n\\) bajtów wykorzystujemy
adres \\(a\\) wyrównany do \\(n\\) bajtów. W przeciwnym
wypadku struktura jest niewyrównana.
\end{definition}
\begin{table}
\centering
\caption{Tabela wyrównań typów dla GCC (x86, ARM)}
\label{tab:align-types}
\begin{tabular}{|l|r|}
\hline
\textbf{Typ} & \textbf{Wyrównanie} \\ \hline
\mintinline{c}{char} & 1 \\ \hline
\mintinline{c}{short} & 2 \\ \hline
\mintinline{c}{int} & 4 \\ \hline
\mintinline{c}{long} & 4 \\ \hline
\mintinline{c}{long long} & 4 \\ \hline
\mintinline{c}{float} & 4 \\ \hline
\mintinline{c}{double} & 4 \\ \hline
\mintinline{c}{long double} & 4 \\ \hline
dowolny wskaźnik & 4 \\ \hline
tablica & wyrównanie wg typu elementu \\ \hline
struktura & wyrównanie wg największego wyrównania w strukturze \\ \hline
\end{tabular}
\end{table}
Tabela typów, które muszą być wyrównane do \\(n\\) bajtów
dla ARM GCC i GCC (32-bitowe), znajduje się
jako~\ref{tab:align-types}. 

























































Ogólnie zasada obliczenia odpowiedniego wypełnienia dla każdego z pól
struktury odbywa się następująco. Przesunięciem (ang. \emph{offset}) będziemy nazywać
odległość (w bajtach) od początku struktury do pola, dla~którego
obliczamy offset, wraz z poprzednimi wypełnieniami, jeśli były już wyliczone. 
Dopasowaniem (ang. \emph{align}) będziemy nazywać jedną z wartości opisanej
w tabeli~\ref{tab:align-types}. Algorytm wygląda następująco:

* Jeśli pole struktury o danym typie ma przesunięcie będące wielokrotnością
dopasowania, to nie wymagane jest żadne wypełnienie.
* Jeśli pole struktury o danym typie nie ma przesunięcia będącego
wielokrotnością dopasowania, to dodajemy tyle bajtów wypełnienia przed tym polem,
by przesunięcie było wielokrotnością dopasowania (dodajemy \emph{padding}).

Na końcu wybiera się element o największym dopasowaniu i dodaje
się wypełnienie na końcu struktury, by~jej końcowy rozmiar
był równy wielokrotności tego największego dopasowania.
By uzmysłowić działanie tego algorytmu, możemy wykonać
\begin{zadanie}
Rozważamy poniższą deklarację struktury w C.
\begin{minted}{c}
typedef struct {
long a;
char b;
void *c;
short d[2][8];
} T;
\end{minted}
Ile bajtów zajmuje tablica \mintinline{c}{T t[10]} w architekturze
ARM (32-bitowej)? Odpowiedź uzasadnij.
\end{zadanie}

\begin{rozwiazanie}
Algorytm wyrównywania będzie pokazywany krok po kroku. Dla każdego
typu zastanawiamy się, czy przesunięcie jest wielokrotnością
dopasowania dla wybranego typu. Dopasowania są wymienione
w tabeli~\ref{tab:align-types}.

Weźmy na początek pole \mintinline{c}{long a}. Powyższe pole
ma przesunięcie równe \\(\delta_a = 0\\). To pole jest trywialnie dopasowane.
Weźmy zatem \mintinline{c}{char b}. Pole ma przesunięcie \\(\delta_b = 4\\).
To jest wielokrotność jedynki, więc żadne wypełnienie nie jest potrzebne.

Następne pole \mintinline{c}{void *c} jest wskaźnikiem. Przesunięcie
wynosi \\(\delta_c = 5\\). Nie jest to wielokrotność czwórki, dlatego
przed polem dodamy wypełnienie o wielkości trzech bajtów.
\begin{minted}{c}
typedef struct {
long a;
char b;
char pad1[3]; // padding dla pola c
void *c;
short d[2][8];
} T;
\end{minted}
Patrzymy na pole \mintinline{c}{short d[2][8]}. Widzimy, że to jest tablica 
dwuwymiarowa, jednakże ona jest równoważna (dla algorytmu) tablicy jednowymiarowej
szesnastoelementowej. Mamy więc przesunięcie \\(\delta_d = 5 + 3 = 8\\). Osiem
jest wielokrotnością dwójki, stąd padding nie jest potrzebny.

Największym dopasowaniem w tej strukturze było 4 (ze względu na pole 
\mintinline{c}{long a}). Wobec tego mamy rozmiar całej struktury
bez końcowego wypełnienia równy \\(4 + 1 + 3 + 4 + 16 = 28\\). Zauważamy, 
że 28 jest wielokrotnością 4, wobec tego nasza struktura została wyrównana
bez wypełniania końca struktury i~jej~rozmiar wynosi 28 bajtów.

Stąd możemy powiedzieć, że tablica ma rozmiar 280 bajtów.
\end{rozwiazanie}