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

### Wzór włączeń i Wyłączeń:
Niech \\(A_1, A_2 ... A_n \\) będą zbiorami skończonymi. Wtedy: \\( \| A_1 \cup A_2 \cup ... \cup A_n \| =  \sum_{k = 1}^{n} \left( (-1)^{k + 1} \sum_{I \in [[n]]^k}^{} \| \bigcap_{i \in I}^{} A_i \|  \right) \\)
Można go udowodnić z indukcji matematycznej.

### Skończona przestrzeń probabilistyczna:
