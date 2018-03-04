---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

### Reprezentacja liczb

#### Naturalny kod binarny
W naturalnym kodzie binarnym wszystkie liczby mają ustaloną długość, a jeśli przy konwersji liczby z dziesiętnego na binarny liczba ma mniej cyfr, uzupełnia się ją zerami z przodu. Przykład:

| n | NKB(n) |
|---|--------|
| 0 | 000    |
| 1 | 001    |
| 2 | 010    |
| 3 | 011    |
| 4 | 100    |
| 5 | 101    |
| 6 | 110    |
| 7 | 111    |

#### Przesunięty kod binarny (ang. biased}
Schemat generowania n-bit biased representation jest następujący:
\\[ (0)_{10} = 1\cdot2^{n-1} + \sum_{i=0}^{n-2} 0\cdot2^{i} \\]
Pozostałe liczby są generowane poprzez dodanie lub odjęcie 1 w obu systemach (binarnym i dziesiętnym)
Przykład 3-bitowy:

| n  | biased binary |
|----|---------------|
| -4 | 000           |
| -3 | 001           |
| -2 | 010           |
| -1 | 011           |
| 0  | 100           |
| 1  | 101           |
| 2  | 110           |
| 3  | 111           |

#### Kod uzupełnieniowy do jedności (U1)
Jeżeli liczba, którą chcemy zapisać w n-bitowym U1 jest dodatnia, to najstarszy bit jest równy 0, a pozostałe bity tworzą (n-1)-bitowe NKB.
Jeżeli liczba jest ujemna, to najstarszy bit jest równy 1, następnie moduł z tej liczby jest zapisywany w (n-1) bitowym NKB. Wynik tej operacji jest zamieniany w taki sposób, że jedynki tworzą zera a zera jedynki.\\
Przykład:
\\[ U1_8((-73)_{10})=? \\]
\\[ -73 < 0 \\]
\\[ (73)_{10}=(1001001)_2 -> 0110110 \\]
\\[ U1_8(-73)=10110110 \\]
UWAGA. Zauważmy, że w U1 jest zero ujemne i zero dodatnie. (1...1 i 0...0)

#### Kod uzupełnienowy do dwójki (U2)
Liczby dodatnie w U2 przedstawione są w taki sam sposób jak NKB
Liczby ujemne w U2 powstają w następujący sposób:
* Niech a<0, n - liczba bitów w U2
* Ustawiamy najstarszy bit na 1
* Pozostałe bity to n-1 bitowe NKB z liczby \\( 2^{n-1}+a \\)

\textbf{Przykład:}
\\[ U2_8((-73)_{10})=? \\]
\\[ -73 < 0 \\]
\\[ 2^{8-1}+(-73) = 128-73=55 = (0110111)_2 \\]
\\[ U2_8((-73)_{10})=10110111 \\]

Spójrzmy na tę tabelę:
| reprezentacja binarna | U1 | U2 |
|-----------------------|----|----|
| 000                   | +0 | 0  |
| 001                   | 1  | 1  |
| 010                   | 2  | 2  |
| 011                   | 3  | 3  |
| 100                   | -3 | -4 |
| 101                   | -2 | -3 |
| 110                   | -1 | -2 |
| 111                   | -0 | -1 |

Można zauważyć, że w liczbach dodatnich \\( U1 = U2 \\), a w ujemnych \\( U1 = U2+1 \\)
#### Liczby zmiennoprzecinkowe

##### Liczby w standardzie IEEE-754
Liczby w standardzie IEEE-754 są przedstawione w następujący sposób:
* najstarszy bit jest bitem znaku (S)
* kolejne 8 ( 11 dla double ) bitów to wykładnik (E)
* ostatnie 23 ( 52 dla double ) bity nazywane są mantysą (M)

Jeśli chcemy dokładnie wiedzieć, jaką wartość przedstawia liczba w formacie IEEe-754, należy wykonać następujące obliczenia:
\\[ E!=0...0 \wedge M\neq1...1 \Rightarrow (-1)^S(1,M)_22^{E-B} \text{(liczba znormalizowana)} \\]
\\[ E=0...0 \wedge M\neq0...0 \Rightarrow (-1)^S(1,M)_22^{1-B} \text{ (liczba zdenormalizowana) } \\]
\\[ E=0...0 \wedge M=0...0 \Rightarrow 0 \\]
\\[ E=1...1 \wedge M=0...0 \Rightarrow (-1)^S\infty \\]
\\[ E=1...1 \wedge M\neq0...0 \Rightarrow NaN \text{ (Not a Number)} \\]
B jest stała, dla float równa 127, dla double 1023.

Przykład
\\[ n=11000000111100110101101010110101 \\]
n jest 32-bitowe, więc mamy do czynienia z float.
\\[ S=1 \\]
\\[ E=10000001=(129)_{10} \\]
\\[ M=11100110101101010110101 \\]
\\[ (1.M)_2 = \left(1 + \frac{7559861}{8388608}\right)_{10} \\]
\\[ n = -\left(1+\frac{7559861}{8388608}\right)\cdot2^{129-127} = -7.604822635650634765625 \\]

##### Zamiana wymiernego naturalnego kodu binarnego na liczbę w formacie IEEE-754
Jeśli liczba binarna jest w postaci \\( \pm b_nb_{n-1}...b_0 , c_0...c_k \\), to należy przesunąć przecinek w lewo (tak jak się to robi w przypadku notacji wykładniczej). Wtedy liczba będzie wyglądała w taki sposób:
\\[ \pm b_n,b_{n-1}...b_0c_0...c_k \cdot 2^{n-1} \\]
Aby teraz zamienić taką liczbę na IEEE-754, wystarczy zauważyć, że:
\\[ M=b_{n-1}...b_0c_0...c_k0...0 \\]
Liczba zer na końcu jest równa (23 lub 52) - \\( (n-1)-k \\)
\\[ E=NKB((n-1)+(127 lub 1023)) \\]
\textbf{Przykład:}\\
Jak można zapisać \\( (-7.375)_{10}=-111.011 \\) w IEEE-754 (float)?
\\[ 111.011 = 1.11011\cdot2^2 \\]
\\[ S=1 \\]
\\[ M=11011000000000000000000 \\]
\\[ E=2+127=129=(10000001)_2 \\]
Nasza liczba zatem to:
\\[ 11000000111011000000000000000000=(C0EC0000)_{16} \\]

##### Prównywanie liczb w formacie IEEE-754
Algorytm porównywania liczb w IEEE-754 jest następujący (autorski):
* weźmy a, b w formacie IEEE-754
* jeśli \\( S(a)\neq S(b) \\) , to mniejsza jest liczba której \\( S=1 \\). Następne kroki dla ułatwienia zapisu przedstawię tylko dla liczb dodatnich, dla liczb ujemnych jest dokładnie odwrotnie
* jeśli \\( E(a)=E(b) \\), to większa jest liczba o większej mantysie
* jeśli wykładniki są rózne to mamy p...., a nie, to też jest proste. Wystarczy wtedy porównać wykładniki. Dowód pozostawiam czytelnikowi, bo jest bardzo prosty.