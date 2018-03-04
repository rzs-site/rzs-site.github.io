---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

{::options parse_block_html="true" /}
<div class="math-box"><p>"Liczby rządzą światem." - Pitagoras</p></div>
{::options parse_block_html="false" /}

#### Systemy pozycyjne
Każda liczba jest reprezentowana w następujący sposób:
\\[ c_{n-1}p^{n-1} + ... + c_2 p^2 + c_1 p^1 + c_0 p^0 = \sum_{i=0}^{n-1} c_ip^i  \\]
gdzie p jest nazywane \textbf{podstawą}, \\(0 \leq c_i \leq p-1 \\) nazywane jest cyfrą, a n to jest ilość cyfr. Liczby takie można przedstawić również w wersji skróconej:
\\[ (c_{n-1}...c_2c_1c_0)_p \\]
lub jeśli podstawa jest wiadoma:
\\[ c_{n-1}...c_2c_1c_0 \\]
Taki sposób reprezentacji liczby nazywamy \textbf{systemem pozycyjnym}.\\
Najczęściej używane przez nas podstawy to 2, 10 i 16. \\
\textbf{Przykłady:}
\\[ (75)_{10} = 7*10+5*1 \\]
\\[ (111000)_2 = 1*2^5+1*2^4+1*2^3 \\]
\\[ (AB)_{16} = A*16+B*1 \\]

#### Zamiana podstaw systemów pozycyjnych
\subsection{Liczby całkowite}
\textbf{Sposób I (dzielenie):}\\
Aby zmienić podstawę liczby, należy starą liczbę dzielić przez podstawę, zapisując resztę do najmniej znaczącej cyfry, tak długo póki nie otrzymamy 0.\\
\textbf{Przykłady:}\\
\\[ (23)_{10} = ( ? )_2 \\]
\\[ 23 : 2 = 11\ r\ \textbf{1} \\]
\\[ 11 : 2 = 5\ \ r\ \textbf{1} \\]
\\[ 5 : 2 = 2\ \ r\ \ \textbf{1} \\]
\\[ 2 : 2 = 1\ \ r\ \textbf{0} \\]
\\[ 1 : 2 = 0\ \ r\ \textbf{1} \\]
Ponieważ zaczynamy reszty od najmniej znaczącej cyfry, mamy:
\\[ (23)_{10} = (10111)_2 \\]
\\[ (231)_{10} = (?)_{16}  \\]
\\[ 231:16=14\ r\ \textbf{7} \\]
\\[ 14:16=0\ r\ \textbf{14 (E)} \\]
\\[ (231)_{10} = (E7)_{16} \\]

\textbf{Sposób II (algorytm ,,zachłanny''):}\\
Bierzemy największą możliwą potęgę nowej podstawy, zapisujemy ją w systemie o starej podstawie, następnie odejmujemy od starej liczby, zapisując na najbardziej znaczącej cyfrze ile razy odejmowaliśmy. Powtarzamy algorytm aż do otrzymania 0.\\
\textbf{Przykład:}
\\[ (123)_{10} = (?)_2 \\]
\\[ 123 \geq 2^6 = 64 \\]
\\[ 123 - \textbf{1}*64 = 59 \geq 2^5 \\]
\\[ 59 - \textbf{1}*32 = 27 \geq 2^4 \\]
\\[ 27 - \textbf{1}*16 = 11 \geq 2^3 \\]
\\[ 11 - \textbf{1}*8 = 3 \leq 2^2 \\]
\\[ 3 \geq 2^1 \\]
\\[ 3 - \textbf{1}*2 = 1 \geq 2^0 \\]
\\[ 1 - \textbf{1}*1 = 0 \\]
Nie odejmowaliśmy jedynie liczby $2^2$, na tej pozycji mamy 0.
\\[ (123)_{10} = (1111011)_2 \\]
Teraz przykład nieco trudniejszy:\\
\\[ (215)_7 = (?)_4 \\]
\\[ 4^4 = (514)_7 \\]
\\[ 215 \geq 4^3 = (121)_7 \\]
\\[ 215 - \textbf{1}*121 = 64 \geq 4^2 = 22 \\]
\\[ 64 - \textbf{2}*22 = 20 \geq 4^1 \\]
\\[ 20 - \textbf{3}*4 = 2 \geq 1 \\]
\\[ 2 - \textbf{2}*1 = 0 \\]
\\[ (215)_7 = (1232)_4 \\] 
 
##### Zamiana systemów, których podstawy są swoimi potęgami
Jeśli nowa podstawa ( $p_{new}\\() jest w postaci \\)p_{new}=p_{old}^a $, to w liczbie, którą chcemy zamienić, grupujemy od prawej po a cyfr, i każda z tych grup tworzy jedną cyfrę w nowym systemie. Jeśli najstarsza grupa jest niepełna, dopisuje się zera.\\
\textbf{Przykłady:}
\\[ \ \ (100011)_{2} = (?)_{16} \\]
\\[ (0010|0011)_{2}=(2|3)_{16}=(23)_{16} \\]
\\[ (1022201)_3 = (?)_9 \\]
\\[ (01|02|22|01)_3=(1|2|8|1)_9=(1281)_9 \\]
Jeśli stara podstawa jest w postaci $p_{old}=p_{new}^a$, to zamieniamy cyfry na nowy system, dopisując zera po lewej stronie tak, aby stworzyć grupę a-elementową.
\textbf{Przykłady:}
$$(D1)_{16}=(1110|1)_2=(1110|0001)_2 = (11100001)_2$$
$$(3781)_9=(10|21|22|01)_3 = (10212201)_3$$ 

##### Liczby wymierne
Aby zamienić podstawę liczby wymiernej, należy część całkowitą zamienić normalnie, a następnie część ułamkową mnożyć przez nową podstawę, zapisując część całkowitą z wyniku na kolejnej pozycji po przecinku.\\
\textbf{Przykłady:}\\
\\[ (2.25)_{10} = (?)_2 \\]
\\[ (2)_{10} = (10)_2 \\]
\\[ 0.25 * 2 = \textbf{0}.5 \\]
\\[ 0.5 * 2 = \textbf{1}.0 \\]
\\[ (2.25)_{10} = (10.01)_2 \\]
\\[ (3.4)_{10} = (?)_3 \\]
\\[ (3)_{10} = (10)_3 \\]
\\[ 0.4 * 3 = \textbf{1}.2 \\]
\\[ 0.2 * 3 = \textbf{0}.6 \\]
\\[ 0.6 * 3 = \textbf{1}.8 \\]
\\[ 0.8 * 3 = \textbf{2}.4 \\]
$0.4$ się powtarza, więc otrzymaliśmy ułamek okresowy.
\\[ (3.4)_{10} = (10.(1012))_3 \\]

#### Operacje na liczbach w systemie pozycyjnym
Operacje na liczbach w dowolnym systemie pozycyjnym wykonuje się w taki sam sposób jak w systemie dziesiętnym, najlepiej pisemnie.\\
\textbf{Przykład:}
\\[ (234)_{16}*(5)_{16} = (4*5)*16^0 + (3*5)*16^1 + (2*5)*16^2 \\]
\\[ (234)_{16}*(5)_{16} = 4*16^0 + (1+E)*16^1 + A*16^2 \\]
\\[ (234)_{16}*(5)_{16} = 4*16^0 + 0 * 16^1 + B * 16^2 = (B04)_{16} \\]