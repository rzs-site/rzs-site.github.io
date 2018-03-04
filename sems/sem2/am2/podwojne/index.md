---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Całki podwójne

### Definicja

Zbiór \\( P = \{(x,y) \in \mathbb{R}^2 : a \leq x \leq b,\ c \leq y \leq d \} \\), gdzie \\( a,b,c,d \in \mathbb{R} \\), nazywamy prostokątem. Jego pole oznaczamy jako \\( |P| \\). \\( \mathcal{P} =  \\) podział \\( P \\) na prostokąty \\( P_1, P_2, \ldots, P_n \\), gdzie \\( \Delta P_i = |P_i| \\).
Niech \\( f : P \to \mathbb{R} \\) będzie funkcją ograniczoną, wtedy definiujemy następujące wartości:
\\\[ M = \sup_P f \Rightarrow M_i = \sup_{P_i} f \\]
\\\[ m = \inf_P f \Rightarrow m_i = \inf_{P_i} f \\]
Suma całkowa Riemanna:

* Dolna: \\( L_\mathcal{P} (f) = \sum_{i=1}^n m_i \Delta P_i \\)
* Górna: \\( U_\mathcal{P} (f) = \sum_{i=1}^n M_i \Delta P_i \\)
* Pośrednia: \\( M_\mathcal{P} (f) = \sum_{i=1}^n a_i \Delta P_i \\), gdzie \\( a_i \in \\[ m_i, M_i \\] \\)

Całkę górną i dolną definiujemy następująco:
\\\[ \sup_\mathcal{P} L_\mathcal{P} (f) = \underline{\iint_P} f(x,y) dP\ \\]
\\\[ \inf_\mathcal{P} U_\mathcal{P} (f) = \overline{\iint_P} f(x,y) dP\ \\]
Jeśli te dwie całki są sobie równe to mówimy, że \\( f \\) jest całkowalna na \\( P \\), a całkę oznaczamy:
\\\[ \iint_P f dP = \iint_P f(x,y) dx dy\ \\]

### Własności


* Jeśli \\( f \\) jest całkowalna na \\( P \\), to dla każdego ciągu podziałów \\( \mathcal{P}_k \\) takiego, że \\( \delta (\mathcal{P}_k) \to_{k \to \infty} 0 \\), mamy, że \\( \lim_{k \to \infty} \sigma_{\mathcal{P}_k} (f) = \iint_P f dP \\).
* Każda funkcja ciągła na \\( P \\) (ogólniej każda taka która ma zbiór punktów nieciągłości o mierze Jordana \\( = 0 \\) ) jest całkowalna.
* Własności analogiczne dla całki pojedynczej: addytywność, mnożenie przez skalar, \\( m|P| \leq \iint_P f dP \leq M|P| \\).
* Interpretacją geometryczną jest objętość pola pod wykresem funkcji.


### Całki iterowane

\\\[ \int_a^b \int_c^d f(x,y) dx dy \\]
\\\[ \int_c^d \int_a^b f(x,y) dy dx \\]
Jeśli \\( f \\) jest ciągła to mamy na \\( P \\):
\\\[ \int_a^b \int_c^d f(x,y) dx dy = \int_c^d \int_a^b f(x,y) dy dx \\]

### Inne zbiory całkowania

Całkę z funkcji ograniczonej możemy rozszerzyć na dowolny zbiór ograniczony, biorąc prostokąt w którym ten zbiór się zawiera i kładąc \\( f(x,y) = 0 \\) dla każdego punktu spoza zbioru. \\\
Możemy także całkować po obszarach normalnych (tj takich zawartych pomiędzy wykresami funkcji).

### Niezależność w sensie Jordana

Zbiór \\( \mathcal{D} \subseteq \mathbb{R}^2 \\) jest niezależny w sensie Jordana jeśli istnieje całka \\( \iint_\mathcal{D} dP \\) taka, że \\( |\mathcal{D}| = \iint_\mathcal{D} dP \\), gdzie mamy \\( f:P \to \{0,1\} \\), \\( f \mathchar"3416_\mathcal{D} \equiv 1 \\), \\( f \mathchar"3416_{P \setminus \mathcal{D}} \equiv 0 \\).

### Kryterium niezależności w sensie Jordana dla zbioru płaskiego

\\( \mathcal{D} \\) jest mierzalny (płasko) w sensie Jordana wtedy i tylko wtedy gdy brzeg \\( \delta \mathcal{D} \\) ma miarę płaską \\( 0 \\), czyli inaczej:
\\[ \left(\forall \varepsilon > 0\right)\left(\exists P_1, \ldots, P_k\right)\left(\delta P \subset \bigcup_{i=1}^k P_i,\ \sum_{i=1}^k |P_i| < \varepsilon\right) \\]

### Objętość bryły

Jeśli bryła \\( \mathbb{V} \\) jest określona między powierzchniami \\( z=\varphi(x,y) \\), \\( z=\psi(x,y) \\), gdzie \\( \varphi \leq \psi \\), nad obszarem płaskim \\( \mathcal{D} \\), to:
\\[ |\mathbb{V}| = \iint_\mathcal{D} \left[ \psi(x,y) - \varphi(x,y) \right] dP \\]

### Pole płata powierzchni

Niech funkcja \\( f: \mathcal{S} \to \mathcal{D} \\), gdzie \\( \mathcal{D} \subset \mathbb{R}^2 \\), wtedy wzór na pole płata powierzchni przyjmuje postać:
\\[ \iint_\mathcal{S} \sqrt{1+f_x^2+f_y^2} dP\ \\]
