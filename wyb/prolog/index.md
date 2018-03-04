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

Programowanie w logice jest osobnym paradygmantem programowania opartym głównie na logice.
Programy to serie faktów i reguł opisujących problem. Używając własności rachunku zdań z logiki prolog znajduje rozwiązanie problemu
poprzez przeszukanie grafu możliwch rozwiązań

Należy pamiętać że przeszukiwanie odbywa się na zasadzie przeszukania w głąb. Powoduje to iż nieskończone rozwiązania są największą pułapką.
Można temu przeciwdziałać starając się umieścić najbardziej ogarniczające reguły jak najbliżej lewej strony gdyż wtedy zostaną szybciej
wykonane i ograniczą liczbę rozwiązań. Alternatywnym rozwiązaniem jest używanie odcięć.
