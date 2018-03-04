---
layout: acc_layout
toc: akiso
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

## Programowanie wielowątkowe
\begin{quote}{Znany żart o programowaniu wielowątkowym}
-- Puk puk. \\
-- Wyścigi wątków! \\
-- Kto tam?
\end{quote}

% ### Proces
% #### Tworzenie procesu potomnego
% #### Proces zombie
% #### Komunikacja między procesami (IPC)
% ### Wątek
% #### Tworzenie wątków
% #### Zarządzanie wątkami
% ### Pamięć współdzielona
% ### Wyścigi wątków
% ### Sychronizacja wątków
% #### Zmienne atomowe
% #### Semafory
% #### Wzajemne wykluczenie (ang. \emph{mutex)}

Domeną nowoczesnych systemów operacyjnych była wielozadaniowość
systemu. Pozwala ona na wykonywanie różnych dla komputera
bardziej, lub mniej, powiązanych ze sobą zadań. Poważnym
komercyjnym przeskokiem było wydanie Windowsa 95, którym
był pierwszym systemem 
pozwalający na uruchamianie kilku zadań jednocześnie.
Ten rozdział będzie poświęcony właśnie wielozadaniowości
w systemach uniksopodobnych zgodnych ze standardem POSIX.

### Proces

Najbardziej atomowym bytem w systemie operacyjnym, jeśli
chodzi o zadanie, jest proces. Procesem nazywamy instancję wykonywanego programu. Proces jest zarządzany przez
planistę (ang. \emph{job scheduler}), czyli wyspecjalizowany
moduł jądra, który przydziela czas procesora na wykonanie 
kodu. 

Proces może zostać utworzony głównie w dwóch scenariuszach:
poprzez uruchomienie pliku wykonywalnego, bądź utworzenie
go jako proces potomny do innego procesu.

#### Proces potomny

Proces potomny to proces, który jest uzależniony
od procesu rodzica. Proces potomny często tworzy się
w celach m. in.

* wykonania innego programu; często taki proces
potomny ma niszczone środowisko wykonywania i podmieniane
jest na środowisko wykonywanego programu,
* zwielokrotnienia działania jednego programu;
widać to na przykładzie przeglądarki w 
oparciu o silnik Chromium.


#### Tworzenie procesów potomnych
By utworzyć proces potomny wykorzystuje się
funkcję \mintinline{c}{int fork()}, która znajduje 
się po dołączeniu nagłówka dyrektywą
\mintinline{c}{#include <unistd.h>}.
Tworzy proces potomny, który wykonuje się od 
tej samej linii co wywołanie tej funkcji.
By móc zidentyfikować, który proces jest 
procesem potomnym, funkcja \mintinline{c}{int fork()}
zwraca liczbę całkowitą. Jeśli zostało zwrócone zero,
wykonywany jest proces potomny, w przeciwnym wypadku
jest to proces rodzicielski, bądź -1, gdy
\mintinline{c}{int fork()} natrafił na błąd.

\begin{listing}[H]
\centering
\caption{Przykład programu wykorzystującego funkcję 
\mintinline{c}{int fork()}.}
\begin{minted}{c}
#include <unistd.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
int pid = fork();
if (pid < 0) {
   printf("Coś się popsuło i nie było mnie słychać...\n");
   return -1;
} else if (pid == 0) {
   printf("Proces potomny.\n");
} else {
   printf("Proces-rodzic.\n");
}
return 0;
}
\end{minted}
\end{listing}

### Stany procesów
Każdy proces ma swój stan. By dowiedzieć się o stanie procesu
z perspektywy powłoki tekstowej, można użyć polecenia ` ps `.
Tabela stanów jest przedstawiona jako
tabela~\ref{tab:proc-states}.

\begin{table}[h]
\label{tab:proc-states}
\centering
\caption{Tabela stanów procesu}
\begin{tabular}{|l|l|p{7cm}|}
\hline
\textbf{Symbol stanu} & \textbf{Nazwa stanu} & \textbf{Komentarz} \\ \hline
` R ` & running & Oznacza działający proces, który wykonuje jakieś zadanie. \\ \hline
` D ` & uninterruptible sleep & Oznacza stan spoczynku procesu, jednakże
nie da się go przerwać (przykładowo podczas dostępu do wejścia/wyjścia). \\ \hline
` S ` & interruptible sleep & Oznacza stan spoczynku procesu, który
można przerwać (przykładowo podczas oczekiwania na ukończenie pewnego, innego zdarzenia).\\ \hline
` Z ` & defunct/zombie & Jest to proces-zombie. Proces-zombie to taki
proces potomny, który ukończył swoje działanie i proces-rodzic
nie zaczekał na niego.\\ \hline
` T ` & stopped & Jest to proces zatrzymany. 
Proces zatrzymany to taki proces, którego wykonanie zostało
zatrzymane i może zostać wznowione przez sygnały.\\ \hline
\end{tabular}
\end{table}

\begin{figure}[p]
\label{fig:proc-states-diagram}
\centering
\includegraphics[width=0.75\textwidth]{_img/proc-states}
\caption{Diagram stanów dla procesu}

\end{figure}

#### Wysyłanie sygnału do procesu
By móc zmienić zachowanie procesu, wprowadzony został
mechanizm sygnałów. Sygnał jest to odpowiednik przerwania
tylko między procesem a jądrem. Sygnały wysyła się za pomocą
funkcji \mintinline{c}{int kill(pid_t pid, int signum)}
w pliku \mintinline{c}{#include <signal.h>}.
By móc obsłużyć sygnał, należy zarejestrować
tzw. \emph{signal hanlder} za pomocą
funkcji \mintinline{c}{signalhandler_t signal(int signum,
signalhandler_t handler)}. Typ \mintinline{c}{signalhandler_t}
jest niczym innym niż wskaźnikiem do funkcji;
jest definiowany jako \mintinline{c}{typedef void (*sighandler_t)(int)}. Są sygnały, które nie da
się ,,zagłuszyć'', m.in. jest to sygnał ` SIGKILL `.

\begin{listing}[p]
\centering
\caption{Przykładowe użycie funkcji 
\mintinline{c}{kill}
oraz \mintinline{c}{signal}}
\begin{minted}{c}
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>

void sigint_handler(int signum) {
if (signum == 2) {
printf("Otrzymano SIGINT\n");
exit(1);
}
}

int main(int argc, char *argv[]) {
int pid = fork();
if (pid == -1) {
perror("fork");
return 1;
} else if (pid == 0) {
signal(2, sigint_handler);
printf("Czekamy na sygnał od rodzica...\n");
while (1);
} else {
sleep(1);
if (kill(pid, 2) < 0) {
perror("kill");
return 1;
}
}
}
\end{minted}
\end{listing}

#### Oczekiwanie na proces
Na procesy również możemy oczekiwać. Jest to dość
powszechnie używana funkcjonalność --- przykładowo
inny proces może pobierać coś, kiedy my czekamy
na cały pobrany plik. Ku temu
wykorzystuje się funkcję
\mintinline{c}{int waitpid(pid_t pid, int *status,
int options)}, która przyjmuje
ID procesu, na którego oczekujemy, wskaźnik na zmienną,
która będzie zawierała ostatni status procesu,
który spowodował zwrócenie funkcji, oraz opcje,
które określają, dla jakich stanów funkcja
ma skończyć działanie. Jej działanie
polega na blokowaniu głównego procesu,
dopóki nie zostanie zmieniony stan procesu.
Po więcej informacji można odwiedzić
\mintinline{console}{$ man 2 waitpid}.

### Wątki
Wątki są lekkim odpowiednikiem procesu. Proces
może składać się z kilku wątków. Do
zarządzania wątkami będziemy wykorzystywać
bibliotekę ` pthread `. Więcej
informacji można znaleźć w tym wyczerpującym
i dość zrozumiałym poradniku
\url{https://computing.llnl.gov/tutorials/pthreads/}.

#### Pamięć dzielona

Pamięć dzielona (współdzielona, ang. \emph{shared memory})
jest pamięcią dostępną dla każdego wątku. Są to zazwyczaj
zmienne globalne. Pamięć dzielona pozwala na komunikację
między wątkami i wymianę danych. 

Zazwyczaj, gdy mało doświadczony programista pragnie zabrać
się za programowanie wielowątkowe, zapomina się o podstawowej zasadzie
podczas programowania wielowątkowego, której niezastosowanie jej
prowadzi do takich problemów jak...

#### Wyścigi wątków

Wyścigi wątków to anomalia polegająca na braku synchronizacji wątków 
w~dostępie do wspólnego dobra. Przykładem może być
zwiększanie zmiennej całkowitej o dwa, z użyciem dwóch
wątków, które zwiększają tę zmienną o jeden.
Docelowy scenariusz naszego modelu
wygląda następująco:

* Wątek 1 ładuje tymczasowo zmienną do pamięci podręcznej
* Wątek 1 dodaje jeden do tymczasowej zmiennej
* Wątek 1 przypisuje tymczasową zmienną do zmiennej powiększanej
* Wątek 2 ładuje tymczasowo zmienną do pamięci podręcznej
* Wątek 2 dodaje jeden do tymczasowej zmiennej
* Wątek 2 przypisuje tymczasową zmienną do zmiennej powiększanej

Jednakże bez należytej staranności, również może wystąpić
następujący scenariusz:

* Wątek 1 ładuje tymczasowo zmienną do pamięci podręcznej
* Wątek 2 ładuje tymczasowo zmienną do pamięci podręcznej
* Wątek 1 dodaje jeden do tymczasowej zmiennej
* Wątek 2 dodaje jeden do tymczasowej zmiennej
* Wątek 1 przypisuje tymczasową zmienną do zmiennej powiększanej
* Wątek 2 przypisuje tymczasową zmienną do zmiennej powiększanej

Wtedy tak naprawdę rezultatem będzie zwiększenie o jeden, co oczywiście
nie jest poprawnym działaniem tego algorytmu. Dlatego stosuje się...

#### Synchronizacja wątków
Są różne mechanizmy synchronizacji wątków. Głównie wykorzystywane to:

* Semafor --- stanowi mechanizm blokowania procesów i wątków.
Semafor, tak jak w prawdziwym życiu, można opuszczać i podnosić.
Opuszczenie semafora wiąże się z blokowaniem procesu,
a podnoszenie ze zwolnienia blokady. Jest to blokada jednostronna,
tzn. doświadcza ją tylko proces, który stosuje się do semafora.
Na ogół rzadko wykorzystywane ze względu na ich złożoność.
* Wzajemne wykluczenie (ang. \emph{mutex})
--- prosty mechanizm synchronizacji
polegający na tym, że kiedy blokada została ustanowiona,
to inne wątki, które chcą przejść do sekcji krytycznej,
czekają, aż zostaje zwolniona. Jest to blokada dwustronna.
* Zmienne atomowe --- zmienne, których odczyt i zmiana odbywa się w sposób 
atomowy, to znaczy, niepodzielny.
