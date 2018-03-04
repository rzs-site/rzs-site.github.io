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
\textbf{Zdarzeniem elementarnym} nazywamy niepodzielny wynik pewnego doświadczenia.\\\
Zbiór wszystkich możliwych zdarzeń elementarnych (dla danego doświadczenia) nazywamy \textbf{przestrzenią zdarzeń elementarnych} i oznaczamy go przez \\( \Omega \\).\\\
\textbf{Zdarzeniem losowym} nazywamy pewien podzbiór \\( \Omega \\). W przypadku, gdy przestrzeń jest co najwyżej przeliczalna, zbiorem wszystkich zdarzeń losowych jest po prostu \\( \mathbb{P}\left(\Omega\right) \\), natomiast w przypadku gdy przestrzeń jest nieprzeliczalna zbiorem tym będzie rodzina \\( \mathcal{S} \\) o której za chwilę.\\\
Jako, że zdarzenia są zbiorami, możemy na nich wykonywać takie same działania jak na zbiorach (\\( \textit{suma,\ iloczyn\ itp} \\)).\\\
\textbf{Zdarzeniem pewnym} jest cały zbiór \\( \Omega \\).\\\
\textbf{Zdarzeniem niemożliwym} jest zbiór \\( \emptyset \\).\\\
Zdarzenia \textbf{rozłączne} to takie, że \\( A \cap B = \emptyset \\).\\\
\textbf{Zdarzeniem przeciwnym} do zdarzenia \\( A \\) nazywamy zdarzenie \\( A' = \Omega - A \\).\\\
Rodzinę zdarzeń postaci \\( \left\{A_i\right\}^{n}_{i=1} \\), której elementy są parami rozłączne oraz dla której \\( \bigcup^n_{i=1} A_i = \Omega \\) nazywamy \textbf{układem zupełnym}.

#### Najmniejsze (bo małe ciała są fajne) przeliczalnie addytywne ciało zdarzeń
Niech \\( \Omega \subseteq \mathbb{R}^n \\) oraz niech \\( \mathcal{S}^* \\) będzie taką rodziną podzbiorów \\( \Omega \\), że \\( \Omega \in \mathcal{S}^* \\), \\( \left(\forall A \in \mathcal{S}^*\right)\left(\Omega - A \in \mathcal{S}^* \right) \\) oraz\\\ \\( \left(\forall A_1,\ A_2,\ \ldots \in \mathcal{S}^*\right)\left(\bigcup^\infty_{i=1} A_i \in \mathcal{S}^* \right) \\). Rodzinę taką nazywamy \textbf{przeliczalnie addytywnym ciałem zdarzeń}. Najmniejszą z tych rodzin oznaczać będziemy przez \\( \mathcal{S} \\). Jest to rodzina zbiorów \textbf{borelowskich} której elementami są zdarzenia losowe.

#### Definicja rozkładu prawdopodobieństwa
Mamy zbiory \\( \Omega \\) oraz \\( \mathcal{S} \\). Definiujemy funkcję \\( \textbf{P} \\) następująco:
\\[ \textbf{P}:\ \mathcal{S}\ \rightarrow\ \mathbb{R} \\]
\\[ \left( \forall A \in \mathcal{S} \right)\left( \textbf{P}(A) \geq 0 \right) \\]
\\[ \textbf{P}(\Omega) = 1 \\]
\\[ \left( \forall A_1,A_2,\ldots \in \mathcal{S} \right)\left( \left( \forall A_i,\ A_j \right)\left( A_i \cap A_j = \emptyset \right) \rightarrow \textbf{P}\left( \bigcup^\infty_{i=1} A_i \right) = \sum^\infty_{i=1} \textbf{P}\left(A_i\right) \right) \\]
Funkcję taką nazywamy \textbf{rozkładem prawdopodobieństwa}, a jej wartości \textbf{prawdopodobieństwem} zdarzeń losowych.

#### Podstawowe własności rozkładu prawdopodobieństwa
\\[ \textbf{P}\left(\emptyset\right) = 0 \\]
\\[ \textbf{P}\left( \bigcup^n_{i=1} A_i \right) = \sum^n_{i=1} \textbf{P}\left(A_i\right) \\]
\\[ \textbf{P}\left(A'\right) = 1 - \textbf{P}\left(A\right) \\]
\\[ \textbf{P}\left(A \cup B\right) = \textbf{P}\left(A\right) + \textbf{P}\left(B\right) - \textbf{P}\left(A \cap B\right) \\]
\\[ A \subset B \rightarrow \textbf{P}\left(A\right) \leq \textbf{P}\left(B\right) \\]

#### Ciekawsze własności rozkładu prawdopodobieństwa
Jeśli zdarzenia \\( A_1 \\), \\( A_2 \\), ... stanowią ciąg \textbf{wstępujący}, czyli mamy \\( A_1 \subset A_2 \subset \ldots \\) oraz jeśli \\( \bigcup_i A_i = A \\) wtedy:
\\[ \textnormal{lim}_{n \rightarrow \infty}\ \textbf{P}\left(A_n\right) = \textbf{P}(A) \\]
Dowód przeprowadzamy rozpatrując różnice między kolejnymi zbiorami (\\( A_i - A_{i-1} = B_i \\)).\\\
Jeśli zdarzenia \\( A_1 \\), \\( A_2 \\), ... stanowią ciąg \textbf{zstępujący}, czyli mamy \\( A_1 \supset A_2 \supset \ldots \\) oraz jeśli \\( \bigcap_i A_i = A \\) wtedy:
\\[ \textnormal{lim}_{n \rightarrow \infty}\ \textbf{P}\left(A_n\right) = \textbf{P}(A) \\]
Do dowodu wykorzystujemy poprzedni fakt.

#### Dystrybuanta
Niech \\( \Omega = \mathbb{R}^1 \\). Definiujemy funkcję \textbf{F} w następujący sposób:

* \textbf{F} jest niemalejąca
* \\( \textnormal{lim}_{x \rightarrow -\infty}\ \textbf{F}(x) = 0 \\) oraz \\( \textnormal{lim}_{x \rightarrow \infty}\ \textbf{F}(x) = 1 \\)
* \textbf{F} jest lewostronnie ciągła

Taką funkcje nazywamy \textbf{dystrybuantą} i definiuje ona, jednoznacznie, rozkład prawdopodobieństwa w następujący sposób:
\\[ \textbf{P}\left(\langle a;b)\right) = \textbf{F}(b) - \textbf{F}(a) \\]
Mając rozkład prawdopodobieństwa możemy również w jednoznaczny sposób wyznaczyć dystrybuantę jako:
\\[ \textbf{F}(x) = \textbf{P}\left(\left( -\infty;x\right)\right) \\]

