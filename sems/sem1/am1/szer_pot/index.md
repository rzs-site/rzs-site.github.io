---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

### Szeregi potęgowe

{::options parse_block_html="true" /}
<div class="table-box">

</div>
{::options parse_block_html="false" /}

\begin{de}
Szereg
\\[ 
\sum_{n=1}^{\infty}a_nx^n
 \\]
nazywamy szeregiem potęgowym.
\end{de}

\begin{tw}
Jeśli \\( \sum_{n=1}^{\infty}a_nx^n \\) jest zbieżny dla \\( x=x_0 \neq 0 \\), to jest zbieżny bezwzględnie
\\( (\forall x \in (- \vert x_0 \vert , \vert x_0 \vert )) \\)
\end{tw}

\begin{de}
Promień zbieżności szeregu \\( \sum_{n=1}^{\infty}a_nx^n \\)

\\[ r = \sup\{ \vert x_0 \vert : \sum_{n=1}^{\infty}a_nx^n \text{ jest zbieżny }\} \\]


* Jeśli \\( x \in (-r; r) \\) to \\( \sum_{n=1}^{\infty}a_nx^n \\) jest zbieżny.
* Jeśli \\( x \notin (-r; r) \\) to \\( \sum_{n=1}^{\infty}a_nx^n \\) jest rozbieżny.
* Jeśli \\( x = \pm r \\) to \\( \sum_{n=1}^{\infty}a_n \\) moze być zbieżny lub rozbieżny.


\end{de}

#### Wyznaczanie promienia zbieżności

\\[ 
r = \left[
\frac{1}{
 \lim\limits_{n \to \infty} \vert \frac{a_{n+1}}{a_n} \vert 
}
\right]
\quad
\text{lub}
\quad
r = \left[
\frac{1}{
 \lim\limits_{n \to \infty} \vert \sqrt[n]{a_n} \vert 
}
\right]
 \\]

Następnie należy sprawdzić zbieżność dla \\( x= \pm r \\)