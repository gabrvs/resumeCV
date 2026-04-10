# Interaktywny Generator CV

Aplikacja webowa umożliwiająca tworzenie nowoczesnego, interaktywnego CV z podglądem na żywo, wyborem szablonu, automatycznym tłumaczeniem oraz eksportem do pliku PDF.

---

## Spis treści

- [Opis projektu](#opis-projektu)
- [Cel projektu](#cel-projektu)
- [Zakres funkcjonalny](#zakres-funkcjonalny)
- [Role w projekcie](#role-w-projekcie)
- [Wymagania funkcjonalne](#wymagania-funkcjonalne)
- [Wymagania niefunkcjonalne](#wymagania-niefunkcjonalne)
- [Backlog produktu](#backlog-produktu)
- [Kryteria akceptacji produktu](#kryteria-akceptacji-produktu)
- [Propozycja technologii](#propozycja-technologii)
- [Status projektu](#status-projektu)

---

## Opis projektu

Interaktywny Generator CV to aplikacja webowa stworzona w celu ułatwienia użytkownikowi przygotowania profesjonalnego życiorysu. System pozwala wprowadzać dane osobowe, wykształcenie, doświadczenie, umiejętności oraz znajomość języków, a następnie generować gotowy dokument CV w wybranym szablonie.

Projekt został przygotowany jako dokumentacja szkolna z uwzględnieniem podejścia Agile/Scrum, dzięki czemu cały proces tworzenia aplikacji jest uporządkowany i czytelny.

---

## Cel projektu

Celem projektu jest stworzenie aplikacji, która:

- umożliwia szybkie i wygodne tworzenie CV,
- porządkuje dane użytkownika w przejrzysty sposób,
- oferuje wybór kilku gotowych szablonów,
- pozwala eksportować CV do PDF,
- wspiera automatyczne tłumaczenie CV na język obcy,
- wykorzystuje intuicyjny formularz z listami rozwijalnymi.

---

## Zakres funkcjonalny

Aplikacja umożliwia użytkownikowi:

- wpisanie imienia i nazwiska,
- dodanie danych kontaktowych,
- wpisanie adresu e-mail,
- podanie numeru telefonu,
- dodanie zdjęcia profilowego,
- uzupełnienie wykształcenia,
- uzupełnienie doświadczenia zawodowego,
- wpisanie umiejętności twardych,
- wpisanie umiejętności miękkich,
- określenie znajomości języków obcych,
- wybór jednego z minimum 3 szablonów CV,
- automatyczne tłumaczenie CV na język obcy,
- wygenerowanie gotowego dokumentu PDF.

---

## Role w projekcie

### Product Owner
Osoba odpowiedzialna za wizję produktu, ustalanie priorytetów oraz zarządzanie backlogiem.

**Osoba:** ....................................

### Scrum Master
Osoba odpowiedzialna za wspieranie zespołu, pilnowanie procesu Scrum oraz organizację pracy.

**Osoba:** ....................................

### Zespół developerski
Osoby odpowiedzialne za projektowanie, implementację, testowanie i dokumentację aplikacji.

**Osoby:** ....................................

---

## Wymagania funkcjonalne

### 1. Dane osobowe i kontaktowe
Użytkownik powinien mieć możliwość wprowadzenia podstawowych danych osobowych.

**System powinien umożliwiać:**
- wpisanie imienia,
- wpisanie nazwiska,
- wpisanie adresu e-mail,
- wpisanie numeru telefonu,
- dodanie zdjęcia profilowego.

### 2. Sekcja wykształcenia
Użytkownik powinien mieć możliwość dodawania informacji o wykształceniu.

**Wymagania:**
- użytkownik może dodać wiele pozycji wykształcenia,
- typ szkoły wybierany jest z listy rozwijalnej,
- lista może zawierać przykładowo:
  - podstawowe,
  - średnie,
  - wyższe,
  - inne,
- po wyborze typu szkoły użytkownik może uzupełnić nazwę szkoły, kierunek i lata nauki.

### 3. Sekcja doświadczenia
Użytkownik powinien mieć możliwość dodawania doświadczenia zawodowego.

**Wymagania:**
- możliwość dodania stanowiska,
- możliwość dodania nazwy firmy,
- możliwość dodania okresu zatrudnienia,
- możliwość wpisania opisu obowiązków.

### 4. Umiejętności
Aplikacja powinna rozdzielać umiejętności na dwie osobne grupy.

**Kategorie:**
- umiejętności twarde,
- umiejętności miękkie.

### 5. Języki obce
Użytkownik powinien wybierać język i poziom znajomości z list rozwijalnych.

**Przykład:**
- język: angielski, niemiecki, francuski, hiszpański, włoski,
- poziom: A1, A2, B1, B2, C1, C2, ojczysty.

### 6. Szablony CV
Aplikacja powinna oferować co najmniej 3 różne szablony wizualne.

**Przykładowe szablony:**
- Klasyczny,
- Nowoczesny,
- Kreatywny.

### 7. Tłumaczenie CV
Aplikacja powinna umożliwiać automatyczne tłumaczenie treści CV na wybrany język obcy.

**Wymagania:**
- tłumaczenie nagłówków sekcji,
- tłumaczenie treści wpisanych przez użytkownika,
- możliwość ręcznej korekty po tłumaczeniu.

### 8. Eksport do PDF
Aplikacja powinna umożliwiać wygenerowanie i pobranie CV w formacie PDF.

**Wymagania:**
- przycisk generowania PDF,
- zachowanie wybranego szablonu,
- poprawne formatowanie dokumentu po eksporcie.

---

## Wymagania niefunkcjonalne

### Użyteczność
- interfejs powinien być prosty i intuicyjny,
- formularz powinien być czytelny,
- użytkownik powinien widzieć podgląd CV podczas edycji.

### Responsywność
- aplikacja powinna działać na komputerach,
- aplikacja powinna działać na tabletach,
- aplikacja powinna działać na smartfonach.

### Wydajność
- aplikacja powinna działać płynnie,
- generowanie PDF nie powinno trwać zbyt długo,
- przełączanie szablonów powinno odbywać się bez przeładowania strony.

### Bezpieczeństwo
- dane użytkownika powinny być przetwarzane w bezpieczny sposób,
- formularze powinny być zabezpieczone przed błędnymi danymi,
- system powinien walidować e-mail oraz numer telefonu.

---

## Backlog produktu

| ID | Epic | User Story | Priorytet |
|---|---|---|---|
| US-01 | Dane osobowe | Jako użytkownik chcę dodać imię, nazwisko, e-mail i telefon, aby uzupełnić podstawowe dane w CV. | Wysoki |
| US-02 | Zdjęcie | Jako użytkownik chcę dodać zdjęcie profilowe, aby CV wyglądało bardziej profesjonalnie. | Średni |
| US-03 | Wykształcenie | Jako użytkownik chcę dodawać wykształcenie z użyciem list rozwijalnych, aby szybciej wypełnić formularz. | Wysoki |
| US-04 | Doświadczenie | Jako użytkownik chcę dodawać doświadczenie zawodowe, aby pokazać przebieg kariery. | Wysoki |
| US-05 | Umiejętności | Jako użytkownik chcę dodać umiejętności twarde i miękkie, aby lepiej zaprezentować swoje kompetencje. | Wysoki |
| US-06 | Języki | Jako użytkownik chcę wybierać języki obce oraz poziom znajomości z listy, aby dane były uporządkowane. | Średni |
| US-07 | Szablony | Jako użytkownik chcę wybrać jeden z 3 szablonów CV, aby dopasować wygląd dokumentu. | Wysoki |
| US-08 | Tłumaczenie | Jako użytkownik chcę przetłumaczyć CV na język obcy, aby aplikować do zagranicznych pracodawców. | Średni |
| US-09 | PDF | Jako użytkownik chcę pobrać CV jako PDF, aby wysłać gotowy dokument rekruterowi. | Wysoki |

---

## Kryteria akceptacji produktu

### Formularz danych
- użytkownik może uzupełnić wszystkie podstawowe pola,
- system sprawdza poprawność e-maila,
- system sprawdza poprawność numeru telefonu.

### Wykształcenie
- użytkownik może wybrać typ szkoły z listy,
- użytkownik może dodać więcej niż jedną szkołę,
- dane wyświetlają się poprawnie w podglądzie CV.

### Języki obce
- użytkownik wybiera język z gotowej listy,
- użytkownik wybiera poziom znajomości z gotowej listy,
- dane zapisują się poprawnie w formularzu.

### Szablony
- system zawiera minimum 3 szablony,
- zmiana szablonu aktualizuje podgląd,
- dane użytkownika nie znikają po zmianie szablonu.

### Tłumaczenie
- system tłumaczy nagłówki sekcji,
- system tłumaczy treść wpisaną przez użytkownika,
- użytkownik może poprawić tłumaczenie ręcznie.

### PDF
- plik PDF generuje się poprawnie,
- dokument zachowuje układ wybranego szablonu,
- pobrany plik nadaje się do wysłania pracodawcy.

---

## Propozycja technologii

### Frontend
- HTML
- CSS
- JavaScript
- React lub Vue

### Backend
- Node.js / Express  
lub
- Python / Flask

### Dodatkowe narzędzia
- biblioteka do generowania PDF,
- API do tłumaczeń,
- system kontroli wersji Git,
- GitHub do przechowywania repozytorium.

---

## Status projektu

**Etap:** Analiza wymagań i przygotowanie dokumentacji projektowej

### Planowane etapy prac
1. Analiza wymagań.
2. Przygotowanie makiety interfejsu.
3. Implementacja formularza.
4. Dodanie szablonów CV.
5. Implementacja tłumaczenia.
6. Implementacja eksportu PDF.
7. Testy.
8. Poprawki i finalizacja projektu.

---

## Autorzy

- Kamil Jarmuż
- Gabriel Jarosz
