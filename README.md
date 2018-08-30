# vue-planning
Planning poker in Vue

Pierwsze okno składa się z:
- wprowdzeniu loginu (zbudowaniu modelu UserDetails)
- wprowadzeniu identyfikatora kanału

U góry w prawym górnym roku - jest HamburgerMenu, w którym są dwie opcje - stwórz ankiete, stwórz planowanie.

Po wprowadzeniu loginu i identyfikatora kanału - trafiamy do odpowiedniego kanału, który jest ankietą lub planowaniem.
Dla planowania:
 - widzimy treść story (opis) 
 - widzimy wszystkie możliwe odpowiedzi (w tym wypadku karty z numerami fibo..)

Dla ankiety:
 - widzimy długii ekran - na którym jest treść pytania i możliwe odpowiedzi i następne pytanie i następne odpowiedzi.


Po wybraniu TWORZENIA PLANOWANIA:
 - widać miejsce na wprowadzenie loginu (ewentualnie dodatkowych pól z modelu UserDetail)
 - nazwe grupy/kanału - która będzie dostępna pod linkiem i wyświetlimy QRCode - by uczestnicy mogli się zalogować (takie ułatwienie)
Po wybraniu - start planowania:
 - Po lewej panel z listą zalogowanych, a na środku Pole do wpisania treści STORY - opisu oraz zakryte karty z nickami pod nimi - podobnie jak w tej wersji, którą testowaliśmy
 

