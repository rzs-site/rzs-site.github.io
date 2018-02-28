---
layout: default
---
Generator planu
---

<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  var input, filter, table, tr, td, i;
  input = "(cz) 12:00";
  filter = input.value.toUpperCase();
  table = document.getElementById("tabelaHTML");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script>


<table cellpadding="0" cellspacing="0" border="0" class="display" id="tabelaHTML" ><thead>

		<tr>
			<th>Kod kursu</th>
			<th>Kod grupy</th>
			<th>Nazwa</th>
			<th style="width: 110px;">Termin</th>
			<th>Prowadzący</th>
			<th>Wolne miejsca</th>
			<th>ZZU</th>
			<th>Stacjonarne</th>
			<th>Stopień studiów</th>
			<th>Uwagi</th>
		</tr>
	</thead>
	<tbody>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-4J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 12:00-13:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v12-6J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v12-DZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 21:00-22:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003212C</td>
			<td>v02-1H</td>
			<td>Shape</td>
			<td style="width: 110px;">(wt) 08:00-09:30<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy oraz czyste, zmienne obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013212C</td>
			<td>v12-3H</td>
			<td>Shape</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia. Wymagany wygodny strój sportowy oraz czyste, zmienne obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005052C</td>
			<td>v04-3K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(cz) 13:00-14:30<br/> KORTY (GEM)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015052C</td>
			<td>v13-3K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(sr) 13:00-14:30<br/> KORTY (GEM)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035052C</td>
			<td>w04-3K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(cz) 13:00-14:30<br/> KORTY (GEM)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-1R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Terminy wyjazdów: 3-4 marzec, 10 marzec, 14-15 kwiecien 2018r. Zebranie organizacyjne w dniu 21 lutego (sroda) o godz. 19.30 w Studium Wychowania Fizycznego i Sportu , ul. Chelmonskiego 16, sala 32. Orientacyjne wydatki zwiazane z realizacja kursu (przejazdy, noclegi, przewodnik): 200 PLN.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-6R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-3R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">15</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy w Masyw Slezy 16 czerwca 2018r. Zbiórka w Sobótce o godz.9.00 na przystanku autobusowym PKS pl. ks. Józefa Belcha, obok kosciola. Dojazd we wlasnym zakresie lub liniami np: &quot;Polbus&quot;. Zakonczenie zajec w godzinach popoludniowych.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004082C</td>
			<td>v06-1U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 14 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32.  Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10u</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 506 (H-4)<br/>(sr) 07:30-09:00<br/> 412 (H-4)<br/></td>
			<td>Mgr Frankiewicz Iwona<br/>Mgr Grusiecka Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW003143C</td>
			<td>v02-0V</td>
			<td>Wspinaczka linowa</td>
			<td style="width: 110px;">(wt) 08:00-09:30<br/> SCIANA (UW)<br/></td>
			<td>Mgr inz. Zak Andrzej<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagane dowolne ubranie sportowe, buty sportowe, 2m alpinistycznej linki pomocniczej fi(3-6mm) lub 2m tasmy alpinistycznej
szerokosci 10-30mm. Koszt okolo 10zl w sklepach górskich i alpinistycznych.</td>
			</tr>
	<tr class="gradeX">
			<td>FLH002378W</td>
			<td>H00-04b</td>
			<td>Etyka nowych technologii...</td>
			<td style="width: 110px;"></td>
			<td>Dr Kotowski Mateusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">Kurs e-learningowy prowadzony przez dr. Mateusza Kotowskiego, wiecej informacji na temat kursu znajduje sie na stronie projektu Mloda Kadra 2015+ ( www.mk2015.pwr.wroc.pl), w ramach którego kurs zostal utworzony. Warunki zaliczenia zostana podane przez wykladowców na obowiazkowym spotkaniu organizacyjnym. O terminie spotkania prowadzacy poinformuje studentów mailowo.  </td>
			</tr>
	<tr class="gradeX">
			<td>WFW035033C</td>
			<td>w03-6NL</td>
			<td>Pilka siatkowa /z</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] </td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w02-6J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 11:00-12:00<br/> BASEN (GEM)<br/>(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie od 17 kwietnia. Odbywaja sie dwa razy w tygodniu we wtorki 14:00-15:00 oraz w czwartki 11:00-12:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003252C</td>
			<td>v05-2TS</td>
			<td>Nordic walking</td>
			<td style="width: 110px;">(pt) 09:50-11:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie z budynku P-2 SWFiS ul. Chelmonskiego 16. Zbiórka przy portierni. Pierwsze zajecia, to obowiazkowe
zebranie informacyjno-organizacyjne w godzinach zajec. Kije bezplatnie udostepnia Studium WFiS.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-1Z1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-2J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW002045C</td>
			<td>v03-8C</td>
			<td>Karate /s</td>
			<td style="width: 110px;">(sr) 20:30-22:00<br/> C (P-2)<br/></td>
			<td>Dr inz. Okon Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006012C</td>
			<td>v04-8G</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(cz) 19:30-21:00<br/> HALA (UM-SWF)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v01-7B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v03-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003050C</td>
			<td>v04-4B</td>
			<td>Kulturystyka /korekcja</td>
			<td style="width: 110px;">(cz) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs adresowany szczególnie do tych studentów, u których w wyniku przeprowadzonych badan postawy ciala zdiagnozowano
nieprawidlowosci.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003051C</td>
			<td>v03-3B</td>
			<td>Kulturystyka /obwód</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia typu &quot;cardio&quot;, uczestnicy beda zobowiazani do realizacji programu cwiczen opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v05-6J11</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v05-7J11</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 15:00-16:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014031C</td>
			<td>v15-5J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 13 kwietnia.  Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003252C</td>
			<td>v02-3TS</td>
			<td>Nordic walking</td>
			<td style="width: 110px;">(wt) 11:50-13:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Pierwsze zajecia odbywaja sie w sali 32 w Studium WFiS, ul. Chelmonskiego 16. Kije bezplatnie udostepnia Studium WFiS.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003242C</td>
			<td>v03-1C1</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 08:50-10:20<br/> C (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015032C</td>
			<td>v13-6NP</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Zajecia w pierwszej polowie semestru do 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-CZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 20:00-21:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v12-DZ11</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 21:00-22:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 17 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003212C</td>
			<td>v05-4C</td>
			<td>Shape</td>
			<td style="width: 110px;">(pt) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW012071C</td>
			<td>v11-3C</td>
			<td>Tai Chi</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> C (P-2)<br/></td>
			<td>Dr inz. Araszkiewicz Michal<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 23 kwietnia. Wskazany dowolny, wygodny strój sportowy. Na sali &quot;C&quot; cwiczymy boso!</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v05-4H</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 12:40-14:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v05-4H1</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 12:40-14:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v05-5H1</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 14:20-15:50<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015042C</td>
			<td>v11-4NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> NP (P-22)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 23 kwietnia. Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW025042C</td>
			<td>v26-7NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;"></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">8</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Sprzet do gry zapewnia Studium. Terminy zajec: 24 luty oraz 7,14, 21 kwiecien 2018r. godzina 19:00-20:30. Zajecia w hali sportowej ul. Chelmonskiego 12.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-2R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Terminy wyjazdów: 3-4 marzec, 10 marzec, 14-15 kwiecien 2018r. Zebranie organizacyjne w dniu 21 lutego (sroda) o godz. 19.30 w Studium Wychowania Fizycznego i Sportu , ul. Chelmonskiego 16, sala 32. Orientacyjne wydatki zwiazane z realizacja kursu (przejazdy, noclegi, przewodnik): 200 PLN.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-4R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">2</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy w Masyw Slezy 19 maja 2018r. Zbiórka w Sobótce o godz.9.00 na przystanku autobusowym PKS pl. ks. Józefa Belcha, obok kosciola. Dojazd we wlasnym zakresie lub liniami np: &quot;Polbus&quot;. Zakonczenie zajec w godzinach popoludniowych.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036042C</td>
			<td>w02-6NL</td>
			<td>Unihokej</td>
			<td style="width: 110px;">(wt) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie ubioru do zespolowych gier sportowych oraz obuwia do sportów halowych z
podeszwa kauczukowa. Zajecia na hali sportowej z bandami.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004062C</td>
			<td>v02-3H1</td>
			<td>Wioslarstwo</td>
			<td style="width: 110px;">(wt) 12:00-13:30<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Szymerowski Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">W pierwszej czesci semestru zajecia odbywac sie beda na ergometrach i w basenie wioslarskim. W drugiej czesci w lodzi wioslarskiej na Odrze. Wymagany jest przylegajacy strój sportowy. Zajecia dla osób bez jakichkolwiek problemów zdrowotnych.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013142C</td>
			<td>v13-2V</td>
			<td>Wspinaczka</td>
			<td style="width: 110px;">(sr) 11:00-12:30<br/> SCIANA (UW)<br/></td>
			<td>Lic. Szczepaniec Agnieszka<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Wymagany strój sportowy, specjalistyczne obuwie, uprzaz wspinaczkowa oraz woreczek na magnezje. Istnieje mozliwosc
wypozyczenia sprzetu na miejscu.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036025C</td>
			<td>w02-4N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> N (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot; oraz butów do pilki noznej halowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w02-6J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> BASEN (GEM)<br/>(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie 17 kwietnia. Odbywaja sie dwa razy w tygodniu we wtorki 14:00-15:00 oraz w srody 9:00-10:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w03-2J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 13:00-14:00<br/> BASEN (GEM)<br/>(sr) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie od 11 kwietnia. Odbywaja sie dwa razy w tygodniu w srody 10:00-11:00 oraz w piatki 13:00-14:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w04-3B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 12:20-13:50<br/> B (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64s</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 213 (H-4)<br/>(wt) 07:30-09:00<br/> 308 (H-4)<br/></td>
			<td>Mgr Fyall Michael<br/>Mgr Romanczuk Urszula<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w02-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035043C</td>
			<td>w04-6NP1</td>
			<td>Tenis stolowy /z</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Grupa zaawansowana. Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dj</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 07:30-09:00<br/> 312 (H-4)<br/></td>
			<td>Mgr Szczepanowska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dl</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 203 (H-4)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dm</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 501 (H-4)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08by</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ba</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Licznerska Agnieszka<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bo</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Tomala Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dg</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 212 (C-2)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08be</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08u</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 09:15-10:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08du</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 213 (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08as</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ao</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 208 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ah</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08al</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ce</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 112A (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cf</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 112A (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bs</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 111 (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08y</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 512 (H-4)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ad</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08af</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 17:05-18:35<br/> 512 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62r</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 810 (D-20)<br/>(sr) 13:15-14:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62x</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 112A (H-4)<br/>(wt) 17:05-18:35<br/> 302 (C-7)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bk</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 112B (H-4)<br/>(sr) 17:05-18:35<br/> 314 (H-4)<br/></td>
			<td>Mgr Krzos Agnieszka<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bp</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 302 (C-7)<br/>(sr) 15:15-16:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bq</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 403 (C-7)<br/>(sr) 11:15-12:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Licznerska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bt</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 111 (H-4)<br/>(wt) 15:15-16:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Martynowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50f</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 314 (H-4)<br/>(sr) 13:15-14:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Florczyk Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50h</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 201 (H-4)<br/>(wt) 09:15-10:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50q</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 209 (H-4)<br/>(pn) 11:15-12:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Grygorowicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dm</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 203 (H-4)<br/>(sr) 07:30-09:00<br/> 314 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ar</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 210 (H-4)<br/>(wt) 15:15-16:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50at</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 213 (H-4)<br/>(sr) 15:15-16:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dr</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 203 (H-4)<br/>(sr) 07:30-09:00<br/> 209 (H-4)<br/></td>
			<td>Dr Zwiefka Maria<br/>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">4</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ax</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 213 (H-4)<br/>(pt) 13:15-14:45<br/> 308 (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bg</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 317 (H-4)<br/>(wt) 09:15-10:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63n</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(sr) 11:15-12:45<br/> 302 (C-7)<br/>(wt) 07:30-09:00<br/> 317 (H-4)<br/></td>
			<td>Mgr Morawska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63e</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 308 (H-4)<br/>(pn) 11:15-12:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64m</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 313 (H-4)<br/>(pn) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Kasprzak Renata<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64f</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 201 (H-4)<br/>(pn) 07:30-09:00<br/> 512 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19b</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz TN) 09:15-10:45<br/> 205 (H-4)<br/>(pn) 09:15-10:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Dmowska Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19e</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt TN) 15:15-16:45<br/> 416 (H-4)<br/>(wt) 13:15-14:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Dylewska Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29a</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 411 (H-4)<br/>(wt) 09:15-10:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Bednarczuk Jacek<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29c</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 205 (H-4)<br/>(pn) 11:15-12:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Skowronek Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29d</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 205 (H-4)<br/>(sr) 13:15-14:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Setkowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100694C</td>
			<td>L00-51a</td>
			<td>Jezyk hiszpanski / A2</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 413 (H-4)<br/>(sr) 07:30-09:00<br/> 203 (C-7)<br/></td>
			<td>Mgr Zalewska Magdalena<br/></td>
			<td class="center">4</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100688C</td>
			<td>L00-52a</td>
			<td>Jezyk japonski / A1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 205 (H-4)<br/>(sr) 17:05-18:35<br/> 205 (H-4)<br/></td>
			<td>Dr Ota Toyotaka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia prowadzone w jezyku angielskim. This course is taught in English.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100524C</td>
			<td>L00-53a</td>
			<td>Jezyk japonski / A1</td>
			<td style="width: 110px;">(pn TP) 17:05-18:35<br/> 205 (H-4)<br/>(sr) 18:45-20:15<br/> 205 (H-4)<br/></td>
			<td>Dr Ota Toyotaka<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia prowadzone w jezyku angielskim. This course is taught in English.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07o</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TN) 11:15-12:45<br/> 106 (H-4)<br/>(sr) 09:15-10:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07u</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 412 (H-4)<br/>(pn TP) 11:15-12:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07v</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 412 (H-4)<br/>(pn TN) 11:15-12:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10k</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 411 (H-4)<br/>(sr) 17:05-18:35<br/> 411 (H-4)<br/></td>
			<td>Mgr Rzeminski Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10n</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 416 (H-4)<br/>(wt) 11:15-12:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Bloch Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10m</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 814 (D-20)<br/>(wt) 07:30-09:00<br/> 412 (H-4)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10f</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 402 (H-4)<br/>(wt) 07:30-09:00<br/> 814 (D-20)<br/></td>
			<td>Mgr Frymar Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09d</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz TP) 11:15-12:45<br/> 416 (H-4)<br/>(wt) 09:15-10:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100696C</td>
			<td>L00-17b</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 814 (D-20)<br/>(pn) 17:05-18:35<br/> 402 (H-4)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09f</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 412 (H-4)<br/>(sr TN) 15:15-16:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">3</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100696C</td>
			<td>L00-17a</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 416 (H-4)<br/>(wt) 13:15-14:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Radomska Elzbieta<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56f</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 203 (C-7)<br/>(pt TP) 17:05-18:35<br/> 413 (H-4)<br/></td>
			<td>Mgr Klyus Julia<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW033242C</td>
			<td>w03-1C1</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 08:50-10:20<br/> C (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033203C</td>
			<td>w01-5C</td>
			<td>ABT</td>
			<td style="width: 110px;">(pn) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój. Na sali C cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033022C</td>
			<td>w02-5C</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w05-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033051C</td>
			<td>w03-3B</td>
			<td>Kulturystyka /obwód</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia typu &quot;cardio&quot;, uczestnicy beda zobowiazani do realizacji programu cwiczen opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w04-0Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w04-4J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 12:00-13:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033073C</td>
			<td>w01-3H</td>
			<td>Stretch-one</td>
			<td style="width: 110px;">(pn) 13:10-14:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy oraz czyste, zmienne obuwie sportowe. Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035052C</td>
			<td>w03-4K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(sr) 14:30-16:00<br/> KORTY (GEM)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-0R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Samolyk Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie informacyjne 20 lutego (wtorek) o godz. 19.30 w sali 32 SWFiS ul. Chelmonskiego 16. Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-9R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW033092C</td>
			<td>w06-1T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Terminy wyjazdów: 25.03 (wyjazd poprzedzony spotkaniem organizacyjnym o godz. 10 na parkingu przed Studium WFiS ul. Chelmonskiego 16),7.04, 15.04, 12.05, 19.05. 2018r.
Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034062C</td>
			<td>w02-3H1</td>
			<td>Wioslarstwo</td>
			<td style="width: 110px;">(wt) 12:00-13:30<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Szymerowski Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">W pierwszej czesci semestru zajecia odbywac sie beda na ergometrach i w basenie wioslarskim. W drugiej czesci w lodzi wioslarskiej na Odrze. Wymagany jest przylegajacy strój sportowy. Zajecia dla osób bez jakichkolwiek problemów zdrowotnych.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033074C</td>
			<td>w04-3C</td>
			<td>Zdrowe plecy</td>
			<td style="width: 110px;">(cz) 12:20-13:50<br/> C (P-2)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wskazany dowolny, wygodny strój sportowy. Na sali &quot;C&quot; cwiczymy boso! Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015012C</td>
			<td>v15-4N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(pt) 14:30-16:00<br/> N (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 13 kwietnia. Wymagana jest wlasna rakieta.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005015C</td>
			<td>v02-8L</td>
			<td>Badminton /s</td>
			<td style="width: 110px;">(cz) 20:00-21:30<br/> SQ (HLV)<br/>(wt) 20:00-21:30<br/> SQ (HLV)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013104C</td>
			<td>v12-2H1</td>
			<td>bodyART</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 17 kwietnia. BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW001024C</td>
			<td>v01-632</td>
			<td>Brydz sportowy /s</td>
			<td style="width: 110px;">(pn) 17:00-20:00<br/> 32 (P-2)<br/></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003022C</td>
			<td>v04-6H</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(cz) 17:00-18:30<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033087C</td>
			<td>w02-7H</td>
			<td>Cuban Salsa Fit</td>
			<td style="width: 110px;">(wt) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój i obuwie sportowe. </td>
			</tr>
	<tr class="gradeX">
			<td>WFW006025C</td>
			<td>v02-2N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> N (P-22)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot; oraz butów do pilki noznej halowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003034C</td>
			<td>v03-7B</td>
			<td>Jezdziectwo /s</td>
			<td style="width: 110px;">(sr) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 28 lutego o godz.19.00 w SWFiS PWr. ul.Chelmonskiego 16, sala 32. O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003042C</td>
			<td>v03-3TS</td>
			<td>Jogging</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> PARK (WROC)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazuje wygodne obuwie sportowe oraz strój sportowy uwzgledniajacy warunki pogodowe. Zbiórka w Studium WFiS,
ul.Chelmonskiego 16.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW002032C</td>
			<td>v04-7C</td>
			<td>Judo - ABC</td>
			<td style="width: 110px;">(cz) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Inz. Kielbus Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany dres lub judoga i &quot;japonki&quot;. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v02-2B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v04-3B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 12:20-13:50<br/> B (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v05-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v05-7B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003222C</td>
			<td>v02-4C</td>
			<td>Modelowanie ciala</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Na sali C cwiczymy boso. Wymagany wygodny strój sportowy (dlugie spodnie).</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013222C</td>
			<td>v13-5C</td>
			<td>Modelowanie ciala</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Na sali C cwiczymy boso. Wymagany wygodny strój sportowy (dlugie spodnie).</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v03-1J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013242C</td>
			<td>v11-4C</td>
			<td>Pilates</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 23 kwietnia. Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005033C</td>
			<td>v03-6NL</td>
			<td>Pilka siatkowa /z</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Kurs adresowany dla osób, które dobrze opanowaly podstawowe elementy
techniki indywidualnej i taktyki gry zespolowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v02-6J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> BASEN (GEM)<br/>(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">2</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie 17 kwietnia. Odbywaja sie dwa razy w tygodniu we wtorki 14:00-15:00 oraz w srody 9:00-10:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v02-CZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 20:00-21:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004034C</td>
			<td>v02-CZ</td>
			<td>Plywanie /s</td>
			<td style="width: 110px;">(cz) 20:00-21:00<br/> 1 (WCSPA)<br/>(wt) 20:00-21:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034033C</td>
			<td>w02-BZ</td>
			<td>Plywanie /z</td>
			<td style="width: 110px;">(wt) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs przeznaczony dla osób bardzo dobrze plywajacych co najmniej trzema stylami. Wymagany strój kapielowy, czepek, klapki oraz
mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006051C</td>
			<td>v03-4TS</td>
			<td>Rugby - podstawy</td>
			<td style="width: 110px;">(sr) 13:30-15:00<br/> PARK (WROC)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Wymogi: ubiór dostosowany do pogody, buty pilkarskie z kolkami, szorty i koszulka z mocnego materialu. Pierwsze zajecia odbeda
sie w formie zebrania organizacyjnego/wykladu w sali 32 w SWFiS, ul. Chelmonskiego 16. Zajecia odbywaja sie niezaleznie od pogody na
boisku przy walach na Biskupinie - dojscie od ul. Rodakowskiego.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v03-2NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013152C</td>
			<td>v16-6R2</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zebranie organizacyjne do wyboru: czwartek 22 lutego 2018r. godz. 19.00  sala konferencyjna 32 w Studium WFiS ul. Chelmonskiego 16 lub 26 luty 2018r. poniedzialek o godz. 20:45 w Hali Sportowej ul. Chelmonskiego 12. Przewidywane sa trzy wyjazdy jednodniowe 21 lub 22 kwietnia (Rudawy Janowickie), 12 lub 13 maja (Góry Stolowe), 26 lub 27 maja (Karkonosze).
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-1R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">32</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy 25 marca (niedziela) 2018r. do Sobótki - Masyw Slezy. Zbiórka o godz. 9.00 przy schronisku &quot;Pod Wiezyca&quot;. Dojazd we wlasnym zakresie. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-5R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">4</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy 10 marca (sobota) 2018r. do Sobótki - Masyw Slezy. Zbiórka o godz. 9.00 przy schronisku &quot;Pod Wiezyca&quot;. Dojazd we wlasnym zakresie. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-8R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">4</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy 17 marca (sobota) 2018r. do Sobótki - Masyw Slezy. Zbiórka o godz. 9.00 przy schronisku &quot;Pod Wiezyca&quot;. Dojazd we wlasnym zakresie. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013142C</td>
			<td>v13-2V1</td>
			<td>Wspinaczka</td>
			<td style="width: 110px;">(sr) 11:00-12:30<br/> SCIANA (UW)<br/></td>
			<td>Lic. Szczepaniec Agnieszka<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 11 kwietnia. Wymagany strój sportowy, specjalistyczne obuwie, uprzaz wspinaczkowa oraz woreczek na magnezje. Istnieje mozliwosc
wypozyczenia sprzetu na miejscu.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036025C</td>
			<td>w02-2N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> N (P-22)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] </td>
			</tr>
	<tr class="gradeX">
			<td>WFW006012C</td>
			<td>v02-5NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w01-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31w</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Romanczuk Urszula<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018. The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w02-3B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> B (P-2)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035032C</td>
			<td>w01-5NL</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(pn) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] .</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w03-3J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 11:00-12:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100531C</td>
			<td>L00-60a</td>
			<td>Jezyk angielski / B1.1</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 203 (H-4)<br/>(sr TP) 11:15-12:45<br/> 209 (H-4)<br/></td>
			<td>Dr Zwiefka Maria<br/></td>
			<td class="center">4</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cn</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cg</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 210 (H-4)<br/></td>
			<td>Mgr Wiszniowska Zuzanna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bv</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bx</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 15:15-16:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bz</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08aw</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08o</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 15:15-16:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08aq</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 317 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ds</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 09:15-10:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Pytel Dorota<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bd</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 501 (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cs</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62ae</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 317 (H-4)<br/>(sr) 09:15-10:45<br/> 209 (H-4)<br/></td>
			<td>Dr Zwiefka Maria<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50t</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 317 (H-4)<br/>(sr) 09:15-10:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Gwizdala Grazyna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bn</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 512 (H-4)<br/>(wt) 17:05-18:35<br/> 512 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cv</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 203 (H-4)<br/>(pn) 15:15-16:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50b</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 213 (H-4)<br/>(pt) 13:15-14:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Dudzinska Jolanta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dq</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 210 (H-4)<br/>(pt) 09:15-10:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Wiszniowska Zuzanna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50da</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 208 (H-4)<br/>(sr) 09:15-10:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Szczawinska Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50az</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 308 (H-4)<br/>(sr) 09:15-10:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ds</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 112A (H-4)<br/>(wt) 13:15-14:45<br/> 308 (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50n</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 210 (H-4)<br/>(sr) 13:15-14:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Golka Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31i</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 112B (H-4)<br/></td>
			<td>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63v</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 302 (C-7)<br/>(pt) 17:05-18:35<br/> 314 (H-4)<br/></td>
			<td>Mgr Zajaczkowska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63r</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 512 (H-4)<br/>(pn) 18:45-20:15<br/> 317 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63y</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 203 (H-4)<br/>(sr) 18:45-20:15<br/> 203 (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64e</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 112A (H-4)<br/>(sr) 15:15-16:45<br/> 308 (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64j</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 208 (H-4)<br/>(sr) 11:15-12:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64c</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 209 (H-4)<br/>(wt) 11:15-12:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW033803C</td>
			<td>w05-5C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(pt) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19h</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt TP) 07:30-09:00<br/> 411 (H-4)<br/>(sr) 07:30-09:00<br/> 413 (H-4)<br/></td>
			<td>Mgr Paron Zofia<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18g</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 413 (H-4)<br/>(wt) 11:15-12:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19j</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz TN) 13:15-14:45<br/> 413 (H-4)<br/>(wt) 15:15-16:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29b</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 205 (H-4)<br/>(pn) 09:15-10:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Skowronek Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30b</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz TP) 07:30-09:00<br/> 411 (H-4)<br/>(pn) 09:15-10:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Bednarczuk Jacek<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30g</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz TN) 15:15-16:45<br/> 411 (H-4)<br/>(wt) 18:45-20:15<br/> 411 (H-4)<br/></td>
			<td>Mgr Setkowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29g</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 413 (H-4)<br/>(wt) 11:15-12:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Zalewska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07z</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 411 (H-4)<br/>(wt TN) 13:15-14:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Stanislawczyk Halina<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07al</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TN) 15:15-16:45<br/> 411 (H-4)<br/>(sr) 18:45-20:15<br/> 412 (H-4)<br/></td>
			<td>Mgr Stanislawczyk Halina<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07l</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TN) 07:30-09:00<br/> 814 (D-20)<br/>(wt) 09:15-10:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Izykowska-Staruch Marta<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10r</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 416 (H-4)<br/>(wt) 15:15-16:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Radomska Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07b</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TN) 13:15-14:45<br/> 106 (H-4)<br/>(sr) 13:15-14:45<br/> 106 (H-4)<br/></td>
			<td>Doc. dr Modrzycka Irina<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07c</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TN) 11:15-12:45<br/> 106 (H-4)<br/>(wt) 09:15-10:45<br/> 106 (H-4)<br/></td>
			<td>Doc. dr Modrzycka Irina<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07g</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TP) 11:15-12:45<br/> 106 (H-4)<br/>(wt) 11:15-12:45<br/> 106 (H-4)<br/></td>
			<td>Doc. dr Modrzycka Irina<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07e</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TP) 11:15-12:45<br/> 412 (H-4)<br/>(sr) 11:15-12:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07h</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TN) 11:15-12:45<br/> 412 (H-4)<br/>(sr) 13:15-14:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10e</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 416 (H-4)<br/>(pn) 13:15-14:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07aa</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TP) 15:15-16:45<br/> 411 (H-4)<br/>(sr) 17:05-18:35<br/> 412 (H-4)<br/></td>
			<td>Mgr Stanislawczyk Halina<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10o</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 402 (H-4)<br/>(wt) 09:15-10:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Frymar Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ak</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 412 (H-4)<br/>(wt TN) 17:05-18:35<br/> 106 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09e</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 412 (H-4)<br/>(sr TP) 15:15-16:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09c</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz TN) 07:30-09:00<br/> 416 (H-4)<br/>(wt) 17:05-18:35<br/> 814 (D-20)<br/></td>
			<td>Mgr Kania Anna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100427C</td>
			<td>L00-90b</td>
			<td>Jezyk niemiecki / B1.1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 416 (H-4)<br/>(pn TP) 09:15-10:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Lazowska Krystyna<br/></td>
			<td class="center">5</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11g</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(wt TN) 13:15-14:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Bloch Anna<br/></td>
			<td class="center">4</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs dla studentów wszystkich wydzialów. The course for all faculties.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11a</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(sr TN) 09:15-10:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Frymar Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs przede wszystkim dla W1 i W2. The course dedicated mainly to W1 i W2.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100433C</td>
			<td>L00-21b</td>
			<td>Jezyk niemiecki / B2.1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 402 (H-4)<br/>(wt) 13:15-14:45<br/> 106 (H-4)<br/></td>
			<td>Mgr Kania Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100434C</td>
			<td>L00-22d</td>
			<td>Jezyk niemiecki / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 412 (H-4)<br/>(sr) 07:30-09:00<br/> 411 (H-4)<br/></td>
			<td>Mgr Frymar Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100448C</td>
			<td>L00-23a</td>
			<td>Jezyk niemiecki / C1.1</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 416 (H-4)<br/>(wt) 18:45-20:15<br/> 416 (H-4)<br/></td>
			<td>Mgr Lazowska Krystyna<br/>Mgr Strach Jan<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56c</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 205 (H-4)<br/>(sr TP) 07:30-09:00<br/> 205 (H-4)<br/></td>
			<td>Mgr Kotlarczyk Elena<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56d</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz TP) 07:30-09:00<br/> 203 (C-7)<br/>(pn) 07:30-09:00<br/> 205 (H-4)<br/></td>
			<td>Mgr Lesiak Natalia<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100690C</td>
			<td>L00-55b</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 205 (H-4)<br/>(sr) 13:15-14:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Lesiak Natalia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100697C</td>
			<td>L00-65a</td>
			<td>Jezyk rosyjski / A2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 203 (C-7)<br/>(wt) 13:15-14:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Lesiak Natalia<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100528C</td>
			<td>L00-58a</td>
			<td>Jezyk rosyjski / B2+</td>
			<td style="width: 110px;">(sr TN) 15:15-16:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Lesiak Natalia<br/></td>
			<td class="center">2</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW033042C</td>
			<td>w01-4TS</td>
			<td>Jogging</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazuje wygodne obuwie sportowe oraz strój sportowy uwzgledniajacy warunki pogodowe. Zbiórka w Studium WFiS,
ul.Chelmonskiego 16. przy portierni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003803C</td>
			<td>v02-2C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> C (P-2)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003803C</td>
			<td>v03-2C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w02-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033222C</td>
			<td>w02-4C</td>
			<td>Modelowanie ciala</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Na sali C cwiczymy boso. Wymagany wygodny strój sportowy (dlugie spodnie).</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w05-7J11</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 15:00-16:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033252C</td>
			<td>w02-3TS</td>
			<td>Nordic walking</td>
			<td style="width: 110px;">(wt) 11:50-13:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Pierwsze zajecia odbywaja sie w sali 32 w Studium WFiS, ul. Chelmonskiego 16. Kije bezplatnie udostepnia Studium WFiS.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035032C</td>
			<td>w03-5N</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> N (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] .</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033212C</td>
			<td>w02-1H</td>
			<td>Shape</td>
			<td style="width: 110px;">(wt) 08:00-09:30<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy oraz czyste, zmienne obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-7R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW033092C</td>
			<td>w06-2T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Pierwsze spotkanie oraz wyjazd odbedzie sie 21 kwietnia o godz. 10.00 ze SWFiS PWr. ul. Chelmonskiego 16. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035012C</td>
			<td>w04-4N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(cz) 13:50-15:20<br/> N (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033104C</td>
			<td>w04-5C</td>
			<td>bodyART</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy, cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW011022C</td>
			<td>v12-3321</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> 32 (P-2)<br/></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">6</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 13 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003087C</td>
			<td>v02-7H</td>
			<td>Cuban Salsa Fit</td>
			<td style="width: 110px;">(wt) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój i obuwie sportowe. </td>
			</tr>
	<tr class="gradeX">
			<td>WFW002018C</td>
			<td>v01-5NP</td>
			<td>Kendo</td>
			<td style="width: 110px;">(pn) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr inz. Biel Wieslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany jest luzny strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006012C</td>
			<td>v04-5NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013051C</td>
			<td>v14-7B</td>
			<td>Kulturystyka /obwód</td>
			<td style="width: 110px;">(cz) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 19 kwietnia. Zajecia typu &quot;cardio&quot;, uczestnicy beda zobowiazani do realizacji programu cwiczen opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v04-4J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 12:00-13:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004082C</td>
			<td>v06-4U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 15 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003145C</td>
			<td>v02-1V</td>
			<td>Wspinaczka linowa /s</td>
			<td style="width: 110px;">(wt) 09:30-11:00<br/> SCIANA (UW)<br/></td>
			<td>Mgr inz. Zak Andrzej<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW021022C</td>
			<td>v26-432</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;"></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">14</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Zajecia w dniach 12 i 26 maja od 19.00 do 22.00 ul. Chelmonskiego 16, sala 32.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31u</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 208 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018. The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005012C</td>
			<td>v05-6N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(pt) 17:40-19:10<br/> N (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-5J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036013C</td>
			<td>w03-5NL</td>
			<td>Koszykówka /z</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v04-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w04-5J2</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013042C</td>
			<td>v13- 2TS</td>
			<td>Jogging</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> TRASY (TEREN)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">4</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia.  Obowiazuje wygodne obuwie sportowe oraz strój sportowy uwzgledniajacy warunki pogodowe. Zbiórka w Studium WFiS,
ul.Chelmonskiego 16 przy glównej portierni.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08k</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 17:05-18:35<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bi</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 112B (H-4)<br/></td>
			<td>Mgr Piotrowska Kinga<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ak</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08br</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cx</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 302 (C-7)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08s</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 213 (H-4)<br/></td>
			<td>Mgr Dudzinska Jolanta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cb</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 07:30-09:00<br/> 201 (H-4)<br/></td>
			<td>Mgr Zajaczkowska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cu</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 302 (C-7)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dq</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62n</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 317 (H-4)<br/>(wt) 11:15-12:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Romanczuk Urszula<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62h</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 512 (H-4)<br/>(sr) 11:15-12:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dl</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 112B (H-4)<br/>(sr) 13:15-14:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bv</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 111 (H-4)<br/>(pn) 09:15-10:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Martynowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cr</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 512 (H-4)<br/>(sr) 09:15-10:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Romanczuk Urszula<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50a</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 313 (H-4)<br/>(wt) 18:45-20:15<br/> 213 (H-4)<br/></td>
			<td>Mgr Baka Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50aa</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 313 (H-4)<br/>(wt) 17:05-18:35<br/> 213 (H-4)<br/></td>
			<td>Mgr Baka Barbara<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bb</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 312 (H-4)<br/>(wt) 11:15-12:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Kasprzak Renata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50k</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 512 (H-4)<br/>(wt) 13:15-14:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50m</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 112A (H-4)<br/>(sr) 09:15-10:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50df</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 314 (H-4)<br/>(wt) 07:30-09:00<br/> 403 (C-7)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50do</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 210 (H-4)<br/>(sr) 15:15-16:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Wiszniowska Zuzanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50db</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 314 (H-4)<br/>(wt) 07:30-09:00<br/> 210 (H-4)<br/></td>
			<td>Mgr Szczawinska Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bi</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 111 (H-4)<br/>(pt) 17:05-18:35<br/> 213 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ck</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 210 (H-4)<br/>(wt) 17:05-18:35<br/> 112B (H-4)<br/></td>
			<td>Mgr Piotrowska Kinga<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50be</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 314 (H-4)<br/>(wt) 15:15-16:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50au</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 112B (H-4)<br/>(pn) 07:30-09:00<br/> 209 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50av</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 213 (H-4)<br/>(wt) 15:15-16:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dj</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 302 (C-7)<br/>(wt) 07:30-09:00<br/> 512 (H-4)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50w</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 201 (H-4)<br/>(wt) 07:30-09:00<br/> 209 (H-4)<br/></td>
			<td>Mgr Hamryszak-Sierpowska Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50y</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 201 (H-4)<br/>(sr) 09:15-10:45<br/> 210 (H-4)<br/></td>
			<td>Mgr Hamryszak-Sierpowska Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cb</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 111 (H-4)<br/>(wt) 15:15-16:45<br/> 501 (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cd</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(sr) 17:05-18:35<br/> 112A (H-4)<br/>(wt) 17:05-18:35<br/> 501 (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50p</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(sr) 15:15-16:45<br/> 317 (H-4)<br/>(wt) 13:15-14:45<br/> 210 (H-4)<br/></td>
			<td>Mgr Golka Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31j</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 112B (H-4)<br/></td>
			<td>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31m</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(wt) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Wolf John<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31e</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63q</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 312 (H-4)<br/>(wt) 17:05-18:35<br/> 314 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63k</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 209 (H-4)<br/>(sr) 07:30-09:00<br/> 302 (C-7)<br/></td>
			<td>Mgr Morawska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64o</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 208 (H-4)<br/>(wt) 07:30-09:00<br/> 203 (H-4)<br/></td>
			<td>Mgr Kasprzak Renata<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW003803C</td>
			<td>v05-5C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(pt) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19c</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 205 (H-4)<br/>(wt TP) 07:30-09:00<br/> 411 (H-4)<br/></td>
			<td>Mgr Dmowska Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18f</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 416 (H-4)<br/>(sr) 11:15-12:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30d</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 203 (C-7)<br/>(pt TP) 11:15-12:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Skowronek Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30e</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt TN) 11:15-12:45<br/> 413 (H-4)<br/>(sr) 07:30-09:00<br/> 416 (H-4)<br/></td>
			<td>Mgr Skowronek Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30k</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt TN) 07:30-09:00<br/> 413 (H-4)<br/>(sr) 15:15-16:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Praclawska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07s</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 412 (H-4)<br/>(wt TN) 11:15-12:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Izykowska-Staruch Marta<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07r</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TN) 09:15-10:45<br/> 402 (H-4)<br/>(pt) 17:05-18:35<br/> 412 (H-4)<br/></td>
			<td>Mgr Lazowska Krystyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10l</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 411 (H-4)<br/>(sr) 15:15-16:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Rzeminski Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100427C</td>
			<td>L00-90a</td>
			<td>Jezyk niemiecki / B1.1</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 416 (H-4)<br/>(wt TP) 13:15-14:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Stanislawczyk Halina<br/></td>
			<td class="center">6</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100429C</td>
			<td>L00-20a</td>
			<td>Jezyk niemiecki / B1.1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 814 (D-20)<br/>(wt) 07:30-09:00<br/> 416 (H-4)<br/></td>
			<td>Mgr Rzeminski Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11e</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(sr TP) 18:45-20:15<br/> 106 (H-4)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs przede wszystkim dla W3 i W7. The course dedicated mainly to W3 i W7.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11d</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(cz TN) 13:15-14:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs przede wszystkim dla W8, W11 i W13. The course dedicated mainly to W8, W11 i W13.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100434C</td>
			<td>L00-22a</td>
			<td>Jezyk niemiecki / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 814 (D-20)<br/>(pn) 11:15-12:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Izykowska-Staruch Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW036012C</td>
			<td>w01-4NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> NL (P-22)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w01-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w03-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w03-3J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 11:00-12:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036051C</td>
			<td>w03-4TS</td>
			<td>Rugby - podstawy</td>
			<td style="width: 110px;">(sr) 13:30-15:00<br/> PARK (WROC)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Wymogi: ubiór dostosowany do pogody, buty pilkarskie z kolkami, szorty i koszulka z mocnego materialu. Pierwsze zajecia odbeda
sie w formie zebrania organizacyjnego/wykladu w sali 32 w SWFiS, ul. Chelmonskiego 16. Zajecia odbywaja sie niezaleznie od pogody na
boisku przy walach na Biskupinie - dojscie od ul. Rodakowskiego.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035062C</td>
			<td>w04-2L</td>
			<td>Squash</td>
			<td style="width: 110px;">(cz) 10:30-12:00<br/> SQ (HLV)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia odbywaja sie w Centrum Squash'a &quot;Hasta La Vista&quot;, ul. Góralska 5. Na zajeciach trzeba posiadac wlasne pilki (pozostaly
sprzet czyli rakiety, gogle sa wypozyczane bezplatnie). Wymagany jest wygodny strój sportowy i czyste, zmienne obuwie sportowe z
podeszwa &quot;non-marking&quot; (nie pozostawiajace sladów na podlodze kortu!). Szczególy dotyczace kursu na pierwszych zajeciach.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-1R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Terminy wyjazdów: 3-4 marzec, 10 marzec, 14-15 kwiecien 2018r. Zebranie organizacyjne w dniu 21 lutego (sroda) o godz. 19.30 w Studium Wychowania Fizycznego i Sportu , ul. Chelmonskiego 16, sala 32. Orientacyjne wydatki zwiazane z realizacja kursu (przejazdy, noclegi, przewodnik): 200 PLN.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003203C</td>
			<td>v01-5C</td>
			<td>ABT</td>
			<td style="width: 110px;">(pn) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój. Na sali C cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003203C</td>
			<td>v03-2H</td>
			<td>ABT</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005012C</td>
			<td>v04-4N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(cz) 13:50-15:20<br/> N (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003104C</td>
			<td>v04-7H</td>
			<td>bodyART</td>
			<td style="width: 110px;">(cz) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006025C</td>
			<td>v02-3N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> N (P-22)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot; oraz butów do pilki noznej halowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006012C</td>
			<td>v01-4NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> NL (P-22)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v02-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v03-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v04-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013052C</td>
			<td>v12-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013052C</td>
			<td>v13-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v02-5J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(wt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013242C</td>
			<td>v13-3H</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013242C</td>
			<td>v13-3H1</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 11 kwietnia. Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v02-7J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 15:00-16:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-DZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 21:00-22:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v05-5J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(pt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v14-BZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 19 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015062C</td>
			<td>v14-1L</td>
			<td>Squash</td>
			<td style="width: 110px;">(cz) 09:00-10:30<br/> SQ (HLV)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 19 kwietnia. Zajecia w drugiej polowie semestru od 19 kwietnia. Zajecia odbywaja sie w Centrum Squash'a &quot;Hasta La Vista&quot;, ul. Góralska 5. Na zajeciach trzeba posiadac wlasne pilki (pozostaly
sprzet czyli rakiety, gogle sa wypozyczane bezplatnie). Wymagany jest wygodny strój sportowy i czyste, zmienne obuwie sportowe z
podeszwa &quot;non-marking&quot; (nie pozostawiajace sladów na podlodze kortu!). Szczególy dotyczace kursu na pierwszych zajeciach.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003073C</td>
			<td>v01-3H</td>
			<td>Stretch-one</td>
			<td style="width: 110px;">(pn) 13:10-14:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy oraz czyste, zmienne obuwie sportowe. Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v03-3NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005044C</td>
			<td>v02-6NP</td>
			<td>Tenis stolowy /s</td>
			<td style="width: 110px;">(cz) 18:50-20:20<br/> NP (P-22)<br/>(wt) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033803C</td>
			<td>w03-2C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-8R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zebranie organizacyjne w SWFiS ul. Chelmonskiego 16, 22 lutego 2018r. o godz.18.30 sala 32. Orientacyjny koszt przejazdu autokarami 120 zl. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013152C</td>
			<td>v16-4R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW003092C</td>
			<td>v06-1T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Terminy wyjazdów: 25.03 (wyjazd poprzedzony spotkaniem organizacyjnym o godz. 10 na parkingu przed Studium WFiS ul. Chelmonskiego 16),7.04, 15.04, 12.05, 19.05. 2018r.
Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003092C</td>
			<td>v06-2T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Pierwsze spotkanie oraz wyjazd odbedzie sie 21 kwietnia o godz. 10.00 ze SWFiS PWr. ul. Chelmonskiego 16. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006045C</td>
			<td>v02-8N</td>
			<td>Unihokej /s</td>
			<td style="width: 110px;">(cz) 20:30-22:00<br/> N (P-22)<br/>(wt) 20:30-22:00<br/> N (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW003148C</td>
			<td>v02-2V1</td>
			<td>Wspinaczka /s</td>
			<td style="width: 110px;">(sr) 09:30-11:00<br/> SCIANA (UW)<br/>(wt) 11:00-12:30<br/> SCIANA (UW)<br/></td>
			<td>Lic. Szczepaniec Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v03-2J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(pt) 13:00-14:00<br/> BASEN (GEM)<br/>(sr) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie od 11 kwietnia. Odbywaja sie dwa razy w tygodniu w srody 10:00-11:00 oraz w piatki 13:00-14:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31v</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 208 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018 The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035012C</td>
			<td>w05-6N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(pt) 17:40-19:10<br/> N (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW002032C</td>
			<td>v01-7C</td>
			<td>Judo - ABC</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Inz. Kielbus Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63ac</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 208 (H-4)<br/>(wt) 11:15-12:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW035042C</td>
			<td>w03-3NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w03-2J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cl</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08co</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cp</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dc</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 203 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dk</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 203 (H-4)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dn</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 501 (H-4)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dh</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 212 (C-2)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bh</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 112B (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ar</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 317 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bj</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 112B (H-4)<br/></td>
			<td>Mgr Piotrowska Kinga<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bt</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 111 (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">2</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08am</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 313 (H-4)<br/></td>
			<td>Mgr Pytel Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dt</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 09:15-10:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Pytel Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cc</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 13:15-14:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ac</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cv</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 302 (C-7)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62aa</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 213 (H-4)<br/>(wt) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62v</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 212 (C-2)<br/>(sr) 17:05-18:35<br/> 210 (H-4)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62am</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 210 (H-4)<br/>(sr) 17:05-18:35<br/> 313 (H-4)<br/></td>
			<td>Mgr Staszewska Teresa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62q</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 203 (H-4)<br/>(pt) 11:15-12:45<br/> 203 (C-7)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62z</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 112B (H-4)<br/>(sr) 17:05-18:35<br/> 111 (H-4)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62ag</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 203 (H-4)<br/>(pt) 07:30-09:00<br/> 212 (C-2)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bl</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(sr) 18:45-20:15<br/> 314 (H-4)<br/>(wt) 13:15-14:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Krzos Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ai</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 111 (H-4)<br/>(pn) 09:15-10:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50aj</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 302 (C-7)<br/>(sr) 07:30-09:00<br/> 111 (H-4)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dc</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 314 (H-4)<br/>(wt) 09:15-10:45<br/> 210 (H-4)<br/></td>
			<td>Mgr Szczawinska Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dd</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 312 (H-4)<br/>(sr) 07:30-09:00<br/> 308 (H-4)<br/></td>
			<td>Mgr Szczepanowska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ay</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 213 (H-4)<br/>(sr) 07:30-09:00<br/> 112A (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dk</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 302 (C-7)<br/>(wt) 09:15-10:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ab</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 308 (H-4)<br/>(pn) 15:15-16:45<br/> 501 (H-4)<br/></td>
			<td>Mgr Bednarski Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ad</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 403 (C-7)<br/>(sr) 17:05-18:35<br/> 317 (H-4)<br/></td>
			<td>Mgr Bednarski Mariusz<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cn</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(sr) 07:30-09:00<br/> 112B (H-4)<br/>(wt) 15:15-16:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Pytel Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31h</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 209 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31k</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63s</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 314 (H-4)<br/>(sr) 09:15-10:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Zajaczkowska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63j</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 209 (H-4)<br/>(wt) 09:15-10:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Mally Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63a</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 111 (H-4)<br/>(sr) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19a</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz TP) 09:15-10:45<br/> 205 (H-4)<br/>(pn) 07:30-09:00<br/> 416 (H-4)<br/></td>
			<td>Mgr Dmowska Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18e</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 416 (H-4)<br/>(sr) 13:15-14:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18c</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 411 (H-4)<br/>(sr) 09:15-10:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Paron Zofia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18d</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 411 (H-4)<br/>(sr) 11:15-12:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Paron Zofia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19g</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt TN) 13:15-14:45<br/> 416 (H-4)<br/>(sr) 17:05-18:35<br/> 413 (H-4)<br/></td>
			<td>Mgr Dylewska Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30j</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt TP) 07:30-09:00<br/> 413 (H-4)<br/>(sr) 13:15-14:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Praclawska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10q</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 106 (H-4)<br/>(sr) 09:15-10:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Kania Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10d</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 814 (D-20)<br/>(sr) 11:15-12:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Bloch Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07j</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TN) 11:15-12:45<br/> 416 (H-4)<br/>(wt) 11:15-12:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07k</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TP) 13:15-14:45<br/> 411 (H-4)<br/>(sr) 07:30-09:00<br/> 106 (H-4)<br/></td>
			<td>Mgr Frankiewicz Iwona<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07a</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 412 (H-4)<br/>(sr TP) 09:15-10:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Frymar Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10j</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 402 (H-4)<br/>(wt) 15:15-16:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Grusiecka Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ai</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TN) 15:15-16:45<br/> 402 (H-4)<br/>(pn) 07:30-09:00<br/> 411 (H-4)<br/></td>
			<td>Mgr Grusiecka Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09g</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 106 (H-4)<br/>(wt TP) 17:05-18:35<br/> 416 (H-4)<br/></td>
			<td>Mgr Strach Jan<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100429C</td>
			<td>L00-20b</td>
			<td>Jezyk niemiecki / B1.1</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 106 (H-4)<br/>(sr) 15:15-16:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100434C</td>
			<td>L00-22e</td>
			<td>Jezyk niemiecki / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 814 (D-20)<br/>(sr) 13:15-14:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Bloch Anna<br/></td>
			<td class="center">9</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100690C</td>
			<td>L00-55c</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 205 (H-4)<br/>(pn) 13:15-14:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Klyus Julia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW035012C</td>
			<td>w05-5N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(pt) 16:00-17:30<br/> N (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036025C</td>
			<td>w02-3N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> N (P-22)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot; oraz butów do pilki noznej halowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036012C</td>
			<td>w04-5NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w01-7B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w05-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w03-1J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033242C</td>
			<td>w03-6H</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 17:00-18:30<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w02-5J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035042C</td>
			<td>w04-5NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005012C</td>
			<td>v05-5N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(pt) 16:00-17:30<br/> N (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013104C</td>
			<td>v12-2H</td>
			<td>bodyART</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia. BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003022C</td>
			<td>v03-6C</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> C (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003042C</td>
			<td>v01-4TS</td>
			<td>Jogging</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazuje wygodne obuwie sportowe oraz strój sportowy uwzgledniajacy warunki pogodowe. Zbiórka w Studium WFiS,
ul.Chelmonskiego 16. przy portierni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW002048C</td>
			<td>v03-7C</td>
			<td>Karate Shotokan</td>
			<td style="width: 110px;">(sr) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Dr inz. Okon Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany jest luzny strój sportowy i &quot;japonki&quot;. Cwiczymy boso!</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006014C</td>
			<td>v01-8N</td>
			<td>Koszykówka /s</td>
			<td style="width: 110px;">(pn) 20:30-22:00<br/> N (P-22)<br/>(sr) 21:00-22:30<br/> N (P-22)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006014C</td>
			<td>v02-7N</td>
			<td>Koszykówka /s</td>
			<td style="width: 110px;">(cz) 18:50-20:20<br/> N (P-22)<br/>(wt) 18:50-20:20<br/> N (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v01-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v02-1B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 08:50-10:20<br/> B (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v05-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013052C</td>
			<td>v13-6B1</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006024C</td>
			<td>v01-8A</td>
			<td>Pilka nozna /s</td>
			<td style="width: 110px;">(pn) 20:30-22:00<br/> BOISKO (GEM)<br/>(sr) 20:30-22:00<br/> BOISKO (GEM)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v14-BZ11</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 19 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003212C</td>
			<td>v03-3C</td>
			<td>Shape</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> C (P-2)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013073C</td>
			<td>v13-7H1</td>
			<td>Stretch-one</td>
			<td style="width: 110px;">(sr) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 11 kwietnia. Wygodny strój sportowy oraz czyste, zmienne obuwie sportowe. Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v01-3NL</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v01-3NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> NP (P-22)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-7R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW013152C</td>
			<td>v16-3R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Terminy wyjazdów w Sudety: 10 i 18 marca, 22 kwietnia. Obowiazkowe zebranie organizacyjne: 22 lutego 2018r. (czwartek), godz. 20.00, w Studium WFiS, ul.Chelmonskiego 16, sala 32. Orientacyjne koszty wszystkich dojazdów autobusem w wysokosci 70,- zl.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003153C</td>
			<td>v08-1R</td>
			<td>Turystyka górska - obóz</td>
			<td style="width: 110px;"></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 22 lutego 2018r. godz. 19.00 w SWFiS ul. Chelmonskiego 16 sala 32. Termin obozu: 10-14 wrzesnia 2018r. Miejsce: Pieniny. Orientacyjny koszt obozu bez wyzywienia: zakwaterowanie 160 zl, rafting 70 zl, przejazdy na miejscu 40 zl, oplaty i bilety wstepu do PN i zamków w Czorsztynie i Nidzicy. Dojazd i wyzywienie na miejscu. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska
</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013092C</td>
			<td>v16-3T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zebranie organizacyjne i pierwszy wyjazd w sobote 28 kwietnia 2018 r. o godz 10.00, zbiórka na parkingu przy SWFiS, ul. Chelmonskiego 16. Pozostale wyjazdy: 26 maja oraz 9 czerwca. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004082C</td>
			<td>v06-3U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 15 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32.Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014062C</td>
			<td>v13-4H</td>
			<td>Wioslarstwo</td>
			<td style="width: 110px;">(sr) 13:40-15:10<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Szymerowski Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 11 kwietnia. W pierwszej czesci zajecia odbywac sie beda na ergometrach i w basenie wioslarskim. W drugiej czesci w lodzi wioslarskiej na Odrze. Wymagany jest przylegajacy strój sportowy. Zajecia dla osób bez jakichkolwiek problemów zdrowotnych.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004064C</td>
			<td>v02-0HW</td>
			<td>Wioslarstwo /s</td>
			<td style="width: 110px;">(cz) 06:15-07:45<br/> -1-13 (H-14)<br/>(wt) 06:15-07:45<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Randa Pawel<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW021022C</td>
			<td>v26-332</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;"></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">7</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Zajecia w dniu 10 marzec w godz. 10.00-16.00 ul. Chelmonskiego 16, sala 32</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w04-6B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10t</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 814 (D-20)<br/>(sr) 18:45-20:15<br/> 402 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11h</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(pt TP) 09:15-10:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs dla studentów wszystkich wydzialów. The course for all faculties.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08v</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 09:15-10:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08i</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cm</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bu</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bw</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 15:15-16:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ay</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 512 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08az</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 512 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08de</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 212 (C-2)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08p</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 15:15-16:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ap</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 208 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08an</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 313 (H-4)<br/></td>
			<td>Mgr Pytel Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bn</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 18:45-20:15<br/> 213 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cq</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">2</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62f</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 209 (H-4)<br/>(pt) 17:05-18:35<br/> 201 (H-4)<br/></td>
			<td>Mgr Czachorowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62e</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 302 (C-7)<br/>(sr) 09:15-10:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62ac</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 112A (H-4)<br/>(sr) 18:45-20:15<br/> 209 (H-4)<br/></td>
			<td>Mgr Wiszniowska Zuzanna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62y</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 112A (H-4)<br/>(wt) 18:45-20:15<br/> 302 (C-7)<br/></td>
			<td>Mgr Wardynska Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62k</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 112A (H-4)<br/>(sr) 13:15-14:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Mazurkiewicz Alicja<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bj</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 112B (H-4)<br/>(wt) 11:15-12:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Krzos Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50br</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 314 (H-4)<br/>(pn) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Licznerska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bu</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 302 (C-7)<br/>(pt) 07:30-09:00<br/> 203 (C-7)<br/></td>
			<td>Mgr Martynowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bx</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 501 (H-4)<br/>(wt) 09:15-10:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Mazurkiewicz Alicja<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50d</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 210 (H-4)<br/>(wt) 11:15-12:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Florczyk Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50e</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 314 (H-4)<br/>(sr) 11:15-12:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Florczyk Agnieszka<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50g</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 201 (H-4)<br/>(wt) 07:30-09:00<br/> 213 (H-4)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50z</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 210 (H-4)<br/>(wt) 13:15-14:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ah</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 111 (H-4)<br/>(pn) 07:30-09:00<br/> 810 (D-20)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cs</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 302 (C-7)<br/>(pn) 17:05-18:35<br/> 213 (H-4)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dn</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 203 (H-4)<br/>(sr) 09:15-10:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bh</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 111 (H-4)<br/>(pt) 13:15-14:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cl</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 317 (H-4)<br/>(sr) 13:15-14:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Piotrowska Kinga<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ak</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 112A (H-4)<br/>(wt) 11:15-12:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Czachorowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cc</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 111 (H-4)<br/>(sr) 15:15-16:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cp</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 208 (H-4)<br/>(wt) 13:15-14:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31f</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31d</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(sr) 07:30-09:00<br/> 313 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63c</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 112A (H-4)<br/>(sr) 17:05-18:35<br/> 312 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63w</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 203 (H-4)<br/>(sr) 15:15-16:45<br/> 203 (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63f</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 314 (H-4)<br/>(sr) 07:30-09:00<br/> 208 (H-4)<br/></td>
			<td>Mgr Mally Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63aa</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 208 (H-4)<br/>(sr) 13:15-14:45<br/> 210 (H-4)<br/></td>
			<td>Mgr Wojcieszyn Adriana<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64g</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 201 (H-4)<br/>(pn) 09:15-10:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64b</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 209 (H-4)<br/>(wt) 09:15-10:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/>Mgr Thomas Peter<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19f</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt TP) 13:15-14:45<br/> 416 (H-4)<br/>(sr) 15:15-16:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Dylewska Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18a</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 205 (H-4)<br/>(wt) 09:15-10:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Dmowska Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30c</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz TN) 09:15-10:45<br/> 411 (H-4)<br/>(pn) 11:15-12:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Bednarczuk Jacek<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29i</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 413 (H-4)<br/>(sr) 11:15-12:45<br/> 416 (H-4)<br/></td>
			<td>Mgr Praclawska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30h</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt TP) 17:05-18:35<br/> 205 (H-4)<br/>(sr) 15:15-16:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Setkowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29f</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 413 (H-4)<br/>(sr) 11:15-12:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Zalewska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29h</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 413 (H-4)<br/>(wt) 13:15-14:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Zalewska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100474C</td>
			<td>L00-48a</td>
			<td>Jezyk hiszpanski / A2</td>
			<td style="width: 110px;">(cz TN) 07:30-09:00<br/> 411 (H-4)<br/>(wt) 07:30-09:00<br/> 203 (C-7)<br/></td>
			<td>Mgr Bednarczuk Jacek<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100524C</td>
			<td>L00-53b</td>
			<td>Jezyk japonski / A1</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 203 (C-7)<br/>(pn TN) 17:05-18:35<br/> 205 (H-4)<br/></td>
			<td>Dr Ota Toyotaka<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia prowadzone w jezyku angielskim. This course is taught in English.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100525C</td>
			<td>L00-54a</td>
			<td>Jezyk japonski / A2</td>
			<td style="width: 110px;">(cz TP) 17:05-18:35<br/> 203 (C-7)<br/>(pn) 18:45-20:15<br/> 205 (H-4)<br/></td>
			<td>Dr Ota Toyotaka<br/></td>
			<td class="center">5</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Wymagane wczesniejsze zaliczenie jezyka japonskiego na poziomie A1 lub JLPT N5. Zajecia prowadzone w jezyku angielskim. A2 is the continuation of Japanese A1, and it requires that students successfully completed Japanese A1 (or JLPT N5). This course is taught in English.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07d</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 106 (H-4)<br/>(wt TN) 17:05-18:35<br/> 416 (H-4)<br/></td>
			<td>Mgr Strach Jan<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07w</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TP) 17:05-18:35<br/> 106 (H-4)<br/>(sr) 17:05-18:35<br/> 814 (D-20)<br/></td>
			<td>Mgr Strach Jan<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10a</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 106 (H-4)<br/>(sr) 18:45-20:15<br/> 814 (D-20)<br/></td>
			<td>Mgr Strach Jan<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07m</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 412 (H-4)<br/>(wt TP) 11:15-12:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Izykowska-Staruch Marta<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ah</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 814 (D-20)<br/>(pt TP) 11:15-12:45<br/> 106 (H-4)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07q</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TN) 11:15-12:45<br/> 402 (H-4)<br/>(wt) 18:45-20:15<br/> 412 (H-4)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ac</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TP) 13:15-14:45<br/> 814 (D-20)<br/>(pt) 17:05-18:35<br/> 106 (H-4)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10g</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 106 (H-4)<br/>(wt) 07:30-09:00<br/> 106 (H-4)<br/></td>
			<td>Mgr Frankiewicz Iwona<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09h</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz TP) 07:30-09:00<br/> 814 (D-20)<br/>(pn) 13:15-14:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Izykowska-Staruch Marta<br/></td>
			<td class="center">2</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11c</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(pn TN) 18:45-20:15<br/> 402 (H-4)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs przede wszystkim dla W4 i W12. The course dedicated mainly to W4 i W12.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100449C</td>
			<td>L00-24a</td>
			<td>Jezyk niemiecki / C1.2</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 106 (H-4)<br/>(sr) 07:30-09:00<br/> 814 (D-20)<br/></td>
			<td>Mgr Lazowska Krystyna<br/>Mgr Strach Jan<br/></td>
			<td class="center">5</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56b</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 203 (C-7)<br/>(pn TN) 11:15-12:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Kotlarczyk Elena<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100690C</td>
			<td>L00-55d</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 205 (H-4)<br/>(wt) 09:15-10:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Klyus Julia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100690C</td>
			<td>L00-55e</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 413 (H-4)<br/>(wt) 11:15-12:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Klyus Julia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56e</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz TN) 07:30-09:00<br/> 203 (C-7)<br/>(wt) 15:15-16:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Lesiak Natalia<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w03-1Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036012C</td>
			<td>w03-2NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> NL (P-22)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034062C</td>
			<td>w03-3H1</td>
			<td>Wioslarstwo</td>
			<td style="width: 110px;">(sr) 12:00-13:30<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Szymerowski Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">W pierwszej czesci semestru zajecia odbywac sie beda na ergometrach i w basenie wioslarskim. W drugiej czesci w lodzi wioslarskiej na Odrze. Wymagany jest przylegajacy strój sportowy. Zajecia dla osób bez jakichkolwiek problemów zdrowotnych.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w05-7B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w04-0Z1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w04-1Z1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033082C</td>
			<td>w05-4H</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 12:40-14:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035042C</td>
			<td>w03-2NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-2R1</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr inz. Cysewski Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Jeden wyjazd jednodniowy (7.04.2018) oraz dwa wyjazdy dwudniowe (14-15, 21-22.04.2018). Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033092C</td>
			<td>w06-4T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Pierwszy wyjazd 17 marca (sobota)o godz. 10.00 w SWFiS PWr. ul. Chelmonskiego16. Kolejne terminy: 18 marzec oraz 7, 8, 14, 15 kwietnia. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033142C</td>
			<td>w02-1V1</td>
			<td>Wspinaczka</td>
			<td style="width: 110px;">(wt) 09:30-11:00<br/> SCIANA (UW)<br/></td>
			<td>Lic. Szczepaniec Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój sportowy, specjalistyczne obuwie, uprzaz wspinaczkowa oraz woreczek na magnezje. Istnieje mozliwosc
wypozyczenia sprzetu na miejscu.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005012C</td>
			<td>v04-3N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(cz) 12:10-13:40<br/> N (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003104C</td>
			<td>v03-4H</td>
			<td>bodyART</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033022C</td>
			<td>w03-6C</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> C (P-2)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v04-5J2</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w04-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(cz) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100530C</td>
			<td>L00-59c</td>
			<td>Jezyk angielski / A2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 313 (H-4)<br/>(sr TN) 11:15-12:45<br/> 209 (H-4)<br/></td>
			<td>Dr Zwiefka Maria<br/></td>
			<td class="center">3</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100530C</td>
			<td>L00-59a</td>
			<td>Jezyk angielski / A2</td>
			<td style="width: 110px;">(cz TN) 13:15-14:45<br/> 213 (H-4)<br/>(pn) 07:30-09:00<br/> 112A (H-4)<br/></td>
			<td>Mgr Mroczka Ewa<br/></td>
			<td class="center">3</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100813C</td>
			<td>L00-61a</td>
			<td>Jezyk angielski / B1.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 201 (H-4)<br/>(sr) 13:15-14:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Czachorowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08j</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ck</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08d</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08da</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 302 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08db</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 302 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dd</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 203 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08di</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 07:30-09:00<br/> 312 (H-4)<br/></td>
			<td>Mgr Szczepanowska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bp</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Tomala Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bg</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 112B (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cy</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 512 (H-4)<br/></td>
			<td>Mgr Romanczuk Urszula<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08l</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 17:05-18:35<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bc</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 18:45-20:15<br/> 501 (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ca</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 07:30-09:00<br/> 201 (H-4)<br/></td>
			<td>Mgr Zajaczkowska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08x</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cw</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 302 (C-7)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08g</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018.
The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62c</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 501 (H-4)<br/>(sr) 18:45-20:15<br/> 317 (H-4)<br/></td>
			<td>Mgr Bednarski Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62s</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 810 (D-20)<br/>(sr) 15:15-16:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62o</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 317 (H-4)<br/>(wt) 09:15-10:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Romanczuk Urszula<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62a</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 208 (H-4)<br/>(pn) 07:30-09:00<br/> 203 (H-4)<br/></td>
			<td>Mgr Baka Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bs</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 314 (H-4)<br/>(pn) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Licznerska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50i</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 512 (H-4)<br/>(sr) 07:30-09:00<br/> 810 (D-20)<br/></td>
			<td>Mgr Gierczak-Bujak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ap</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 213 (H-4)<br/>(wt) 15:15-16:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Dudzinska Jolanta<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50j</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 403 (C-7)<br/>(wt) 11:15-12:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50l</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 112A (H-4)<br/>(sr) 07:30-09:00<br/> 403 (C-7)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ae</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 317 (H-4)<br/>(sr) 13:15-14:45<br/> 308 (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dp</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 313 (H-4)<br/>(sr) 17:05-18:35<br/> 209 (H-4)<br/></td>
			<td>Mgr Wiszniowska Zuzanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ct</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 213 (H-4)<br/>(pt) 13:15-14:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cz</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 208 (H-4)<br/>(sr) 07:30-09:00<br/> 213 (H-4)<br/></td>
			<td>Mgr Szczawinska Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ba</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 308 (H-4)<br/>(sr) 11:15-12:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bd</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 208 (H-4)<br/>(pn) 15:15-16:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ce</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 112A (H-4)<br/>(sr) 09:15-10:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Mroczka Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50x</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 201 (H-4)<br/>(sr) 07:30-09:00<br/> 210 (H-4)<br/></td>
			<td>Mgr Hamryszak-Sierpowska Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50am</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 201 (H-4)<br/>(sr) 11:15-12:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Czachorowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50o</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 210 (H-4)<br/>(wt) 11:15-12:45<br/> 210 (H-4)<br/></td>
			<td>Mgr Golka Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50co</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 208 (H-4)<br/>(wt) 11:15-12:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31c</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(sr) 07:30-09:00<br/> 313 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63t</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 111 (H-4)<br/>(sr) 17:05-18:35<br/> 208 (H-4)<br/></td>
			<td>Mgr Neary Alan<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63u</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 111 (H-4)<br/>(sr) 18:45-20:15<br/> 208 (H-4)<br/></td>
			<td>Mgr Neary Alan<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63g</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 314 (H-4)<br/>(sr) 09:15-10:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Mally Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64a</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 209 (H-4)<br/>(wt) 07:30-09:00<br/> 112A (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64p</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 208 (H-4)<br/>(wt) 09:15-10:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Kasprzak Renata<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100665C</td>
			<td>L00-28a</td>
			<td>Jezyk francuski / B2+</td>
			<td style="width: 110px;">(sr TP) 15:15-16:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">10</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100686C</td>
			<td>L00-29e</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 413 (H-4)<br/>(sr) 09:15-10:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Zalewska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ad</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 402 (H-4)<br/>(pt TP) 15:15-16:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Lazowska Krystyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10b</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 106 (H-4)<br/>(pn) 11:15-12:45<br/> 106 (H-4)<br/></td>
			<td>Doc. dr Modrzycka Irina<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07t</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 814 (D-20)<br/>(wt TP) 13:15-14:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Bloch Anna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09i</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(cz TP) 15:15-16:45<br/> 402 (H-4)<br/>(pn) 09:15-10:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Grusiecka Joanna<br/></td>
			<td class="center">2</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09j</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pt TN) 15:15-16:45<br/> 412 (H-4)<br/>(sr) 09:15-10:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Lazowska Krystyna<br/></td>
			<td class="center">3</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11b</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(pt TP) 13:15-14:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs przede wszystkim dla W5, W6, W9 i W10. The course dedicated mainly to W5, W6, W9 i W10.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100433C</td>
			<td>L00-21a</td>
			<td>Jezyk niemiecki / B2.1</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 106 (H-4)<br/>(pn) 09:15-10:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Radomska Elzbieta<br/></td>
			<td class="center">8</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100433C</td>
			<td>L00-21c</td>
			<td>Jezyk niemiecki / B2.1</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 814 (D-20)<br/>(sr) 15:15-16:45<br/> 106 (H-4)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100434C</td>
			<td>L00-22c</td>
			<td>Jezyk niemiecki / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 412 (H-4)<br/>(wt) 15:15-16:45<br/> 106 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100434C</td>
			<td>L00-22b</td>
			<td>Jezyk niemiecki / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 106 (H-4)<br/>(sr) 11:15-12:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100457C</td>
			<td>L00-57a</td>
			<td>Jezyk rosyjski / A2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 205 (H-4)<br/>(sr TN) 07:30-09:00<br/> 205 (H-4)<br/></td>
			<td>Mgr Kotlarczyk Elena<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW035012C</td>
			<td>w04-3N</td>
			<td>Badminton</td>
			<td style="width: 110px;">(cz) 12:10-13:40<br/> N (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakieta do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034082C</td>
			<td>w06-2U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 14 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033042C</td>
			<td>w03-3TS</td>
			<td>Jogging</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> PARK (WROC)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazuje wygodne obuwie sportowe oraz strój sportowy uwzgledniajacy warunki pogodowe. Zbiórka w Studium WFiS,
ul.Chelmonskiego 16.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW032048C</td>
			<td>w03-7C</td>
			<td>Karate Shotokan</td>
			<td style="width: 110px;">(sr) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Dr inz. Okon Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany jest luzny strój sportowy i &quot;japonki&quot;. Cwiczymy boso!</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033252C</td>
			<td>w05-2TS</td>
			<td>Nordic walking</td>
			<td style="width: 110px;">(pt) 09:50-11:20<br/> PARK (WROC)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie z budynku P-2 SWFiS ul. Chelmonskiego 16. Zbiórka przy portierni. Pierwsze zajecia, to obowiazkowe
zebranie informacyjno-organizacyjne w godzinach zajec. Kije bezplatnie udostepnia Studium WFiS.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033242C</td>
			<td>w03-4C</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w03-0Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033082C</td>
			<td>w01-3NL1</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035042C</td>
			<td>w02-5NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034082C</td>
			<td>w06-1U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 14 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32.  Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003203C</td>
			<td>v02-6C</td>
			<td>ABT</td>
			<td style="width: 110px;">(wt) 17:10-18:40<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój. Na sali C cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003203C</td>
			<td>v04-3H</td>
			<td>ABT</td>
			<td style="width: 110px;">(cz) 13:10-14:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033203C</td>
			<td>w04-3H</td>
			<td>ABT</td>
			<td style="width: 110px;">(cz) 13:10-14:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia wzmacniajace, podczas których glówny nacisk polozony jest na wzmacnianie miesni brzucha, ud i posladków. Wymagany
wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003014C</td>
			<td>v01-6C</td>
			<td>Aerobik sportowy /s</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> C (P-2)<br/>(pn) 17:10-18:40<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003262C</td>
			<td>v05-7H</td>
			<td>Body ball</td>
			<td style="width: 110px;">(pt) 17:10-18:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003104C</td>
			<td>v04-5C</td>
			<td>bodyART</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy, cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006012C</td>
			<td>v03-2NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(sr) 10:30-12:00<br/> NL (P-22)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW016012C</td>
			<td>v13-7N</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(sr) 18:50-20:20<br/> N (P-22)<br/></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Zajecia w drugiej czesci semestru od 11.04. Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006013C</td>
			<td>v03-5NL</td>
			<td>Koszykówka /z</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v01-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v02-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013052C</td>
			<td>v13-1B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 08:50-10:20<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Uczestnicy kursu zobowiazani beda do realizacji programu cwiczen (na tzw. mase miesniowa) opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004092C</td>
			<td>v06-0S</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">2</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowazkowe zebranie organizacyjne odbedzie sie 19 lutego o godz. 20.00 w SWFiS PWr. ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004092C</td>
			<td>v06-4S</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne odbedzie sie 21 lutego o godz. 21.00 w SWFiS PWr. ul. Chelmonskiego 16 sal 32.  Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034092C</td>
			<td>w06-4S3</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">7</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v04-1Z</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014031C</td>
			<td>v12-6J11</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 17 kwietnia.  Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036032C</td>
			<td>w05-3N</td>
			<td>Pilka reczna</td>
			<td style="width: 110px;">(pt) 13:00-14:30<br/> N (P-22)<br/></td>
			<td>Mgr Palica Marcin<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006034C</td>
			<td>v01-8Q</td>
			<td>Pilka reczna /s</td>
			<td style="width: 110px;">(pn) 20:30-22:00<br/> HALA (MCS)<br/>(sr) 20:30-22:00<br/> HALA (MCS)<br/></td>
			<td>Mgr Palica Marcin<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v03-1Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w02-CZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 20:00-21:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004034C</td>
			<td>v02-DZ</td>
			<td>Plywanie /s</td>
			<td style="width: 110px;">(cz) 21:00-22:00<br/> 1 (WCSPA)<br/>(wt) 21:00-22:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004033C</td>
			<td>v04-BZ</td>
			<td>Plywanie /z</td>
			<td style="width: 110px;">(cz) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs przeznaczony dla osób bardzo dobrze plywajacych co najmniej trzema stylami. Wymagany strój kapielowy, czepek, klapki oraz
mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005062C</td>
			<td>v04-2L</td>
			<td>Squash</td>
			<td style="width: 110px;">(cz) 10:30-12:00<br/> SQ (HLV)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia odbywaja sie w Centrum Squash'a &quot;Hasta La Vista&quot;, ul. Góralska 5. Na zajeciach trzeba posiadac wlasne pilki (pozostaly
sprzet czyli rakiety, gogle sa wypozyczane bezplatnie). Wymagany jest wygodny strój sportowy i czyste, zmienne obuwie sportowe z
podeszwa &quot;non-marking&quot; (nie pozostawiajace sladów na podlodze kortu!). Szczególy dotyczace kursu na pierwszych zajeciach.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013073C</td>
			<td>v13-7H</td>
			<td>Stretch-one</td>
			<td style="width: 110px;">(sr) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Wygodny strój sportowy oraz czyste, zmienne obuwie sportowe. Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v05-5H</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 14:20-15:50<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v04-5NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015042C</td>
			<td>v11-4NP1</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> NP (P-22)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 23 kwietnia. Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033803C</td>
			<td>w02-3C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> C (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013152C</td>
			<td>v16-6R1</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Termin obowiazkowego zebrania organizacyjnego - 26 luty 2018 (poniedzialek) o godz. 20:45 w hali sportowej P22, ul. Chelmonskiego 12. Przewidywane sa 3 wyjazdy jednodniowe: 21 lub 22.04.2018 (Rudawy Janowickie), 12 lub 13.05.2018 (Góry Stolowe), 26 lub 27.05.2018 (Karkonosze). Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003092C</td>
			<td>v06-4T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Pierwszy wyjazd 17 marca (sobota)o godz. 10.00 w SWFiS PWr. ul. Chelmonskiego16. Kolejne terminy: 18 marzec oraz 7, 8, 14, 15 kwietnia. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013092C</td>
			<td>v15-2T1</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">2</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Pierwszy wyjazd i spotkanie organizacyjne: piatek 06.04.2018 r., godz. 10.00. Zbiórka z rowerami - parking przy Studium WF i Sportu, ul.Chelmonskiego 16. Pozostale terminy wyjazdów: 20, 27 kwietnia 2018 r. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006042C</td>
			<td>v02-6NL</td>
			<td>Unihokej</td>
			<td style="width: 110px;">(wt) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie ubioru do zespolowych gier sportowych oraz obuwia do sportów halowych z
podeszwa kauczukowa. Zajecia na hali sportowej z bandami.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004082C</td>
			<td>v06-2U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 14 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004062C</td>
			<td>v03-3H1</td>
			<td>Wioslarstwo</td>
			<td style="width: 110px;">(sr) 12:00-13:30<br/> -1-13 (H-14)<br/></td>
			<td>Mgr Szymerowski Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">W pierwszej czesci semestru zajecia odbywac sie beda na ergometrach i w basenie wioslarskim. W drugiej czesci w lodzi wioslarskiej na Odrze. Wymagany jest przylegajacy strój sportowy. Zajecia dla osób bez jakichkolwiek problemów zdrowotnych.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003142C</td>
			<td>v02-1V1</td>
			<td>Wspinaczka</td>
			<td style="width: 110px;">(wt) 09:30-11:00<br/> SCIANA (UW)<br/></td>
			<td>Lic. Szczepaniec Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój sportowy, specjalistyczne obuwie, uprzaz wspinaczkowa oraz woreczek na magnezje. Istnieje mozliwosc
wypozyczenia sprzetu na miejscu.</td>
			</tr>
	<tr class="gradeX">
			<td>PNH003420W</td>
			<td>H00-14a</td>
			<td>Technologie w cywilizacjach...</td>
			<td style="width: 110px;"></td>
			<td>Dr Marcinów Teresa<br/></td>
			<td class="center">18</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">Kurs e-learningowy prowadzony przez dr Terese Marcinów, wiecej informacji na temat kursu znajduje sie na stronie projektu Mloda Kadra 2015+ ( www.mk2015.pwr.wroc.pl), w ramach którego kurs zostal utworzony. Warunki zaliczenia zostana podane przez wykladowców na obowiazkowym spotkaniu organizacyjnym. O terminie spotkania prowadzacy poinformuje studentów mailowo.  </td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v05-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56h</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(cz TP) 11:15-12:45<br/> 203 (C-7)<br/>(pn) 13:15-14:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Kotlarczyk Elena<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100688C</td>
			<td>L00-52b</td>
			<td>Jezyk japonski / A1</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 203 (C-7)<br/>(wt) 15:15-16:45<br/> 413 (H-4)<br/></td>
			<td>Dr Ota Toyotaka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia prowadzone w jezyku angielskim. This course is taught in English.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w02-1B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 08:50-10:20<br/> B (P-2)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31s</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 19.04.2018. The classes are held in the first half of the semester, until 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31t</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018 The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v01-8B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 20:30-22:00<br/> B (P-2)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w04-2J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w04-3J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 11:00-12:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">2</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w04-5J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08h</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 111 (H-4)<br/></td>
			<td>Mgr Baranska-Szczepaniak Agata<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08df</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 212 (C-2)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08n</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 13:15-14:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 11.04.2018
The classes are held in the second half of the semester, from 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dv</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 213 (H-4)<br/></td>
			<td>Mgr Jaskowska-Derechowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08at</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08a</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Bednarski Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 13.04.2018.
The classes are held in the first half of the semester, until 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08t</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(cz) 18:45-20:15<br/> 213 (H-4)<br/></td>
			<td>Mgr Dudzinska Jolanta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ae</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 17:05-18:35<br/> 512 (H-4)<br/></td>
			<td>Mgr Henkie Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62j</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(sr) 11:15-12:45<br/> 210 (H-4)<br/>(wt) 09:15-10:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Hamryszak-Sierpowska Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62m</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 201 (H-4)<br/>(sr) 17:05-18:35<br/> 213 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62af</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 317 (H-4)<br/>(pt) 15:15-16:45<br/> 203 (H-4)<br/></td>
			<td>Dr Zwiefka Maria<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62ad</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(sr) 15:15-16:45<br/> 210 (H-4)<br/>(wt) 17:05-18:35<br/> 203 (H-4)<br/></td>
			<td>Mgr Wojcieszyn Adriana<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62d</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 111 (H-4)<br/>(wt) 09:15-10:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62p</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 112B (H-4)<br/>(wt) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62b</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 208 (H-4)<br/>(pn) 09:15-10:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Baka Barbara<br/></td>
			<td class="center">2</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50s</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 302 (C-7)<br/>(wt) 11:15-12:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Grygorowicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50v</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 203 (H-4)<br/>(pt) 11:15-12:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Gwizdala Grazyna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50di</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 201 (H-4)<br/>(sr) 17:05-18:35<br/> 201 (H-4)<br/></td>
			<td>Mgr Tomala Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cw</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 203 (H-4)<br/>(pn) 18:45-20:15<br/> 112B (H-4)<br/></td>
			<td>Mgr Staroniewicz Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bw</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 203 (C-7)<br/>(wt) 18:45-20:15<br/> 111 (H-4)<br/></td>
			<td>Mgr Martynowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50r</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 209 (H-4)<br/>(wt) 13:15-14:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Grygorowicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50aq</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 313 (H-4)<br/>(wt) 17:05-18:35<br/> 112A (H-4)<br/></td>
			<td>Mgr Dudzinska Jolanta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dg</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 314 (H-4)<br/>(wt) 09:15-10:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cu</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 302 (C-7)<br/>(pt) 15:15-16:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Rozwadowski Dominik<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cx</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 210 (H-4)<br/>(sr) 15:15-16:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Staszewska Teresa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cy</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 313 (H-4)<br/>(pt) 17:05-18:35<br/> 210 (H-4)<br/></td>
			<td>Mgr Staszewska Teresa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bf</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 317 (H-4)<br/>(wt) 07:30-09:00<br/> 314 (H-4)<br/></td>
			<td>Mgr Krawczenko Walentyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bc</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 208 (H-4)<br/>(pn) 13:15-14:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cf</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 213 (H-4)<br/>(sr) 07:30-09:00<br/> 203 (H-4)<br/></td>
			<td>Mgr Mroczka Ewa<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50al</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 209 (H-4)<br/>(wt) 13:15-14:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Czachorowska Beata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31n</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(wt) 13:15-14:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63l</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 209 (H-4)<br/>(sr) 09:15-10:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Morawska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63m</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 209 (H-4)<br/>(wt) 11:15-12:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Morawska Joanna<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63o</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 317 (H-4)<br/>(sr) 17:05-18:35<br/> 501 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63d</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 313 (H-4)<br/>(wt) 18:45-20:15<br/> 209 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63x</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 203 (H-4)<br/>(wt) 17:05-18:35<br/> 308 (H-4)<br/></td>
			<td>Dr Wieckowska Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63i</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 209 (H-4)<br/>(wt) 07:30-09:00<br/> 201 (H-4)<br/></td>
			<td>Mgr Mally Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64r</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 313 (H-4)<br/>(wt) 15:15-16:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64q</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 313 (H-4)<br/>(pt) 11:15-12:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64i</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 314 (H-4)<br/>(sr) 09:15-10:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100894C</td>
			<td>L00-70a</td>
			<td>Jezyk angielski /C1.1 Human.</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 313 (H-4)<br/>(pn) 13:15-14:45<br/> 308 (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/></td>
			<td class="center">7</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Humanistyczne oblicze techniki. Lektorat za 2 pkt. ECTS mozna realizowac po lektoracie B2.2. Human Face of Technology. The course is worth 2 ECTS. It can be taken after a B2.2 course.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100685C</td>
			<td>L00-18b</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 411 (H-4)<br/>(wt) 09:15-10:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Paron Zofia<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100523C</td>
			<td>L00-26a</td>
			<td>Jezyk francuski / A2</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 205 (H-4)<br/>(wt TN) 07:30-09:00<br/> 411 (H-4)<br/></td>
			<td>Mgr Dmowska Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30a</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz TP) 09:15-10:45<br/> 411 (H-4)<br/>(pn) 07:30-09:00<br/> 413 (H-4)<br/></td>
			<td>Mgr Bednarczuk Jacek<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07f</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TP) 13:15-14:45<br/> 106 (H-4)<br/>(pn) 07:30-09:00<br/> 412 (H-4)<br/></td>
			<td>Mgr Radomska Elzbieta<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07n</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TP) 18:45-20:15<br/> 412 (H-4)<br/>(sr) 17:05-18:35<br/> 402 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07aj</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 412 (H-4)<br/>(wt TP) 17:05-18:35<br/> 106 (H-4)<br/></td>
			<td>Mgr Garga Maria<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09b</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pn TP) 13:15-14:45<br/> 106 (H-4)<br/>(sr) 11:15-12:45<br/> 106 (H-4)<br/></td>
			<td>Doc. dr Modrzycka Irina<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100447C</td>
			<td>L00-11f</td>
			<td>Jezyk niemiecki / B2+</td>
			<td style="width: 110px;">(cz TP) 18:45-20:15<br/> 402 (H-4)<br/></td>
			<td>Mgr Grusiecka Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Kurs dla studentów wszystkich wydzialów. The course for all faculties.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005043C</td>
			<td>v04-6NP1</td>
			<td>Tenis stolowy /z</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Grupa zaawansowana. Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034082C</td>
			<td>w06-3U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 15 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32.Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033262C</td>
			<td>w05-7H</td>
			<td>Body ball</td>
			<td style="width: 110px;">(pt) 17:10-18:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój i obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW032032C</td>
			<td>w04-7C</td>
			<td>Judo - ABC</td>
			<td style="width: 110px;">(cz) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Inz. Kielbus Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany dres lub judoga i &quot;japonki&quot;. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033051C</td>
			<td>w04-5B</td>
			<td>Kulturystyka /obwód</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia typu &quot;cardio&quot;, uczestnicy beda zobowiazani do realizacji programu cwiczen opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034092C</td>
			<td>w06-0S</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">4</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowazkowe zebranie organizacyjne odbedzie sie 19 lutego o godz. 20.00 w SWFiS PWr. ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w02-5J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(wt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w05-5J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(pt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033082C</td>
			<td>w01-3NL</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033082C</td>
			<td>w05-4H1</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pt) 12:40-14:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Pisarska-Gubernat Barbara<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033152C</td>
			<td>w06-6R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW003044C</td>
			<td>v02-6TS</td>
			<td>Biegi przelajowe/s</td>
			<td style="width: 110px;">(cz) 17:10-18:40<br/> TRASY (TEREN)<br/>(wt) 17:10-18:40<br/> TRASY (TEREN)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW001022C</td>
			<td>v02-432</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> 32 (P-2)<br/></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW013022C</td>
			<td>v15-2H1</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(pt) 11:10-12:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 13 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014092C</td>
			<td>v16-0S3</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Terminy wyjazdów: 24-25.02. oraz 03.03.2018r. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v02-6J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 11:00-12:00<br/> BASEN (GEM)<br/>(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td></td>
			<td class="center">3</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia rozpoczynaja sie od 17 kwietnia. Odbywaja sie dwa razy w tygodniu we wtorki 14:00-15:00 oraz w czwartki 11:00-12:00. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v04-2J1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014031C</td>
			<td>v13-2J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(sr) 10:00-11:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013252C</td>
			<td>v11-2TS</td>
			<td>Nordic walking</td>
			<td style="width: 110px;">(pn) 10:30-12:00<br/> PARK (WROC)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 23 kwietnia. Zajecia rozpoczynaja sie z budynku P-2 SWFiS ul. Chelmonskiego 16. Zbiórka przy portierni. Pierwsze zajecia, to obowiazkowe
zebranie informacyjno-organizacyjne w godzinach zajec. Kije bezplatnie udostepnia Studium WFiS.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003242C</td>
			<td>v03-4C</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003242C</td>
			<td>v03-6H</td>
			<td>Pilates</td>
			<td style="width: 110px;">(sr) 17:00-18:30<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Cwiczenia wzmacniaja gorset miesniowy kregoslupa, poprawiaja postawe ciala i pozwalaja wyrzezbic smukla sylwetke bez
forsownego wysilku. Na zajeciach wymagane sa dwa male reczniki.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005032C</td>
			<td>v03-5N</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] .</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015032C</td>
			<td>v13-6NP1</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(sr) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Zajecia w drugiej polowie semestru od 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035032C</td>
			<td>w01-6NP</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] .</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005034C</td>
			<td>v01-7NL</td>
			<td>Pilka siatkowa /s</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> NL (P-22)<br/>(sr) 18:50-20:20<br/> NL (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla kobiet] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v02-5J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 13:00-14:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Najsarek Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v03-3J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 11:00-12:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v04-0Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(cz) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v12-6J1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lewandowska Magdalena<br/></td>
			<td class="center">6</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 17 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034033C</td>
			<td>w04-BZ</td>
			<td>Plywanie /z</td>
			<td style="width: 110px;">(cz) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs przeznaczony dla osób bardzo dobrze plywajacych co najmniej trzema stylami. Wymagany strój kapielowy, czepek, klapki oraz
mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013212C</td>
			<td>v12-3H1</td>
			<td>Shape</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 17 kwietnia. Wymagany wygodny strój sportowy oraz czyste, zmienne obuwie sportowe.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003082C</td>
			<td>v01-3NL1</td>
			<td>Taniec</td>
			<td style="width: 110px;">(pn) 12:10-13:40<br/> NL (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Obowiazkowo czyste, zmienne obuwie sportowe oraz ubranie: spodnie dresowe, koszulka polo lub T-shirt dla mezczyzn oraz leginsy
(dres) i koszulka dla kobiet. Zapisujac sie nie musisz miec partnerki/partnera.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005054C</td>
			<td>v02-7K</td>
			<td>Tenis ziemny /s</td>
			<td style="width: 110px;">(cz) 19:00-20:30<br/> KORTY (GEM)<br/>(wt) 19:00-20:30<br/> KORTY (GEM)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033803C</td>
			<td>w02-2C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(wt) 10:30-12:00<br/> C (P-2)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso. </td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-0R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Samolyk Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie informacyjne 20 lutego (wtorek) o godz. 19.30 w sali 32 SWFiS ul. Chelmonskiego 16. Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-9R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Spotkanie organizacyjne w poniedzialek 19 lutego  o godz. 19.00  w SWFiS Ul. Chelmonskiego 16, sala 32. Terminy wyjazdów:14 kwiecien, 
28-29 kwiecien oraz 9-10 czerwiec. Orientacyjny koszt przejazdu autokarami 120 zl. Szczególowe informacje  http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska/poziomy/06-9r </td>
			</tr>
	<tr class="gradeX">
			<td>WFW013152C</td>
			<td>v16-5R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-9R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Marszalek Elzbieta<br/></td>
			<td class="center">3</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy 28 kwietnia (sobota) 2018r. do Sobótki - Masyw Slezy. Zbiórka o godz. 9.00 przy schronisku &quot;Pod Wiezyca&quot;. Dojazd we wlasnym zakresie. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003074C</td>
			<td>v02-4H</td>
			<td>Zdrowe plecy</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wskazany dowolny, wygodny strój sportowy i zmienne obuwie sportowe. Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003074C</td>
			<td>v04-3C</td>
			<td>Zdrowe plecy</td>
			<td style="width: 110px;">(cz) 12:20-13:50<br/> C (P-2)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wskazany dowolny, wygodny strój sportowy. Na sali &quot;C&quot; cwiczymy boso! Wymagany jest jeden maly recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW036012C</td>
			<td>w02-5NL</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> NL (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w05-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pt) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100523C</td>
			<td>L00-26b</td>
			<td>Jezyk francuski / A2</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 416 (H-4)<br/>(sr TP) 17:05-18:35<br/> 416 (H-4)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">2</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW013092C</td>
			<td>v16-1T</td>
			<td>Turystyka rowerowa</td>
			<td style="width: 110px;"></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zebranie organizacyjne i pierwszy wyjazd w sobote 7 kwietnia 2018 r. o godz 10.00, zbiórka na parkingu przy SWFiS, ul. Chelmonskiego 16. Pozostale wyjazdy: 21 i 28 kwietnia. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-rowerowa</td>
			</tr>
	<tr class="gradeX">
			<td>WFW032032C</td>
			<td>w01-7C</td>
			<td>Judo - ABC</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> C (P-2)<br/></td>
			<td>Inz. Kielbus Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w04-4J</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 12:00-13:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">1</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034032C</td>
			<td>w05-6J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(pt) 14:00-15:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035052C</td>
			<td>w04-4K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(cz) 14:30-16:00<br/> KORTY (GEM)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100530C</td>
			<td>L00-59b</td>
			<td>Jezyk angielski / A2</td>
			<td style="width: 110px;">(cz TP) 13:15-14:45<br/> 213 (H-4)<br/>(pn) 11:15-12:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Mroczka Ewa<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ci</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Kalinka Elzbieta<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08c</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bf</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Krezel Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 23.04.2018
The classes are held in the second half of the semester, from 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08m</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 13:15-14:45<br/> 302 (C-7)<br/></td>
			<td>Mgr Dudek-Kajewska Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08ag</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 209 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 23.04.2018.
The classes are held in the first half of the semester, until 23.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bq</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 13:15-14:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08bm</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 18:45-20:15<br/> 213 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08cd</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(wt) 13:15-14:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 17.04.2018
The classes are held in the second half of the semester, from 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08w</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(sr) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Mgr Mirowska Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 11.04.2018.
The classes are held in the first half of the semester, until 11.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100482C</td>
			<td>L00-08dr</td>
			<td>Jezyk angielski / B2+</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 810 (D-20)<br/></td>
			<td>Mgr Sliwerska Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 13.04.2018
The classes are held in the second half of the semester, from 13.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62ab</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 213 (H-4)<br/>(wt) 17:05-18:35<br/> 111 (H-4)<br/></td>
			<td>Mgr Wieruszewska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62w</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pt) 15:15-16:45<br/> 212 (C-2)<br/>(sr) 18:45-20:15<br/> 210 (H-4)<br/></td>
			<td>Mgr Trzyna Lukasz<br/></td>
			<td class="center">1</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62l</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 201 (H-4)<br/>(sr) 15:15-16:45<br/> 213 (H-4)<br/></td>
			<td>Mgr Rogulska Paulina<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100533C</td>
			<td>L00-62t</td>
			<td>Jezyk angielski / B2.1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 201 (H-4)<br/>(pt) 07:30-09:00<br/> 112B (H-4)<br/></td>
			<td>Mgr Tomala Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50u</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 203 (H-4)<br/>(sr) 11:15-12:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Gwizdala Grazyna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bm</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 512 (H-4)<br/>(wt) 15:15-16:45<br/> 512 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bo</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 302 (C-7)<br/>(sr) 13:15-14:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Kuzniak Aleksandra<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50dh</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 201 (H-4)<br/>(sr) 15:15-16:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Tomala Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50by</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(sr) 11:15-12:45<br/> 213 (H-4)<br/>(wt) 13:15-14:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Mazurkiewicz Alicja<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50bz</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 112A (H-4)<br/>(wt) 11:15-12:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Mazurkiewicz Alicja<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cg</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 317 (H-4)<br/>(wt) 07:30-09:00<br/> 112B (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ch</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 317 (H-4)<br/>(wt) 09:15-10:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Penderecka-Mosiek Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50c</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 210 (H-4)<br/>(wt) 09:15-10:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Florczyk Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50an</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 11:15-12:45<br/> 201 (H-4)<br/>(sr) 11:15-12:45<br/> 313 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50af</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 09:15-10:45<br/> 317 (H-4)<br/>(sr) 15:15-16:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Bogusz-Broy Ewa<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50de</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 13:15-14:45<br/> 312 (H-4)<br/>(wt) 11:15-12:45<br/> 403 (C-7)<br/></td>
			<td>Dr Szela Monika<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50cj</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 317 (H-4)<br/>(sr) 11:15-12:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Piotrowska Kinga<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50aw</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 213 (H-4)<br/>(wt) 17:05-18:35<br/> 201 (H-4)<br/></td>
			<td>Mgr Holowko Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ac</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(cz) 15:15-16:45<br/> 209 (H-4)<br/>(pn) 17:05-18:35<br/> 501 (H-4)<br/></td>
			<td>Mgr Bednarski Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100534C</td>
			<td>L00-50ca</td>
			<td>Jezyk angielski / B2.2</td>
			<td style="width: 110px;">(pt) 09:15-10:45<br/> 111 (H-4)<br/>(sr) 13:15-14:45<br/> 112A (H-4)<br/></td>
			<td>Mgr Medrecka-Kondak Agnieszka<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31g</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(wt) 17:05-18:35<br/> 209 (H-4)<br/></td>
			<td>Mgr Kondro Magdalena<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej polowie semestru, do 17.04.2018.
The classes are held in the first half of the semester, until 17.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100691C</td>
			<td>L00-31l</td>
			<td>Jezyk angielski / C1+</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 112B (H-4)<br/></td>
			<td>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w drugiej polowie semestru, od 19.04.2018
The classes are held in the second half of the semester, from 19.04.2018.</td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63p</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 312 (H-4)<br/>(wt) 15:15-16:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Tyszkiewicz Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63ab</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 17:05-18:35<br/> 208 (H-4)<br/>(wt) 15:15-16:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Wojcieszyn Adriana<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63b</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 13:15-14:45<br/> 111 (H-4)<br/>(sr) 15:15-16:45<br/> 312 (H-4)<br/></td>
			<td>Mgr Koszutska Izabela<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63h</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pn) 11:15-12:45<br/> 314 (H-4)<br/>(sr) 11:15-12:45<br/> 208 (H-4)<br/></td>
			<td>Mgr Mally Lukasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100535C</td>
			<td>L00-63z</td>
			<td>Jezyk angielski / C1.1</td>
			<td style="width: 110px;">(pt) 13:15-14:45<br/> 208 (H-4)<br/>(wt) 13:15-14:45<br/> 203 (H-4)<br/></td>
			<td>Mgr Wojcieszyn Adriana<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64n</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 313 (H-4)<br/>(pn) 17:05-18:35<br/> 312 (H-4)<br/></td>
			<td>Mgr Kasprzak Renata<br/>Mgr Wolf John<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64k</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(pn) 15:15-16:45<br/> 208 (H-4)<br/>(sr) 13:15-14:45<br/> 314 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64h</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 07:30-09:00<br/> 403 (C-7)<br/>(pn) 17:05-18:35<br/> 208 (H-4)<br/></td>
			<td>Mgr Derechowski Janusz<br/>Mgr Fyall Michael<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64l</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 403 (C-7)<br/>(wt) 09:15-10:45<br/> 317 (H-4)<br/></td>
			<td>Mgr Fyall Michael<br/>Mgr Morawska Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100536C</td>
			<td>L00-64d</td>
			<td>Jezyk angielski / C1.2</td>
			<td style="width: 110px;">(cz) 17:05-18:35<br/> 313 (H-4)<br/>(pn) 15:15-16:45<br/> 201 (H-4)<br/></td>
			<td>Mgr Brzózka Aleksander<br/>Mgr Thomas Peter<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19i</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(cz TP) 13:15-14:45<br/> 413 (H-4)<br/>(wt) 13:15-14:45<br/> 203 (C-7)<br/></td>
			<td>Mgr Stanisz Mariusz<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100522C</td>
			<td>L00-19d</td>
			<td>Jezyk francuski / A1</td>
			<td style="width: 110px;">(pt TP) 15:15-16:45<br/> 416 (H-4)<br/>(wt) 11:15-12:45<br/> 413 (H-4)<br/></td>
			<td>Mgr Dylewska Justyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30f</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(cz TP) 15:15-16:45<br/> 411 (H-4)<br/>(wt) 15:15-16:45<br/> 411 (H-4)<br/></td>
			<td>Mgr Setkowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100473C</td>
			<td>L00-30i</td>
			<td>Jezyk hiszpanski / A1</td>
			<td style="width: 110px;">(pt TN) 17:05-18:35<br/> 205 (H-4)<br/>(sr) 17:05-18:35<br/> 203 (C-7)<br/></td>
			<td>Mgr Setkowicz Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07i</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TN) 17:05-18:35<br/> 106 (H-4)<br/>(sr) 15:15-16:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Strach Jan<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07af</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 17:05-18:35<br/> 814 (D-20)<br/>(sr TN) 18:45-20:15<br/> 106 (H-4)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ag</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 18:45-20:15<br/> 814 (D-20)<br/>(pt TN) 09:15-10:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10h</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 814 (D-20)<br/>(sr) 17:05-18:35<br/> 106 (H-4)<br/></td>
			<td>Mgr Zgondek Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07p</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TP) 11:15-12:45<br/> 402 (H-4)<br/>(wt) 17:05-18:35<br/> 412 (H-4)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ae</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt TN) 13:15-14:45<br/> 402 (H-4)<br/>(sr) 11:15-12:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10c</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn) 07:30-09:00<br/> 106 (H-4)<br/>(sr) 13:15-14:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Okulewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07y</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TN) 13:15-14:45<br/> 106 (H-4)<br/>(wt) 11:15-12:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Rzeminski Krzysztof<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10s</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz) 09:15-10:45<br/> 412 (H-4)<br/>(pn) 15:15-16:45<br/> 402 (H-4)<br/></td>
			<td>Mgr Brocka Beata<br/>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07ab</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pn TP) 18:45-20:15<br/> 402 (H-4)<br/>(pt) 15:15-16:45<br/> 106 (H-4)<br/></td>
			<td>Mgr Dlugosz Zygmunt<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10i</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 07:30-09:00<br/> 402 (H-4)<br/>(wt) 13:15-14:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Grusiecka Joanna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100418C</td>
			<td>L00-07x</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(cz TP) 07:30-09:00<br/> 416 (H-4)<br/>(wt) 15:15-16:45<br/> 814 (D-20)<br/></td>
			<td>Mgr Kania Anna<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100684C</td>
			<td>L00-10p</td>
			<td>Jezyk niemiecki / A1</td>
			<td style="width: 110px;">(pt) 11:15-12:45<br/> 814 (D-20)<br/>(sr) 07:30-09:00<br/> 402 (H-4)<br/></td>
			<td>Mgr Kania Anna<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100423C</td>
			<td>L00-09a</td>
			<td>Jezyk niemiecki / A2</td>
			<td style="width: 110px;">(pt TP) 15:15-16:45<br/> 402 (H-4)<br/>(sr) 13:15-14:45<br/> 412 (H-4)<br/></td>
			<td>Mgr Soltys Dorota<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56a</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pn TP) 11:15-12:45<br/> 205 (H-4)<br/>(sr) 09:15-10:45<br/> 205 (H-4)<br/></td>
			<td>Mgr Kotlarczyk Elena<br/></td>
			<td class="center">1</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>JZL100458C</td>
			<td>L00-56g</td>
			<td>Jezyk rosyjski / A1</td>
			<td style="width: 110px;">(pt TN) 17:05-18:35<br/> 413 (H-4)<br/>(wt) 07:30-09:00<br/> 205 (H-4)<br/></td>
			<td>Mgr Klyus Julia<br/></td>
			<td class="center">0</td>
			<td class="center">45</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW033212C</td>
			<td>w05-4C</td>
			<td>Shape</td>
			<td style="width: 110px;">(pt) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034082C</td>
			<td>w06-4U</td>
			<td>Windsurfing</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne 15 marca godz. 20.30 SWFiS ul. Chelmonskiego 16, sala 32. Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/windsurfing</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003803C</td>
			<td>v02-3C</td>
			<td>Trening funkcjonalny</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> C (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wygodny strój sportowy, recznik. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW031022C</td>
			<td>w02-432</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> 32 (P-2)<br/></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"></td>
			</tr>
	<tr class="gradeX">
			<td>WFW036012C</td>
			<td>w04-8G</td>
			<td>Koszykówka</td>
			<td style="width: 110px;">(cz) 19:30-21:00<br/> HALA (UM-SWF)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w01-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033052C</td>
			<td>w03-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033050C</td>
			<td>w02-4H1</td>
			<td>Kulturystyka /korekcja</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> -1-21 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs adresowany szczególnie do tych studentów, u których w wyniku przeprowadzonych badan postawy ciala zdiagnozowano
nieprawidlowosci.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034092C</td>
			<td>w06-4S</td>
			<td>Narciarstwo</td>
			<td style="width: 110px;"></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">4</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Obowiazkowe zebranie organizacyjne odbedzie sie 21 lutego o godz. 21.00 w SWFiS PWr. ul. Chelmonskiego 16 sal 32.  Szczególy na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/narciarstwo</td>
			</tr>
	<tr class="gradeX">
			<td>WFW034031C</td>
			<td>w04-1Z</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 09:00-10:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW035033C</td>
			<td>w01-6NL</td>
			<td>Pilka siatkowa /z</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Kurs adresowany dla osób, które dobrze opanowaly podstawowe elementy
techniki indywidualnej i taktyki gry zespolowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033212C</td>
			<td>w03-3C</td>
			<td>Shape</td>
			<td style="width: 110px;">(sr) 12:10-13:40<br/> C (P-2)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój sportowy. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW033104C</td>
			<td>w04-7H</td>
			<td>bodyART</td>
			<td style="width: 110px;">(cz) 18:40-20:10<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">BodyART to trening holistyczny, funkcjonalny, inspirowany joga, bazujacy na cwiczeniach terapeutycznych. Wymagany wygodny
strój sportowy.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW011022C</td>
			<td>v12-332</td>
			<td>Brydz sportowy</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> 32 (P-2)<br/></td>
			<td>Mgr inz. Dufrat Katarzyna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 13 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003022C</td>
			<td>v02-5C</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> C (P-2)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany wygodny strój. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013022C</td>
			<td>v15-2H</td>
			<td>Callanetics</td>
			<td style="width: 110px;">(pt) 11:10-12:40<br/> -1-11 (H-14)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 13 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006025C</td>
			<td>v02-4N</td>
			<td>Futsal</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> N (P-22)<br/></td>
			<td>Mgr Zemankiewicz Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot; oraz butów do pilki noznej halowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW002034C</td>
			<td>v01-8C</td>
			<td>Judo /s</td>
			<td style="width: 110px;">(cz) 20:30-22:00<br/> C (P-2)<br/>(pn) 20:30-22:00<br/> C (P-2)<br/></td>
			<td>Inz. Kielbus Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006014C</td>
			<td>v02-9G</td>
			<td>Koszykówka /s</td>
			<td style="width: 110px;">(cz) 21:00-22:30<br/> HALA (UM-SWF)<br/>(wt) 21:30-23:00<br/> HALA (UM-SWF)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v01-5B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(pn) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Banaszczyk Grzegorz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003052C</td>
			<td>v02-3B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(wt) 12:10-13:40<br/> B (P-2)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW013052C</td>
			<td>v13-4B</td>
			<td>Kulturystyka</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> B (P-2)<br/></td>
			<td>Mgr Lisek Anna<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003050C</td>
			<td>v02-4H1</td>
			<td>Kulturystyka /korekcja</td>
			<td style="width: 110px;">(wt) 13:50-15:20<br/> -1-21 (H-14)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs adresowany szczególnie do tych studentów, u których w wyniku przeprowadzonych badan postawy ciala zdiagnozowano
nieprawidlowosci.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003051C</td>
			<td>v04-5B</td>
			<td>Kulturystyka /obwód</td>
			<td style="width: 110px;">(cz) 15:30-17:00<br/> B (P-2)<br/></td>
			<td>Mgr Biezunski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Zajecia typu &quot;cardio&quot;, uczestnicy beda zobowiazani do realizacji programu cwiczen opracowanego przez prowadzacego zajecia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004014C</td>
			<td>v02-7B</td>
			<td>Narciarstwo /s</td>
			<td style="width: 110px;">(cz) 17:30-19:00<br/> -1-21 (H-14)<br/>(wt) 18:50-20:20<br/> B (P-2)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004031C</td>
			<td>v04-0Z1</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Knap Tomasz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center"> Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014031C</td>
			<td>v14-3J12</td>
			<td>Nauka plywania</td>
			<td style="width: 110px;">(cz) 11:00-12:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Hrabanska Izabela<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia odbywaja sie w pierwszej czesci semestru do 19 kwietnia 2018 r.Znakomita, byc moze... ostatnia okazja dla studentów nie umiejacych plywac lub bardzo slabo plywajacych. Wymagany strój
kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW006032C</td>
			<td>v05-3N</td>
			<td>Pilka reczna</td>
			<td style="width: 110px;">(pt) 13:00-14:30<br/> N (P-22)<br/></td>
			<td>Mgr Palica Marcin<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Warunkiem uczestnictwa w kursie jest posiadanie na kazdych zajeciach dwóch
koszulek - jedna obowiazkowo biala, druga w ciemnym kolorze lub koszulki &quot;dwustronnej&quot;.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005032C</td>
			<td>v01-6NP</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> NP (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] .</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015032C</td>
			<td>v13-4NL</td>
			<td>Pilka siatkowa</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> NL (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005034C</td>
			<td>v01-7NP</td>
			<td>Pilka siatkowa /s</td>
			<td style="width: 110px;">(pn) 18:50-20:20<br/> NP (P-22)<br/>(sr) 18:50-20:20<br/> NP (P-22)<br/></td>
			<td>Mgr Osóbka Jakub<br/></td>
			<td class="center">0</td>
			<td class="center">60</td><td class="center"> Tak </td><td class="center">I <br/> II <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] O przydatnosci do sekcji decyduje trener. Czlonkostwo w sekcji zobowiazuje do reprezentowania Uczelni.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005033C</td>
			<td>v01-6NL</td>
			<td>Pilka siatkowa /z</td>
			<td style="width: 110px;">(pn) 17:10-18:40<br/> NL (P-22)<br/></td>
			<td>Mgr Jarosz Robert<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">[Uwaga: grupa przeznaczona tylko dla mężczyzn] Kurs adresowany dla osób, które dobrze opanowaly podstawowe elementy
techniki indywidualnej i taktyki gry zespolowej.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v02-BZ1</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(wt) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004032C</td>
			<td>v03-0Z</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 08:00-09:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW014032C</td>
			<td>v13-1J</td>
			<td>Plywanie</td>
			<td style="width: 110px;">(sr) 09:00-10:00<br/> BASEN (GEM)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 11 kwietnia. Wymagany strój kapielowy, czepek, klapki oraz mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW004033C</td>
			<td>v02-BZ</td>
			<td>Plywanie /z</td>
			<td style="width: 110px;">(wt) 19:00-20:00<br/> 1 (WCSPA)<br/></td>
			<td>Mgr Frank Marta<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Kurs przeznaczony dla osób bardzo dobrze plywajacych co najmniej trzema stylami. Wymagany strój kapielowy, czepek, klapki oraz
mydlo i recznik.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW012052C</td>
			<td>v14-4C</td>
			<td>Samoobrona</td>
			<td style="width: 110px;">(cz) 13:50-15:20<br/> C (P-2)<br/></td>
			<td>Mgr Gryszko Janusz<br/></td>
			<td class="center">0</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w pierwszej polowie semestru do 19 kwietnia. Wymagany dres lub judoga i &quot;japonki&quot;. Cwiczymy boso.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW015062C</td>
			<td>v14-1L1</td>
			<td>Squash</td>
			<td style="width: 110px;">(cz) 09:00-10:30<br/> SQ (HLV)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">1</td>
			<td class="center">15</td><td class="center"> Tak </td><td class="center"> II <br/></td><td class="center">Zajecia w drugiej polowie semestru od 19 kwietnia. Zajecia odbywaja sie w Centrum Squash'a &quot;Hasta La Vista&quot;, ul. Góralska 5. Na zajeciach trzeba posiadac wlasne pilki (pozostaly
sprzet czyli rakiety, gogle sa wypozyczane bezplatnie). Wymagany jest wygodny strój sportowy i czyste, zmienne obuwie sportowe z
podeszwa &quot;non-marking&quot; (nie pozostawiajace sladów na podlodze kortu!). Szczególy dotyczace kursu na pierwszych zajeciach.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v02-5NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(wt) 15:30-17:00<br/> NP (P-22)<br/></td>
			<td>Mgr Niewiara Krzysztof<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005042C</td>
			<td>v03-4NP</td>
			<td>Tenis stolowy</td>
			<td style="width: 110px;">(sr) 13:50-15:20<br/> NP (P-22)<br/></td>
			<td>Mgr Minikowski Boguslaw<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagana jest wlasna rakietka i pileczki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW005052C</td>
			<td>v03-4K</td>
			<td>Tenis ziemny</td>
			<td style="width: 110px;">(sr) 14:30-16:00<br/> KORTY (GEM)<br/></td>
			<td>Mgr Sliwinski Jerzy<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Wymagania: dobry poziom sprawnosci ogólnej, rakieta oraz pilki do gry.</td>
			</tr>
	<tr class="gradeX">
			<td>WFW003152C</td>
			<td>v06-2R1</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr inz. Cysewski Piotr<br/></td>
			<td class="center">0</td>
			<td class="center">30</td><td class="center"> Tak </td><td class="center">I <br/></td><td class="center">Jeden wyjazd jednodniowy (7.04.2018) oraz dwa wyjazdy dwudniowe (14-15, 21-22.04.2018). Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-11R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Kisielewska Malgorzata<br/></td>
			<td class="center">38</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy w Masyw Slezy 13 maja 2018r. Zbiórka w Sobótce o godz.9.00 na przystanku autobusowym PKS pl. ks. Józefa Belcha, obok kosciola. Dojazd we wlasnym zakresie lub liniami np: &quot;Polbus&quot;. Zakonczenie zajec w godzinach popoludniowych.
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska
</td>
			</tr>
	<tr class="gradeX">
			<td>WFW023152C</td>
			<td>v26-6R</td>
			<td>Turystyka górska</td>
			<td style="width: 110px;"></td>
			<td>Mgr Gryszko Filip<br/></td>
			<td class="center">10</td>
			<td class="center">8</td><td class="center"> Nie </td><td class="center">I <br/> II <br/></td><td class="center">Wyjazd jednodniowy 14 kwietnia (sobota) 2018r. do Sobótki - Masyw Slezy. Zbiórka o godz. 9.00 przy schronisku &quot;Pod Wiezyca&quot;. Dojazd we wlasnym zakresie. 
Szczególowe informacje na stronie: http://swfis.pwr.edu.pl/oferta/dyscypliny/turystyka-gorska</td>
			</tr></tbody>
	<tfoot>
		<tr>
			<th>Kod kursu</th>
			<th>Kod grupy</th>
			<th>Nazwa</th>
			<th>Termin</th>
			<th>Prowadzący</th>
			<th>Wolne miejsca</th>
			<th>ZZU</th>
			<th>Stacjonarne</th>
			<th>Stopień studiów</th>
			<th>Uwagi</th>
		</tr>
	</tfoot>
</table>
