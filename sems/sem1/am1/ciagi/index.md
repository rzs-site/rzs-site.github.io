---
layout: acc_layout
toc: am1
use_math: true
---

Analiza matematyczna 1
---

### Ciągi

#### Ciąg liczb rzeczywistych (definicja)

{::options parse_block_html="true" /}
<div class="def-box"><p> Ciągiem liczb rzeczywitych nazywamy dowolną funkcję \\( f: \mathbb{N} \rightarrow \mathbb{R} \\) Wartości \\( f(n) \\) to wyrazy ciągu.</p></div>
{::options parse_block_html="false" /}


{::options parse_block_html="true" /}
	<div class="def-box"><p> Ciągiem liczb rzeczywitych nazywamy dowolną funkcję \\( f: \mathbb{N} \rightarrow \mathbb{R} \\) Wartości \\( f(n) \\) to wyrazy ciągu.</p></div>
{::options parse_block_html="false" /}

#### Granica ciągu (definicja)

{::options parse_block_html="true" /}
	<div class="def-box">
		Liczba \\( a \in \mathbb{R} \\) jest granicą ciągu \\( (a_n) \\), gdy:
		\\[ 
			(\forall \epsilon > 0)(\exists k \in \mathbb{N})(\forall n \geq k)
			( \vert a_n - a \vert < \epsilon)
		 \\]

		Mówimy wtedy, że ciąg jest zbieżny do granicy \\( a \\), czyli
		\\[ \lim_{n \to \infty} a_n = a \\]

		Lub prościej: \\( \lim a_n =a \\)
	</div>
{::options parse_block_html="false" /}


#### Własności ciągów zbieżnych

* Każdy ciąg zbieżny ma dokładnie jedną granicę.
* ciąg zbieżny jest ograniczony jeśli
 \\( \lim a_n = a \\) to
 \\( (\exists k)(\forall n \geq k)( \vert a_n - a \vert < 1) \\)
* \\( \lim \vert a_n \vert = \vert \lim a_n \vert  \\)


#### Twierdzenie o trzech ciągach
{::options parse_block_html="true" /}
	<div class="theorem-box">
		Jeżeli \\( a_n \leq c_n \leq b_n \\) dla dostatecznie dużych n i 
		\\( \lim a_n = \lim b_n \\) to
		\\( \lim c_n = \lim a_n = \lim b_n \\)
	</div>
{::options parse_block_html="false" /}

#### Twierdzenie ?
{::options parse_block_html="true" /}
	<div class="theorem-box">
		Każdy ciąg \textbf{monotoniczny} i \textbf{ograniczony}
		jest \textbf{zbieżny}
	</div>
{::options parse_block_html="false" /}

#### Twierdzenie, ciąg rozbieżny
{::options parse_block_html="true" /}
	<div class="def-box">
		Ciąg jest rozbieżny do \\( \infty \\), gdy
		\\[ 
		(\forall r \in \mathbb{R})(\exists k)(\forall n \geq k)(a_n > r)
		 \\]

		Ciąg jest rozbieżny do \\( -\infty \\), gdy
		\\[ 
		(\forall r \in \mathbb{R})(\exists k)(\forall n \geq k)(a_n < r)
		 \\]
	</div>
{::options parse_block_html="false" /}


#### Twierdzenie
{::options parse_block_html="true" /}
	<div class="def-box">
		* Jeśli \\( \lim a_n = \pm \infty \\) to 
		 \\( \lim \frac{1}{a_n} = 0 \\)
		* Jeśli \\( (\lim a_n) = 0 \\), \\( a_n > 0 \\) dla prawie wszystkich n
		 ( \\( (\exists N) (\forall n>N) \\) )
		 to \\( \lim \frac{1}{a_n} = + \infty \\)
		 (analogicznie \\( -\infty \\) dla \\( a_n < 0 \\))
		* Jeśli \\( (a_n) \\) jest \textbf{ograniczony} i
		 \\( \lim (b_n = \infty) \\)
		 to \\( \lim (a_n + b_n) = \infty \\)\\
		 oraz \\( \lim (a_n - b_n) = - \infty \\)
		 i \\( \lim (\frac{a_n}{b_n}) = 0 \\)
		* Jeśli \\( \lim a_n = a \\), \\( a>0 \\), \\( \lim b_n = \infty \\),
		 to \\( \lim a_n b_n = \infty \\)
		 (analogicznie gdy \\( \lim b_n = - \infty \\))
	</div>
{::options parse_block_html="false" /}

#### Podciąg (definicja)
{::options parse_block_html="true" /}
	<div class="def-box">
		Jeśli \\( (\forall n \in \mathbb{N}) m_1<m_2<...<m_n \in \mathbb{N} \\),
		to \\( (a_{m_n})_{n=1}^{\infty} \\)
		nazywamy podciągiem ciągu \\( (a_n)_{n=1}^{\infty} \\)
	</div>
{::options parse_block_html="false" /}

#### Twierdzenie
{::options parse_block_html="true" /}
	<div class="theorem-box">
		Podciąg ciągu zbieżnego do \\( a \\) jest zbieżny do \\( a \\).
	</div>
{::options parse_block_html="false" /}

#### Twierdzenie Bolzano-Weierstrasa
{::options parse_block_html="true" /}
	<div class="theorem-box">
		Każdy ograniczony ciąg liczb rzeczywistych ma podciąg zbieżny.
		* Każdy ciąg ograniczony \\( (a_n) \\) taki, że każdy jego podciąg jest
		 zbieżny do granicy g jest też zbieżny do granicy g.
		* Każdy ciąg ograniczony rozbieżny zawiera przynajmniej 
		 dwa podciągi zbieżne do różnych granic.
	</div>
{::options parse_block_html="false" /}

#### Warunek Cauchy'ego
{::options parse_block_html="true" /}
	<div class="theorem-box">
		\\[ (\forall \epsilon > 0)(\exists k \in \mathbb{N})(\forall m,n \geq k)
		  ( \vert a_m - a_n \vert < \epsilon)
		\\]
	</div>
{::options parse_block_html="false" /}

#### Fakt
{::options parse_block_html="true" /}
	<div class="fact-box">
		* Każdy ciąg zbieżny spełnia warunek Cauchy'ego.
		* Każdy ciąg spełniający warunek Cauchy'ego jest ograniczony.
		* Każdy ciąg spełniający warunek Cauchy'ego zawiera podciąg zbieżny.
	</div>
{::options parse_block_html="false" /}

#### Twierdzenie Cauchy'ego
{::options parse_block_html="true" /}
	<div class="theorem-box">
		Ciąg liczb rzeczywistych jest zbieżny \\( \iff \\) spełnia warunek Cauchy'ego.
	</div>
{::options parse_block_html="false" /}
