---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Całkowanie przez podstawienie i Jakobian przejścia

### Twierdzenie o podstawianiu

Jeśli \\( T: V \to V' \\) jest wzajemnie jednoznacznym odwzorowaniem mającym pierwsze pochodne cząstkowe ciągłe takim, że \\( T^{-1} \\) też ma te własności (dyfeomorfizmem), gdzie \\( V, \\) \\( V' \\) są regularne w \\( \mathbb{R}^3 \\) oraz \\( T(u,v,w) = (x,y,z) \\), wtedy:
\\\[ \iiint_{v'} f(x,y,z) dP' = \iint_V f(x(u,v,w), y(u,v,w), z(u,v,w)) \left| \frac{\partial (x,y,z)}{\partial (u,v,w)} \right| dP\ \\]
\[\frac{\partial (x,y,z)}{\partial (u,v,w)} = 
\begin{vmatrix}
x_u & x_v & x_w \\\
y_u & y_v & y_w \\\
z_u & z_v & z_w
\end{vmatrix}\]

### Współrzędne biegunowe

\[\begin{cases}
x = r \cos\varphi \\\
y = r \sin\varphi
\end{cases}\]
\[\frac{\partial (x,y,z)}{\partial (u,v,w)} = 
\begin{vmatrix}
\cos\varphi & -r\sin\varphi \\\
\sin\varphi & r\cos\varphi
\end{vmatrix}
= r\]

### Współrzędne sferyczne

\[\begin{cases}
x = r \sin\theta \cos\varphi \\\
y = r \sin\theta \sin\varphi \\\
z = r \cos\theta
\end{cases}\]
\[\frac{\partial (x,y,z)}{\partial (u,v,w)} = 
\begin{vmatrix}
\sin\theta\cos\varphi & r\cos\theta\cos\varphi & -r\sin\theta\sin\varphi \\\
\sin\theta\sin\varphi & r\cos\theta\sin\varphi & r\sin\theta\cos\varphi \\\
\cos\theta & -r\sin\theta & 0
\end{vmatrix}
= r^2 \sin\theta\]

### Współrzędne cylindryczne

\[\begin{cases}
x = r \cos\varphi \\\
y = r \sin\varphi \\\
z = z
\end{cases}\]
\[\frac{\partial (x,y,z)}{\partial (u,v,w)} = 
\begin{vmatrix}
\cos\varphi & -r\sin\varphi & 0 \\\
\sin\varphi & r\cos\varphi & 0 \\\
0 & 0 & 1
\end{vmatrix}
= r\]
