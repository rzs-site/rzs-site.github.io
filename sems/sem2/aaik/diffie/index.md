---
layout: acc_layout
toc: aaik
use_math: true
---

### Protokół Diffiego-Hellmana

1.  **Twierdzenie.** Jeśli \\( p \\) jest liczbą pierwszą, to \\( 
    Z\_p^\* \\) jest grupą cykliczną.\
    **Szkic dowodu.** Zakładamy, że jest \\( a\\in Z\_p^\* \\) 
    takie, że \\( rank(a)= d\|(p-1) \\) pokazujemy, że \\[ (a) =
    \\{x: x^d - 1=0\\}, \\] z tego wnioskujemy, że wszystkie
    elementy rzędu \\( d \\) (jeśli są takie) są w podgupie
    \\( (a) \\) ; następnie pokazujemy, że w podgrupie \\( (a)
    \\) istnieje \\( \\phi(d) \\) elementów rzędu \\( d \\) ;
    na koniec korzystamy ze wzoru \\( p-1 = \\sum\_{d\|p-1} \\phi(d)
    \\).
2.  **Problem logarytmu dyskretnego.** Dana jest liczba pierwsza \\( p
    \\), generator \\( g \\) grupy \\( Z\_p^\* \\) oraz
    \\( b \\in Z\_p^\* \\) : znajdź \\( x \\in Z\_p^\* \\) 
    takie, że \\( g^x = b \\).
3.  **Protokół Diffiego-Hellmana.** Mamy ustaloną duża liczbę pierwszą
    \\( p \\) oraz generator \\( g \\) grupy \\( Z\_p^\*
    \\) ; Alicja losuje liczbę \\( x\\in Z\_p^\* \\) i wysyła do
    Boba \\( g^x \\) ; Bob losuje liczbę \\( y \\in Z\_p^\*
    \\) i wysyła \\( g^y \\) do Alicji; Alicja oblicza \\( 
    k=(g^y)^x = g^{xy} \\) ; Bob oblicza \\( k=(g^x)^y =
    g^{xy} \\) ; to jest ich wspólny sekret.
4.  UWAGA: Polecam przyjrzenie się notatkom David Perkinsona
    [Differential Calculus of Several
    Variables](http://people.reed.edu/~wieting/essays/DPMath211.pdf)

