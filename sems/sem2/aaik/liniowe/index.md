---
layout: acc_layout
toc: aaik
use_math: true
---

### Kody liniowe

1.  Pojęcie równoważności kodów
2.  Kod liniowy nad ciałem  \\(  \|F\|=q  \\)  : podprzestrzeń liniowa
    przestrzeni liniowej nad ciałem  \\(  F  \\) 
3.  Oznaczenie  \\(  \\mathcal{C}  \\)  jest  \\(  \[n,k\]\_q  \\) 
    kodem liniowym jeśli  \\(  \|F\|=q  \\)  oraz  \\(  \\mathcal{C}
     \\)  jest  \\(  k  \\)  wymiarową podprzestrzenią przestrzeni  \\( 
    F^n  \\) 
4.  Macierz kodu: macierz której wierszami jest baza kodu
5.  Kodowanie:  \\(  E(x) = x \\cdot G  \\) 
6.  Def. waga wektora:  \\(  w(x) = \|\\{i: x\_i\\neq 0\\}\|  \\) 
7.  Twierdzenie:  \\(  \\Delta(\\mathcal{C}) = \\min\\{w(x): x \\in
    \\mathcal{C}\\setminus \\{0\\}\\}  \\) 
8.  Macierz standardowa kodu: macierz postaci  \\(  G = \[I\_k\|B\]
     \\) 
9.  Każdy kod liniowy ma macierz standardową
10. Macierz standardowa: macierz której wierszmi są warstwy kodu, w
    pierwszj kolumnie jest element o najmniejszej wadze z danej warstwy;
    ozostałe elementy wiersza są przesunięciami elementów kodu
    (umieszczonego w pierwszym wierszu) o element z pierwszej kolumny.
11. Metoda odczytywania zakodowanej informacji za pomocą macierzy
    standardowej kodu.
12. Kod dualny do kodu  \\(  \\mathcal{C}  \\)  :  \\[ 
    \\mathcal{C}^{\\perp} = \\{x \\in F^n: (\\forall
    y\\in\\mathcal{C})(\\langle\,x,y\\rangle = 0)\\}  \\] 
13. Twierdzenie.  \\(  \\mathcal{C}^{\\perp} = ker(F)  \\)  , gdzie
     \\(  F(x) = G\\cdot x^T  \\)  .

### Kody liniowe - II

1.  Tw. Jeśli  \\(  \\mathcal{C}  \\)  jest  \\(  \[n,k\]  \\)  kodem,
    to  \\(  \\mathcal{C}^{\\perp}  \\)  jest  \\(  \[n,n-k\]  \\) 
    kodem liniowym.\
    Dowód (szkic): Przyglądamy się odwzorowaniu  \\(  h:K^n \\to K^k
     \\)  określonym wzorem  \\(  h(x) = G\\cdot x^T  \\)  . Zaczymany
    od zauważenie, że  \\(  h  \\)  jest odwzorowaniem liniowym oraz, że
     \\(  ker(h) = \\mathcal{C}^{\\perp}  \\)  .
2.  Tw. Jeśli wymiary macierzy  \\(  A,B,C,D  \\)  się zgadzają, to
     \\[  \\begin{bmatrix}A&B\\end{bmatrix} \\cdot
    \\begin{bmatrix}C \\\\ D\\end{bmatrix} = A\\cdot C + B\\cdot D\~.
     \\] 
3.  Wniosek: Jeśli  \\(  A \\in M\_{k,n-k}(K)  \\)  , to  \\[ 
    \\begin{bmatrix}I\_k&A \\end{bmatrix} \\cdot
    \\begin{bmatrix}-A \\\\ I\_{n-k} \\end{bmatrix} = 0\~.  \\] 
4.  Wniosek. Jeśli  \\(  G = \[I\_k\|A\]  \\)  jest macierzą generującą
     \\(  \[n,k\]  \\)  kodu  \\(  \\mathcal{C}  \\)  to macierz
    generująca kodu  \\(  \\mathcal{C}^{\\perp}  \\)  ma postać  \\[ 
    H = \[-A^T \| I\_{n-k}\]  \\]  Nazywamy ją macierzą kontroli
    parzystości kodu  \\(  \\mathcal{C}  \\)  .
5.  Przykład: Jeśli  \\(  G =
    \\begin{bmatrix}1&0&1 \\\\ 0&1&1 \\end{bmatrix}  \\)  , to  \\(  H =
    \\begin{bmatrix}1&1&1\\end{bmatrix}  \\) 
6.  Tabela syndromów macierzy standardowej kodu i wykorzystanie jej do
    odkodowywania sygnału.
7.  Tw. Niech  \\(  H  \\)  będzie macierzą kontroli parzystości kodu
     \\(  \\mathcal{C}  \\)  . Wtedy  \\[  \\Delta(\\mathcal{C}) =
    \\min\\{d: H \\text{ ma } d \\text{ kolumn liniowo zależnych}\\}
     \\] 

### Przykłady kodów liniowych

1.  Kody Hamminga  \\(  H\_n  \\)  : macierz kontroli parzystości
    tworzymy z niezerowych wektorów  \\(  \\{0,1\\}^n  \\)  .
    1.  Kody Hamminga są  \\(  \[2^n, 2^n-n+1,3\]  \\)  kodami
    2.  Kody Hamminga są doskonałe.
2.  Kody Haddamara  \\(  Had\_n  \\)  : macierz generująca tworzymy ze
    wszystich wektorów  \\(  \\{0,1\\}^n  \\)  .
    1.  Tw. Jeśli  \\(  x\\neq 0  \\)  oraz  \\(  f\_x(y) = \\sum\_i
        x\_i y\_i  \\)  (liczymy w  \\(  \\mathbb{Z}\_2  \\)  ) to  \\( 
        \|ker(f\_x)\| = 2^{n-1}  \\) 
    2.  Kody Hamminga są  \\(  \[2^n, n,2^{n-1}\]  \\)  kodami
3.  Kody Reeda - Solomona
    1.  Ustalamy ciało skończone  \\(  K  \\)  , liczbę  \\(  k  \\) 
        oraz parami różne  \\(  a\_1, \\ldots, a\_n \\in K  \\)  . Dla
         \\(  x \\in K^k  \\)  definiujemy wielomian  \\(  f\_x(y) =
        \\sum\_{i=0}^{k-1} x\_i y^k  \\)  (uwaga  \\(  f\_x \\in
        K\[y\]  \\)  ) oraz definujemy funkcję kodującą  \\[ 
        C(x)=(f\_x(a\_1), f\_x(a\_2), \\ldots, f\_x(a\_n))\~.  \\] 
    2.  To jest kod linowy. Macierz generująca  \\( 
        ((a\_i)^j)\_{i=1\\ldots,n;j=0,\\ldots,k-1}  \\) 
    3.  Tw (o wyznaczniku Vandermonda):  \\[ 
        \\det(((a\_i)^j)\_{i=1,\\ldots,n;j=0,\\ldots,n-1} =
        \\prod\_{i\\gt j}(a\_i-a\_j)  \\] 
    4.  RS kody są  \\(  \[n,k,n-k+1\]  \\)  kodami

