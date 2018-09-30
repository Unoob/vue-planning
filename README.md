# vue-planning
Planning poker in Vue

Pierwsze okno składa się z:
- wprowadzeniu loginu (zbudowaniu modelu UserDetails)
- wprowadzeniu identyfikatora kanału
- przyciski stwórz kanał i dołącz

### Stworzony kanał
Widoczne pole do wpisania opisu zadania oraz zasłonięte karty wszystkich użytkowników, którzy dołączyli do kanału.

### Dołączenie do kanału
Widoczne pole, w którym będzie wyświetlany opis zadania i karty ze zdefiniowanymi wartościami.

### TODO
- [ ] Uniemożliwić stworzenie kanału, który już istnieje
- [ ] Usunięcie użytkownika z kanału przez gospodarza
- [x] Usunięcie użytkownika z kanału, gdy ten zamknie/odświeży kartę przeglądarki
- [ ] Dodać wybór możliwych odpowiedzi z predefiniowanej listy, np. "A,B,C", ranking, różne ciągi liczbowe
- [ ] Dodać możliwość definicji własnych odpowiedzi
- [ ] Dodać możliwość definicji kolekcji jednoczesnych pytań
- [ ] Prezentacja uzyskanych odpowiedzi. Pojedynczo dla każdego użytkownika lub grupować względem odpowiedzi.
- [ ] Zablokowanie zmiany wyboru, gdy karty zostały odkryte
- [ ] Opuszczenie kanału przez gospodarza zamyka kanał
- [x] Dodanie routingu dla linku z numerem kanału
- [ ] Wyświetlenie nazwy/nr kanału na belce
- [ ] QR Code z linkiem do kanału
- [ ] Oczekiwanie przez użytkownika przed "stworzeniem" kanału
- [ ] Prezentacja średnich z wyników
- [ ] Oznaczenie skrajnych wyników w przypadku odchyłów większych niż sąsiadujące wartości
