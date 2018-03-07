---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

\section{Całki}

\subsection{Metody liczenia całek nieoznaczonych}

\subsubsection{Całkowanie przez części}

Jeżeli $f$ i $g$ mają ciągłe pierwsze pochodne to:

$$
\int f(x) \cdot g'(x) dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) dx
$$

\subsubsection{Całkowanie przez podstawienie}

Jeżeli funkcję $f(x)$ można zapisać w postaci
$$
f(x) = g(h(x)) \cdot h'(x)
$$
gdzie funkcja $h(x)$ ma ciągłą pochodną, to
$$
\int f(x) dx = \int g(t) dt
$$
gdzie $ t = h(x) $

\subsection{Całki oznaczone}
Jeśli
$$
\int f(x) dx = F(x)
$$
to
$$
\int_a^b f(x) dx = F(b) - F(a)
$$

\begin{tw}
(Podstawowe twierdzenie rachunku całkowego)

Jeśli funkcja $f: \mathbb{R} \to \mathbb{R}$ jest ciągła, to
$$
\frac{d}{dx} \left(
                    \int_a^x f(t) dt 
             \right)
             = f(x)
$$
Wynika z tego iż całkowanie jest operacją odwrotną do różniczkowania.
\end{tw}

\subsection{Całki niewłaściwe}

\subsubsection{Całki niewłaściwe pierwszego rodzaju}

Są to całki określone na nieograniczonym przedziale całkowania
$[a, \infty),(-\infty, b]$ lub $(-\infty,\infty)$. Liczy je się 
za pomocą granic.

$$
\int_a^{\infty} f(x) dx = \lim_{T \to \infty} \int_a^T f(x) dx
$$
$$
\int_{-\infty}^b f(x) dx = \lim_{T \to -\infty} \int_T^b f(x) dx
$$
$$
\int_{-\infty}^{\infty} f(x) dx =
\int_{-\infty}^a f(x) dx + \int_a^{\infty} f(x) dx 
$$

Całka niewłaściwa jest
\begin{itemize}
\item zbieżna (granica właściwa równa dowolnej liczbie) 
\item rozbieżna do $\pm \infty$ (granica niewłaściwa)
\item rozbieżna (granicy nie da się określić)
\end{itemize}

\subsection{Metody aproksymacji (przybliżania) całek oznaczonych}

\subsubsection{Przybliżanie całki Riemanna przez sumy całkowe}

\subsubsection{Metoda trapezów}

$P=$ podział $[a,b]$ na $n$ równych części

\begin{figure}[h]
\centering
\includegraphics[scale=0.6]{trapez.png}

pole trapezu $ \frac{f(x_{i-1}) + f(x_i)}{2} \Delta x_i ,
\ \ \Delta x_i=\frac{b-a}{n}$
\end{figure}

$$ 
\int_a^b f(x) dx \approx \frac{b-a}{2n} \sum_{i=1}^n \big(f(x_{i-1})+f(x_i)\big) = 
\frac{b-a}{2n} \big(f(a) +2f(x_1) + ... + 2f(x_{n-1}) + f(b) \big)
$$

\subsubsection{Metoda Simpsona}

$P=$ podział $[a,b]$ na $n$ równych części, $n$ - parzyste,
$\Delta x_i=\frac{b-a}{n} = h$

$$
\int_a^b f(x) dx \approx
\frac{b-a}{3n}
\bigg[
f(a) +4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) +...+
4f(x_{n-1}) + f(b)
\bigg]
$$

$n$ - ilość punktów podziału

błąd $E_n$ można przybliżyć jako

$$
0 \leq E_n \leq \frac{K}{180n^4}(b-a)^5
\text{, gdzie }
K = \max\{|f^{(4)}(x)|: x \in [a,b]\}
$$
\newpage
\underline{Przykład zastosowania}

\begin{figure}[h!]
\centering
\includegraphics[scale=0.4]{plama.png}

plama ropy
\end{figure}

Według wzoru
$$
P = \int_0^{10} [g(x)-h(x)] dx \approx
\frac{10}{3\cdot10} \bigg[0.5 + 4\cdot1.1 + 2\cdot1.3 + 2\cdot1.4 + ... + 0.2 \bigg]
$$

\subsubsection{Wielomian interpolacyjny Lagrange'a}

Danych jest $(n+1)$ punktów $x_0,...,x_n \in \mathbb{R}$, w których pewna 
funkcja przyjmuje wartości (pomiary) $y_0,...,y_n \in \mathbb{R}$
Zakładamy że funkcja ta jest ciągła (opisuje zjawisko fizyczne ciągłe)

Wtedy istnieje (dokładnie jeden) wielomian stopnia $n$ przyjmujący wartości 
$y_0,...,y_n$ w punktach $x_0,...,x_n$.

$$
W(x) = y_0u_0(x) + y_1u_1(x) +...+ y_nu_n(x)
$$
gdzie
$$
u_k(x) = \frac
{(x-x_0)\cdot...\cdot(x-x_{k-1})(x-x_{k+1})\cdot...\cdot(x-x_n)}
{(x_k-x_0)\cdot...\cdot(x_k-x_{k-1})(x_k-x_{k+1})\cdot...\cdot(x_k-x_n)}
$$

Jeżeli $u_k$ dla pewnego $x$ przyjmuje wartość $1$ to dla innego $x$
przymuje wartość $0$.
