---
layout: acc_layout
toc: main_page
use_highlight: true
---

# Technologie Sieciowe - Lista 1

## Ping

### Opis

Ping to program wykorzyrzystywany do testowanie łączności z dowolnym hostem w sieci IP. Program wysyła kontrolne pakiety ICMP (Internet Control Message Protocol) i czeka na odpowiedź, również będącą takim pakietem. Ping dokonuje równierz pomiarów czasu między wysłaniem, a odepraniem pakietu oraz ilości skoków które pakiet musił wykonać zanim dotarł do hosta.

### Pomiary

##### Trasa do odległego serwera

Sprawdzimy ile potrzeba skoków by dostać się do serwera [strony rządu Brazyli](https://www.brasil.gov.br/). Żeby tego dokonać wyślijmy najpierw pakiet z maksymalnym czasem życia (TTL) 20 skoków:

```powershell
> ping www.brasil.gov.br -i 20

Pinging www.brasil.gov.br [170.246.252.243] with 32 bytes of data:
Reply from 170.246.252.243: bytes=32 time=256ms TTL=239
Reply from 170.246.252.243: bytes=32 time=256ms TTL=239
Reply from 170.246.252.243: bytes=32 time=255ms TTL=239
Reply from 170.246.252.243: bytes=32 time=254ms TTL=239

Ping statistics for 170.246.252.243:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 254ms, Maximum = 256ms, Average = 255ms
```

Widzimy, że pakiety bez problemu docierają do serwera i wracają do nas. Teraz sprawdźmy dla 19 skoków:

```powershell
> ping www.brasil.gov.br -i 19

Pinging www.brasil.gov.br [170.246.252.243] with 32 bytes of data:
Reply from 170.246.252.2: TTL expired in transit.
Reply from 170.246.252.2: TTL expired in transit.
Reply from 170.246.252.2: TTL expired in transit.
Reply from 170.246.252.2: TTL expired in transit.

Ping statistics for 170.246.252.243:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
```

Żaden z pakietów nie dotarł, stąd wnioskujemy, że ilość węzłów na trasie do serwera to 20, a od serwera to (255 - ttl) 16. Widzimy, że trasy w obie strony są różne.

##### Wpływ wielkości pakietu

Największy pakiet jaki udało mi się wysłać miał rozmiar 1480 bajtów oraz 1472 bajty bez fragmentowania. Powyżej tego rozmiaru program rzucał błąd:

```powershell
> ping www.brasil.gov.br -i 20 -l 1481

Pinging www.brasil.gov.br [170.246.252.243] with 1481 bytes of data:
Request timed out.

Ping statistics for 170.246.252.243:
    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),
```

Dla pakietów o rozmiarze 1480 bajtów średni czas propagacji wzrósł o zaledwie kilka milisekund, a długość trasy nie zmienił się:

```powershell
> ping www.brasil.gov.br -i 20 -l 1480

Pinging www.brasil.gov.br [170.246.252.243] with 1480 bytes of data:
Reply from 170.246.252.243: bytes=1480 time=259ms TTL=239
Reply from 170.246.252.243: bytes=1480 time=260ms TTL=239
Reply from 170.246.252.243: bytes=1480 time=261ms TTL=239
Reply from 170.246.252.243: bytes=1480 time=259ms TTL=239

Ping statistics for 170.246.252.243:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 259ms, Maximum = 261ms, Average = 259ms
```

A dla 1472 bajtow bez fragmetowania:

```powershell
> ping www.brasil.gov.br -i 20 -l 1472 -f

Pinging www.brasil.gov.br [170.246.252.243] with 1472 bytes of data:
Reply from 170.246.252.243: bytes=1472 time=258ms TTL=239

Ping statistics for 170.246.252.243:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
Reply from 170.246.252.243: Approximate round trip times in milli-seconds:
    Minimum = 258ms, Maximum = 258ms, Average = 258ms
bytes=1472
```

Dla serwera znajdującego się blisko, wielkość pakietu wydłuża czas propagacji (w naszym przypadku) o około 2ms:

```powershell
> ping www.wroclaw.pl -i 20 -l 1472 -f

Pinging www.wroclaw.pl [46.248.189.3] with 1472 bytes of data:
Reply from 46.248.189.3: bytes=1472 time=48ms TTL=55
Reply from 46.248.189.3: bytes=1472 time=48ms TTL=55
Reply from 46.248.189.3: bytes=1472 time=48ms TTL=55
Reply from 46.248.189.3: bytes=1472 time=48ms TTL=55

Ping statistics for 46.248.189.3:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 48ms, Maximum = 48ms, Average = 48ms
```

```powershell
> ping www.wroclaw.pl -i 20 -f

Pinging www.wroclaw.pl [46.248.189.3] with 32 bytes of data:
Reply from 46.248.189.3: bytes=32 time=46ms TTL=55
Reply from 46.248.189.3: bytes=32 time=46ms TTL=55
Reply from 46.248.189.3: bytes=32 time=46ms TTL=55
Reply from 46.248.189.3: bytes=32 time=46ms TTL=55

Ping statistics for 46.248.189.3:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 46ms, Maximum = 46ms, Average = 46ms
```

##### Wpływ fragmentacji pakietów

Wyłączenie zakazu fragmentacji pakietów (`-f`) powoduje, że jesteśmy w stanie wysłać nieco większe. Nie ma jednak wpływu na czas oraz ilość pokonanych węzłów.

##### Średnica internetu

Nam udało się znaleść serwer odległy od 21 węzłów na tomiast wiadomo, że średnica internetu jest większa i wynosi około 30-35.

### Wnioski

Ping to praktyczny program do testowania łączności z różnymi serwerami. Przydaje się równierz do sprawdzania, czy nasz komputer ma połączenie z internetem (Klasyczne wywołanie: `ping www.google.com`).

## Traceroute

### Opis

Traceroute to program służący do pozyskiwania informacji o tym jaką drogę pokonał pakiet wysłany przez sieć IP do swojego cenu. Przez jakie serwery przeszedł i jakie były kolejne opóźnienia.

### Pomiary

Sprawdźmy trasę do servera brazylijskiej strony rozważanej wcześniej.

```powershell
> tracert -w 5000 www.brasil.gov.br

Tracing route to www.brasil.gov.br [170.246.252.243]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  funbox.home [192.168.1.1]
  2     1 ms     1 ms     1 ms  wro-bng2.tpnet.pl [80.50.18.74]
  3     1 ms     1 ms     1 ms  wro-r1.tpnet.pl [80.50.18.73]
  4     4 ms     3 ms     3 ms  poz-r1.tpnet.pl [194.204.175.205]
  5    29 ms    29 ms    29 ms  hbg-b1-link.telia.net [213.248.96.144]
  6    29 ms    29 ms    29 ms  hbg-bb4-link.telia.net [213.155.135.86]
  7   123 ms    41 ms    41 ms  ldn-bb2-link.telia.net [62.115.122.161]
  8   114 ms   114 ms   114 ms  ash-bb4-link.telia.net [62.115.122.61]
  9   132 ms   132 ms   130 ms  boca-b1-link.telia.net [62.115.119.197]
 10   135 ms   137 ms   134 ms  algar-ic-328625-boca-b1.c.telia.net [213.248.97.149]
 11     *        *        *     Request timed out.
 12   246 ms   244 ms   245 ms  ae7-0.ptx-b.ula001.algartelecom.com.br [170.84.32.5]
 13     *        *        *     Request timed out.
 14     *        *        *     Request timed out.
 15   256 ms   255 ms   257 ms  200-170-133-098.static.ctbctelecom.com.br [200.170.133.98]
 16     *        *        *     Request timed out.
 17     *        *        *     Request timed out.
 18     *        *        *     Request timed out.
 19   261 ms   261 ms   261 ms  vpn-pr.planalto.gov.br [170.246.252.2]
 20   257 ms   255 ms   255 ms  170.246.252.243

Trace complete.
```

Widzimy, że nasz pakiet powędrował za granicę przez Poznań, a zaraz przed końcowym server trafił na coś co wygląda jak sieć VPN oraz że kilka serwerów nie odpowiedziało nam (a przynajmniej nie zrobiły tego w określonym w wywolaniu czasie pięciu sekund).

### Wnioski

Jest to dość ciekawy program ale jak na razie, poza faktem, że możemy się dowiedzieć gdzie wędrują nasze pakiety z czystej ciekawości, nie widze innych zastosowań.

## WireShark

### Opis

WireShark to program służący do analizy ruchu sieciowego (np. na naszym Wi-Fi). Pokazuje nam on listę przechodzących przez sieć pakietów wraz z informacjami na ich temat oraz umożliwia filtrowanie widocznych danych, a to wszystko z graficznym interfejsem użytkownika.

### Wnioski

Program jest zdecydowanie przydatny gdy w naszej sieci coś nie działa, bądź gdy chcemy dokładnie przeanalilzować jej aktywności.
