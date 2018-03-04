---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Technologia CUDA % zmiana z Architektura CUDA, nie jest to architektura, a jedynie interfejs umożliwiający wywołanie kodu na karcie
\begin{quote}{Dan Brown}
CUDA to po prostu opowieści, w które wierzymy, gdyż pragniemy, żeby były prawdziwe. 
\end{quote}
Karty graficzne są urządzeniami z wysoce wyspecjalizowaną architekturą, ukierunkowaną na wykonywanie równolegle ogromnej ilości wielu prostych, niezależnych od siebie obliczeń. Przetwarzanie i obróbka grafiki i filmów, a także grafika w grach komputerowych jest szczególnym przykładem takich zadań. Dlatego też powstawały coraz mocniejsze procesory graficzne, które pozwalały na uzyskiwanie coraz lepszych efektów. 

Wiele z problemów algorytmicznych niezwiązanych z grafiką także pozwala na podzielenie zadań na w miarę niezależne od siebie części, przez co możliwe jest wykonywanie ich na wielu rdzeniach. Właśnie w tym celu, do przyspieszenia obliczeń inżynierskich, biologicznych czy astrofizycznych, rozwinęła się idea GPGPU - \textit{General Purpose Computations on Graphical Processing Unit}. Jedną z ważniejszych technologii wspierających tą ideę jest wprowadzona w 2006 r. Nvidia CUDA.
### Opis
Nvidia CUDA jest to API pozwalające na wykorzystanie GPU do obliczeń równoległych, niekoniecznie związanych z przetwarzaniem grafiki. Programy wykorzystujące CUDA są zwykle tworzone w rozszerzeniu/modyfikacji języka C++, `CUDA C++', kompilowanym przy użyciu ` nvcc `. Istnieje także możliwość wykorzystania CUDA w innych językach, przez użycie specjalnych bibliotek.
### Przykładowy program
Omówmy przykładowy kod wykorzystujący CUDA, z poradnika od Nvidii
\footnote{Źródło: \url{https://devblogs.nvidia.com/even-easier-introduction-cuda/}}.\footnote{Pomimo kilku godzin walki, nie udało mi się skonfigurować narzędzi CUDA w systemie Windows, opis oparty jest na podręczniku Nvidii - przypis autora} 
\begin{minted}[linenos]{cuda}
#include <iostream>
#include <math.h>

__global__
void add(int n, float* x, float* y) { // 1
for (int i = 0; i < n; i++) {
y[i] = x[i] + y[i];
}
}

int main(void) {
int N = 1 << 20;
float *x, *y;

cudaMallocManaged(&x, N*sizeof(float)); // 2
cudaMallocManaged(&y, N*sizeof(float));

// 3
for (int i = 0; i < N; i++) {
x[i] = 1.0f;
y[i] = 2.0f;
}

add<<<1, 1>>>(N, x, y); // 4


cudaDeviceSynchronize(); //5

float maxError = 0.0f;
for (int i = 0; i < N; i++) {
maxError = fmax(maxError, fabs(y[i] - 3.0f));
}

std::cout << "Max error: " << maxError << std::endl;


cudaFree(x); // 6
cudaFree(y);

return 0;
}
\end{minted}
Opis działania:
\begin{description}
* [1] flaga ` \_\_global\_\_ ` oznacza funkcję CUDA, przeznaczoną do wywołania na GPU
* [2] rezerwujemy pamięć
* [3] wypełniamy tablice danymi
* [4] wywołujemy funkcję CUDA, (liczby w potrójnych nawiasach ostrokątnych oznaczają odpowiednio: ilość bloków i ilość wątków na blok)
* [5] musimy poczekać na wykonanie obliczeń
* [6] zwalniamy pamięć
\end{description}





#include <iostream>
#include <math.h>

__global__
void add(int n, float* x, float* y) {
for (int i = 0; i < n; i++) {
y[i] = x[i] + y[i];
}
}

int main(void) {
int N = 1 << 20;
float *x, *y;

cudaMallocManaged(&x, N*sizeof(float));
cudaMallocManaged(&y, N*sizeof(float));

for (int i = 0; i < N; i++) {
x[i] = 1.0f;
y[i] = 2.0f;
}

add<<<1, 1>>>(N, x, y);

cudaDeviceSynchronize();

float maxError = 0.0f;
for (int i = 0; i < N; i++) {
maxError = fmax(maxError, fabs(y[i] - 3.0f));
}

std::cout << "Max error: " << maxError << std::endl;

cudaFree(x);
cudaFree(y);

return 0;
}


