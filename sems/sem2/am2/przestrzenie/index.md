---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Przestrzenie Euklidesowe



### Podstawowe zagadnienia
\noindent
\\( \mathbb{R}^n \\) - przestrzeń liniowa nad ciałem \\( \mathbb{R} \\) \\\
Odległość między wektorami: \\( \overrightarrow{AB} = \left\\[ b_1-a_1; b_2-a_2; \ldots ; b_n-a_n\right \\] \\) \\\
Wektor zerowy: \\( \mathcal{O} = \left(0,0,\ldots,0\right) \\)
Jeśli wektory \\( \overrightarrow{x} \\) oraz \\( \overrightarrow{y} \\) są równoległe to \\( t\overrightarrow{x} = \overrightarrow{y} \\) dla pewnego \\( t \in \mathbb{R} \\) \\\
Kula o środku w punkcie \\( \overrightarrow{x} \\) i promieniu \\( r \\): \\( \mathcal{K}\left(\overrightarrow{x}, r\right) = \overrightarrow{x} + \mathcal{K}\left(\mathcal{O}, r\right) \\)



### Iloczyn skalarny
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} = \sum_{i=1}^{n} x_i y_i\ \\]



### Nierówność Cauchy'ego-Schwarza
\\\[ \overrightarrow{x} \cdot \overrightarrow{y} \leq \|x\| \cdot \|y\|\ \\]



### Nierówność trójkąta
\\\[ \|\overrightarrow{x}+\overrightarrow{y}\| \leq \|\overrightarrow{x}\| + \|\overrightarrow{y}\|\ \\]



### Własności odległości
\begin{enumerate}
\item \\( \|\overrightarrow{x}-\overrightarrow{y}\| = 0 \iff \overrightarrow{x} = \overrightarrow{y} \\)
\item \\( \|\overrightarrow{x}-\overrightarrow{y}\| = \|\overrightarrow{y}-\overrightarrow{x}\| \\)
\item \\( \|\overrightarrow{x}-\overrightarrow{y}\| \leq \|\overrightarrow{x}-\overrightarrow{z}\| + \|\overrightarrow{z}-\overrightarrow{y}\| \\)
\end{enumerate}



### Odległość Euklidesowa
\noindent
Odległość euklidesowa definiuje funkcję:
\\\[ d: \mathbb{R}^n \times \mathbb{R}^n \to [0,\infty)\ \\]
Funkcja \\( d \\) nazywa się metryką euklidesową.
Ogólnie każdą funkcję \\( d: \mathcal{X}^n \times \mathcal{X}^n \to [0,\infty) \\) spełniającą warunki z \textbf{1.5} nazywamy \textbf{metryką}, a zbiór \\( \mathcal{X} \\) na którym ta funkcja działa \textbf{przestrzenią metryczną} z metryką \\( d \\).\\\
\textbf{Uwaga:} \\( \overrightarrow{x} \cdot \overrightarrow{y} = \|\overrightarrow{x}\|\cdot\|\overrightarrow{y}\|\cos\alpha,\ \alpha\\[ 0;\pi \\] \\)





## Ciągi w \\( \mathbb{R^n \\)}



### Definicja granicy ciągu
\\\[ \lim_{k\to\infty} P_k = P \iff \lim_{k\to\infty} \|P_k - P\| = 0\ \\]



### Zbieżność po współrzędnych
\noindent
Niech \\( P_k = (p_{k_1}, \ldots, p_{k_n}) \\) oraz \\( P = (p_1, \ldots, p_n) \\) wtedy:
\\\[ \lim_{k\to\infty} P_k = P \iff \left(\forall i \in [n \\]\right)\left(\lim_{k\to\infty} p_{k_i} = p_i\right)\]



### Warunek Cauchy'ego
\\\[ \left(\forall \varepsilon > 0\right)\left(\exists k_0\right)\left(\forall m,l \geq k_o\right)\left(\|P_m - P_l\| < \varepsilon\right)\ \\]
Czyli dla zbieżności po współrzędnych mamy:
\\\[ \left(\forall i \in [n \\]\right)\left(|p_{m_i} - p_{l_i}| \leq \sqrt{\sum_{j=1}^n\left(p_{m_j} - p_{l_j}\right)^2} < \varepsilon\right)\]



### Własności ciągów zbieżnych
\begin{enumerate}
\item Jest tylko jedna granica
\item Podciąg ciągu zbieżnego jest zbieżny do tej samej granicy
\item Każdy ciąg zbieżny jest ograniczony
\item Ciąg spełniający warunek Cauchy'ego jest zbieżny
\item \\( \lim\left(A_k+B_k\right) = A + B \\)
\item \\( \lim\left(A_k-B_k\right) = A - B \\)
\item \\( \lim\left(A_k\cdot B_k\right) = A \cdot B \\)
\item \textbf{Podciąg podciągu jest podciągiem ciągu}
\end{enumerate}



### Punkty skupienia
\noindent
Punkt zbioru \\( \mathcal{D} \\), taki, że istnieje ciąg postaci \\( \left\{\overrightarrow{P_k}\right\}_{k=1}^\infty \subset \mathcal{D} \\) do niego zbieżny.



### Zbiory zwarte
\noindent
Zbiór \\( \mathcal{D} \subset \mathbb{R}^n \\) jest \textbf{domknięty} \\( \iff \\) każdy ciąg zbieżny postaci \\( \left\{\overrightarrow{P_k}\right\}_{k=1}^\infty \subset \mathcal{D} \\) ma granicę w \\( \mathcal{D} \\). \\\
Zbiór jest \textbf{ograniczony} jeśli zawiera się właściwie w pewnej kuli. \\\
Zbiór jest \textbf{zwarty} jeśli jest domknięty oraz ograniczony. \\\
Suma skończonej ilości zbiorów domkniętych jest zbiorem domkniętym. \\\
Suma skończonej ilości zbiorów zwartych jest zbiorem zwartym.



