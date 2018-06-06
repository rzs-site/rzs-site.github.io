---
layout: acc_layout
toc: prolog
---

Programowanie w Logice
---

### Wstęp

#### Wymagana wiedza
* rachunek zdań (LiSF)
* kwantyfikatory (LiSF)
* rekurencja ogonowa (WiP)

Programowanie w logice jest osobnym paradygmatem programowania opartym głównie na logice.
Programy to serie faktów i reguł opisujących problem. Używając własności rachunku zdań z logiki prolog znajduje rozwiązanie problemu
poprzez przeszukanie grafu możliwych rozwiązań.

Należy pamiętać, że przeszukiwanie odbywa się na zasadzie przeszukania w głąb. Powoduje to, iż nieskończone rozwiązania są największą pułapką.
Można temu przeciwdziałać starając się umieścić najbardziej ograniczające reguły jak najbliżej lewej strony, gdyż wtedy zostaną szybciej
wykonane i ograniczą liczbę rozwiązań. Alternatywnym rozwiązaniem jest używanie odcięć.

#### O projekcie

* [Programowanie w Logice - powtórzenie (v1.5)](/pdfs/wyb/prolog-powtorzenie.pdf)
