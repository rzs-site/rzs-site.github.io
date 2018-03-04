---
layout: acc_layout
toc: mpis
use_math: true
use_highlight: true
---

Metody probabilistycznie i statystyka
---

### Podstawowe zagadnienia
#### Podstawowe pojęcia
* **Zdarzeniem elementarnym** nazywamy niepodzielny wynik pewnego doświadczenia.
*  Zbiór wszystkich możliwych zdarzeń elementarnych (dla danego doświadczenia) nazywamy **przestrzenią zdarzeń elementarnych** i oznaczamy go przez \\( \Omega \\).
*  **Zdarzeniem losowym** nazywamy pewien podzbiór \\( \Omega \\). W przypadku, gdy przestrzeń jest co najwyżej przeliczalna, zbiorem wszystkich zdarzeń losowych jest po prostu \\( \\mathbb{P}\left(\Omega\right) \\), natomiast w przypadku gdy przestrzeń jest nieprzeliczalna zbiorem tym będzie rodzina \\( \mathcal{S} \\) o której za chwilę.
*  Jako, że zdarzenia są zbiorami, możemy na nich wykonywać takie same działania jak na zbiorach ( *suma, iloczyn, itp* ).
* **Zdarzeniem pewnym** jest cały zbiór \\( \Omega \\).
* **Zdarzeniem niemożliwym** jest zbiór \\( \emptyset \\).
* Zdarzenia **rozłączne** to takie, że \\( A \cap B = \emptyset \\).
* **Zdarzeniem przeciwnym** do zdarzenia \\( A \\) nazywamy zdarzenie \\( A' = \Omega - A \\).
* Rodzinę zdarzeń postaci \\( \\{A\_i\\}^{n}\\_{i=1} \\), której elementy są parami rozłączne oraz dla której \\( \bigcup^n\_{i=1} A\_i = \Omega \\) nazywamy **układem zupełnym**.

#### Najmniejsze (bo małe ciała są fajne) przeliczalnie addytywne ciało zdarzeń
Niech \\( \Omega \subseteq \\mathbb{R}^n \\) oraz niech \\( \mathcal{S}^* \\) będzie taką rodziną podzbiorów \\( \Omega \\),
że \\( \Omega \in \mathcal{S}^\* \\),
\\( \left(\forall A \in \mathcal{S}^\*\right)\left(\Omega - A \in \mathcal{S}^* \right) \\)
oraz
\\( \left( \forall A\_1,\ A\_2,\ \ldots \in \mathcal{S}^\* \right) \left(\bigcup^\infty\\_{i=1} A\_i \in \mathcal{S}^\* \right) \\).
Rodzinę taką nazywamy **przeliczalnie addytywnym ciałem zdarzeń**.
Najmniejszą z tych rodzin oznaczać będziemy przez \\( \mathcal{S} \\).
Jest to rodzina zbiorów **borelowskich** której elementami są zdarzenia losowe.

#### Definicja rozkładu prawdopodobieństwa
Mamy zbiory \\( \Omega \\) oraz \\( \mathcal{S} \\). Definiujemy funkcję \\( \mathbb{P} \\) następująco:
\\[ \mathbb{P}:\ \mathcal{S}\ \rightarrow\ \\mathbb{R} \\]
\\[ \left( \forall A \in \mathcal{S} \right)\left( \mathbb{P}(A) \geq 0 \right) \\]
\\[ \mathbb{P}(\Omega) = 1 \\]
\\[ \left( \forall A\_1,A\_2,\ldots \in \mathcal{S} \right)\left( \left( \forall A\_i,\ A\_j \right)\left( A\_i \cap A\_j = \emptyset \right) \rightarrow \mathbb{P}\left( \bigcup^\infty\_{i=1} A\_i \right) = \sum^\infty\_{i=1} \mathbb{P}\left(A\_i\right) \right) \\]
Funkcję taką nazywamy *rozkładem prawdopodobieństwa*, a jej wartości *prawdopodobieństwem* zdarzeń losowych.

#### Podstawowe własności rozkładu prawdopodobieństwa
\\[ \mathbb{P}\left(\emptyset\right) = 0 \\]
\\[ \mathbb{P}\left( \bigcup^n\_{i=1} A\_i \right) = \sum^n\_{i=1} \mathbb{P}\left(A\_i\right) \\]
\\[ \mathbb{P}\left(A'\right) = 1 - \mathbb{P}\left(A\right) \\]
\\[ \mathbb{P}\left(A \cup B\right) = \mathbb{P}\left(A\right) + \mathbb{P}\left(B\right) - \mathbb{P}\left(A \cap B\right) \\]
\\[ A \subset B \rightarrow \mathbb{P}\left(A\right) \leq \mathbb{P}\left(B\right) \\]

#### Ciekawsze własności rozkładu prawdopodobieństwa
Jeśli zdarzenia \\( A\_1 \\), \\( A\_2 \\), ... stanowią ciąg *wstępujący*, czyli mamy \\( A\_1 \subset A\_2 \subset \ldots \\) oraz jeśli \\( \bigcup\_i A\_i = A \\) wtedy:
\\[ \text{lim}\_{n \rightarrow \infty}\ \mathbb{P}\left(A\_n\right) = \mathbb{P}(A) \\]
Dowód przeprowadzamy rozpatrując różnice między kolejnymi zbiorami ( \\( A\_i - A\_{i-1} = B\_i \\) ).\\\
Jeśli zdarzenia \\( A\_1 \\), \\( A\_2 \\), ... stanowią ciąg *zstępujący*, czyli mamy \\( A\_1 \supset A\_2 \supset \ldots \\) oraz jeśli \\( \bigcap\_i A\_i = A \\) wtedy:
\\[ \text{lim}\_{n \rightarrow \infty}\ \mathbb{P}\left(A\_n\right) = \mathbb{P}(A) \\]
Do dowodu wykorzystujemy poprzedni fakt.

#### Dystrybuanta
Niech \\( \Omega = \\mathbb{R}^1 \\). Definiujemy funkcję \\( \mathbb{F} \\) w następujący sposób:

* \\( \mathbb{F} \\) jest niemalejąca
* \\( \text{lim}\_{x \rightarrow -\infty}\ \mathbb{F}(x) = 0 \\) oraz \\( \text{lim}\_{x \rightarrow \infty}\ \mathbb{F}(x) = 1 \\)
* \\( \mathbb{F} \\) jest lewostronnie ciągła

Taką funkcje nazywamy *dystrybuantą* i definiuje ona, jednoznacznie, rozkład prawdopodobieństwa w następujący sposób:
\\[ \mathbb{P}\left(\langle a;b)\right) = \mathbb{F}(b) - \mathbb{F}(a) \\]
Mając rozkład prawdopodobieństwa możemy również w jednoznaczny sposób wyznaczyć dystrybuantę jako:
\\[ \mathbb{F}(x) = \mathbb{P}\left(\left( -\infty;x\right)\right) \\]

