---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

### Szeregi liczbowe

{::options parse_block_html="true" /}
<div class="def-box"><p>
Niech \\( (a_n) \\) będzie ciągiem liczb rzeczywistych. Szeregiem o wyrazach 
\\( a_n \\),\\ \\( n=1,2,... \\), nazywamy \textbf{ciąg sum częściowych}:
\\[ 
S_n = a_1 +...+ a_n = \sum_{k=1}^{n} a_k
\\]
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="def-box"><p>
Granicą ciągu sum częściowych, o ile istnieje, nazywa się sumę szeregu
i jest oznaczana \\( \sum_{k=1}^{\infty} a_k = a_1 + a_2 + ... \\)
Mówimy wtedy że szereg jest zbieżny. W przeciwnym razie - rozbieżny.
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="def-box"><p>
(n-ta reszta)
\\( r_n = \sum_{k=n+1}^{\infty} a_k = a_{n+1} + a_{n+2} + ... \\)
to \textbf{n-ta reszta} szeregu \\( \sum_{k=1}^{\infty} \\)
</p></div>
{::options parse_block_html="false" /}

#### Podstawowe własności szeregów

* Jeśli \\( \sum_{k=1}^{\infty}a_k \\) i \\( \sum_{k=1}^{\infty}b_k \\)
są zbieżne ,to \\( \sum_{k=1}^{\infty}a_k+b_k \\) jest zbieżny
oraz $ \sum_{k=1}^{\infty}a_k+b_k = \sum_{k=1}^{\infty}a_k +
\sum_{k=1}^{\infty}b_k$
* Jeśli \\( \sum_{k=1}^{\infty}a_k \\) jest zbieżny to:
$ \sum_{k=1}^{\infty}c \cdot a_k = 
c \sum_{k=1}^{\infty}a_k $
* Jeżeli \\( \sum_{k=1}^{\infty}a_k \\) jest zbieżny to ciąg reszt
\\( r_n = \sum_{k=n+1}^{\infty}a_k \\) jest zbieżny do 0.
* (Warunek Cauchy'ego)

\\[ 
\sum_{k=1}^{\infty}a_k \text{ jest zbieżny}
\iff
(\forall \epsilon>0)(\exists k \in \mathbb{N})(\forall m \in \mathbb{N})
(\underbrace{ \vert a_{k+1}+ ... + a_{k+m} \vert }
_{\substack{\text{m-ta suma częściowa}\\ \text{k-tej reszty}}}
< \epsilon)
\\]


#### Kryteria zbieżności szeregów


* Leibniz

Jeżeli ciąg \\( (a_n) \\) jest malejący i zbieżny
do zera, to szereg \\( \sum_{n=1}^{\infty} (-1)^n a_n \\)
jest zbieżny.

* Porównawcze

Jeśli \\( 0 \leq b_n \leq a_n \\) (ciągi nieujemne) i szereg
\\( \sum_{n=1}^{\infty}a_n \\) jest \textbf{zbieżny} to
\\( \sum_{n=1}^{\infty}b_n \\) jest \textbf{zbieżny} i
\\( \sum_{n=1}^{\infty}b_n \leq \sum_{n=1}^{\infty}a_n \\)

Jeśli \\( 0 \leq a_n \leq b_n \\) (ciągi nieujemne) i szereg
\\( \sum_{n=1}^{\infty}a_n \\) jest \textbf{rozbieżny} to
\\( \sum_{n=1}^{\infty}b_n \\) jest \textbf{rozbieżny}

* d'Alambert

\\( \sum_{n=1}^{\infty}a_n \\), \\( a_n >0 \\) \\ \\
\\( \lim_{n \to \infty} \frac{a_{n+1}}{a_n} < 1 \\) - szereg zbieżny\\
\\( \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = 1 \\) - nie można określić zbieżności\\
\\( \lim_{n \to \infty} \frac{a_{n+1}}{a_n} > 1 \\) - szereg rozbieżny
* Cauchy

\\( \sum_{n=1}^{\infty}a_n \\), \\( a_n >0 \\)\\
\\
\\( \lim_{n \to \infty} \sqrt[n]{a_n} < 1 \\) - szereg zbieżny\\
\\( \lim_{n \to \infty} \sqrt[n]{a_n} = 1 \\) - nie można określić zbieżności\\
\\( \lim_{n \to \infty} \sqrt[n]{a_n} > 1 \\) - szereg rozbieżny
* całkowe

Dla szeregu \\( \sum_{n=1}^{\infty}a_n \\) tworzymy funkcję \\( f(x) \\) taką,
że \\( f(n) = a_n \\) dla każdego n.
\\( f(x) \\) - malejąca i dodatnia dla \\( x \geq n_0 \\) dla pewnego \\( n_0 \\)
Szereg jes zbieżny wtedy i tylko wtedy gdy całka
\\[ 
\int_{n_0}^{\infty} f(x) dx
\\]
jest zbieżna.
* warunek konieczny zbieżności szeregu

\\[ 
\sum_{n=1}^{\infty}a_n \text{ jest zbieżny}
\implies
\lim_{n \to \infty} a_n =0
\\]

i równoważnie:

\\[ 
\lim_{n \to \infty} a_n \neq 0
\implies
\sum_{n=1}^{\infty}a_n \text{ jest rozbieżny}
\\]

**OSZACOWANIA DLA KRYTERIUM PORÓWNAWCZEGO**

\\[ 
\sum_{n=1}^{\infty} \frac{1}{n^{\alpha}}
\begin{cases}
\alpha > 1 -\text{ zbieżny}
\\
\alpha \leq 1 -\text{ rozbieżny}
\end{cases}
\\]
\\[ 
\sin x < x
\\]
\\[ 
\ln x < x-1
\\]
\\[ 
\sin x \geq \frac{2}{\pi}x, \hspace{1cm} x \in [0;\frac{\pi}{2}]
\\]
\\[ 
\tg x \leq \frac{4}{\pi}x, \hspace{1cm} x \in [0;\frac{\pi}{4}]
\\]

#### Szeregi bezwzględnie zbieżne

{::options parse_block_html="true" /}
<div class="def-box"><p>
\\( \sum_{n=1}^{\infty}a_n \\) jest bezwzględnie zbieżny, jeśli
\\( \sum_{n=1}^{\infty} \vert a_n \vert  \\) jest zbieżny.
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="theorem-box"><p>
Szereg bezwzględnie zbieżny jest zbieżny. Ponadto
\\(  \vert \sum_{n=1}^{\infty}a_n \vert \leq \sum_{n=1}^{\infty} \vert a_n \vert  \\)
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="theorem-box"><p>
Szereg \\( \sum_{n=1}^{\infty}a_n \\) jest warunkowo zbieżny, gdy jest zbieżny,
ale nie jest bezwzględnie zbieżny. (np. kryterium Leibniza)
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="theorem-box"><p>
Szeregi bezwzględnie zbieżne są przemienne, to znaczy:
\\( \sum_{n=1}^{\infty}a_n \\) - bezwzględnie zbieżny\\
\\( m_1, m_2, ... \\) permutacje zbioru \\( \mathbb{N} \\)
to:\\
\\( \sum_{n=1}^{\infty}a_{m_n} \\) jest zbieżny oraz
\\( \sum_{n=1}^{\infty}a_{m_n} = \sum_{n=1}^{\infty}a_n \\)
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="theorem-box"><p>
(Riemann)

Jeśli \\( \sum_{n=1}^{\infty}a_n \\) jest warunkowo zbieżny to
\\( (\forall r \in \mathbb{R} \cup \{\pm \infty \}) \\)
istnieje taka permutacja \\( m_1, m_2, ... \\) taka, że
\\[ \sum_{n=1}^{\infty}a_{m_n} = r \\]

Istnieje też permutacja \\( k_1, k_2, ... \\) taka, że \\( \sum_{n=1}^{\infty}a_{k_n} \\)
jest rozbieżny.

</p></div>
{::options parse_block_html="false" /}


{::options parse_block_html="true" /}
<div class="theorem-box"><p>
(Mnożenie szeregów bezwzględnie zbieżnych)

Jeśli \\( \sum_{n=1}^{\infty}a_n \\), \\( \sum_{n=1}^{\infty}b_n \\)
są bezwzględnie zbieżne to:

\\[ 
(\sum_{n=1}^{\infty}a_n) (\sum_{n=1}^{\infty}b_n) = \sum_{n=1}^{\infty}c_n 
\\]
gdzie \\( c_n = a_1b_n + a_2b_{n-1} + ... + a_nb_1 \\)
</p></div>
{::options parse_block_html="false" /}

{::options parse_block_html="true" /}
<div class="theorem-box"><p>
Do obliczania zbieżności bezwzględnej szeregów można używać kryteriów
d'Alamberta i Cauchy'ego.
\\( \lim_{n \to \infty} \vert \frac{a_{n+1}}{a_n} \vert < 1 \\) - szereg bezwzględnie zbieżny\\
\\( \lim_{n \to \infty} \sqrt[n]{ \vert a_n \vert } < 1 \\) -  szereg bezwzględnie zbieżny\\
(analogicznie dla granicy > 1)
</p></div>
{::options parse_block_html="false" /}