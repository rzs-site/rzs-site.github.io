---
layout: default
gen_style: true
---
Generator planu
---

<script>
function myFunction(but,te) {
  var table, tr, td, i, butt;
  table = document.getElementById("tabelaHTML");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.indexOf(te) > -1) {
        if(but.checked) tr[i].style.display = "none";
        if(!but.checked) tr[i].style.display = "";
      }
    }
  }
}
</script>

### Status projektu
Generator Planu RZS został stworzony w celu uproszczenia wyboru kursów ogólnouczelnianych.
Obecna wersja (v0.5) przetwarza lektoraty dla studiów stacjonarnych I stopnia.
Planowane jest rozszerzenie bazy o pozostałe kursy (w tym sportowe) oraz dodanie możliwości wyboru rodzaju.

### Obsługa
Należy odznaczyć godziny, które powinny zostać wykluczone z wyszukiwania.
Skrypt wybierze kursy pasujące do "zielonych" komórek.
W razie błędnego wyboru trzeba odświeżyć stronę, nie ma jeszcze możliwości poprawy pojedynczych godzin.

### Dane
Aktualne źródło: serwer RZS. Ostatni import: 2018.09.04, 15:00

{::options parse_block_html="true" /}
<div class="table-box">
<table>

<tr>
	<td></td>
	<td>Pon</td>
	<td>Wt</td>
	<td>Śr</td>
	<td>Czw</td>
	<td>Pt</td>
</tr>

<tr>
	<td>07:30</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 07')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>09:15</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 09')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>11:15</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 11')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>13:15</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 13')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>15:15</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 15')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>17:05</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 17')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>18:55</td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pn) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(wt) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(sr) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(cz) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="radio" onclick="myFunction(this,'(pt) 18')"><span class="slider"></span></label></td>
</tr>
</table>

</div>
{::options parse_block_html="false" /}

<br />

{::options parse_block_html="true" /}
<div class="table-box">
<table id="tabelaHTML">
  <tr>
    <th>Kod grupy</th>
    <th>Nazwa</th>
    <th>Termin</th>
    <th>Prowadzący</th>
  </tr>
  <tr>
    <td><p title="">L00-30a</p></td>
    <td>niemiecki B1.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td><p title="">L00-30b</p></td>
    <td>niemiecki B1.1</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td><p title="">L00-31b</p></td>
    <td>niemiecki B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanislawczyk Halina</td>
  </tr>
  <tr>
    <td><p title="">L00-31c</p></td>
    <td>niemiecki B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td><p title="">L00-31a</p></td>
    <td>niemiecki B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td><p title="">L00-31e</p></td>
    <td>niemiecki B2.1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Garga Maria</td>
  </tr>
  <tr>
    <td><p title="">L00-31d</p></td>
    <td>niemiecki B2.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frymar Ewa</td>
  </tr>
  <tr>
    <td><p title="">L00-32b</p></td>
    <td>niemiecki B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Zgondek Piotr</td>
  </tr>
  <tr>
    <td><p title="">L00-32d</p></td>
    <td>niemiecki B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td><p title="">L00-32c</p></td>
    <td>niemiecki B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td><p title="">L00-32a</p></td>
    <td>niemiecki B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td><p title="">L00-33a</p></td>
    <td>niemiecki C1.1</td>
    <td>(pn) 18:45-20:15, (sr) 18:45-20:15</td>
    <td>Mgr Okulewicz Krzysztof</td>
  </tr>
  <tr>
    <td><p title="">L00-34a</p></td>
    <td>niemiecki C1.2</td>
    <td>(cz) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Okulewicz Krzysztof, Mgr Strach Jan</td>
  </tr>
  <tr>
    <td><p title="">L00-23a</p></td>
    <td>rosyjski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 13:15-14:45</td>
    <td>Mgr Lesiak Natalia</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ae</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ap</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50at</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50au</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (pn) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50be</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cf</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50k</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50t</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50w</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td><p title="Open Mind">L00-50aa</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ab</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50af</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50av</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 18:45-20:15, (pn) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50ay</p></td>
    <td>angielski B2.1</td>
    <td>(sr) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50b</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 09:15-10:45</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ba</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50bi</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bl</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td><p title="">L00-50bm</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 18:45-20:15, (wt) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50c</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50cg</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cn</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 15:15-16:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50f</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50l</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50u</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50v</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ac</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50aq</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50az</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bd</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50br</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bs</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 13:15-14:45</td>
    <td>Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50ci</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cm</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50h</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50j</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50x</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50aj</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td><p title="">L00-50bn</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ca</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50g</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50o</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (pt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50y</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td><p title="Open Mind">L00-50z</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ad</p></td>
    <td>angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ai</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50al</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50ax</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bg</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50bj</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bq</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cd</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ck</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cl</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50e</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50m</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50r</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50aw</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bc</p></td>
    <td>angielski B2.1</td>
    <td>(sr) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bk</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50bu</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bx</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bz</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cj</p></td>
    <td>angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50n</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50p</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 09:15-10:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50q</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50a</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50am</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50an</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 11:15-12:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50as</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bh</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50bt</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50bv</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bw</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50by</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cb</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50cc</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 18:45-20:15</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50d</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50s</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50ag</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ah</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ak</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (sr) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ao</p></td>
    <td>angielski B2.1</td>
    <td>(sr) 18:45-20:15, (wt) 13:15-14:45</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ar</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bb</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50bf</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td><p title="">L00-50bo</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td><p title="">L00-50bp</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50ce</p></td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-50ch</p></td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-50i</p></td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ae</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63am</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63as</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bb</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63be</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bg</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bk</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63n</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63o</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 09:15-10:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Open Mind">L00-63v</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63af</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63al</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bd</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bf</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 17:05-18:35</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63bh</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63bi</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bm</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bv</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63cd</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63k</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63p</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63q</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63aa</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td><p title="Open Mind">L00-63aq</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63at</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63ay</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63az</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="">L00-63bj</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bn</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bp</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ca</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63m</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63s</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63t</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63aj</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ao</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63au</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63aw</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ba</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63d</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63g</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63w</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63x</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pt) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63z</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63ab</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ad</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td><p title="Open Mind">L00-63ar</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bu</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bz</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63h</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ag</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ak</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63av</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bc</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bq</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bt</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63by</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63cb</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63cc</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (pt) 09:15-10:45</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63ce</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63f</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63u</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63y</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63a</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63ac</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63an</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63ax</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bl</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bo</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63br</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bx</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63j</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ah</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ai</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63ap</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63b</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 09:15-10:45, (wt) 18:45-20:15</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bs</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63bw</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63c</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63e</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63i</p></td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 15:15-16:45</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-63l</p></td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 09:15-10:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-63r</p></td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51b</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 09:15-10:45, (pn) 18:45-20:15</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51k</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Keynote">L00-51o</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-51v</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51g</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51h</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51i</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51c</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51d</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 18:45-20:15</td>
    <td>Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td><p title="New Language Keynote">L00-51n</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51q</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51r</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-51t</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 15:15-16:45, (pn) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51l</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51s</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51f</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51j</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td><p title="New Language Keynote">L00-51m</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-51u</p></td>
    <td>angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51x</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51a</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (pn) 17:05-18:35</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51e</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td><p title="New Language Keynote">L00-51p</p></td>
    <td>angielski C1.1</td>
    <td>(sr) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51y</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td><p title="Keynote">L00-51w</p></td>
    <td>angielski C1.1</td>
    <td>(cz) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-51z</p></td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52a</p></td>
    <td>angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 13:15-14:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52f</p></td>
    <td>angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52b</p></td>
    <td>angielski C1.2</td>
    <td>(cz) 09:15-10:45, (pn) 15:15-16:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52d</p></td>
    <td>angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52e</p></td>
    <td>angielski C1.2</td>
    <td>(pn) 09:15-10:45, (pt) 07:30-09:00</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52h</p></td>
    <td>angielski C1.2</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52i</p></td>
    <td>angielski C1.2</td>
    <td>(pt) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52j</p></td>
    <td>angielski C1.2</td>
    <td>(sr) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52l</p></td>
    <td>angielski C1.2</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52k</p></td>
    <td>angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52c</p></td>
    <td>angielski C1.2</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="New Language Leader">L00-52g</p></td>
    <td>angielski C1.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td><p title="">L00-06a</p></td>
    <td>francuski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td><p title="">L00-25j</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Doc. dr Modrzycka Irina</td>
  </tr>
  <tr>
    <td><p title="">L00-25d</p></td>
    <td>niemiecki A1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td><p title="">L00-25g</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (pn) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td><p title="">L00-25i</p></td>
    <td>niemiecki A1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td><p title="">L00-25l</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 07:30-09:00, (pn) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td><p title="">L00-25b</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td><p title="">L00-25a</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td><p title="">L00-25c</p></td>
    <td>niemiecki A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td><p title="">L00-25e</p></td>
    <td>niemiecki A1</td>
    <td>(pn) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Frankiewicz Iwona</td>
  </tr>
  <tr>
    <td><p title="">L00-25f</p></td>
    <td>niemiecki A1</td>
    <td>(pn) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frankiewicz Iwona</td>
  </tr>
  <tr>
    <td><p title="">L00-25h</p></td>
    <td>niemiecki A1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td><p title="">L00-25k</p></td>
    <td>niemiecki A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Doc. dr Modrzycka Irina</td>
  </tr>
  <tr>
    <td><p title="">L00-05e</p></td>
    <td>francuski A1</td>
    <td>(pt) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td><p title="">L00-05b</p></td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
  </tr>
  <tr>
    <td><p title="">L00-05f</p></td>
    <td>francuski A1</td>
    <td>(pn) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td><p title="">L00-05c</p></td>
    <td>francuski A1</td>
    <td>(pt) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td><p title="">L00-05a</p></td>
    <td>francuski A1</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
  </tr>
  <tr>
    <td><p title="">L00-05d</p></td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td><p title="">L00-05g</p></td>
    <td>francuski A1</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td><p title="">L00-10g</p></td>
    <td>hiszpanski A1</td>
    <td>(pn) 13:15-14:45, (sr) 09:15-10:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td><p title="">L00-10h</p></td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td><p title="">L00-10c</p></td>
    <td>hiszpanski A1</td>
    <td>(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td>Mgr Praclawska Magdalena</td>
  </tr>
  <tr>
    <td><p title="">L00-10f</p></td>
    <td>hiszpanski A1</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td><p title="">L00-10b</p></td>
    <td>hiszpanski A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Bednarczuk Jacek</td>
  </tr>
  <tr>
    <td><p title="">L00-10a</p></td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 07:30-09:00</td>
    <td>Mgr Bednarczuk Jacek</td>
  </tr>
  <tr>
    <td><p title="w jezyku angielskim ">L00-16a</p></td>
    <td>japonski A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td><p title="w jezyku angielskim">L00-16b</p></td>
    <td>japonski A1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td><p title="">L00-19b</p></td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td><p title="">L00-19e</p></td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kotlarczyk Elena</td>
  </tr>
  <tr>
    <td><p title="">L00-19a</p></td>
    <td>rosyjski A1</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td><p title="">L00-19d</p></td>
    <td>rosyjski A1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td><p title="">L00-19c</p></td>
    <td>rosyjski A1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td><p title="">L00-09a</p></td>
    <td>francuski A2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td><p title="">L00-13a</p></td>
    <td>hiszpanski A2</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td><p title="">L00-29a</p></td>
    <td>niemiecki A2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Dlugosz Zygmunt</td>
  </tr>
  <tr>
    <td><p title="">L00-29c</p></td>
    <td>niemiecki A2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Frymar Ewa, Mgr Garga Maria</td>
  </tr>
  <tr>
    <td><p title="">L00-29b</p></td>
    <td>niemiecki A2</td>
    <td>(pn) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td><p title="">L00-20a</p></td>
    <td>rosyjski A2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td><p title="">L00-47a</p></td>
    <td>angielski B1.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td><p title="Human Face of Technology">L00-58a</p></td>
    <td>angielski C1.1 Human</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Brzózka Aleksander</td>
  </tr>
  <tr>
    <td><p title="">L00-15a</p></td>
    <td>hiszpanski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td><p title="Contemporary World from the Engineer's Perspective">L00-59a</p></td>
    <td>angielski C1.1 Współczesny</td>
    <td>(cz) 17:05-18:35, (pn) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td><p title="Effective Communication ">L00-60a</p></td>
    <td>angielski C1.1 Skuteczna</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td><p title="Training in Oral Communication for Engineers">L00-61a</p></td>
    <td>angielski C1.1 Trening</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td><p title="Advanced English in Communication">L00-62a</p></td>
    <td>angielski C2.1 Zaawansowana</td>
    <td>(cz) 18:45-20:15, (wt) 18:45-20:15</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
</table>

</div>
{::options parse_block_html="false" /}
