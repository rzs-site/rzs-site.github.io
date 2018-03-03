---
layout: acc_layout
toc: md
use_math: true
---

Matematyka Dyskretna
---

### Klasy kombinatoryczne

* Klasa kombinatoryczna \\( (\mathcal A, \vert \cdot \vert ) \\) , \\( \vert \cdot \vert :\mathcal A\to\mathbb{N} \\) 
* \\( \mathcal A_n=\{a\in \mathcal A:\ \vert a \vert =n\} \\) , \\( a_n= \vert \mathcal A_n \vert \\) 
* Funkcja tworząca klasy kombinatorycznej \\( A(x)=\displaystyle\sum_{n=0}^\infty a_nx^n \\) 
* Przykłady \\( \mathcal E,\ Z \\) 
* Suma \\( \mathcal A +\mathcal B \\) oraz produkt \\( \mathcal A\times \mathcal B \\) klas kombinatorycznych
* Jeśli \\( \mathcal C= \mathcal A +\mathcal B \\) , to \\( C(x)=A(x)+B(x) \\) 
* Jeśli \\( \mathcal D=\mathcal A\times \mathcal B \\) , to \\( D(x)=A(x)B(x) \\) 
* Klasa kombinatoryczna \\( \mathcal Seq(\mathcal A) \\) 
* Jeśli \\( \mathcal B=\mathcal Seq(\mathcal A) \\) , to \\( \displaystyle B(x)=\frac{1}{1-A(x)} \\) 
* Podklasa
* Tworzenie klas kombinatorycznych z wykorzystaniem relacji równoważności
* Klasa kombinatoryczna \\( \mathcal Pset(\mathcal A) \\) oraz \\( \mathcal Cycle(\mathcal A) \\) 
* Jeśli \\( \mathcal B=\mathcal Pset(\mathcal A) \\) , to \\( \displaystyle B(x)=\prod_{k=1}^{\infty}(1+x^k)^{a_k}=exp\left(\sum_{k=1}^\infty\frac{(-1)^{k-1}}{k}A(x^k)\right) \\) 
* Klasa kombinatoryczna \\( \mathcal Mset(\mathcal A) \\) (o ile \\( \mathcal A_0=\emptyset \\) )
* Jeśli \\( \mathcal B=\mathcal Mset(\mathcal A) \\) , to \\( \displaystyle B(x)=\prod_{k=1}^{\infty}(1-x^k)^{-a_k}=exp\left(\sum_{k=1}^\infty\frac{1}{k}A(x^k)\right) \\) 
* Jeśli \\( \mathcal B=\mathcal Cycle(\mathcal A) \\) , to \\( \displaystyle B(x)=\sum_{k=1}^{\infty}\frac{\varphi(k)}{k}ln\left(\frac{1}{1-A(x^k)}\right) \\) 
* Podstawowe własności funkcji Eulera \\( \varphi \\) 
* Pomocnicza klasa \\( \Delta(\mathcal A)=\{(a,a):\ a\in\mathcal A\} \\) 
* Związek pomiędzy klasami \\( \mathcal Mset(\mathcal A) \\) oraz \\( \mathcal Pset(\mathcal A) \\) opisany równością \\( M(x)=P(x)M(x^2) \\) 
* Ograniczone klasy kombinatoryczne \\( \mathcal Pset_k(\mathcal A),\ \mathcal Mset_k(\mathcal A) \\) 
* Jeśli \\( \mathcal B=\mathcal Pset_2(\mathcal A) \\) , to \\( \displaystyle B(x)=\frac{1}{2}(A(x)^2-A(x^2)) \\) 
* Jeśli \\( \mathcal B=\mathcal Mset_2(\mathcal A) \\) , to \\( \displaystyle B(x)=\frac{1}{2}(A(x)^2+A(x^2)) \\) 
* Funkcje tworzące dwóch zmiennych
* Jeśli \\( \mathcal B=\mathcal Seq(\mathcal A) \\) , to \\( \displaystyle B(x,y)=\frac{1}{1-yA(x)} \\) 
* Jeśli \\( \mathcal B=\mathcal Pset(\mathcal A) \\) , to \\( \displaystyle B(x,y)=\prod_{k=1}^{\infty}(1+yx^k)^{a_k}=exp\left(\sum_{k=1}^\infty\frac{(-1)^{k-1}}{k}y^kA(x^k)\right) \\) 
* Jeśli \\( \mathcal B=\mathcal Mset(\mathcal A) \\) , to \\( \displaystyle B(x,y)=\prod_{k=1}^{\infty}(1-yx^k)^{-a_k}=exp\left(\sum_{k=1}^\infty\frac{1}{k}y^kA(x^k)\right) \\)    

