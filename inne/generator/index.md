---
layout: gen_layout
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

Uwaga! Generator planu jest całkowicie nową funkcjonalnością. Aktualnie kolizje są już wykreślane prawidłowo, natomiast nadal odznaczanie wybranych wcześniej kratek prowadzi do awarii skryptu. W razie błędnego wyboru, odświeżyć stronę.

<table style="float: left; margin: 10px 0px;">

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
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 07')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 07')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>09:15</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 09')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 09')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>11:15</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 11')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 11')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>13:15</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 13')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 13')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>15:15</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 15')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 15')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>17:05</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 17')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 17')"><span class="slider"></span></label></td>
</tr>

<tr>
	<td>18:55</td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pn) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(wt) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(sr) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(cz) 18')"><span class="slider"></span></label></td>
	<td><label class="switch"><input type="checkbox" onclick="myFunction(this,'(pt) 18')"><span class="slider"></span></label></td>
</tr>
</table>


<table style="float: left; margin: 10px 0px;" id="tabelaHTML">
  <tr>
    <th class="tg-yw4l">Kod grupy</th>
    <th class="tg-yw4l">Nazwa</th>
    <th class="tg-yw4l">Termin</th>
    <th class="tg-yw4l">Prowadzący</th>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-20b</td>
    <td class="tg-yw4l">niemiecki / B1.1</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Okulewicz Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-20a</td>
    <td class="tg-yw4l">niemiecki / B1.1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Rzeminski Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-21c</td>
    <td class="tg-yw4l">niemiecki / B2.1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Zgondek Piotr</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-21b</td>
    <td class="tg-yw4l">niemiecki / B2.1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Kania Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-21a</td>
    <td class="tg-yw4l">niemiecki / B2.1</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Radomska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-22e</td>
    <td class="tg-yw4l">niemiecki / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-22d</td>
    <td class="tg-yw4l">niemiecki / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Frymar Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-22c</td>
    <td class="tg-yw4l">niemiecki / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Garga Maria</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-22b</td>
    <td class="tg-yw4l">niemiecki / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Soltys Dorota</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-22a</td>
    <td class="tg-yw4l">niemiecki / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Izykowska-Staruch Marta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-23a</td>
    <td class="tg-yw4l">niemiecki / C1.1</td>
    <td class="tg-yw4l">(cz) 18:45-20:15, (wt) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Lazowska KrystynaMgr Strach Jan</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-24a</td>
    <td class="tg-yw4l">niemiecki / C1.2</td>
    <td class="tg-yw4l">(pn) 18:45-20:15, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Lazowska KrystynaMgr Strach Jan</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62z</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62y</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62x</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62w</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62v</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62t</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62s</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62r</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62q</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (pt) 11:15-12:45</td>
    <td class="tg-yw4l">Dr Szela Monika</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62p</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Dr Szela Monika</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62o</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62n</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62m</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 18:45-20:15, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62l</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62k</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62j</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(sr) 11:15-12:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62h</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62f</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 18:45-20:15, (pt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62e</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62d</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62c</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pn) 18:45-20:15, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62b</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62am</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62ag</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (pt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62af</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pt) 15:15-16:45</td>
    <td class="tg-yw4l">Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62ae</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Dr Zwiefka Maria</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62ad</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(sr) 15:15-16:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62ac</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62ab</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62aa</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-62a</td>
    <td class="tg-yw4l">angielski / B2.1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50z</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50y</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50x</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50w</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Hamryszak-Sierpowska Marta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50v</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50u</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50t</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Gwizdala Grazyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50s</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50r</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50q</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Grygorowicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50p</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(sr) 15:15-16:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50o</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50n</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Golka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50m</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50l</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50k</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50j</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Mirowska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50i</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50h</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50g</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Gierczak-Bujak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50f</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50e</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ds</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dr</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Dr Zwiefka MariaMgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dq</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (pt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dp</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50do</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Wiszniowska Zuzanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dn</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dm</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Wieruszewska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dl</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Wardynska Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dk</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dj</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Trzyna Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50di</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dh</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Tomala Malgorzata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dg</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50df</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Sliwerska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50de</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Dr Szela Monika</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dd</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Szczepanowska Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50dc</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50db</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50da</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50d</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cz</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Szczawinska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cy</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (pt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cx</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Staszewska Teresa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cw</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cv</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Staroniewicz Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cu</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ct</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 18:45-20:15, (pt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cs</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Rozwadowski Dominik</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cr</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cp</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50co</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Rogulska Paulina</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cn</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(sr) 07:30-09:00, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Pytel Dorota</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cl</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ck</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cj</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Piotrowska Kinga</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ch</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cg</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cf</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ce</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Mroczka Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cd</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(sr) 17:05-18:35, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cc</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50cb</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ca</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Medrecka-Kondak Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50c</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Florczyk Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bz</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50by</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(sr) 11:15-12:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bx</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Mazurkiewicz Alicja</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bw</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bv</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bu</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (pt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bt</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Martynowicz Katarzyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bs</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50br</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bq</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Licznerska Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bp</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bo</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bn</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bm</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Kuzniak Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bl</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(sr) 18:45-20:15, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bk</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bj</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Krzos Agnieszka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bi</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (pt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bh</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (pt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bg</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bf</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Krawczenko Walentyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50be</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bd</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pn) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bc</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Koszutska Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50bb</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Kasprzak Renata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ba</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50b</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50az</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ay</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ax</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (pt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Jaskowska-Derechowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50aw</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50av</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50au</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (pn) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Holowko Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50at</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ar</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Henkie Justyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50aq</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ap</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Dudzinska Jolanta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50an</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Derechowski Janusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50am</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50al</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ak</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50aj</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ai</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ah</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Baranska-Szczepaniak Agata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50af</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ae</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Bogusz-Broy Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ad</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ac</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50ab</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (pn) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Bednarski Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50aa</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-50a</td>
    <td class="tg-yw4l">angielski / B2.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Baka Barbara</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63z</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63y</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63x</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63w</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Dr Wieckowska Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63v</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63u</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Neary Alan</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63t</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Neary Alan</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63s</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Zajaczkowska Malgorzata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63r</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pn) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63q</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63p</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63o</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Tyszkiewicz Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63n</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(sr) 11:15-12:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63m</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63l</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63k</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 13:15-14:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Morawska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63j</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63i</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63h</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63g</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63f</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Mally Lukasz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63e</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63d</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (wt) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Kondro Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63c</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Koszutska IzabelaMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63b</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Koszutska IzabelaMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63ac</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Penderecka-Mosiek Izabela</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63ab</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 17:05-18:35, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63aa</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Wojcieszyn Adriana</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-63a</td>
    <td class="tg-yw4l">angielski / C1.1</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Koszutska IzabelaMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64s</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Fyall MichaelMgr Romanczuk Urszula</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64r</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Kondro MagdalenaMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64q</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (pt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Kondro MagdalenaMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64p</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Kasprzak RenataMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64o</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Kasprzak RenataMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64n</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Kasprzak RenataMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64m</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Kasprzak RenataMgr Wolf John</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64l</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Fyall MichaelMgr Morawska Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64k</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64j</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64i</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64h</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64g</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64f</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (pn) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Derechowski JanuszMgr Fyall Michael</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64e</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Brzózka AleksanderMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64d</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pn) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Brzózka AleksanderMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64c</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Brzózka AleksanderMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64b</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Brzózka AleksanderMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-64a</td>
    <td class="tg-yw4l">angielski / C1.2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Brzózka AleksanderMgr Thomas Peter</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10u</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Frankiewicz IwonaMgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10t</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Garga MariaMgr Okulewicz Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10s</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Brocka BeataMgr Dlugosz Zygmunt</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10r</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Radomska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10q</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Kania Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10p</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Kania Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10o</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Frymar Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10n</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10m</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Dlugosz Zygmunt</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10l</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Rzeminski Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10k</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Rzeminski Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10j</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10i</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Grusiecka Joanna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10h</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Zgondek Piotr</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10g</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Frankiewicz Iwona</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10f</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Frymar Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10e</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Brocka Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10d</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Bloch Anna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10c</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 07:30-09:00, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Okulewicz Krzysztof</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10b</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Doc. dr Modrzycka Irina</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-10a</td>
    <td class="tg-yw4l">niemiecki / A1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 18:45-20:15</td>
    <td class="tg-yw4l">Mgr Strach Jan</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18g</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18f</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18e</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(pn) 11:15-12:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Stanisz Mariusz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18d</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18c</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18b</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Paron Zofia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-18a</td>
    <td class="tg-yw4l">francuski / A1</td>
    <td class="tg-yw4l">(pt) 11:15-12:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Dmowska Ewa</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29i</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(pt) 09:15-10:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Praclawska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29h</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29g</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(cz) 07:30-09:00, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29f</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29e</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(pn) 13:15-14:45, (sr) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29d</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Setkowicz Katarzyna</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29c</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(cz) 17:05-18:35, (pn) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Skowronek Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29b</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Skowronek Aleksandra</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-29a</td>
    <td class="tg-yw4l">hiszpanski / A1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Bednarczuk Jacek</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-52b</td>
    <td class="tg-yw4l">japonski / A1</td>
    <td class="tg-yw4l">(cz) 18:45-20:15, (wt) 15:15-16:45</td>
    <td class="tg-yw4l">Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-52a</td>
    <td class="tg-yw4l">japonski / A1</td>
    <td class="tg-yw4l">(pn) 15:15-16:45, (sr) 17:05-18:35</td>
    <td class="tg-yw4l">Dr Ota Toyotaka</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-55e</td>
    <td class="tg-yw4l">rosyjski / A1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (wt) 11:15-12:45</td>
    <td class="tg-yw4l">Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-55d</td>
    <td class="tg-yw4l">rosyjski / A1</td>
    <td class="tg-yw4l">(cz) 13:15-14:45, (wt) 09:15-10:45</td>
    <td class="tg-yw4l">Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-55c</td>
    <td class="tg-yw4l">rosyjski / A1</td>
    <td class="tg-yw4l">(cz) 11:15-12:45, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Klyus Julia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-55b</td>
    <td class="tg-yw4l">rosyjski / A1</td>
    <td class="tg-yw4l">(pn) 09:15-10:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Lesiak Natalia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-51a</td>
    <td class="tg-yw4l">hiszpanski / A2</td>
    <td class="tg-yw4l">(pn) 17:05-18:35, (sr) 07:30-09:00</td>
    <td class="tg-yw4l">Mgr Zalewska Magdalena</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-17b</td>
    <td class="tg-yw4l">niemiecki / A2</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 17:05-18:35</td>
    <td class="tg-yw4l">Mgr Dlugosz Zygmunt</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-17a</td>
    <td class="tg-yw4l">niemiecki / A2</td>
    <td class="tg-yw4l">(pt) 07:30-09:00, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Radomska Elzbieta</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-65a</td>
    <td class="tg-yw4l">rosyjski / A2</td>
    <td class="tg-yw4l">(cz) 09:15-10:45, (wt) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Lesiak Natalia</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-61a</td>
    <td class="tg-yw4l">angielski / B1.1</td>
    <td class="tg-yw4l">(pt) 15:15-16:45, (sr) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Czachorowska Beata</td>
  </tr>
  <tr>
    <td class="tg-yw4l">L00-70a</td>
    <td class="tg-yw4l">angielski /C1.1 Human.</td>
    <td class="tg-yw4l">(cz) 15:15-16:45, (pn) 13:15-14:45</td>
    <td class="tg-yw4l">Mgr Brzózka Aleksander</td>
  </tr>
</table>
