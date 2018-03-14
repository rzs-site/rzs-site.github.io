---
layout: default
use_math: true
use_highlight: true
---

Architektura Komputerów i Systemy Operacyjne
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$.getJSON('http://api.icndb.com/jokes/random?limitTo=[nerdy]', function(data) {
	console.log(data);
	document.getElementById("chuck").innerHTML = data.value.joke;
});
</script>
	
{::options parse_block_html="true" /}
	<div class="math-box">
		<p id="chuck"></p>
	</div>
{::options parse_block_html="false" /}

### Opis przedmiotu

Nikt nie każe pisać w asmeblerze.

### Wymagania wstępne

* podstawy obsługi Linuxa (WDIiP)
* język ANSI C (WDIiP)
* macierze (AzGA)

### O projekcie

Kompendium AKiSO jest naszym najbardziej rozbudowanym projektem, dlatego w przeciwieństwie do pozostałych przedmiotów, notatki są obecnie dostępne wyłącznie jako plik PDF (wygodniejszy do druku i czytania przy tej objętości materiału).
* [Architektura Komputerów i Systemy Operacyjne - skrypt (v4.2)](/pdfs/sem3/akiso-skrypt.pdf)