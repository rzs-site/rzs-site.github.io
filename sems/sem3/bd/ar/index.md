---
layout: acc_layout
toc: bdisi
use_math: true
use_highlight: true
---

Bazy Danych i Systemy Informacyjne
---

### Algebra relacji

\\( \begin{array}{|l|l|l|}
\hline
 \sigma ( A )              & \texttt{SELECT} * \texttt{FROM} A                  & \text{selekcja}                      \\ \hline
 \sigma_C ( A )            & \texttt{SELECT} * \texttt{FROM} A \texttt{WHERE} C & \text{selekcja warunkowa}            \\ \hline
 \pi_K ( A )               & \texttt{SELECT} K \texttt{FROM} A                  & \text{projekcja}                     \\ \hline
 \pi_K ( \sigma_C ( A ) )  & \texttt{SELECT} K \texttt{FROM} A \texttt{WHERE} C & \text{projekcja selekcji warunkowej} \\ \hline
 \rho_N ( R )              & R \texttt{AS} N                                    & \text{zmiana nazwy}                  \\ \hline
 \gamma_G ( R )            & \texttt{GROUP BY} G                                & \text{grupowanie}                    \\ \hline
 \gamma_{MAX(k)} ( R )     & \texttt{SELECT MAX}(K) \texttt{FROM} R             & \text{agregacja}                     \\ \hline
 \delta ( R )              & \texttt{DISTINCT}...                               & \text{usuwanie powtórzeń}            \\ \hline
 \tau_K ( R )              & R \texttt{SORT BY} K \texttt{(ASC)}                & \text{sortowanie rosnąco}            \\ \hline
 \tau_{K\ DESC} ( R )      & R \texttt{SORT BY} K \texttt{DESC}                 & \text{sortowanie malejąco}           \\ \hline
 R \cup S                  & R \texttt{UNION} S                                 & \text{suma zbiorów}                  \\ \hline
 R \cap S                  & R \texttt{INTERSECT} S                             & \text{iloczyn zbiorów}               \\ \hline
 R \setminus S             & R \texttt{EXCEPT} S                                & \text{różnica zbiorów}               \\ \hline
 R \times S                & R \texttt{JOIN} S                                  & \text{iloczyn kartezjański}          \\ \hline
 R \bowtie S               & R \texttt{INNER JOIN} S                            & \text{naturalne złączenie}           \\ \hline
 R \bowtie_C S             & R \texttt{JOIN} S \texttt{ON} C                    & \text{złączenie warunkowe}           \\ \hline
 R \bowtie_C S             & R \texttt{JOIN} S \texttt{ON} C                    & \text{złączenie warunkowe}           \\ \hline
\end{array} \\)

| \\( \sigma ( A ) \\)             | \\( \texttt{SELECT} * \texttt{FROM} A\\)                   | selekcja                      |
|----------------------------------|------------------------------------------------------------|-------------------------------|
| \\( \sigma_C ( A )  \\)          | \\( \texttt{SELECT} * \texttt{FROM} A \texttt{WHERE} C \\) | selekcja warunkowa            |
| \\( \pi_K ( A )  \\)             | \\( \texttt{SELECT} K \texttt{FROM} A\\)                   | projekcja                     |
| \\( \pi_K ( \sigma_C ( A ) ) \\) | \\( \texttt{SELECT} K \texttt{FROM} A \texttt{WHERE} C \\) | projekcja selekcji warunkowej |
| \\( \rho_N ( R ) \\)             | \\( R \texttt{AS} N\\)                                     | zmiana nazwy                  |
| \\( \gamma_G ( R )  \\)          | \\( \texttt{GROUP BY} G  \\)                               | grupowanie                    |
| \\( \gamma_{MAX(k)} ( R ) \\)    | \\( \texttt{SELECT MAX}(K) \texttt{FROM} R \\)             | agregacja                     |
| \\( \delta ( R ) \\)             | \\( \texttt{DISTINCT}... \\)                               | usuwanie powtórzeń            |
| \\( \tau_K ( R ) \\)             | \\( R \texttt{SORT BY} K \texttt{(ASC)} \\)                | sortowanie rosnąco            |
| \\( \tau_{K\ DESC} ( R )  \\)    | \\( R \texttt{SORT BY} K \texttt{DESC}  \\)                | sortowanie malejąco           |
| \\( R \cup S  \\)                | \\( R \texttt{UNION} S\\)                                  | suma zbiorów                  |
| \\( R \cap S  \\)                | \\( R \texttt{INTERSECT} S  \\)                            | iloczyn zbiorów               |
| \\( R \setminus S\\)             | \\( R \texttt{EXCEPT} S  \\)                               | różnica zbiorów               |
| \\( R \times S\\)                | \\( R \texttt{JOIN} S \\)                                  | iloczyn kartezjański          |
| \\( R \bowtie S  \\)             | \\( R \texttt{INNER JOIN} S \\)                            | naturalne złączenie           |
| \\( R \bowtie_C S\\)             | \\( R \texttt{JOIN} S \texttt{ON} C  \\)                   | złączenie warunkowe           |
| \\( R \bowtie_C S\\)             | \\( R \texttt{JOIN} S \texttt{ON} C  \\)                   | złączenie warunkowe           |