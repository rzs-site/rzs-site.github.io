---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Działania na zbiorach:
* Jeżeli \\( A \cap B = \emptyset \\) to \\( \|A \cup B\| = \|A\| + \|B\| \\)  
* Jeżeli \\( A \cap B \neq \emptyset \\) to \\( \|A \cup B\| = \|A\| + \|B\| - \|A \cap B \| \\)  
* \\( \|A \times B\| = \|A\| * \|B\| \\)  
* \\( \|A^B\| = {\|A\|}^{\|B\|} \\)  
* \\( \|\mathbb{P}(A)\| = 2^{\|A\|} \\)  

### Wzór włączeń i wyłączeń:
Niech \\(A_1, A_2 ... A_n \\) będą zbiorami skończonymi. Wtedy: \\( \| A_1 \cup A_2 \cup ... \cup A_n \| =  \sum_{k = 1}^{n} \left( (-1)^{k + 1} \sum_{I \in [[n]]^k}^{} \| \bigcap_{i \in I}^{} A_i \|  \right) \\)

Można udowodnić ten wzór używając zasady indukcji.

### Dyskretna przestrzeń probabilistyczna:

Mamy zbiór skończony \\( \Omega \\).
Definiujemy funkcje prawdopodobieństwa \\( Pr: {\mathbb{P}(\Omega) \rightarrow [0,1] }   \\) następująco:

\\(  Pr(A) = \frac{\|A\|}{\|\Omega\|} \\)

W szczególności: \\( Pr(\Omega) = 1 \quad Pr(\emptyset) = 0 \\)


Dla: \\(a \in \Omega \quad Pr({a}) =  \frac{1}{\|\Omega\|} \\)

Dodatkowo z działań na zbiorach mamy:

Jeżeli: \\( A \cap B = \emptyset \quad \\) to \\(\quad Pr(A \cup B) = Pr(A) + Pr(B) \\) 
