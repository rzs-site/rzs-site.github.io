---
layout: acc_layout
toc: tp
use_math: true
use_highlight: true
---

Technologia Programowania
---

### Zamiast wstępu...
Ten krótki poradnik powstał w mocno ograniczonym czasie, proszę nie oczekiwać teorii wyrażeń regularnych. Nie zaprzeczam, jest to oczywiście bardzo, bardzo proste, ale mimo wszystko pomijamy. Podstawą do stworzenia PDFa był więc materiał wymagany na kolokwium. Zamiast traktować regex jako opis języka (czym jest w rzeczywistości), przeanalizujemy tylko praktyczne zastosowania. Skoro nie zniechęcił Cię anty-clickbaitowy tytuł, zaczynamy.

### Po co regex w informatyce?
Prawdopodobnie każdy, kto opanował obsługę edytora tekstu, wie jak działają symbole wieloznaczne (np. *). Dzięki nim możemy napisać ` L*e* ` i jednym wyrażeniem znaleźć ` Lemiesz `, ` Lee ` oraz ` Lenin `. Łatwo można jednak zauważyć ogromne ograniczenia. Przykładowo w zależności od ustawienia case-sensitive wyraz ` lewarek ` może zostać znaleziony lub nie. Nie wyeliminujemy też w prosty sposób nazwy ` Lenino `. Z pomocą przychodzi regex. 

### Podstawy wyrażeń regularnych
Najważniejszą cechą regexa w porównaniu z trywialnymi symbolami wieloznacznymi jest to, że osobno określamy rodzaj znaku, a osobno ilość wystąpień. W większości implementacji prostego wyszukiwania gwiazdka (` * `) oznacza dowolną ilość wystąpień dowolnego znaku, a znak zapytania (` ? `) to najwyżej jeden dowolny znak (również spacja). Natomiast w regexie najpierw podajemy, jakich znaków szukamy, a dopiero potem ilość wystąpień. Dowolny znak to symbol kropki (` . `), więc wyrażenie ,,dowolna ilość dowolnych znaków'' przybierze postać ` .* ` w regexie. Analogicznie, wyrażenie ` .? ` oznacza od zera do jednego wystąpienia dowolnego znaku. Rodzaj znaku (lewa strona) musi być podany zawsze, ilość (prawa strona) może być domyślnie przyjmowana jako 1.

### Jakie znaki?
Zajmijmy się lewą stroną, czyli zakresem wyszukiwanych znaków. 

#### Klasy zbiorów
Najważniejsze są klasy, definiujemy je za pomocą nawiasów kwadratowych. Przykładowo ` [ab]* ` to dowolna ilość wystąpień znaków ` a ` oraz ` b ` w dowolnej kolejności. Analogicznie definiujemy zakresy, wyrażenie ` [a-z]* ` znajdzie dowolną ilość wystąpień znaków od ` a ` do ` z `, czyli dowolne słowo złożone z małych liter alfabetu łacińskiego.

#### Sumy zbiorów
Można łączyć całe zakresy, ` [a-zA-Z]* ` to dowolne słowo z małych i dużych liter w dowolnej kolejności. Muszą natomiast być one w porządku rosnącym, np. ` a-b ` przed ` A-B `. Brak przecinka jest celowy! Oczywiście, znaki mogą się powtarzać, słowo ` aBabb ` spełnia podane wyrażenie.

#### Negacja
Jeśli pierwszym znakiem w klasie jest kareta (\\( \wedge \\)), nastąpi negacja całej klasy. ` [\\( \wedge \\)ab]* ` to dowolna ilość wystąpień dowolnych znaków oprócz ` a ` oraz ` b `.

#### Część wspólna
Poprzednio zostało zaznaczone, że przy sumowaniu zakresów nie używamy przecinka. Możemy jednak, jeśli jest taka potrzeba, wykorzystać podwójny ampersand (` \&\& `) do stworzenia iloczynu zbiorów zamiast sumy. Tutaj przykład sztuczny, ale przynajmniej prosty. Klasa ` [0-6\&\&4-9] ` wyznacza dowolną cyfrę od 4 do 6.

#### Różnica
Poprzez część wspólną możemy zdefiniować różnicę. Z prostych praw logicznych wynika, że różnicę \\(  A \setminus B  \\) można równoważnie zapisać jako \\(  A \cup B'  \\). Przepiszmy to na regex. Klasa ` [0-9\&\&[\\( \wedge \\)37]] ` zawiera dowolną cyfrę z wyjątkiem 3 i 7. Gdybyśmy wykorzystywali wyłącznie sumę, wynikiem byłoby ` [0-24-68-9] `, czyli aż trzy zakresy. Dodatkowo czytelność takiego sposobu pozostawiam bez komentarza.

#### Klasy predefiniowane
Regex pozwala na uproszczenia zapisu. Przykładowo zamiast długiego wyrażenia ` [a-zA-Z0-9] ` można wykorzystać ` \\( \backslash \\)w `, czyli klasę predefiniowaną dla wszystkich cyfr i liter alfabetu łacińskiego. 