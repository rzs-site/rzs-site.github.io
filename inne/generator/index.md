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
    <td>L00-47a</td>
    <td>angielski B1.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td>L00-50z</td>
    <td title="Open Mind" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td>L00-50y</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td>L00-50x</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td>L00-50w</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td>L00-50v</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-50u</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-50t</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td>L00-50s</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td>L00-50r</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td>L00-50q</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td>L00-50p</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 09:15-10:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td>L00-50o</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 09:15-10:45, (pt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td>L00-50n</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td>L00-50m</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td>L00-50l</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td>L00-50k</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td>L00-50j</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td>L00-50i</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td>L00-50h</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td>L00-50g</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td>L00-50f</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td>L00-50e</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td>L00-50d</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td>L00-50cn</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 11:15-12:45, (pt) 15:15-16:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td>L00-50cm</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td>L00-50cl</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td>L00-50ck</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td>L00-50cj</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td>L00-50ci</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td>L00-50ch</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td>L00-50cg</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td>L00-50cf</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td>L00-50ce</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td>L00-50cd</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td>L00-50cc</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 18:45-20:15</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td>L00-50cb</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td>L00-50ca</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td>L00-50c</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td>L00-50bz</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td>L00-50by</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td>L00-50bx</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td>L00-50bw</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td>L00-50bv</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td>L00-50bu</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td>L00-50bt</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td>L00-50bs</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 13:15-14:45</td>
    <td>Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td>L00-50br</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 17:05-18:35</td>
    <td>Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td>L00-50bq</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td>L00-50bp</td>
    <td>angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td>L00-50bo</td>
    <td>angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td>L00-50bn</td>
    <td>angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td>L00-50bm</td>
    <td>angielski B2.1</td>
    <td>(cz) 18:45-20:15, (wt) 09:15-10:45</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td>L00-50bl</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td>L00-50bk</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td>L00-50bj</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td>L00-50bi</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td>L00-50bh</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td>L00-50bg</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td>L00-50bf</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td>L00-50be</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td>L00-50bd</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td>L00-50bc</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(sr) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50bb</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50ba</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50b</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 09:15-10:45</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td>L00-50az</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td>L00-50ay</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(sr) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td>L00-50ax</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td>L00-50aw</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td>L00-50av</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 18:45-20:15, (pn) 09:15-10:45</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td>L00-50au</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 17:05-18:35, (pn) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td>L00-50at</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50as</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50ar</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-50aq</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-50ap</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-50ao</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(sr) 18:45-20:15, (wt) 13:15-14:45</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td>L00-50an</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 18:45-20:15, (pt) 11:15-12:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td>L00-50am</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td>L00-50al</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td>L00-50ak</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 18:45-20:15, (sr) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td>L00-50aj</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pn) 17:05-18:35, (sr) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td>L00-50ai</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td>L00-50ah</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 13:15-14:45, (sr) 07:30-09:00</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td>L00-50ag</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td>L00-50af</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td>L00-50ae</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td>L00-50ad</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(sr) 07:30-09:00, (wt) 09:15-10:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td>L00-50ac</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td>L00-50ab</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td>L00-50aa</td>
    <td title="Open Mind" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td>L00-50a</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.1</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td>L00-63z</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td>L00-63y</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td>L00-63x</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pt) 09:15-10:45</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td>L00-63w</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td>L00-63v</td>
    <td title="Open Mind" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td>L00-63u</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td>L00-63t</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63s</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63r</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63q</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63p</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63o</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 09:15-10:45</td>
    <td>Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63n</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td>L00-63m</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
  </tr>
  <tr>
    <td>L00-63l</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 09:15-10:45</td>
    <td>Mgr Drozd-Piotrowska Katarzyna</td>
  </tr>
  <tr>
    <td>L00-63k</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td>L00-63j</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 17:05-18:35</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td>L00-63i</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 15:15-16:45</td>
    <td>Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td>L00-63h</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td>L00-63g</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td>L00-63f</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 09:15-10:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td>L00-63e</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 07:30-09:00</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td>L00-63d</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td>L00-63ce</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td>L00-63cd</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 17:05-18:35, (pt) 11:15-12:45</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63cc</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (pt) 09:15-10:45</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63cb</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td>L00-63ca</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td>L00-63c</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td>L00-63bz</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td>L00-63by</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Wasilewska Joanna</td>
  </tr>
  <tr>
    <td>L00-63bx</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 17:05-18:35</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td>L00-63bw</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 15:15-16:45</td>
    <td>Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td>L00-63bv</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td>L00-63bu</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td>L00-63bt</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td>L00-63bs</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td>Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td>L00-63br</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td>L00-63bq</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td>Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td>L00-63bp</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pt) 13:15-14:45</td>
    <td>Dr Szela Monika</td>
  </tr>
  <tr>
    <td>L00-63bo</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td>L00-63bn</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 07:30-09:00</td>
    <td>Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td>L00-63bm</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td>L00-63bl</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td>L00-63bk</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td>L00-63bj</td>
    <td>angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td>L00-63bi</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td>L00-63bh</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 13:15-14:45</td>
    <td>Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td>L00-63bg</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td>L00-63bf</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 17:05-18:35</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td>L00-63be</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td>L00-63bd</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td>L00-63bc</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td>L00-63bb</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td>L00-63ba</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td>L00-63b</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 09:15-10:45, (wt) 18:45-20:15</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td>L00-63az</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63ay</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63ax</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (sr) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63aw</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63av</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td>L00-63au</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td>L00-63at</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td>L00-63as</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63ar</td>
    <td title="Open Mind" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
  </tr>
  <tr>
    <td>L00-63aq</td>
    <td title="Open Mind" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Leszkiewicz Joanna</td>
  </tr>
  <tr>
    <td>L00-63ap</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63ao</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td>L00-63an</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63am</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 11:15-12:45, (sr) 17:05-18:35</td>
    <td>Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td>L00-63al</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 15:15-16:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td>L00-63ak</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td>L00-63aj</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td>L00-63ai</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td>L00-63ah</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td>L00-63ag</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td>L00-63af</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td>L00-63ae</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td>L00-63ad</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 17:05-18:35, (sr) 09:15-10:45</td>
    <td>Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td>L00-63ac</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td>L00-63ab</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td>L00-63aa</td>
    <td title="Keynote" style="text-decoration: underline">angielski B2.2</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td>L00-63a</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski B2.2</td>
    <td>(pt) 07:30-09:00, (wt) 17:05-18:35</td>
    <td>Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td>L00-51z</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td>L00-51y</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td>L00-51x</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td>Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td>L00-51w</td>
    <td title="Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 17:05-18:35, (pt) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td>L00-51v</td>
    <td title="Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 13:15-14:45, (sr) 17:05-18:35</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td>L00-51u</td>
    <td title="Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td>L00-51t</td>
    <td title="Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 15:15-16:45, (pn) 15:15-16:45</td>
    <td>Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td>L00-51s</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 18:45-20:15</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td>L00-51r</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td>L00-51q</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td>L00-51p</td>
    <td title="New Language Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(sr) 11:15-12:45, (wt) 11:15-12:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td>L00-51o</td>
    <td title="New Language Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td>L00-51n</td>
    <td title="New Language Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td>L00-51m</td>
    <td title="New Language Keynote" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td>L00-51l</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td>L00-51k</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td>L00-51j</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td>L00-51i</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td>L00-51h</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pt) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td>L00-51g</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 15:15-16:45, (pt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td>L00-51f</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(pn) 13:15-14:45, (pt) 13:15-14:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td>L00-51e</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td>L00-51d</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 07:30-09:00, (wt) 18:45-20:15</td>
    <td>Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td>L00-51c</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td>L00-51b</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 09:15-10:45, (pn) 18:45-20:15</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td>L00-51a</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.1</td>
    <td>(cz) 07:30-09:00, (pn) 17:05-18:35</td>
    <td>Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td>L00-58a</td>
    <td title="Human Face of Technology" style="text-decoration: underline">angielski C1.1 HFT</td>
    <td>(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td>Mgr Brzózka Aleksander</td>
  </tr>
  <tr>
    <td>L00-60a</td>
    <td title="Effective Communication " style="text-decoration: underline">angielski C1.1 EC</td>
    <td>(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td>Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td>L00-61a</td>
    <td title="Training in Oral Communication for Engineers" style="text-decoration: underline">angielski C1.1 TOC</td>
    <td>(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td>Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td>L00-59a</td>
    <td title="Contemporary World from the Engineer's Perspective" style="text-decoration: underline">angielski C1.1 CWEP</td>
    <td>(cz) 17:05-18:35, (pn) 17:05-18:35</td>
    <td>Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td>L00-52l</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
  <tr>
    <td>L00-52k</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
  <tr>
    <td>L00-52j</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(sr) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
  </tr>
  <tr>
    <td>L00-52i</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pt) 13:15-14:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Wolf John</td>
  </tr>
  <tr>
    <td>L00-52h</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52g</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52f</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52e</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pn) 09:15-10:45, (pt) 07:30-09:00</td>
    <td>Mgr Brzózka Aleksander, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52d</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52c</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52b</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(cz) 09:15-10:45, (pn) 15:15-16:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-52a</td>
    <td title="New Language Leader" style="text-decoration: underline">angielski C1.2</td>
    <td>(cz) 07:30-09:00, (pn) 13:15-14:45</td>
    <td>Mgr Derechowski Janusz, Mgr Fyall Michael</td>
  </tr>
  <tr>
    <td>L00-62a</td>
    <td title="Advanced English in Communication" style="text-decoration: underline">angielski C2.1 AEiC</td>
    <td>(cz) 18:45-20:15, (wt) 18:45-20:15</td>
    <td>Mgr Mirowska Agnieszka, Mgr Wolf John</td>
  </tr>
  <tr>
    <td>L00-05g</td>
    <td>francuski A1</td>
    <td>(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td>L00-05f</td>
    <td>francuski A1</td>
    <td>(pn) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td>L00-05e</td>
    <td>francuski A1</td>
    <td>(pt) 07:30-09:00, (sr) 11:15-12:45</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td>L00-05d</td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (sr) 09:15-10:45</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td>L00-05c</td>
    <td>francuski A1</td>
    <td>(pt) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td>L00-05b</td>
    <td>francuski A1</td>
    <td>(pt) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
  </tr>
  <tr>
    <td>L00-05a</td>
    <td>francuski A1</td>
    <td>(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td>Mgr Dmowska Ewa</td>
  </tr>
  <tr>
    <td>L00-09a</td>
    <td>francuski A2</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td>L00-06a</td>
    <td>francuski B2.2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td>L00-10h</td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 13:15-14:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td>L00-10g</td>
    <td>hiszpanski A1</td>
    <td>(pn) 13:15-14:45, (sr) 09:15-10:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td>L00-10f</td>
    <td>hiszpanski A1</td>
    <td>(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td>L00-10c</td>
    <td>hiszpanski A1</td>
    <td>(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td>Mgr Praclawska Magdalena</td>
  </tr>
  <tr>
    <td>L00-10b</td>
    <td>hiszpanski A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Mgr Bednarczuk Jacek</td>
  </tr>
  <tr>
    <td>L00-10a</td>
    <td>hiszpanski A1</td>
    <td>(cz) 09:15-10:45, (wt) 07:30-09:00</td>
    <td>Mgr Bednarczuk Jacek</td>
  </tr>
  <tr>
    <td>L00-13a</td>
    <td>hiszpanski A2</td>
    <td>(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td>L00-15a</td>
    <td>hiszpanski B2.2</td>
    <td>(pn) 15:15-16:45, (sr) 11:15-12:45</td>
    <td>Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td>L00-16b</td>
    <td title="w jezyku angielskim" style="text-decoration: underline">japonski A1</td>
    <td>(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td>Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td>L00-16a</td>
    <td title="w jezyku angielskim " style="text-decoration: underline">japonski A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td>L00-25l</td>
    <td>niemiecki A1</td>
    <td>(cz) 07:30-09:00, (pn) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td>L00-25k</td>
    <td>niemiecki A1</td>
    <td>(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td>Doc. dr Modrzycka Irina</td>
  </tr>
  <tr>
    <td>L00-25j</td>
    <td>niemiecki A1</td>
    <td>(cz) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Doc. dr Modrzycka Irina</td>
  </tr>
  <tr>
    <td>L00-25i</td>
    <td>niemiecki A1</td>
    <td>(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td>L00-25h</td>
    <td>niemiecki A1</td>
    <td>(pn) 13:15-14:45, (pt) 11:15-12:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td>L00-25g</td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (pn) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td>L00-25f</td>
    <td>niemiecki A1</td>
    <td>(pn) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frankiewicz Iwona</td>
  </tr>
  <tr>
    <td>L00-25e</td>
    <td>niemiecki A1</td>
    <td>(pn) 09:15-10:45, (sr) 07:30-09:00</td>
    <td>Mgr Frankiewicz Iwona</td>
  </tr>
  <tr>
    <td>L00-25d</td>
    <td>niemiecki A1</td>
    <td>(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td>L00-25c</td>
    <td>niemiecki A1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td>L00-25b</td>
    <td>niemiecki A1</td>
    <td>(cz) 17:05-18:35, (wt) 17:05-18:35</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td>L00-25a</td>
    <td>niemiecki A1</td>
    <td>(cz) 15:15-16:45, (wt) 13:15-14:45</td>
    <td>Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td>L00-29c</td>
    <td>niemiecki A2</td>
    <td>(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Frymar Ewa, Mgr Garga Maria</td>
  </tr>
  <tr>
    <td>L00-29b</td>
    <td>niemiecki A2</td>
    <td>(pn) 13:15-14:45, (sr) 15:15-16:45</td>
    <td>Mgr Strach Jan</td>
  </tr>
  <tr>
    <td>L00-29a</td>
    <td>niemiecki A2</td>
    <td>(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td>Mgr Dlugosz Zygmunt</td>
  </tr>
  <tr>
    <td>L00-30b</td>
    <td>niemiecki B1.1</td>
    <td>(cz) 13:15-14:45, (pn) 09:15-10:45</td>
    <td>Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td>L00-30a</td>
    <td>niemiecki B1.1</td>
    <td>(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td>Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td>L00-31e</td>
    <td>niemiecki B2.1</td>
    <td>(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td>Mgr Garga Maria</td>
  </tr>
  <tr>
    <td>L00-31d</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 07:30-09:00, (sr) 09:15-10:45</td>
    <td>Mgr Frymar Ewa</td>
  </tr>
  <tr>
    <td>L00-31c</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 09:15-10:45, (wt) 11:15-12:45</td>
    <td>Mgr Kania Anna</td>
  </tr>
  <tr>
    <td>L00-31b</td>
    <td>niemiecki B2.1</td>
    <td>(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td>Mgr Stanislawczyk Halina</td>
  </tr>
  <tr>
    <td>L00-31a</td>
    <td>niemiecki B2.1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td>L00-32d</td>
    <td>niemiecki B2.2</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td>L00-32c</td>
    <td>niemiecki B2.2</td>
    <td>(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td>Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td>L00-32b</td>
    <td>niemiecki B2.2</td>
    <td>(pn) 17:05-18:35, (sr) 15:15-16:45</td>
    <td>Mgr Zgondek Piotr</td>
  </tr>
  <tr>
    <td>L00-32a</td>
    <td>niemiecki B2.2</td>
    <td>(pt) 13:15-14:45, (wt) 15:15-16:45</td>
    <td>Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td>L00-33a</td>
    <td>niemiecki C1.1</td>
    <td>(pn) 18:45-20:15, (sr) 18:45-20:15</td>
    <td>Mgr Okulewicz Krzysztof</td>
  </tr>
  <tr>
    <td>L00-34a</td>
    <td>niemiecki C1.2</td>
    <td>(cz) 18:45-20:15, (wt) 17:05-18:35</td>
    <td>Mgr Okulewicz Krzysztof, Mgr Strach Jan</td>
  </tr>
  <tr>
    <td>L00-19e</td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td>Mgr Kotlarczyk Elena</td>
  </tr>
  <tr>
    <td>L00-19d</td>
    <td>rosyjski A1</td>
    <td>(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td>L00-19c</td>
    <td>rosyjski A1</td>
    <td>(pt) 13:15-14:45, (wt) 09:15-10:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td>L00-19b</td>
    <td>rosyjski A1</td>
    <td>(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td>L00-19a</td>
    <td>rosyjski A1</td>
    <td>(cz) 13:15-14:45, (pn) 11:15-12:45</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td>L00-20a</td>
    <td>rosyjski A2</td>
    <td>(pt) 17:05-18:35, (wt) 07:30-09:00</td>
    <td>Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td>L00-23a</td>
    <td>rosyjski B2.2</td>
    <td>(pn) 07:30-09:00, (sr) 13:15-14:45</td>
    <td>Mgr Lesiak Natalia</td>
  </tr>
</table>

</div>
{::options parse_block_html="false" /}
