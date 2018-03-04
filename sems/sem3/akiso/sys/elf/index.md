---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Pliki wykonywalne ELF
\begin{quote}{Okrzyk bojowy elfów}
Scoia'tael!
\end{quote}

Plik wykonywalny to taki, który może być uruchomiony bezpośrednio w środowisku systemu operacyjnego. Najczęściej zawiera on binarną reprezentację instrukcji konkretnego procesora. Mogą się w nim znajdować również wywołania systemowe, co czyni takie pliki nie tylko specyficznymi dla danego typu procesora, ale też dla systemu operacyjnego. Istnieją również pliki wykonywalne w formie pośredniej, które do uruchomienia wymagają odpowiedniego interpretera lub maszyny wirtualnej - takie pliki, w dużej części przypadków, mogą być już uruchamiane na różnych rodzajach systemów.

W naszym skrypcie skupimy się na plikach wykonywalnych systemu Linux. Pierwszymi historycznie plikami były ` a.out `. Jest to skrót od \textit{assembler output}. Była to nazwa pliku wyjściowego generowanego przez assembler Kena Thompsona dla PDP-7. Format ten był wykorzystywany w starszych systemach typu Unix-like. Pliki ` a.out ` funkcjonowały jako domyślna nazwa plików wykonywalnych generowanych przez kompilatory ` gcc ` oraz ` g++ ` (jednak, o czym zapewne Czytelnik doskonale wie, ten format nie jest już używany). W systemach z rodziny BSD format ten został początkowo zastąpiony przez COFF (\textit{Common Object File Format}), a następnie przez pliki typu ELF (\textit{Executable Linking Format}). W systemach typu Linux format ` a.out ` był wykorzystywany do wersji 1.2, a później został zastąpiony formatem ELF (głównie dla bibliotek współdzielonych). W przypadku systemu Windows mamy do czynienia z plikami wykonywalnymi będącymi rozszerzeniem plików COFF, o formacie PE (\textit{Portable Executable}).  

Skupmy się teraz na temacie rozdziału, czyli plikach ELF. Ten format plików wykonywalnych powstał w \textit{AT\&T Bell Laboratories} dla systemu UNIX System V i, jak zostało wspomiane w jednym z poprzednich akapitów, zastąpił on format ` a.out `. Powodem takiej zmiany była potrzeba stworzenia formatu pliku wykonywalnego z lepszym wsparciem dla bibliotek dynamicznych. 

Plik ELF możemy podzielić na dwie zasadnicze części - nagłówek oraz sekcje. Nagłówek zawiera informacje o sposobie organizacji pliku i zawsze znajduje się na jego początku. Tutaj znajdziemy również tablicę nagłówkową programu, zawierającą informacje o tym, w jaki sposob system ma stworzyć obraz procesu, a także tablicę nagłówków sekcji, która przechowuje informacje o każdej sekcji - jej nazwie, rozmiarze itd.  O sekcjach natomiast opowiemy sobie więcej w pierwszej części tego rozdziału.
### Sekcje pliku wykonywalnego

Plik wykonywalny ELF może zostać podzielony na dowolną liczbę sekcji o dowolnej wielkości każda. Każda sekcja ma określone cechy - ochronę oraz adres wirtaulny. Każda z sekcji może zostać również oznaczona jako taka, która nie jest ładowana do pamięci. Zlokalizowanie odpowiedniej sekcji w pliku jest możliwe poprzez wykorzystanie tablicy nagłówków sekcji. Każda sekcja w pliku obiektowym posiada dokładnie jeden nagłówek. Każda sekcja zajmuje jedną ciągłą (możliwe, że pustą) sekwencję bajtów w pliku. Sekcje w pliku nie mogą się nakładać. Żaden bajt nie może być w więcej niż jednej sekcji. Plik obiektowy może posiadać przestrzeń nieaktywną. Różne nagłówki i sekcje mogą nie pokrywać każdego bajtu w pliku obiektowym. Zawartość takich danych nieaktywnych jest niezdefiniowana. Nagłówek sekcji wygląda w następujacy sposób: 
\begin{minted}{c}
typedef struct {
  Elf32_Wordsh_name;
  Elf32_Wordsh_type;
  Elf32_Wordsh_flags;
  Elf32_Addrsh_addr;
  Elf32_Offsh_offset;
  Elf32_Wordsh_size;
  Elf32_Wordsh_link;
  Elf32_Wordsh_info;
  Elf32_Wordsh_addralign;
  Elf32_Wordsh_entsize;
  } Elf32_Shdr;
\end{minted}

### Plik relokowalny

Plik relokowalny jest rodzajem pliku obiektowego generowanego przez kompilator lub asembler podczas kompilacji pliku z kodem źródłowym. Taki plik może zostać również utworzony przez linker (konsolidator) w wyniku połączenia kilku plików relokowalnych. Takie pliki są przeznaczone do późniejszego wykorzystania przez linker w celu otrzymania pliku relokowalnego lub biblioteki dynamicznej. W systemie Unix rozszerzenie takiego pliku to ` *.o `.
### Biblioteki statyczne

Biblioteka statyczna (\textit{static library}) jest to rodzaj biblioteki funkcji, która łączona jest z programem w momencie konsolidacji. W przypadku systemu Unix są to pliki o roszerzeniach ` *.a ` lub ` *.o `.
### Biblioteki dynamiczne

Biblioteka dynamiczna (\textit{dynamic library}) to rodzaj biblioteki, która jest łączona z programem dopiero w momencie jego wykonania. Dane z takich bibliotek mogą być wspóldzielone jednocześnie przez różne programy. Są one ładowane do pamięci tylko raz, nawet jeżeli są jednocześnie współużytkowane. 