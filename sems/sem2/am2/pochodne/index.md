---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Pochodne cząstkowe



### Definicja
\noindent
Niech \\( f: \mathcal{D} \to \mathbb{R} \\), gdzie \\( \mathcal{D} \subseteq \mathbb{R}^n \\) oraz niech \\( \overrightarrow{p} \in \mathbb{R}^n \\) będzie ustalonym punktem skupienia dziedziny. Wtedy:
\\\[ \frac{\partial f}{\partial x_i} \left(\overrightarrow{p}\right) = \lim_{h \to 0} \frac{f\left(p_0, \ldots, p_{i-1}, p_i + h, p_{i+1}, \ldots, p_n\right) - f\left(p_0, \ldots, p_n\right)}{h}\ \\]
nazywamy pochodną cząstkową \\( f \\) po \\( x_i \\) w punkcje \\( \overrightarrow{p} \\), oznaczaną również \\( f_{x_i}\left(\overrightarrow{p}\right) \\).



### Pochodna kierunkowa
\noindent
Niech \\( \overrightarrow{a} \in \mathbb{R}^n \\) gdzie \\( \|\overrightarrow{a}\| = 1 \\). Pochodna kierunkowa w kierunku wektora \\( \overrightarrow{a} \\) to:
\\\[ f_{\overrightarrow{a}}\left(\overrightarrow{p}\right) = \lim_{h \to 0} \frac{f\left(\overrightarrow{p} + h\overrightarrow{a}\right) - f\left(\overrightarrow{p}\right)}{h}\ \\]
Inne oznaczenie:
\\\[ D_{\overrightarrow{a}} f \left(\overrightarrow{p}\right)\ \\]



### Pochodne cząstkowe wyższego stopnia
\\\[ \frac{\partial^2 f}{\partial x_i^2} = \frac{\partial}{\partial x_i} \frac{\partial f}{\partial x_i}\ \\]
\\\[ \frac{\partial^k f}{\partial x_i^k} = \frac{\partial}{\partial x_i} \frac{\partial^{k-1} f}{\partial x_i^{k-1}}\ \\]
Pochodne cząstkowe mieszane to np (\\( i \neq j \\)):
\\\[ \frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial}{\partial x_i} \frac{\partial f}{\partial x_j}\ \\]
Dla funkcja z \\( \mathbb{R}^2 \\) jeśli pochodne mieszane są ciągłe to:
\\\[ \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}\ \\]



### Gradient funkcji
\noindent
Jeśli istnieją pochodne cząstkowe \\( \frac{\partial f}{\partial x_1}, \ldots, \frac{\partial f}{\partial x_n} \\) to gradientem funkcji \\( f \\) w punkcie \\( \overrightarrow{p} \\) nazywamy wektor:
\\\[ \nabla f \left(\overrightarrow{p}\right) = \left(\frac{\partial f}{\partial x_1} \left(\overrightarrow{p}\right), \ldots, \frac{\partial f}{\partial x_n} \left(\overrightarrow{p}\right)\right)\ \\]



### Różniczkowalność funkcji wielu zmiennych
\noindent
Niech \\( \overrightarrow{p} \\) będzie punktem wewnętrznym dziedziny, wtedy funkcja \\( f \\) jest różniczkowalna w \\( \overrightarrow{p} \\) gdy:
\begin{enumerate}
\item Istnieją wszystkie pochodne cząstkowe pierwszego rzędu w \\( \overrightarrow{p} \\)
\item \\( \lim_{\|h\| \to 0} \frac{f\left(\overrightarrow{p} + \overrightarrow{h}\right) - f\left(\overrightarrow{p}\right) - \nabla f\left(\overrightarrow{p}\right) \cdot \overrightarrow{h}}{\|h\|} = 0 \\)
\end{enumerate}
Jest to uogólnienie różniczkowalności funkcji jednej zmiennej, wtedy mamy:
\begin{enumerate}
\item \\( f'\left(p\right) = \lim_{h \to 0} \frac{f\left(p+h\right) - f\left(p\right)}{h} \\)
\item \\( \lim_{h \to 0} \frac{f\left(p + h\right) - f\left(p\right) - f'\left(p\right) \cdot h}{h} = 0 \\)
\end{enumerate}



### Własności funkcji różniczkowalnej
\begin{enumerate}
\item Jeśli funkcja ma ciągłe pierwsze pochodne w \\( \overrightarrow{p} \\)-wewnętrznym to jest różniczkowalna w \\( \overrightarrow{p} \\)
\item Jeśli \\( f \\) jest różniczkowalna w \\( \overrightarrow{p} \\) to ma pochodną kierunkową \\( f_{\overrightarrow{a}} \left(\overrightarrow{p}\right) \\) dla każdego wektora \\( \overrightarrow{a} \\), gdzie \\( \|a\| = 1 \\)
\end{enumerate}



### Pochodna funkcji wektorowej
\noindent
Niech \\( f: \mathcal{D} \to \mathbb{R}^m \\), \\( \mathcal{D} \subset \mathbb{R} \\), \\( \mathcal{D} \\)-przedział. Wtedy \\( f \\) nazywamy krzywą parametryczną (Obraz \\( f\\[ \mathcal{D} \\] \\) również nazywamy krzywą):
\begin{enumerate}
\item Ciągłą jeśli \\( f \\) jest ciągła
\item Różniczkowalną gdy \\( f'\left(\mathcal{D}\right) \\) istnieje dla każdego \\( t \in \mathcal{D} \\)
\item Gładką gdy \\( f' \\) jest ciągła na \\( \mathcal{D} \\)
\end{enumerate}



### Wektor styczny jednostkowy
\noindent
Wektorem stycznym jednostkowym do krzywej parametrycznej nazywamy:
\\\[ T(t) = \frac{f'(t)}{\|f'(t)\|}\ \\]
Jeśli \\( f''(t) \\) istnieje dla każdego \\( t \in \mathcal{D} \\), to \\( T'(t) \\) zwany wektorem normalnym w punkcie \\( t \\) również istnieje i spełnia równanie:
\\\[ T'(t) \cdot T(t) = 0\ \\]



### Pochodna pola wektorowego
\noindent
Niech \\( f: \mathcal{D} \to \mathbb{R}^m \\), gdzie \\( \mathcal{D} \subset \mathbb{R}^n \\). Wtedy mamy:
\\\[ f\left(\overrightarrow{x}\right) = \left(f_1 \left(\overrightarrow{x}\right), \ldots, f_m \left(\overrightarrow{x}\right)\right)\ \ \ \ \textnormal{gdzie}\ f_i: \mathcal{D} \to \mathbb{R}\ \\]
\[f'\left(\overrightarrow{x}\right) =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \dots  & \frac{\partial f_1}{\partial x_n} \\\ \\\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \dots  & \frac{\partial f_2}{\partial x_n} \\\ \\\
\vdots & \vdots & \ddots & \vdots \\\ \\\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \dots  & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}\]



### Pochodna cząstkowa funkcji złożonej
\noindent
Pochodna złożona to, ogólnie, iloczyn pochodnej funkcji wewnętrznej i zewnętrznej. Więc dla \\( F\left(\overrightarrow{x}\right) = f\left(u_1\left(\overrightarrow{x}\right), \ldots, u_m\left(\overrightarrow{x}\right)\right) \\), \\( \overrightarrow{u}\left(\overrightarrow{x}\right) = \left(u_1\left(\overrightarrow{x}\right), \ldots, u_m\left(\overrightarrow{x}\right)\right) \\), mamy:
\\\[ \frac{\partial F}{\partial x_i}\left(\overrightarrow{x}\right) = \nabla f\left(\overrightarrow{u}\right) \cdot u'\left(\overrightarrow{x}\right) = \frac{\partial f}{\partial u_1} \cdot \frac{\partial u_1}{\partial x_i}\left(\overrightarrow{x}\right) + \ldots + \frac{\partial f}{\partial u_m} \cdot \frac{\partial u_m}{\partial x_i}\left(\overrightarrow{x}\right)\ \\]



### Twierdzenie Lagrange'a o wartości średniej
\noindent
Niech \\( f: \mathcal{D} \to \mathbb{R} \\), \\( \mathcal{D} \subset \mathbb{R}^n \\), będzie funkcją różniczkowalną oraz niech \\( \overrightarrow{p_0} \in \mathcal{D} \\), \\( \overrightarrow{p} = \overrightarrow{p_0} + \overrightarrow{h} \\) Wtedy mamy:
\\\[ f\left(\overrightarrow{p}\right) - f\left(\overrightarrow{p_0}\right) = \textnormal{d}f\left(\overrightarrow{p_\theta}\right)\ \\]
Dla pewnego \\( \overrightarrow{p_\theta} = \overrightarrow{p_0} + \theta\overrightarrow{h} \\), \\( \theta \in (0,1) \\).



### Wzór Taylora dla funkcji mającej ciągłe pochodne cząstkowe pierwszego i drugiego rzędu
\noindent
Niech \\( f : \mathbb{R}^n \to \mathbb{R}^m \\) będzie funkcją \\( n \\)-różniczkowalną,
\\( \vec{a} = (a_1, a_2, \dotsc, a_n) \in \mathbb{R}^n \\) i 
\\( \vec{h} = (h_1, h_2, \dotsc, h_n) \in \mathbb{R}^n \\). Wzór Taylora wygląda 
następująco:
\[
f(\vec{a} + \vec{h}) = 
f(\vec{a}) 
   + \mathrm{d}f_{\vec{a}}(\vec{h}) 
+ \mathrm{d}^2f_{\vec{a}}(\vec{h}) 
+ \dotso
+ R_n(\vec{a}, \vec{h})
\]
gdzie \\( \mathrm{d}^nf_{\vec{a}}(\vec{h}) \\) to \\( n \\)-krotna różniczka zupełna
w punkcie \\( \vec{a} \\),
która jest definiowana rekurencyjnie: 

\begin{enumerate}
\item 
$\mathrm{d}f_{\vec{a}}(\vec{h}) =  \nabla f (\vec{a}) \cdot \vec{h} =
\frac{\partial f(\vec{a})}{\partial x_1} \cdot h_1 
+ \frac{\partial f(\vec{a})}{\partial x_2} \cdot h_2
+ \dotso
+ \frac{\partial f(\vec{a})}{\partial x_n} \cdot h_n$
\item
$\mathrm{d}^{n+1} f_{\vec{a}}(\vec{h}) = 
\mathrm{d} \left(\mathrm{d}^n f_{\vec{a}}(\vec{h})\right)$
\end{enumerate}   
Można udowodnić, że jawna postać \\( n \\)-tej różniczki (\\( n > 1 \\)) 
dla funkcji dwóch zmiennych
wygląda następująco:
\[
\mathrm{d}^n f_{\vec{a}}(h_1, h_2)
= \sum^n_{k = 0}\binom{n}{k} \frac{\partial^n f(\vec{a})}
{\partial x_1^{n - k} \partial x_2^k} \cdot h_1^{n - k} h_2^k
\]
Czyli dla \\( n = 2 \\):
\[
\mathrm{d}^2 f_{(x_1, x_2)}(h_1, h_2)
= \frac{\partial^2 f(x_1, x_2)}{\partial x_1^2}h_1^2
+ 2\frac{\partial^2 f(x_1, x_2)}{\partial x_1 \partial x_2}h_1h_2
+ \frac{\partial^2 f(x_1, x_2)}{\partial x_2^2}h_2^2
\]














### Aproksymacja funkcji wielu zmiennych
\noindent
Aby znaleźć przybliżoną wartość funkcji wielu zmiennych w punkcie \\( \overrightarrow{p_0} + \overrightarrow{h} \\) znając wartość funkcji w punkcie \\( \overrightarrow{p_0} \\) korzystamy z różniczki zupełnej:
\\\[ f(\vec{x_0} + \vec{h}) = f(\vec{x_0}) + \nabla f \left(\vec{x_0}\right) \cdot \vec{h}\ \\]
