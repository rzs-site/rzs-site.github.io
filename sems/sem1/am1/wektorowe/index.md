---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

### Funkcje wektorowe

\begin{de}
Przestrzenie euklidesowe \\( \mathbb{R}^n \\)

\\( \mathbb{R}^n \\) jest przestrzenią liniową (wektorową) z działaniami:

* dodawanie punktów (wektorów):
 \\[ 
 (x_1,...,x_n) \pm (y_1,...,y_n) = (x_1+y_1,...,x_n+y_n)
  \\]
* mnożenie przez skalar:
 \\[ 
 \alpha (x_1,...,x_n) = (\alpha x_1,...,\alpha x_n)
  \\]


\\( \overline{0} = \vec{0} = (0,...,0) \\) nazywamy wektorem zerowym
\end{de}

\begin{de}
Wektor \\( \overline{AB} \\) \\( a,b \in \mathbb{R}^n \\), o początku w punkcie \\( A \\) i końcu
w \\( B \\)
\\[ 
\overline{AB} = (b_1-a_1,...b_n-a_n)
 \\]
gdzie \\( a_n \\) to współrzędne punktu \\( A \\), a \\( b_n \\) to współrzędne punktu \\( B \\).
\end{de}

#### Rachunek wektorowy

\begin{de}
(dodawanie wektorów)
\\[ 
\overline{AB}+\overline{BC}=\overline{AC}
 \\]
\end{de}

\begin{de}
(iloczyn skalarny)
\\[ 
\overline{x} \cdot \overline{y} = x_1y_1+...+x_ny_n
\text{, gdzie }
\overline{x} = (x_1,...,x_n) \ 
\overline{y} = (y_1,...,y_n)
 \\]
\end{de}

\begin{tw}
(właśności iloczynu skalarnego)


* \\( \overline{x} \cdot \overline{y} = \overline{y} \cdot \overline{x} \\)
* $ \overline{x}\cdot (\overline{y}+\overline{z}) =
\overline{x}\cdot\overline{y}+\overline{x}\cdot\overline{z} $
* $ (\alpha\overline{x}) \cdot \overline{y}=
\alpha(\overline{x} \cdot \overline{y})= 
\overline{x} \cdot (\alpha\overline{y}) $

\end{tw}

\begin{de}
(iloczyn wektorowy w \\( \mathbb{R}^3 \\))
\\[ 
\overline{x} \times \overline{y} =
 \overline{i} (x_2y_3-x_3y_2)
+\overline{j} (x_3y_1-x_1y_3)
+\overline{k} (x_1y_2-x_2y_1) = \\
((x_2y_3-x_3y_2), (x_3y_1-x_1y_3), (x_1y_2-x_2y_1))
 \\]
\end{de}

\begin{tw}
(właśności iloczynu wektorowego)


* $\overline{a} \times (\overline{b} \times \overline{c})
 = (\overline{a} \cdot \overline{c}) \times \overline{b}
 - (\overline{a} \cdot \overline{b}) \times \overline{c} $
* $(\overline{a} \times \overline{b}) \cdot \overline{c} = 
\overline{a}\cdot(\overline{b}\times\overline{c}) $
* $ \overline{a}\times\overline{b}=
  -\overline{b}\times\overline{a} $

\end{tw}

\begin{de}
(norma euklidesowa wektora)

\\[ 
 \vert \vert \overline{x} \vert \vert = \sqrt{x_1^2+...+x_n^2}
 \\]
\\[ 
 \vert \vert x \vert \vert ^2 = \overline{x} \cdot \overline{x} = \overline{x}^2
 \\]
\end{de}

\begin{de}
(Nierówność Cauchy'ego-Schwarza)
\\[ 
\overline{x} \cdot \overline{y} \leq 
 \vert \vert \overline{x} \vert \vert \cdot \vert \vert \overline{y} \vert \vert 
 \\]
\end{de}

\begin{de}
(kula w \\( \mathbb{R}^n \\))
\\[ 
K(\overline{a}, r) =
\{\overline{x} \in \mathbb{R}^n: \vert \vert \overline{x}-\overline{a} \vert \vert < r\}
 \\]
gdzie \\( \overline{a} \\) to środek kuli a \\( r \\) to dodatni promień kuli.
\end{de}

#### Ciagi i funkcje wektorowe


\begin{de}
(ciąg w \\( \mathbb{R}^n \\))
\\[ 
f: \mathbb{N} \to \mathbb{R}^n
\text{, co oznaczamy }
(\overline{x_n})_{n=1}^{\infty}
 \\]
Intuicyjnie, jest to ciąg wektorów.
\end{de}

\begin{de}
(granica ciągu w \\( \mathbb{R}^n \\))
\\[ 
lim_{n \to \infty} = \overline{x_n} = \overline{x} \in \mathbb{R}^n
\text{, gdy }
(\forall \epsilon>0)(\exists k \in \mathbb{N})(\forall n\geq k)
( \vert \vert \overline{x_n}-\overline{x} \vert \vert <\epsilon)
 \\]
\end{de}

\begin{tw}
\

Jeśli \\( \overline{x}=(x_1,...,x_n), \overline{x_n} = (x_{n1},...,x_{nm}) \\)
to
\\[ \lim \overline{x_n} = \overline{x} \iff
(\forall 1 \leq i \leq m)(\lim\limits_{n \to \infty} x_{ni} = x_i) \\]
\end{tw}

\begin{de}
(Granica funkcji wektorowej)

\\( f: D \to \mathbb{R}^n : D \subseteq \mathbb{R} \\)
\\( t_0 \\) - punkt skupienia \\( D \\)

\\[ 
\lim_{t\to t_0} f(t) = \overline{x}
\text{, gdy }
(\forall \epsilon>0)(\exists \delta>0)( \vert t-t_0 \vert <\delta \implies
 \vert \vert f(t)-\overline{x} \vert \vert <\epsilon)
 \\]
(Granica funkcji wektorowej jest granicą funkcji składowych)
\end{de}

\begin{tw}
Funkcja wektorowa jest ciągła gdy wszystkie jej składowe są ciągłe.
\end{tw}

\begin{tw}
Jeżeli dwie funkcje wektorowe są ciągłe to ich suma, różnica, iloczyn wektorowy
i skalarny funkcji wektorowych są ciągłe
\end{tw}

\begin{tw}
Pochodna funkcji wektorowej to funkcja wektorowa o składowych będących
pochodnymi skłądowych różniczkowanej funkcji. Zatem różniczkujemy
"po składowych"
\end{tw}

\begin{tw}
Całka nieoznaczona \\( \int f(x)dx = F(x) + \overline{W} \\)z funkcji wektorowej
to funkcja pierwotna wyznaczana z dokładnością do stałego wektora czyli taka,
że \\( F'(x) = f(x) \\)

Całka nieoznaczona z funkcji wektorowej to funkcja o składowych równych całkom
nieoznaczonym całkowanej funkcji.
\end{tw}

\begin{tw}
Całka oznaczona z funkcji wektorowej to wektor o składowych równych
całkom oznaczonym z funkcji składowych całkowanej funkcji.
\end{tw}

#### Interpretacja fizyczna

Jeśli \\( \overline{r}(t) = (x(t), y(t), z(t)) \\) opisuje położenie punktu, to
\\( \overline{r}'(t) \\) to wektor prędkości w chwili \\( t \\).

Analogicznie \\( \overline{r}''(t) \\) to wektor przyspieszenia.
