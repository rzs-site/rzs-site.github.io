---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Obsługa wejścia-wyjścia
\begin{quote}{Dennis Ritchie, współtwórca systemu UNIX}
UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.
\end{quote}
System wejścia-wyjścia w systemach uniksopodobnych został
zaprojektowany w sposób najprostszy, to znaczy, w taki sposób
by zapewnić pewien polimorfizm między bytami, które można traktować
jak plik. Najmniejszym niepodzielnym
bytem w takim systemie jest sam plik. Zanim 
zaczniemy rozważać, przedyskutujemy pliki.
### Pliki
Abstrahując od szczegółów implementacyjnych w danym
systemie plików, plikiem nazywamy dowolny byt w systemie plików.
Za ten byt możemy rozumieć między innymi:

* zwyczajny plik binarny, bądź tekstowy,
* folder --- w systemach uniksowych jest zrealizowany
jako plik, który ma specjalną funkcjonalność --- zawiera inne pliki,
* urządzenie blokowe  --- urządzenie, które przechowuje dane
w sposób ciągły, może być to fragment pamięci RAM (np. pamięć
ramki bufora graficznego, tzw. \emph{framebuffer}), bądź 
dysk twardy, stacja dysków wymiennych, etc.
* ram dysk --- specjalny rodzaj pamięci tymczasowej
przechowywanej w pamięci RAM, szeroko stosowana w 
komputerach takich jak Amiga, czy Atari,
* inny zamontowany system plików --- w Linuksie
korzystamy z biblioteki FUSE, która pozwala nam
na korzystanie z innego systemu plików z wewnątrz
naszego obszaru roboczego (por. montowanie 
systemu FAT z pliku).
* nazwany potok (o którym wspomnę pod koniec rozdziału)
--- jest to plik, który działa jako kolejka FIFO
* gniazdko --- plik będący strumieniem danych
przesyłanych przez sieć komputerową.


Jak widać, plik jest dość ogólnym, polimorficznym bytem. 

### Hierarchia katalogów w ` / `
W każdym systemie uniksopodobnym występuje przeważnie podobna hierarchia plików,
która zostanie tutaj wymieniona. Cały system plików znajduje się w katalogu
głównym, oznaczanym jako ` / `. W katalogu głównym znajdują się takie
foldery jak:
\begin{table}[h]
\centering
\caption{Podział katalogu głównego w systemie Linux}
\begin{tabular}{|l|p{10cm}|}
  \hline
  ` /bin ` & Zawiera najbardziej potrzebne 
  binarki, z których korzysta system operacyjny wraz z użytkownikiem
  (np. ` ls `, ` cd `, ` rm `, itd.).\\ \hline
  ` /boot ` & Zawiera pliki wymagane do uruchomienia systemu
  (np. dane z partycji EFI, bootloader, pliki konfiguracyjne bootloadera,
  spakowane obrazy jądra, \emph{initramfs}, etc.).\\ \hline
  ` /dev ` & Zawiera urządzenia (jako pliki) podłączone do komputera,
  są to urządzenia blokowe, ram dyski, stacje dysków, karty dźwiękowe, etc. \\ \hline
  ` /etc ` & Zawiera pliki ustawień systemowych.\\ \hline
  ` /home ` & Zawiera katalogi domowe użytkowników systemu, \\ \hline
  ` /lib ` & Folder zawierający systemowe biblioteki dzielone. \\ \hline
  ` /media ` & Zawiera foldery będące zamontowanymi
  systemami plików na urządzeniach wymiennych np. pendrive, albo płyta CD\\ \hline
  ` /mnt ` & Równoważny do folderu ` /media `,
  zależne od dystrybucji.\\ \hline
  ` /proc ` & Wirtualny katalog zawierający informacje
  o uruchomionych procesach (zużycie danych, zużycie czasu procesora,
  por. aplikację ` top `).\\ \hline
  ` /sbin ` & Zawiera pliki wykonywalne poleceń,
  które mogą zostać wykonane tylko przez administratora systemu
  (` root `).\\ \hline
  ` /tmp ` & Zawiera pliki tymczasowe, często
  ten folder jest ram dyskiem.\\ \hline
  ` /usr ` & Zawiera dodatkowe programy zainstalowane
  przez zarządcę pakietów.\\ \hline
  ` /var ` & Zawiera pliki, których treść ulega częstym
  zmianom, przykładowo może zawierać logi systemowe, czy skrypty
  CGI.\\ \hline
\end{tabular}
\end{table}
### Urządzenia blokowe
Urządzenia blokowe są specyficznym typem pliku w systemie plików.
Ich ogólna charakteryzacja zostanie zwięźle opisana 
w tym rozdziale.
\begin{table}[h]
\centering
\caption{Przegląd ważnych urządzeń blokowych w Linuksie}
\begin{tabular}{|l|p{10cm}|}
\hline
` /dev/sdX ` & Dyski twarde, gdzie ` X ` to poszczególna
litera przydzielona przez podsystem jądra odpowiadający
za obsługę urządzeń blokowych \\ \hline
` /dev/sdXn ` & Woluminy dysku twardego (partycje), gdzie 
\\(` X `\\) to poszczególna
litera oraz \\(` n `\\) jako cyfra przydzielona przez podsystem jądra odpowiadający
za obsługę urządzeń blokowych \\ \hline
` /dev/dsp ` lub ` /dev/sound ` & Plik będący wejściem dla podsystemu audio. 
Tylko dla starszych Linuksów bez podsystemu ALSA \\ \hline
` /dev/input ` & Folder zawierający peryferyjne urządzenia wejścia takie
jak klawiatury, myszki, PC speaker \\ \hline
` /dev/fdn ` & Stacje dyskietek, gdzie ` n ` to liczba \\ \hline
` /dev/fbn ` & Ramki bufora graficznego, gdzie ` n ` to liczba \\ \hline
` /dev/null ` & Skrzynka pocztowa doktora P. S. \\ \hline
` /dev/random ` & Urządzenie losowe wytwarzające 
entropię w sposób niedeterministyczny, 
ważne urządzenie dla generowania kluczy w szyfrowaniu
asymetrycznym (np. RSA, ElGammal) \\ \hline
` /dev/urandom ` & Urządzenie losowe, które w wypadku,
kiedy nie będzie entropii do wykorzystania, zacznie
wykorzystywać algorytmy pseudolosowe, niezalecane
do wykorzystywania w zastosowaniach kryptograficznych \\ \hline
` /dev/cdrom ` & Stacja dysków optycznych (CD, DVD, Blu-ray) \\ \hline
\end{tabular}
\end{table}
### Zarządzanie plikami
Unix, przez swoją prostotę i też epokę wykształcił jeden
z najbardziej wygodnych systemów zarządzania plikami,
poprzez filozofię ,,rób dużo małych i wyspecjalizowanych
programów'', określając to w kontekście m.~in. zarządzania
plikami. Zostanie przedstawiony przegląd wybranych
funkcjonalności pozwalających na~zarządzanie plikami
z powłoki oraz za pomocą wywołań systemowych w 
tabeli~\ref{ref:zarz_powl}. By pozyskać
więcej informacji, można odwiedzić podręcznik ` man `.
\begin{table}[p]
\centering
\caption{Przegląd programów pozwalających na zarządzanie plikami
w powłoce tekstowej}
\label{ref:zarz_powl}
\begin{tabular}{|l|p{5cm}|p{7cm}|}
\hline
` cd ` \emph{<katalog>}
& Zmienia bieżący katalog roboczy w powłoce tekstowej.
Również powraca do poprzedniego wybranego katalogu
jeśli zostanie podane \verb|--|.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ pwd
/home/foo
$ cd dir
$ pwd
/home/foo/dir
$ cd --
/home/foo
\end{minted}
\end{minipage}
\\ \hline
` ls ` [-alh] [\emph{<katalog>}]
& Wyświetla pliki w bieżącym katalogu.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ ls 
foo bar baz biz buzz
\end{minted}
\end{minipage}
\\ \hline
` rm ` [-r] \emph{<plik lub katalog>} 
& Usuwa pliki, bądź katalogi.
Wraz z opcją -r usuwa pliki w wybranym katalogu wraz z katalogiem.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ ls
foo.img bar.img
$ rm foo.img
$ ls
bar.img
\end{minted}
\end{minipage}
\\ \hline
` touch ` \emph{<plik>} 
& Tworzy pusty plik, bądź zmienia datę modyfikacji istniejącego
pliku na dzisiejszą.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ ls
foo.img bar.img
$ touch biz.buzz
$ ls
foo.img bar.img biz.buzz
\end{minted}
\end{minipage}
\\ \hline
` chmod ` \emph{<tryb>} \emph{<plik>} 
& Zmienia flagi dostępu dla danego pliku. Po więcej
informacji należy zajrzeć do podręcznika użytkownika.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ chmod +x myscript.sh
$ ./myscript.sh
It works!
\end{minted}
\end{minipage}
\\ \hline
` chown `
& Zmienia właściciela pliku (grupę i użytkownika).
Więcej informacji w podręczniku użytkownika.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ chown owner2:group2 fancy.rmm
\end{minted}
\end{minipage}
\\ \hline
` cp `
& Kopiuje plik. & 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ cp wdip.txt pasty
\end{minted}
\end{minipage}
\\ \hline
` mv `
& Przenosi plik. Również zmienia nazwę pliku. & 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ mv rmm.txt rafal.txt
\end{minted}
\end{minipage}
\\ \hline
` dd `
& Kopiuje surowo treść jednego pliku do drugiego.
Więcej informacji w podręczniku. & 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ dd if=/dev/zero of=/dev/sda1 bs=512
\end{minted}
\end{minipage}
\\ \hline
` (u)mount `
& Odmontowuje/montuje system plików zamontowany
w środowisku użytkownika.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ sudo mount /dev/sda1 /mnt/gentoo
$ sudo umount /mnt/gentoo
\end{minted}
\end{minipage}
\\ \hline
` mkdir `
& Tworzy katalog. Z opcją ` -p ` tworzy ścieżkę katalogów.& 
\begin{minipage}[t]{7cm}
\begin{minted}{console}
$ mkdir rzs
$ mkdir -p /mnt/gentoo/boot/grub
\end{minted}
\end{minipage}
\\ \hline
\end{tabular}
\end{table}

### Prawa dostępu

Każdy plik w systemie uniksopodobnym ma informację na temat
dostępu do pliku. Linux przewiduje cztery klasy dostępu do pliku:
\emph{user}, \emph{group}, \emph{others} i \emph{all}. Każda z nich
charakteryzuje się tym, że:

*[\emph{user}] Dostęp do pliku ma użytkownik tego pliku.
*[\emph{group}] Dostęp do pliku mają użytkownicy należący
do danej grupy użytkowników (o której wspomnę później).
*[\emph{others}] Dostęp do pliku mają użytkownicy,
którzy nie należą do danej grupy użytkowników,
ani nie są właścicielem tego pliku.
*[\emph{all}] Połączenie trzech powyższych.

Również są cztery uprawnienia, które można nadać każdej
z klas:

*[` r `] Uprawnienie do czytania pliku.
*[` w `] Uprawnienie do zapisywania pliku.
*[` x `] Uprawnienie do wykonywania pliku.
*[` s `] Tak zwana flaga \emph{setuid}.
Uprawnienie do eskalacji uprawnień danego
pliku wykonywalnego do uprawnień
właściciela pliku i grupy przypisanej do tego pliku.
Specjalny przypadek flagi uprawnień do wykonania pliku.
*[` t `] Tak zwany \emph{sticky bit}.
Dany plik, bądź katalog, może być usuwany,
bądź przemianowany tylko przez właściciela pliku,
lub owego katalogu, lub procesu, który ma prawo
do modyfikacji tego pliku, czy katalogu.


Użytkownik określający dostęp może dla każdej klasy
określić odrębny dostęp (oprócz \emph{all} z 
wiadomych przyczyn), przykładowo dla każdego
może ustalić uprawnienie do czytania pliku
za pomocą poleceń ` chmod ` i ` chown `.
Przykładowo
\begin{minted}{console}
$ chmod a=r,g=rw rmm
\end{minted}
ustawia dla wszystkich uprawnienia do czytania
oraz tylko dla grupy ustawia uprawnienia do czytania
i~zapisywania pliku ` rmm `. Natomiast
\begin{minted}{console}
$ chmod o-w rmm
\end{minted}
zabiera uprawnienia do zapisywania pliku
przez osoby nienależące do przypisanej grupy
w pliku, bądź nie są właścicielem tego pliku. Można również
wykonać
\begin{minted}{console}
$ chmod u+x lemie.sh
\end{minted}
by nadać sobie uprawnienia do wykonania pliku,
często pomija się literę ` u `.

By móc sprawdzić, jakie uprawnienia są dla danego pliku,
bądź plików, można użyć ku temu polecenia \mintinline{console}|ls -l|
(flaga ` -h ` w przykładzie ma na celu tylko wypisać wielkości
plików w wielokrotnościach SI):
\begin{minted}{console}
$ ls -lh
drwxrw----   2 konrad  rzs 10M Apr 8  12:53 projekt-bash
drwxr--r--   2 kolega  w4   2G Apr 20 21:37 nadzy-panowie
-rw-------   2 gebala  ki  10G Jul 10 14:88 przyjemny-egzamin-poradnik.pdf
\end{minted}
W pierwszej kolumnie mamy opisane następujące pojęcia (od lewej
do prawej):

* Pierwsza litera opisuje rodzaj bytu (` b ` oznacza urządzenie
  blokowe, ` s ` gniazdko a ` d ` --- katalog;
  myślnik oznacza zwykły plik).
* Trzy litery opisują flagi uprawnień do tego bytu
dla klasy dostępu kolejno \emph{owner}, \emph{group}, \emph{other}.

Jak widać do folderu ` projekt-bash ` pełen dostęp ma właściciel
` konrad `, grupa ` rzs ` ma dostęp do odczytu i zapisu,
natomiast inni użytkownicy nie mają żadnych uprawnień. Przebrnięcie
przez folder ` nadzy-panowie `, bądź plik ` przyjemny-egzamin-poradnik.pdf `,
zostawiam jako ćwiczenie.

#### Grupy
Również można zarządzać grupami w Linuksie. Grupy
stanowią ułatwienie dla zarządzania uprawnieniami
dla większej rzeszy ludzi niż sam właściciel pliku.
By utworzyć grupę, można wywołać
\begin{minted}{console}
# groupadd ppt
# groupadd w4
\end{minted}
a potem dodać użytkowników za pomocą polecenia:
\begin{minted}{console}
# gpasswd --add rmm ppt
# gpasswd --add kolega w4
\end{minted}
Wtedy, mając taką grupę, możemy przypisać ją do pliku, bądź folderu,
przydzielając tę samą grupę podkatalogom i plikom zawartym w tym 
folderze:
\begin{minted}{console}
# chgrp ppt notatki.pdf
# chgrp -R ppt folder-rzs
\end{minted}
czy też, bardziej kompleksowo, gdy chcemy zmienić właściciela i grupę:
\begin{minted}{console}
# chmod konrad:ppt notatki.pdf
# chmod -R kolega:w4 nadzy-panowie
\end{minted}
Można również usunąć użytkownika z danej grupy
\begin{minted}{console}
# gpasswd --delete rmm ppt
\end{minted}
oraz w ogólności usunąć całą grupę
\begin{minted}{console}
# groupdel w4
\end{minted}
Inne niewymienione funkcjonalności grup można poznać korzystając
z podręcznika użytkownika.

### Deskryptory plików

Dostęp do plików poprzez jądro systemu odbywa się
na poziomie deskryptora. Deskryptor to
przypisana nieujemna liczba całkowita danemu pliku
dla danego procesu. Deskryptory są używane
jako ,,haczyk'' do pliku, do którego chcemy się
odwoływać. 

Domyślnie każdy program, bez manipulacji
na deskryptorach, posiada trzy otwarte pliki ---
standardowe wejście (z deskryptorem 0), standardowe
wyjście (z deskryptorem 1), standardowe wyjście błędów
(z deskryptorem 2). By uzyskać deskryptor dla pliku
nieotwartego, korzystamy
z wywołania funkcji ` open `. 

Więcej szczegółów
zostanie podane w przeglądzie wybranych
funkcji dot. wejścia-wyjścia.

### Wywołania systemowe
Linux oczywiście udostępnia interfejs wywołań systemowych,
dzięki których można wykonywać manipulacje na plikach.

Na ogół wywołania systemowe
są wolniejsze niż te, które są buforowane --- wynika to z 
prymitywności wywołania; wczytane, bądź zapisane dane nie są
ładowane do pamięci pośredniej, co wyraźnie spowalnia działanie
w wypadku częstego dostępu przez takie funkcje, w przeciwieństwie
do wysokopoziomowych bibliotek, jaką jest m. in. biblioteka standardowa.

Wywołania systemowe zostaną wymienione jako najbardziej
potrzebne i najczęściej wykorzystywane w tabeli~\ref{tab:wywolania}. 
Wszystkie wymienione funkcje można dołączyć z pliku ` unistd.h `.
\begin{table}[p]
\centering
\caption{Przegląd wywołań systemowych dot. zarządzania plikami}
\label{tab:wywolania}
\begin{tabular}{|p{8cm}|p{8cm}|}
\hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int open(const char *pathname, int flags);
int open(const char *pathname, 
int flags, mode_t mode);
\end{minted}
\end{minipage}
& Otwiera, bądź tworzy, plik z wybranymi flagami, trybem
otwarcia. Zwraca deskryptor, jeśli
operacja się powiodła, ` -1 ` 
w razie niepowodzenia.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
ssize_t read(int fd, void *buf, 
size_t count);
\end{minted}
\end{minipage}
& Wczytuje dane z otwartego pliku do bufora, co najwyżej
` count ` bajtów. Zwraca ilość wczytanych
bajtów do bufora, ` -1 ` jeśli trafiono
na koniec pliku. \\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
ssize_t write(int fd, void *buf, 
size_t count);
\end{minted}
\end{minipage}
& Zapisuje ` count ` bajtów do otwartego pliku z bufora.
Zwraca ilość zapisanych
bajtów do bufora, ` -1 ` 
jeśli wystąpił błąd. \\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int close(int fd);
\end{minted}
\end{minipage}
& Zamyka dany plik i czyni deskryptor bezużytecznym.
Zwraca ` 0 ` podczas powodzenia,
w przeciwnym wypadku ` -1 `.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int dup(int oldfd);
int dup2(int oldfd, int newfd);
\end{minted}
\end{minipage}
& Tworzy kopię deskryptora pliku. W wypadku
` dup ` wybierana jest najniższa
nieujemna liczba, która jest niezajęta,
natomiast ` dup2 ` ma określony
jawnie nowy deskryptor. Zwraca 
wartość nowego deskryptora w podczas
sukcesu, w przeciwnym wypadku ` -1 `.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int setuid(uid_t uid);
\end{minted}
\end{minipage}
& Jeśli proces wykonujący tę funkcję
ma włączoną flagę ` s ` dla wybranego
użytkownika oraz ` uid `
odpowiada temu użytkownikowi, 
to zmienia ` uid `
dla tego procesu. Wykorzystywane
często do eskalacji uprawnień
(por. UAC w Windowsie). Zwraca
` 0 ` jeśli został zmieniony ` uid `,
w przeciwnym wypadku ` -1 `.\\ \hline
\end{tabular}
\end{table}
### Potoki
Potoki są implementacją prostego mechanizmu komunikacji między procesami,
a w szczególności między wątkami, polegającego na utworzeniu dwukierunkowego
strumienia danych. O potoku możemy myśleć jako wirtualny tymczasowy plik, który
istnieje tylko w pamięci podręcznej komputera i który jest czytany
przez różne procesy. Potok, w kontekście
powłoki tekstowej, jest to przekierowanie standardowego wyjścia
programu na standardowe wejście innego, kolejnego programu będącego w potoku.
Głównie takie potoki zapisuje się tak:
\begin{minted}{console}
$ ls | less
\end{minted}
Powyżej przekierowujemy wyjście, będące listą plików w katalogu,
do aplikacji służącej do podglądu plików tekstowych.

Potoki stały się tematem głównym dla przetwarzania potokowego. Przetwarzanie
potokowe to sposób użycia kilku programów o wyspecjalizowanej
funkcji, które dają nam jakiś konkretny rezultat. Filozofia Uniksa
wraz z przetwarzaniem potokowym daje niebywałą elastyczność
w przetwarzaniu informacji. Przykładowo możemy przekierować
wejście programu czytającego plik źródłowy C do programu, który usunie 
nam komentarze z pliku, a następnie ten rezultat przekierować do
serwisu hostingu plików źródłowych. Powyższa operacja może wyglądać tak
\begin{minted}{console}
$ cat zakazane.c | sed 's,/\*\*,,g;s,\*/,,g;s,/\*,,g;s,//,,g' | pastebin-cl
\end{minted}
co jest bardzo wygodne. Również ciekawym pomysłem wydaje się pobieranie
skompresowanego archiwum i wypakowywanie go w locie:
\begin{minted}{console}
$ wget -O - http://moja.strona.pl/archiwum.tar.gz | tar -xvvf - -O ~/docelowy/folder
\end{minted}

Głównie realizacja potoków odbywa się przez wywołania systemowe, o których będzie mowa
w następnym rozdziale.
#### Zarządzanie potokami
Jądro Linuksa udostępnia narzędzia do tworzenia potoków w dowolnym
kierunku. Mogą być to nawet potoki z obydwu kierunków.

Potoki często wykorzystuje się w programowaniu, gdy stronami potoku są
pary procesów rodzica i dziecka, często też temu towarzyszy
wykonanie innego programu przez jedną z funkcji ` exec `.

Narzędzia ku~tworzeniu potoków i zarządzania nimi są dość skąpe,
ale wyczerpujące zastosowania. W dość minimalistycznej tabeli~\ref{tab:pipe}
zostaną wymienione wywołania dot. zarządzania potokami. Potoki
traktuje się jak pliki, wobec tego można korzystać z funkcji wymienionych
w tabeli~\ref{tab:wywolania} w ramach deskryptorów potoku.

\begin{table}[h]
\centering
\caption{Wywołania systemowe dot. zarządzania potokami}
\label{tab:pipe}
\begin{tabular}{|p{8cm}|p{8cm}|}
\hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int pipe(int pipefd[2]);
int pipe2(int pipefd[2], int flags);
\end{minted}
\end{minipage}
& Tworzy parę deskryptorów opisującą potok.
Domyślnie potok jest dwukierunkowy. By
uczynić go jednokierunkowym, należy zamknąć
w procesie potomnym i rodzicielskim jedną 
z dwóch stron potoku. Również można zmienić
zachowanie funkcji poprzez flagi (zob. ` man 2 pipe `).
Zwraca ` 0 ` jeśli udało się stworzyć potok, to znaczy,
utworzyć parę deskryptorów, gdzie \mintinline{c}{pipefd[0]} to
wejście potoku, a \mintinline{c}{pipefd[1]}
wyjście potoku,
w wypadku niepowodzenia zwraca ` -1 `. \\ \hline
\end{tabular}
\end{table}
#### Potoki nazwane
Potoki nazwane to jawne pliki będące odpowiedzią na problem tworzenia
kilku potoków jednocześnie. Każdy potok nazwany ma swoją nazwę
i byt w systemie plików. Potok nazwany od potoku różni się tym, 
że potok nazwany jest bytem systemu plików, a potok jest
anonimowym medium komunikacyjnym między procesami.
Tabela~\ref{tab:mkfifo} opisuje wywołania systemowe
dot. potoków nazwanych. Również istnieje program
` mkfifo `, który tworzy, korzystając z tego wywołania,
potok nazwany z linii poleceń.

\begin{table}[h]
\centering
\label{tab:mkfifo}
\caption{Wywołania systemowe dot. potoków nazwanych}
\begin{tabular}{|p{8cm}|p{8cm}|}
\hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int mkfifo(const char *pathname, 
mode_t mode);
\end{minted}
\end{minipage}
& Tworzy potok nazwany, podawszy wybraną ścieżkę
utworzenia pliku wraz z uprawnieniami do tego pliku.
Zwraca nieujemny deskryptor, jeżeli uda się utworzyć
potok nazwany, w przeciwnym wypadku zwraca ` -1 `.\\ \hline
\end{tabular}
\end{table}
### Gniazdka
Gniazdko jest plikiem odzwierciedlającym medium komunikacyjne między 
procesem a procesem innego komputera będącego w jednej sieci komputerowej. 
Może być to również
jeden i ten sam komputer, jeśli mówimy o zaawansowanej technice
komunikacji między procesami (por. serwer graficzny X, bądź serwer dźwiękowy PulseAudio);
odbywa się to dzięki tzw. \emph{loopback}, czyli pętli zwrotnej.

#### Realizacja gniazdek w systemach uniksopodobnych
Gniazdo jest plikiem, z którym komunikacja odbywa się za pośrednictwem
modułu odpowiadającego za warstwę transportu. Generalnie tworząc
gniazdo, tworzymy je na poziomie abstrakcji warstwy transportu
--- protokoły, które będą obowiązywać między procesami, muszą
być ustalone przez programistę implementującego komunikację
między procesami.

Gniazdka w Linuksie, mimo architektury klient-serwer, albo
P2P, nie są konkretnie spolaryzowane; gniazdko klienta i serwera
w protokole TCP nadal jest tym samym gniazdkiem, lecz inaczej
skonfigurowanym.

W tabeli~\ref{tab:socket} są podane wywołania systemowe, które pozwalają na
zarządzanie gniazdkami. Oczywiście gniazda są w ogólności
plikami, stąd można korzystać z nich w funkcjach wymienionych 
w tabeli~\ref{tab:wywolania}.

\begin{table}[t]
\centering
\label{tab:socket}
\caption{Wywołania systemowe dot. gniazdek}
\begin{tabular}{|p{8cm}|p{8cm}|}
\hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int socket(int socket_family,
int socket_type,
int protocol);
\end{minted}
\end{minipage}
& Tworzy gniazdko, podawszy
rodzinę gniazdka (zazwyczaj jest to ` AF\_INET `),
rodzaj gniazdka (dla TCP wybieramy ` SOCK\_STREAM `, 
zaś dla UDP --- ` SOCK\_DGRAM `)
oraz rodzaj protokołu (zazwyczaj ustawia się ` 0 `).
Zwraca deskryptor pliku, który reprezentuje gniazdko,
w wypadku niepowodzenia zwraca ` -1 `.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
struct hostent *gethostbyname(
const char *hostname);
\end{minted}
\end{minipage}
& Poszukuje nazwy w serwerze nazw (DNS).
Jeśli uda się, funkcja zwraca
strukturę zawierającą informację na temat
adresu IP danego komputera, w przeciwnym wypadku
zwraca wskaźnik zerowy.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int connect(int sockfd, 
struct sockaddr_in *addr,
socklen_t addrlen);
\end{minted}
\end{minipage}
& Łączy się z hostem, podawszy
deskryptor utworzonego uprzednio gniazdka,
adres docelowy (konfiguracja odbywa się
przez wyzerowanie struktury i skopiowania danych,
dokładniej pola ` h\_addr ` struktury
uzyskanej z funkcji ` gethostbyname `, jej
wielkość jest podana w polu ` h\_length `)
oraz wielkość struktury opisującej
adres docelowy, zwyczajnie podaje się
\mintinline{c}{sizeof(struct sockaddr_in)}.
Zwraca ` 0 `, gdy uzyskano połączenie,
w przeciwnym wypadku ` -1 `.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int bind(int sockfd, 
struct sockaddr *addr,
socklen_t addrlen);
\end{minted}
\end{minipage}
& Tworzy gniazdko serwerowe, w wypadku TCP.
   Analogiczne jak funkcja ` connect `,
jednakże konfiguracja obywa się tylko
za pomocą ustawienia pola dot. portu;
wykorzystuje się do tego funkcję
` htons() `. Zwraca ` 0 `,
jeśli powiodło się, w przeciwnym wypadku
` -1 `.\\ \hline
\end{tabular}
\end{table}

#### Selektory
Zauważono, że wykorzystywanie wielu wątków do obsługi wielu połączeń po stronie serwera
jest bardzo niewydajnym rozwiązaniem --- proszę sobie wyobrazić serwery Facebooka 
mające uruchomione około miliarda wątków w punkcie szczytu. Wobec tego
postanowiono uczynić model zdarzeniowy dla~gniazdek. Tworzy~się tzw.
\emph{event-loop}, który oczekuje na~zmianę stanu gniazdek, jeśli chodzi
o~możność czytania, bądź zapisywania danych do~gniazdek. Mechanizm,
który to udostępnia, nazywa się selektorem i odbywa się przez odpowiednie
wywołania systemowe, które są opisane w tabeli~\ref{tab:select}. Oczywiście
selektory można wykorzystywać nie~tylko z~samymi gniazdkami, można również
tworzyć selektory z innymi plikami, które zachowują się w~podobny sposób co gniazdka
--- przykładowo standardowe wejście nie zawsze zawiera dane, więc można na
nie oczekiwać.

\begin{table}[p]
\centering
\label{tab:select}
\caption{Wywołania systemowe dot. selektorów}
\begin{tabular}{|p{8cm}|p{8cm}|}
\hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
void FD_CLR(int fd, fd_set *set);
int FD_ISSET(int fd, fd_set *set);
void FD_SET(int fd, fd_set *set);
void FD_ZERO(fd_set *set);
\end{minted}
\end{minipage}
& Zestaw makr służących do ustalenia zbioru zainteresowań
(ang. \emph{intrest set}). Zbiór zainteresowań
to zbiór deskryptorów, które chcemy obserwować.
Odpowiednie funkcje, które są intuicyjne z nazwy,
manipulują na zbiorze zainteresowań, bądź sprawdzają
czy dany element w zbiorze zainteresowań zmienił swój stan. 
Zbiór
zainteresowań może być zmieniany w każdym
punkcie działania programu.\\ \hline
\begin{minipage}[t]{7cm}
\begin{minted}{c}
int select(int nfds, 
fd_set *readfds, 
fd_set *writefds,
fd_set *exceptfds, 
struct timeval *timeout);
\end{minted}
\end{minipage}
& Oczekuje na nadchodzącą zmianę w odpowiednich
zbiorach zainteresowań (niektóre mogą być ` NULL `), 
podawszy za ` nfds ` 
największy deskryptor plików spośród trzech zbiorów
plus jeden oraz czas oczekiwania na zmianę
(może być ` NULL `), oraz odblokowuje
wątek, jeśli w którymś ze zbiorów zainteresowań
nastąpiła zmiana. Zwraca ilość ustawionych elementów
w każdym ze zbiorów zainteresowań, w wypadku
błędu zwraca ` -1 `. Funkcja
` FD\_ISSET ` pozwala na sprawdzenie,
który z elementów zbioru zainteresowań opisanego
deskryptorem zmienił swój stan (np.
możliwe jest wczytanie danych od niego).\\ \hline
\end{tabular}
\end{table}
