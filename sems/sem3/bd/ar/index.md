---
layout: acc_layout
toc: bdisi
use_math: true
use_highlight: true
---

Bazy Danych i Systemy Informacyjne
---

### Schematy zapytań SQL

#### Ramowy szablon zapytania}
```sql
SELECT kolumna
FROM tabela
WHERE warunek
```

#### Bardziej zaawansowany przykład}
```sql
SELECT t1.k1, t1.k2
FROM ( t1 INNER JOIN t2 ON t1.k3 = t2.k3 )
WHERE ( t1.k4 > 0 ) AND ( t1.k5 IS NULL )
```

#### Proste (niekoniecznie sensowne) podzapytanie}
```sql
SELECT podzap.k2
FROM 
  ( SELECT * FROM ( t1 INNER JOIN t2 ON t1.k1 = t2.k1 ) ) AS podzap1
  INNER JOIN
  ( SELECT * FROM ( t3 INNER JOIN t4 ON t3.k1 = t4.k1 ) ) AS podzap2
ON
  podzap1.k1 = podzap2.k1
```
  \\( 
  
### Operatory SQL

#### Porównawcze
* \\( = \\)  -  równe 
* \\( <> \\) -  różne 
* \\( != \\) -  różne 
* \\( > \\)  -  większe 
* \\( < \\)  -  mniejsze 
* \\( >= \\) -  większe lub równe 
* \\( <= \\) -  mniejsze lub równe 

#### Logiczne
* `a AND b` - koniunkcja 
* A `OR` B  - alternatywa 
* `NOT` A   - zaprzeczenie 


#### Dopasowania
* `BETWEEN` A `AND` B - pomiędzy dwiema wartościami 
* `LIKE` '\%wzorzec\%'       - dopasowanie ciągu znaków do wzorca 
* A `NOT IN` B               - poza danym zbiorem 
* A `IS (NOT) NULL`          - jest równy/różny NULL 

#### Łączenie tabel 
* A `JOIN` B (`ON` C)       - iloczyn kartezjański               
* A `INNER JOIN` B (`ON` C) - łączenie naturalne                 
* A `LEFT JOIN` B (`ON` C)  - do lewej strony dostawiona prawa   
* A `RIGHT JOIN` B (`ON` C) - do prawej strony dostawiona lewa   
* A `FULL JOIN` B (`ON` C)  - wszystkie rekordy (jak LEFT+RIGHT) 

#### Funkcje agregujące}
* `MIN` (A)   - wartość minimalna  
* `MAX` (A)   - wartość maksymalna 
* `AVG` (A)   - średnia            
* `SUM` (A)   - suma               
* `COUNT` (A) - ilość              

#### Operacje na zbiorach wynikowych}

* A `UNION` B     - suma \(( \cup \\)         
* A `INTERSECT` B - iloczyn \(( \cap \\)  
* A `EXCEPT` B    - różnica \(( \setminus \\)  

#### Porządkowanie zbioru wynikowego (tylko na końcu)
* ... `ORDER BY` A `(ASC)` - sortowanie (domyślnie rosnąco)                   
* ... `ORDER BY` A `DESC`  - sortowanie malejąco                              
* ... `GROUP BY` A       - grupowanie                                       
* ... `HAVING C `        - filtr końcowy, po wykonaniu właściwego zapytania 
* ... `LIMIT n `         - pierwsze \(( n $ wyników                           