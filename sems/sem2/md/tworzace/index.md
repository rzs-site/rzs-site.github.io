---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Funkcje tworzące

* Wyprowadzenie funkcji tworzącej ciągu Fibbonacciego:

{::options parse_block_html="true" /}
<div class="math-box"> <p>
    \\[
        F_0 = 0, \quad F_1 = 1, \quad F_n = F_{n - 1} + F_{n - 2} \\\
        \text{Niech}\ F(x)\ \text{jest funkcją tworzącą tych liczb, wtedy:} \\\
        F(x) = \sum_{n = 0}^\infty F_n x^n \\\
        \text{Ponieważ}\ F_0 = 0\ \text{oraz}\ F_1 = 1\ \text{to:}\ \\\
        F(x) = \sum_{n = 1}^\infty F_n x^n \\\
        F(x) = x + \sum_{n = 2}^\infty F_n x^n \\\
        \text{Następnie rozbijamy korzystając z:}\ F_n = F_{n - 1} + F_{n - 2}\ \text{mamy:} \\\
        F(x) = x + \sum_{n = 2}^\infty (F_{n -1} + F_{n - 2}) x^n \\\
        F(x) = x + \sum_{n = 2}^\infty F_{n -1}x^n + \sum_{n = 2}^\infty F_{n - 2} x^n \\\
        \text{Wyciągając } x \text{ z pierwszej sumy mamy:}\\\
        \sum_{n = 2}^\infty F_{n -1}x^n = x \sum_{n = 2}^\infty F_{n -1}x^{n-1} = x \sum_{n = 1}^\infty F_{n}x^{n} = xF(x) \\\
        \text{Wyciągając } x^2 \text{ z drugiej sumy mamy:}\\\
        \sum_{n = 2}^\infty F_{n - 2} x^n = x^2 \sum_{n = 2}^\infty F_{n - 2}x^{n-2} = x^2 \sum_{n = 0}^\infty F_{n}x^{n} = x^2F(x) \\\
        \text{Zatem: } \\\
        F(x) = x + xF(x) + x^2F(x) \\\
        \text{Po przekształceniach: } \\\
        F(x) = \frac{x}{1 - x - x^2} \\\
        \text{Rozwiązaniami równania w mianowniku są: } \\\
        x_1 = \frac{-1 + \sqrt{5}}{2} \text{ oraz } x_2 = \frac{-1 - \sqrt{5}}{2} \\\
        \text{Rozbijając na ułamki proste:} \\\
        \frac{x}{1 - x - x^2} = \frac{A}{\frac{-1 + \sqrt{5}}{2}} + \frac{B}{\frac{-1 - \sqrt{5}}{2}} \\\
        \text{Mamy:} \\\
        A = \frac{1-\sqrt{5}}{2\sqrt{5}} \quad B = \frac{-1-\sqrt{5}}{2\sqrt{5}} \\\
        \text{Więc: } \\\
        \frac{\frac{1-\sqrt{5}}{2\sqrt{5}}}{x - \frac{-1 + \sqrt{5}}{2}} + \frac{\frac{-1-\sqrt{5}}{2\sqrt{5}}}{x - \frac{-1 - \sqrt{5}}{2}} \\\
        \text{Przekształcając: } \\\
        \frac{1}{\sqrt{5}}\left(\frac{1}{1 - x\frac{2}{-1 + \sqrt{5}}} + \frac{-1}{1 - x\frac{2}{-1 - \sqrt{5}}}\right) \\\
        \text{Korzystając ze wzoru na sumę szerego geometrycznego:} \\\
        \frac{1}{\sqrt{5}}\sum_{n = 0}^\infty \left(\left(\frac{2}{-1 + \sqrt{5}}\right)^{n} - \left(\frac{2}{-1 - \sqrt{5}}\right)^n\right) x^n \\\
        \text{Co daje nam wynik:} \\\
        F(x) = \frac{1}{\sqrt{5}}\left(\left(\frac{2}{-1 + \sqrt{5}}\right)^{n} - \left(\frac{2}{-1 - \sqrt{5}}\right)^n\right)

    \\]
    </p></div>
{::options parse_block_html="false" /}

<!-- TESTTTTTTT. -->



* Ukorzenione drzewa binarne, liczby Catalana \\( C_n=\frac{1}{n+1}{2n\choose n} \\)
* Liczby Catalana, więcej przykładów
