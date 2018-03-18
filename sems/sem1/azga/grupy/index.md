---
layout: default
use_math: true
---

Algebra z Geometrią Analityczną
---

\\( \\def\\RR{\\mathbb{R}} \\def\\QQ{\\mathbb{Q}} \\def\\ZZ{\\mathbb{Z}}
\\def\\CC{\\mathbb{C}} \\def\\NN{\\mathbb{N}}
\\def\\IFF{\\leftrightarrow}
\\newcommand{\\span}\[1\]{\\mathrm{span}(\#1)}
\\newcommand{\\IS}\[2\]{\\langle\\,\#1,\#2\\rangle}
\\newcommand{\\GG}\[1\]{\\langle\#1\\rangle}
\\newcommand{\\sgn}\[1\]{\\mathrm{sgn}(\#1)}
\\newcommand{\\rank}\[1\]{\\mathrm{rank}(\#1)}
\\newcommand{\\nwd}\[2\]{\\mathrm{nwd}(\#1,\#2)} \\)


### 02.03.2017: Grupy i podgrupy

1.  Def. Zbiór  \\(  H\\subseteq G  \\)  jest podgrupą grupy  \\( 
    (G,\\cdot)  \\)  jeśli  \\(  H\\neq \\emptyset  \\)  oraz
    1.   \\(  (\\forall x,y\\in H)(x\\cdot y \\in H)  \\) 
    2.   \\(  (\\forall x\\in H)(x^{-1} \\in H)  \\) 
2.  Tw. Niepusty podzbiór  \\(  H  \\)  grupy  \\(  (G,\\cdot)  \\) 
    jest podgrupą wtedy i tylko wtedy, gdy  \\[  (\\forall x,y\\in
    H)(x\\cdot y^{-1} \\in H)  \\] 
3.  Tw. Jeśli  \\(  \\mathcal{H}  \\)  jest rodziną podgrup grupy  \\( 
    (G,\\cdot)  \\)  to  \\(  \\bigcap\\mathcal{H}  \\)  jest podgrupą
    grupy  \\(  (G,\\cdot)  \\)  .
4.  Def. Podgrupą grupy   \\(  (G,\\cdot)  \\)  generowaną przez zbiór
     \\(  X\\subseteq X  \\)  nazywamy najmniejszą podgrupę  \\( 
    \\GG{X}  \\)  grupy  \\(  G  \\)  zawierającą zbiór X. Mamy  \\[ 
    \\GG{X} = \\bigcap\\{H: \\text{ jest podgrupą } G \\land X\\subseteq
    H\\}  \\] 
5.  Jeśli  \\(  \\rank{a}=k  \\)  to  \\(  \\GG{a} =
    \\{e,a,a^2,\\ldots,a^{k-1}\\} \\sim C\_k  \\)  .
6.  Jeśli  \\(  \\rank{a}=\\infty  \\)  to  \\(  \\GG{a} =
    \\{\\ldots,a^{-2},a^{-1},e,a,a^2,\\ldots\\} \\sim (\\ZZ,+)  \\) 
    . Izomorfizm:  \\(  \\phi:\\ZZ\\to G: k \\to a^k  \\) 
7.  Graf Cayley\'a grupy  \\(  C\_5\\times C\_2  \\)  :\
    ![](Algebra/C5C2.png)
8.  Grupa symetrii  \\(  n  \\)  -kąta równobocznego  \\(  D\_{2n}  \\) 
    : obrót  \\(  \\alpha  \\)  , odbicie  \\(  \\beta  \\)  ; równania:
     \\(  \\alpha^n=e  \\)  ,  \\(  \\beta^2=e  \\)  ,  \\( 
    \\alpha\\beta\\alpha\\beta=e  \\)  ; graf Cayley\'a grupy  \\( 
    D\_{8}  \\)  :\
    ![](Algebra/D8.png)
9.  **Twierdzenie \[Lagrange\]** Jeśli  \\(  H  \\)  jest podgrupą
    skończonej grupy  \\(  G  \\)  , to  \\[  \\mathrm{card}(H) \\big\|
    \\mathrm{card}(G)\~.  \\]  Dowód (szkic). Określamy relację  \\( 
    x\\sim y \\IFF xy^{-1}\\in H  \\)  . Pokazujemy, że jest to relacja
    równoważności na  \\(  G  \\)  . Pokazujemy, że  \\(  \[a\]\_\\sim =
    H \\cdot a  \\)  (=  \\(  \\{ha:h\\in H\\}  \\)  ). Następnie
    pokazujemy, że  \\(  \|Ha\| = \|H\|  \\)  .\
    **UWAGA: musicie znać ten dowód !!!**
10. Wniosek. Jeśli  \\(  G  \\)  jest grupą skończoną oraz  \\(  a\\in G
     \\)  to  \\(  \\rank{a} \| \\mathrm{card}(G)  \\) \
    Dowód (szkic):  \\(  \|\\GG{a}\| = \\rank{a}  \\)  . Następnie
    stosujemy twierdzenie Lagrange\'a.
11. **Wniosek** (Małe Twierdzenie Fermata) Niech  \\(  p  \\)  będzie
    liczbą pierwszą oraz  \\(  1\\leq a\\lt p  \\)  . Wtedy  \\[ 
    a^{p-1} = 1 \\mod p  \\]  Dowód (szkic): Stosujemy poprzedni
    wniosek do grupy  \\(  \\ZZ\_p^\*
    =(\\{1,2,\\ldots,p-1\\},\\cdot\_p)  \\)  .

### 09.03.2017: Funkcja Eulera

1.  Def.  \\(  \\phi(n) = \|\\{k: 1\\leq k\\leq n \\land
    \\nwd{k}{n}=1\\}\|  \\)  .
2.  Tw. Eulera: Jeśli  \\(  nwd(x,n)=1  \\)  to  \\(  x^{\\phi(n)} = 1
    \\mod n  \\) 
3.  W1.  \\(  \\phi(n)=1  \\) 
4.  W2. Jeśli  \\(  p  \\)  jest pierwsza i  \\(  k\\geq 1  \\)  , to
     \\(  \\phi(p^k)=p^k - p^{k-1}  \\)  .
5.  **Chińskie Twierdzenie o Resztach** (klasyczna wersja). Jeśli  \\( 
    \\nwd{n\_1}{n\_2} = 1  \\)  oraz  \\(  0\\leq a\_1 \\lt n\_1  \\)  ,
     \\(  0\\leq a\_2 \\lt n\_2  \\)  to istnieje x takie, że  \\( 
    0\\leq x \\lt n\_1n\_2  \\)  oraz  \\[  \\begin{cases} x \\equiv
    a\_1 \\mod n\_1 \\ x \\equiv a\_2 \\mod n\_2 \\end{cases}  \\] 
    Hint: Znajdujemy  \\(  X,Y  \\)  takie, że  \\(  n\_1 X+ n\_2 Y = 1
     \\)  i rozważamy liczbę  \\(  x = n\_1 X a\_2 + n\_2 Y a\_1  \\)  .
6.  **Chińskie Twierdzenie o Resztach** (nowoczesna wersja). Jeśli  \\( 
    \\nwd{n}{m} = 1  \\)  to  \\[  Z\_{n m} \\cong Z\_{n} \\times
    Z\_{m}  \\]  Hint: Rozważamy funkcję  \\(  f:Z\_{n m} \\to Z\_{n}
    \\times Z\_{m}  \\)  określoną wzorem  \\(  f(x) = (x \\mod n,x
    \\mod m)  \\)  .
7.  Fakt: Para  \\(  (a,b) \\in Z\_n \\times Z\_m  \\)  jest odwarcalna
    w  \\(  Z\_n \\times Z\_m  \\)  wtedy i tylko wtedy, gdy  \\(  a
     \\)  jest odwracalne w  \\(  Z\_n  \\)  i  \\(  b  \\)  jest
    odwracalny w  \\(  Z\_m  \\)  .
8.  Wniosek. Jeśli  \\(  \\nwd{n}{m} = 1  \\)  , to  \\( 
    \\phi(nm)=\\phi(n)\\phi(m)  \\)  .
9.  Wniosek.  \\(  \\phi(n) = n \\prod\_{p\|n} (1-\\frac1p)  \\)  .
10. Definicja. Podgrupa  \\(  H  \\)  grupy  \\(  G  \\)  jest
    **dzielnikiem normalnym** grupy  \\(  G  \\)  jeśli  \\[  (\\forall
    x \\in G)(\\forall h\\in H)(xhx^{-1} \\in H)  \\] 
11. Tw. Jeśli  \\(  H  \\)  jest dzielnikiem normalnym grupy  \\(  G
     \\)  , to dla każdego  \\(  x\\in H  \\)  mamy  \\(  xH=Hx  \\)  .

### 16.03.2017: Dzielniki normalne. RSA

1.  Tw. Jeśli  \\(  H  \\)  jest dzielnikiem normalnym grupy  \\(  G
     \\)  to na klasie warstw możemy okreslić działanie  \\( 
    (Hx)\\circ(Hy) = H(x\\cdot y)  \\)  . Struktura  \\(  (G/H,\\circ)
     \\)  jest grupą.
2.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to  \\( 
    ker(h)  \\)  jest dzielnikiem normalnym grupy  \\(  G  \\)  .
3.  Tw. Jeśli  \\(  f:G\\to H  \\)  jest homomorfizmem grup, to grupa
     \\(  img(f)  \\)  jest izomorficzna z grupą  \\(  G/ker(h)  \\)  .
4.  **Protokół RSA:** [opis i dowód
    poprawności](http://cs.pwr.edu.pl/cichon/MaterialyDydaktyczne/RSA.php)
5.  Tw. Dla dowolnej liczby naturalnej  \\(  n \\geq 1  \\)  mamy
     {.tablica}
     \\[  \\sum\_{d\|n} \\phi(d) = n\~.  \\] 
    

    **Szkic dowodu:**  \\[  \\begin{gather\*} n = \|\\{\\frac{k}{n}:
    1\\leq k \\leq n\\}\| = \\ \|\\sum\_{d\|k}\\{\\frac{k}{d}: 1\\leq
    k \\leq d \\land nwd(k,d)=1\\}\| = \\
    \\sum\_{d\|k}\|\\{\\frac{k}{d}: 1\\leq k \\leq n \\land
    nwd(k,d)=1\\}\| = \\ \\sum\_{d\|k}\\phi(d) \\end{gather\*}  \\] 

### 23.03.2017: Protokół Diffiego-Hellmana

1.  **Twierdzenie.** Jeśli  \\(  p  \\)  jest liczbą pierwszą, to  \\( 
    Z\_p^\*  \\)  jest grupą cykliczną.\
    **Szkic dowodu.** Zakładamy, że jest  \\(  a\\in Z\_p^\*  \\) 
    takie, że  \\(  rank(a)= d\|(p-1)  \\)  pokazujemy, że  \\[  (a) =
    \\{x: x^d - 1=0\\},  \\]  z tego wnioskujemy, że wszystkie
    elementy rzędu  \\(  d  \\)  (jeśli są takie) są w podgupie
     \\(  (a)  \\)  ; następnie pokazujemy, że w podgrupie  \\(  (a)
     \\)  istnieje  \\(  \\phi(d)  \\)  elementów rzędu  \\(  d  \\)  ;
    na koniec korzystamy ze wzoru  \\(  p-1 = \\sum\_{d\|p-1} \\phi(d)
     \\)  .
2.  **Problem logarytmu dyskretnego.** Dana jest liczba pierwsza  \\(  p
     \\)  , generator  \\(  g  \\)  grupy  \\(  Z\_p^\*  \\)  oraz
     \\(  b \\in Z\_p^\*  \\)  : znajdź  \\(  x \\in Z\_p^\*  \\) 
    takie, że  \\(  g^x = b  \\)  .
3.  **Protokół Diffiego-Hellmana.** Mamy ustaloną duża liczbę pierwszą
     \\(  p  \\)  oraz generator  \\(  g  \\)  grupy  \\(  Z\_p^\*
     \\)  ; Alicja losuje liczbę  \\(  x\\in Z\_p^\*  \\)  i wysyła do
    Boba  \\(  g^x  \\)  ; Bob losuje liczbę  \\(  y \\in Z\_p^\*
     \\)  i wysyła  \\(  g^y  \\)  do Alicji; Alicja oblicza  \\( 
    k=(g^y)^x = g^{xy}  \\)  ; Bob oblicza  \\(  k=(g^x)^y =
    g^{xy}  \\)  ; to jest ich wspólny sekret.
4.  UWAGA: Polecam przyjrzenie się notatkom David Perkinsona
    [Differential Calculus of Several
    Variables](http://people.reed.edu/~wieting/essays/DPMath211.pdf)

### 30.03.2017: Pierścienie i ideały

Pojęcie ideału w pierścieniu przemiennym z jednością

Ideał generowany przez element  \\(  a\\in R  \\)  :  \\(  (a)=
\\{ra:r\\in R\\}  \\) 

Ideał generowany przez elementy  \\(  a,b\\in R  \\)  :  \\(  (a,b) =
\\{ra + sb:r,s \\in R\\}  \\) 

Konstrukcja pierścienia ilorazowego: I - ideał w R:

-    \\(  (a \\sim\_I b) \\equiv a-b \\in I  \\) 
-    \\(  R/I = \\{\[a\]\_I : a \\in R\\}  \\) 
-    \\(  \[a\]\_I + \[b\]\_I = \[a+b\]\_I  \\) 
-    \\(  \[a\]\_I \* \[b\]\_I = \[a\*b\]\_I  \\) 

Przykład:  \\(  \\RR\[x\]/(x) \\cong \\RR  \\) 

**PRZYKŁAD**

 {.tablica}
 \\[  \\RR\[x\]/(x^2+1) \\cong \\CC  \\] 

Przykłąd:  \\(  \\ZZ\_2\[x\]/(1+x+x^2)  \\)  jest cztero elementowym
ciałem

Tw. Jeśli  \\(  f:R\_1 \\to R\_2  \\)  jest homomorfizmem pierścieni, to
 \\(  ker(f)  \\)  jest ideałem pierścienia  \\(  R\_1  \\) 

Tw. Jeśli  \\(  f:R\_1 \\to R\_2  \\)  jest epimorfizmem pierścieni, to
 \\(  R\_1/ker(f) \\cong R\_2  \\) 

Tw. Niech  \\(  I  \\)  będzie ideałem pierścienia  \\(  R  \\)  . Niech
 \\(  Q(a) = \[a\]\_I  \\)  .

1.  Jeśli  \\(  I\\subseteq J \\subseteq R  \\)  jest ideałem, to  \\( 
    Q\[J\]  \\)  jest ideałem w  \\(  R/I  \\)  oraz  \\( 
    Q^{-1}\[Q\[J\]\]=J  \\) 
2.  Jeśli  \\(  H\\subseteq R/I  \\)  jest ideałem, to  \\( 
    Q^{-1}\[H\]  \\)  jest ideałem w  \\(  R  \\)  oraz  \\( 
    Q\[Q^{-1}\[H\]\]=H  \\) 

### 06.04.2017: Ideały

1.  Def.Jednostki pierścienia R: U(R) = zbiór elementów odwracalnych
    pierścienia R.\
    Przykłady:  \\(  U(\\ZZ) = \\{-1,1\\}  \\)  ,  \\(  U(\\ZZ\[i\]) =
    \\{1,-1,i,-i\\}  \\) 
2.  Podzielność w dowolnym pierścieniu:  \\(  a\|b \\IFF (\\exists
    q)(a\\cdot q = b)  \\) 
3.  Elementy stowarzyszone:  \\(  (a\\sim b) \\IFF ((a\|b)\\land (b\|a))
     \\) 
4.  Tw. W dziedzinie całkowitości mamy:  \\(  (a\\sim b) \\IFF (\\exists
    u\\in U(R)(a=u\\cdot b)  \\) 
5.  Jeśli  \\(  R  \\)  jest pierścieniem z jednością, to ideał  \\(  I
     \\)  jest właściwy wtedy i tylko wtedy, gdy  \\(  1 \\notin I  \\) 
    .
6.  Def. I jest ideałem maksymalnym jeśli  \\(  I\\neq R  \\)  oraz
    jeśli  \\(  J  \\)  jest takim ideałem, że  \\(  I\\subseteq J  \\) 
    oraz  \\(  J\\neq I  \\)  to  \\(  J=R  \\) 
7.  **Twierdzenie.** Jeśli  \\(  R  \\)  jest pierścieniem z jednością
    oraz  \\(  I  \\)  jest ideałem właściwym, to istnieje ideał
    maksymalny  \\(  J  \\)  taki, że  \\(  I\\subseteq J  \\) \
    Dowód. Dosyć proste zastosowanie Lematu Kuratowskiego-Zorna do
    rodziny  \\[  X = \\{J:I\\subseteq J \\land J \\textrm{ jest
    ideałem } \\land 1\\notin I \\}  \\]  uporządkowanej przez
    inkluzję.
8.  Tw. Jeśli  \\(  R  \\)  jest pierścieniem z jednością (  \\(  1\\neq
    0  \\)  ) oraz  \\(  I  \\)  jesi ideałem w  \\(  R  \\)  , to  \\( 
    R/I  \\)  jest ciałem wtedy i tylko wtedy, gdy  \\(  I  \\)  jest
    ideałem maksymalnym.
9.  Def. Element  \\(  p  \\)  jest pierwszy, jeśli  \\(  (\\forall
    a,b)(p\|(a\\cdot b) \\to ((p\|a)\\lor(p\|b))  \\) 
10. Def. Ideał  \\(  I  \\)  jest pierwszy, jeśli  \\(  (\\forall
    a,b)(a\\cdot b\\in I \\to ((a\\in I) \\lor (b\\in I))  \\) 
11. Tw. Element  \\(  p  \\)  jest pierwszy wtedy i tylko wtedy, gdy
    ideał  \\(  (p)  \\)  jest pierwszy

Wskazówka do zadania o funkcji  \\(  \\phi(n)  \\)  : zauważmy najpierw,
że jeśli  \\(  n\\gt 2  \\)  to  \\(  2\|\\phi(n)  \\)  ; załóż
następnie  \\(  \\phi(n)\|n  \\)  i rozważ najmniejszą liczbę pierwszą
większą od 3, która dzieli  \\(  n  \\)  (wygodnie jest rozważyć napierw
liczby  \\(  n  \\)  , które nie są podzielne przez  \\(  3  \\)  , a
potem te które dzielą się przez  \\(  3  \\)  ).

### 20.04.2017: Dziedziny Ideałów Głównych

1.  **Definicja** **Dziedzina euklidesowa** (ED): dziedzina całkowitości
    z funkcją  \\(  v:R\\to\\NN  \\)  (normą) taką, że
    1.   \\(  v(x)=0 \\equiv x=0  \\) 
    2.  Dla dowolnych  \\(  a,b\\in R  \\)  takich, że  \\(  b\\neq 0
         \\)  istnieją  \\(  q, r \\in R  \\)  takie, że  \\(  a=
        q\\cdot q+r  \\)  oraz  \\(  v(r)\\lt v(b)  \\)  .
2.  **Definicja** Dziedzina  \\(  R  \\)  jest **dziedziną ideałów
    głównych** (PID) jeśli każdy ideał w  \\(  R  \\)  jest główny
3.  **Twierdzenie.**  \\(  ED \\subseteq PID  \\) 
4.  Przykład. W pierścieniu  \\(  \\ZZ\[x\]  \\)  ideał  \\(  (2,x)
     \\)  nie jest ideałem głównym.
5.  **Twierdzenie.** Jeśli  \\(  R  \\)  jest PID oraz  \\( 
    I\_0\\subseteq I\_1 \\subseteq I\_2 \\subseteq \\ldots  \\)  są
    ideałami, to istnieje  \\(  n  \\)  takie, że  \\(  (\\forall k\\geq
    n)(I\_k = I\_n)  \\)  .
6.  **Definicja** Element  \\(  p  \\)  jest **nierozkładalny** jeśli
    dla dowolnych  \\(  a  \\)  ,  \\(  b  \\)  takich, że  \\( 
    p=a\\cdot b  \\)  mamy  \\(  a\\in U(R)  \\)  lub  \\(  b \\in U(R)
     \\)  .
7.  **Twierdzenie.** Elementy pierwsze są nierozkładalne
8.  **Twierdzenie.** W PID elementy nierozkładalne sa pierwsze.
9.  Przykład: W pierścieniu  \\(  \\ZZ\[\\sqrt{-3}\]  \\)  liczba  \\( 
    2  \\)  jest nierozkładalna ale nie jest pierwsza:  \\( 
    2\|(1+i\\sqrt{3})(1-i\\sqrt{3})  \\)  .
10. PRZYKŁAD (Twierdzenie Fermata): Liczba pierwsza  \\(  p\\gt 2  \\) 
    jest postaci  \\(  4k+1  \\)  wtedy i tylko wtedy, gdy istnieją
    takie liczby całkowite  \\(  a  \\)  i  \\(  b  \\)  , że  \\(  p =
    a^2+b^2  \\)  .\
    Szkic dowodu: (1)→(2).Napierw pokazujemy, że w  \\(  Z\_p^\*  \\) 
    jest taki element  \\(  a  \\)  , że  \\(  rank(a)=4  \\)  ;
    pokazujemy, że  \\(  a^2=-1  \\)  ; z czego wnioskujemy, że  \\( 
    p\|(a^2+1)  \\)  . Przechodzimy teraz do pierścienia liczb Gaussa.
    Pokazujemy, że  \\(  p\|(a+i)(a-i)  \\)  oraz, że  \\( 
    \\neg(p\|(a+i))  \\)  oraz  \\(  \\neg(p\|(a-i))  \\)  . Z tego
    wnioskujemy, że  \\(  p  \\)  nie jest elementem pierwszym w  \\( 
    \\ZZ\[i\]  \\)  . Zatem nie jest elementem nierozkładalnym. Bierzemy
     \\(  u,v \\in \\ZZ\[i\]  \\)  które nie są jednostkami oraz takie,
    że  \\(  p=u\\cdot v  \\)  . Wtedy  \\(  p^2 = \|u\|^2\|v\|^2
     \\)  . Pokazujemy, że  \\(  p=\|u\|^2  \\)  . Co kończy dowód.

### 27.04.2017: UFD

1.  **Definicja** Pieścień  \\(  R  \\)  ma własność jednoznaczności
    rozkładu jeśli każdy jego element można zapisać jednoznacznie, z
    dokładnością do permutacji składników i równoważności, jako iloczyn
    elementów nierozkładalnych.
2.  **Twierdzenie** PID  \\(  \\subseteq  \\)  UFD.
3.  **Definicja**. Ciało  \\(  K  \\)  ma charakterystykę  \\(  0  \\) 
    jeśli  \\(  n\\cdot 1\_k \\neq 0\_K  \\)  dla każdej liczby
    naturalnej  \\(  n\\geq 1  \\)  .\
    Ciało  \\(  K  \\)  ma charakterystykę  \\(  d\\geq 2  \\)  jeśli
     \\(  d  \\)  jest najmniejszą liczbą naturalną  \\(  k\\geq 2  \\) 
    taką, że  \\(  k\\cdot 1\_K = 0\_K  \\) 
4.  **Twierdzenie**. Jeśli ciało  \\(  K  \\)  ma charakterystykę  \\( 
    d\\geq 2  \\)  to  \\(  d  \\)  jest liczbą pierwszą.
5.  **Twierdzenie**. Jeśli ciało  \\(  K  \\)  ma charakterystykę  \\( 
    p\\geq 2  \\)  to  \\(  Z\_p  \\)  można zanurzyć izomorficznie w
    ciało  \\(  K  \\)  .
6.  **Twierdzenie**. Jeśli ciało  \\(  K  \\)  ma charakterystykę  \\( 
    0  \\)  , to w ciało  \\(  K  \\)  można zanurzyć liczby wymierne.
7.  **Twierdzenie**. Jeśli ciało skończone  \\(  K  \\)  ma
    charakterystykę  \\(  p\\geq 2  \\)  to  \\(  \|K\| = p^n  \\)  dla
    pewnego  \\(  n  \\) 
8.  **Twierdzenie** (bez dowodu). Jeśli ciała skończone  \\(  K\_1  \\) 
    i  \\(  K\_2  \\)  mają tyle samo elementów, to są izomorficzne.

### 04.05.2017: Elementy Teorii Kodowania

1.  Definicja. Kod nad alfabetem  \\(  \\Sigma  \\)  : podzbiór  \\( 
    \\Sigma^\*  \\) 
2.  Definicja. Kod blokowy nad  \\(  \\Sigma  \\)  długości  \\(  n
     \\)  : podzbiór  \\(  \\Sigma^n  \\) 
3.  Odległość Hamminga na  \\(  \\Sigma^n  \\)  :  \\(  d\_H(x,y) =
    \|\\{i: x\_i \\neq y\_i\\}\|  \\) 
4.  Definicja. Rozstęp kodu:  \\(  \\Delta(\\mathcal{C}) =
    \\min\\{d\_H(x,y): x,y\\in \\mathcal{C} \\land x \\neq y\\}  \\) 
5.  Definicja. Kod  \\(  \\mathcal{C}  \\)  jest  \\(  (n,M,d)\_q  \\) 
    kodem, jeśli  \\(  \\mathcal{C} \\subseteq \\Sigma^n  \\)  ,  \\( 
    \|\\Sigma\| = q  \\)  ,  \\(  M=\|\\mathcal{C}\|  \\)  , oraz  \\( 
    \\Delta(\\mathcal{C})= d  \\) 
6.  Definicja.  \\(  B(x,r) = \\{y\\Sigma^n: d\_H(x,y)\\leq r\\}  \\) 
7.  Twierdzenie: Jeśli  \\(  \\Delta(\\mathcal{C}) \\geq d  \\)  , to
    kod  \\(  \\mathcal{C}  \\)  potrafi wykrywać do  \\(  d-1  \\) 
    błędów.
8.  Twierdzenie: Jeśli  \\(  \\Delta(\\mathcal{C}) \\geq d  \\)  , to
    kod  \\(  \\mathcal{C}  \\)  potrafi korygować do  \\( 
    \\left\\lfloor \\frac{d-1}{2}\\right\\lfloor  \\)  błędów.
9.  Twierdzenie (Singleton Bound). Jeśli istnieje  \\(  (n,M,d)\_q
     \\)  - kod to  \\(  M\\leq q^{n-d+1}  \\) 
10. Lemat:  \\(  \|B(x,r)\| = \\sum\_{k=0}^{r} \\binom{n}{k} (q-1)^k
     \\) 
11. Twierdzenie (Hamming Bound; sphere packing bound). Jeśli istnieje
     \\(  (n,M,d)\_q  \\)  - kod oraz  \\(  2k+1\\leq d  \\)  to  \\[ 
    M \\cdot \\left(\\sum\_{i=0}^{k}\\binom{n}{i}(q-1)^i\\right) \\leq
    q^n  \\]  Szkic dowodu: Jeśli  \\(  \\mathcal{C}  \\)  jest  \\( 
    (n,M,2k+1)  \\)  kodem, to kulki  \\( 
    \\{B(x,k):x\\in\\mathcal{C}\\}  \\)  są parami rozłączne.
12. Konstrukcja płaszczyzny rzutowej  \\(  PG(2,2)  \\)  nad ciałem
    2-elementowym (płaszczyzna Fano):\
    ![](Algebra/FanoPlane.png)

### 18.05.2017: Kody korekcyjne

1.  Konstrukcja  \\(  (7,16,3)\_2  \\)  kodu binarnego z płaszczyzny
    rzutowej  \\(  PG(2,2)  \\)  :
    1.  pierwsza częśc kodu: macierz koincydencji  \\(  PG(2,2)  \\) 
    2.  druga część kodu: dopełenienia elementów pierwszej części
    3.  końcówka: dodajemy dwa ciągi:  \\(  0000000  \\)  oraz  \\( 
        1111111  \\) 

    Fakt:  \\(  (7,16,3)\_2  \\)  kod jest kodem doskonałym.
2.  Ograniczenie  \\[  B\_n(0,\\lambda n) \\leq 2^{n H(\\lambda)}
     \\]  dla  \\(  \\lambda \\in (0,\\frac12)  \\)  , gdzie  \\[ 
    H(x) = x \\log\_2(\\frac1x) + (1-x)\\log\_2(\\frac{1}{1-x})  \\] 
    (funkcja entropii binarnej).
3.  Wzór Stirlinga:  \\(  n! = \\sqrt{2 \\pi n}
    \\left(\\frac{n}{e}\\right)^n(1+O(\\frac1n))  \\) 
4.  Kod ISBN:  \\(  \\mathcal{C} = \\{x\\in (\\ZZ\_{11})^{10}:
    \\sum\_{i=1}^{10} i\\cdot x\_i = 0 (\\mod 11)\\}  \\) 
5.  Fakt: Funkcja  \\(  f:(\\ZZ\_{11})^{10} \\to \\ZZ\_{11}  \\) 
    określona wzorem  \\(  f(x) = \\sum\_{i=1}^{10}i x\_i  \\)  jest
    odwzorowaniem liniowym oraz  \\(  \\mathcal{C} = ker(f)  \\)  .
6.  Obserwacja:  \\(  \\mathcal{C}  \\)  jest podprzestrzenią liniową
    przestrzeni wektorowej  \\(  (\\ZZ\_{11})^{10}  \\)  wymiaru 9

### 18.05.2017: Kody liniowe

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
    y\\in\\mathcal{C})(\\IS{x}{y} = 0)\\}  \\] 
13. Twierdzenie.  \\(  \\mathcal{C}^{\\perp} = ker(F)  \\)  , gdzie
     \\(  F(x) = G\\cdot x^T  \\)  .

### 01.06.2017: Kody liniowe - II

1.  Tw. Jeśli  \\(  \\mathcal{C}  \\)  jest  \\(  \[n,k\]  \\)  kodem,
    to  \\(  \\mathcal{C}^{\\perp}  \\)  jest  \\(  \[n,n-k\]  \\) 
    kodem liniowym.\
    Dowód (szkic): Przyglądamy się odwzorowaniu  \\(  h:K^n \\to K^k
     \\)  określonym wzorem  \\(  h(x) = G\\cdot x^T  \\)  . Zaczymany
    od zauważenie, że  \\(  h  \\)  jest odwzorowaniem liniowym oraz, że
     \\(  ker(h) = \\mathcal{C}^{\\perp}  \\)  .
2.  Tw. Jeśli wymiary macierzy  \\(  A,B,C,D  \\)  się zgadzaję, to
     \\[  \\begin{bmatrix}A&B\\end{bmatrix} \\cdot
    \\begin{bmatrix}C\\D\\end{bmatrix} = A\\cdot C + B\\cdot D\~.
     \\] 
3.  Wniosek: Jeśli  \\(  A \\in M\_{k,n-k}(K)  \\)  , to  \\[ 
    \\begin{bmatrix}I\_k&A\\end{bmatrix} \\cdot
    \\begin{bmatrix}-A\\I\_{n-k}\\end{bmatrix} = 0\~.  \\] 
4.  Wniosek. Jeśli  \\(  G = \[I\_k\|A\]  \\)  jest macierzą generującą
     \\(  \[n,k\]  \\)  kodu  \\(  \\mathcal{C}  \\)  to macierz
    generująca kodu  \\(  \\mathcal{C}^{\\perp}  \\)  ma postać  \\[ 
    H = \[-A^T \| I\_{n-k}\]  \\]  Nazywamy ją macierzą kontroli
    parzystości kodu  \\(  \\mathcal{C}  \\)  .
5.  Przykład: Jeśli  \\(  G =
    \\begin{bmatrix}1&0&1\\0&1&1\\end{bmatrix}  \\)  , to  \\(  H =
    \\begin{bmatrix}1&1&1\\end{bmatrix}  \\) 
6.  Tabela syndromów macierzy standardowej kodu i wykorzystanie jej do
    odkodowywania sygnału.
7.  Tw. Niech  \\(  H  \\)  będzie macierzą kontroli parzystości kodu
     \\(  \\mathcal{C}  \\)  . Wtedy  \\[  \\Delta(\\mathcal{C}) =
    \\min\\{d: H \\text{ ma } d \\text{ kolumn liniowo zależnych}\\}
     \\] 

### 08.06.2017: Przykłady kodów liniowych

1.  Kody Hamminga  \\(  H\_n  \\)  : macierz kontroli parzystości
    tworzymy z niezerowych wektorów  \\(  \\{0,1\\}^n  \\)  .
    1.  Kody Hamminga są  \\(  \[2^n, 2^n-n+1,3\]  \\)  kodami
    2.  Kody Hamminga są doskonałe.
2.  Kody Haddamara  \\(  Had\_n  \\)  : macierz generująca tworzymy ze
    wszystich wektorów  \\(  \\{0,1\\}^n  \\)  .
    1.  Tw. Jeśli  \\(  x\\neq 0  \\)  oraz  \\(  f\_x(y) = \\sum\_i
        x\_i y\_i  \\)  (liczymy w  \\(  \\ZZ\_2  \\)  ) to  \\( 
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

