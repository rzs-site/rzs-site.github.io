---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Zarządzanie pamięcią
### Układ pamięci programu

Pamięć większości programów, a szczególnie tych napisanych w języku C, składa się pięciu segmentów:

* Segment tekstu
* Segment zainicjalizowanych danych
* Segment niezainicjalizowanych danych
* Sterta (heap)
* Stos (stack)

\begin{figure}
\centering
\caption{Schemat układu pamięci programu}
\includegraphics[width=0.4\textwidth]{_img/schemat.eps}
\end{figure}
W tej sekcji przyjrzymy się każdemu z wyżej wymienionych segmentów i pokrótce je omówimy

#### Tekst
Znajdujący się na dole segment tekstu, zwany również segmentem kodu, zawiera w sobie wykonywalne instrukcje. Jako, że segment ten jest zazwyczaj typu 'read-only', często jest on współdzielony między wieloma procesami. Dzięki temu w pamięci musi istnieć tylko jedna kopia kodu dla procesów działających wiele razy i w dużych ilościach.

#### Zainicjalizowane dane 
W tym segmencie, zwanym również, po prostu, segmentem danych, zawarte są wszystkie zmienne globalne i statyczne, których wartości definiuje programista. Segment ten znajduje się w wirtualnej przestrzeni adresowej i jest inicjalizowany przez wywołanie systemowe ` exec ` na wartości zawarte w kodzie programu.

#### Niezaincjalizowane dane
Segment ten, znany również jako 'BSS' (od frazy \textit{block started by symbol}), znajduje się zaraz za segmentem danych. Zawiera on w sobie wszelkie zmienne globalne i statyczne, które (w przeciwieństwie do segmentu danych) nie zostały explicite zaincjalizowane przez programistę. Wszystkie zawarte w nim dane są ustawiane na wartość ` arytemetyczne zero ` przy starcie programu.

#### Sterta
Segment sterty zaczyna się zaraz za 'BSS' i rośnie w górę. To w nim, zazwyczaj, ma miejsce dynamiczne alokowanie pamięci. Sterta powiększa się gdy używana przez programistę metoda alokacji pamięci nie będzie w stanie znaleźć miejsca na nowe dane (O dostępnych metodach później). Segment ten jest współdzielony przez wszystkie biblioteki oraz dynamicznie ładowane moduły naszego procesu.

#### Stos
Segment stosu znajduje się na przeciwko sterty i rośnie w dół (w kierunku adresu ` zero `). Dawniej, gdy szczyty tych dwóch regionów pamięci spotkały się, programowi, po prostu, kończyła się wolna pamięć. Dziś zastosowane są różne triki, takie jak wirtualna przestrzeń pamięci dzięki którym segmenty te mogą znajdować się w dowolnych miejscach pamięci, więc ryzyko \\("\\)zderzenia\\("\\) jest niewielkie. Z uwagi na swoją strukturę alokacja na stosie jest zdecydowanie szybsza tej na stercie. Dzieje się tak, ponieważ w przypadku stosu nie musimy \\("\\)szukać\\("\\) wolnego miejsca w pamięci, obniżamy tylko wskaźnik szczytu.

### Alokacja pamięci
Do dynamicznej alokacji pamięci programista ma kilka narządzie. Niektóre z nich bardziej, a niektóre mniej niskopoziomowe. W tej sekcji omówimy podstawowe z nich.

#### Wywołania ` brk, \texttt{sbrk ` oraz ` mmap `}
Wywołanie systemowe ` brk ` jest najbardziej niskopoziomowym sposobem alokacji pamięci na stercie z wymienionych w tej sekcji. Bierze ono, jako argument, adres w wirtualnej przestrzeni pamięci który ma się stać nowych szczytem sterty. Dzieje się tego tylko wtedy, gdy system operacyjny uzna żądany adres za rozsądny. W przypadku sukcesu wywołania, zwraca ono wartość 0, inaczej -1.\\
Kolejnym wywołaniem systemowym jest ` sbrk `, które można uznać za swego rodzaju nakładkę na ` brk `. Tym razem jako argument nie podajemy konkretnego adresu ale ilość bajtów o jaką chcemy podnieść szczyt sterty. Wywołanie to można również użyć do znalezienia aktualnego położenia szczytu. W przypadku sukcesu wywołania, zwraca ono wskaźnik na poprzedni szczyt, inaczej -1 (jako ` void* `).\\
Ostatnią metodą dynamicznej alokacji pamięci przez wywołania systemowe jaką opiszemy jest mapowanie. Technika te jest głównie wykorzystywana do ładowania całych plików do RAMu, co umożliwia szybki dostęp do ich zawartości, jednak jeśli mapowanie jest anonimowe, jego rezultatem będzie alokacja podanej w argumentach ilości wyzerowanej pamięci. Należy pamiętać, że pamięć jest alokowana w wirtualnej przestrzeni pamięci programu, a nie stricte na stercie. W niektórych implementacjach, funkcja ` malloc ` (O której później) korzysta z tego wywołania przy alokacji większej ilości pamięci.

#### Funkcja ` malloc `
Funkcja ` malloc ` próbuje zaalokować podaną jako argument ilość bajtów pamięci na stercie. Do tego wykorzystuje wywołania systemowy ` sbrk ` oraz czasem ` mmap `. Zazwyczaj stosowanie jest tylko to pierwsze jako, że jest bardzo szybkie oraz zwraca gotowy adres początku zaalokowanej pamięci, który później zwraca nam ` malloc `. W przypadku żądań o większą ilość bajtów (Zazwyczaj mowa tu o liczbach przekraczających cztery tysiące), niektóre implementacje tej funkcji użyją anonimowego mapowania.\\
Należy pamiętać, że praca funkcji nie kończy się na użyciu wywołania systemowego. Chociażby dlatego, że czasem nie jest ono wymagane. Typowa implementacja ` malloc ` używa również algorytmów zapobiegających fragmentacji sterty, tzn umieszczania nowych danych w miejscach, które wcześniej zostały zaalokowane, ale były już zwolnione.\\
Należy również pamiętać, że każda dynamicznie alokowana pamięć powinna być zwalniana, gdy nasz program przestaje jej używać. Nie dzieje się to automatycznie (Co z punktu widzenia szybkości działania programu jest wielką zaletą).