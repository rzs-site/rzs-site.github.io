---
layout: acc_layout
toc: bdisi
use_math: true
use_highlight: true
---

Bazy Danych i Systemy Informacyjne
---

### Algebra relacji

{::options parse_block_html="true" /}
<div class="table-box">
| Operator                         | Odpowiednik w SQL              | Opis                          |
|----------------------------------|-------------------------- -----|-------------------------------|
| \\( \sigma ( A ) \\)             | `SELECT` * `FROM` A            | selekcja                      |
| \\( \sigma_C ( A )  \\)          | `SELECT` * `FROM` A `WHERE` C  | selekcja warunkowa            |
| \\( \pi_K ( A )  \\)             | `SELECT` K `FROM` A            | projekcja                     |
| \\( \pi_K ( \sigma_C ( A ) ) \\) | `SELECT` K `FROM` A `WHERE` C  | projekcja selekcji warunkowej |
| \\( \rho_N ( R ) \\)             | R `AS` N                       | zmiana nazwy                  |
| \\( \gamma_G ( R )  \\)          | `GROUP BY` G                   | grupowanie                    |
| \\( \gamma_{MAX(k)} ( R ) \\)    | `SELECT MAX`(K) `FROM` R       | agregacja                     |
| \\( \delta ( R ) \\)             | `DISTINCT`...                  | usuwanie powtórzeń            |
| \\( \tau_K ( R ) \\)             | R `SORT BY` K `(ASC)`          | sortowanie rosnąco            |
| \\( \tau_{K\ DESC} ( R )  \\)    | R `SORT BY` K `DESC`           | sortowanie malejąco           |
| \\( R \cup S  \\)                | R `UNION` S                    | suma zbiorów                  |
| \\( R \cap S  \\)                | R `INTERSECT` S                | iloczyn zbiorów               |
| \\( R \setminus S\\)             | R `EXCEPT` S                   | różnica zbiorów               |
| \\( R \times S\\)                | R `JOIN` S                     | iloczyn kartezjański          |
| \\( R \bowtie S  \\)             | R `INNER JOIN` S               | naturalne złączenie           |
| \\( R \bowtie_C S\\)             | R `JOIN` S `ON` C              | złączenie warunkowe           |
| \\( R \bowtie_C S\\)             | R `JOIN` S `ON` C              | złączenie warunkowe           |

</div>
{::options parse_block_html="false" /}
