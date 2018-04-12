---
layout: acc_layout
toc: prolog
use_math: true
---

# Programowanie w Logice - Lista 5 (autor: Rafał Sawicki)

## Zadanie 1 
Zauwazmy, ze zaden "legalny" znak uzywany w tym jezyku nie nalezy do dwóch grup tokenów.
Wobec tego mozna zastosowac podejscie zachlanne, w którym czytamy pierwszy znak. Zalózmy, ze okazuje sie, iz jest on mala litera(czyli pewnie bedzie slowo kluczowe). Nastepnie czytamy kolejne znaki tak dlugo, az nie napotkamy znaku innego typu(inny niz mala litera). Wtedy sprawdzamy czy utworzone do tej pory slowo jest slowem kluczowym i rozpoczynamy czytanie znaków nastepnego typu. UWAGA! Znaki biale mozna ignorowac (mozna przyjac, ze program bez bialych znaków jest programem poprawnym skladniowo)

## Zadanie 2
### Uwaga 1
Dla n parzystych nalezy zaczac od rysowania bialego pola.
### Uwaga 2
Kolor pola zalezy od parzystosci wyrazenia (i+j), gdzie i to numer wiersza a j kolumny.

## Zadanie 3
### Uwaga 1
"Prosze sobie wymyslic jak dostac sie do poprzedniego elementu w liscie jednokierunkowej w stalym czasie" ~P.Kobylanski
### Uwaga 2
Mozna wykorzystac 2 stosy. Idac w dól na stosy odpowiednio odkladamy lewych braci i braci prawych.
### Uwaga 3
Sposób przejscia w góre/dól zostawiam jako proste zadanie dla czytelnika.