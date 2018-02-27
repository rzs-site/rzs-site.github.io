# RZS-site

Do lokalnego generowania strony wymagane są: Ruby 2.5+ oraz bundler (`gem install bundler`).
Po pobraniu kopii repozutorum należy na jej roocie uruchomić `bundle exec jekyll serve`.
Strona pojawi sie wtedy na localhost:4000

## Dodawanie przedmiotu (jednostronowy)

Aby dodać do strony nowy przedmiot jednostronowy należy utworzyć plik index.md w odpowiedniej lokalizaji (np jeśli skrót nazwy naszego przemiotu to xyz i jest to przedmiot z piątego semestru, ścieżka będzie wyglądać tak: `sems/sem5/xyz/index.md`). W pliku tym dodajemy nagłówek:

```yml
---
layout: default
---
Tytuł strony
---
Treść
```

Następnie musimy jeszcze dodać przedmiot do głównej nawigacji. W tym celu dodajemy do odpowiedniego semsetru:

```yml
- page: Pełna nazwa przedmiotu
  url: ścieżka_do_pliku/index.md
```

Jeśli nie ma na liście potrzebnego semstru dodajemy go dodajęc w odpowiednim miejscu (kolejność wpisów jest taka sama jak kolejność w menu) oraz późnej dodajemy do niego nasz przedmiot:

```yml
- title: Semestr NUMER_SEMESTRU
  subfolderitems:
    - page: Pełna nazwa przedmiotu
    url: ścieżka_do_pliku/index.md
```

## Dodawanie przedmiotu (wielostronowy)

Opis pojawi się wkrótce...

## TODO:

* Opis powyżej
* Czcionka menu powinna się zmniejszać przy szerokościach od 800 do 950 pikseli
* Menu mobline chowa się ale zostaje z tyłu i nadal jest aktywne

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

