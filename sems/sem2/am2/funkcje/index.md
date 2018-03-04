---
layout: acc_layout
toc: am2
use_math: true 
---

Analiza Matematyczna 2
---
## Funkcje z \\( \mathbb{R^n \\) w \\( \mathbb{R}^m \\)}

### Definicja
\\\[ f: \mathcal{D} \to \mathbb{R}^m,\ \mathcal{D} \subset \mathbb{R}^n\ \\]

### Granica odwzorowania

Jeśli \\( \overrightarrow{x_0} \\) jest punktem skupienia \\( \mathcal{D} \\) to:

\\\[ \lim_{\overrightarrow{x}\to\overrightarrow{x_0}} f\left(\overrightarrow{x}\right) = \overrightarrow{p} \in \mathbb{R}^n \iff \left(\forall\ \textnormal{ciąg}\ \overrightarrow{x_k} \to \overrightarrow{x_0}, \overrightarrow{x_k} \in \mathcal{D} \right)\left(\lim_{k\to\infty} f\left(\overrightarrow{x_k}\right) = \overrightarrow{p}\right)\ \\]

### Ciągłość

\\( f: \mathcal{D} \to \mathbb{R}^m \\) jest ciągła w \\( \overrightarrow{x_0} \in \mathcal{D} \\) gdy \\( \lim_k f\left(\overrightarrow{x_k}\right) = f\left(\overrightarrow{x_0}\right) \\) dla każdego ciągu \\( \overrightarrow{x_k} \to \overrightarrow{x_0} \\), \\( \overrightarrow{x_k} \in \mathcal{D} \\).

### Twierdzenie o ciągłości po współrzędnych

\\( f: \mathcal{D} \to \mathbb{R}^m \\), \\( \mathcal{D} \in \mathbb{R}^n \\) jest ciągła w \\( \overrightarrow{x_0} \\) wtedy i tylko wtedy gdy:
\\\[ f\left(\overrightarrow{x}\right) = \left(f_1\left(\overrightarrow{x}\right), f_2\left(\overrightarrow{x}\right), \ldots, f_m\left(\overrightarrow{x}\right)\right)\ \\]
\\\[ \left(\forall i \leq m\right)\left(f_i\left(\overrightarrow{x}\right)\ \textnormal{jest ciągła w}\ \overrightarrow{x_0}\right)\ \\]

### Twierdzenie o niezmienności zwartości

Jeśli \\( \mathcal{D} \\) jest zbiorem zwartym (gdzie \\( \mathcal{D} \subset \mathbb{R}^n \\)) oraz \\( f: \mathcal{D} \to \mathbb{R}^m \\) jest ciągła, to \\( f\left\\[ \mathcal{D}\right \\] \\) jest zwarty w \\( \mathbb{R}^m \\). \\\
\textbf{Wniosek:} Każda funkcja ciągła \\( f: \mathcal{D} \to \mathbb{R} \\), gdzie \\( \mathcal{D} \\) jest zwarty w \\( \mathbb{R}^n \\) ma wartość najmniejszą i największą.
