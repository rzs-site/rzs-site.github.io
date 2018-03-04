---
layout: acc_layout
toc: bdisi
use_math: true
use_highlight: true
---

Bazy Danych i Systemy Informacyjne
---

### Normalizacja

#### Definicje zależności funkcyjnych

##### Nieformalnie (intuicyjnie)
Zależność kolumny B od kolumny A oznacza, że mając rekord z A możemy jednoznacznie wybrać rekord z B. \\(  A \rightarrow B  \\). Przykładowo, nazwisko może zależeć od numeru PESEL (do każdego numeru jest przypisane konkretne nazwisko). Natomiast klucz potencjalny to najmniejszy zestaw kolumn, który jednoznacznie zidentyfikuje każdy rekord tabeli.  
* 1NF - wartość każdego rekordu jest niepodzielna i opisuje jeden obiekt. 
* 2NF - jak 1NF oraz żadna kolumna nie zależy od klucza potencjalnego. 
* 3NF - jak 1NF oraz żadna kolumna nie zależy od żadnej innej kolumny. 
* BCNF - jak 1NF oraz każda kolumna zależy od dowolnego klucza, albo jest podzbiorem klucza.

##### Zależnościami, na podstawie ,,Podstawowego Kursu Systemów Baz Danych''
* 3NF - dla każdej nietrywialnej zależności, albo lewa strona zawiera klucz, albo prawa składa się z samych atrybutów podstawowych (należących do jakiegoś klucza). 
* BCNF - dla każdej nietrywialnej zależności lewa strona zawiera klucz.

##### Formalnie (K.Kleczkowski)
* 1NF - Każdy atrybut jest atomowy. 
* 2NF - Relacja jest w 1NF i żaden atrybut niekluczowy nie jest zależny od właściwego podzbioru dowolnego klucza
kandydującego. 
* 3NF - Relacja jest w 2NF i żaden atrybut niekluczowy nie jest zależny przechodnio od dowolnego klucza kandydującego. 
* BCNF - Relacja jest w 3NF i każda zależność funkcyjna X -> Y jest trywialna (tzn. dla Y \\(  \subseteq X  \\) jest X  -> Y ), lub X jest nadkluczem (nadzbiorem dowolnego klucza kandydującego) relacji R.

#### Aksjomaty

##### Podstawowe

* zwrotność:
$ ( Y \subseteq X )
\Rightarrow
( X \rightarrow Y ) $
* poszerzenie:
$ ( X \rightarrow Y )
\Rightarrow
( WX \rightarrow WY ) $
* przechodniość:
$ ( X \rightarrow Y ) \wedge ( Y \rightarrow Z )
\Rightarrow
( X \rightarrow Z ) $  


##### Wynikające z podstawowych

* dekompozycja:
$ ( X \rightarrow YZ )
\Rightarrow
( X \rightarrow Y ) \wedge ( X \rightarrow Z) $
* kompozycja:
$ ( X \rightarrow Y ) \wedge ( W \rightarrow Z )
\Rightarrow
( XW \rightarrow YZ ) $
* suma:
$ ( X \rightarrow Y ) \wedge ( X \rightarrow Z )
\Rightarrow
( X \rightarrow YZ ) $  
* pseudoprzechodniość:
$ ( X \rightarrow Y ) \wedge ( YW \rightarrow Z )
\Rightarrow
( XW \rightarrow Z ) $  
* samozależność:
\\(  ( X \rightarrow X )  \\) 
 
