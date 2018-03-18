---
layout: default
use_math: true
---

Algebra z Geometrią Analityczną
---

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}, 
CommonHTML: { linebreaks: { automatic: true } }, 
"HTML-CSS": { linebreaks: { automatic: true } }, 
SVG: { linebreaks: { automatic: true } } 
})
</script>
  
$
  \def\RR{\mathbb{R}}
  \def\QQ{\mathbb{Q}}
  \def\ZZ{\mathbb{Z}}
  \def\CC{\mathbb{C}}  
  \def\NN{\mathbb{N}}
  \newcommand{\span}[1]{\mathrm{span}(#1)} 
  \newcommand{\IS}[2]{\langle\,#1,#2\rangle}
  \newcommand{\sgn}[1]{\mathrm{sgn}(#1)}  
$

<article class="panel">
<h2>Zagadnienia omówione na wykładzie</h2>

<section class="subpanel">
<h3>04.10.2016: Grupy - cz. I </h3>
<ol>
<li>Pojęcia działania binarnego. Łączność, przemienność</li>
<li>Pojęcie grupy</li>
<li>Przykłady grup. Grupa $C_n = (\{0,\ldots,n-1\},\oplus)$, gdzie $x \oplus y = (x+y) \quad \mathrm{mod} \quad n$.</li>
<li>Tw. W grupie istnieje dokładnie jeden element neutralny. Dla każdego elementu $x$ istnieje dokładnie jeden element odwrotny. Oznaczany jest on symbolem $x^{-1}$ </li>
<li>Pojęcie izomorfizmu grup</li>
</ol>
</section>

<section class="subpanel">
<h3>05.10.2016: Grupy - cz. II </h3>
<ol>
<li>Tw. Jeśli $|\mathcal{G}|=2$, to $\mathcal{G}$ jest izomorficzna z $C_2$.</li>
<li>Tw. (1) $(a^{-1})^{-1} = a$; (2) $(a\cdot b)^{-1} = b^{-1} a^{-1}$.</li>
<li>Def. $(G,\cdot) \times (H,+) = (G\times H, *)$, gdzie $(a,b)*(c,d) = (a\cdot c,b+d)$. </li>
<li>Tw. Jeśli $(G,\cdot)$ i  $(H,+)$ są grupami to $(G,\cdot) \times (H,+)$ też jest grupą.</li>
<li>Pojęcie rzędu elementu w grupie
$$
ord(x) = 
\begin{cases}
\min\{k\geq 1: x^k =e\} &: (\exists k\geq 1)(x^k = e) \\
\infty &: (\forall k\geq 1)(x^k \neq e) 
\end{cases}
$$
</li>
<li>Grupa $Sym(X)$ permutacji zbioru $X$; $S_n=Sym(\{1,2,\ldots,n\})$.</li>
<li>Jeśli $n\geq 3$ to grupa $S_n$ jest nieprzemienna.</li>
<li>Pojęcie homomorfizmu, monomorfizmu i epimorfizmu grup.</li> 
</ol>
Zadanie do zrobienia w weekend: nauczyć się alfabetu greckiego: <br>
$\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$, $\iota$, $\kappa$, $\lambda$, 
$\mu$, $\nu$, $\xi$, $\pi$, $\rho$, $\sigma$, $\tau$, $\upsilon$, $\phi$, $\chi$, $\psi$, $\omega$;
<br> 
$A$, $B$, $\Gamma$, $\Delta$, $E$, $Z$, $H$, $\Theta$, $I$, $K$, $\Lambda$, 
$M$, $N$, $\Xi$, $\Pi$, $R$, $\Sigma$, $T$, $\Upsilon$, $\Phi$, $X$, $\Psi$, $\Omega$; 
</section>


<section class="subpanel">
<h3>11.10.2016: Grupy, pierścienie i ciała</h3>
<ol>
<li>Tw. Niech $n\geq 1$ oraz $\phi_n(x) = x \mod n$. Wtedy $\phi_n$ jest homomorfizmem z $(\mathbf{Z},+)$ na grupę $C_n$.</li>
<li>Pojęcie pierścienia i podstawowe własności działań w pierścieniach: $0\cdot x = x \cdot 0 = 0$, $(-x)\cdot y = -(x\cdot y)$, 
$(x+y)^2 = x^2 + x\cdot y + y\cdot x + y^2$</li>
<li>Pojęcie dzielnika zera</li>
<li>Pojęcie ciała liczbowego. </li>
<li>Tw. W ciele nie ma dzielników zera.</li>
<li>Tw (na razie bez dowodu). Pierścień $\mathbf{Z}_n$ jest ciałem wtedy i tylko wtedy, gdy $n$ jest liczbą pierwszą.</li>
<li>Rozwiązywanie prostych równań liniowych w ciałach $\mathbf{R}$, $\mathbf{Z}_5$ i $\mathbf{Z}_7$.</li>
</section>

<section class="subpanel">
<h3>12.10.2016: Pierścienie i ciała</h3>
<ol>
<li>Rozwiązywanie prostych równań liniowych w ciałach skończonych za pomocą wyznaczników.</li>
<li>Rozwiązywanie równań kwadratowych w takich ciałach $K$, w których $1_K+1_K \neq 0_K$:
<div class="tablica">
$$
  a x^2 + b x + c = \ldots = a\left(\left(x+\frac{b}{2 a}\right)^2 - \frac{b^2 - 4 a c}{(2 a^2)^2}\right)
$$
</div>
Uwaga: $2_K = 1_K+1_K$; $4_K  = 1_K+1_K+1_K+1_K$.
</li>

<li>Tw. Niech $n\geq 1$ oraz $\phi_n(x) = x \mod n$. Wtedy $\phi_n$ jest homomorfizmem z $(\mathbf{Z},+,\cdot)$ na pierścień $\mathbf{Z}_n$.</li>
<li>Przykład zastosowania pojęcia homomorfizmu:
$$
\phi_3\left(\sum_{k=0}^{n} a_k 10^k\right) = \ldots =  \phi_3\left(\sum_{k=0}^{n} a_k\right) ~,
$$
zatem $3|(a_k a_{k-1}\ldots a_1a_0)_{(10)}$ wtedy i tylko wtedy, gdy $3|(a_0+a_1+\ldots+a_k)$.
</li>
<li>Wniosek: $9|(a_k a_{k-1}\ldots a_1a_0)_{(10)}$ wtedy i tylko wtedy, gdy $9|(a_0+a_1+\ldots+a_k)$</li>
<li>Wniosek: $11|(a_k a_{k-1}\ldots a_1a_0)_{(10)}$ wtedy i tylko wtedy, gdy $11|(a_0-a_1+a_2-a_3 + \ldots+(-1)^ka_k)$</li>
</section>

<section class="subpanel">
<h3>18.10.2016: Liczby naturalne - I</h3>
<ol>
<li><strong>ZASADA MINIMUM</strong>: każdy niepusty podzbiór $\mathbb{N}$ ma element najmniejszy.</li>
<li><strong>ZASADA INDUKCJI MATEMATYCZNEJ</strong>: Jeśli $A \subseteq \mathbb{N}$, $0\in A$ oraz $(\forall n)(n\in A \to n+1\in A)$, to $A = \mathbb{N}$.
</li>
<li>Tw. Z Zasady Minimum wynika Zasada Indukcji Matematycznej</li>
<li>Tw. Nie istnieje ciąg liczb naturalnych $(a_n)$ taki, że $(\forall n\in\mathbb{N})(a_{n+1} \lt a_n)$.</li>
<li>Tw (O dzieleniu z resztą) Jeśli $n\in\mathbb{N}$, $n\geq 1$ oraz $x \in \mathbb{Z}$ to istnieją liczby $q\in\mathbb{Z}$ i $r \in \mathbb{N}$ takie, że $x = q\cdot n + r$ oraz $0 \leq r \lt n$.</li>
<li>Def. $NWD(a,b) = \max\{k\in\mathbb{N}: k|a \land k|b\}$</li>
<li>Tw. Jeśli $a,b \in \mathbb{Z}$ oraz $a\neq 0$ lub $b\neq 0$ to istnieją takie liczby całkowite $X,Y$, że
$$ a\cdot X + b \cdot Y = NDW(a,b)~.$$</li>
<li>Uwaga: $NWD(0,0)$ nie jest określone; jeśli $a\neq 0$ to $NWD(a,0) = |a|$</li>
<li>Tw. $\mathbb{Z}_n$ jest ciałem wtedy i tylko wtedy, gdy $n$ jest liczbą pierwszą.</li>
<li>Tw. Załóżmy, że $a,b,q,r \in \mathbb{Z}$ oraz $a = q\cdot b + r$. Wtedy $NWD(a,b) = NWD(b,r)$</li>
<li>Przykład: NWD(21,13) = NWD(13,8) = NWD(8,5) = NWD(5,3) = NWD(3,2) = NWD(2,1)  = 1</li>
<li>Przykład c.d.: 1 =  3 - 2 = 3 - (5 - 3) = 2*3 - 5 = 2*(8-5) - 5 = 2*8 - 3*5 = 2*8 - 3*(13-8) = 5*8-2*13 = 5*(21-13)-3*13 = 5*<strong>21</strong> + (-8)*<strong>13</strong></li>
</ol>
<p>
<strong>Zagadka</strong>: podczas wylicznia NWD(21,13) pojawiły się następujące liczby: 1, 1, 2, 3, 5, 8, 13, 21. Co to jest za ciąg? Czy potrafisz sformułować jakąś hipotezę?
</p>
</section>     

<section class="subpanel">
<h3>19.10.2016: Liczby naturalne - II</h3>
<ol>
<li>Algorytm Euklidesa
<pre>
function NWD(a,b){
  while (a%b<>0){
    [a,b]:= [b,a%b];
  }
  return b;
}
</pre>
</li>
<li>Rozszerzony Algorytm Euklidesa
<pre>
function ExtNWD(a,b){
  X0=1;Y0=0;
  X1=0;Y1=1;
  while (a%b<>0){
    q:= a/b; //dzielenie całkowito-liczbowe
    [a,b,X0,Y0,X1,Y1]:= [b,a%b, X1,Y1,X0-q*X1,Y0-q*Y1];
  }
  return [b,X1,Y1];
}
</pre>
</li>
<li>Tw. Jeśli $NWD(a,b)=1$ oraz $a|b\cdot c$ to $a|c$.</li>
<li>Tw. Każda liczba $n\geq 2$ dzieli się przez jakąś liczbę pierwszą.</li>
<li>Tw  [Euklides] Istnieje nieskończenie wiele liczb pierwszych.</li>
<li>Tw. Każdą liczbę naturalną $n\geq 2$ można przedstawić jednoznacznie w potaci $n = \prod_{i=1}^{k} (p_i)^{\alpha_i}$
dla pewnych liczb pierwszych $p_1 \lt p_2 \lt \ldots \lt p_k$ oraz dodatnich liczb naturalnych $\alpha_1, \ldots \alpha_k$.
</li>
<li>Tw. $NWD(\prod_{i=1}^{k} (p_i)^{\alpha_i}, \prod_{i=1}^{k} (p_i)^{\beta_i} = 
\prod_{i=1}^{k} (p_i)^{\min(\alpha_i,\beta_i)}$.</li>
<li>Def. $NWW(a,b) = \min\{k \gt 0: a|k \land b|k\}$</li>
<li>Tw. $NWW(a,b) = \frac{a\cdot b}{NWD(a,b)}$.</li>
</section>   


<section class="subpanel">
<h3>25.10.2016: Liczby zespolone - I</h3>
<ol>
<li>Własności ciała $\mathbb{Q}(\sqrt{2}) = (\{a+b\sqrt{2}: a,b \in \mathbb{Q}\},+,\cdot)$.</li>
<li>Liczby zespolone: $\mathbb{C} =\{a+b\cdot i:a,b\in\mathbb{R}\}$, gdzie $i$ jest takim elemetem, że $i^2=-1$</li>
<li>Dodawanie, mnożenie (patrz <a href="http://ki.pwr.edu.pl/StudenciComplex.php"> aplety</a>) i dzielenie liczb zespolonych: $\frac{1}{a+b\cdot i} = \frac{a}{a^2+b^2} + \frac{-b}{a^2+b^2} \cdot i$</li>
<li>Def: $|a+b\cdot i| = \sqrt{a^2+b^2}$</li>
<li>Tw. Dla dowolnych $z_1,z_2 \in \mathbb{C}$ mamy:
<ol>
<li>$|z_1 \cdot z_2| = |z_2|\cdot |z_2|$</li>
<li>$|z_1 + z_2| \leq |z_2| + |z_2|$</li>
</ol>
<li>Def: $d(z_1,z_2) = |z_1-z_2|$</li>
<li>Tw. Dla dowolnych $z_1,z_2,z_3 \in \mathbb{C}$ mamy:
<ol>
<li>$(d(z_1,z_2) = 0) \equiv (z_1=z_2)$</li>
<li>$d(z_1,z_2) = d(z_2,z_1)$</li>
<li>$d(z_1,z_2) = d(z_2,z_1)$</li>
<li>$d(z_1,z_3) \leq d(z_1,z_2)+d(z_2,z_2)$ (nierówność trójkąta)</li>
</ol>
</ol>
</section>   

<section class="subpanel">
<h3>26.10.2016: Liczby zespolone - II</h3>
<ol>
<li>Def. (sprzężenie) $\overline{a+b\cdot i} = a-b\cdot i$</li>
<li>Twierdzenie. Dla dowolnych $z, z_1,z_2 \in \mathbb{C}$ mamy:
<ol>
<li>$\overline{} = z$</li>
<li>$\overline{z_1 + z_2}$ = $\overline{z_1} + \overline{z_2}$; </li>
<li>$\overline{z_1 \cdot z_2}$ = $\overline{z_1} \cdot \overline{z_2}$.</li>
<li>$z\cdot\overline{z} = |z|^2$</li>
</ol>
</li>

<li>Wniosek. Jeśli $|z| = 1$ to $z^{-1} = \overline{z}$</li>
<li>Wniosek. Struktura $(\{z\in\mathbb{C}: |z|=1\},\cdot)$ jest grupą</li>

<li>Postać trygonometryczna: $z = |z|(\cos\phi + i\cdot\sin\phi)$</li>
<li>Oznaczenie: $\phi$ jest  argumentem liczby $z$, jeśli $z = |z|(\cos\phi + i\cdot\sin\phi)$</li>
<li>Oznaczenie: $Arg(z)$ (argument główny liczby $z$) jest to taki argument $\phi$ liczby $z$, że $0\leq \phi \lt 2\pi$</li> 
<li>Oznaczenie $e^{it} = \cos(t) + i \cdot \sin(t)$</li>
<li>Najpiękniejszy(?) wzór matematyczny: $e^{i\pi} + 1 = 0$</li>
<li>Tw (wzór de Moivre'a) $(r_1\cdot e^{i\alpha})\cdot(r_2 \cdot e^{i\beta}) = (r_1\cdot r_2)\cdot e^{i(\alpha+\beta)}$</li>
<li>Tw. $z^n=1$ wtedy i tylko wtedy, gdy $z \in \{\epsilon_{n,k}:k=0,\ldots,n-1\}$, gdzie
$$
\epsilon_{n,k} = e^{\frac{2\pi k \cdot i}{n}}~.
$$
(patrz aplet <a href="http://ki.pwr.edu.pl/StudenciComplex.php">Pierwiastki liczby zespolonej</a>)
</li>
<li>Obserwacja: $\epsilon_{n,k}\cdot\epsilon_{n,l} = \epsilon_{n,(k+l)\mod n}$</li>
<li>Wniosek: Grupa $(\{z\in\mathbb{C}: z^n=1\},\cdot)$ jest izomorficzna z grupą $C_n$.</li>
<li>Tw. $1+\epsilon_{n,1}+\epsilon_{n,2} + \ldots + \epsilon_{n,n-1}$ = $0$</li>
</ol>
<h4>Wskazówka do rozwiązania zadania 27.5</h4>
Zauważamy najpierw, że teza jest równoważna pokazaniu, że $(b!)|(a+1)(a+2)\cdot\ldots\cdot(a+b)$ dla dowolnych $a$, $b$.
Analizujemy przejście indukcyjne, czyli zakładamy, że jeśli $a+b=n$ to teza jest prawdziwa. 
Przechodzimy do przypadku $a+b=n+1$. <br>
Stosujemy indukcję po a. Zastępujemy $a$ przez $a+1$.
Chcemy pokazać, że $(b!)|((a+1)+1)((a+1)+2)\cdot\ldots\cdot((a+1)+b)$. A teraz bawimy się tak:
$((a+1)+1)((a+1)+2)\cdot\ldots\cdot((a+1)+b)$ = 
$((a+1)+1)((a+1)+2)\cdot\ldots\cdot(a+b)(a+1)$ + $((a+1)+1)((a+1)+2)\cdot\ldots\cdot(a+b) b$  i przyglądamy się temu wyrażeniu.
<br>
Uwaga: to jest zadanie na "indukcję w indukcji"; oczywiście dowód prawdziwości tego faktu jest bardzo prosty, jeśli skorzysta się ze współczynników Newtona. 
</section>  

<section class="subpanel">
<h3>08.11.2016: Liczby zespolone - III</h3>
<ol>
<li>Pierwiastki z dowolnej liczby zespolonej: jeśli $z = r e^{\alpha i}$ ($r\geq$) to 
$$
 \sqrt[n]{z} = \{\sqrt[n]{r} e^{\frac{\alpha}{n} i} \epsilon_{n,k}: k=0,\ldots,n-1\}~.
$$ 
</li>
<li>Definicja ciała liniowo uporządkowanego</li>
<li>Tw. Ciała liczb zespolonych nie można liniowo uporządkować</li> 
<li>Pierścień liczb zespolonych Gaussa: $\mathbb{Z}[i] = \{a+b\cdot i: a,b \in \mathbb{Z}\}$
<ol>
  <li>Elementy odwracalne: $\mathcal{E}=\{1,-1,i,-i\}$</li>
  <li>Pojęcie liczby pierwszej w pierścieniu Gaussa</li>
  <li>Norma elementu: $N(a+bi) = a^2+b^2$</li>
  <li>Fakt: $N(z_1z_2)= N(z_1)N(z_2)$</li>
  <li>Elementy odwracalne: $\{1,-1,i,-i\}$</li>
  <li>Każda liczba $z\in\mathbb{Z}[i]\setminus \mathcal{E}$ jest podzielna przez jakąś liczbę pierwszą</li>
</ol>
</li>
</ol>
</section> 

<section class="subpanel">
<h3>16.11.2016</h3>
<h4>Liczby Gaussa - c.d</h4>
<ol>
<li>Twierdzenie o dzielemiu z resztą: dla dowolnych $a,b\in\mathbb{Z}[i]$, jeśli $b\neq 0$, to istnieją $p,q \in \mathbb{Z}[i]$ takie, że $a = p\cdot b + q$ oraz $N(q)\lt N(b)$.
</li>
<li>Przykład: $(1+i)(1-i) = 2$, zatem $2$ nie jest pierwsza w $\mathbb{Z}[i]$.</li>
<li>Przykład: liczba $3=0\cdot i$ jest pierwsza w $\mathbb{Z}[i]$.</li>
<li>Tw (bez dowodu) Liczba pierwsza $p$ jest liczbą pierwszą w pierścieniu $\mathbb{Z}[i]$ jeśli $p = 4k +3$ dla pewnej liczby naturalnej $k$.
</li> 
</ol>

<h4>Wielomiany - I</h4>
<ol>
<li>Dziedzina całkowitości: piecień przemienny z jednością, bez dzielników zera</li>
<li>Definicja pierścienia $R[x]$
<ol>
<li>$(\sum_{n=0}^{\infty}a_n X^n)+(\sum_{n=0}^{\infty}b_n X^n) = \sum_{n=0}^{\infty}(a_n+b_n)X^n$</li>
<li>$(\sum_{n=0}^{\infty}a_n X^n)\cdot(\sum_{n=0}^{\infty}b_n X^n) = \sum_{n=0}^{\infty} \left(\sum_{k+l=n}(a_k\cdot b_l)\right) X^n$</li>
</ol>
</li>

<li>Def. $\deg(\sum_{n=0}^{\infty}a_n X^n) = \max\{n: a_n\neq 0\}$</li> 
<li>Tw. $\deg(w \cdot v) = \deg(w) + \deg(v)$</li>
</ol>

</section> 

<section class="subpanel">
<h3>22.11.2016</h3>

<h4>Wielomiany - II</h4>
<ol>
<li>Def. $w|v$ wtedy i tlko wtedy, gdy istnieje wielomian $\alpha$ taki, że $v = \alpha\cdot w$</li> 
<li>Def. Wielomian $w\in R[x]$ jest nierozkładalny, jeśli $deg(w)\geq 1$ oraz nie istnieją wielomiany $v_1,v_2 \in R[x]$ takie, że $w = v_1\cdot v_2$ oraz $\deg(v_1)\lt\deg(w)$ oraz $\deg(v_1)\lt\deg(w)$.</li>
<li>Fakt: Wielomiany pierwszego stopnia (liniowe) są nierozkładalne</li> 
<li>Tw. Każdy wielomian stopnia większego lub równego jeden jest iloczynem wielomianów nierozkładalnych.</li>
</ol>
<h4>Wielomiany nad ciałami</h4>
<ol>
<li>Tw (o dzieleniu) z resztą) Niech $w,v\in K[x]$ oraz $v \neq 0$. Istnieją wtedy wielomiany $q,r\in K[x]$ takie, że $w = q\cdot v + r$ oraz $\deg(q) \lt \deg(v)$</li> 

<li>Wniosek: Jeśli $w\in K[x]$, to $w(a)=0$ wtedy i tylko wtedy, gdy $(x-a)|w$</li>

<li>Tw. Jeśli $w\in \CC[x]$ oraz $\deg(w) = n \geq 1$, to istnieją liczby $\alpha_1, \ldots, \alpha_n\in\CC$ oraz liczba $c\in\CC$ takie, że
$$
  w(x) = c\cdot(x-\alpha_1)\cdot(x-\alpha_2)\cdot\ldots\cdot(x-\alpha_n)~.
$$
(jest to prosta konsekwecja Zasadniczego Twierdzenia Algebry)
</li>
<li>Tw. Jeśli $w\in \RR[x]$ oraz $\deg(w) = n \geq 1$, to istnieją liczby $\alpha_1, \ldots, \alpha_k\in\RR$ oraz wielomiany moniczne (największy niezerowy współczynniki jest równy 1) $p_1, \ldots, p_m$ stopnia drugiego, o wyróżnikach mniejszych od zera oraz liczba $c\in\RR$, takie, że
$$
  w(x) = c\cdot(x-\alpha_1)\cdot\ldots\cdot(x-\alpha_n)p_1(x) \cdot \ldots\cdot p_m(x)~.
$$
Główna obserwacja wykorzystana w dowodzie: jeśli $w\in \RR[x]$ oraz $z\in\CC$ jest takie, że $w(z)=0$ to również $w(\overline{z})=0$. 
</li>
</ol>
<h4>Homomorfim indukowany</h4>
 
Niech $R_1$ i $R_2$ będą pierścieniami; rozważamy homomorfizm $\phi:R_1\to R_2$ bedzie homomorfizmem; wtedy funkcja 
$$
\overline{\phi}(\sum_n a_n x^n) = \sum_n \phi(a_n)x^n
$$
jest homomorfizmem z $R_1[x]$ w $R_2[x]$.
</section> 


<section class="subpanel">
<h3>23.11.2016</h3>

<h4>Wielomiany - III</h4>
<ol>
<li>Tw. Każdy wielomian z $\RR[x]$ stopnia nieparzystego ma pierwiastek rzeczywisty.</li> 
<li>Rozwiązywanie równań stopnia trzeciego z $\CC[x]$</li>
<li>NWD wielomianów.</li> 
<li>Tw. Jeśli wielomian  $w \in K[x]$ (K - ciało) jest nierozkładalny, $w|(u\cdot) v$ oraz $\neg(w|u)$ to $u|v$</li>
<li>Twierdzenie o jednoznaczności rozkładu dla $K[x]$, gdy $K$ jest ciałem</li>
</ol>
<h4>Wielomiany z $\ZZ[x]$</h4>
<ol>
<li>Jeśli $w(x) = a_0+a_1x+\ldots+a_nx^n \in \ZZ[x]$, $\mathrm{nwd}(p,q)=1$ oraz $w(\frac{p}{q})=0$ to $p|a_0$ oraz $q|a_n$</li> 

<li>Kryterimu Eisensteina nierozkladalności wielomianów w $\ZZ[x]$. </li>
</ol>
</section> 


<section class="subpanel">
<h3>29.11.2016</h3>

<h4>Wielomiany - IV</h4>
<ol>
<li>Def. Zawartością wielomianu $w(x) = a_0 + a_1 x+\ldots+a_nx^n \in\ZZ[x]\setminus\{0\}$ nazywamy liczbę
$z_w = \mathrm{NWD}(a_0,a_1,\ldots,a_n)$.</li>
<li>Def. Wielomian jest pierwotny:jeśli jego zawartość wynosi $1$.</li>
<li>Lemat. Iloczyn wielomianów pierwotnych jest wielomianem pierwotnym</li>
<li>Tw. (Gauss) Wielomian $w\in\ZZ[x]$ jest nierozkładalny w $\ZZ[x]$ wtedy i tylko wtedy, gdy jest nierozkładalny w $\QQ[x]$.</li>
<li>PRÓBNY ALARM.</li> 
<li>Def. Charakterystyką ciała $K$ nazywamy liczbę $\chi(K) = \min\{k\in\NN: \underbrace{1+\ldots + 1}_{k} = 0\}$. Jeśli nie ma takiego $k$, że $\underbrace{1+\ldots + 1}_{k} = 0$ to kładziemy $\chi(K)=0$.</li>
<li>Tw. Dla każdego ciała $K$, jeśli $\chi(K)\neq 0$, to $\chi(K)$ jest liczbą pierwszą</li>
<li>Def. Niech $K$ bedzie ciałem o charakterystyce $0$. Dla $w(x) = \sum_{n} a_nx^n \in K[x]$ definiujemy
$$
w'(x) = \sum_{n\geq 1} n a_n x^{n-1}~.
$$
</li>
<li>Tw: $(f\cdot g)' = f'\cdot g + f\cdot g$</li>
<li>Def. Liczba $a$ jest pierwiastkiem $k$-krotnym wielomianu $w$, jeśli $w(x) = (x-a)^v(x)$ oraz $v(a)\neq 0$</li>
<li>Tw. $a$ jest pierwiastkiem $k$-krotnym wielomianu $w$ wtedy i tylko wtedy, gdy $w(a)=0$, $w'(a)=0$, ... ,
$w^{(k-1)}(a) = 0$ oraz $w^{(k)}(a) \neq 0$</li>
 
 <li>Początek konstrukcji ciała ułamków:
<ol>
<li>Bierzemy dziedzinę całkowitości $(R,+,\cdot)$</li>
<li>Na zbiorze $R\times(R\setminus\{0\}$ definiujemy relację $((p_1,q_1)\sim (p_2,q_2)) \equiv (p_1q_2 = p_2q_1)$</li>
<li>ZADANIE: Pokaż, że $\sim$ jest relacją równoważności na $R\times(R\setminus\{0\}$</li>
<li>Uwaga: intuicja $[(p,q)]_\sim = \frac{p}{q}$</li> 
<li>c.d.n.</li>
</ol>
</li>
</ol>
</section> 

<section class="subpanel">
<h4>30-11-2016: Pierścienie i przestrzenie wektorowe</h4>
<ol>
<li>Definicja działań na $(R\times(R\setminus\{0\}))/\sim$ i sprawdzenie ich poprawności.</li>
<li>Tw (wniosek z twierdzena Gauss'a). Jeśli $n\in\NN$ to $\sqrt{n}\in\QQ$ wtedy i tylko wtedy, gdy $(\exists k\in\NN)(n =k^2)$. </li>
</ol>
<h4>Przestrzenie wektorowe</h4>
<ol>
<li>Przykłady przestrzeni wektorowych: $\RR^n$, $K^n$, $C([0,1])$</li>
<li>Definicja przestrzeni wektorowej nad ciałem $K$.</li>
<li>Własności: $0\cdot x = 0$, $(-a)\cdot x = -(a\cdot x)$</li> 
<li>Def. <strong>Liniowa kombinacja</strong> elementów $x_1$, ... ,$x_n$: wyrażenie postaci $\sum_{i}^{n} \lambda_i x_i$ dla jakiś $\lambda_1, \ldots, \lambda_n \in K$</li>

<li><strong>Otoczka liniowa</strong> zbioru $S$:
$$
\span{S} = \{\sum_{i}^{n} \lambda_i x_i: n\in\NN \land x_1,\ldots x_n\in S \land \lambda_1,\ldots, \lambda_n\in K\}
$$
</li>

<li>Tak wygląda $\span{\{(2,1)\}}$ w $(\ZZ_5)^2$:<br>
<img src="Algebra/LineInZ52.png" style="width:50%;"><br>
<strong>Zadanie</strong>: Wylicz inne linie w $(\ZZ_5)^2$. Ile jest różnych linii?. Ile jest na nich elementów?
</li>

<li><strong>Liniowa niezależność</strong>: elementy $x_1$, ... ,$x_n$ są liniowo niezależne, jeśli 
<div class="tablica">
$$
(\forall \lambda_1,\ldots\lambda_n\in K)\left(
\left(\sum_{i}^{n} \lambda_i x_i=0\right) \to (\lambda_1=\lambda_2 = \ldots = \lambda_n = 0) 
\right)
$$
</div>
</li>
<li>Przykłady zbiorów liniowo niezależnych</li>
<li>Przykład: $V=\RR^3$, $e_1=(1,0,0)$, $e_2 = (0,1,0), e_3=(0,0,1)$. Zbiór $\{e_1,e_2,e_3\}$ jest maksymalnym zbiorem liniowo niezależnym.</li>
 </ol>
Osobom, które są zainteresowanie głębszym poznaniem liczb całkowitych Gaussa proponuję zapoznanie się z artykułem <a href="http://www.math.uconn.edu/~kconrad/blurbs/ugradnumthy/Zinotes.pdf">"THE GAUSSIAN INTEGERS"</a> Keith Conrad'a
</section> 

<section class="subpanel">
<h4>06-12-2016: Bazy</h4>
<ol>
<li>Def. Baza: maksymalny w sensie zawierania zbiór liniowo niezależny.</li> 
<li>Lemat. Jeśli $E$ jest liniowo niezależny oraz $x\in V\setminus\span{E}$, to $E\cup\{x\}$ jest liniowo niezależny. </li>
<li>Wniosek. Jeśli $E$ jest bazą to $\span{E} = V$.</li>
<li>Tw. (z wykładu ze Wstępu do logiki) Jeśli $A$ jest liniowo niezależny, to istnieje baza $E$ taka, że $A \subseteq E$.</li>
<li>Tw (Steinera o wymianie) Jeśli $\span{S} = V$ oraz $E$ jest liniowo niezależny i skończony to istnieje $S_1 \subseteq S$ taki, że $|S_1|=|E|$ oraz $\span{E\cup(S\setminus S_1)} = V$.</li>
<li>Wniosek. Jeśli $V$ ma bazę mocy $n$, to dowolna inna baza $V$ jest mocy $n$.</li>
<li>Def. $dim(V)$= moc bazy przestrzeni $V$.
<li>Def. Ciąg $(e_1,\ldots,e_n)$ jest bazą uporządkowaną jeśli $\{e_1,\ldots,e_n\}$ jest bazą.</li> 
<li>Def. Jeśli $\mathcal{E} = (e_1,\ldots,e_n)$ jest bazą uporządkowaną oraz $X=\lambda_1e_1+\ldots+\lambda_n e_n$ to
$$
[x]_{\mathcal{E}} = \begin{bmatrix} \lambda_1\\ \vdots\\ \lambda_n \end{bmatrix}
$$
nazywamy współrzędnymi $x$ w bazie $\mathcal{E}$.</li>

<li>Def: Zbiór $H\subseteq V$ jest podprzestrzenią $V$ jeśli $(\forall x,y\in H)(x+y\in H)$ oraz $(\forall x\in H)(\forall \lambda)(\lambda\cdot x\in H)$.
</li>

<li>Tw. Załóżmy, że $H \subseteq V$. Następujące warunki sa równoważne:
<ol>
  <li>$H$ jest podprzestrzenią przestrzeni $V$</li>
  <li>$(\forall x,y \in H)(\forall \lambda,\mu\in K)(\lambda\cdot x + \mu\cdot y \in H)$</li>
  <li>$\span{H} = H$</li>
</ol>
</li>
</ol>
</section> 

<section class="subpanel">
<h4>07-12-2016: Przekształcenia liniowe</h4>
<ol>
<li>Wymiary podprzestrzeni przestrzeni $K^n$</li>
<li>Podprzestrzenie jednowymiarowe w $(\ZZ_p)^2$</li>
<li>Def. Funkcja $F:V_1\to V_2$ jest przekształceniem liniowym jeśli $F(\lambda x+\mu y) = \lambda F(x)+\mu F(y)$ dla dowolnych $x,y\in V_1$ oraz $\lambda,\mu \in K$. $Lin(V_1,V_2)$ = zbiór wszystkich przekształceń liniowych z $V_1$ do $V_2$</li> 
<li>Jeśli $F$ jest liniowa, to $F(0) = 0$ </li>
<li>Opis przekształceń liniowych z $\RR^2\to\RR^2$: 
$$
F((x,y) = (ax+cy,bx+dy)
$$
dla pewnych $a,b,c,d\in\RR$
</li>
<li>Pojęcie macierzy wymiaru $m\times n$ elementów ciała $K$:
$$
A = \begin{bmatrix}a_{11}&a_{12}&\ldots&a_{1n}\\
\vdots&\vdots&\ldots&\vdots\\
a_{m1}&a_{m2}&\ldots&a_{mn}  \end{bmatrix}
$$
Oznaczenie: $M_{m\times n}(K)$ = zbiór wszystkich macierzy wymiaru $m\times n$ nad ciałem $K$.
</li>
<li>
Mnożenie macierzy przez wektor:
$$
\begin{bmatrix}a_{11}&a_{12}&\ldots&a_{1n}\\
\vdots&\vdots&\ldots&\vdots\\
a_{m1}&a_{m2}&\ldots&a_{mn}  
\end{bmatrix} 
\circ
\begin{bmatrix}x_1\\x_2\\\vdots\\x_n\end{bmatrix} 

\begin{bmatrix}\sum_{j=1}^{n}a_{1j}x_j\\\sum_{j=1}^{n}a_{2j}x_j\\\vdots\\\sum_{j=1}^{n}a_{mj}x_j\end{bmatrix} 
$$
czyli jeśli $A=(a_{ij}) \in M_{m\times n}$, $x\in K^n$, $y\in K^m$ oraz $y = A\circ x$, to
$$
y_i = \sum\limits_{j=1}^{n} a_{ij}\cdot x_j
$$
dla wszystkich $j\in\{1,\ldots,m\}$
</li>
<li>Opis przekształceń z $Lin(\RR^2,\RR^2)$: jeśli $F((x_1,x_2))=(y_1,y_2)$, to
$$
\begin{bmatrix}y_1\\y_2\end{bmatrix}
=
\begin{bmatrix}a&c\\b&d\end{bmatrix}
\circ 
\begin{bmatrix}x_1\\x_2\end{bmatrix}
$$
gdzie $F((1,0)) = (a,b)$ oraz $F((0,1))=(c,d)$.
</li>
<li>Przykłady: Obrót o kąt $\alpha$
$$
M(O_\alpha) = 
\begin{bmatrix}\cos(\alpha)&-\sin(\alpha)\\\sin(\alpha)&\cos(\alpha)\end{bmatrix}
$$
</li>
</ol>
</section> 

<section class="subpanel">
<h4>13.12.2016: Macierze i odwzorowania liniowe</h4>
<ol>
<li>Macierz odwzorowanie liniowego $F:K^n \to K^m$:
$$
M(F) = [F(e_1)| \ldots | F(e_n)] \in M_{m\times n}
$$
gdzie $e_1,\ldots,e_n$ jest bazą przestrzeni $K^n$.
</li>
<li>Jeśli $F,G \in Lin(V_1,V_2)$ i $\lambda \in K$ to $\lambda F, F+G \in Lin(V_1,V_2).$</li> 
<li>Wniosek: $lin(V_1,V_2)$ jest przestrzenią liniową</li>
<li>Mnożenie macierzy przez skalar, dodawanie dwóch macierzy tego samego rozmiaru.</li>
<li> Mnożenie macierzy: jeśli $A= (a_{ij})\in M_{k\times m}$, $B=(b_{j,k}) \in M_{m\times n}$ to
$A\circ B = (c_{ik}) \in M_{k\times n}$ jest macierzą o elementach
$$
  c_{ik} = \sum\limits_{j=1}^{n} a_{ij} b_{jk} ~,
$$ 
Patrz <a href="https://www.youtube.com/watch?v=kuixY2bCc_0">YouTube</a></li> 
</li>
<li>Tw. $M(G\circ F) = M(G) \circ M(F)$ </li>
<li> Przykład: $M(O_\alpha\circ O_\beta) = M(O_\alpha)\circ M(O_\beta)$</li> 
<li>Dla $F\in Lin(V_1,V_2)$ określamy $ker(F) = \{x\in V_1: F(x)=0\}$ oraz $rng(F) = \{F(x): x\in V_1\}$</li>
<li>Tw. $ker(F)$ jest podprzestrzenią $V_1$ oraz $img(F)$ jest podprzestrzenią $V_2$</li>
</ol>
</section>

<section class="subpanel">
<h4>14.12.2016: Macierze i odwzorowania liniowe</h4>
<ol>
<li>Twierdzenie: Jeśli $f\in Lin(V_1,V_2)$ to 
$$
dim(V_1) = dim(ker(f)) + dim(img(f))~.
$$
Dowód (szkic). Bierzemy taką bazę $\{e_1,\ldots,e_k,\ldots,e_n\}$ przestrzeni $V_1$, że
$\span{\{e_1,\ldots,e_k\}} = ker(f)$. Pokazujemy, że zbiór $\{f(e_{k+1}),\ldots,f(e_n)\}$ jest bazą $img(f)$.
</li>
<li>Niech $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$. Złóżmy, że $\Delta = ad-bc \neq 0$. Wtedy
$$
  A^{-1} = \frac{1}{\Delta}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$
(pokazaliśmy to bezpośrednim sprawdzeniem, że dla tak określonego $A^{-1}$ mamy $A\cdot A^{-1} = I$; sprawdzenie tego, że $A^{-1}\cdot A=I$ zostawiliśmy jako ćwiczenie).
</li> 
<li>Przykład $M(O_\alpha))^{-1} = M(O_{-\alpha})$</li>
<li>Def. Pseudo-iloczyn skalarny: $\IS{a}{b} = a_1b_1+\ldots+a_nb_n$.</li>
<li>Zastosowanie:
$$
  \begin{bmatrix}w_1 \\ w_2\\ \vdots \\ w_k\end{bmatrix} \circ
  \begin{bmatrix}k_1 | k_2 | \cdots | k_n\end{bmatrix} =
  \begin{bmatrix}\IS{w_i}{k_j} \end{bmatrix}  
$$ 
 
</li>
</ol>
<h4>Przestrzenie $\RR^n$</h4>
<ol>
<li>Def. Iloczynem skalarnym w przestrzeni $\RR^n$ nazywamy funkcję $\IS{\cdot}{\cdot}:\RR^n\cdot\RR^n\to \RR$ określoną wzorem $\IS{x}{y} = \sum_{i=1}^{n}x_i y_i$. <br>
Uwaga: W przestrzeniach $\CC^n$ trzeba postępować trochę inaczej; określamy tam
$\IS{x}{y} = \sum_{i=1}^{n} x_i \overline{y_i}$ - ale tym zajmiemy się później.
</li> 
<li>Własności $\langle\cdot,\cdot\rangle$:
$\IS{x}{x}\geq 0$, 
$\IS{\lambda a}{c} = \lambda\IS{a}{c}$,  
$\IS{a+b}{c} = \IS{a}{c}+\IS{b}{c}$, 
$\IS{a}{b} = \IS{b}{a}$. 
</li>
<li>Def: $||x|| = \sqrt{\IS{x}{x}}$</li> 
<li>Tw (dla $\RR^2$). $(\forall x,y \in \RR^2)(\IS{O_\alpha(x)}{O_\alpha(y)} = \IS{x}{y})$<br>Oznacza to niezmienniczość iloczynu skalarnego na obroty płaszczyzny.</li>
<li>Tw. $\IS{x}{y} = ||x||\cdot ||y|| \cos(\alpha)$</li>
</ol>
</section>

<section class="subpanel">

<h4>20.12.2016: Permutacje</h4>
<ol>
<li>Twierdzenie (dla $\RR^2)$: Jeśli $\vec{u}=(x_1,x_2)$ i $\vec{v}=(y_1,y_2)$, to 
$$
  |\det\left(\begin{bmatrix}x_1&y_1\\x_2&y_2\end{bmatrix} \right)| = pow(\Pi_{\vec{u},\vec{v}})
$$
gdzie $\Pi_{\vec{u},\vec{v}} = \{t\cdot \vec{u} + s\cdot \vec{v}:0\leq s,t\leq 1\}$.
</li>
<li>Def. Jeśli $\sigma\in S_n$, to parę $(i,j)$ nazywamy inwersją permutacji $\sigma$ jeśli $i\lt j$ oraz $\sigma(i) \gt \sigma(j)$
</li>
<li>Def. $I(\sigma) = |\{(i,j): 1\leq i \lt j \leq n \land \sigma(i)\gt\sigma(j)\}$</li>
 
<li>Def. $\sgn{\sigma} = (-1)^{I(\sigma)}$ </li>
<li>Def. Transpozycja:
$$
  T_{a,b}(i) = \begin{cases}b&i=a\\ a&i=b\\ i& i\notin \{1,\ldots,n\} \setminus\{a,b\}\end{cases}
$$
</li> 
<li>Tw. $\sgn{T_{a,b}} = -1$</li>
<li>Tw. $\sgn{\sigma\circ\pi} = \sgn{\sigma} \sgn{\pi}$</li>
<li>Fakt. Funkcja $f(\sigma) = \sigma^{-1}$ jest bijekcją $S_n$</li>
<li>Fakt. Funkcja $g(\sigma) = \sigma\circ \tau$ jest bijekcją $S_n$</li>
</ol>
<img src="Algebra/SignPermutation.png" style="width:50%;">

<h4>Wyznaczniki</h4>
<ol>
<li>Def: Jeśli $A=(a_{i,j}) \in M_{n\times n}(K)$, to 
$$
  \det(A) = \sum_{\sigma\in S_n} \sgn{\sigma} \prod_{i=1}^{n} a_{i\sigma(i)}
$$
</li>
<li>Tw. $\det(A) = \sum_{\sigma\in S_n} \sgn{\sigma} \prod_{i=1}^{n} a_{\sigma(i)i}$</li>
</ol>
</section>

<section class="subpanel">
<h4>21.12.2016: Wyznaczniki</h4>
<ol>
<li>Def. Jeśli $A=(a_{ij})$ to $A^T = (b_{ij})$, gdzie $b_{i,j} = a_{ji}$.</li>
<li>Wniosek. $\det{A} = \det{A^T}$</li>
<li>Obserwacja: Jeśli coś udowodnimy o kolumnach wyznacznika, to będziemy mieli analogiczny wynik dla wierszy</li>
<li>Obserwacja: Liczenie wyznacznika bezpośrednio z definicji jest bardzo pracochłonne - wymaga rozważanie każdej permutacji, a ich mamy $n!$</li> 
<li><a href="https://www.youtube.com/watch?v=ROFcVgehEYA">Metoda Sarrusa</a></li> 
<li>Tw. $\det{[k_1,\ldots,k_i,\ldots,k_j,\ldots,k_n]}$ = $(-1)^n \det{[k_1,\ldots,k_j,\ldots,k_1,\ldots,k_n]}$</li>
<li>Wniosek. Jeśli $A$ ma dwie takie same kolumny/wiersze, to $\det(A)=0$</li> 
<li>Tw. $\det{[k_1,\ldots,b_i+c_i,\ldots,\ldots,k_n]}$ = $\det{[k_1,\ldots,b_i,\ldots,\ldots,k_n]}$ + $\det{[k_1,\ldots,c_i,\ldots,\ldots,k_n]}$</li> 
<li>Tw. $\det{[k_1,\ldots,k_i+c\cdot k_j,\ldots,k_j,\ldots,k_n]}$ = $(-1)^n \det{[k_1,\ldots,k_n]}$</li>
<li>Przykłady obliczania wyznaczników</li>
<li>Przykład:
$$
  \det{
  \begin{bmatrix}
  1 & 0      & 0      & \ldots & 0\\
  0 & a_{22} & a_{23} & \ldots & a_{2n} \\
  0 & a_{32} & a_{33} & \ldots & a_{3n} \\
  \vdots&\vdots&\vdots&\ddots&\vdots \\
  0 & a_{n2} & a_{n3} & \ldots & a_{nn} 
  \end{bmatrix}
  } 
  = 
  \det{
   \begin{bmatrix}
   a_{22} & a_{23} & \ldots & a_{2n} \\
   a_{32} & a_{33} & \ldots & a_{3n} \\
   \vdots&\vdots&\vdots&\ddots \\
   a_{n2} & a_{n3} & \ldots & a_{nn} 
  \end{bmatrix}
  }
$$
</li>
<li>Oznaczenie: Jeśli $M\in M_{n\times n}(K)$, to $M_{i,j}$ jest macierzą, która powstaje z macierzy $M$ przez wykreslenie $i$-tego wiersza i $j$-tej kolumny (tak zwany minor)</li>
<li>Tw (Rozwinięcie Lalace'a).
$$
\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \det(M_{ij}) 
$$
</li>
</ol>
</section>

<section class="subpanel">
<h4>10.01.2017: Wyznaczniki</h4>
<ol>
<li>Def. Element $A_{ij} = (-1)^{i+j} \det(M_{i,j})$ nazywamy elementem sprzężonym z elementem $a_{ij}$ macierzy $A = (a_{ij})$.  <br>
Uwaga: stosujemy oznaczenia z poprzedniego wykładu.
</li>
<li>Tw:
$$
\sum_{j=1}^{n}  a_{ij} A_{kj} = 
\begin{cases}
\det(A) & i=k\\
0       & i \neq k
\end{cases}
$$
</li>
<li>Def. $adj(A) = [A_{ij}]^T$</li>
<li>Tw. $A \cdot adj(T) = \det(A) I$</li> 
<li>Tw. Jeśli $\det(A) \neq 0$ to istnieje macierz odwrotna $A^{1}$; mamy $A^{-1} = \frac{1}{\det(A)}adj(A)$</li> 
<li>Tw. $\det(A\circ B) = \det(A)\cdot \det(B)$</li>
<li>Wniosek. $A$ jest odwracalna wtedy i tylko wtedy, gdy $\det(A)\neq 0$</li> 
<li>Wniosek: Zbiór $\{A\in:M_{n\times n}(K): \det(A)\neq 0\}$ z działaniem $\circ$ (mnożenie macierzy) jest grupą. Oznaczana jest ona $GL_n(K)$ (General Linear Group)</li> 
<li>Wzory Cramera: Jeśli $A= [k_1|\ldots|k_n]$ oraz $\det(A) \neq 0$, to rozwiązanie układu równań $A\circ[x_1,\ldots,x_n]^T = [b_1,\ldots, b_n]^T$ jest dane wzorami
$$
  x_i = \frac{\det[k_1|\ldots|k_{i-1}|b|k_{i+1}|\ldots|K_n]}{\det(A)}
$$
(<a href="https://www.youtube.com/watch?v=Er7FuODBNqU">YouTube</a>: uwaga: stosowana tam jest reguła Sarrusa w dosyć egzotycznej postaci</li>
</ol>
</section>

<section class="subpanel">
<h4>11.01.2017: Rząd macierzy</h4>
<ol>
<li>Def. Rząd kolumnowy macierzy $A$: $rank_c(A)$ = maksymalna moc niezależnego zbioru kolumn
</li>
<li>Tw. $rank_c(A) = \dim(rng(F_A))$, gdzie $F_A(x) = A\circ x$</li>
<li>Def. Rząd wierszowy macierzy $A$: $rank_w(A)$ = maksymalna moc niezależnego zbioru wierszy.
</li>

<li>Tw: $rank_c(A) = rank_w(A)$</li>

<li>Tw: $rank(A)$ jest równy maksymalnemu rozmiarowi kwadratowej podmacierzy macierzy $A$ o niezerowym wyznaczniku</li>

<li>Obserwacja: dla danej macierzy $A = [k_1|\ldots|k_n]$ oraz danego $b$ następujące warunki są równoważne:
<ol>
<li>$(\exists x)(A\cdot x = b)$</li>
<li>$b \in rng(F_A)$</li>
<li>$b \in \span{[k_1|\ldots|k_n]}$</li>
<li>$\dim(rng(F_A)) = dim(\span{[k_1|\ldots|k_n|b]})$ 
</ol>
</li> 
<li>Wniosek. Dla danej macierzy $A = [k_1|\ldots|k_n]$ oraz danego $b$ następujące zdania sa równoważne:
<ol>
<li>$(\exists x)(A\cdot x = b)$</li>
<li>$rank([k_1|\ldots|k_n]) = rank([k_1|\ldots|k_n|b])$</li> 
</ol>
</li>
<li>Przykłady rozwiązywania układów równań liniowych</li>
</ol>
</section>

<section class="subpanel">
<h4>17.01.2017: Metoda eliminacji Gauss'a</h4>
Wykład prowadził prof. dr hab. Michał Morayne.
<ol>
<li>Tw. Załóżmy, że $A\cdot x_0 = b$. Wtedy
$$
\{x: A\cdot x = b\} = x_0 + ker(F_A)
$$ 
czyli
$$
\{x: A\cdot x = b\} = x_0 + \{x: A\cdot x = 0\}
$$ 
Uwaga: $\dim(ker(F_A)) = n - rank(A)$.
</li>
<li>Metoda eliminacji Gauss'a: przykład - <a href="https://www.youtube.com/watch?v=2j5Ic2V7wq4">YouTube</a></li>
</ol>
</section>

<section class="subpanel">
<h4>18.01.2017: Wartości i macierze własne</h4>
Wykład prowadził prof. dr hab. Michał Morayne.
<ol>
<li>Def. Wektorem własnym macierzy $A \in M_{n\times n}(K)$ nazywamy taki wektor $x \neq 0$, że dla pewnego $\lambda\in K$ mamy $A\cdot x = \lambda x$. Element $\lambda$ nazywamy wartością własną macierzy $A$ skojarzoną z wektorem $x$.</li>
<li>Def. Wielomianem charakterystycznym macierzy $A \in M_{n\times n}(K)$ nazywamy wielomian
$$
\phi_A(x) = \det(A - x\cdot I_n)
$$
</li>

<li>Tw: $\lambda$ jest wartością własną macierzy $A$ wtedy i tylko wtedy, gdy $\phi_A(\lambda)=0$.</li>

<li>Tw. Jeśli $\lambda_1, \ldots, \lambda_k$ są parami różnymi wartościami własnymi macierzy $A$oraz $x_1,\ldots, x_k$ są odpowiadającymi im wektorami własnymi, to zbiór $\{x_1,\ldots,x_k\}$ jest liniowo niezależny.</li>

</ol>
</section>

<section class="subpanel">
<h4>24.01.2017: Wartości i macierze własne: II</h4>
<ol>
<li>Przykład 1: $A = \begin{bmatrix}0&1\\1&0\end{bmatrix}$; wartości własne: 1, -1;
wektory własne $f_1=(1,1)$, $f_2 = (-1,1)$; Funkcja $F_A(x) = Ax$ jest odbiciem płaszczyzny $\RR^2$ względem prostej $y=1$.
</li>
<li>Przykład 2: $A = \begin{bmatrix}\frac32&\frac12\\\frac12&\frac32\end{bmatrix}$; wartości własne: 2,1; wektory własne: $f_1 = (1/\sqrt{2}, 1/\sqrt{2})$, $f_2=(-1/\sqrt{2},1/\sqrt{2})$;
Macierz odwzorowania $F_A$ w bazie $(f_1,f_2)$: $\Sigma= \begin{bmatrix}2&0\\0&1\end{bmatrix}$ 
</li>
<li>Oznaczanie: Jeśli $\mathcal{F}=(f_1,\ldots,f_n)$ jest bazą uporządkowaną oraz $x=\sum_{i=1}^{n} \lambda_i f_i$, to $[x]_\mathcal{F} = [\lambda_1,\ldots,\lambda_n]^T$.
</li>
<li>ZAMIANA BAZY: Niech $\mathcal{E}=(e_1,\ldots,e_n)$ i $\mathcal{F}=(f_1,\ldots,f_n)$. Niech $F=[[f_1]_\mathcal{E}|\ldots|[f_n]_\mathcal{E}]$. Wtedy
$$
  [x]_\mathcal{E} = F \circ [x]_\mathcal{F} 
$$
oraz
$$
  [x]_\mathcal{F} = F^{-1} \circ [x]_\mathcal{E} 
$$
</li>

<li>Przykład 2 - cd: Zauważyliśmy, że macierz przejścia z bazy standardowej $\mathcal{E}$ do bazy $\mathcal{F}$ jest obrotem o kąt $\pi/4$. Zatem 
$$
A = \mathcal{O}_{\pi/4} \circ \begin{bmatrix}2&0\\0&1\end{bmatrix} \circ \mathcal{O}_{-\pi/4}
$$
<br>
<img src="Algebra/LinearComposition.png">
</li>

<li>Liczby Fibonacciego: $F_0=0$; $F_1 = 1$; $F_{n+2}= F_{n}+F_{n+1}$.
<ol>
<li>Definiujemy macierz $A = \begin{bmatrix}0&1\\1&1\end{bmatrix}$</li>
<li>Zauważamy, że 
$$
  A^{n}  \begin{bmatrix}F_0\\F_1\end{bmatrix} = \begin{bmatrix}F_n\\F_{n+1}\end{bmatrix} 
$$
</li>
<li>Wartości własne macierzy $A$: $\lambda_1 = \frac{1+\sqrt{5}}{2}$, $\lambda_1 = \frac{1-\sqrt{5}}{2}$. Zatem
$$
  A = M \begin{bmatrix}\lambda_1&0\\0&\lambda_2\end{bmatrix} M^{-1}
$$  
gdzie $M$ jest macierzą przejścia.
</li>
<li>Zatem
$$
  A^n = M \begin{bmatrix}\lambda_1^n&0\\0&\lambda_2^n\end{bmatrix} M^{-1}
$$  
</li>
<li>
Zatem $F_n = \alpha \lambda_1^n + \beta \lambda_2^n$ dla jakiś $\alpha, \beta$.
</li>
<li>
Rozwiązujemy układ równań $0 = \alpha+\beta$, $1 = \alpha\lambda_1+\beta\lambda_2$ i znajdujemy wzór
$$
  F_n = \frac{1}{\sqrt{5}}\left( 
    \left(\frac{\sqrt{5}+1}{2}\right)^n + 
	(-1)^{n+1}\left(\frac{\sqrt{5}-1}{2}\right)^n
\right)~.	
$$ 
</li>
</ol>
</li>
<li>Własności wielomianu charakterystycznego $p(\lambda) = \det(A-\lambda I)$ = 
$c_0 \lambda^n + c_1 \lambda^{n-1} + c_{n-1}\lambda + c_n$: 
<ol>
<li>$c_0 = (-1)^n$</li>
<li>$c_n = \det(A)$</li>
<li>$c_1 = (-1)^{n-1} Tr(A)$, gdzie $Tr(A) = \sum_k a_{kk}$</li>
</ol>
</li> 
</ol>
</section>

<section class="subpanel">
<h4>25.01.2017: Ortogonalizacja</h4>
<ol>
<li>Tw. $Tr(AB)=Tr(BA)$</li>
<li>Proces ortogonalizacji Gramma-Schmidta</li>
<li>Bazy ortogonalne</li>
<li>Jeśli $\{f_1,\ldots,f_n\}$ jest bazą ortonormalną oraz $x = \sum_{i=1}^{n}\lambda_i f_f$, to
<ol>
<li>$\lambda_i = \IS{x}{f_i}$</li>
<li>$|x|^2 =  \sum_{i=1}^{n}\lambda_i^2$</li> 
</ol>
</li>
<li>Def. Macierz $A$ jest ortogonalna, jeśli jej kolumny tworzą układ ortonormalny</li>
<li>Tw. Jeśli $A$ jest ortogonalna, to $AA^T = I$</li>
<li>Wniosek. Jeśli $A$ jest ortogonalna to $A^{-1}=A$</li>
<li>Wniosek. Jeśli $A$ jest ortogonalna to $A^{-1}$ jest ortogonalna</li>
<li>Wniosek. Jeśli $A$ jest ortogonalna to $\det(A)\in\{-1,1\}$</li>
<li>Tw. Jeśli $A$ jest ortogonalna, to $\IS{Ax}{Ay}= \IS{x}{y}$ dla dowolnych $x,y$</li>
<li>Def. $O(n)$ = zbiór macierzy ortogonalnych rozmiaru $n\times n$</li>
<li>Wniosek. $O(n)$ jest grupą z działaniem określonym jako mnożenie macierzy</li>
<li>Def. $SO(n) = \{A\in O(n): \det(A)=1\}$</li>
<li>Struktura grup $O(2)$ i $SO(2)$: elementy $O(2)$ to obroty płaszczyzny oraz odbicia płaszczyzny względem prostych przechodzących przez $(0,0)$; elementy $SO(2)$ to obroty</li> 
</ol>
</section>

<section class="subpanel">
<h4>31.01.2017: Przestrzenie unormowane</h4>
<ol>
<li>Tw.[Euler] Jeśli $T$ jest ortogonalnym przekształceniem $\RR^3$, to $T$ jest obrotem względem pewnej prostej przechodzącej przez $(0,0,0)$</li>
<li>Pojęcie normy na przestrzeni wektorowej</li>
<li>Dla $p\geq 1$ oraz $x\in\RR^n$ definiujemy 
$$
||x||_p = \left(\sum_{k=1}^n |x_i|^p\right)^{\frac1p}
$$
<li>Tw [Young] Jeśli $p,q\geq 1$, $1/p+1/q=1$ oraz $a,b\geq 0$ to
$$
ab \leq \frac{a^p}{p} + \frac{b^q}{q}
$$
</li>
<li>
Tw [Nierówność Holdera] Jeśli $p,q\geq 1$, $1/p+1/q=1$ oraz $x,y\in\RR^n$ to
$$
   \sum_{i=1}^n |x_i y_i| \leq ||x||_p ||y||_q
$$
</li> 

<li>
Tw [Nierówność Minkowskiego] Jeśli $p,q\geq 1$, $1/p+1/q=1$ oraz $x,y\in\RR^n$ to
$$
   ||x+y||_p \leq ||x||_p + ||y||_p
$$
</li> 
<li>Wniosek: $||\cdot||_p$ jest normą na $\RR^n$</li>
<li>Def. Metryka generowana przez normę: $d(x,y) = ||x-y||$</li>
<li>Pojęcie zbieżności i ciągu podstawowego w przestrzeni metrycznej.</li>
<li>Def $(V,||\cdot||)$ jest przestrzenią Banacha, jeśli jest zupełną przestrzenią unormowaną</li>
<li>Definicja iloczynu skalarnego dla przestrzeni nad $\RR$ oraz $\CC$</li>
</ol>
</section>

<section class="subpanel">
<h4>02.01.2017: SVD</h4>
<ol>
<li>Lemat. Jeśli $A\in M_{n\times n}(\RR)$ jest symetryczna oraz $\lambda$ jest wartością własną macierzy $A$, to $\lambda\in\RR$.
</li>

<li>Tw. Jeśli $A\in M_{n\times n}(\RR)$ jest symetryczna, to istnieje macierz ortogonalna $U$ oraz macierz przekątniowa $\Sigma$ taka, że
$$
A = U\circ \Sigma \circ U^T~.
$$
</li>

<li>Tw (SVD) Jeśli $A\in M_{m\times n}(\RR)$ to istnieją macierze ortogonalne $U\in M_{m\times m}$, 
$V\in M_{n\times n}$ oraz macierz diagonalna $\Sigma\in M_{m\times n}$ taka, że
$$
  A = U\circ\Sigma \circ V^T~.
$$
</li>
<li>Oryginalne zdjęcie (zmiejszone 2 razy)
<br>
<img src="Algebra/Alg01.jpg" style="width:450px;">
<br>
<pre>
image = Import["c:\\Users\\Jacek\\Documents\\Algebra.JPG"];
</pre>
</li>

<li>Zdjęcie przekształcone do monochromatycznego (robię to z lenistwa; mógłbym oddzielnie pracować z każdym kanałem barw; rozmiar: 1080x1440): 
<br>
<img src="Algebra/Alg02.jpg" style="width:450px;">
<br>
<pre>
img = ColorConvert[image, "Grayscale"];
matrix = ImageData[img];
</pre>
</li>

<li>Wykres pierwszych 100 wartości singularnych (kilka pierwszych wartości: (707.7, 81.3, 60.3, 50.8, 48.2): 
<br>
<img src="Algebra/SVList.jpg" style="width:450px;">
<br>
<pre>
ListPlot[SingularValueList[matrix][[1 ;; 100]], PlotRange -> All]
</pre>
Uwaga: całkowita liczba wartości singularnych: 1080; największa: 707.7, najmniejsza: 0.0395411.
</li>

<li>
Dalej będę się posługiwał następującym kodem
<pre>
Approx[M_,k_]:= Block[{ap,U,S,V,rob,compr},
  {U,S,V} = SingularValueDecomposition[N[M],k];
  rob= U.S.Transpose[V];
  compr = k*(1.0 + Dimensions[M][[1]]+Dimensions[M][[2]])/(Dimensions[M][[1]]*Dimensions[M][[2]]);
  ap = Image[rob/Max[rob]];
  Column[
  {
    Text["SV: "<>ToString[k]<> " Kompresja: "<>ToString[compr]],
    Show[ap,ImageSize->450]
  }
  ]
]
</pre>
z różnymi wartościami parametru k (np. Approx[matrix, 1]).
</li>

<li>Obcinamy do 1 (największej) wartości singularnej (współczynnik kompresji: 0.00162101): 
<br>
<img src="Algebra/Alg_S1.jpg" style="width:450px;">
</li>

<li>Obcinamy do 2 pierwszych wartości singularnych (współczynnik kompresji: 0.00324203): 
<br>
<img src="Algebra/Alg_S2.jpg" style="width:450px;">
</li>

<li>Obcinamy do 3 pierwszych wartości singularnych (współczynnik kompresji: 0.00486304): 
<br>
<img src="Algebra/ALg_S3.jpg" style="width:450px;">
</li>

<li>Obcinamy do 10 pierwszych wartości singularnucj (współczynnik kompresji: 0.00486304): 
<br>
<img src="Algebra/ALg_S10.jpg" style="width:450px;">
</li>


<li>Obcinamy do 50 pierwszych wartości singularnych (współczynnik kompresji: 0.0810507): 
<br>
<img src="Algebra/ALg_50.jpg" style="width:450px;">
</li>

<li>Obcinamy do 100 pierwszych wartości singularnych (współczynnik kompresji: 0.162101): 
<br>
<img src="Algebra/ALg_S100.jpg" style="width:450px;">
</li>
<li>Uwaga (o tym nie zdążyłem powiedzieć na wykładzie): ta ilustracja z kompresją obrazu nie jest najwłaściwszym wykorzystaniem rozkładu SVD. Do kompresji obrazów mamy znacznie lepsze, wyspecjalizowane, procedury. Ten przykład ilustruje tylko o co chodzi w technice SVD. A lepsze zastosowania oraz dokładniejszą analizę omówionej metody omówimy sobie kiedyś w przyszłości. 
</ol>
</section>