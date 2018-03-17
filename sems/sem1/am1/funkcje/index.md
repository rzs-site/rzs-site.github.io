---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

### Funkcje

#### Granice funkcji

\begin{de}
(Punkt skupienia zbioru)

\\( \emptyset \neq D \subseteq \mathbb{R} \\)

\\( a \in \mathbb{R} \\) jest lewostronnym punktem skupienia zbioru D, gdy
istnieje ciąg \\( (d_n) \\) taki, że \\( d_n \in D \\), \\( d_n > a \\) i \\( \lim d_n = a \\)

\\( a \in \mathbb{R} \\) jest prawostronnym punktem skupienia zbioru A, gdy
istnieje ciąg \\( (d_n) \\) taki, że \\( d_n \in D \\), \\( d_n < a \\) i \\( \lim d_n = a \\)

\\( a \\) jest punktem skupienia zbioru \\( D \\) gdy jest lewo- lub prawostronnym punktem skupienia.

Intuicyjnie \\( a \\) jest punktem skupienia zbioru \\( D \\) gdy dowolnie blisko
\\( a \\) znajduje się nieskończenie wiele liczb ze zbioru \\( D \\).
\end{de}

\underline{PRZYKŁADY:}


* \\( D \\) - zbiór skończony - brak punktu skupienia
* \\( \mathbb{N} \\) - brak punktu skupienia
* \\( \{ 1, \frac{1}{2}, \frac{1}{3}, ...\} \\) - punkt skupienia \\( a=0 \\)
* \\( [0,1] \\) - każdy punkt jest punktem skupienia
* \\( \mathbb{Q} \\) - każda liczba rzeczywista jest punktem skupienia


\begin{de}
(granica funkcji)

Niech: \\( f: D \to \mathbb{R} \\). Niech \\( a \\) będzie lewostronnym punktem skupienia zbioru \\( D \\).
\\( \lim_{x \to a^-} f(x) = g \\), gdy dla każdego ciągu \\( x_n \to a, x_n \in D, x_n<a \\)
zachodzi \\( \lim_{x \to a^-} f(x_n) = g \\). Liczbę \\( g \\) nazywamy granicą lewostronną funkcji \\( f \\)
w punkcie \\( a \\).

Analogicznie \\( \lim_{x \to a^+} f(x) = g \\) (punkt skupienia prawostronny i \\( x_n>a \\)) nazywamy 
granicą prawostronną.
\end{de}

\begin{de}
\\[ 
\lim_{x \to \pm \infty} f(x) = g \text{, gdy } (\forall x_n \in D), \lim x_n = \pm \infty
\text{, mamy } \lim f(x_n) = g
 \\]
\end{de}

\textbf{UWAGA}
Arytmetyka granic jest analogiczna jak w przypadku ciągów. Dotyczy to również twierdzenia 
o trzech ciągach. (w tym wypadku - trzech funkcjach)

\begin{tw}
(granica funkcji żłożonej)

\\[ 
\text{Jeśli}
\lim_{x \to a} f(x) = A, 
\lim_{y \to A} g(y) = B\text{, to}
\lim_{x \to a} g(f(x)) = B
 \\]
\end{tw}

#### Ciągłość funkcji

\begin{de}
(Heine)

Niech \\( f: X \to Y; X, Y \subseteq \mathbb{R} \\). Funkcja \\( f \\) jest ciągłą w punkcie a jeśli:

\\[ 
(\forall x_n \in X)((x_n \to a) \implies (f(x_n) \to f(a)))
 \\]


* Funkcja jest ciągła lewostronnie, gdy:
\\[ 
(\forall x_n \in X)((x_n \to a^-) \implies (f(x_n) \to f(a)))
 \\]
* Funkcja jest ciągła prawostronnie, gdy:
\\[ 
(\forall x_n \in X)((x_n \to a^+) \implies (f(x_n) \to f(a)))
 \\]


Fukcja jest ciągła w \\( a \iff f \\) jest ciągła lewo- i prawostronnie w a.
\end{de}

\begin{tw}
\

Suma, różnica, iloczyn, iloraz funkcji ciągłych jest ciągły.
Złożenie dwóch funkcji ciągłych jest funkcją ciągłą.
\end{tw}

\begin{de}
(Cauchy)

Funkcja \\( f: D \to \mathbb{R} \\) jest ciągła w punkcie \\( x_0 \\) gdy:

\\[ 
(\forall \epsilon > 0)(\exists \delta)(\forall x)(( \vert x-x_0 \vert <\delta) \implies ( \vert f(x)-f(x_0) \vert <\epsilon))
 \\]

Powyższy warunek nazywamy warunkiem Cauchy'ego ciągłości funkcji w punkcie \\( x_0 \\).
\end{de}

\begin{de}
(jednostajna ciągłość)

Funkcja \\( f: D \to \mathbb{R} \\) jest jednostajnie ciągła, gdy 
\\[ 
(\forall \epsilon > 0)(\exists \delta > 0)(\forall x,x')(( \vert x-x' \vert <\delta) \implies
( \vert f(x)-f(x') \vert < \epsilon))
 \\]

Funkcja jednostajnie ciągła jest ciągła.
\end{de}

\begin{de}
(warunek Lipschitza)

Funkcja \\( f:\mathbb{R} \to \mathbb{R} \\) spełnia warunek Lipschitza ze stałą \\( L \\),
gdy dla dowolnych \\( x_1, x_2 \in \mathbb{R} \\) zachodzi nierówność
\\[ 
 \vert f(x_1)-f(x_2) \vert \leq L \vert x_1-x_2 \vert 
 \\]
Każda funkcja spełniająca warunek Lipschitza jest jednostajnie ciągła.
\end{de}

\begin{tw}
\

Niech \\( f:(a,b) \to \mathbb{R} \\) będzie funkcją różniczkowalną. Wówczas \\( f \\)
spełnia warunek Lipschitza ze stałą \\( L \\) wtedy i tylko wtedy gdy jej pochodna
jest ograniczona (z góry lub z dołu) przez \\( L \\).
\end{tw}

\begin{de}
Zbiór \\( Z \\) jest wypukły gdy \\( a,b \in Z \implies [a,b] \in Z \\)
\end{de}

\begin{tw}
(Darboux - o przyjmowaniu wartości pośrednich)

Jeśli \\( f: Z \to \mathbb{R} \\) jest ciągła i \\( Z \\) jest wypukły w \\( \mathbb{R} \\), to \\( f[Z] \\) jest wypukły.

\underline{Wniosek:}

Jeśli \\( f \\) jest ciągła na zbiorze wypukłym \\( Z \\) i \\( f(x)<t<f(y) \\), to \\( t \in f[Z] \\), 
funkcja przyjmuje wartości pośrednie \\( f(x) \\) i \\( f(y) \\)
\end{tw}

\begin{tw}
Jeśli \\( f:[a,b] \to \mathbb{R} : f \\) jest ciągła, to \\( [a, b] \\)
jest przedziałem domkniętym. W szczegolności \\( f \\) przyjmuje wartość 
największą i najmniejszą.
\end{tw}

\begin{tw}
(O funkcji odwrotnej)

Jeśli \\( f: [a,b] \to f([a,b]) \subseteq \mathbb{R} \\) jest ciągła i różnowartościowa
to funkcja odwrotna \\( g=f^{-1}: f([a, b]) \to [a,b] \\) jest ciągła.
\end{tw}

#### Pochodna funkcji

\begin{de}
(iloraz różnicowy w punkcie \\( a \in D_f \\))

\\[ 
\frac{f(x) - f(a)}{x - a}
 \\]
alternatywnie dla \\( x-a = h \\)
\\[ 
\frac{f(a+h) - f(a)}{h}
 \\]

Pochodną funkcji nazywamy granicę ilorazu róznicowego gdy \\( h \to 0 \\)
\end{de}

\begin{tw}
\\[ 
f \text{ jest różniczkowalna w }a \implies f \text{ jest ciągła w } a
 \\]
\end{tw}
#### Ekstrema funkcji

\begin{de}
\

\\( f: D \to \mathbb{R} \\) ma maksimum lokalne w punkcie \\( a \in D \\), gdy dla 
pewnego przedziału \\( (a - \delta, a+\delta),(\delta>0) \\) (otoczenie punktu \\( a \\))
i dla wszystkich \\( x \in (a - \delta, a+\delta) \cap D \\) mamy
\\( f(x) \leq f(a) \\)
\end{de}

\begin{tw}
Jeśli funkcja jest różniczkowalna w punkcie \\( a \\) i ma w \\( a \\) ekstremum lokalne,
to \\( f'(a)=0 \\). (warunek konieczny istnienia ekstremum)
\end{tw}

\begin{tw}
(Rolle'a)

Jeśłi \\( f:[a,b] \to \mathbb{R} \\) jest ciągła i różniczkowalna w \\( (a,b) \\) oraz
\\( f(a) = f(b) \\), to istnieje \\( c\in(a,b) \\) takie że \\( f'(c)=0 \\).
\end{tw}

\begin{tw}
(Lagrange'a)

Jeśli \\( f:[a,b]\to\mathbb{R} \\) jest ciągła i różniczkowalna w \\( (a,b) \\), to 
istnieje \\( c \in (a,b) \\), takie że
\\[ 
f'(c) = \frac{f(b) - f(a)}{b-a}
 \\]
\end{tw}

\begin{tw}
(Cauchy'ego)

Jeśli \\( f:[a,b] \to \mathbb{R} \\) i \\( g:[a,b] \to \mathbb{R} \\)
są ciągłe i różniczkowalne w \\( (a,b) \\) i 
\\( (\forall x \in (a,b))(g'(x) \neq 0) \\), to istnieje \\( c \in (a,b) \\) takie, że:
\\[ 
\frac{f(b) - f(a)}{g(b)-g(a)} = \frac{f'(c)}{g'(c)}
 \\]
\end{tw}
#### Asymptotyczne tempo wzrostu funkcji

\begin{de}
(Notacja "O")
\\[ 
f(x) = O(g(x)) \iff \lim_{x \to \infty} \left \vert \frac{f(x)}{g(x)}\right \vert < \infty
 \\]
\end{de}

\begin{de}
(Notacja "o")
\\[ 
f(x) = o(g(x)) \iff \lim_{x \to \infty} \frac{f(x)}{g(x)}=0
 \\]
\end{de}

\begin{de}
(Notacja "\\( \Theta \\)")
\\[ 
f(x) = \Theta(g(x)) \iff 0<\lim_{x \to \infty}
\left \vert \frac{f(x)}{g(x)}\right \vert < \infty
 \\]
\end{de}

#### Reguła de l'Hospitala

Jeśli \\( \lim\limits_{x \to a} f(x) = \lim\limits_{x \to a} g(x) \in \{0, \pm\infty \} \\)
oraz istnieje granica \\( \lim\limits_{x \to a} \frac{f'(x)}{g'(x)} \\)
to

\\[ 
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
 \\]
#### Wzór Taylora i Maclaurina

Jeśli funkcja jest n-krotnie różniczkowalna w \\( [a,b] \\), to
\\[ 
f(b) = f(a) + \frac{b-a}{1!} \cdot f'(a) + ... +
  \frac{(b-a)^2}{2!} \cdot f''(a) + ... +
  \frac{(b-a)^{n-1}}{(n-1)!} \cdot f^{(n-1)}(a) + R_n
 \\]
gdzie
\\[ 
R_n = \frac{(x-x_0)^n}{n!}f^{(n)}(c_n), \ \ a<c_n<b
 \\]

Wzór Taylora dla \\( a=0 \\) nazywamy wzorem Maclaurina.

\begin{tw}
Jeżeli ciąg reszt \\( R_n \\) w rozwinięciu Taylora (w szczególności Maclaurina)
funkcji \\( f \\) jest zbieżny do \\( 0 \\) dla każdego \\( x \\) z pewnego otoczenia \\( U \\)
punktu \\( x_0 \\), szereg
\\[ f(x) = \sum_{n=0}^{\infty} \frac{(x-x_0)^n}{n!} \cdot f^{(n)}(x_0) \\]
jest zbieżny dla każdego \\( x \in U \\)

Taki szereg nazywamy szeregiem Taylora (Maclaurina) funkcji f.
\end{tw}

#### Różniczkowanie szeregów potęgowych

\begin{tw}
Szeregi \\( \sum_{n=1}^{\infty}c_n x^n \\) i \\( \sum_{n=1}^{\infty}n c_n x^{n-1} \\)
mają takie same promienie zbieżności i zachodzi wzór
\\[ \left(\sum_{n=1}^{\infty}c_n x^n \right)' =
\sum_{n=1}^{\infty}n c_n x^{n-1} \\]

dla \\(  \vert x \vert < R \\) - promień zbieżności
(różniczkowanie wyraz po wyrazie)
\end{tw}