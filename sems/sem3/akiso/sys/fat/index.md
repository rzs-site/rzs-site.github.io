---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## System plików FAT
\begin{quote}{Pan z głośników w tramwaju}
Następny przystanek: FAT. Koniec trasy!
\end{quote}

Fabryka Automatów Tokarskich, która ma swoją siedzibę przy ul. Grabiszyńskiej we Wrocławiu, powstała w roku... O, przepraszam! To nie ta strona na Wikipedii... </żart>

Po całym semestrze kursu Architektura Komputerów i Systemy Operacyjne Czytelnik na pewno nie jeden raz słyszał pojęcie ,,system plików''. W dość dużym skrócie (ale w zakresie, który nam w zupełności w tym momencie wystarczy) możemy tak nazwać sposób organizacji danych na nośniku pamięci, który umożliwia przechowywanie oraz zarządzanie plikami w sposób przyjazny dla użytkownika. Instalując dowolnego Linuksa spotkaliśmy się najpewniej z systemem plików z rodziny ext (obecnie najpopularniejszym jest ext4). W Windowsie natrafimy na takie systemy jak NTFS czy FAT, któremu poświęcony jest ten rozdział skryptu. Osoby, które trochę bardziej interesują się tematem natknęły się pewnie jeszcze na systemy takie jak minix, XFS, JFS... 

FAT czyli \textit{File Allocation Table}, to system plików powstały pod koniec lat 70. ubiegłego stulecia. Pierwotnie FAT był przeznaczony do użytku na dyskietkach, ale w późniejszym okresie został przystosowany i powszechnie stosowany na dyskach twardych komputerów. Swoje zastosowanie znalazł on najpierw w systemie DOS firmy Microsoft, a później - w Windowsie. Pierwotnie FAT był przeznaczony do użytku na dyskietkach, ale w późniejszym okresie został przystosowany i powszechnie stosowany na dyskach twardych komputerów. 

Najważniejszym elementem systemu FAT jest tablica alokacji (stąd nazwa), w której przechowywane są informacje o rozmieszczeniu plików na partycji dyskowej. System jest podzielony na tak zwane "klastry", które są podstawową jednostką wykorzystywaną do alokacji. Tablica alokacji przechowuje na sobie informacje, który klaster jest wykorzystywany przez który plik.

Możemy wyróżnić kilka rodzajów opisywanego systemu - są nimi: FAT12, FAT16, FAT32 oraz exFAT (FAT64). Podstawowa różnica między nimi to ilość bitów przeznaczonych na zapisanie klastra - na przykład, dla systemu FAT12, mamy przeznaczone 12 bitów na klaster, co oznacza, gdy sobie to szybko policzymy, że na 3 bajtach możemy zapisać 2 klastry. W wypadku systemu FAT16 - 2 bajty to 1 klaster, a gdy mówimy o FAT32 - 1 klaster to 4 bajty.

Skupmy się teraz na szczegółach budowy systemu FAT. Zanim przejdziemy do omówienia klastrów, tablicy alokacji oraz tablicy katalogu głównego, przyjrzyjmy się jeszcze części FATa znanej pod nazwą \textit{boot sector}. Znajdziemy tutaj podstawowe informacje takie jak: rodzaj FATa, nazwa partycji, ilość bajtów przeznaczonych na sektor, czy ilość sektorów w jednym klastrze. Wygląd \textit{boot sectora} różni się w zależności od rodzaju systemu FAT. Informację o tym, co oznaczają poszczególne bajty możemy znaleźć w odpowiedniej dokumentacji. Nie będę jednak skupiał się w tym miejscu na tych rzeczach, ponieważ nie jest to w tym momencie coś, co byłoby nam w znaczący sposób potrzebne. Przejdźmy zatem dalej.
### Klastry

O klastrach wspominałem już we wcześniejszych akapitach. W systemie FAT partycja podzielona jest na klastry, czyli jednostki alokacji pliku. Wszystkie klastry mają swoje ``imię'' (są numerowane) i są podzielone na sektory. Każdy z klastrów przechowuje na sobie jakiś plik (lub jego część, gdy rozmiar pliku przekracza całkowity rozmiar jednego klastra). Informację o tym, od którego klastra zaczyna się plik, znajdziemy w odpowiednim miejscu w tablicy katalogu głównego. Natomiast wskazania na kolejne klastry powiązane z konkretnym plikiem znajdziemy w tablicy alokacji plików (o tych dwóch rzeczach napiszę więcej w rozdziałach poświęconych odpowiednio tablicy alokacji i tablicy katalogu głównego.

Klaster, w zależności od rodzaju FATa, ma określony rozmiar. I tak - w przypadku systemu FAT12 rozmiar jednego klastra to od 512 B do 4 kB. Maksymalna liczba klastrów wynosi 4077 \\(({2}^{12} - 19)\\), a maksymalna pojemność pliku, jak i całego woluminu, to w tym wypadku 16 MB. W systemie FAT16 mamy już 65 517 klastrów \\(({2}^{16} - 19)\\), a rozmiar jednego takiego klastra to 32 kB. Maksymalny rozmiar woluminu i pliku to 2 GB. W FAT32 spotykamy się z plikiem o maksymalnym rozmiarze 4 GB, ale rozmiary woluminu mogą już dochodzić do 2 TB. Górne ograniczenie liczby klastrów to 268 435 445, a maksymalny rozmiar jednego klastra wynosi 256 kB. System exFAT umożliwa już utworzenie pliku i woluminu o rozmiarach 16 EiB (!), a maksymalna liczba klastrów to \\( {2}^{32} - 1 \\).  
### Tablica alokacji plików

Tablica alokacji plików to ``serce'' systemu FAT. Znajduje się zaraz za \textit{boot sectorem}. To tutaj znajdują się informacje o tym, na jakich klastrach zapisany jest konkretny plik - to znaczy, że możemy tutaj odczytać numery poszczególnych klastrów (informację o miejscu, od którego należy zacząć czytać znajdziemy w tablicy katalogu głównego, ale o tym za chwilę). Wartości, które znajdziemy w tablicy alokacji, znowu zależą od rodzaju systemu FAT. I tak - w przypadku systemu FAT12 znajdziemy tam następujące wartości:


* ` 000 ` - wolne klastry
* ` 002-fef ` - używane klastry
* ` ff0-ff6 ` - klastry zarezerwowane
* ` ff7 ` - błędny sektor
* ` ff8-fff ` - ostatni klaster


W systemie FAT16 wartości w tablicy alokacji odczytuje się w następujący sposób:


* ` 0000 ` - wolne klastry
* ` 0002-ffef ` - używane klastry
* ` fff0-fff6 ` - klastry zarezerwowane
* ` fff7 ` - błędny sektor
* ` fff8-ffff ` - ostatni klaster

### Tablica katalogu głównego

Ostatnia, ale nie mniej ważna część systemu FAT, to tablica katalogu głównego (\textit{root directory}). Tutaj znajdziemy wszystkie potrzebne informacje na temat plików utworzonych w naszym systemie. Dla systemu FAT12 znaczenie poszczególnych bajtów wygląda następująco:


* 1-10 - nazwa pliku wraz z rozszerzeniem (8 bajtów jest przeznaczonych na nazwę, a 3 bajty na rozszerzenie)
* 11 - atrybuty pliku (wektor bitowy)
* 12-21 - zarezerwowane 
* 22-23 - czas utworzenia (format: godzina/minuty/sekundy)
* 24-25 - data (format: rok/miesiąc/dzień)
* 26-27 - wskazanie na pierwszy klaster pliku
* 28-31 - rozmiar pliku w bajtach


Przy okazji omawiania \textit{root directory} warto jeszcze wspomnieć o odzyskiwaniu plików w systemie FAT. Gdy usuwany jest plik, następuje wyzerowanie tablicy alokacji a także usunięcie z tablicy katalogu głównego informacji o pierwszej literze w nazwie usuniętego pliku (wszystkie pozostałem informacje pozostają bez zmian). W momencie, gdyby Czytelnik zechciał przywrócić taki plik, należy przywrócić pełną nazwę pliku wpisując do \textit{root directory} odpowiedni kod ASCII pierwszej litery w nazwie pliku. Następnie, na podstawie informacji o numerze pierwszego klastra i o rozmiarze pliku, należy podjąć się ręcznego przywracania tablicy alokacji, co przy dużych rozmiarach plików jest zajęciem niezwykle żmudnym. Należy tutaj jednak zaznaczyć, że takie przywrócenie usuniętego pliku jest możliwe tylko wtedy, gdy nie mamy do czynienia z fragmentacją pliku. W momencie, gdy następuje znaczna fragmentacja, przywrócenia takiego pliku jest bardzo trudne lub wręcz niemożliwe!