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
    <th>Kod</th>
    <th>Nazwa</th>
    <th>Termin</th>
    <th>Prowadzący</th>
    <th>Uwagi</th>
  </tr>
  <tr>
    <td>L00-30a</td>
    <td>niemiecki B1.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Bloch Anna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-30b</td>
    <td>niemiecki B1.1</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Grusiecka Joanna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-31b</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanislawczyk Halina</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-31c</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Kania Anna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-31a</td>
    <td>niemiecki B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Soltys Dorota</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-31e</td>
    <td>niemiecki B2.1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Garga Maria</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-31d</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frymar Ewa</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-32b</td>
    <td>niemiecki B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Zgondek Piotr</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-32d</td>
    <td>niemiecki B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-32c</td>
    <td>niemiecki B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-32a</td>
    <td>niemiecki B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Bloch Anna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-33a</td>
    <td>niemiecki C1.1</td>
    <td>(pn) 18:45-20:15, (sr) 18:45-20:15</td>
    <td>Mgr Okulewicz Krzysztof</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-34a</td>
    <td>niemiecki C1.2</td>
    <td>(cz) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Okulewicz Krzysztof, Mgr Strach Jan</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-23a</td>
    <td>rosyjski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 13:15-14:45</td>
    <td>Mgr Lesiak Natalia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-50ae</td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ap</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50at</td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Licznerska Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50au</td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (pn) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50be</td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cf</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Wieruszewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50k</td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50t</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wasilewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50w</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50aa</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
    <td>Open Mind</td>
  </tr>
  <tr>
    <td>L00-50ab</td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Gwizdala Grazyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50af</td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Henkie Justyna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50av</td>
    <td>angielski B2.1</td>
    <td>(cz) 18:45-20:15, (pn) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ay</td>
    <td>angielski B2.1</td>
    <td>(sr) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50b</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 09:15-10:45</td>
    <td>Mgr Baka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ba</td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bi</td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Rogulska Paulina</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bl</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bm</td>
    <td>angielski B2.1</td>
    <td>(cz) 18:45-20:15, (wt) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-50c</td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cg</td>
    <td>angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50cn</td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 15:15-16:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50f</td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50l</td>
    <td>angielski B2.1</td>
    <td>(cz) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50u</td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50v</td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ac</td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50aq</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50az</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Mroczka Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bd</td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50br</td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Staszewska Teresa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bs</td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 13:15-14:45</td>
    <td>Mgr Staszewska Teresa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ci</td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Wiszniowska Zuzanna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50cm</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50h</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50j</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50x</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50aj</td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bn</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Kasprzak Renata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-50ca</td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Wardynska Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50g</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50o</td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (pt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50y</td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Golka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50z</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
    <td>Open Mind</td>
  </tr>
  <tr>
    <td>L00-50ad</td>
    <td>angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ai</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50al</td>
    <td>angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Krawczenko Walentyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ax</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bg</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bj</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bq</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cd</td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Wieruszewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ck</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Dr Zwiefka Maria</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cl</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50e</td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50m</td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50r</td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Tomala Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50aw</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bc</td>
    <td>angielski B2.1</td>
    <td>(sr) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bk</td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Romanczuk Urszula</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bu</td>
    <td>angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bx</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Trzyna Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bz</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Trzyna Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cj</td>
    <td>angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50n</td>
    <td>angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50p</td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 09:15-10:45</td>
    <td>Mgr Sliwerska Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50q</td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Sliwerska Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50a</td>
    <td>angielski B2.1</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Baka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50am</td>
    <td>angielski B2.1</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Krawczenko Walentyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50an</td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 11:15-12:45</td>
    <td>Mgr Krawczenko Walentyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50as</td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bh</td>
    <td>angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Piotrowska Kinga</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bt</td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczawinska Elzbieta</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bv</td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50bw</td>
    <td>angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50by</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Trzyna Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cb</td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50cc</td>
    <td>angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 18:45-20:15</td>
    <td>Mgr Wardynska Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50d</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Bogusz-Broy Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50s</td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Tomala Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ag</td>
    <td>angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Henkie Justyna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50ah</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ak</td>
    <td>angielski B2.1</td>
    <td>(pn) 18:45-20:15, (sr) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ao</td>
    <td>angielski B2.1</td>
    <td>(sr) 18:45-20:15, (wt) 13:15-14:45</td>
    <td>Mgr Krzos Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ar</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bb</td>
    <td>angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bf</td>
    <td>angielski B2.1</td>
    <td>(pn) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50bo</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-50bp</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-50ce</td>
    <td>angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Wieruszewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-50ch</td>
    <td>angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-50i</td>
    <td>angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ae</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63am</td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Krzos Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63as</td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bb</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63be</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Pytel Dorota</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bg</td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Pytel Dorota</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bk</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63n</td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Dudzinska Jolanta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63o</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 09:15-10:45</td>
    <td>Mgr Florczyk Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63v</td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Grygorowicz Anna</td>
    <td>Open Mind</td>
  </tr>
  <tr>
    <td>L00-63af</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63al</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Krawczenko Walentyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bd</td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Piotrowska Kinga</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bf</td>
    <td>angielski B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 17:05-18:35</td>
    <td>Mgr Pytel Dorota</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bh</td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63bi</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Rogulska Paulina</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63bm</td>
    <td>angielski B2.2</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bv</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Trzyna Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63cd</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Dr Wieckowska Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63k</td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63p</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Florczyk Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63q</td>
    <td>angielski B2.2</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Florczyk Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63aa</td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Henkie Justyna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63aq</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
    <td>Open Mind</td>
  </tr>
  <tr>
    <td>L00-63at</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ay</td>
    <td>angielski B2.2</td>
    <td>(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63az</td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Mirowska Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63bj</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-63bn</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bp</td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ca</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Wasilewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63m</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63s</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63t</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63aj</td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Kondro Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ao</td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63au</td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63aw</td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ba</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mroczka Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63d</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Bednarski Mariusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63g</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63w</td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Gwizdala Grazyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63x</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pt) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63z</td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ab</td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Henkie Justyna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63ad</td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ar</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
    <td>Open Mind</td>
  </tr>
  <tr>
    <td>L00-63bu</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Trzyna Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bz</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Wasilewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63h</td>
    <td>angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Bogusz-Broy Ewa</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ag</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ak</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Krawczenko Walentyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63av</td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63bc</td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bq</td>
    <td>angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Sliwerska Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bt</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Tomala Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63by</td>
    <td>angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Wasilewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63cb</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wieruszewska Joanna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63cc</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (pt) 09:15-10:45</td>
    <td>Dr Wieckowska Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ce</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63f</td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Bednarski Mariusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63u</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Wiszniowska Zuzanna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63y</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63a</td>
    <td>angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Baka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ac</td>
    <td>angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Henkie Justyna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63an</td>
    <td>angielski B2.2</td>
    <td>(pn) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Krzos Agnieszka</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ax</td>
    <td>angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-63bl</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bo</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Szczepanowska Anna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63br</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Sliwerska Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bx</td>
    <td>angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63j</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ah</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ai</td>
    <td>angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63ap</td>
    <td>angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63b</td>
    <td>angielski B2.2</td>
    <td>(pt) 09:15-10:45, (wt) 18:45-20:15</td>
    <td>Mgr Baka Barbara</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bs</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Tomala Malgorzata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63bw</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Wardynska Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63c</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63e</td>
    <td>angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Bednarski Mariusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63i</td>
    <td>angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 15:15-16:45</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63l</td>
    <td>angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 09:15-10:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-63r</td>
    <td>angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Florczyk Agnieszka</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-51b</td>
    <td>angielski C1.1</td>
    <td>(cz) 09:15-10:45, (pn) 18:45-20:15</td>
    <td>Mgr Derechowski Janusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51k</td>
    <td>angielski C1.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Mally Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51o</td>
    <td>angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Morawska Joanna</td>
    <td>New Language Keynote</td>
  </tr>
  <tr>
    <td>L00-51v</td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-51g</td>
    <td>angielski C1.1</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51h</td>
    <td>angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51i</td>
    <td>angielski C1.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51c</td>
    <td>angielski C1.1</td>
    <td>(cz) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Derechowski Janusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51d</td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 18:45-20:15</td>
    <td>Mgr Kondro Magdalena</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51n</td>
    <td>angielski C1.1</td>
    <td>(pt) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
    <td>New Language Keynote</td>
  </tr>
  <tr>
    <td>L00-51q</td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Rozwadowski Dominik</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51r</td>
    <td>angielski C1.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Rozwadowski Dominik</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51t</td>
    <td>angielski C1.1</td>
    <td>(cz) 15:15-16:45, (pn) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-51l</td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51s</td>
    <td>angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Rozwadowski Dominik</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51f</td>
    <td>angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Koszutska Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51j</td>
    <td>angielski C1.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51m</td>
    <td>angielski C1.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
    <td>New Language Keynote</td>
  </tr>
  <tr>
    <td>L00-51u</td>
    <td>angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-51x</td>
    <td>angielski C1.1</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51a</td>
    <td>angielski C1.1</td>
    <td>(cz) 07:30-09:00, (pn) 17:05-18:35</td>
    <td>Mgr Derechowski Janusz</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51e</td>
    <td>angielski C1.1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51p</td>
    <td>angielski C1.1</td>
    <td>(sr) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Morawska Joanna</td>
    <td>New Language Keynote</td>
  </tr>
  <tr>
    <td>L00-51y</td>
    <td>angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-51w</td>
    <td>angielski C1.1</td>
    <td>(cz) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
    <td>Keynote</td>
  </tr>
  <tr>
    <td>L00-51z</td>
    <td>angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52a</td>
    <td>angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 13:15-14:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52f</td>
    <td>angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52b</td>
    <td>angielski C1.2</td>
    <td>(cz) 09:15-10:45, (pn) 15:15-16:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52d</td>
    <td>angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52e</td>
    <td>angielski C1.2</td>
    <td>(pn) 09:15-10:45, (pt) 07:30-09:00</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52h</td>
    <td>angielski C1.2</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52i</td>
    <td>angielski C1.2</td>
    <td>(pt) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52j</td>
    <td>angielski C1.2</td>
    <td>(sr) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52l</td>
    <td>angielski C1.2</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52k</td>
    <td>angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52c</td>
    <td>angielski C1.2</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-52g</td>
    <td>angielski C1.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
    <td>New Language Leader</td>
  </tr>
  <tr>
    <td>L00-06a</td>
    <td>francuski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25j</td>
    <td>niemiecki A1</td>
    <td>(cz) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Doc. dr Modrzycka Irina</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25d</td>
    <td>niemiecki A1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25g</td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (pn) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25i</td>
    <td>niemiecki A1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25l</td>
    <td>niemiecki A1</td>
    <td>(cz) 07:30-09:00, (pn) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25b</td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25a</td>
    <td>niemiecki A1</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Grusiecka Joanna</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25c</td>
    <td>niemiecki A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25e</td>
    <td>niemiecki A1</td>
    <td>(pn) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Frankiewicz Iwona</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25f</td>
    <td>niemiecki A1</td>
    <td>(pn) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frankiewicz Iwona</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25h</td>
    <td>niemiecki A1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-25k</td>
    <td>niemiecki A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Doc. dr Modrzycka Irina</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05e</td>
    <td>francuski A1</td>
    <td>(pt) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Paron Zofia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05b</td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05f</td>
    <td>francuski A1</td>
    <td>(pn) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanisz Mariusz</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05c</td>
    <td>francuski A1</td>
    <td>(pt) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05a</td>
    <td>francuski A1</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05d</td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Paron Zofia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-05g</td>
    <td>francuski A1</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Stanisz Mariusz</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10g</td>
    <td>hiszpanski A1</td>
    <td>(pn) 13:15-14:45, (sr) 09:15-10:45</td>
    <td>Mgr Zalewska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10h</td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Zalewska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10c</td>
    <td>hiszpanski A1</td>
    <td>(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td>Mgr Praclawska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10f</td>
    <td>hiszpanski A1</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Zalewska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10b</td>
    <td>hiszpanski A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Bednarczuk Jacek</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-10a</td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 07:30-09:00</td>
    <td>Mgr Bednarczuk Jacek</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-16a</td>
    <td>japonski A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Dr Ota Toyotaka</td>
    <td>w jezyku angielskim</td>
  </tr>
  <tr>
    <td>L00-16b</td>
    <td>japonski A1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Dr Ota Toyotaka</td>
    <td>w jezyku angielskim</td>
  </tr>
  <tr>
    <td>L00-19b</td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Klyus Julia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-19e</td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kotlarczyk Elena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-19a</td>
    <td>rosyjski A1</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-19d</td>
    <td>rosyjski A1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-19c</td>
    <td>rosyjski A1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Klyus Julia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-09a</td>
    <td>francuski A2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Stanisz Mariusz</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-13a</td>
    <td>hiszpanski A2</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-29a</td>
    <td>niemiecki A2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Dlugosz Zygmunt</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-29c</td>
    <td>niemiecki A2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Frymar Ewa, Mgr Garga Maria</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-29b</td>
    <td>niemiecki A2</td>
    <td>(pn) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Strach Jan</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-20a</td>
    <td>rosyjski A2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Klyus Julia</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-47a</td>
    <td>angielski B1.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-58a</td>
    <td>angielski C1.1 Human</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Brzózka Aleksander</td>
    <td>Human Face of Technology</td>
  </tr>
  <tr>
    <td>L00-15a</td>
    <td>hiszpanski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
    <td></td>
  </tr>
  <tr>
    <td>L00-59a</td>
    <td>angielski C1.1 Współczesny</td>
    <td>(cz) 17:05-18:35, (pn) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
    <td>Contemporary World from the Engineer's Perspective</td>
  </tr>
  <tr>
    <td>L00-60a</td>
    <td>angielski C1.1 Skuteczna</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
    <td>Effective Communication</td>
  </tr>
  <tr>
    <td>L00-61a</td>
    <td>angielski C1.1 Trening</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Dr Wieckowska Aleksandra</td>
    <td>Training in Oral Communication for Engineers</td>
  </tr>
  <tr>
    <td>L00-62a</td>
    <td>angielski C2.1 Zaawansowana</td>
    <td>(cz) 18:45-20:15, (wt) 18:45-20:15</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
    <td>Advanced English in Communication</td>
  </tr>
</table>

</div>
{::options parse_block_html="false" /}
