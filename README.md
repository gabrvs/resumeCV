# resumeCV

Dokumentacja Wymagań Projektowych (Product Backlog)
Nazwa projektu: Interaktywny Generator CV
Metodyka: Scrum / Agile
Cel projektu: Stworzenie aplikacji webowej umożliwiającej łatwe i intuicyjne generowanie profesjonalnych życiorysów z opcją eksportu do pliku PDF oraz automatycznego tłumaczenia.

1. Role w projekcie (Scrum Team)
W projekcie szkolnym warto zaznaczyć, kto pełni jaką rolę (możesz przypisać tu nazwiska członków grupy).

Product Owner (Właściciel Produktu): [Imię i Nazwisko] – dba o wizję produktu, zarządza wymaganiami (Backlogiem) i ustala priorytety zadań.

Scrum Master: [Imię i Nazwisko] – pilnuje poprawności procesu Scrum, pomaga zespołowi usuwać przeszkody i facylituje spotkania.

Development Team (Zespół Deweloperski): [Imiona i Nazwiska] – programiści i projektanci odpowiedzialni za techniczne dostarczenie działającej aplikacji webowej.

2. Epiki i Historyjki Użytkownika (User Stories)
Wymagania zostały podzielone na większe moduły (Epiki), a następnie na mniejsze, realizowalne zadania z perspektywy użytkownika końcowego.

Epic 1: Zarządzanie danymi personalnymi i edukacją
Ten moduł odpowiada za formularze i interfejs do wprowadzania danych przez kandydata.

US 1.1: Podstawowe dane i zdjęcie

Jako kandydat szukający pracy, chcę wprowadzić moje dane kontaktowe (imię, nazwisko, email, telefon) oraz wgrać zdjęcie profilowe, aby rekruter mógł się ze mną skontaktować i rozpoznać mnie na rozmowie.

Kryteria akceptacji:

Formularz zawiera pola tekstowe dla imienia, nazwiska, emaila i telefonu.

System waliduje poprawność adresu email (np. obecność znaku "@") oraz format numeru telefonu.

Użytkownik może wgrać plik graficzny (JPG/PNG), a aplikacja automatycznie go kadruje do formatu zdjęcia w CV.

US 1.2: Wykształcenie i listy rozwijalne

Jako użytkownik, chcę dodawać kolejne etapy wykształcenia za pomocą interaktywnych list rozwijalnych (podział na szkoły wyższe, średnie itp.), aby proces wypełniania CV był szybki i zminimalizował ryzyko literówek.

Kryteria akceptacji:

Istnieje przycisk "Dodaj wykształcenie".

Typ szkoły wybierany jest z predefiniowanej listy (np. Wyższe, Średnie, Podstawowe, Inne).

Użytkownik może wpisać nazwę placówki, kierunek i lata nauki.

US 1.3: Doświadczenie i umiejętności

Jako kandydat, chcę mieć osobne sekcje na dodanie doświadczenia zawodowego oraz umiejętności twardych i miękkich, aby czytelnie zaprezentować moje kompetencje.

Kryteria akceptacji:

Sekcja doświadczenia pozwala na dodanie stanowiska, nazwy firmy, okresu zatrudnienia oraz opisu obowiązków.

Sekcja umiejętności jest podzielona na dwie kategorie: "Miękkie" i "Twarde".

Umiejętności można dodawać dynamicznie w formie małych "tagów" w interfejsie.

US 1.4: Znajomość języków obcych

Jako użytkownik, chcę wybierać języki obce i poziom ich znajomości z ograniczonej listy rozwijalnej, aby moje CV było ustandaryzowane.

Kryteria akceptacji:

Formularz posiada pole "Wybierz język" z listą najpopularniejszych języków.

Formularz posiada pole "Poziom" ze standardową skalą (A1, A2, B1, B2, C1, C2, Ojczysty).

Epic 2: Personalizacja i Generowanie Dokumentu
Ten moduł odpowiada za wygląd końcowy CV oraz jego eksport.

US 2.1: Wybór szablonu graficznego

Jako użytkownik, chcę mieć możliwość wyboru jednego z co najmniej trzech gotowych szablonów CV, aby dopasować wygląd dokumentu do charakteru branży, do której aplikuję.

Kryteria akceptacji:

Aplikacja oferuje 3 różne widoki (np. Klasyczny, Nowoczesny, Kreatywny).

Zmiana szablonu w aplikacji natychmiast aktualizuje podgląd CV na żywo.

Przełączenie szablonu nie powoduje utraty wcześniej wprowadzonych danych.

US 2.2: Eksport do PDF

Jako kandydat, chcę wygenerować i pobrać moje gotowe CV w formacie PDF, aby móc je bezpiecznie wysłać pracodawcy bez obaw o "rozsypanie się" formatowania.

Kryteria akceptacji:

W interfejsie znajduje się wyraźny przycisk "Pobierz PDF".

Wygenerowany plik zachowuje dokładny wygląd wybrany w podglądzie (wysoka jakość, prawidłowe czcionki i marginesy).

Epic 3: Automatyzacja i funkcje zaawansowane
Ten moduł zawiera dodatkowe udogodnienia dla użytkownika.

US 3.1: Automatyczne tłumaczenie CV

Jako kandydat aplikujący za granicę, chcę kliknięciem przetłumaczyć całe moje CV na język obcy, aby zaoszczędzić czas na ręcznym przepisywaniu życiorysu.

Kryteria akceptacji:

System posiada przycisk wywołujący tłumaczenie (np. na język angielski).

Tłumaczeniu ulegają stałe elementy szablonu (np. nagłówki sekcji: "Education" zamiast "Wykształcenie") oraz treści wprowadzone przez użytkownika.

Użytkownik ma możliwość ręcznej korekty przetłumaczonego tekstu przed pobraniem pliku.

3. Wymagania Niefunkcjonalne
Te punkty definiują ogólną jakość i ramy technologiczne projektu, co jest bardzo cenione przez wykładowców w dokumentacji.

Dostępność: Aplikacja musi działać w przeglądarce internetowej (Web App) bez konieczności instalacji na komputerze.

Responsywność (RWD): Interfejs wprowadzania danych musi działać poprawnie na urządzeniach mobilnych, jak i na komputerach stacjonarnych.

Bezpieczeństwo: Dane wprowadzane przez użytkownika nie mogą być bez jego wiedzy trwale przechowywane na serwerze po zakończeniu sesji (lub powinny być w pełni anonimizowane/szyfrowane).

Wydajność: Generowanie pliku PDF nie powinno trwać dłużej niż 5 sekund od momentu kliknięcia przycisku.
