---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

\section{Ciągi}

\begin{de}
(Ciąg liczb rzeczywistych)

Ciągiem liczb rzeczywitych nazywamy dowolną funkcję
$ f: \mathbb{N} \rightarrow \mathbb{R} $
Wartości $ f(n) $ to wyrazy ciągu.
\end{de}

\begin{de}
(Granica ciągu)

Liczba $ a \in \mathbb{R} $ jest granicą ciągu $ (a_n) $, gdy:
$$
(\forall \epsilon > 0)(\exists k \in \mathbb{N})(\forall n \geq k)
(|a_n - a| < \epsilon)
$$

Mówimy wtedy, że ciąg jest zbieżny do granicy $a$, czyli
$$ \lim_{n \to \infty} a_n = a $$

Lub prościej: $ \lim a_n =a $
\end{de}

\subsection{Własności ciągów zbieżnych}

\begin{enumerate}
\item Każdy ciąg zbieżny ma dokładnie jedną granicę.
\item ciąg zbieżny jest ograniczony jeśli
      $ \lim a_n = a $ to
      $ (\exists k)(\forall n \geq k)(|a_n - a| < 1) $
\item $ \lim |a_n| = |\lim a_n| $
\end{enumerate}

\begin{tw}
(o trzech ciągach)

Jeżeli $ a_n \leq c_n \leq b_n $ dla dostatecznie dużych n i 
$ \lim a_n = \lim b_n $ to
$ \lim c_n = \lim a_n = \lim b_n $
\end{tw}

\begin{tw}
Każdy ciąg \textbf{monotoniczny} i \textbf{ograniczony}
jest \textbf{zbieżny}
\end{tw}

\begin{de}
(ciąg rozbieżny)

Ciąg jest rozbieżny do $ \infty $, gdy
$$
(\forall r \in \mathbb{R})(\exists k)(\forall n \geq k)(a_n > r)
$$

Ciąg jest rozbieżny do $ -\infty $, gdy
$$
(\forall r \in \mathbb{R})(\exists k)(\forall n \geq k)(a_n < r)
$$
\end{de}

\begin{tw}
\
\begin{enumerate}
\item Jeśli $ \lim a_n = \pm \infty $ to 
      $ \lim \frac{1}{a_n} = 0 $
\item Jeśli $(\lim a_n) = 0$, $a_n > 0$ dla prawie wszystkich n
      ( $ (\exists N) (\forall n>N) $ )
      to $ \lim \frac{1}{a_n} = + \infty $
      (analogicznie $-\infty$ dla $a_n < 0$)
\item Jeśli $(a_n)$ jest \textbf{ograniczony} i
      $ \lim (b_n = \infty) $
      to $ \lim (a_n + b_n) = \infty $\\
      oraz $ \lim (a_n - b_n) = - \infty $
      i $ \lim (\frac{a_n}{b_n}) = 0 $
\item Jeśli $ \lim a_n = a $, $a>0$, $ \lim b_n = \infty $,
      to $ \lim a_n b_n = \infty $
      (analogicznie gdy $\lim b_n = - \infty $)
\end{enumerate}
\end{tw}

\begin{de}
(podciąg)

Jeśli $ (\forall n \in \mathbb{N}) m_1<m_2<...<m_n \in \mathbb{N} $,
to $ (a_{m_n})_{n=1}^{\infty} $
nazywamy podciągiem ciągu $ (a_n)_{n=1}^{\infty} $
\end{de}

\begin{tw}
Podciąg ciągu zbieżnego do $a$ jest zbieżny do $a$.
\end{tw}

\begin{tw}
(Bolzano-Weierstrasa)

Każdy ograniczony ciąg liczb rzeczywistych ma podciąg zbieżny.

\underline{WNIOSEK}
\begin{enumerate}
\item Każdy ciąg ograniczony $ (a_n) $ taki, że każdy jego podciąg jest
      zbieżny do granicy g jest też zbieżny do granicy g.
\item Każdy ciąg ograniczony rozbieżny zawiera przynajmniej 
      dwa podciągi zbieżne do różnych granic.
\end{enumerate}
\end{tw}

\begin{tw}
(Warunek Cauchy'ego)

$$ (\forall \epsilon > 0)(\exists k \in \mathbb{N})(\forall m,n \geq k)
   (|a_m - a_n| < \epsilon)
$$
\end{tw}

\begin{fakt}
\

\begin{enumerate}
\item Każdy ciąg zbieżny spełnia warunek Cauchy'ego.
\item Każdy ciąg spełniający warunek Cauchy'ego jest ograniczony.
\item Każdy ciąg spełniający warunek Cauchy'ego zawiera podciąg zbieżny.
\end{enumerate}
\end{fakt}

\begin{tw}
(Cauchy)

Ciąg liczb rzeczywistych jest zbieżny $\iff$ spełnia warunek Cauchy'ego.
\end{tw}