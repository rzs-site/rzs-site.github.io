---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

 ## Architektura procesora
\begin{quote}{John von Neumann}
W matematyce nie ma nic do zrozumienia, trzeba się po prostu przyzwyczajać.
\end{quote} 
### Architektura ze względu na przechowywanie danych i rozkazów
#### Architektura von Neumanna

Pierwsza architektura komputera w historii, z roku 1945. Cecha charakterystyczna to przechowywanie danych wspólnie z instrukcjami oraz kodowanie ich w identyczny sposób. Przeciwieństwo architektury harwardzkiej. System w architekturze von Neumanna powinien mieć skończoną i funkcjonalnie pełną listę rozkazów. 

Podstawowe komponenty:

* pamięć (przechowuje dane oraz instrukcje)
* jednostka sterująca (pobiera dane, przetwarza instrukcje) 
* jednostka arytmetyczno-logiczna (wykonuje operacje arytmetyczne, komunikuje się z wejściem/wyjściem)
* urządzenia wejścia/wyjścia (pozwalają na interakcję z użytkownikiem)


#### Architektura harwardzka

W połowie XX wieku podstawowa architektura komputerowa, obecnie jest wykorzystywana głównie w mikrokontrolerach. Kluczową różnicą względem architektury von Neumanna jest osobna pamięć na instrukcje.  

### Architektura ze względu na złożoność logiki rozkazów

#### Architektura CISC
Wiele złożonych instrukcji, skomplikowany dekoder rozkazów , bezpośrednie operacje na pamięci.

#### Architektura RISC
Uproszczony zestaw instrukcji, ograniczenie komunikacji z pamięcią, duża liczba rejestrów, jeden tryb adresowania.
### Architektura ze względu na przetwarzanie wektorów danych
#### Architektura SIMD
Różne strumienie danych są przetwarzanych w oparciu o pojedynczy strumień rozkazów. Współczesne procesory posiadają zestawy instrukcji zgodne z tą ideą (MMX, SSE, itd.), co pozwala znacząco przyspieszyć działania powtarzalne (np. obróbkę dźwięku i obrazu)

#### Architektura MIMD
Wiele procesorów pracujących niezależnie, równoległe przetwarzanie na poziomie danych i rozkazów.