---
layout: acc_layout
toc: aaik
use_math: true
---

### Funkcja Eulera

1.  Def.  \\(  \\phi(n) = \|\\{k: 1\\leq k\\leq n \\land
    \\mathrm{nwd}(k,n)=1\\}\|  \\).
2.  Tw. Eulera: Jeśli  \\(  nwd(x,n)=1  \\)  to  \\(  x^{\\phi(n)} = 1
    \\mod n  \\) 
3.  W1.  \\(  \\phi(n)=1  \\) 
4.  W2. Jeśli  \\(  p  \\)  jest pierwsza i  \\(  k\\geq 1  \\)  , to
     \\(  \\phi(p^k)=p^k - p^{k-1}  \\).
5.  **Chińskie Twierdzenie o Resztach** (klasyczna wersja). Jeśli  \\( 
    \\mathrm{nwd}(n\_1,n\_2) = 1  \\)  oraz  \\(  0\\leq a\_1 \\lt n\_1  \\)  ,
     \\(  0\\leq a\_2 \\lt n\_2  \\)  to istnieje x takie, że  \\( 
    0\\leq x \\lt n\_1n\_2  \\)  oraz  \\[  \\begin{cases} x \\equiv
    a\_1 \\mod n\_1 \\ x \\equiv a\_2 \\mod n\_2 \\end{cases}  \\] 
    Hint: Znajdujemy  \\(  X,Y  \\)  takie, że  \\(  n\_1 X+ n\_2 Y = 1
     \\)  i rozważamy liczbę  \\(  x = n\_1 X a\_2 + n\_2 Y a\_1  \\).
6.  **Chińskie Twierdzenie o Resztach** (nowoczesna wersja). Jeśli  \\( 
    \\mathrm{nwd}(n,m) = 1  \\)  to  \\[  Z\_{n m} \\cong Z\_{n} \\times
    Z\_{m}  \\]  Hint: Rozważamy funkcję  \\(  f:Z\_{n m} \\to Z\_{n}
    \\times Z\_{m}  \\)  określoną wzorem  \\(  f(x) = (x \\mod n,x
    \\mod m)  \\).
7.  Fakt: Para  \\(  (a,b) \\in Z\_n \\times Z\_m  \\)  jest odwarcalna
    w  \\(  Z\_n \\times Z\_m  \\)  wtedy i tylko wtedy, gdy  \\(  a
     \\)  jest odwracalne w  \\(  Z\_n  \\)  i  \\(  b  \\)  jest
    odwracalny w  \\(  Z\_m  \\).
8.  Wniosek. Jeśli  \\(  \\mathrm{nwd}(n,m) = 1  \\)  , to  \\( 
    \\phi(nm)=\\phi(n)\\phi(m)  \\).
9.  Wniosek.  \\(  \\phi(n) = n \\prod\_{p\|n} (1-\\frac1p)  \\).
10. Definicja. Podgrupa  \\(  H  \\)  grupy  \\(  G  \\)  jest
    **dzielnikiem normalnym** grupy  \\(  G  \\)  jeśli  \\[  (\\forall
    x \\in G)(\\forall h\\in H)(xhx^{-1} \\in H)  \\] 
11. Tw. Jeśli  \\(  H  \\)  jest dzielnikiem normalnym grupy  \\(  G
     \\)  , to dla każdego  \\(  x\\in H  \\)  mamy  \\(  xH=Hx  \\).

