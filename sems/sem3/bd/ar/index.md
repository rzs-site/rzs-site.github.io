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
 \sigma ( A )              & \texttt{SELECT} * \texttt{FROM} A                  & \textnormal{selekcja}                      \\ \hline
 \sigma_C ( A )            & \texttt{SELECT} * \texttt{FROM} A \texttt{WHERE} C & \textnormal{selekcja warunkowa}            \\ \hline
 \pi_K ( A )               & \texttt{SELECT} K \texttt{FROM} A                  & \textnormal{projekcja}                     \\ \hline
 \pi_K ( \sigma_C ( A ) )  & \texttt{SELECT} K \texttt{FROM} A \texttt{WHERE} C & \textnormal{projekcja selekcji warunkowej} \\ \hline
 \rho_N ( R )              & R \texttt{AS} N                                    & \textnormal{zmiana nazwy}                  \\ \hline
 \gamma_G ( R )            & \texttt{GROUP BY} G                                & \textnormal{grupowanie}                    \\ \hline
 \gamma_{MAX(k)} ( R )     & \texttt{SELECT MAX}(K) \texttt{FROM} R             & \textnormal{agregacja}                     \\ \hline
 \delta ( R )              & \texttt{DISTINCT}...                               & \textnormal{usuwanie powtórzeń}            \\ \hline
 \tau_K ( R )              & R \texttt{SORT BY} K \texttt{(ASC)}                & \textnormal{sortowanie rosnąco}            \\ \hline
 \tau_{K\ DESC} ( R )      & R \texttt{SORT BY} K \texttt{DESC}                 & \textnormal{sortowanie malejąco}           \\ \hline
 R \cup S                  & R \texttt{UNION} S                                 & \textnormal{suma zbiorów}                  \\ \hline \hline
 R \cap S                  & R \texttt{INTERSECT} S                             & \textnormal{iloczyn zbiorów}               \\ \hline
 R \setminus S             & R \texttt{EXCEPT} S                                & \textnormal{różnica zbiorów}               \\ \hline
 R \times S                & R \texttt{JOIN} S                                  & \textnormal{iloczyn kartezjański}          \\ \hline
 R \bowtie S               & R \texttt{INNER JOIN} S                            & \textnormal{naturalne złączenie}           \\ \hline
 R \bowtie_C S             & R \texttt{JOIN} S \texttt{ON} C                    & \textnormal{złączenie warunkowe}           \\ \hline
 R \bowtie_C S             & R \texttt{JOIN} S \texttt{ON} C                    & \textnormal{złączenie warunkowe}           \\ \hline
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