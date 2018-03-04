---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Ekstrema funkcji

### Definicja

Niech \\( f: \mathcal{D} \to \mathbb{R} \\), \\( \mathcal{D} \subset \mathbb{R}^n \\), wtedy \\( f \\) przyjmuje lokalnie wartość największą (najmniejszą) w \\( \overrightarrow{p} \in \mathcal{D} \\), gdy istnieje kula \\( \mathcal{K}\left(\overrightarrow{p}, \varepsilon\right) \\) taka, że \\( \left(\forall \overrightarrow{x} \in \mathcal{K}\left(\overrightarrow{p}, \varepsilon\right)\right)\left(f\left(\overrightarrow{p}\right) \geq f\left(\overrightarrow{x}\right)\right) \\) (odpowiednio dla wartości najmniejszej).

### Kryterium na ekstrema lokalne

Warunek konieczny: Jeśli funkcja \\( f \\) ma pochodne cząstkowe w \\( \overrightarrow{p} \\) oraz ma ekstremum lokalne w \\( \overrightarrow{p} \\) to:
\\\[ \frac{\partial f}{\partial x_1} = \frac{\partial f}{\partial x_2} = \ldots = \frac{\partial f}{\partial x_n} = 0\ \\]
\textbf{Wyróżnik dla funkcji dwóch zmiennych:}
\\\[ \text{W} \left(\overrightarrow{p}\right) = \left(\frac{\partial^2 f}{\partial x^2} \cdot \frac{\partial^2 f}{\partial y^2} - \left(\frac{\partial^2 f}{\partial x \partial y}\right)^2 \right) \left(\overrightarrow{p}\right)\ \\]
\textbf{Warunek dostateczny (funkcja dwóch zmiennych \\( x \\) i \\( y \\):} Jeśli \\( f \\) ma ciągłe pochodne cząstkowe pierwszego i drugiego rzędu, \\( \frac{\partial f}{\partial x_1} = \frac{\partial f}{\partial x_2} = \ldots = \frac{\partial f}{\partial x_n} = 0 \\) oraz wyróżnik \\( \text{W} \left(\overrightarrow{p}\right) > 0 \\) to \\( f \\) ma ekstremum w punkcie \\( \overrightarrow{p} \\), przy czym jeśli \\( \frac{\partial^2 f}{\partial x^2} > 0 \\) to jest to minimum, a jeśli \\( \frac{\partial^2 f}{\partial x^2} < 0 \\) to jest to maksimum. \\\
Natomiast jeśli \\( \text{W} \left(\overrightarrow{p}\right) < 0 \\), to \\( \overrightarrow{p} \\) jest punktem siodłowym. \\\
W przypadku \\( \text{W} \left(\overrightarrow{p}\right) = 0 \\) należy zastosować inne metody.

### Warstwica funkcji

Niech \\( f: \mathcal{D} \to \mathbb{R} \\), \\( \mathcal{D} \subset \mathbb{R}^2 \\), wtedy zbiór \\( \{(x,y) \in \mathbb{R}^2 : f(x,y) = c\} \\) nazywamy warstwicą funkcji \\( f \\). Jest to rzut na \\( \mathbb{R}^2 \\) krzywej \\( \{(x,y,z) \in \mathbb{R}^3 : c = f(x,y)\} \\), która leży na powierzchni \\( z = f(x,y) \\) i na płaszczyźnie \\( z = c \\).

### Prostopadłość gradientu do warstwicy

Jeśli krzywa gładka \\( \mathcal{C} \\), dla której wektor styczny w punkcie \\( \left(x_0, y_0\right) \\) jest różny od zera, jest warstwicą funkcji różniczkowalnej \\( z = f(x,y) \\) w punkcie \\( \left(x_0, y_0\right) \\) i jeśli \\( \nabla f \left(x_0, y_0\right) \neq 0 \\), to \\( \nabla f \left(x_0, y_0\right) \perp \mathcal{C} \\).

### Równanie płaszczyzny stycznej

\\\[ \nabla f \left(\overrightarrow{x_0}\right) \cdot \left(\overrightarrow{x} - \overrightarrow{x_0}\right) = 0\ \\]

### Ekstrema warunkowe

Szukamy ekstremów funkcji \\( f(x,y) \\) spełniających warunek \\( g(x,y) = a \\), \\( a \in \mathbb{R} \\) \\\
\textbf{Warunek konieczny:} Załóżmy, że \\( f \\) i \\( g \\) są różniczkowalne oraz są spełnione następujące warunki:

* \\( g\left(\overrightarrow{p}\right) = a \\)
* \\( \{(x,y) : g(x,y) = a\} \\) jest krzywą gładką \\( \overrightarrow{r} (t) \\)
* \\( r'(t) \neq 0 \\)
* \\( \overrightarrow{p} = \overrightarrow{r} (t_0) \\), gdzie \\( t_0 \\) nie jest końcem przedziału
* \\( \nabla g \left(\overrightarrow{p}\right) \neq 0 \\)
* \\( f \\) ma ekstremum na krzywej \\( r(t) \\) w \\( \overrightarrow{p_0} \\)

Wtedy \\( \nabla g \left(\overrightarrow{p}\right) \parallel \nabla f \left(\overrightarrow{p}\right) \\), czyli \\( \left(\exists \lambda \in \mathbb{R}\right)\left(\nabla f \left(\overrightarrow{p}\right) = \lambda \nabla g \left(\overrightarrow{p}\right)\right) \\), gdzie \\( \lambda \\) nazywamy mnożnikiem Lagrange'a.
