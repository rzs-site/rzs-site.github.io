---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

\section{Szeregi potęgowe}

\begin{de}
Szereg
$$
\sum_{n=1}^{\infty}a_nx^n
$$
nazywamy szeregiem potęgowym.
\end{de}

\begin{tw}
Jeśli $ \sum_{n=1}^{\infty}a_nx^n $ jest zbieżny dla $x=x_0 \neq 0$, to jest zbieżny bezwzględnie
$ (\forall x \in (-|x_0|,|x_0|)) $
\end{tw}

\begin{de}
Promień zbieżności szeregu $ \sum_{n=1}^{\infty}a_nx^n $

$$ r = \sup\{|x_0|: \sum_{n=1}^{\infty}a_nx^n \text{ jest zbieżny }\} $$

\begin{itemize}
\item Jeśli $x \in (-r; r)$ to $ \sum_{n=1}^{\infty}a_nx^n $ jest zbieżny.
\item Jeśli $x \notin (-r; r)$ to $ \sum_{n=1}^{\infty}a_nx^n $ jest rozbieżny.
\item Jeśli $x = \pm r $ to $ \sum_{n=1}^{\infty}a_n $ moze być zbieżny lub rozbieżny.
\end{itemize}

\end{de}

\subsection{Wyznaczanie promienia zbieżności}

$$
r = \left[
    \frac{1}{
      \lim\limits_{n \to \infty} | \frac{a_{n+1}}{a_n} |
    }
    \right]
\quad
\text{lub}
\quad
r = \left[
    \frac{1}{
      \lim\limits_{n \to \infty} | \sqrt[n]{a_n} |
    }
    \right]
$$

Następnie należy sprawdzić zbieżność dla $ x= \pm r $