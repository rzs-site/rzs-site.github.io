---
layout: default
use_math: true
---
Teoretyczne Podstawy Informatyki
---
## Wstęp

W tym artykule wystąpią notatki oraz rozwiązania list zadań na podstawie wykładu doktora Macieja Gębali z semestru letniego 2017/2018. Zalecane jest wcześniejsze zdobycie podstawowej wiedzy z zakresu Języków Formalnych i Technik Translacji, w szczególności pojęcia takie jak automat oraz determinizm.

## Maszyny Turinga

Niech $\Sigma$ będzie alfabetem nad zbiorem skończonym. Jako **taśmę** definiuje się ciąg $\left{ x_i \right}$ taki, że $\forall i \in \mathbb{Z} x_i \in \Sigma \vee x_i=\sqcup$. Po takiej nieskończonej taśmie chodzi automat, który wykonuje operacje w zależności od jego stanu oraz wartości na którą wskazuje. $\sqcup$ (nazywany "blank") symbolizuje nulla, czyli brak wartości w danej chwili.

#### definicja
**Maszyna Turinga** (TM) to czwórka $\left(Q, \Sigma, \delta, q_0\right)$
