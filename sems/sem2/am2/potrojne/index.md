---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Całki potrójne

### Definicja

Zbiór
\\( P = \{(x,y,z) \in \mathbb{R}^3 : a \leq x \leq a',\ b \leq y \leq b',\ c \leq z \leq c'\} \\),
gdzie
\\( a,a',b,b',c,c' \in \mathbb{R} \\),
nazywamy prostopadłościanem.
Niech
\\( f: \mathcal{D} \to \mathbb{R} \\)
będzie funkcją ograniczoną, a
\\( \mathcal{P}_n \\)
podziałem \\( P \\) na \\( n \\)
prostopadłościanów o objętościach
\\( |P_1|, \ldots, |P_n| \\).

Wtedy definiujemy następujące wartości:
\\[ M = \sup_P f \Rightarrow M_i = \sup_{P_i} f \\]
\\[ m = \inf_P f \Rightarrow m_i = \inf_{P_i} f \\]

Suma całkowa Riemanna:
* Dolna: \\( L_\mathcal{P} (f) = \sum_{i=1}^n m_i |P_i| \\)
* Górna: \\( U_\mathcal{P} (f) = \sum_{i=1}^n M_i |P_i| \\)

Całkę górną i dolną definiujemy następująco:
\\[ \sup_\mathcal{P} L_\mathcal{P} (f) = \underline{\iiint_P} f(x,y) dP \\]
\\[ \inf_\mathcal{P} U_\mathcal{P} (f) = \overline{\iiint_P} f(x,y) dP \\]
Jeśli te dwie całki są sobie równe to mówimy, że \\( f \\) jest całkowalna na \\( P \\), a całkę oznaczamy:
\\[ \iiint_P f dP = \iiint_P f(x,y) dx dy\ \\]
Własności analogiczne do całek podwójnych.
